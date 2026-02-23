import { d as defineComponent, o as openBlock, Y as createElementBlock, a3 as Fragment, a4 as renderList, B as createBaseVNode, C as createVNode, w as withCtx, X as normalizeClass, i as createCommentVNode, g as gql, t as toDisplayString, ay as commonjsGlobal, _ as _export_sfc, a as computed, c as createBlock, e as unref, f as createTextVNode, M as _sfc_main$d, a$ as pushScopeId, b0 as popScopeId, aC as createStaticVNode, u as useI18n, P as resolveDynamicComponent, m as ref, aR as whenever, r as resolveComponent, z as _sfc_main$f, H as _sfc_main$g, aO as useVModels, bW as useMarkdown, h as _sfc_main$h, an as isRef, bI as ErrorOutlineIcon, x as renderSlot, A as useLoginConnectStore, s as onMounted, b as useMutation, c2 as RunsErrorRenderer_RequestAccessDocument, D as ConnectIcon, c3 as RunsContainer_FetchNewerRunsDocument, c4 as onUnmounted, q as watch, c5 as _sfc_main$j, j as useQuery, ak as useOnline, p as watchEffect, a7 as TransitionQuickFade, c6 as RunsDocument } from "./index.ca5c273b.js";
import { _ as _sfc_main$b, a as _sfc_main$e } from "./CloudConnectButton.b1e66e79.js";
import { a as _sfc_main$c, _ as _sfc_main$i, S as SendIcon } from "./ResultCounts.1681ff47.js";
import { R as RefreshIcon } from "./refresh_x16.49a2f2fd.js";
import "./user-outline_x16.2d9d4987.js";
const _hoisted_1$n = { "data-cy": "runs-loader" };
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("div", { class: "h-20px w-20px bg-gray-100 rounded-xl mx-2px" }, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("div", { class: "w-256px rounded-xl h-16px bg-gray-50 my-4px" }, null, -1);
const _hoisted_4$7 = {
  key: 0,
  class: "rounded-lg h-16px bg-gray-50 w-216px"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const numberOfLines = 20;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        (openBlock(), createElementBlock(Fragment, null, renderList(numberOfLines, (i) => {
          return createBaseVNode("div", {
            key: i,
            class: "mb-4"
          }, [
            createVNode(_sfc_main$b, {
              disabled: "",
              class: "border border-gray-100"
            }, {
              icon: withCtx(() => [
                _hoisted_2$l
              ]),
              header: withCtx(() => [
                _hoisted_3$g
              ]),
              description: withCtx(() => [
                (openBlock(), createElementBlock(Fragment, null, renderList(4, (j) => {
                  return createBaseVNode("div", {
                    key: j,
                    class: normalizeClass(["rounded-lg h-8px bg-gray-50 mr-20px inline-block", j === 4 ? "w-64px" : "w-80px"])
                  }, null, 2);
                }), 64))
              ]),
              right: withCtx(() => [
                i >= 2 ? (openBlock(), createElementBlock("div", _hoisted_4$7)) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024)
          ]);
        }), 64))
      ]);
    };
  }
});
const _hoisted_1$m = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("path", {
  d: "M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5.00001 7C5.00001 5.34315 6.34315 4 8 4C9.65686 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625C11.3991 9.97347 12.562 11.3365 12.8998 12.9992C11.6372 14.2369 9.90773 15 8 15C6.09228 15 4.3628 14.2369 3.10019 12.9992C3.43799 11.3365 4.60091 9.97347 6.1429 9.35625C5.4468 8.80686 5.00001 7.95561 5.00001 7Z",
  fill: "#9095AD",
  class: "icon-light"
}, null, -1);
const _hoisted_4$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.1429 9.35625C6.65371 9.7594 7.29876 10 8 10C8.70125 10 9.3463 9.7594 9.85711 9.35625M6.1429 9.35625C5.4468 8.80686 5.00001 7.95561 5.00001 7C5.00001 5.34315 6.34315 4 8 4C9.65686 4 11 5.34315 11 7C11 7.95561 10.5532 8.80686 9.85711 9.35625M6.1429 9.35625C4.60091 9.97347 3.43799 11.3365 3.10019 12.9992C4.3628 14.2369 6.09228 15 8 15C9.90773 15 11.6372 14.2369 12.8998 12.9992C12.562 11.3365 11.3991 9.97347 9.85711 9.35625",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_2$k,
  _hoisted_3$f,
  _hoisted_4$6
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_5$5);
}
const __unplugin_components_0$3 = { name: "cy-general-user_x16", render: render$d };
const _hoisted_1$l = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 12H6V10H3V12ZM6 12H13V10H6V12ZM10.2361 6H13V4H10.2361V6ZM6.89443 11.4472L9.34164 6.55279L7.55279 5.65836L5.10557 10.5528L6.89443 11.4472ZM14 5V7C15.1046 7 16 6.10457 16 5H14ZM14 5H12C12 6.10457 12.8954 7 14 7V5ZM14 5V3C12.8954 3 12 3.89543 12 5H14ZM14 5H16C16 3.89543 15.1046 3 14 3V5ZM14 11V13C15.1046 13 16 12.1046 16 11H14ZM14 11H12C12 12.1046 12.8954 13 14 13V11ZM14 11V9C12.8954 9 12 9.89543 12 11H14ZM14 11H16C16 9.89543 15.1046 9 14 9V11ZM2 11V13C3.10457 13 4 12.1046 4 11H2ZM2 11H0C0 12.1046 0.89543 13 2 13V11ZM2 11V9C0.89543 9 0 9.89543 0 11H2ZM2 11H4C4 9.89543 3.10457 9 2 9V11ZM10.2361 4C9.09975 4 8.06096 4.64201 7.55279 5.65836L9.34164 6.55279C9.51103 6.214 9.8573 6 10.2361 6V4Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$j
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_3$e);
}
const __unplugin_components_1$1 = { name: "cy-tech-branch-h_x16", render: render$c };
const _hoisted_1$k = { class: "flex gap-8px items-center" };
const _hoisted_2$i = {
  key: 0,
  class: "rounded-md font-semibold bg-warning-100 text-sm py-2px px-4px text-warning-600 whitespace-nowrap"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RunResults on CloudRun {
  id
  totalPassed
  totalFailed
  totalPending
  totalSkipped
  totalFlakyTests
}
`;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        props.gql.totalFlakyTests ? (openBlock(), createElementBlock("span", _hoisted_2$i, toDisplayString(props.gql.totalFlakyTests) + " Flaky", 1)) : createCommentVNode("", true),
        createVNode(_sfc_main$c, {
          "total-failed": props.gql.totalFailed,
          "total-passed": props.gql.totalPassed,
          "total-pending": props.gql.totalPending,
          "total-skipped": props.gql.totalSkipped
        }, null, 8, ["total-failed", "total-passed", "total-pending", "total-skipped"])
      ]);
    };
  }
});
const _hoisted_1$j = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.8638 9.50387C16.1421 9.02682 15.9809 8.4145 15.5039 8.13622C15.0268 7.85794 14.4145 8.01908 14.1362 8.49613L11.2898 13.3756L9.70711 11.7929C9.31658 11.4024 8.68342 11.4024 8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071L10.7929 15.7071C11.0122 15.9264 11.3208 16.0315 11.6283 15.9917C11.9358 15.9519 12.2075 15.7717 12.3638 15.5039L15.8638 9.50387Z",
  fill: "#1FA971",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$h
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_3$d);
}
const PassedIcon = { name: "cy-status-passed-solid_x24", render: render$b };
const _hoisted_1$i = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM9.70711 8.29289C9.31658 7.90237 8.68342 7.90237 8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711L10.5858 12L8.29289 14.2929C7.90237 14.6834 7.90237 15.3166 8.29289 15.7071C8.68342 16.0976 9.31658 16.0976 9.70711 15.7071L12 13.4142L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13.4142 12L15.7071 9.70711C16.0976 9.31658 16.0976 8.68342 15.7071 8.29289C15.3166 7.90237 14.6834 7.90237 14.2929 8.29289L12 10.5858L9.70711 8.29289Z",
  fill: "#E45770",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$c = [
  _hoisted_2$g
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$c);
}
const FailedIcon = { name: "cy-status-failed-solid_x24", render: render$a };
const _hoisted_1$h = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13V8ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z",
  fill: "#DB7903",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$b = [
  _hoisted_2$f
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$b);
}
const ErroredIcon = { name: "cy-status-errored-solid_x24", render: render$9 };
const _hoisted_1$g = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  d: "M4.92893 19.0711C8.83418 22.9763 15.1658 22.9763 19.0711 19.0711C22.9763 15.1658 22.9763 8.83418 19.0711 4.92893M4.92893 19.0711C1.02369 15.1658 1.02369 8.83418 4.92893 4.92893C8.83418 1.02369 15.1658 1.02369 19.0711 4.92893M4.92893 19.0711L19.0711 4.92893",
  stroke: "#BFC2D4",
  class: "icon-dark",
  "stroke-width": "2"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$e
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_3$a);
}
const SkippedIcon = { name: "cy-status-skipped_x24", render: render$8 };
const _hoisted_1$f = {
  height: "1em",
  width: "1em",
  style: { "min-width": "24px", "min-height": "24px" },
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM8.5 7C7.67157 7 7 7.67157 7 8.5V15.5C7 16.3284 7.67157 17 8.5 17H15.5C16.3284 17 17 16.3284 17 15.5V8.5C17 7.67157 16.3284 7 15.5 7H8.5Z",
  class: "icon-dark",
  fill: "#BFC2D4"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$d
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_3$9);
}
const PendingIcon = { name: "cy-status-pending_x24", render: render$7 };
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = "millisecond", e = "second", n = "minute", r = "hour", i = "day", s = "week", u = "month", a = "quarter", o = "year", f = "date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, d = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, $ = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, l = { s: $, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + $(r2, 2, "0") + ":" + $(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, u), s2 = n2 - i2 < 0, a2 = e2.clone().add(r2 + (s2 ? -1 : 1), u);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - a2 : a2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(h2) {
      return { M: u, y: o, w: s, d: i, D: f, h: r, m: n, s: e, ms: t, Q: a }[h2] || String(h2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, y = "en", M = {};
    M[y] = d;
    var m = function(t2) {
      return t2 instanceof S;
    }, D = function(t2, e2, n2) {
      var r2;
      if (!t2)
        return y;
      if ("string" == typeof t2)
        M[t2] && (r2 = t2), e2 && (M[t2] = e2, r2 = t2);
      else {
        var i2 = t2.name;
        M[i2] = t2, r2 = i2;
      }
      return !n2 && r2 && (y = r2), r2 || !n2 && y;
    }, v = function(t2, e2) {
      if (m(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new S(n2);
    }, g = l;
    g.l = D, g.i = m, g.w = function(t2, e2) {
      return v(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var S = function() {
      function d2(t2) {
        this.$L = D(t2.locale, null, true), this.parse(t2);
      }
      var $2 = d2.prototype;
      return $2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return new Date(NaN);
          if (g.u(e2))
            return new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match(h);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.$x = t2.x || {}, this.init();
      }, $2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, $2.$utils = function() {
        return g;
      }, $2.isValid = function() {
        return !("Invalid Date" === this.$d.toString());
      }, $2.isSame = function(t2, e2) {
        var n2 = v(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, $2.isAfter = function(t2, e2) {
        return v(t2) < this.startOf(e2);
      }, $2.isBefore = function(t2, e2) {
        return this.endOf(e2) < v(t2);
      }, $2.$g = function(t2, e2, n2) {
        return g.u(t2) ? this[e2] : this.set(n2, t2);
      }, $2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $2.valueOf = function() {
        return this.$d.getTime();
      }, $2.startOf = function(t2, a2) {
        var h2 = this, c2 = !!g.u(a2) || a2, d3 = g.p(t2), $3 = function(t3, e2) {
          var n2 = g.w(h2.$u ? Date.UTC(h2.$y, e2, t3) : new Date(h2.$y, e2, t3), h2);
          return c2 ? n2 : n2.endOf(i);
        }, l2 = function(t3, e2) {
          return g.w(h2.toDate()[t3].apply(h2.toDate("s"), (c2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e2)), h2);
        }, y2 = this.$W, M2 = this.$M, m2 = this.$D, D2 = "set" + (this.$u ? "UTC" : "");
        switch (d3) {
          case o:
            return c2 ? $3(1, 0) : $3(31, 11);
          case u:
            return c2 ? $3(1, M2) : $3(0, M2 + 1);
          case s:
            var v2 = this.$locale().weekStart || 0, S2 = (y2 < v2 ? y2 + 7 : y2) - v2;
            return $3(c2 ? m2 - S2 : m2 + (6 - S2), M2);
          case i:
          case f:
            return l2(D2 + "Hours", 0);
          case r:
            return l2(D2 + "Minutes", 1);
          case n:
            return l2(D2 + "Seconds", 2);
          case e:
            return l2(D2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, $2.$set = function(s2, a2) {
        var h2, c2 = g.p(s2), d3 = "set" + (this.$u ? "UTC" : ""), $3 = (h2 = {}, h2[i] = d3 + "Date", h2[f] = d3 + "Date", h2[u] = d3 + "Month", h2[o] = d3 + "FullYear", h2[r] = d3 + "Hours", h2[n] = d3 + "Minutes", h2[e] = d3 + "Seconds", h2[t] = d3 + "Milliseconds", h2)[c2], l2 = c2 === i ? this.$D + (a2 - this.$W) : a2;
        if (c2 === u || c2 === o) {
          var y2 = this.clone().set(f, 1);
          y2.$d[$3](l2), y2.init(), this.$d = y2.set(f, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          $3 && this.$d[$3](l2);
        return this.init(), this;
      }, $2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, $2.get = function(t2) {
        return this[g.p(t2)]();
      }, $2.add = function(t2, a2) {
        var f2, h2 = this;
        t2 = Number(t2);
        var c2 = g.p(a2), d3 = function(e2) {
          var n2 = v(h2);
          return g.w(n2.date(n2.date() + Math.round(e2 * t2)), h2);
        };
        if (c2 === u)
          return this.set(u, this.$M + t2);
        if (c2 === o)
          return this.set(o, this.$y + t2);
        if (c2 === i)
          return d3(1);
        if (c2 === s)
          return d3(7);
        var $3 = (f2 = {}, f2[n] = 6e4, f2[r] = 36e5, f2[e] = 1e3, f2)[c2] || 1, l2 = this.$d.getTime() + t2 * $3;
        return g.w(l2, this);
      }, $2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, $2.format = function(t2) {
        var e2 = this;
        if (!this.isValid())
          return "Invalid Date";
        var n2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", r2 = g.z(this), i2 = this.$locale(), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = i2.weekdays, f2 = i2.months, h2 = function(t3, r3, i3, s3) {
          return t3 && (t3[r3] || t3(e2, n2)) || i3[r3].substr(0, s3);
        }, d3 = function(t3) {
          return g.s(s2 % 12 || 12, t3, "0");
        }, $3 = i2.meridiem || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: g.s(a2 + 1, 2, "0"), MMM: h2(i2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: g.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(i2.weekdaysMin, this.$W, o2, 2), ddd: h2(i2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: g.s(s2, 2, "0"), h: d3(1), hh: d3(2), a: $3(s2, u2, true), A: $3(s2, u2, false), m: String(u2), mm: g.s(u2, 2, "0"), s: String(this.$s), ss: g.s(this.$s, 2, "0"), SSS: g.s(this.$ms, 3, "0"), Z: r2 };
        return n2.replace(c, function(t3, e3) {
          return e3 || l2[t3] || r2.replace(":", "");
        });
      }, $2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $2.diff = function(t2, f2, h2) {
        var c2, d3 = g.p(f2), $3 = v(t2), l2 = 6e4 * ($3.utcOffset() - this.utcOffset()), y2 = this - $3, M2 = g.m(this, $3);
        return M2 = (c2 = {}, c2[o] = M2 / 12, c2[u] = M2, c2[a] = M2 / 3, c2[s] = (y2 - l2) / 6048e5, c2[i] = (y2 - l2) / 864e5, c2[r] = y2 / 36e5, c2[n] = y2 / 6e4, c2[e] = y2 / 1e3, c2)[d3] || y2, h2 ? M2 : g.a(M2);
      }, $2.daysInMonth = function() {
        return this.endOf(u).$D;
      }, $2.$locale = function() {
        return M[this.$L];
      }, $2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = D(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, $2.clone = function() {
        return g.w(this.$d, this);
      }, $2.toDate = function() {
        return new Date(this.valueOf());
      }, $2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $2.toISOString = function() {
        return this.$d.toISOString();
      }, $2.toString = function() {
        return this.$d.toUTCString();
      }, d2;
    }(), p = S.prototype;
    return v.prototype = p, [["$ms", t], ["$s", e], ["$m", n], ["$H", r], ["$W", i], ["$M", u], ["$y", o], ["$D", f]].forEach(function(t2) {
      p[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), v.extend = function(t2, e2) {
      return t2.$i || (t2(e2, S, v), t2.$i = true), v;
    }, v.locale = D, v.isDayjs = m, v.unix = function(t2) {
      return v(1e3 * t2);
    }, v.en = M[y], v.Ls = M, v.p = {}, v;
  });
})(dayjs_min);
const dayjs = dayjs_min.exports;
var relativeTime$1 = { exports: {} };
(function(module, exports) {
  !function(r, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(r, t, e) {
      r = r || {};
      var n = t.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
      function i(r2, t2, e2, o2) {
        return n.fromToBase(r2, t2, e2, o2);
      }
      e.en.relativeTime = o, n.fromToBase = function(t2, n2, i2, d2, u) {
        for (var a, f, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
          var y = h[c];
          y.d && (a = d2 ? e(t2).diff(i2, y.d, true) : i2.diff(t2, y.d, true));
          var p = (r.rounding || Math.round)(Math.abs(a));
          if (s = a > 0, p <= y.r || !y.r) {
            p <= 1 && c > 0 && (y = h[c - 1]);
            var v = l[y.l];
            u && (p = u("" + p)), f = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
            break;
          }
        }
        if (n2)
          return f;
        var M = s ? l.future : l.past;
        return "function" == typeof M ? M(f) : M.replace("%s", f);
      }, n.to = function(r2, t2) {
        return i(r2, t2, this, true);
      }, n.from = function(r2, t2) {
        return i(r2, t2, this);
      };
      var d = function(r2) {
        return r2.$u ? e.utc() : e();
      };
      n.toNow = function(r2) {
        return this.to(d(this), r2);
      }, n.fromNow = function(r2) {
        return this.from(d(this), r2);
      };
    };
  });
})(relativeTime$1);
const relativeTime = relativeTime$1.exports;
var duration$1 = { exports: {} };
(function(module, exports) {
  !function(t, s) {
    module.exports = s();
  }(commonjsGlobal, function() {
    var t, s, n = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, i = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, e = { years: 31536e6, months: 2592e6, days: 864e5, hours: 36e5, minutes: 6e4, seconds: 1e3, milliseconds: 1, weeks: 6048e5 }, r = function(t2) {
      return t2 instanceof c;
    }, o = function(t2, s2, n2) {
      return new c(t2, n2, s2.$l);
    }, u = function(t2) {
      return s.p(t2) + "s";
    }, h = function(t2) {
      return t2 < 0;
    }, a = function(t2) {
      return h(t2) ? Math.ceil(t2) : Math.floor(t2);
    }, d = function(t2, s2) {
      return t2 ? h(t2) ? { negative: true, format: "" + function(t3) {
        return Math.abs(t3);
      }(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
    }, c = function() {
      function h2(t2, s2, n2) {
        var r2 = this;
        if (this.$d = {}, this.$l = n2, s2)
          return o(t2 * e[u(s2)], this);
        if ("number" == typeof t2)
          return this.$ms = t2, this.parseFromMilliseconds(), this;
        if ("object" == typeof t2)
          return Object.keys(t2).forEach(function(s3) {
            r2.$d[u(s3)] = t2[s3];
          }), this.calMilliseconds(), this;
        if ("string" == typeof t2) {
          var h3 = t2.match(i);
          if (h3)
            return this.$d.years = h3[2], this.$d.months = h3[3], this.$d.weeks = h3[4], this.$d.days = h3[5], this.$d.hours = h3[6], this.$d.minutes = h3[7], this.$d.seconds = h3[8], this.calMilliseconds(), this;
        }
        return this;
      }
      var c2 = h2.prototype;
      return c2.calMilliseconds = function() {
        var t2 = this;
        this.$ms = Object.keys(this.$d).reduce(function(s2, n2) {
          return s2 + (t2.$d[n2] || 0) * e[n2];
        }, 0);
      }, c2.parseFromMilliseconds = function() {
        var t2 = this.$ms;
        this.$d.years = a(t2 / 31536e6), t2 %= 31536e6, this.$d.months = a(t2 / 2592e6), t2 %= 2592e6, this.$d.days = a(t2 / 864e5), t2 %= 864e5, this.$d.hours = a(t2 / 36e5), t2 %= 36e5, this.$d.minutes = a(t2 / 6e4), t2 %= 6e4, this.$d.seconds = a(t2 / 1e3), t2 %= 1e3, this.$d.milliseconds = t2;
      }, c2.toISOString = function() {
        var t2 = d(this.$d.years, "Y"), s2 = d(this.$d.months, "M"), n2 = +this.$d.days || 0;
        this.$d.weeks && (n2 += 7 * this.$d.weeks);
        var i2 = d(n2, "D"), e2 = d(this.$d.hours, "H"), r2 = d(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
        this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3);
        var u2 = d(o2, "S"), h3 = t2.negative || s2.negative || i2.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", c3 = (h3 ? "-" : "") + "P" + t2.format + s2.format + i2.format + a2 + e2.format + r2.format + u2.format;
        return "P" === c3 || "-P" === c3 ? "P0D" : c3;
      }, c2.toJSON = function() {
        return this.toISOString();
      }, c2.format = function(t2) {
        var i2 = t2 || "YYYY-MM-DDTHH:mm:ss", e2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
        return i2.replace(n, function(t3, s2) {
          return s2 || String(e2[t3]);
        });
      }, c2.as = function(t2) {
        return this.$ms / e[u(t2)];
      }, c2.get = function(t2) {
        var s2 = this.$ms, n2 = u(t2);
        return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? a(s2 / e[n2]) : this.$d[n2], 0 === s2 ? 0 : s2;
      }, c2.add = function(t2, s2, n2) {
        var i2;
        return i2 = s2 ? t2 * e[u(s2)] : r(t2) ? t2.$ms : o(t2, this).$ms, o(this.$ms + i2 * (n2 ? -1 : 1), this);
      }, c2.subtract = function(t2, s2) {
        return this.add(t2, s2, true);
      }, c2.locale = function(t2) {
        var s2 = this.clone();
        return s2.$l = t2, s2;
      }, c2.clone = function() {
        return o(this.$ms, this);
      }, c2.humanize = function(s2) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
      }, c2.milliseconds = function() {
        return this.get("milliseconds");
      }, c2.asMilliseconds = function() {
        return this.as("milliseconds");
      }, c2.seconds = function() {
        return this.get("seconds");
      }, c2.asSeconds = function() {
        return this.as("seconds");
      }, c2.minutes = function() {
        return this.get("minutes");
      }, c2.asMinutes = function() {
        return this.as("minutes");
      }, c2.hours = function() {
        return this.get("hours");
      }, c2.asHours = function() {
        return this.as("hours");
      }, c2.days = function() {
        return this.get("days");
      }, c2.asDays = function() {
        return this.as("days");
      }, c2.weeks = function() {
        return this.get("weeks");
      }, c2.asWeeks = function() {
        return this.as("weeks");
      }, c2.months = function() {
        return this.get("months");
      }, c2.asMonths = function() {
        return this.as("months");
      }, c2.years = function() {
        return this.get("years");
      }, c2.asYears = function() {
        return this.as("years");
      }, h2;
    }();
    return function(n2, i2, e2) {
      t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
        var n3 = e2.locale();
        return o(t2, { $l: n3 }, s2);
      }, e2.isDuration = r;
      var u2 = i2.prototype.add, h2 = i2.prototype.subtract;
      i2.prototype.add = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), u2.bind(this)(t2, s2);
      }, i2.prototype.subtract = function(t2, s2) {
        return r(t2) && (t2 = t2.asMilliseconds()), h2.bind(this)(t2, s2);
      };
    };
  });
})(duration$1);
const duration = duration$1.exports;
dayjs.extend(relativeTime);
dayjs.extend(duration);
const RunCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-c0af3e52"), n = n(), popScopeId(), n);
const _hoisted_1$e = { class: "font-semibold mr-8px whitespace-pre-wrap" };
const _hoisted_2$c = { class: "flex flex-wrap text-sm text-gray-700 gap-8px items-center whitespace-nowrap children:flex children:items-center" };
const _hoisted_3$8 = {
  key: 0,
  "data-cy": "run-card-author"
};
const _hoisted_4$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Commit Author:", -1));
const _hoisted_5$4 = {
  key: 1,
  "data-cy": "run-card-branch"
};
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Branch Name:", -1));
const _hoisted_7 = {
  key: 2,
  "data-cy": "run-card-created-at"
};
const _hoisted_8$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Run Created At:", -1));
const _hoisted_9 = {
  key: 3,
  "data-cy": "run-card-duration"
};
const _hoisted_10$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Run Total Duration:", -1));
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RunCard on CloudRun {
	id
	createdAt
	status
  totalDuration
  url
  tags {
    id
    name
  }
	...RunResults
	commitInfo {
		authorName
		authorEmail
		summary
		branch
	}
}
`;
    const ICON_MAP = {
      PASSED: PassedIcon,
      FAILED: FailedIcon,
      TIMEDOUT: ErroredIcon,
      ERRORED: ErroredIcon,
      OVERLIMIT: ErroredIcon,
      CANCELLED: SkippedIcon,
      NOTESTS: SkippedIcon,
      RUNNING: PendingIcon
    };
    const icon = computed(() => ICON_MAP[props.gql.status]);
    const run = computed(() => props.gql);
    const relativeCreatedAt = computed(() => dayjs(new Date(run.value.createdAt)).fromNow());
    const totalDuration = computed(() => dayjs.duration(run.value.totalDuration).format("HH:mm:ss").replace(/^0+:/, ""));
    const tags = computed(() => {
      var _a;
      const tags2 = ((_a = props.gql.tags) != null ? _a : []).map((tag) => tag == null ? void 0 : tag.name).filter(Boolean);
      return tags2.length <= 2 ? tags2 : tags2.slice(0, 2).concat(`+${tags2.length - 2}`);
    });
    return (_ctx, _cache) => {
      const _component_i_cy_general_user_x16 = __unplugin_components_0$3;
      const _component_i_cy_tech_branch_h_x16 = __unplugin_components_1$1;
      return openBlock(), createBlock(_sfc_main$d, {
        "data-cy": `runCard-${unref(run).id}`,
        class: "border rounded bg-light-50 border-gray-100 w-full block overflow-hidden hocus-default",
        href: unref(run).url || "#",
        "use-default-hocus": false
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$b, {
            icon: unref(icon),
            "data-cy": `run-card-icon-${unref(run).status}`
          }, {
            header: withCtx(() => {
              var _a;
              return [
                createBaseVNode("span", _hoisted_1$e, toDisplayString((_a = unref(run).commitInfo) == null ? void 0 : _a.summary), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tags), (tag) => {
                  return openBlock(), createElementBlock("span", {
                    key: tag,
                    class: "rounded-md font-semibold border-gray-200 border-1px text-xs mr-8px px-4px text-gray-700",
                    "data-cy": "run-tag"
                  }, toDisplayString(tag), 1);
                }), 128))
              ];
            }),
            description: withCtx(() => {
              var _a, _b;
              return [
                createBaseVNode("ul", _hoisted_2$c, [
                  ((_a = unref(run).commitInfo) == null ? void 0 : _a.authorName) ? (openBlock(), createElementBlock("li", _hoisted_3$8, [
                    createVNode(_component_i_cy_general_user_x16, {
                      class: "mr-1 icon-dark-gray-500 icon-light-gray-100 icon-secondary-light-gray-200",
                      "data-cy": "run-card-avatar"
                    }),
                    _hoisted_4$5,
                    createTextVNode(toDisplayString(unref(run).commitInfo.authorName), 1)
                  ])) : createCommentVNode("", true),
                  ((_b = unref(run).commitInfo) == null ? void 0 : _b.branch) ? (openBlock(), createElementBlock("li", _hoisted_5$4, [
                    createVNode(_component_i_cy_tech_branch_h_x16, { class: "mr-1 icon-dark-gray-300" }),
                    _hoisted_6$1,
                    createTextVNode(toDisplayString(unref(run).commitInfo.branch), 1)
                  ])) : createCommentVNode("", true),
                  unref(run).createdAt ? (openBlock(), createElementBlock("li", _hoisted_7, [
                    _hoisted_8$1,
                    createTextVNode(toDisplayString(unref(relativeCreatedAt)), 1)
                  ])) : createCommentVNode("", true),
                  unref(run).totalDuration ? (openBlock(), createElementBlock("li", _hoisted_9, [
                    _hoisted_10$1,
                    createTextVNode(toDisplayString(unref(totalDuration)), 1)
                  ])) : createCommentVNode("", true)
                ])
              ];
            }),
            right: withCtx(() => [
              createVNode(_sfc_main$9, {
                gql: props.gql
              }, null, 8, ["gql"])
            ]),
            _: 1
          }, 8, ["icon", "data-cy"])
        ]),
        _: 1
      }, 8, ["data-cy", "href"]);
    };
  }
});
const RunCard = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-c0af3e52"]]);
const _hoisted_1$d = {
  height: "1em",
  width: "1em",
  style: { "min-width": "120px", "min-height": "120px" },
  viewBox: "0 0 121 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M60.3333 116C91.2612 116 116.333 90.928 116.333 60C116.333 29.0721 91.2612 4 60.3333 4C29.4053 4 4.33325 29.0721 4.33325 60C4.33325 90.928 29.4053 116 60.3333 116Z",
  fill: "#C2F1DE"
}, null, -1);
const _hoisted_3$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M60.3332 103C84.0815 103 103.333 83.7483 103.333 60C103.333 36.2518 84.0815 17 60.3332 17C36.585 17 17.3333 36.2518 17.3333 60C17.3333 83.7483 36.585 103 60.3332 103Z",
  fill: "#69D3A7"
}, null, -1);
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M72.7703 59.9579C72.7703 62.4544 72.031 64.895 70.646 66.9708C69.2609 69.0466 67.2922 70.6647 64.9889 71.6201C62.6856 72.5755 60.1513 72.8252 57.7061 72.3382C55.261 71.8511 53.0149 70.6489 51.252 68.8836C49.4892 67.1182 48.2888 64.8693 47.8024 62.4207C47.316 59.9721 47.5656 57.4343 48.5197 55.1278C49.4737 52.8213 51.0893 50.8496 53.1622 49.4626C55.2351 48.0756 57.6722 47.3352 60.1652 47.3352C63.5083 47.3352 66.7144 48.6655 69.0783 51.0327C71.4422 53.3999 72.7703 56.6101 72.7703 59.9579ZM90.3333 65.3437V54.5305C90.3333 54.1399 90.1783 53.765 89.9025 53.4888C89.6268 53.2127 89.2527 53.0579 88.8626 53.0579H82.9383C82.4743 51.6063 81.8839 50.1984 81.1736 48.8503L85.3753 44.6428C85.6381 44.3557 85.7838 43.9803 85.7838 43.5909C85.7838 43.2014 85.6381 42.8261 85.3753 42.539L77.6022 34.9652C77.3224 34.7049 76.9546 34.5604 76.5728 34.5604C76.1909 34.5604 75.8232 34.7049 75.5434 34.9652L71.3417 39.1727C70.0081 38.4244 68.5998 37.8178 67.14 37.3632V31.4731C67.14 31.0825 66.9851 30.7076 66.7093 30.4314C66.4335 30.1553 66.0594 30 65.6694 30H54.8711C54.6779 30 54.4867 30.0385 54.3083 30.1125C54.1299 30.1865 53.9677 30.2947 53.8311 30.4314C53.6946 30.5682 53.5863 30.7304 53.5124 30.9091C53.4385 31.0878 53.4004 31.2797 53.4004 31.4731V37.3632C51.9406 37.8178 50.5324 38.4244 49.1988 39.1727L44.9971 34.9652C44.7173 34.7049 44.3496 34.5604 43.9677 34.5604C43.5858 34.5604 43.2181 34.7049 42.9383 34.9652L35.2912 42.6227C35.1515 42.7598 35.0404 42.9239 34.9646 43.1045C34.8888 43.2851 34.8499 43.4787 34.8499 43.6746C34.8499 43.8705 34.8888 44.0646 34.9646 44.2452C35.0404 44.4259 35.1515 44.5894 35.2912 44.7265L39.4929 48.9341C38.7659 50.2741 38.1748 51.6837 37.7283 53.1416H31.8039C31.4138 53.1416 31.0397 53.2969 30.764 53.5731C30.4882 53.8493 30.3333 54.2241 30.3333 54.6147V65.4279C30.3333 65.8185 30.4882 66.1929 30.764 66.469C31.0397 66.7452 31.4138 66.9005 31.8039 66.9005H37.7283C38.1771 68.3576 38.7681 69.7669 39.4929 71.108L35.2912 75.3156C35.1527 75.4491 35.0426 75.6095 34.9673 75.7866C34.892 75.9637 34.8532 76.1539 34.8532 76.3465C34.8532 76.539 34.892 76.7297 34.9673 76.9068C35.0426 77.0839 35.1527 77.2438 35.2912 77.3773L42.9383 85.0354C43.0716 85.1741 43.2315 85.2841 43.4084 85.3594C43.5853 85.4348 43.7755 85.474 43.9677 85.474C44.1599 85.474 44.3503 85.4348 44.5271 85.3594C44.704 85.2841 44.8638 85.1741 44.9971 85.0354L49.1988 80.8278C50.5404 81.5597 51.947 82.1651 53.4004 82.6367V88.5275C53.4004 88.7208 53.4385 88.9122 53.5124 89.0909C53.5863 89.2696 53.6946 89.4323 53.8311 89.5691C53.9677 89.7058 54.1299 89.814 54.3083 89.888C54.4867 89.962 54.6779 90 54.8711 90H65.6694C66.0594 90 66.4335 89.8452 66.7093 89.5691C66.9851 89.2929 67.14 88.918 67.14 88.5275V82.6367C68.5934 82.1651 70 81.5597 71.3417 80.8278L75.5434 85.0354C75.6767 85.1741 75.8364 85.2841 76.0133 85.3594C76.1902 85.4348 76.3805 85.474 76.5728 85.474C76.765 85.474 76.9552 85.4348 77.1321 85.3594C77.309 85.2841 77.4689 85.1741 77.6022 85.0354L85.2493 77.3773C85.5091 77.0971 85.6535 76.7289 85.6535 76.3465C85.6535 75.964 85.5091 75.5958 85.2493 75.3156L81.0476 71.108C81.7559 69.7591 82.3462 68.3513 82.8122 66.9005H88.7366C88.937 66.9008 89.1354 66.86 89.3195 66.7808C89.5036 66.7016 89.6697 66.5855 89.8074 66.4398C89.9451 66.294 90.0516 66.1218 90.1204 65.9333C90.1892 65.7448 90.2187 65.544 90.2072 65.3437H90.3333Z",
  fill: "#00595D"
}, null, -1);
const _hoisted_5$3 = [
  _hoisted_2$b,
  _hoisted_3$7,
  _hoisted_4$4
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_5$3);
}
const SmartIcon = { name: "cy-illustration-gear_x120", render: render$6 };
const _hoisted_1$c = {
  height: "1em",
  width: "1em",
  style: { "min-width": "120px", "min-height": "120px" },
  viewBox: "0 0 120 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<rect x="17" y="8" width="86" height="104" rx="4" fill="#C2F1DE"></rect><path d="M95 16H72V24H95V16Z" fill="#69D3A7"></path><circle cx="37" cy="62" r="20" fill="#69D3A7"></circle><path d="M57.9373 76.9887L51.9715 82.9565L63.9031 94.8921L69.869 88.9243L57.9373 76.9887Z" fill="#00595D"></path><path d="M58.764 95.306L70.3128 83.7533L90.2201 103.667C90.7194 104.167 91 104.844 91 105.55C91 106.257 90.7193 106.934 90.22 107.433L82.4357 115.22C81.9365 115.719 81.2598 116 80.5538 116C79.8478 116 79.1705 115.719 78.6713 115.22L58.764 95.306Z" fill="#00595D"></path><path d="M57.2835 40.6398C61.4069 44.7602 64.2159 50.0116 65.3552 55.7293C66.4944 61.4471 65.9128 67.3744 63.6838 72.7615C61.4548 78.1485 57.6787 82.7535 52.833 85.9933C47.9874 89.233 42.29 90.9621 36.4617 90.9621C30.6334 90.9621 24.9361 89.233 20.0905 85.9933C15.2449 82.7535 11.4687 78.1485 9.23974 72.7615C7.01076 67.3744 6.42908 61.4471 7.56835 55.7293C8.70763 50.0116 11.5166 44.7602 15.64 40.6398C18.3724 37.901 21.6179 35.7282 25.1907 34.2456C28.7636 32.7631 32.5936 32 36.4617 32C40.3297 32 44.1599 32.7631 47.7328 34.2456C51.3057 35.7282 54.5512 37.901 57.2835 40.6398ZM23.2197 48.1771C20.6018 50.7968 18.8193 54.1341 18.0973 57.7672C17.3754 61.4003 17.7465 65.166 19.1639 68.5881C20.5812 72.0102 22.9811 74.9348 26.0601 76.9926C29.139 79.0504 32.7588 80.1489 36.4617 80.1489C40.1646 80.1489 43.7845 79.0504 46.8634 76.9926C49.9424 74.9348 52.3423 72.0102 53.7597 68.5881C55.177 65.166 55.5481 61.4003 54.8262 57.7672C54.1043 54.1341 52.3217 50.7968 49.7038 48.1771C47.9651 46.4372 45.9006 45.0573 43.6285 44.1156C41.3564 43.1739 38.9211 42.6892 36.4617 42.6892C34.0023 42.6892 31.5671 43.1739 29.295 44.1156C27.023 45.0573 24.9585 46.4372 23.2197 48.1771Z" fill="#00595D"></path>', 6);
const _hoisted_8 = [
  _hoisted_2$a
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_8);
}
const DebugIcon = { name: "cy-illustration-debug_x120", render: render$5 };
const _hoisted_1$b = {
  height: "1em",
  width: "1em",
  style: { "min-width": "120px", "min-height": "120px" },
  viewBox: "0 0 121 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.6665 32C11.4574 32 9.6665 33.7909 9.6665 36V112H43.6665V36C43.6665 33.7909 41.8756 32 39.6665 32H13.6665Z",
  fill: "#C2F1DE"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M47.6655 53C45.4564 53 43.6655 54.7909 43.6655 57V112H77.6655C77.6655 89.3725 77.6655 66.1093 77.6655 56.9991C77.6655 54.79 75.8747 53 73.6655 53H47.6655Z",
  fill: "#69D3A7"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M81.6655 8C79.4564 8 77.6655 9.79086 77.6655 12V112H111.666C111.666 69.2426 111.666 25.1974 111.666 11.9784C111.666 9.76931 109.875 8 107.666 8H81.6655Z",
  fill: "#00595D"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$9,
  _hoisted_3$6,
  _hoisted_4$3
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_5$2);
}
const ChartIcon = { name: "cy-illustration-chart_x120", render: render$4 };
const _hoisted_1$a = { class: "flex flex-col h-full mx-auto text-center max-w-714px justify-center" };
const _hoisted_2$8 = { class: "mb-40px text-18px text-gray-900" };
const _hoisted_3$5 = { class: "flex gap-32px" };
const _hoisted_4$2 = { class: "h-48px mt-8px text-gray-600" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    const notions = [
      {
        icon: SmartIcon,
        description: t("runs.connect.smartText")
      },
      {
        icon: DebugIcon,
        description: t("runs.connect.debugText")
      },
      {
        icon: ChartIcon,
        description: t("runs.connect.chartText")
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("h2", _hoisted_2$8, toDisplayString(unref(t)("runs.connect.title")), 1),
        createBaseVNode("div", _hoisted_3$5, [
          (openBlock(), createElementBlock(Fragment, null, renderList(notions, (block, i) => {
            return createBaseVNode("div", { key: i }, [
              (openBlock(), createBlock(resolveDynamicComponent(block.icon), { class: "mx-auto h-120px w-120px" })),
              createBaseVNode("p", _hoisted_4$2, toDisplayString(block.description), 1)
            ]);
          }), 64))
        ]),
        createVNode(_sfc_main$e, {
          "utm-medium": "Runs Tab",
          class: "mx-auto mt-40px"
        })
      ]);
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
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 12L13 8M13 8L9 4M13 8L3 8",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$7
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$4);
}
const __unplugin_components_0$2 = { name: "cy-arrow-outline-right_x16", render: render$3 };
const _hoisted_1$8 = { class: "flex px-16px pt-16px leading-24px md:items-center" };
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("span", { class: "font-normal text-jade-600" }, "projectId", -1);
const _hoisted_3$3 = { class: "font-normal text-jade-600" };
const _hoisted_4$1 = { class: "flex px-16px pt-16px pb-16px leading-24px md:items-center" };
const _hoisted_5$1 = { class: "font-normal text-jade-600" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment RunsConnectSuccessAlert on CurrentProject {
  id
  projectId
  configFileAbsolutePath
  projectRoot
}`;
    const showAlert = ref(true);
    const projectId = computed(() => props.gql.projectId);
    const configFilePath = computed(() => {
      var _a;
      return (_a = props.gql.configFileAbsolutePath) == null ? void 0 : _a.replace(props.gql.projectRoot, "").replace(/^\//, "");
    });
    whenever(projectId, () => {
      showAlert.value = true;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_arrow_outline_right_x16 = __unplugin_components_0$2;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$f, {
        modelValue: showAlert.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showAlert.value = $event),
        status: "success",
        class: "mb-24px",
        dismissible: "",
        title: unref(t)("runs.connectSuccessAlert.title")
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$8, [
            createVNode(_component_i_cy_arrow_outline_right_x16, { class: "h-16px mr-8px w-16px inline align-middle icon-dark-jade-500 mt-4px md:mt-0" }),
            createBaseVNode("span", null, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runs.connectSuccessAlert.item1"
              }, {
                projectId: withCtx(() => [
                  _hoisted_2$6
                ]),
                configFile: withCtx(() => [
                  createBaseVNode("span", _hoisted_3$3, toDisplayString(unref(configFilePath)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          createBaseVNode("p", _hoisted_4$1, [
            createVNode(_component_i_cy_arrow_outline_right_x16, { class: "h-16px mr-8px w-16px inline align-middle icon-dark-jade-500 mt-4px md:mt-0" }),
            createBaseVNode("span", null, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runs.connectSuccessAlert.item2"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", _hoisted_5$1, toDisplayString(unref(configFilePath)), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const _hoisted_1$7 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<path d="M40 8H8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8Z" fill="#D0D2E0" class="icon-light"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8H8Z" fill="#D0D2E0" class="icon-light"></path><path d="M19 30L14 28L9 31V36H38C38.5523 36 39 35.5523 39 35V23L34 24L29 27L24 25L19 30Z" fill="#D0D2E0" class="icon-light"></path><path d="M5 16H4C4 16.5523 4.44772 17 5 17V16ZM43 16V17C43.5523 17 44 16.5523 44 16H43ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13V11ZM39 13C39.5523 13 40 12.5523 40 12C40 11.4477 39.5523 11 39 11V13ZM14 28L14.3714 27.0715C14.0812 26.9555 13.7535 26.9817 13.4855 27.1425L14 28ZM19 30L18.6286 30.9285C19 31.077 19.4242 30.99 19.7071 30.7071L19 30ZM24 25L24.3714 24.0715C24 23.923 23.5758 24.01 23.2929 24.2929L24 25ZM29 27L28.6286 27.9285C28.9188 28.0445 29.2465 28.0183 29.5145 27.8575L29 27ZM9 31L8.4855 30.1425C8.1843 30.3232 8 30.6487 8 31H9ZM34 24L33.8039 23.0194C33.6915 23.0419 33.5838 23.0835 33.4855 23.1425L34 24ZM9 36H8C8 36.5523 8.44772 37 9 37V36ZM8 9H40V7H8V9ZM42 11V37H44V11H42ZM6 37V11H4V37H6ZM5 17H43V15H5V17ZM19 13H39V11H19V13ZM8 39C6.89543 39 6 38.1046 6 37H4C4 39.2091 5.79086 41 8 41V39ZM42 37C42 38.1046 41.1046 39 40 39V41C42.2091 41 44 39.2091 44 37H42ZM40 9C41.1046 9 42 9.89543 42 11H44C44 8.79086 42.2091 7 40 7V9ZM8 7C5.79086 7 4 8.79086 4 11H6C6 9.89543 6.89543 9 8 9V7ZM4 11V16H6V11H4ZM44 16V11H42V16H44ZM38 19H10V21H38V19ZM13.6286 28.9285L18.6286 30.9285L19.3714 29.0715L14.3714 27.0715L13.6286 28.9285ZM19.7071 30.7071L24.7071 25.7071L23.2929 24.2929L18.2929 29.2929L19.7071 30.7071ZM23.6286 25.9285L28.6286 27.9285L29.3714 26.0715L24.3714 24.0715L23.6286 25.9285ZM40 35V23H38V35H40ZM40 23V21H38V23H40ZM40 39H24V41H40V39ZM24 39H16V41H24V39ZM16 39H8V41H16V39ZM9.5145 31.8575L14.5145 28.8575L13.4855 27.1425L8.4855 30.1425L9.5145 31.8575ZM29.5145 27.8575L34.5145 24.8575L33.4855 23.1425L28.4855 26.1425L29.5145 27.8575ZM34.1961 24.9806L39.1961 23.9806L38.8039 22.0194L33.8039 23.0194L34.1961 24.9806ZM38 35H9V37H38V35ZM10 36V21H8V36H10ZM8 31V36H10V31H8ZM38 21H40C40 19.8954 39.1046 19 38 19V21ZM38 35V37C39.1046 37 40 36.1046 40 35H38ZM10 19C8.89543 19 8 19.8954 8 21H10H10V19Z" fill="#1B1E2E" class="icon-dark"></path><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M37 37C37 33.6863 34.3137 31 31 31C27.6863 31 25 33.6863 25 37C25 40.3137 27.6863 43 31 43C34.3137 43 37 40.3137 37 37Z" fill="#69D3A7"></path><path d="M28.2929 38.2071C27.9024 37.8166 27.9024 37.1834 28.2929 36.7929C28.6834 36.4024 29.3166 36.4024 29.7071 36.7929L28.2929 38.2071ZM30.5 39L31.3137 39.5812C31.1429 39.8204 30.8754 39.9723 30.5825 39.9966C30.2895 40.0208 30.0007 39.915 29.7929 39.7071L30.5 39ZM32.1863 34.9188C32.5073 34.4693 33.1318 34.3653 33.5812 34.6863C34.0307 35.0073 34.1347 35.6318 33.8137 36.0812L32.1863 34.9188ZM36 37C36 34.2386 33.7614 32 31 32V30C34.866 30 38 33.134 38 37H36ZM31 32C28.2386 32 26 34.2386 26 37H24C24 33.134 27.134 30 31 30V32ZM26 37C26 39.7614 28.2386 42 31 42V44C27.134 44 24 40.866 24 37H26ZM31 42C33.7614 42 36 39.7614 36 37H38C38 40.866 34.866 44 31 44V42ZM29.7071 36.7929L31.2071 38.2929L29.7929 39.7071L28.2929 38.2071L29.7071 36.7929ZM29.6863 38.4188L32.1863 34.9188L33.8137 36.0812L31.3137 39.5812L29.6863 38.4188Z" fill="#00814D"></path>', 9);
const _hoisted_11 = [
  _hoisted_2$5
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_11);
}
const __unplugin_components_0$1 = { name: "cy-dashboard-checkmark_x48", render: render$2 };
const RunsEmpty_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = {
  "data-cy": "no-runs",
  class: "flex flex-col mx-auto min-h-full max-w-688px leading-24px items-center justify-center"
};
const _hoisted_2$4 = { class: "mt-32px mb-8px text-gray-900 text-18px" };
const _hoisted_3$2 = { class: "h-48px mb-8px text-gray-600" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_dashboard_checkmark_x48 = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(_component_i_cy_dashboard_checkmark_x48, { class: "h-48px w-48px icon-dark-gray-500 icon-light-gray-100" }),
        createBaseVNode("h2", _hoisted_2$4, toDisplayString(unref(t)("runs.empty.title")), 1),
        createBaseVNode("p", _hoisted_3$2, toDisplayString(unref(t)("runs.empty.description")), 1),
        createVNode(_sfc_main$g, { class: "w-full" })
      ]);
    };
  }
});
const RunsEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4de2844b"]]);
const Warning_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$5 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    title: null,
    message: null,
    details: { default: void 0 },
    modelValue: { type: Boolean, default: true },
    dismissible: { type: Boolean, default: true },
    retryable: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "retry"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    const { modelValue: show } = useVModels(props, emits);
    const markdownTarget = ref();
    let message = computed(() => {
      if (props.details) {
        return [props.message, `        ${props.details}`].join("\n\n");
      }
      return props.message;
    });
    const { markdown } = useMarkdown(markdownTarget, message.value, { classes: { code: ["bg-warning-200"] } });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$f, {
        modelValue: unref(show),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(show) ? show.value = $event : null),
        dismissible: __props.dismissible,
        status: "warning",
        "data-cy": "warning-alert",
        "icon-classes": "icon-dark-orange-400 h-16px w-16px",
        title: __props.title,
        icon: unref(ErrorOutlineIcon)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            ref_key: "markdownTarget",
            ref: markdownTarget,
            class: "warning-markdown",
            innerHTML: unref(markdown)
          }, null, 8, _hoisted_1$5),
          __props.retryable ? (openBlock(), createBlock(_sfc_main$h, {
            key: 0,
            size: "md",
            "prefix-icon": unref(RefreshIcon),
            "prefix-icon-class": "icon-dark-white",
            onClick: _cache[0] || (_cache[0] = ($event) => emits("retry"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("warnings.retry")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue", "dismissible", "title", "icon"]);
    };
  }
});
const _hoisted_1$4 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M18.5858 8.58579C18.2107 8.21071 17.702 8 17.1716 8H6C5.44772 8 5 8.44772 5 9V14H17.1716C17.702 14 18.2107 13.7893 18.5858 13.4142L21 11L18.5858 8.58579Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M18.5858 13.4142L19.2929 14.1213L18.5858 13.4142ZM17.1716 8V9V8ZM18.5858 8.58579L19.2929 7.87868V7.87868L18.5858 8.58579ZM5 38H4H5ZM6 8V7V8ZM42 13V38H44V13H42ZM41 39H7V41H41V39ZM6 9H17.1716V7H6V9ZM17.8787 9.29289L20.2929 11.7071L21.7071 10.2929L19.2929 7.87868L17.8787 9.29289ZM21 12H41V10H21V12ZM20.2929 10.2929L17.8787 12.7071L19.2929 14.1213L21.7071 11.7071L20.2929 10.2929ZM6 38V14H4V38H6ZM6 14V9H4V14H6ZM17.1716 13H5V15H17.1716V13ZM17.8787 12.7071C17.6911 12.8946 17.4368 13 17.1716 13V15C17.9672 15 18.7303 14.6839 19.2929 14.1213L17.8787 12.7071ZM17.1716 9C17.4368 9 17.6911 9.10536 17.8787 9.29289L19.2929 7.87868C18.7303 7.31607 17.9672 7 17.1716 7V9ZM7 39C6.44772 39 6 38.5523 6 38H4C4 39.6568 5.34315 41 7 41V39ZM42 38C42 38.5523 41.5523 39 41 39V41C42.6569 41 44 39.6568 44 38H42ZM44 13C44 11.3431 42.6569 10 41 10V12C41.5523 12 42 12.4477 42 13H44ZM6 7C4.89543 7 4 7.89543 4 9H6V7Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M25 41C25 42.1046 25.8954 43 27 43H35C36.1046 43 37 42.1046 37 41V36C37 34.8954 36.1046 34 35 34H34H28H27C25.8954 34 25 34.8954 25 36V41Z",
  fill: "#69D3A7",
  class: "icon-light-secondary"
}, null, -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M28 34H27C25.8954 34 25 34.8954 25 36V41C25 42.1046 25.8954 43 27 43H35C36.1046 43 37 42.1046 37 41V36C37 34.8954 36.1046 34 35 34H34M28 34V32C28 30.3431 29.3431 29 31 29V29C32.6569 29 34 30.3431 34 32V34M28 34H34M31 38V39",
  stroke: "#00814D",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark-secondary"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2$3,
  _hoisted_3$1,
  _hoisted_4,
  _hoisted_5
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_6);
}
const __unplugin_components_0 = { name: "cy-locked-project_x48", render: render$1 };
const _hoisted_1$3 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "48px", "min-height": "48px" },
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C6.34315 8 5 9.34315 5 11V16H43V11C43 9.34315 41.6569 8 40 8H8Z" fill="#D0D2E0" class="icon-light"></path><path d="M19 30L14 28L9 31V36H38C38.5523 36 39 35.5523 39 35V23L34 24L29 27L24 25L19 30Z" fill="#D0D2E0" class="icon-light"></path><path d="M5 16H4C4 16.5523 4.44772 17 5 17V16ZM43 16V17C43.5523 17 44 16.5523 44 16H43ZM19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13V11ZM39 13C39.5523 13 40 12.5523 40 12C40 11.4477 39.5523 11 39 11V13ZM14 28L14.3714 27.0715C14.0812 26.9555 13.7535 26.9817 13.4855 27.1425L14 28ZM19 30L18.6286 30.9285C19 31.077 19.4242 30.99 19.7071 30.7071L19 30ZM24 25L24.3714 24.0715C24 23.923 23.5758 24.01 23.2929 24.2929L24 25ZM29 27L28.6286 27.9285C28.9188 28.0445 29.2465 28.0183 29.5145 27.8575L29 27ZM9 31L8.4855 30.1425C8.1843 30.3232 8 30.6487 8 31H9ZM34 24L33.8039 23.0194C33.6915 23.0419 33.5838 23.0835 33.4855 23.1425L34 24ZM9 36H8C8 36.5523 8.44772 37 9 37V36ZM8 9H40V7H8V9ZM42 11V37H44V11H42ZM6 37V11H4V37H6ZM5 17H43V15H5V17ZM19 13H39V11H19V13ZM8 39C6.89543 39 6 38.1046 6 37H4C4 39.2091 5.79086 41 8 41V39ZM42 37C42 38.1046 41.1046 39 40 39V41C42.2091 41 44 39.2091 44 37H42ZM40 9C41.1046 9 42 9.89543 42 11H44C44 8.79086 42.2091 7 40 7V9ZM8 7C5.79086 7 4 8.79086 4 11H6C6 9.89543 6.89543 9 8 9V7ZM4 11V16H6V11H4ZM44 16V11H42V16H44ZM38 19H10V21H38V19ZM13.6286 28.9285L18.6286 30.9285L19.3714 29.0715L14.3714 27.0715L13.6286 28.9285ZM19.7071 30.7071L24.7071 25.7071L23.2929 24.2929L18.2929 29.2929L19.7071 30.7071ZM23.6286 25.9285L28.6286 27.9285L29.3714 26.0715L24.3714 24.0715L23.6286 25.9285ZM40 35V23H38V35H40ZM40 23V21H38V23H40ZM40 39H24V41H40V39ZM24 39H16V41H24V39ZM16 39H8V41H16V39ZM9.5145 31.8575L14.5145 28.8575L13.4855 27.1425L8.4855 30.1425L9.5145 31.8575ZM29.5145 27.8575L34.5145 24.8575L33.4855 23.1425L28.4855 26.1425L29.5145 27.8575ZM34.1961 24.9806L39.1961 23.9806L38.8039 22.0194L33.8039 23.0194L34.1961 24.9806ZM38 35H9V37H38V35ZM10 36V21H8V36H10ZM8 31V36H10V31H8ZM38 21H40C40 19.8954 39.1046 19 38 19V21ZM38 35V37C39.1046 37 40 36.1046 40 35H38ZM10 19C8.89543 19 8 19.8954 8 21H10H10V19Z" fill="#1B1E2E" class="icon-dark"></path><path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1B1E2E" class="icon-dark"></path><path d="M35.2426 41.2426C32.8995 43.5858 29.1005 43.5858 26.7574 41.2426C24.4142 38.8995 24.4142 35.1005 26.7574 32.7574C29.1005 30.4142 32.8995 30.4142 35.2426 32.7574C37.5858 35.1005 37.5858 38.8995 35.2426 41.2426Z" fill="#F8C4CD" class="icon-light-secondary"></path><path d="M32.5 35.5L29.5 38.5M32.5 38.5L29.5 35.5M35.2426 41.2426C32.8995 43.5858 29.1005 43.5858 26.7574 41.2426C24.4142 38.8995 24.4142 35.1005 26.7574 32.7574C29.1005 30.4142 32.8995 30.4142 35.2426 32.7574C37.5858 35.1005 37.5858 38.8995 35.2426 41.2426Z" stroke="#C62B49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-dark-secondary"></path>', 8);
const _hoisted_10 = [
  _hoisted_2$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_10);
}
const __unplugin_components_1 = { name: "cy-dashboard-fail_x48", render };
const _hoisted_1$2 = { class: "flex flex-col h-full text-center justify-center items-center" };
const _hoisted_2$1 = { class: "mt-24px mb-4px text-gray-900 text-18px leading-24px w-640px" };
const _hoisted_3 = { class: "mb-24px text-gray-600 text-16px leading-24px w-672px" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    icon: null,
    message: null,
    buttonText: null,
    buttonIcon: null,
    buttonDisabled: { type: Boolean }
  },
  emits: ["button-click"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_i_cy_locked_project_x48 = __unplugin_components_0;
      const _component_i_cy_dashboard_fail_x48 = __unplugin_components_1;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        __props.icon === "access" ? (openBlock(), createBlock(_component_i_cy_locked_project_x48, {
          key: 0,
          class: "h-48px w-48px icon-dark-gray-500 icon-light-gray-100 icon-dark-secondary-jade-400 icon-light-secondary-jade-200"
        })) : createCommentVNode("", true),
        __props.icon === "error" ? (openBlock(), createBlock(_component_i_cy_dashboard_fail_x48, {
          key: 1,
          class: "h-48px w-48px icon-dark-gray-500 icon-light-gray-100 icon-dark-secondary-red-500 icon-light-secondary-red-300"
        })) : createCommentVNode("", true),
        createBaseVNode("h2", _hoisted_2$1, toDisplayString(__props.message), 1),
        createBaseVNode("p", _hoisted_3, [
          renderSlot(_ctx.$slots, "default")
        ]),
        createVNode(_sfc_main$h, {
          "prefix-icon": __props.buttonIcon,
          "prefix-icon-class": "icon-dark-white icon-light-transparent",
          disabled: __props.buttonDisabled,
          onClick: _cache[0] || (_cache[0] = ($event) => emit("button-click"))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(__props.buttonText), 1)
          ]),
          _: 1
        }, 8, ["prefix-icon", "disabled"])
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["reExecuteRunsQuery"],
  setup(__props, { emit }) {
    const props = __props;
    const { openLoginConnectModal } = useLoginConnectStore();
    const { t } = useI18n();
    gql`
fragment RunsErrorRenderer on Query {
  currentProject {  
    id
    projectId
    cloudProject {
      __typename
      ... on CloudProjectNotFound {
        message
      }
      ... on CloudProjectUnauthorized {
        message
        hasRequestedAccess
      }
    }
  }
}
`;
    const currentProject = computed(() => props.gql.currentProject);
    gql`
mutation RunsErrorRenderer_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
    const hasRequestedAccess = ref(false);
    onMounted(() => {
      var _a, _b, _c;
      if (((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProjectUnauthorized") {
        hasRequestedAccess.value = (_c = props.gql.currentProject.cloudProject.hasRequestedAccess) != null ? _c : false;
      }
    });
    const requestAccessMutation = useMutation(RunsErrorRenderer_RequestAccessDocument);
    async function requestAccess() {
      var _a, _b, _c, _d;
      const projectId = (_a = props.gql.currentProject) == null ? void 0 : _a.projectId;
      if (projectId) {
        const result = await requestAccessMutation.executeMutation({ projectId });
        if (((_c = (_b = result.data) == null ? void 0 : _b.cloudProjectRequestAccess) == null ? void 0 : _c.__typename) === "CloudProjectUnauthorized") {
          hasRequestedAccess.value = (_d = result.data.cloudProjectRequestAccess.hasRequestedAccess) != null ? _d : false;
        } else {
          hasRequestedAccess.value = false;
        }
      }
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      const _component_i18n_t = resolveComponent("i18n-t");
      return !((_a = unref(currentProject)) == null ? void 0 : _a.cloudProject) ? (openBlock(), createBlock(_sfc_main$3, {
        key: 0,
        icon: "error",
        "button-text": unref(t)("runs.errors.connectionFailed.button"),
        "button-icon": unref(ConnectIcon),
        message: unref(t)("runs.errors.connectionFailed.title"),
        onButtonClick: _cache[0] || (_cache[0] = ($event) => emit("reExecuteRunsQuery"))
      }, {
        default: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "runs.errors.connectionFailed.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$d, { href: "https://www.cypressstatus.com/" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("runs.errors.connectionFailed.link")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["button-text", "button-icon", "message"])) : ((_c = (_b = unref(currentProject)) == null ? void 0 : _b.cloudProject) == null ? void 0 : _c.__typename) === "CloudProjectNotFound" ? (openBlock(), createBlock(_sfc_main$3, {
        key: 1,
        icon: "error",
        "button-text": unref(t)("runs.errors.notFound.button"),
        "button-icon": unref(ConnectIcon),
        message: unref(t)("runs.errors.notFound.title"),
        onButtonClick: _cache[1] || (_cache[1] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Runs Tab" }))
      }, {
        default: withCtx(() => [
          createVNode(_component_i18n_t, {
            scope: "global",
            keypath: "runs.errors.notFound.description"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$i, {
                bg: "",
                class: "bg-purple-50 text-purple-500"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createTextVNode(' projectId: "' + toDisplayString((_a2 = unref(currentProject)) == null ? void 0 : _a2.projectId) + '" ', 1)
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["button-text", "button-icon", "message"])) : ((_e = (_d = unref(currentProject)) == null ? void 0 : _d.cloudProject) == null ? void 0 : _e.__typename) === "CloudProjectUnauthorized" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        hasRequestedAccess.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          icon: "access",
          "button-text": unref(t)("runs.errors.unauthorizedRequested.button"),
          "button-icon": unref(SendIcon),
          message: unref(t)("runs.errors.unauthorizedRequested.title"),
          "button-disabled": ""
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("runs.errors.unauthorizedRequested.description")), 1)
          ]),
          _: 1
        }, 8, ["button-text", "button-icon", "message"])) : (openBlock(), createBlock(_sfc_main$3, {
          key: 1,
          icon: "access",
          "button-text": unref(t)("runs.errors.unauthorized.button"),
          "button-icon": unref(SendIcon),
          message: unref(t)("runs.errors.unauthorized.title"),
          onButtonClick: requestAccess
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("runs.errors.unauthorized.description")), 1)
          ]),
          _: 1
        }, 8, ["button-text", "button-icon", "message"]))
      ], 64)) : createCommentVNode("", true);
    };
  }
});
const RunsContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "h-full" };
const _hoisted_2 = {
  key: 5,
  "data-cy": "runs",
  class: "flex flex-col pb-24px gap-16px"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    online: { type: Boolean }
  },
  emits: ["reExecuteRunsQuery"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment RunsContainer_RunsConnection on CloudRunConnection {
  nodes {
    id
    ...RunCard
  }
  pageInfo {
    startCursor
  }
}
`;
    gql`
fragment RunsContainer on Query {
  ...RunsErrorRenderer
  currentProject {
    id
    projectId
    ...RunsConnectSuccessAlert
    cloudProject {
      __typename
      ... on CloudProject {
        id
        runs(first: 10) {
          ...RunsContainer_RunsConnection
        }
      }
    }
  }
  cloudViewer {
    id
  }
}`;
    gql`
mutation RunsContainer_FetchNewerRuns(
  $cloudProjectNodeId: ID!, 
  $beforeCursor: String, 
  $hasBeforeCursor: Boolean!,
  $refreshPendingRuns: [ID!]!,
  $hasRefreshPendingRuns: Boolean!
) {
  refetchRemote {
    cloudNode(id: $cloudProjectNodeId) {
      id
      __typename
      ... on CloudProject {
        runs(first: 10) @skip(if: $hasBeforeCursor) {
          ...RunsContainer_RunsConnection
        }
        newerRuns: runs(last: 10, before: $beforeCursor) @include(if: $hasBeforeCursor) {
          ...RunsContainer_RunsConnection
        }
      }
    }
    cloudNodesByIds(ids: $refreshPendingRuns) @include(if: $hasRefreshPendingRuns) {
      id
      ... on CloudRun {
        ...RunCard
      }
    }
  }
}
`;
    const currentProject = computed(() => props.gql.currentProject);
    const cloudViewer = computed(() => props.gql.cloudViewer);
    const variables = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      if (((_b = (_a = currentProject.value) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProject") {
        const toRefresh = (_f = (_e = (_d = (_c = currentProject.value) == null ? void 0 : _c.cloudProject.runs) == null ? void 0 : _d.nodes) == null ? void 0 : _e.map((r) => r.status === "RUNNING" ? r.id : null).filter((f) => f)) != null ? _f : [];
        return {
          cloudProjectNodeId: (_g = currentProject.value) == null ? void 0 : _g.cloudProject.id,
          beforeCursor: (_i = (_h = currentProject.value) == null ? void 0 : _h.cloudProject.runs) == null ? void 0 : _i.pageInfo.startCursor,
          hasBeforeCursor: Boolean((_k = (_j = currentProject.value) == null ? void 0 : _j.cloudProject.runs) == null ? void 0 : _k.pageInfo.startCursor),
          refreshPendingRuns: toRefresh,
          hasRefreshPendingRuns: toRefresh.length > 0
        };
      }
      return void 0;
    });
    const refetcher = useMutation(RunsContainer_FetchNewerRunsDocument);
    const POLL_FOR_LATEST = 1e3 * 15;
    let timeout = null;
    function startPolling() {
      timeout = window.setTimeout(function fetchNewerRuns() {
        if (variables.value && props.online) {
          refetcher.executeMutation(variables.value).then(() => {
            startPolling();
          });
        } else {
          startPolling();
        }
      }, POLL_FOR_LATEST);
    }
    onMounted(() => {
      if (props.online && !refetcher.fetching) {
        refetcher.executeMutation(variables.value);
      }
      startPolling();
    });
    onUnmounted(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = null;
    });
    const showConnectSuccessAlert = ref(false);
    const connectionFailed = computed(() => {
      var _a;
      return !((_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) && props.online;
    });
    const loginConnectStore = useLoginConnectStore();
    watch(() => loginConnectStore.project.isProjectConnected, (newVal, oldVal) => {
      if (newVal && oldVal === false) {
        showConnectSuccessAlert.value = true;
      } else {
        showConnectSuccessAlert.value = false;
      }
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !__props.online ? (openBlock(), createBlock(_sfc_main$j, { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("launchpadErrors.noInternet.connectProject")), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(currentProject) && showConnectSuccessAlert.value ? (openBlock(), createBlock(_sfc_main$6, {
          key: 1,
          gql: unref(currentProject),
          class: normalizeClass({ "absolute left-24px right-24px top-24px": ((_b = (_a = unref(currentProject)) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProject" && !((_c = unref(currentProject).cloudProject.runs) == null ? void 0 : _c.nodes.length) })
        }, null, 8, ["gql", "class"])) : createCommentVNode("", true),
        !((_d = unref(currentProject)) == null ? void 0 : _d.projectId) || !((_e = unref(cloudViewer)) == null ? void 0 : _e.id) ? (openBlock(), createBlock(_sfc_main$7, { key: 2 })) : ((_g = (_f = unref(currentProject)) == null ? void 0 : _f.cloudProject) == null ? void 0 : _g.__typename) !== "CloudProject" || unref(connectionFailed) ? (openBlock(), createBlock(_sfc_main$2, {
          key: 3,
          gql: props.gql,
          onReExecuteRunsQuery: _cache[0] || (_cache[0] = ($event) => emit("reExecuteRunsQuery"))
        }, null, 8, ["gql"])) : !((_j = (_i = (_h = unref(currentProject)) == null ? void 0 : _h.cloudProject) == null ? void 0 : _i.runs) == null ? void 0 : _j.nodes.length) ? (openBlock(), createBlock(RunsEmpty, { key: 4 })) : (openBlock(), createElementBlock("div", _hoisted_2, [
          !__props.online ? (openBlock(), createBlock(_sfc_main$4, {
            key: 0,
            title: unref(t)("launchpadErrors.noInternet.header"),
            message: unref(t)("launchpadErrors.noInternet.message"),
            dismissible: false,
            class: "mx-auto mb-24px"
          }, null, 8, ["title", "message"])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList((_m = (_l = (_k = unref(currentProject)) == null ? void 0 : _k.cloudProject) == null ? void 0 : _l.runs) == null ? void 0 : _m.nodes, (run) => {
            return openBlock(), createBlock(RunCard, {
              key: run.id,
              gql: run
            }, null, 8, ["gql"]);
          }), 128))
        ]))
      ]);
    };
  }
});
const RunsContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4e16d68"]]);
const _hoisted_1 = { class: "h-full p-24px relative" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    gql`
query Runs {
  ...RunsContainer
}`;
    const query = useQuery({ query: RunsDocument, requestPolicy: "network-only" });
    const isOnlineRef = ref(true);
    const online = useOnline();
    watchEffect(() => {
      if (!online.value && isOnlineRef.value) {
        isOnlineRef.value = false;
      }
      if (online.value && !isOnlineRef.value) {
        isOnlineRef.value = true;
        query.executeQuery();
      }
    });
    function reExecuteRunsQuery() {
      query.executeQuery();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            unref(query).fetching.value || !unref(query).data.value ? (openBlock(), createBlock(_sfc_main$a, { key: 0 })) : (openBlock(), createBlock(RunsContainer, {
              key: 1,
              gql: unref(query).data.value,
              online: isOnlineRef.value,
              "data-cy": "runs-container",
              onReExecuteRunsQuery: reExecuteRunsQuery
            }, null, 8, ["gql", "online"]))
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
