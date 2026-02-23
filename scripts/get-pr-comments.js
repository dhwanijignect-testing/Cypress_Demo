#!/usr/bin/env node

/**
 * get-pr-comments.js
 * // Script to fetch GitHub PR comments in VSCode

 * 
 * Fetches GitHub PR review comments and outputs them in a format
 * that VSCode can parse to jump directly to the file and line.
 * 
 * Usage:
 *   node scripts/get-pr-comments.js
 * 
 * Required environment variables (set in .env or your shell):
 *   GH_TOKEN     - Your GitHub Personal Access Token
 *   GH_REPO      - Repository in "owner/repo" format (e.g. "myorg/Cypress_ToolsQA")
 *   GH_PR_NUMBER - The PR number to fetch comments from
 *   PROJECT_ROOT - (Optional) Absolute path to project root. Defaults to cwd.
 */

const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------------
// Load .env if present
// ---------------------------------------------------------------------------
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const TOKEN    = process.env.GH_TOKEN;
const REPO     = process.env.GH_REPO;       // e.g. "myorg/Cypress_ToolsQA"
const PR       = process.env.GH_PR_NUMBER;  // e.g. "12"
const ROOT     = process.env.PROJECT_ROOT || process.cwd();

if (!TOKEN || !REPO || !PR) {
  console.error('❌ Missing required environment variables.');
  console.error('   Please set GH_TOKEN, GH_REPO, and GH_PR_NUMBER in your .env file or shell.');
  console.error('');
  console.error('   Example .env:');
  console.error('   GH_TOKEN=ghp_xxxxxxxxxxxx');
  console.error('   GH_REPO=myorg/Cypress_ToolsQA');
  console.error('   GH_PR_NUMBER=12');
  process.exit(1);
}

const [OWNER, REPO_NAME] = REPO.split('/');

// ---------------------------------------------------------------------------
// GitHub REST API helpers
// ---------------------------------------------------------------------------
async function ghFetch(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'get-pr-comments-vscode'
    }
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${body}`);
  }
  return res.json();
}

async function getAllPages(endpoint) {
  let page = 1;
  const allItems = [];
  while (true) {
    const sep = endpoint.includes('?') ? '&' : '?';
    const items = await ghFetch(`${endpoint}${sep}per_page=100&page=${page}`);
    if (!Array.isArray(items) || items.length === 0) break;
    allItems.push(...items);
    if (items.length < 100) break;
    page++;
  }
  return allItems;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  console.log(`\n🔍 Fetching PR comments for ${REPO}#${PR}...\n`);

  // 1. PR-level comments (the general conversation thread)
  const issueComments = await getAllPages(
    `/repos/${OWNER}/${REPO_NAME}/issues/${PR}/comments`
  );

  // 2. PR review inline / diff comments (code review comments with file + line)
  const reviewComments = await getAllPages(
    `/repos/${OWNER}/${REPO_NAME}/pulls/${PR}/comments`
  );

  // ---------------------------------------------------------------------------
  // Print PR-level (general) comments
  // ---------------------------------------------------------------------------
  if (issueComments.length > 0) {
    console.log('━'.repeat(70));
    console.log(`📝 General PR Comments (${issueComments.length})`);
    console.log('━'.repeat(70));
    for (const c of issueComments) {
      const date = new Date(c.created_at).toLocaleString();
      console.log(`\n👤 ${c.user.login}  •  ${date}`);
      console.log(`   ${c.body.replace(/\n/g, '\n   ')}`);
      console.log(`   🔗 ${c.html_url}`);
    }
    console.log('');
  }

  // ---------------------------------------------------------------------------
  // Print inline review comments (VSCode-clickable file:line format)
  // ---------------------------------------------------------------------------
  if (reviewComments.length > 0) {
    console.log('━'.repeat(70));
    console.log(`🔎 Inline Review Comments (${reviewComments.length})`);
    console.log('━'.repeat(70));
    console.log('(Click a file path in the VSCode terminal to jump to it)\n');

    // Group by file
    const byFile = {};
    for (const c of reviewComments) {
      if (!byFile[c.path]) byFile[c.path] = [];
      byFile[c.path].push(c);
    }

    for (const [filePath, comments] of Object.entries(byFile)) {
      const absPath = path.join(ROOT, filePath);
      console.log(`\n📄 ${filePath}`);

      for (const c of comments) {
        const line   = c.line ?? c.original_line ?? c.position ?? 0;
        const date   = new Date(c.created_at).toLocaleString();
        const author = c.user.login;

        // VSCode problem-matcher format: /abs/path:line:col - message
        // This makes the file path clickable in the terminal
        console.log(`\n  ${absPath}:${line}:1 - [${author}] ${c.body.split('\n')[0]}`);

        // Full comment body (indented)
        if (c.body.includes('\n')) {
          const rest = c.body.split('\n').slice(1).join('\n   ');
          console.log(`     ${rest}`);
        }

        console.log(`     👤 ${author}  •  ${date}  •  🔗 ${c.html_url}`);
      }
    }
    console.log('');
  }

  // ---------------------------------------------------------------------------
  // Summary
  // ---------------------------------------------------------------------------
  const total = issueComments.length + reviewComments.length;
  if (total === 0) {
    console.log('✅ No comments found on this PR.');
  } else {
    console.log('━'.repeat(70));
    console.log(`✅ Done. ${total} comment(s) total — ${issueComments.length} general, ${reviewComments.length} inline.`);
    console.log('━'.repeat(70));
  }
}

main().catch(err => {
  console.error(`❌ ${err.message}`);
  process.exit(1);
});
