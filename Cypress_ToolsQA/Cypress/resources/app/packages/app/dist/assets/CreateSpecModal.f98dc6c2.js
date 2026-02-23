import { d as defineComponent, a as computed, o as openBlock, Y as createElementBlock, x as renderSlot, X as normalizeClass, e as unref, B as createBaseVNode, aw as getRunnerConfigFromWindow, ax as useToggle, ay as commonjsGlobal, m as ref, q as watch, az as _, a3 as Fragment, a4 as renderList, t as toDisplayString, f as createTextVNode, aA as useElementSize, aB as shallowRef, v as lodash, aC as createStaticVNode, u as useI18n, C as createVNode, i as createCommentVNode, w as withCtx, h as _sfc_main$j, aD as __unplugin_components_0$2, g as gql, aE as useSpecStore, b as useMutation, aF as SpecFilter_SetPreferencesDocument, ag as useDebounce, aG as defineStore, aH as useRouter, j as useQuery, aI as RunAllSpecsDocument, aJ as RunAllSpecsDataDocument, c as createBlock, P as resolveDynamicComponent, aK as Card, aL as ScaffoldGeneratorStepOne_ScaffoldIntegrationDocument, s as onMounted, ao as normalizeStyle, aa as StandardModalFooter, aM as ShikiHighlight, aN as _sfc_main$k, a9 as __unplugin_components_1$1, aO as useVModels, aP as EmptyGenerator_MatchSpecFileDocument, aQ as EmptyGenerator_GenerateSpecDocument, aR as whenever, r as resolveComponent, Z as withModifiers, a0 as Input, a1 as __unplugin_components_1$2, aS as __unplugin_components_1$3, aT as _sfc_main$m, _ as _export_sfc, ap as withDirectives, aU as vModelText, an as isRef, aV as __unplugin_components_0$3, $ as __unplugin_components_0$4, aW as debouncedWatch, aX as createSlots, aq as vShow, aY as __unplugin_components_0$5, aZ as ComponentGeneratorStepOne_GenerateSpecDocument, a_ as ComponentGeneratorStepOneDocument, a$ as pushScopeId, b0 as popScopeId, b1 as decodeBase64Unicode, b2 as not, b3 as DialogOverlay, ab as _sfc_main$o } from "./index.ca5c273b.js";
import { _ as _sfc_main$l, b as _sfc_main$n } from "./SpecPatterns.08056d57.js";
const RUN_ALL_SPECS_KEY = "__all";
const RUN_ALL_SPECS = {
  name: "All E2E Specs",
  absolute: RUN_ALL_SPECS_KEY,
  relative: RUN_ALL_SPECS_KEY,
  baseName: RUN_ALL_SPECS_KEY,
  fileName: RUN_ALL_SPECS_KEY
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  props: {
    variant: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const colorClasses = {
      default: "bg-purple-100 text-purple-600",
      error: "bg-red-200 text-red-700"
    };
    const color = computed(() => {
      return colorClasses[props.variant];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("code", {
        class: normalizeClass(["rounded p-2px", unref(color)])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$j = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_2$g,
  _hoisted_3$d,
  _hoisted_4$b
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_5$5);
}
const __unplugin_components_0$1 = { name: "cy-action-record_x16", render: render$8 };
let platform;
const getPlatform = () => {
  if (!platform) {
    platform = getRunnerConfigFromWindow().platform;
  }
  return platform;
};
const getRegexSeparator = () => getPlatform() === "win32" ? /\\/ : /\//;
const getSeparator = () => getPlatform() === "win32" ? "\\" : "/";
function buildSpecTree(specs, root = { name: "", isLeaf: false, children: [], id: "", highlightIndexes: [] }) {
  specs.forEach((spec) => buildSpecTreeRecursive(spec.relative, root, spec));
  collapseEmptyChildren(root);
  return root;
}
function getHighlightIndexes(node) {
  var _a;
  if (!((_a = node.data) == null ? void 0 : _a.fuzzyIndexes)) {
    return [];
  }
  const { relative: relativeIndexes, baseName: baseNameIndexes } = node.data.fuzzyIndexes;
  if (node.isLeaf && baseNameIndexes.length > 0) {
    return baseNameIndexes;
  }
  const maxIndex = node.id.length - 1;
  const minIndex = maxIndex - node.name.length + 1;
  const res = relativeIndexes.filter((index) => index >= minIndex && index <= maxIndex);
  return res.map((idx) => idx - minIndex);
}
function buildSpecTreeRecursive(path, tree, data) {
  const [firstFile, ...rest] = path.split(getRegexSeparator());
  const id = tree.id ? [tree.id, firstFile].join(getSeparator()) : firstFile;
  const newNode = { name: firstFile, isLeaf: false, children: [], parent: tree, data, id, highlightIndexes: [] };
  if (rest.length < 1) {
    newNode.isLeaf = true;
    newNode.highlightIndexes = getHighlightIndexes(newNode);
    tree.children.push(newNode);
    return tree;
  }
  const foundChild = tree.children.find((child) => child.name === firstFile);
  if (foundChild) {
    buildSpecTreeRecursive(rest.join(getSeparator()), foundChild, data);
    return tree;
  }
  newNode.highlightIndexes = getHighlightIndexes(newNode);
  const newTree = buildSpecTreeRecursive(rest.join(getSeparator()), newNode, data);
  tree.children.push(newTree);
  return tree;
}
function collapseEmptyChildren(node) {
  for (const child of node.children) {
    collapseEmptyChildren(child);
  }
  if (node.isLeaf) {
    return;
  }
  if (node.parent && node.parent.parent && node.parent.children.length === 1) {
    node.parent.name = [node.parent.name, node.name].join(getSeparator());
    node.parent.id = [node.parent.id, node.name].join(getSeparator());
    node.parent.children = node.children;
    node.parent.highlightIndexes = getHighlightIndexes(node.parent);
  }
  return;
}
function collectRoots(node, acc = []) {
  if (!node || !node.parent) {
    return acc;
  }
  acc.push(node);
  collectRoots(node.parent, acc);
  return acc;
}
const useCollapsibleTreeNode = (rawNode, options, depth, parent) => {
  var _a;
  const { cache, expandInitially } = options;
  const treeNode = rawNode;
  const roots = parent ? collectRoots(parent) : [];
  const [expanded, toggle] = useToggle((_a = cache == null ? void 0 : cache.get(rawNode.id)) != null ? _a : !!expandInitially);
  const hidden = computed(() => {
    return !!roots.find((r) => r.expanded.value === false);
  });
  const wrappedToggle = (value) => {
    var _a2;
    const originalState = expanded.value;
    const newValue = toggle(value);
    if (!!cache && !hidden.value && ((_a2 = rawNode.children) == null ? void 0 : _a2.length)) {
      cache.set(rawNode.id, !originalState);
    }
    return newValue;
  };
  return {
    ...treeNode,
    depth,
    parent,
    hidden,
    expanded,
    toggle: wrappedToggle
  };
};
function buildTree(rawNode, options, acc = [], depth = 1, parent = null) {
  var _a;
  const node = useCollapsibleTreeNode(rawNode, options, depth, parent);
  acc.push(node);
  if ((_a = node.children) == null ? void 0 : _a.length) {
    for (const child of node.children) {
      buildTree(child, options, acc, depth + 1, node);
    }
  }
  return acc;
}
function sortTree(tree) {
  if (tree.children.length > 0) {
    tree.children = tree.children.sort((a, b) => {
      if (a.children.length === 0 && b.children.length === 0) {
        return a.name > b.name ? 1 : -1;
      }
      if (a.children.length === 0) {
        return 1;
      }
      if (b.children.length === 0) {
        return -1;
      }
      return a.name > b.name ? 1 : -1;
    });
    tree.children.forEach(sortTree);
  }
}
function useCollapsibleTree(tree, options = {}) {
  var _a;
  options.expandInitially = (_a = options.expandInitially) != null ? _a : true;
  sortTree(tree);
  const collapsibleTree = buildTree(tree, options);
  collapsibleTree.sort((a, b) => {
    if (a.parent === b.parent) {
      if (a.children.length && !b.children.length) {
        return -1;
      }
      return 0;
    }
    return 0;
  });
  return {
    tree: options.dropRoot ? collapsibleTree.slice(1) : collapsibleTree
  };
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fuzzysort = { exports: {} };
(function(module) {
  (function(root, UMD) {
    if (module.exports)
      module.exports = UMD();
    else
      root.fuzzysort = UMD();
  })(commonjsGlobal, function UMD() {
    function fuzzysortNew(instanceOptions) {
      var fuzzysort2 = {
        single: function(search, target, options) {
          if (!search)
            return null;
          if (!isObj(search))
            search = fuzzysort2.getPreparedSearch(search);
          if (!target)
            return null;
          if (!isObj(target))
            target = fuzzysort2.getPrepared(target);
          var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
          var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
          return algorithm(search, target, search[0]);
        },
        go: function(search, targets, options) {
          if (!search)
            return noResults;
          search = fuzzysort2.prepareSearch(search);
          var searchLowerCode = search[0];
          var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
          var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
          var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
          var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          if (options && options.keys) {
            var scoreFn = options.scoreFn || defaultScoreFn;
            var keys = options.keys;
            var keysLen = keys.length;
            for (var i = targetsLen - 1; i >= 0; --i) {
              var obj = targets[i];
              var objResults = new Array(keysLen);
              for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                var key = keys[keyI];
                var target = getValue(obj, key);
                if (!target) {
                  objResults[keyI] = null;
                  continue;
                }
                if (!isObj(target))
                  target = fuzzysort2.getPrepared(target);
                objResults[keyI] = algorithm(search, target, searchLowerCode);
              }
              objResults.obj = obj;
              var score = scoreFn(objResults);
              if (score === null)
                continue;
              if (score < threshold)
                continue;
              objResults.score = score;
              if (resultsLen < limit) {
                q.add(objResults);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (score > q.peek().score)
                  q.replaceTop(objResults);
              }
            }
          } else if (options && options.key) {
            var key = options.key;
            for (var i = targetsLen - 1; i >= 0; --i) {
              var obj = targets[i];
              var target = getValue(obj, key);
              if (!target)
                continue;
              if (!isObj(target))
                target = fuzzysort2.getPrepared(target);
              var result = algorithm(search, target, searchLowerCode);
              if (result === null)
                continue;
              if (result.score < threshold)
                continue;
              result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
              if (resultsLen < limit) {
                q.add(result);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (result.score > q.peek().score)
                  q.replaceTop(result);
              }
            }
          } else {
            for (var i = targetsLen - 1; i >= 0; --i) {
              var target = targets[i];
              if (!target)
                continue;
              if (!isObj(target))
                target = fuzzysort2.getPrepared(target);
              var result = algorithm(search, target, searchLowerCode);
              if (result === null)
                continue;
              if (result.score < threshold)
                continue;
              if (resultsLen < limit) {
                q.add(result);
                ++resultsLen;
              } else {
                ++limitedCount;
                if (result.score > q.peek().score)
                  q.replaceTop(result);
              }
            }
          }
          if (resultsLen === 0)
            return noResults;
          var results = new Array(resultsLen);
          for (var i = resultsLen - 1; i >= 0; --i)
            results[i] = q.poll();
          results.total = resultsLen + limitedCount;
          return results;
        },
        goAsync: function(search, targets, options) {
          var canceled = false;
          var p = new Promise(function(resolve, reject) {
            if (!search)
              return resolve(noResults);
            search = fuzzysort2.prepareSearch(search);
            var searchLowerCode = search[0];
            var q2 = fastpriorityqueue();
            var iCurrent = targets.length - 1;
            var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
            var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
            var allowTypo = options && options.allowTypo !== void 0 ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== void 0 ? instanceOptions.allowTypo : true;
            var algorithm = allowTypo ? fuzzysort2.algorithm : fuzzysort2.algorithmNoTypo;
            var resultsLen = 0;
            var limitedCount = 0;
            function step() {
              if (canceled)
                return reject("canceled");
              var startMs = Date.now();
              if (options && options.keys) {
                var scoreFn = options.scoreFn || defaultScoreFn;
                var keys = options.keys;
                var keysLen = keys.length;
                for (; iCurrent >= 0; --iCurrent) {
                  var obj = targets[iCurrent];
                  var objResults = new Array(keysLen);
                  for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      objResults[keyI] = null;
                      continue;
                    }
                    if (!isObj(target))
                      target = fuzzysort2.getPrepared(target);
                    objResults[keyI] = algorithm(search, target, searchLowerCode);
                  }
                  objResults.obj = obj;
                  var score = scoreFn(objResults);
                  if (score === null)
                    continue;
                  if (score < threshold)
                    continue;
                  objResults.score = score;
                  if (resultsLen < limit) {
                    q2.add(objResults);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (score > q2.peek().score)
                      q2.replaceTop(objResults);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              } else if (options && options.key) {
                var key = options.key;
                for (; iCurrent >= 0; --iCurrent) {
                  var obj = targets[iCurrent];
                  var target = getValue(obj, key);
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj };
                  if (resultsLen < limit) {
                    q2.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q2.peek().score)
                      q2.replaceTop(result);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              } else {
                for (; iCurrent >= 0; --iCurrent) {
                  var target = targets[iCurrent];
                  if (!target)
                    continue;
                  if (!isObj(target))
                    target = fuzzysort2.getPrepared(target);
                  var result = algorithm(search, target, searchLowerCode);
                  if (result === null)
                    continue;
                  if (result.score < threshold)
                    continue;
                  if (resultsLen < limit) {
                    q2.add(result);
                    ++resultsLen;
                  } else {
                    ++limitedCount;
                    if (result.score > q2.peek().score)
                      q2.replaceTop(result);
                  }
                  if (iCurrent % 1e3 === 0) {
                    if (Date.now() - startMs >= 10) {
                      isNode ? {}(step) : setTimeout(step);
                      return;
                    }
                  }
                }
              }
              if (resultsLen === 0)
                return resolve(noResults);
              var results = new Array(resultsLen);
              for (var i = resultsLen - 1; i >= 0; --i)
                results[i] = q2.poll();
              results.total = resultsLen + limitedCount;
              resolve(results);
            }
            isNode ? {}(step) : step();
          });
          p.cancel = function() {
            canceled = true;
          };
          return p;
        },
        highlight: function(result, hOpen, hClose) {
          if (result === null)
            return null;
          if (hOpen === void 0)
            hOpen = "<b>";
          if (hClose === void 0)
            hClose = "</b>";
          var highlighted = "";
          var matchesIndex = 0;
          var opened = false;
          var target = result.target;
          var targetLen = target.length;
          var matchesBest = result.indexes;
          for (var i = 0; i < targetLen; ++i) {
            var char = target[i];
            if (matchesBest[matchesIndex] === i) {
              ++matchesIndex;
              if (!opened) {
                opened = true;
                highlighted += hOpen;
              }
              if (matchesIndex === matchesBest.length) {
                highlighted += char + hClose + target.substr(i + 1);
                break;
              }
            } else {
              if (opened) {
                opened = false;
                highlighted += hClose;
              }
            }
            highlighted += char;
          }
          return highlighted;
        },
        prepare: function(target) {
          if (!target)
            return;
          return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
        },
        prepareSlow: function(target) {
          if (!target)
            return;
          return { target, _targetLowerCodes: fuzzysort2.prepareLowerCodes(target), _nextBeginningIndexes: fuzzysort2.prepareNextBeginningIndexes(target), score: null, indexes: null, obj: null };
        },
        prepareSearch: function(search) {
          if (!search)
            return;
          return fuzzysort2.prepareLowerCodes(search);
        },
        getPrepared: function(target) {
          if (target.length > 999)
            return fuzzysort2.prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0)
            return targetPrepared;
          targetPrepared = fuzzysort2.prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        },
        getPreparedSearch: function(search) {
          if (search.length > 999)
            return fuzzysort2.prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0)
            return searchPrepared;
          searchPrepared = fuzzysort2.prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        },
        algorithm: function(searchLowerCodes, prepared, searchLowerCode) {
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var typoSimpleI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
            }
            ++targetI;
            if (targetI >= targetLen) {
              for (; ; ) {
                if (searchI <= 1)
                  return null;
                if (typoSimpleI === 0) {
                  --searchI;
                  var searchLowerCodeNew = searchLowerCodes[searchI];
                  if (searchLowerCode === searchLowerCodeNew)
                    continue;
                  typoSimpleI = searchI;
                } else {
                  if (typoSimpleI === 1)
                    return null;
                  --typoSimpleI;
                  searchI = typoSimpleI;
                  searchLowerCode = searchLowerCodes[searchI + 1];
                  var searchLowerCodeNew = searchLowerCodes[searchI];
                  if (searchLowerCode === searchLowerCodeNew)
                    continue;
                }
                matchesSimpleLen = searchI;
                targetI = matchesSimple[matchesSimpleLen - 1] + 1;
                break;
              }
            }
          }
          var searchI = 0;
          var typoStrictI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === null)
            nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
          var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0) {
                  ++typoStrictI;
                  if (typoStrictI > searchLen - 2)
                    break;
                  if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1])
                    continue;
                  targetI = firstPossibleI;
                  continue;
                }
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          {
            if (successStrict) {
              var matchesBest = matchesStrict;
              var matchesBestLen = matchesStrictLen;
            } else {
              var matchesBest = matchesSimple;
              var matchesBestLen = matchesSimpleLen;
            }
            var score = 0;
            var lastTargetI = -1;
            for (var i = 0; i < searchLen; ++i) {
              var targetI = matchesBest[i];
              if (lastTargetI !== targetI - 1)
                score -= targetI;
              lastTargetI = targetI;
            }
            if (!successStrict) {
              score *= 1e3;
              if (typoSimpleI !== 0)
                score += -20;
            } else {
              if (typoStrictI !== 0)
                score += -20;
            }
            score -= targetLen - searchLen;
            prepared.score = score;
            prepared.indexes = new Array(matchesBestLen);
            for (var i = matchesBestLen - 1; i >= 0; --i)
              prepared.indexes[i] = matchesBest[i];
            return prepared;
          }
        },
        algorithmNoTypo: function(searchLowerCodes, prepared, searchLowerCode) {
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen)
              return null;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === null)
            nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort2.prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0)
                  break;
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          {
            if (successStrict) {
              var matchesBest = matchesStrict;
              var matchesBestLen = matchesStrictLen;
            } else {
              var matchesBest = matchesSimple;
              var matchesBestLen = matchesSimpleLen;
            }
            var score = 0;
            var lastTargetI = -1;
            for (var i = 0; i < searchLen; ++i) {
              var targetI = matchesBest[i];
              if (lastTargetI !== targetI - 1)
                score -= targetI;
              lastTargetI = targetI;
            }
            if (!successStrict)
              score *= 1e3;
            score -= targetLen - searchLen;
            prepared.score = score;
            prepared.indexes = new Array(matchesBestLen);
            for (var i = matchesBestLen - 1; i >= 0; --i)
              prepared.indexes[i] = matchesBest[i];
            return prepared;
          }
        },
        prepareLowerCodes: function(str) {
          var strLen = str.length;
          var lowerCodes = [];
          var lower = str.toLowerCase();
          for (var i = 0; i < strLen; ++i)
            lowerCodes[i] = lower.charCodeAt(i);
          return lowerCodes;
        },
        prepareBeginningIndexes: function(target) {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i = 0; i < targetLen; ++i) {
            var targetCode = target.charCodeAt(i);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning)
              beginningIndexes[beginningIndexesLen++] = i;
          }
          return beginningIndexes;
        },
        prepareNextBeginningIndexes: function(target) {
          var targetLen = target.length;
          var beginningIndexes = fuzzysort2.prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i = 0; i < targetLen; ++i) {
            if (lastIsBeginning > i) {
              nextBeginningIndexes[i] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        },
        cleanup,
        new: fuzzysortNew
      };
      return fuzzysort2;
    }
    var isNode = typeof commonjsRequire !== "undefined" && typeof window === "undefined";
    var preparedCache = /* @__PURE__ */ new Map();
    var preparedSearchCache = /* @__PURE__ */ new Map();
    var noResults = [];
    noResults.total = 0;
    var matchesSimple = [];
    var matchesStrict = [];
    function cleanup() {
      preparedCache.clear();
      preparedSearchCache.clear();
      matchesSimple = [];
      matchesStrict = [];
    }
    function defaultScoreFn(a) {
      var max = -9007199254740991;
      for (var i = a.length - 1; i >= 0; --i) {
        var result = a[i];
        if (result === null)
          continue;
        var score = result.score;
        if (score > max)
          max = score;
      }
      if (max === -9007199254740991)
        return null;
      return max;
    }
    function getValue(obj, prop) {
      var tmp = obj[prop];
      if (tmp !== void 0)
        return tmp;
      var segs = prop;
      if (!Array.isArray(prop))
        segs = prop.split(".");
      var len = segs.length;
      var i = -1;
      while (obj && ++i < len)
        obj = obj[segs[i]];
      return obj;
    }
    function isObj(x) {
      return typeof x === "object";
    }
    var fastpriorityqueue = function() {
      var r = [], o = 0, e = {};
      function n() {
        for (var e2 = 0, n2 = r[e2], c = 1; c < o; ) {
          var f = c + 1;
          e2 = c, f < o && r[f].score < r[c].score && (e2 = f), r[e2 - 1 >> 1] = r[e2], c = 1 + (e2 << 1);
        }
        for (var a = e2 - 1 >> 1; e2 > 0 && n2.score < r[a].score; a = (e2 = a) - 1 >> 1)
          r[e2] = r[a];
        r[e2] = n2;
      }
      return e.add = function(e2) {
        var n2 = o;
        r[o++] = e2;
        for (var c = n2 - 1 >> 1; n2 > 0 && e2.score < r[c].score; c = (n2 = c) - 1 >> 1)
          r[n2] = r[c];
        r[n2] = e2;
      }, e.poll = function() {
        if (0 !== o) {
          var e2 = r[0];
          return r[0] = r[--o], n(), e2;
        }
      }, e.peek = function(e2) {
        if (0 !== o)
          return r[0];
      }, e.replaceTop = function(o2) {
        r[0] = o2, n();
      }, e;
    };
    var q = fastpriorityqueue();
    return fuzzysortNew();
  });
})(fuzzysort);
const fuzzySort = fuzzysort.exports;
function fuzzySortSpecs(specs, searchValue) {
  const normalizedSearchValue = getPlatform() === "win32" ? searchValue.replaceAll("/", "\\") : searchValue;
  const fuzzySortResult = fuzzySort.go(normalizedSearchValue, specs, { keys: ["relative", "baseName"], allowTypo: false, threshold: -3e3 }).map((result) => {
    var _a, _b;
    const [relative, baseName] = result;
    return {
      ...result.obj,
      fuzzyIndexes: {
        relative: (_a = relative == null ? void 0 : relative.indexes) != null ? _a : [],
        baseName: (_b = baseName == null ? void 0 : baseName.indexes) != null ? _b : []
      }
    };
  });
  return fuzzySortResult;
}
function makeFuzzyFoundSpec(spec) {
  return {
    ...spec,
    fuzzyIndexes: {
      relative: [],
      baseName: []
    }
  };
}
function useCachedSpecs(specs) {
  const cachedSpecs = ref([]);
  watch(specs, (currentSpecs, prevSpecs = []) => {
    if (!_.isEqual(currentSpecs, prevSpecs)) {
      cachedSpecs.value = currentSpecs;
    }
  }, { immediate: true });
  return cachedSpecs;
}
function deriveIndexes(fileName, indexes) {
  return indexes.reduce((acc, idx) => {
    if (idx < fileName.length) {
      acc.fileNameIndexes.push(idx);
    } else {
      acc.extensionIndexes.push(idx - fileName.length);
    }
    return acc;
  }, { fileNameIndexes: [], extensionIndexes: [] });
}
const _hoisted_1$i = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 13C14.5523 13 15 12.5523 15 12V4C15 3.44772 14.5523 3 14 3H9L7.29289 4.70711C7.10536 4.89464 6.851 5 6.58579 5H1V12C1 12.5523 1.44772 13 2 13H14Z",
  fill: "#2E3247",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 3L7.29289 1.29289C7.10536 1.10536 6.851 1 6.58579 1H2C1.44772 1 1 1.44772 1 2V5M9 3H14C14.5523 3 15 3.44772 15 4V12C15 12.5523 14.5523 13 14 13H2C1.44772 13 1 12.5523 1 12V5M9 3L7.29289 4.70711C7.10536 4.89464 6.851 5 6.58579 5H1",
  stroke: "#434861",
  "stroke-width": "2",
  "stroke-linejoin": "round",
  class: "icon-light"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$f,
  _hoisted_3$c
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_4$a);
}
const __unplugin_components_1 = { name: "cy-folder_x16", render: render$7 };
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    text: { default: "" },
    indexes: { default: () => [] },
    highlightClasses: { default: "text-white" }
  },
  setup(__props) {
    const props = __props;
    const characters = computed(() => {
      const chars = props.text.split("").map((char) => ({ char, highlighted: false }));
      props.indexes.forEach((idx) => chars[idx].highlighted = true);
      return chars;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(characters), ({ char, highlighted }, idx) => {
          return openBlock(), createElementBlock("span", {
            key: idx,
            class: normalizeClass({ "px-4px": char === "/" })
          }, [
            highlighted ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(__props.highlightClasses)
            }, toDisplayString(char), 3)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(char), 1)
            ], 64))
          ], 2);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$h = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2 14V2C2 1.44772 2.44772 1 3 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3C2.44772 15 2 14.5523 2 14Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5 8H8M5 5H11M5 11H10M13 1L3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$e,
  _hoisted_3$b
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_4$9);
}
const DocumentIconBlank = { name: "cy-document-blank_x16", render: render$6 };
function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number") {
      return Math.ceil(containerHeight / itemHeight);
    }
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number") {
      return Math.floor(scrollTop / itemHeight) + 1;
    }
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => {
        return {
          data: ele,
          index: index + state.value.start
        };
      });
    }
  };
  watch([size.height, list], (newVal, oldVal) => {
    if (!lodash.exports.isEqual(newVal, oldVal)) {
      calculateRange();
    }
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number") {
      return source.value.length * itemHeight;
    }
    return source.value.reduce((sum, _2, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _2, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps,
    api: {
      containerRef,
      getOffset,
      getViewCapacity,
      source,
      scrollTo
    }
  };
}
const _hoisted_1$g = {
  width: "160",
  height: "160",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<path d="M71.4 47.379H5.334v79.884h66.068V47.379Z" fill="#D0D2E0"></path><path d="M58.33 59.353H18.388v5.384H58.33v-5.384ZM58.33 71.249H18.388v5.383H58.33V71.25ZM58.33 82.779H18.388v5.384H58.33v-5.384Z" fill="#9095AD"></path><path d="M113.392 22.667H49.023v73.31h64.369v-73.31ZM128.689 106.013l-5.502 5.503 6.715 6.715 5.503-5.503-6.716-6.715Z" fill="#6470F3"></path><path d="m127.311 120.788 10.646-10.646 14.992 14.992a2.433 2.433 0 0 1 0 3.436l-7.199 7.199a2.426 2.426 0 0 1-3.436 0l-14.992-14.992-.011.011Z" fill="#D0D2E0"></path><circle cx="106.667" cy="89.333" r="20" fill="#9095AD"></circle><path d="M125.954 70.375a27.161 27.161 0 0 1 5.89 29.597 27.153 27.153 0 0 1-25.091 16.767 27.154 27.154 0 0 1-25.09-16.767 27.158 27.158 0 0 1 44.291-29.597Zm-31.43 6.988a17.295 17.295 0 1 0 24.458 0 17.283 17.283 0 0 0-18.848-3.753 17.28 17.28 0 0 0-5.61 3.753ZM69.75 34.514a6.066 6.066 0 0 1 1.953 4.765 5.607 5.607 0 0 1-1.938 4.605 7.94 7.94 0 0 1-5.145 1.589l-.127 2.366h-3.78l-.159-5.225h1.255a9.528 9.528 0 0 0 4.113-.715 2.62 2.62 0 0 0 1.445-2.589 2.89 2.89 0 0 0-.778-2.144 2.843 2.843 0 0 0-2.144-.81 2.956 2.956 0 0 0-2.192.779 2.827 2.827 0 0 0-.794 2.112h-4.066a6.542 6.542 0 0 1 .81-3.351 5.734 5.734 0 0 1 2.446-2.303 8.163 8.163 0 0 1 3.796-.842 7.464 7.464 0 0 1 5.304 1.763Zm-9.085 19.98a2.383 2.383 0 0 1-.746-1.811 2.35 2.35 0 0 1 .746-1.795 2.7 2.7 0 0 1 1.922-.73 2.59 2.59 0 0 1 1.874.73 2.413 2.413 0 0 1 .746 1.795 2.445 2.445 0 0 1-.746 1.81 2.572 2.572 0 0 1-1.874.715 2.683 2.683 0 0 1-2.001-.715h.08Z" fill="#D0D2E0"></path>', 6);
const _hoisted_8$3 = [
  _hoisted_2$d
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_8$3);
}
const NoResultsIllustration = { render: render$5 };
const _hoisted_1$f = {
  key: 0,
  "data-testid": "no-results",
  class: "text-center"
};
const _hoisted_2$c = { class: "leading-normal text-gray-500 text-18px" };
const _hoisted_3$a = {
  key: 0,
  class: "text-purple-500 truncate"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    searchTerm: null,
    message: null,
    emptySearch: { type: Boolean }
  },
  emits: ["clear"],
  setup(__props, { emit }) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_delete_x12 = __unplugin_components_0$2;
      return __props.searchTerm || __props.emptySearch ? (openBlock(), createElementBlock("div", _hoisted_1$f, [
        createVNode(unref(NoResultsIllustration), {
          class: "mx-auto",
          alt: ""
        }),
        createBaseVNode("p", _hoisted_2$c, [
          createTextVNode(toDisplayString(__props.message || unref(t)("noResults.defaultMessage")) + " ", 1),
          __props.searchTerm ? (openBlock(), createElementBlock("span", _hoisted_3$a, toDisplayString(__props.searchTerm), 1)) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$j, {
          "data-cy": "no-results-clear",
          class: "mx-auto mt-20px",
          size: "lg",
          variant: "outline",
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clear"))
        }, {
          prefix: withCtx(() => [
            createVNode(_component_i_cy_delete_x12, { class: "w-12px icon-dark-gray-400" })
          ]),
          default: withCtx(() => [
            createTextVNode(" " + toDisplayString(unref(t)("noResults.clearSearch")), 1)
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
gql`
mutation SpecFilter_SetPreferences ($value: String!) {
  setPreferences (value: $value, type: project) {
    ...TestingPreferences
    ...SpecRunner_Preferences
  }
}`;
function useSpecFilter(savedFilter) {
  var _a, _b;
  const specStore = useSpecStore();
  const saveSpecFilter = useMutation(SpecFilter_SetPreferencesDocument);
  const initialFilter = (_b = (_a = specStore.specFilter) != null ? _a : savedFilter) != null ? _b : "";
  const specFilterModel = ref(initialFilter);
  const debouncedSpecFilterModel = useDebounce(specFilterModel, 200);
  function setSpecFilter(specFilter) {
    if (specStore.specFilter !== specFilter) {
      specStore.setSpecFilter(specFilter);
      saveSpecFilter.executeMutation({ value: JSON.stringify({ specFilter }) });
    }
  }
  watch(() => debouncedSpecFilterModel == null ? void 0 : debouncedSpecFilterModel.value, (newVal) => {
    setSpecFilter(newVal != null ? newVal : "");
  });
  setSpecFilter(specFilterModel.value);
  return {
    specFilterModel,
    debouncedSpecFilterModel
  };
}
const isRunMode = window.__CYPRESS_MODE__ === "run" && window.top === window;
gql`
query RunAllSpecsData {
  currentProject {
    id
    config
    currentTestingType
  }
}
`;
gql`
mutation RunAllSpecs ($specPath: String!, $runAllSpecs: [String!]!) {
  setRunAllSpecs(runAllSpecs: $runAllSpecs)
  launchOpenProject(specPath: $specPath, shouldLaunchNewTab: true) {
    id
  }
}
`;
const useRunAllSpecsStore = defineStore("runAllSpecs", () => {
  const allSpecsRef = ref([]);
  const directoryChildrenRef = ref({});
  const separator = getSeparator();
  const router = useRouter();
  const query = useQuery({ query: RunAllSpecsDataDocument, pause: isRunMode });
  const setRunAllSpecsMutation = useMutation(RunAllSpecsDocument);
  async function runSpecs(runAllSpecs2) {
    await setRunAllSpecsMutation.executeMutation({ runAllSpecs: runAllSpecs2, specPath: RUN_ALL_SPECS_KEY });
    router.push({ path: "/specs/runner", query: { file: RUN_ALL_SPECS_KEY } });
  }
  async function runAllSpecs() {
    await runSpecs(allSpecsRef.value);
  }
  async function runSelectedSpecs(dir) {
    await runSpecs(directoryChildrenRef.value[dir]);
  }
  function setRunAllSpecsData(tree) {
    const allSpecs = [];
    const directoryChildren = {};
    for (const { id, isLeaf } of tree) {
      if (!isLeaf) {
        directoryChildren[id] = [];
      } else {
        allSpecs.push(id);
        Object.keys(directoryChildren).forEach((dir) => {
          if (id.startsWith(dir) && id.replace(dir, "").startsWith(separator)) {
            directoryChildren[dir].push(id);
          }
        });
      }
    }
    allSpecsRef.value = allSpecs;
    directoryChildrenRef.value = directoryChildren;
  }
  const isRunAllSpecsAllowed = computed(() => {
    var _a, _b, _c, _d;
    const isE2E = ((_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.currentTestingType) === "e2e";
    const config = ((_d = (_c = query.data.value) == null ? void 0 : _c.currentProject) == null ? void 0 : _d.config) || [];
    const hasExperiment = config.some(({ field, value }) => field === "experimentalRunAllSpecs" && value === true);
    return isE2E && hasExperiment;
  });
  return {
    isRunAllSpecsAllowed,
    directoryChildren: directoryChildrenRef,
    runAllSpecs,
    allSpecsRef,
    runSelectedSpecs,
    setRunAllSpecsData
  };
});
const _hoisted_1$e = { class: "flex flex-wrap gap-32px children:mx-auto" };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    generators: null,
    gql: null
  },
  emits: ["select"],
  setup(__props) {
    gql`
fragment CreateSpecCards on Query {
  currentProject {
    id
    config
    codeGenGlobs {
      id
      component
    }
  }
}
`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.generators, (generator) => {
          return openBlock(), createBlock(resolveDynamicComponent(generator.card), {
            key: generator.id,
            onClick: ($event) => _ctx.$emit("select", generator.id)
          }, null, 8, ["onClick"]);
        }), 128))
      ]);
    };
  }
});
const filters = {
  matchesCT: (testingType) => testingType === "component",
  matchesE2E: (testingType) => testingType === "e2e"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    icon: null,
    header: null,
    description: null,
    disabled: { type: Boolean },
    badgeText: null
  },
  emits: ["click"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Card, {
        disabled: __props.disabled,
        title: __props.header,
        description: __props.description,
        icon: __props.icon,
        "icon-size": 48,
        class: "m-2px min-h-216px max-h-350px px-32px pt-32px pb-24px w-280px",
        variant: "indigo",
        "badge-text": __props.badgeText,
        onClick: _cache[0] || (_cache[0] = ($event) => emits("click"))
      }, null, 8, ["disabled", "title", "description", "icon", "badge-text"]);
    };
  }
});
const _hoisted_1$d = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M43 25.1622L28.5 33L24\r\n28.4872V47L43 37.2564V25.1622Z" fill="#D0D2E0" class="icon-light"></path><path d="M24 9L5 18.7436L24 28.4872L43 18.7436L24 9Z" fill="#D0D2E0" class="icon-light"></path><path d="M24 47L5 37.2564V25.1622M24 47L43 37.2564V25.1622M24 47V28.4872M24\r\n9L5 18.7436M24 9L43 18.7436M24 9L28 5L47 14.5L43 18.7436M24 9L20 5L1 14.5L5\r\n18.7436M5 18.7436L24 28.4872M5 18.7436L1 23L5 25.1622M43 18.7436L24\r\n28.4872M43 18.7436L47 23L43 25.1622M24 28.4872L19.5 33L5 25.1622M24\r\n28.4872L28.5 33L43 25.1622" stroke="#1B1E2E" class="icon-dark" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 7L19.1314 9.86863L22 11L19.1314 12.1314L18 15L16.8686\r\n12.1314L14 11L16.8686 9.86863L18 7Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path><path d="M27 1L27.8485 3.15147L30 4L27.8485 4.84853L27 7L26.1515 4.84853L24\r\n4L26.1515 3.15147L27 1Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path><path d="M28 12L29.4142 15.5858L33 17L29.4142 18.4142L28 22L26.5858\r\n18.4142L23 17L26.5858 15.5858L28 12Z" fill="#1FA971" stroke="#00814D" class="icon-dark-secondary-stroke icon-light-secondary-fill" stroke-width="2" stroke-linejoin="round"></path>', 6);
const _hoisted_8$2 = [
  _hoisted_2$b
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_8$2);
}
const BoxOpenIcon = { name: "cy-box-open_x48", render: render$4 };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$e, {
        disabled: __props.disabled,
        header: unref(t)("createSpec.e2e.importFromScaffold.header"),
        description: unref(t)("createSpec.e2e.importFromScaffold.description"),
        icon: unref(BoxOpenIcon)
      }, null, 8, ["disabled", "header", "description", "icon"]);
    };
  }
});
const _hoisted_1$c = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 4V12M12 8H4",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$a
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_3$9);
}
const __unplugin_components_2 = { name: "cy-add-small_x16", render: render$3 };
const _hoisted_1$b = { key: 0 };
const _hoisted_2$9 = { class: "h-320px overflow-auto" };
const _hoisted_3$8 = { class: "grid gap-8px grid-cols-[16px,auto] items-center" };
const _hoisted_4$8 = { class: "text-gray-700" };
const _hoisted_5$4 = { class: "grid grid-cols-[16px,auto,auto] items-center" };
const _hoisted_6$3 = { class: "pl-8px text-gray-900" };
const _hoisted_7$2 = { class: "font-light text-gray-400 text-gray-500" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  emits: ["update:title", "update:description", "close"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n();
    gql`
mutation ScaffoldGeneratorStepOne_scaffoldIntegration {
  scaffoldIntegration {
    file {
      id
      absolute
      relative
      baseName
      name
      fileExtension
      fileName
    }
  }
}
`;
    const mutation = useMutation(ScaffoldGeneratorStepOne_ScaffoldIntegrationDocument);
    onMounted(async () => {
      emits("update:title", t("createSpec.e2e.importFromScaffold.specsAddingHeader"));
      await mutation.executeMutation({});
      emits("update:title", t("createSpec.e2e.importFromScaffold.specsAddedHeader"));
    });
    const scaffoldedFiles = computed(() => {
      var _a;
      return ((_a = mutation.data.value) == null ? void 0 : _a.scaffoldIntegration) || [];
    });
    const specTree = computed(() => {
      const files = scaffoldedFiles.value.map((res) => {
        return {
          ...res.file,
          specType: "integration",
          specFileExtension: res.file.baseName.replace(res.file.fileName, "")
        };
      });
      return useCollapsibleTree(buildSpecTree(files), { dropRoot: true });
    });
    return (_ctx, _cache) => {
      const _component_i_cy_add_small_x16 = __unplugin_components_2;
      const _component_i_cy_folder_x16 = __unplugin_components_1;
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      return unref(mutation).data.value ? (openBlock(), createElementBlock("div", _hoisted_1$b, [
        createBaseVNode("ul", _hoisted_2$9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(specTree).tree, (row, idx) => {
            var _a, _b;
            return openBlock(), createElementBlock("li", {
              key: idx,
              class: "flex font-medium border-b-gray-50 border-b-width-1px pl-24px gap-8px items-center children:h-40px"
            }, [
              createVNode(_component_i_cy_add_small_x16, { class: "icon-dark-jade-400" }),
              !row.isLeaf ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: "flex items-center",
                style: normalizeStyle({ paddingLeft: `${(row.depth - 2) * 10}px` })
              }, [
                createBaseVNode("div", _hoisted_3$8, [
                  createVNode(_component_i_cy_folder_x16, { class: "icon-dark-white icon-light-gray-200" }),
                  createBaseVNode("span", _hoisted_4$8, toDisplayString(row.name), 1)
                ])
              ], 4)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: "flex items-center",
                style: normalizeStyle({ paddingLeft: `${(row.depth - 2) * 10}px` })
              }, [
                createBaseVNode("div", _hoisted_5$4, [
                  createVNode(_component_i_cy_document_blank_x16, { class: "icon-light-gray-50 icon-dark-gray-200" }),
                  createBaseVNode("span", _hoisted_6$3, toDisplayString((_a = row.data) == null ? void 0 : _a.fileName), 1),
                  createBaseVNode("span", _hoisted_7$2, toDisplayString((_b = row.data) == null ? void 0 : _b.specFileExtension), 1)
                ])
              ], 4))
            ]);
          }), 128))
        ]),
        createVNode(StandardModalFooter, null, {
          default: withCtx(() => [
            createVNode(_sfc_main$j, {
              size: "lg",
              onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("createSpec.e2e.importFromScaffold.specsAddedButton")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])) : createCommentVNode("", true);
    };
  }
});
const ScaffoldGenerator = {
  card: _sfc_main$d,
  entry: _sfc_main$c,
  matches: filters.matchesE2E,
  show: () => true,
  id: "scaffold"
};
const _hoisted_1$a = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M32\r\n5.17964V13H39.8204C39.7221 12.784 39.5852 12.5852 39.4142 12.4142L32.5858\r\n5.58578C32.4148 5.41477 32.216 5.27792 32 5.17964Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M20 21L17 24L20 27M28 21L31 24L28 27M22.5 29.5L25.5 18.5M32\r\n5.17964C31.7423 5.06237 31.4602 5 31.1716 5H9C8.44772 5 8 5.44772 8 6V42C8\r\n42.5523 8.44772 43 9 43H39C39.5523 43 40 42.5523 40 42V13.8284C40 13.5398\r\n39.9376 13.2577 39.8204 13M32 5.17964C32.216 5.27792 32.4148 5.41477\r\n32.5858 5.58578L39.4142 12.4142C39.5852 12.5852 39.7221 12.784 39.8204\r\n13M32 5.17964V13H39.8204",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M43 40C43 43.3137 40.3137 46 37 46C33.6863 46 31 43.3137 31 40C31\r\n36.6863 33.6863 34 37 34C40.3137 34 43 36.6863 43 40Z",
  class: "icon-light-secondary",
  fill: "#A3E7CB"
}, null, -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M37 38V40M37 42V40M37 40H39H35M43 40C43 43.3137 40.3137 46 37\r\n46C33.6863 46 31 43.3137 31 40C31 36.6863 33.6863 34 37 34C40.3137 34 43\r\n36.6863 43 40Z",
  stroke: "#00814D",
  class: "icon-dark-secondary",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_6$2 = [
  _hoisted_2$8,
  _hoisted_3$7,
  _hoisted_4$7,
  _hoisted_5$3
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_6$2);
}
const DocumentCodeIcon = { name: "cy-document-code_x48", render: render$2 };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$e, {
        disabled: __props.disabled,
        header: unref(t)("createSpec.e2e.importEmptySpec.header"),
        description: unref(t)("createSpec.e2e.importEmptySpec.description"),
        icon: unref(DocumentCodeIcon)
      }, null, 8, ["disabled", "header", "description", "icon"]);
    };
  }
});
const _hoisted_1$9 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#1FA971",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 6L8 10L6 8",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  class: "icon-light",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$6 = [
  _hoisted_2$7,
  _hoisted_3$6
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$6);
}
const __unplugin_components_0 = { name: "cy-status-passed-solid_x16", render: render$1 };
const _hoisted_1$8 = {
  class: "cursor-pointer flex py-16px px-24px gap-8px items-center",
  "data-cy": "file-row"
};
const _hoisted_2$6 = { class: "font-medium text-jade-500 truncate" };
const _hoisted_3$5 = { class: "flex-grow flex justify-self-end justify-end" };
const _hoisted_4$5 = { class: "rounded border-1 mx-24px mb-24px" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    file: null
  },
  setup(__props) {
    gql`
fragment GeneratorSuccessFile on ScaffoldedFile {
  file {
    id
    fileName
    fileExtension
    baseName
    relative
    contents
  }
}
`;
    gql`
fragment GeneratorSuccess on GenerateSpecResponse {
  # Used to update the cache after a spec is created, so when the user tries to
  # run it, it already exists
  currentProject {
    id
    specs {
      id
      ...SpecNode_InlineSpecList
    }
  }
  generatedSpecResult {
    ... on ScaffoldedFile {
      ...GeneratorSuccessFile
    }
  }
}
`;
    return (_ctx, _cache) => {
      const _component_i_cy_status_passed_solid_x16 = __unplugin_components_0;
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$1;
      return openBlock(), createBlock(_sfc_main$k, {
        class: "rounded outline-none m-4px overflow-hidden",
        "initially-open": true
      }, {
        target: withCtx(({ open }) => [
          createBaseVNode("div", _hoisted_1$8, [
            createVNode(_component_i_cy_status_passed_solid_x16),
            createBaseVNode("span", _hoisted_2$6, toDisplayString(__props.file.relative), 1),
            createBaseVNode("div", _hoisted_3$5, [
              createVNode(_component_i_cy_chevron_down_small_x16, {
                class: normalizeClass([{ "rotate-180": open }, "max-w-16px transform transition duration-150 icon-dark-gray-400"])
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_4$5, [
            createVNode(ShikiHighlight, {
              code: __props.file.contents,
              "line-numbers": "",
              lang: "js"
            }, null, 8, ["code"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$7 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15H7V19H3V15Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M21 8C21.5523 8 22 7.55228 22 7C22 6.44772 21.5523 6 21 6V8ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8V6ZM21 18C21.5523 18 22 17.5523 22 17C22 16.4477 21.5523 16 21 16V18ZM11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18V16ZM2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711C2.68342 10.0976 3.31658 10.0976 3.70711 9.70711L2.29289 8.29289ZM7.70711 5.70711C8.09763 5.31658 8.09763 4.68342 7.70711 4.29289C7.31658 3.90237 6.68342 3.90237 6.29289 4.29289L7.70711 5.70711ZM3.70711 4.29289C3.31658 3.90237 2.68342 3.90237 2.29289 4.29289C1.90237 4.68342 1.90237 5.31658 2.29289 5.70711L3.70711 4.29289ZM6.29289 9.70711C6.68342 10.0976 7.31658 10.0976 7.70711 9.70711C8.09763 9.31658 8.09763 8.68342 7.70711 8.29289L6.29289 9.70711ZM3 15V14C2.44772 14 2 14.4477 2 15H3ZM7 15H8C8 14.4477 7.55228 14 7 14V15ZM7 19V20C7.55228 20 8 19.5523 8 19H7ZM3 19H2C2 19.5523 2.44772 20 3 20V19ZM21 6H11V8H21V6ZM21 16H11V18H21V16ZM3.70711 9.70711L5.70711 7.70711L4.29289 6.29289L2.29289 8.29289L3.70711 9.70711ZM5.70711 7.70711L7.70711 5.70711L6.29289 4.29289L4.29289 6.29289L5.70711 7.70711ZM2.29289 5.70711L4.29289 7.70711L5.70711 6.29289L3.70711 4.29289L2.29289 5.70711ZM4.29289 7.70711L6.29289 9.70711L7.70711 8.29289L5.70711 6.29289L4.29289 7.70711ZM3 16H7V14H3V16ZM6 15V19H8V15H6ZM7 18H3V20H7V18ZM4 19V15H2V19H4Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$5,
  _hoisted_3$4
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$4);
}
const TestResultsIcon = { name: "cy-test-results_x24", render };
const _hoisted_1$6 = { class: "flex flex-col flex-grow justify-between" };
const _hoisted_2$4 = { class: "p-24px w-720px" };
const _hoisted_3$3 = ["onSubmit"];
const _hoisted_4$3 = { key: 0 };
const _hoisted_5$2 = {
  key: 0,
  class: "rounded flex font-medium bg-error-100 mt-16px p-14px ring-2 ring-error-100 text-error-600 gap-8px items-center"
};
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("em", { class: "font-medium" }, "specPattern", -1);
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode(":");
const _hoisted_8$1 = {
  key: 1,
  class: "rounded flex font-medium bg-warning-100 mt-16px p-16px text-warning-600 gap-8px items-center"
};
const _hoisted_9$1 = { class: "rounded bg-warning-200 py-2px px-8px text-warning-700" };
const _hoisted_10 = {
  key: 2,
  class: "mt-16px"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    gql: null,
    type: null,
    specFileName: null,
    otherGenerators: { type: Boolean }
  },
  emits: ["update:title", "update:description", "restart", "close", "updateTitle"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment EmptyGenerator on CurrentProject {
  id
  config
  ...SpecPatterns
}
`;
    gql`
mutation EmptyGenerator_MatchSpecFile($specFile: String!) {
  matchesSpecPattern (specFile: $specFile) 
}
`;
    gql`
mutation EmptyGenerator_generateSpec($codeGenCandidate: String!, $type: CodeGenType!) {
  generateSpecFromSource(codeGenCandidate: $codeGenCandidate, type: $type) {
    ...GeneratorSuccess
  }
}`;
    const { title } = useVModels(props, emits);
    const inputRef = ref();
    const inputRefFn = () => inputRef;
    const specFile = ref(props.specFileName);
    const matches = useMutation(EmptyGenerator_MatchSpecFileDocument);
    const writeFile = useMutation(EmptyGenerator_GenerateSpecDocument);
    const isValidSpecFile = ref(true);
    const hasError = computed(() => !isValidSpecFile.value && !!specFile.value);
    const result = ref(null);
    onMounted(() => {
      if (!(inputRef == null ? void 0 : inputRef.value)) {
        return;
      }
      inputRef.value.focus();
      const fileNameRegex = /[ \w-]+(?=\.)/;
      const inputValue = props.specFileName;
      const match = inputValue.match(fileNameRegex);
      if (match) {
        const startSelectionIndex = match.index || 0;
        const endSelectionIndex = startSelectionIndex + match[0].length;
        inputRef.value.setSelectionRange(startSelectionIndex, endSelectionIndex);
      }
    });
    whenever(result, () => {
      title.value = t("createSpec.successPage.header");
      emits("updateTitle", t("createSpec.successPage.header"));
    });
    const createSpec = async () => {
      var _a, _b, _c;
      if (!isValidSpecFile.value) {
        return;
      }
      const { data } = await writeFile.executeMutation({ codeGenCandidate: specFile.value, type: props.type });
      result.value = ((_b = (_a = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _a.generatedSpecResult) == null ? void 0 : _b.__typename) === "ScaffoldedFile" ? (_c = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _c.generatedSpecResult : null;
    };
    watch(specFile, async (value) => {
      var _a, _b;
      const result2 = await matches.executeMutation({ specFile: value });
      isValidSpecFile.value = (_b = (_a = result2.data) == null ? void 0 : _a.matchesSpecPattern) != null ? _b : false;
    }, { immediate: true });
    title.value = t("createSpec.e2e.importEmptySpec.chooseFilenameHeader");
    const showExtensionWarning = computed(() => isValidSpecFile.value && !specFile.value.includes(".cy"));
    const recommendedFileName = computed(() => {
      const split = specFile.value.split(".");
      return `{filename}.cy.${split[split.length - 1]}`;
    });
    const invalidSpecWarning = computed(() => props.type === "e2e" ? t("createSpec.e2e.importEmptySpec.invalidSpecWarning") : t("createSpec.component.importEmptySpec.invalidComponentWarning"));
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      const _component_i_cy_errored_outline_x16 = __unplugin_components_1$3;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        !result.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_2$4, [
            createBaseVNode("form", {
              onSubmit: withModifiers(createSpec, ["prevent"])
            }, [
              createVNode(Input, {
                modelValue: specFile.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => specFile.value = $event),
                "input-ref": inputRefFn,
                placeholder: unref(t)("createSpec.e2e.importEmptySpec.inputPlaceholder"),
                "aria-label": unref(t)("createSpec.e2e.importEmptySpec.inputPlaceholder"),
                "has-error": unref(hasError)
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_i_cy_document_blank_x16, {
                    class: normalizeClass(["icon-light-gray-50 icon-dark-gray-300", {
                      "icon-light-error-50 icon-dark-error-400": unref(hasError)
                    }])
                  }, null, 8, ["class"])
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder", "aria-label", "has-error"])
            ], 40, _hoisted_3$3),
            props.gql ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
              unref(hasError) ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
                createVNode(_component_i_cy_errored_outline_x16, { class: "icon-dark-error-600" }),
                createBaseVNode("span", null, [
                  createTextVNode(toDisplayString(unref(invalidSpecWarning)), 1),
                  _hoisted_6$1,
                  _hoisted_7$1
                ])
              ])) : unref(showExtensionWarning) && props.type === "e2e" ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
                createVNode(_component_i_cy_errored_outline_x16, { class: "icon-dark-warning-600" }),
                createTextVNode(" " + toDisplayString(unref(t)("createSpec.e2e.importEmptySpec.specExtensionWarning")), 1),
                createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(recommendedFileName)), 1)
              ])) : createCommentVNode("", true),
              unref(hasError) ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createVNode(_sfc_main$l, {
                  gql: props.gql,
                  variant: "info"
                }, null, 8, ["gql"])
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          !result.value ? (openBlock(), createBlock(StandardModalFooter, {
            key: 0,
            class: "flex gap-16px"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$j, {
                size: "lg",
                type: "submit",
                disabled: !isValidSpecFile.value,
                onClick: createSpec
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("createSpec.createSpec")), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              props.otherGenerators ? (openBlock(), createBlock(_sfc_main$j, {
                key: 0,
                size: "lg",
                variant: "outline",
                onClick: _cache[1] || (_cache[1] = ($event) => emits("restart"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.button.back")), 1)
                ]),
                _: 1
              })) : (openBlock(), createBlock(_sfc_main$j, {
                key: 1,
                size: "lg",
                variant: "outline",
                onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.button.cancel")), 1)
                ]),
                _: 1
              }))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_sfc_main$a, {
            file: result.value.file
          }, null, 8, ["file"]),
          createVNode(StandardModalFooter, { class: "flex gap-16px items-center" }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(_component_router_link, {
                  class: "outline-none",
                  to: {
                    name: "SpecRunner",
                    query: {
                      file: (_a = result.value.file.relative) == null ? void 0 : _a.replace(/\\/g, "/")
                    },
                    params: props.type === "component" || props.type === "componentEmpty" ? {
                      shouldShowTroubleRenderingAlert: true
                    } : void 0
                  }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$j, {
                      size: "lg",
                      "prefix-icon": unref(TestResultsIcon),
                      "prefix-icon-class": "w-16px h-16px icon-dark-white",
                      onClick: _cache[3] || (_cache[3] = ($event) => emits("close"))
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("createSpec.successPage.runSpecButton")), 1)
                      ]),
                      _: 1
                    }, 8, ["prefix-icon"])
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode(_sfc_main$j, {
                  size: "lg",
                  "prefix-icon": unref(__unplugin_components_1$2),
                  "prefix-icon-class": "w-16px h-16px icon-dark-gray-500",
                  variant: "outline",
                  onClick: _cache[4] || (_cache[4] = ($event) => emits("restart"))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("createSpec.successPage.createAnotherSpecButton")), 1)
                  ]),
                  _: 1
                }, 8, ["prefix-icon"])
              ];
            }),
            _: 1
          })
        ], 64))
      ]);
    };
  }
});
const EmptyGenerator = {
  card: _sfc_main$b,
  entry: _sfc_main$9,
  matches: () => true,
  show: () => true,
  id: "empty"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$m, {
        variant: "bare",
        class: "rounded h-444px w-640px overflow-auto"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$5 = { class: "h-full" };
const _hoisted_2$3 = {
  key: 0,
  class: "h-full relative",
  tabindex: "0"
};
const _hoisted_3$2 = { class: "h-full" };
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$1 = { class: "h-full inline-flex whitespace-nowrap items-center overflow-hidden" };
const _hoisted_6 = { class: "font-medium text-indigo-500 group-hocus:text-indigo-500" };
const _hoisted_7 = { class: "font-light text-gray-400" };
const _hoisted_8 = { class: "font-light ml-20px opacity-0 text-gray-600 duration-200 truncate group-hocus:opacity-60" };
const _hoisted_9 = {
  key: 1,
  class: "flex h-full items-center justify-center"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    files: null
  },
  emits: ["selectFile"],
  setup(__props) {
    gql`
fragment FileListItem on FileParts {
  id
  relative
  fileName
  fileExtension
  baseName
}
`;
    const name = (file) => {
      return file.baseName.replace(file.fileExtension, "");
    };
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        __props.files.length ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
          createBaseVNode("ul", _hoisted_3$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.files, (file) => {
              return openBlock(), createElementBlock("li", {
                key: file == null ? void 0 : file.id,
                class: "cursor-pointer flex border-b-1 border-b-gray-50 leading-normal text-16px gap-8px group items-center last last:border-none last:h-64px last:py-0 last:items-start children:h-40px children:py-8px",
                "data-cy": "file-list-row",
                onClick: ($event) => _ctx.$emit("selectFile", file)
              }, [
                createVNode(_component_i_cy_document_blank_x16, { class: "min-w-16px min-h-16px icon-light-gray-50 icon-dark-gray-300" }),
                createBaseVNode("div", _hoisted_5$1, [
                  createBaseVNode("span", _hoisted_6, toDisplayString(name(file)), 1),
                  createBaseVNode("span", _hoisted_7, toDisplayString(file.fileExtension), 1),
                  createBaseVNode("span", _hoisted_8, toDisplayString(file.relative), 1)
                ])
              ], 8, _hoisted_4$2);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
          renderSlot(_ctx.$slots, "no-results")
        ]))
      ]);
    };
  }
});
const FileMatchInput_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { modelValue: localModelValue } = useVModels(props, emits);
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localModelValue) ? localModelValue.value = $event : null),
        class: "flex-grow p-0 text-gray-700 placeholder-gray-400 border-transparent outline-none placeholder-shown:overflow-ellipsis placeholder-shown:truncate hocus:border-transparent mr-8px",
        type: "search",
        autocomplete: "off"
      }, null, 512)), [
        [vModelText, unref(localModelValue)]
      ]);
    };
  }
});
const FileMatchInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5cccd1c3"]]);
const _hoisted_1$4 = {
  "data-cy": "file-match-button",
  class: "inline-flex items-center h-full text-gray-700 transition duration-150 rounded-l outline-none group bg-gray-50 border-r-gray-100 border-r-1 hocus:bg-indigo-50 hocus:border-r-indigo-300 hocus:text-indigo-500 px-12px"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    expanded: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_right_small_x16 = __unplugin_components_0$3;
      return openBlock(), createElementBlock("button", _hoisted_1$4, [
        createVNode(_component_i_cy_chevron_right_small_x16, {
          class: normalizeClass(["transition duration-150 transform min-w-16px min-h-16px icon-dark-gray-400 group-hocus:icon-dark-indigo-400", {
            "rotate-90": __props.expanded
          }])
        }, null, 8, ["class"]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$3 = { class: "rounded border-1 h-40px w-full inline-flex items-center hocus-default focus-within-default truncate" };
const _hoisted_2$2 = { key: 0 };
const _hoisted_3$1 = { class: "flex-grow min-w-min inline-flex items-center group" };
const _hoisted_4$1 = { class: "flex-grow inline-flex items-center group" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    extensionPattern: null,
    pattern: null,
    matches: null
  },
  emits: ["update:extensionPattern", "update:pattern"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const { extensionPattern: localExtensionPattern, pattern: localPattern } = useVModels(props, emits);
    const indicatorText = computed(() => {
      const numerator = props.matches.found;
      const denominator = props.matches.total;
      if (localPattern.value) {
        return t("components.fileSearch.matchesIndicator", { count: numerator, denominator, numerator });
      }
      return t("components.fileSearch.matchesIndicatorEmptyFileSearch", { count: numerator, denominator, numerator });
    });
    const [expanded, toggleExpanded] = useToggle(false);
    return (_ctx, _cache) => {
      const _component_i_cy_magnifying_glass_x16 = __unplugin_components_0$4;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$3, [
          createVNode(_sfc_main$5, {
            expanded: unref(expanded),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(toggleExpanded)())
          }, {
            default: withCtx(() => [
              !unref(expanded) ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(unref(localExtensionPattern)), 1)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["expanded"]),
          createBaseVNode("div", _hoisted_3$1, [
            !unref(expanded) ? (openBlock(), createBlock(_component_i_cy_magnifying_glass_x16, {
              key: 0,
              class: "mr-8px ml-12px inline-block icon-light-gray-50 icon-dark-gray-500 group-focus-within:icon-light-indigo-50 group-focus-within:icon-dark-indigo-400"
            })) : createCommentVNode("", true),
            unref(expanded) ? (openBlock(), createBlock(FileMatchInput, {
              key: 1,
              modelValue: unref(localExtensionPattern),
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localExtensionPattern) ? localExtensionPattern.value = $event : null),
              class: "ml-12px",
              placeholder: unref(t)("components.fileSearch.byExtensionInput")
            }, null, 8, ["modelValue", "placeholder"])) : (openBlock(), createBlock(FileMatchInput, {
              key: 2,
              modelValue: unref(localPattern),
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(localPattern) ? localPattern.value = $event : null),
              "aria-label": "file-name-input",
              placeholder: unref(t)("components.fileSearch.byFilenameInput")
            }, null, 8, ["modelValue", "placeholder"]))
          ]),
          renderSlot(_ctx.$slots, "matches", {}, () => [
            createVNode(_sfc_main$n, {
              class: "mr-8px truncate",
              "data-cy": "file-match-indicator"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(indicatorText)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["rounded border-1 h-40px mt-8px w-full inline-flex items-center hocus-default focus-within-default", { "hidden": !unref(expanded) }])
        }, [
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_i_cy_magnifying_glass_x16, { class: "mr-8px ml-12px inline-block icon-light-gray-50 icon-dark-gray-500 group-focus-within:icon-light-indigo-50 group-focus-within:icon-dark-indigo-400" }),
            createVNode(FileMatchInput, {
              modelValue: unref(localPattern),
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(localPattern) ? localPattern.value = $event : null),
              placeholder: unref(t)("components.fileSearch.byFilenameInput")
            }, null, 8, ["modelValue", "placeholder"])
          ])
        ], 2)
      ]);
    };
  }
});
const _hoisted_1$2 = { "data-testid": "loading" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    files: null,
    extensionPattern: null,
    loading: { type: Boolean, default: false }
  },
  emits: ["selectFile", "update:extensionPattern"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment FileChooser on FileParts {
  relative
  id
  ...FileListItem
}
`;
    const initialExtensionPattern = props.extensionPattern;
    const localExtensionPattern = ref(props.extensionPattern);
    const filePathSearch = ref("");
    const selectFile = (file) => {
      emits("selectFile", file);
    };
    const fileMatchRef = ref(null);
    const { height: fileMatchHeight } = useElementSize(fileMatchRef);
    const debounce = 200;
    const debouncedExtensionPattern = useDebounce(localExtensionPattern, debounce);
    debouncedWatch(localExtensionPattern, (value) => {
      emits("update:extensionPattern", value);
    }, { debounce });
    const filteredFiles = computed(() => {
      var _a;
      return (_a = props.files) == null ? void 0 : _a.filter((file) => {
        return file.relative.toLowerCase().includes(filePathSearch.value.toLowerCase());
      });
    });
    const matches = computed(() => {
      return {
        total: props.files.length,
        found: filteredFiles.value.length
      };
    });
    const noResults = computed(() => {
      return {
        search: filePathSearch.value || debouncedExtensionPattern.value,
        message: filePathSearch.value ? t("noResults.defaultMessage") : t("components.fileSearch.noMatchesForExtension"),
        clear: filePathSearch.value ? () => filePathSearch.value = "" : () => localExtensionPattern.value = initialExtensionPattern
      };
    });
    return (_ctx, _cache) => {
      const _component_i_cy_loading_x16 = __unplugin_components_0$5;
      return openBlock(), createBlock(_sfc_main$8, {
        variant: "bare",
        class: "bg-white flex flex-col px-24px relative"
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$4, {
            ref_key: "fileMatchRef",
            ref: fileMatchRef,
            pattern: filePathSearch.value,
            "onUpdate:pattern": _cache[0] || (_cache[0] = ($event) => filePathSearch.value = $event),
            extensionPattern: localExtensionPattern.value,
            "onUpdate:extensionPattern": _cache[1] || (_cache[1] = ($event) => localExtensionPattern.value = $event),
            class: "bg-white pt-24px pb-12px top-0px z-10 sticky",
            matches: unref(matches)
          }, createSlots({ _: 2 }, [
            __props.loading ? {
              name: "matches",
              fn: withCtx(() => [
                createVNode(_component_i_cy_loading_x16, { class: "h-24px mr-10px animate-spin w-24px" })
              ])
            } : void 0
          ]), 1032, ["pattern", "extensionPattern", "matches"]),
          withDirectives(createBaseVNode("div", _hoisted_1$2, " Loading ", 512), [
            [vShow, __props.loading]
          ]),
          withDirectives(createVNode(_sfc_main$7, {
            style: normalizeStyle({ paddingTop: `${unref(fileMatchHeight) + 36}px` }),
            class: "right-24px left-24px absolute",
            files: unref(filteredFiles),
            search: filePathSearch.value,
            onSelectFile: selectFile
          }, {
            "no-results": withCtx(() => [
              createVNode(_sfc_main$g, {
                "empty-search": "",
                "search-term": unref(noResults).search,
                message: unref(noResults).message,
                onClear: unref(noResults).clear
              }, null, 8, ["search-term", "message", "onClear"])
            ]),
            _: 1
          }, 8, ["style", "files", "search"]), [
            [vShow, !__props.loading]
          ])
        ]),
        _: 1
      });
    };
  }
});
const ComponentGeneratorStepOne_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-21118509"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "flex flex-col flex-grow justify-between" };
const _hoisted_2$1 = { class: "flex-grow" };
const _hoisted_3 = {
  key: 0,
  class: "mt-48px w-full inline-flex items-center justify-center"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-lg" }, " Loading ", -1));
const _hoisted_5 = {
  key: 1,
  class: "bg-white rounded-b h-24px bottom-0 left-0 absolute ghost-div"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    gql: null
  },
  emits: ["update:title", "update:description", "restart", "close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const { title } = useVModels(props, emits);
    title.value = t("createSpec.component.importFromComponent.chooseAComponentHeader");
    gql`
fragment ComponentGeneratorStepOne_codeGenGlob on CurrentProject {
  id
  codeGenGlobs {
    id
    component
  }
}
`;
    gql`
query ComponentGeneratorStepOne($glob: String!) {
  currentProject {
    id
    codeGenCandidates(glob: $glob) {
      id
      fileName
      fileExtension
      absolute
      relative
      baseName
    }
    # Add the specs, so we can keep the list up to date with the cache
    specs {
      id
      ...SpecNode_InlineSpecList
    }
  }
}
`;
    gql`
mutation ComponentGeneratorStepOne_generateSpec($codeGenCandidate: String!, $type: CodeGenType!) {
  generateSpecFromSource(codeGenCandidate: $codeGenCandidate, type: $type) {
    ...GeneratorSuccess
    currentProject {
      id
      ...EmptyGenerator
    }
    generatedSpecResult {
      ... on GeneratedSpecError {
        fileName
      }
    }
  }
}`;
    const mutation = useMutation(ComponentGeneratorStepOne_GenerateSpecDocument);
    const extensionPattern = ref(props.gql.codeGenGlobs.component);
    const query = useQuery({
      query: ComponentGeneratorStepOneDocument,
      variables: { glob: extensionPattern }
    });
    const allFiles = computed(() => {
      var _a, _b, _c;
      if ((_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.codeGenCandidates) {
        return (_c = query.data.value.currentProject) == null ? void 0 : _c.codeGenCandidates;
      }
      return [];
    });
    const result = ref(null);
    const generatedSpecError = ref();
    const generateSpecFromSource = ref();
    whenever(result, () => {
      title.value = t("createSpec.successPage.header");
    });
    whenever(generatedSpecError, () => {
      title.value = t("createSpec.component.importEmptySpec.header");
    });
    const makeSpec = async (file) => {
      var _a, _b, _c, _d, _e, _f;
      const { data } = await mutation.executeMutation({
        codeGenCandidate: file.absolute,
        type: "component"
      });
      generateSpecFromSource.value = data == null ? void 0 : data.generateSpecFromSource;
      result.value = ((_b = (_a = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _a.generatedSpecResult) == null ? void 0 : _b.__typename) === "ScaffoldedFile" ? (_c = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _c.generatedSpecResult : null;
      generatedSpecError.value = ((_e = (_d = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _d.generatedSpecResult) == null ? void 0 : _e.__typename) === "GeneratedSpecError" ? (_f = data == null ? void 0 : data.generateSpecFromSource) == null ? void 0 : _f.generatedSpecResult : null;
    };
    const cancelSpecNameCreation = () => {
      generatedSpecError.value = null;
    };
    return (_ctx, _cache) => {
      const _component_i_cy_loading_x16 = __unplugin_components_0$5;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        generatedSpecError.value ? (openBlock(), createBlock(_sfc_main$9, {
          key: 0,
          gql: generateSpecFromSource.value.currentProject,
          title: "",
          type: "component",
          "other-generators": false,
          "spec-file-name": generatedSpecError.value.fileName,
          onRestart: cancelSpecNameCreation,
          onUpdateTitle: _cache[0] || (_cache[0] = (value) => emits("update:title", value))
        }, null, 8, ["gql", "spec-file-name"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_2$1, [
            unref(mutation).fetching.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(_component_i_cy_loading_x16, { class: "h-48px mr-12px animate-spin w-48px" }),
              _hoisted_4
            ])) : !result.value ? (openBlock(), createBlock(_sfc_main$3, {
              key: 1,
              extensionPattern: extensionPattern.value,
              "onUpdate:extensionPattern": _cache[1] || (_cache[1] = ($event) => extensionPattern.value = $event),
              files: unref(allFiles),
              loading: unref(query).fetching.value,
              onSelectFile: makeSpec
            }, null, 8, ["extensionPattern", "files", "loading"])) : (openBlock(), createBlock(_sfc_main$a, {
              key: 2,
              file: result.value.file
            }, null, 8, ["file"]))
          ]),
          createBaseVNode("div", null, [
            result.value ? (openBlock(), createBlock(StandardModalFooter, {
              key: 0,
              class: "flex gap-16px items-center"
            }, {
              default: withCtx(() => {
                var _a;
                return [
                  createVNode(_component_router_link, {
                    class: "outline-none",
                    to: { name: "SpecRunner", query: { file: (_a = result.value.file.relative) == null ? void 0 : _a.replace(/\\/g, "/") }, params: { shouldShowTroubleRenderingAlert: true } }
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$j, {
                        size: "lg",
                        "prefix-icon": unref(TestResultsIcon),
                        "prefix-icon-class": "w-16px h-16px icon-dark-white",
                        onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("createSpec.successPage.runSpecButton")), 1)
                        ]),
                        _: 1
                      }, 8, ["prefix-icon"])
                    ]),
                    _: 1
                  }, 8, ["to"]),
                  createVNode(_sfc_main$j, {
                    size: "lg",
                    "prefix-icon": unref(__unplugin_components_1$2),
                    "prefix-icon-class": "w-16px h-16px icon-dark-gray-500",
                    variant: "outline",
                    onClick: _cache[3] || (_cache[3] = ($event) => emits("restart"))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("createSpec.successPage.createAnotherSpecButton")), 1)
                    ]),
                    _: 1
                  }, 8, ["prefix-icon"])
                ];
              }),
              _: 1
            })) : (openBlock(), createElementBlock("div", _hoisted_5))
          ])
        ], 64))
      ]);
    };
  }
});
const ComponentGeneratorStepOne = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-21118509"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$e, {
        disabled: __props.disabled,
        header: unref(t)("createSpec.component.importFromComponent.header"),
        description: unref(t)("createSpec.component.importFromComponent.description"),
        icon: unref(DocumentCodeIcon),
        "badge-text": unref(t)("versions.new")
      }, null, 8, ["disabled", "header", "description", "icon", "badge-text"]);
    };
  }
});
const ComponentGenerator = {
  card: _sfc_main$1,
  entry: ComponentGeneratorStepOne,
  show: (currentProject) => {
    var _a;
    return ((_a = currentProject == null ? void 0 : currentProject.codeGenGlobs) == null ? void 0 : _a.component) === "*.vue";
  },
  matches: filters.matchesCT,
  id: "component"
};
const generatorList = [
  ComponentGenerator,
  ScaffoldGenerator,
  EmptyGenerator
];
const getFilteredGeneratorList = (currentProject) => {
  return computed(() => generatorList.filter((g) => g.matches(currentProject.currentTestingType) && (g.show === void 0 ? true : g.show(currentProject))));
};
const generators = lodash.exports.keyBy(generatorList, "id");
function getPathForPlatform(posixPath) {
  if (!posixPath) {
    return null;
  }
  const cy = window.Cypress;
  const platform2 = (cy == null ? void 0 : cy.platform) || JSON.parse(decodeBase64Unicode(window.__CYPRESS_CONFIG__.base64Config)).platform;
  if (platform2 === "win32")
    return posixPath.replaceAll("/", "\\");
  return posixPath;
}
const _hoisted_1 = { class: "flex flex-col min-h-280px sm:min-w-640px" };
const _hoisted_2 = {
  key: 1,
  class: "flex-grow flex items-center self-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    initialGenerator: null,
    show: { type: Boolean },
    gql: null
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const iteration = ref(0);
    gql`
fragment CreateSpecModal on Query {
  ...CreateSpecCards
  currentProject {
    id
    fileExtensionToUse
    defaultSpecFileName
    ...ComponentGeneratorStepOne_codeGenGlob
    ...EmptyGenerator
  }
}
`;
    const currentGeneratorId = ref(props.initialGenerator);
    const { t } = useI18n();
    const title = ref(t("createSpec.newSpecModalTitle"));
    const generator = computed(() => {
      if (currentGeneratorId.value)
        return generators[currentGeneratorId.value];
      return singleGenerator.value;
    });
    const helpLink = computed(() => {
      if (title.value === t("createSpec.e2e.importFromScaffold.specsAddedHeader")) {
        return "https://on.cypress.io/writing-and-organizing-tests";
      }
      return "";
    });
    const specFileName = computed(() => {
      var _a;
      return getPathForPlatform(((_a = props.gql.currentProject) == null ? void 0 : _a.defaultSpecFileName) || "");
    });
    const filteredGenerators = getFilteredGeneratorList(props.gql.currentProject);
    const singleGenerator = computed(() => filteredGenerators.value.length === 1 ? filteredGenerators.value[0] : null);
    whenever(not(generator), () => {
      title.value = t("createSpec.newSpecModalTitle");
    });
    function close() {
      currentGeneratorId.value = void 0;
      emits("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        class: "transition transition-all duration-200",
        variant: "bare",
        title: title.value,
        "model-value": __props.show,
        "help-link": unref(helpLink),
        "no-help": !unref(helpLink),
        "data-cy": "create-spec-modal",
        "onUpdate:modelValue": close
      }, {
        overlay: withCtx(({ classes }) => [
          createVNode(unref(DialogOverlay), {
            class: normalizeClass([classes, "bg-gray-900 opacity-[0.97]"])
          }, null, 8, ["class"])
        ]),
        default: withCtx(() => {
          var _a, _b;
          return [
            createBaseVNode("div", _hoisted_1, [
              unref(generator) ? (openBlock(), createBlock(resolveDynamicComponent(unref(generator).entry), {
                key: `${unref(generator).id}-${iteration.value}`,
                title: title.value,
                "onUpdate:title": _cache[0] || (_cache[0] = ($event) => title.value = $event),
                gql: props.gql.currentProject,
                type: ((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType) === "e2e" ? (_b = props.gql.currentProject) == null ? void 0 : _b.currentTestingType : "componentEmpty",
                "spec-file-name": unref(specFileName),
                "other-generators": unref(filteredGenerators).length > 1,
                onRestart: _cache[1] || (_cache[1] = ($event) => {
                  currentGeneratorId.value = void 0;
                  iteration.value++;
                }),
                onClose: close
              }, null, 8, ["title", "gql", "type", "spec-file-name", "other-generators"])) : (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(_sfc_main$f, {
                  gql: props.gql,
                  generators: unref(filteredGenerators),
                  onSelect: _cache[2] || (_cache[2] = ($event) => currentGeneratorId.value = $event)
                }, null, 8, ["gql", "generators"])
              ]))
            ])
          ];
        }),
        _: 1
      }, 8, ["title", "model-value", "help-link", "no-help"]);
    };
  }
});
export {
  DocumentIconBlank as D,
  RUN_ALL_SPECS_KEY as R,
  __unplugin_components_0$1 as _,
  _sfc_main$i as a,
  __unplugin_components_1 as b,
  _sfc_main$h as c,
  deriveIndexes as d,
  useSpecFilter as e,
  fuzzySortSpecs as f,
  useCollapsibleTree as g,
  buildSpecTree as h,
  useVirtualList as i,
  useRunAllSpecsStore as j,
  _sfc_main$g as k,
  getFilteredGeneratorList as l,
  makeFuzzyFoundSpec as m,
  _sfc_main$f as n,
  _sfc_main as o,
  __unplugin_components_2 as p,
  isRunMode as q,
  getPathForPlatform as r,
  RUN_ALL_SPECS as s,
  useCachedSpecs as u
};
