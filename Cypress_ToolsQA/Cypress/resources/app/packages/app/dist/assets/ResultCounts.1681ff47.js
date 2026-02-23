import { d as defineComponent, o as openBlock, Y as createElementBlock, x as renderSlot, X as normalizeClass, B as createBaseVNode, u as useI18n, a as computed, a3 as Fragment, a4 as renderList, c as createBlock, P as resolveDynamicComponent, t as toDisplayString, f as createTextVNode, e as unref } from "./index.ca5c273b.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    bg: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("code", {
        class: normalizeClass(["font-medium rounded-4px mx-4px px-8px pb-0 text-14px leading-24px inline-block", { "bg-gray-50": !__props.bg }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$5 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 8L1 1L3 8L1 15L15 8Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 8L1 15L15 8L1 1L3 8ZM3 8H6",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2$5,
  _hoisted_3$5
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4);
}
const SendIcon = { name: "cy-paper-airplane_x16", render: render$4 };
const _hoisted_1$4 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "12px", "min-height": "12px" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.17157 8.82843C4.73367 10.3905 7.26633 10.3905 8.82843 8.82843C10.3905 7.26633 10.3905 4.73367 8.82843 3.17157M3.17157 8.82843C1.60948 7.26633 1.60948 4.73367 3.17157 3.17157C4.73367 1.60948 7.26633 1.60948 8.82843 3.17157M3.17157 8.82843L8.82843 3.17157",
  stroke: "#BFC2D4",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3$4);
}
const SkippedIcon = { name: "cy-status-skipped_x12", render: render$3 };
const _hoisted_1$3 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "12px", "min-height": "12px" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 3L5 9L3 6.5",
  stroke: "#1FA971",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const PassedIcon = { name: "cy-status-passed_x12", render: render$2 };
const _hoisted_1$2 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "12px", "min-height": "12px" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.70711 2.29289C3.31658 1.90237 2.68342 1.90237 2.29289 2.29289C1.90237 2.68342 1.90237 3.31658 2.29289 3.70711L3.70711 2.29289ZM8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L8.29289 9.70711ZM9.70711 3.70711C10.0976 3.31658 10.0976 2.68342 9.70711 2.29289C9.31658 1.90237 8.68342 1.90237 8.29289 2.29289L9.70711 3.70711ZM2.29289 8.29289C1.90237 8.68342 1.90237 9.31658 2.29289 9.70711C2.68342 10.0976 3.31658 10.0976 3.70711 9.70711L2.29289 8.29289ZM2.29289 3.70711L8.29289 9.70711L9.70711 8.29289L3.70711 2.29289L2.29289 3.70711ZM8.29289 2.29289L2.29289 8.29289L3.70711 9.70711L9.70711 3.70711L8.29289 2.29289Z",
  fill: "#E45770",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
}
const FailedIcon = { name: "cy-status-failed_x12", render: render$1 };
const _hoisted_1$1 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "12px", "min-height": "12px" },
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M4.47023 2.3053C3.5245 2.69703 2.7282 3.44956 2.30552 4.47001C1.46014 6.51092 2.42932 8.85072 4.47023 9.69609C6.51114 10.5415 8.85094 9.57229 9.69631 7.53138C10.119 6.51092 10.088 5.41575 9.69631 4.47001C9.30457 3.52428 8.55205 2.72798 7.5316 2.3053",
  class: "icon-dark",
  stroke: "#9095AD",
  "stroke-width": "2"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const PendingIcon = { name: "cy-status-pending_x12", render };
const _hoisted_1 = { class: "border rounded flex border-gray-200 h-6 text-gray-700 text-size-14px leading-20px" };
const _hoisted_2 = ["title", "data-cy"];
const _hoisted_3 = { class: "sr-only" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    totalPassed: null,
    totalFailed: null,
    totalPending: null,
    totalSkipped: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const results = computed(() => {
      return [
        {
          value: props.totalSkipped,
          class: "icon-dark-gray-400",
          icon: SkippedIcon,
          name: t("runs.results.skipped")
        },
        {
          value: props.totalPending,
          class: "icon-dark-gray-400 icon-light-white",
          icon: PendingIcon,
          name: t("runs.results.pending")
        },
        {
          value: props.totalPassed,
          class: "icon-dark-jade-400",
          icon: PassedIcon,
          name: t("runs.results.passed")
        },
        {
          value: props.totalFailed,
          class: "icon-dark-red-400",
          icon: FailedIcon,
          name: t("runs.results.failed")
        }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, i) => {
          return openBlock(), createElementBlock("div", {
            key: i,
            class: "flex px-2 items-center",
            title: result.name,
            "data-cy": `runResults-${result.name}-count`
          }, [
            (openBlock(), createBlock(resolveDynamicComponent(result.icon), {
              class: normalizeClass(["mt-px h-12px mr-1 w-12px", result.class])
            }, null, 8, ["class"])),
            createBaseVNode("span", _hoisted_3, toDisplayString(result.name), 1),
            createTextVNode(" " + toDisplayString(result.value), 1)
          ], 8, _hoisted_2);
        }), 128))
      ]);
    };
  }
});
export {
  SendIcon as S,
  _sfc_main$1 as _,
  _sfc_main as a
};
