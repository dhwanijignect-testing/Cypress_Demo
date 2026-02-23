import { d as defineComponent, ai as useI18n, o as openBlock, c as createBlock, w as withCtx, B as createBaseVNode, t as toDisplayString, e as unref, C as createVNode, aj as IconActionPlaySmall, Z as withModifiers, Q as _sfc_main$x, _ as _export_sfc, u as useI18n$1, m as ref, Y as createElementBlock, X as normalizeClass, i as createCommentVNode, $ as __unplugin_components_0$5, a2 as __unplugin_components_2, a as computed, x as renderSlot, a9 as __unplugin_components_1$1, b6 as onBeforeUpdate, b7 as onUpdated, b8 as onKeyStroke, aH as useRouter, aE as useSpecStore, s as onMounted, q as watch, a3 as Fragment, a4 as renderList, ao as normalizeStyle, b9 as withKeys, P as resolveDynamicComponent, ba as RouterLink, y as mergeProps, bb as useStudioStore, g as gql, an as isRef, bc as useSnapshotStore, bd as useAutStore, aA as useElementSize, be as useSelectorPlaygroundStore, bf as useClipboard, bg as MenuButton, bh as MenuItems, bi as MenuItem, bj as Menu, ap as withDirectives, aU as vModelText, f as createTextVNode, h as _sfc_main$B, bk as __unplugin_components_2$2, a$ as pushScopeId, b0 as popScopeId, bl as getEventManager, N as __unplugin_components_3$1, bm as PopoverButton, bn as PopoverPanel, a7 as TransitionQuickFade, bo as Popover, bp as __unplugin_components_0$7, I as useRoute, p as watchEffect, r as resolveComponent, bq as allBrowsersIcons, br as _sfc_main$C, bs as __unplugin_components_0$8, M as _sfc_main$E, z as _sfc_main$F, bt as togglePlayground, bu as useScreenshotStore, bv as useAttrs, bw as runnerConstants, bx as useRunnerUiStore, b as useMutation, by as Preferences_SetPreferencesDocument, aq as vShow, bz as UnifiedRunnerAPI, bA as useWindowSize, bB as getAutIframeModel, bC as addCrossOriginIframe, bD as empty$1, bE as getRunnerElement, bF as getReporterElement, bG as _imports_0, bH as AutomationDisconnected_RelaunchBrowserDocument, bI as ErrorOutlineIcon, ab as _sfc_main$G, a0 as Input, bJ as SpecRunnerOpenMode_OpenFileInIdeDocument, bK as onBeforeUnmount, bL as _sfc_main$H, bM as _sfc_main$I, bN as setBlockTracking, bO as REPORTER_ID, bP as RUNNER_ID, bQ as readonly, J as useSubscription, j as useQuery, bR as SpecPageContainer_SpecsChangeDocument, bS as SpecPageContainerDocument, bT as Runner_ConfigChangeDocument } from "./index.ca5c273b.js";
import { j as useRunAllSpecsStore, p as __unplugin_components_2$1, d as deriveIndexes, D as DocumentIconBlank, c as _sfc_main$y, b as __unplugin_components_1$2, g as useCollapsibleTree, h as buildSpecTree, i as useVirtualList, e as useSpecFilter, u as useCachedSpecs, m as makeFuzzyFoundSpec, f as fuzzySortSpecs, o as _sfc_main$z, _ as __unplugin_components_0$6, a as _sfc_main$D, q as isRunMode, r as getPathForPlatform, R as RUN_ALL_SPECS_KEY, s as RUN_ALL_SPECS } from "./CreateSpecModal.f98dc6c2.js";
import { _ as _sfc_main$A } from "./Switch.287256f1.js";
import { R as RefreshIcon } from "./refresh_x16.49a2f2fd.js";
import "./SpecPatterns.08056d57.js";
const _hoisted_1$z = ["disabled"];
const _hoisted_2$s = {
  class: "font-normal text-sm inline-flex",
  "data-cy": "tooltip-content"
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  props: {
    specNumber: null,
    directory: null,
    grayscale: { type: Boolean }
  },
  emits: ["runAllSpecs"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
        placement: "right",
        "data-cy": `run-all-specs-for-${__props.directory}`
      }, {
        popper: withCtx(() => [
          createBaseVNode("span", _hoisted_2$s, toDisplayString(unref(t)("specPage.runSelectedSpecs", __props.specNumber)), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "flex h-full w-full items-center justify-center",
            "data-cy": "run-all-specs-button",
            disabled: __props.specNumber === 0,
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("runAllSpecs"), ["stop"]))
          }, [
            createVNode(unref(IconActionPlaySmall), {
              size: "16",
              "stroke-color": __props.grayscale ? "gray-200" : "gray-700",
              "fill-color": "transparent",
              "hocus-stroke-color": __props.grayscale ? void 0 : "indigo-500",
              "hocus-fill-color": __props.grayscale ? void 0 : "indigo-100",
              class: "inline-flex align-text-bottom",
              "data-cy": "play-button"
            }, null, 8, ["stroke-color", "hocus-stroke-color", "hocus-fill-color"])
          ], 8, _hoisted_1$z)
        ]),
        _: 1
      }, 8, ["data-cy"]);
    };
  }
});
const InlineSpecListHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$y = { class: "border-b-1 border-gray-900 h-64px mx-16px auto-cols-max grid grid-flow-col gap-8px grid-cols-[minmax(0,1fr)] pointer-cursor items-center" };
const _hoisted_2$r = { class: "flex h-full inset-y-0 w-32px absolute items-center pointer-events-none" };
const _hoisted_3$k = ["value"];
const _hoisted_4$f = ["aria-label", "onClick"];
const _hoisted_5$9 = ["aria-label"];
const _hoisted_6$6 = {
  class: "font-normal text-sm inline-flex",
  "data-cy": "tooltip-content"
};
const _hoisted_7$5 = {
  class: "sr-only",
  "aria-live": "polite"
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  props: {
    specFilterModel: null,
    resultCount: null,
    isRunAllSpecsAllowed: { type: Boolean }
  },
  emits: ["update:specFilterModel", "newSpec", "runAllSpecs"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n$1();
    const runAllSpecsStore = useRunAllSpecsStore();
    const inputFocused = ref(false);
    const input = ref();
    const onInput = (e) => {
      const value = e.target.value;
      emit("update:specFilterModel", value);
    };
    const clearInput = (e) => {
      emit("update:specFilterModel", "");
    };
    return (_ctx, _cache) => {
      const _component_i_cy_magnifying_glass_x16 = __unplugin_components_0$5;
      const _component_i_cy_delete_x16 = __unplugin_components_2;
      const _component_i_cy_add_small_x16 = __unplugin_components_2$1;
      return openBlock(), createElementBlock("div", _hoisted_1$y, [
        createBaseVNode("div", {
          class: "relative items-center",
          onClick: _cache[2] || (_cache[2] = ($event) => {
            var _a;
            return (_a = input.value) == null ? void 0 : _a.focus();
          })
        }, [
          createBaseVNode("div", _hoisted_2$r, [
            createVNode(_component_i_cy_magnifying_glass_x16, {
              class: normalizeClass([inputFocused.value ? "icon-dark-indigo-300" : "icon-dark-gray-800", "icon-light-gray-1000"])
            }, null, 8, ["class"])
          ]),
          createBaseVNode("input", {
            id: "inline-spec-list-header-search",
            ref_key: "input",
            ref: input,
            class: normalizeClass(["font-light outline-none bg-gray-1000 border-0 px-6 placeholder-gray-700 text-gray-500", inputFocused.value || props.specFilterModel.length ? "w-full" : "w-16px"]),
            value: props.specFilterModel,
            type: "search",
            minlength: "1",
            autocapitalize: "off",
            autocomplete: "off",
            spellcheck: "false",
            onFocus: _cache[0] || (_cache[0] = ($event) => inputFocused.value = true),
            onBlur: _cache[1] || (_cache[1] = ($event) => inputFocused.value = false),
            onInput
          }, null, 42, _hoisted_3$k),
          createBaseVNode("label", {
            for: "inline-spec-list-header-search",
            class: normalizeClass(["cursor-text font-light bottom-4px left-24px text-gray-500 pointer-events-none absolute", {
              "sr-only": inputFocused.value || props.specFilterModel
            }])
          }, toDisplayString(unref(t)("specPage.searchPlaceholder")), 3),
          props.specFilterModel ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            "data-cy": "clear-search-button",
            class: "border-transparent rounded-md flex outline-none h-24px my-4px inset-y-0 right-0 w-24px duration-300 absolute items-center justify-center group hocus-default hocus:ring-0",
            "aria-label": unref(t)("specPage.clearSearch"),
            onClick: withModifiers(clearInput, ["stop"])
          }, [
            createVNode(_component_i_cy_delete_x16, {
              class: normalizeClass(["icon-light-gray-1000 group-hocus:icon-dark-indigo-300", inputFocused.value ? "icon-dark-indigo-300" : "icon-dark-gray-800"])
            }, null, 8, ["class"])
          ], 8, _hoisted_4$f)) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$x, {
          placement: "right",
          "data-cy": "tooltip"
        }, {
          popper: withCtx(() => [
            createBaseVNode("span", _hoisted_6$6, toDisplayString(unref(t)("specPage.newSpecButton")), 1)
          ]),
          default: withCtx(() => [
            createBaseVNode("button", {
              class: "rounded-md flex outline-none border-1 border-gray-900 h-24px w-24px duration-300 hocus-default items-center justify-center hocus:ring-0 hocus:border-indigo-300",
              "aria-label": unref(t)("specPage.newSpecButton"),
              onClick: _cache[3] || (_cache[3] = ($event) => emit("newSpec"))
            }, [
              createVNode(_component_i_cy_add_small_x16, { class: "icon-light-gray-50 icon-dark-gray-200" })
            ], 8, _hoisted_5$9)
          ]),
          _: 1
        }),
        __props.isRunAllSpecsAllowed ? (openBlock(), createBlock(_sfc_main$w, {
          key: 0,
          "spec-number": unref(runAllSpecsStore).allSpecsRef.length,
          directory: "all",
          grayscale: "",
          class: "rounded-md flex outline-none border-1 border-gray-900 h-24px w-24px duration-300 hocus-default items-center justify-center hocus:ring-0 hocus:border-indigo-300",
          onRunAllSpecs: _cache[4] || (_cache[4] = ($event) => emit("runAllSpecs"))
        }, null, 8, ["spec-number"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7$5, toDisplayString(unref(t)("components.fileSearch.matchesIndicatorEmptyFileSearch", { count: __props.resultCount, denominator: __props.resultCount })), 1)
      ]);
    };
  }
});
const InlineSpecListHeader = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-e9e61564"]]);
const _hoisted_1$x = { class: "flex text-sm py-4px items-center" };
const _hoisted_2$q = ["title"];
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  props: {
    fileName: null,
    extension: null,
    selected: { type: Boolean, default: false },
    indexes: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const split = computed(() => {
      return deriveIndexes(props.fileName, props.indexes);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        createVNode(unref(DocumentIconBlank), {
          class: normalizeClass(["text-base min-h-16px min-w-16px group-hocus:icon-dark-indigo-300 group-hocus:icon-light-indigo-600", __props.selected ? "icon-dark-indigo-300 icon-light-indigo-600" : "icon-dark-gray-800 icon-light-gray-1000"])
        }, null, 8, ["class"]),
        createBaseVNode("div", {
          title: __props.fileName + __props.extension,
          class: "text-gray-400 truncate"
        }, [
          createVNode(_sfc_main$y, {
            text: __props.fileName,
            indexes: unref(split).fileNameIndexes,
            class: normalizeClass(["font-medium pl-8px whitespace-nowrap", __props.selected ? "text-white" : "group-focus:text-indigo-300 text-gray-400 group-hover:text-indigo-300"])
          }, null, 8, ["text", "indexes", "class"]),
          createVNode(_sfc_main$y, {
            text: __props.extension,
            indexes: unref(split).extensionIndexes,
            class: "text-gray-700"
          }, null, 8, ["text", "indexes"])
        ], 8, _hoisted_2$q)
      ]);
    };
  }
});
const _hoisted_1$w = { class: "flex justify-between" };
const _hoisted_2$p = ["title"];
const _hoisted_3$j = { class: "mr-16px" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  props: {
    name: { default: "" },
    expanded: { type: Boolean, default: false },
    indexes: { default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$1;
      const _component_i_cy_folder_x16 = __unplugin_components_1$2;
      return openBlock(), createElementBlock("div", _hoisted_1$w, [
        createBaseVNode("div", {
          title: __props.name,
          class: "flex text-sm py-4px items-center"
        }, [
          createVNode(_component_i_cy_chevron_down_small_x16, {
            class: normalizeClass(["mr-8px icon-dark-gray-700 group-hocus:icon-dark-indigo-300 group-hover:children:transition-all group-hover:children:ease-in-out", { "transform rotate-270": !__props.expanded }])
          }, null, 8, ["class"]),
          createVNode(_component_i_cy_folder_x16, { class: "h-16px mr-8px w-16px group-hocus:icon-light-indigo-300 group-hocus:icon-dark-indigo-400" }),
          createVNode(_sfc_main$y, {
            text: __props.name,
            indexes: __props.indexes,
            class: "text-gray-400 group-focus:text-indigo-300",
            "highlight-classes": "font-bold text-white"
          }, null, 8, ["text", "indexes"])
        ], 8, _hoisted_2$p),
        createBaseVNode("div", _hoisted_3$j, [
          renderSlot(_ctx.$slots, "run-all-specs")
        ])
      ]);
    };
  }
});
const focusEl = (itemRefs, activeItem) => {
  var _a, _b;
  const idx = unref(activeItem);
  const el2 = (_b = (_a = itemRefs.value[idx]) == null ? void 0 : _a.$el) != null ? _b : itemRefs.value[idx];
  if (typeof (el2 == null ? void 0 : el2.focus) === "function") {
    el2.focus({ preventScroll: true });
  }
};
function useVirtualListNavigation({
  containerRef,
  getOffset,
  getViewCapacity,
  source,
  scrollTo
}) {
  const activeItem = ref(null);
  const itemRefs = ref({});
  const setItemRef = (el2, index) => {
    if (el2) {
      itemRefs.value[index] = el2;
    }
  };
  onBeforeUpdate(() => {
    itemRefs.value = {};
  });
  onUpdated(() => {
    focusEl(itemRefs, activeItem);
  });
  onKeyStroke("ArrowDown", (event) => {
    var _a;
    event.preventDefault();
    const element = containerRef.value;
    if (element) {
      activeItem.value = (_a = activeItem.value) != null ? _a : 0;
      if (activeItem.value + 1 === source.value.length) {
        activeItem.value = 0;
        scrollTo(activeItem.value);
        return;
      }
      activeItem.value++;
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const fromIdx = offset - 1;
      const toIdx = fromIdx + (viewCapacity - 1);
      if (activeItem.value >= toIdx) {
        scrollTo(fromIdx + 1);
      } else {
        focusEl(itemRefs, activeItem);
      }
    }
  }, { target: containerRef });
  onKeyStroke("ArrowUp", (event) => {
    var _a;
    event.preventDefault();
    const element = containerRef.value;
    if (element) {
      activeItem.value = (_a = activeItem.value) != null ? _a : 0;
      if (activeItem.value === 0) {
        activeItem.value = source.value.length - 1;
        scrollTo(activeItem.value);
        return;
      }
      activeItem.value--;
      const offset = getOffset(element.scrollTop);
      const fromIndex = offset - 1;
      if (activeItem.value < fromIndex) {
        scrollTo(fromIndex - 1);
      } else {
        focusEl(itemRefs, activeItem);
      }
    }
  }, { target: containerRef });
  return {
    activeItem,
    setItemRef
  };
}
const InlineSpecListTree_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$v = ["data-selected-spec", "onClick"];
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  props: {
    specs: null
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    const specStore = useSpecStore();
    const isCurrentSpec = (row) => {
      var _a;
      if (!row.isLeaf || !row.data) {
        return false;
      }
      return row.data.relative === ((_a = specStore.activeSpec) == null ? void 0 : _a.relative);
    };
    const collapsible = computed(() => useCollapsibleTree(buildSpecTree(props.specs), { dropRoot: true }));
    const treeSpecList = computed(() => collapsible.value.tree.filter((item) => !item.hidden.value));
    const findCurrentSpecIndex = computed(() => {
      return treeSpecList.value.findIndex((s) => isCurrentSpec(s));
    });
    const hasAnyCurrentSpec = computed(() => {
      return findCurrentSpecIndex.value > -1;
    });
    const isTabbable = (row, index) => {
      if (!hasAnyCurrentSpec.value) {
        if (index === 0)
          return true;
      } else if (isCurrentSpec(row.data)) {
        return true;
      }
      return false;
    };
    const toggle = (row, idx) => {
      activeItem.value = idx;
      row.toggle();
    };
    const submitOrToggle = (row, idx) => {
      const studioStore = useStudioStore();
      studioStore.cancel();
      activeItem.value = idx;
      if (row.isLeaf) {
        if (!row.data) {
          return;
        }
        router.push({ path: "/specs/runner", query: { file: row.data.relative.replace(/\\/g, "/") } });
      } else {
        row.toggle();
      }
      return false;
    };
    const { containerProps, list, wrapperProps, scrollTo, api } = useVirtualList(treeSpecList, { itemHeight: 30, overscan: 15 });
    const { activeItem, setItemRef } = useVirtualListNavigation(api);
    onMounted(() => {
      activeItem.value = findCurrentSpecIndex.value;
    });
    watch(collapsible, () => {
      activeItem.value = null;
      scrollTo(0);
    });
    const resetFocusIfNecessary = (row, index) => {
      if (isTabbable(row, index)) {
        activeItem.value = index;
      }
    };
    const runAllSpecsStore = useRunAllSpecsStore();
    watch(collapsible, () => {
      runAllSpecsStore.setRunAllSpecsData(collapsible.value.tree);
    }, { immediate: true });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps(unref(containerProps), {
        class: "pt-8px specs-list-container",
        "data-cy": "specs-list-container"
      }), [
        createBaseVNode("ul", mergeProps(unref(wrapperProps), { class: "children:h-30px" }), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (row) => {
            var _a, _b, _c;
            return openBlock(), createElementBlock("li", {
              key: row.index,
              class: "cursor-pointer flex group relative",
              "data-cy": "spec-row-item",
              "data-selected-spec": isCurrentSpec(row.data),
              onClick: withModifiers(($event) => submitOrToggle(row.data, row.index), ["self"])
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(row.data.isLeaf ? unref(RouterLink) : "button"), {
                ref_for: true,
                ref: (el2) => unref(setItemRef)(el2, row.index),
                key: (_a = row.data.data) == null ? void 0 : _a.absolute,
                style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10 + 16}px` }),
                class: normalizeClass(["border-transparent outline-none border-1 w-full group focus-visible:bg-gray-900 before:border-r-4 before:border-transparent before:h-28px before:rounded-r-4px before:absolute before:left-[-4px] before:w-8px", {
                  "before:border-r-indigo-300": isCurrentSpec(row.data),
                  "before:focus:border-r-indigo-300 before:focus-visible:border-r-transparent before:hover:border-r-indigo-300": !isCurrentSpec(row.data)
                }]),
                to: { path: "/specs/runner", query: { file: (_c = (_b = row.data.data) == null ? void 0 : _b.relative) == null ? void 0 : _c.replace(/\\/g, "/") } },
                "aria-expanded": row.data.isLeaf ? null : row.data.expanded,
                onFocus: ($event) => resetFocusIfNecessary(row, row.index),
                onClick: withModifiers(($event) => submitOrToggle(row.data, row.index), ["prevent"]),
                onKeydown: withKeys(withModifiers(($event) => toggle(row.data, row.index), ["prevent", "stop"]), ["left", "right"])
              }, {
                default: withCtx(() => {
                  var _a2, _b2;
                  return [
                    row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$u, {
                      key: 0,
                      "file-name": ((_a2 = row.data.data) == null ? void 0 : _a2.fileName) || row.data.name,
                      extension: ((_b2 = row.data.data) == null ? void 0 : _b2.specFileExtension) || "",
                      selected: isCurrentSpec(row.data),
                      indexes: row.data.highlightIndexes,
                      class: "pl-22px",
                      "data-cy": "spec-file-item"
                    }, null, 8, ["file-name", "extension", "selected", "indexes"])) : (openBlock(), createBlock(_sfc_main$t, {
                      key: 1,
                      class: "children:truncate",
                      name: row.data.name,
                      expanded: unref(treeSpecList)[row.index].expanded.value,
                      indexes: row.data.highlightIndexes,
                      "data-cy": "directory-item"
                    }, {
                      "run-all-specs": withCtx(() => [
                        unref(runAllSpecsStore).isRunAllSpecsAllowed ? (openBlock(), createBlock(_sfc_main$w, {
                          key: 0,
                          directory: row.data.name,
                          class: "flex h-full opacity-0 run-all justify-center items-center",
                          "spec-number": unref(runAllSpecsStore).directoryChildren[row.data.id].length,
                          onRunAllSpecs: () => unref(runAllSpecsStore).runSelectedSpecs(row.data.id)
                        }, null, 8, ["directory", "spec-number", "onRunAllSpecs"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["name", "expanded", "indexes"]))
                  ];
                }),
                _: 2
              }, 1032, ["style", "class", "to", "aria-expanded", "onFocus", "onClick", "onKeydown"]))
            ], 8, _hoisted_1$v);
          }), 128))
        ], 16)
      ], 16);
    };
  }
});
const InlineSpecListTree = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-1a0eebf4"]]);
const _hoisted_1$u = /* @__PURE__ */ createBaseVNode("div", { class: "bg-gradient-to-b to-transparent from-gray-1000 h-12px top-64px left-0 w-[calc(100%-2px)] scroller-fade absolute" }, null, -1);
const _hoisted_2$o = /* @__PURE__ */ createBaseVNode("div", { class: "bg-gradient-to-b from-transparent to-gray-1000 h-12px w-full right-0 bottom-12px scroller-fade absolute" }, null, -1);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    gql`
fragment SpecNode_InlineSpecList on Spec {
  id
  name
  specType
  absolute
  baseName
  fileName
  specFileExtension
  fileExtension
  relative
}
`;
    gql`
fragment Specs_InlineSpecList on Query {
  ...CreateSpecModal
  currentProject {
    id
    projectRoot
    currentTestingType
    savedState
    specs {
      id
      ...SpecNode_InlineSpecList
    }
  }
}
`;
    const showModal = ref(false);
    const { debouncedSpecFilterModel, specFilterModel } = useSpecFilter((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.savedState) == null ? void 0 : _b.specFilter);
    const cachedSpecs = useCachedSpecs(computed(() => {
      var _a2;
      return ((_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs) || [];
    }));
    const specs = computed(() => {
      const specs2 = cachedSpecs.value.map((x) => makeFuzzyFoundSpec(x));
      if (!debouncedSpecFilterModel.value)
        return specs2;
      return fuzzySortSpecs(specs2, debouncedSpecFilterModel.value);
    });
    const runAllSpecsStore = useRunAllSpecsStore();
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", null, [
        ((_a2 = props.gql.currentProject) == null ? void 0 : _a2.currentTestingType) ? (openBlock(), createBlock(_sfc_main$z, {
          key: 0,
          show: showModal.value,
          gql: props.gql,
          onClose: _cache[0] || (_cache[0] = ($event) => showModal.value = false)
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
        createVNode(InlineSpecListHeader, {
          specFilterModel: unref(specFilterModel),
          "onUpdate:specFilterModel": _cache[1] || (_cache[1] = ($event) => isRef(specFilterModel) ? specFilterModel.value = $event : null),
          "result-count": unref(specs).length,
          "is-run-all-specs-allowed": unref(runAllSpecsStore).isRunAllSpecsAllowed,
          onNewSpec: _cache[2] || (_cache[2] = ($event) => showModal.value = true),
          onRunAllSpecs: unref(runAllSpecsStore).runAllSpecs
        }, null, 8, ["specFilterModel", "result-count", "is-run-all-specs-allowed", "onRunAllSpecs"]),
        createVNode(InlineSpecListTree, {
          specs: unref(specs),
          class: "pb-32px"
        }, null, 8, ["specs"]),
        _hoisted_1$u,
        _hoisted_2$o
      ]);
    };
  }
});
const _hoisted_1$t = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("path", {
  d: "M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z",
  fill: "#E1E3ED",
  class: "icon-light"
}, null, -1);
const _hoisted_3$i = /* @__PURE__ */ createBaseVNode("path", {
  d: "M7 14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14H7ZM7 10V14H9V10H7ZM11 6C11 7.65685 9.65685 9 8 9V11C10.7614 11 13 8.76142 13 6H11ZM8 9C6.34315 9 5 7.65685 5 6H3C3 8.76142 5.23858 11 8 11V9ZM5 6C5 4.34315 6.34315 3 8 3V1C5.23858 1 3 3.23858 3 6H5ZM8 3C9.65685 3 11 4.34315 11 6H13C13 3.23858 10.7614 1 8 1V3Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$e = [
  _hoisted_2$n,
  _hoisted_3$i
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_4$e);
}
const __unplugin_components_0$4 = { name: "cy-object-pin_x16", render: render$8 };
const _hoisted_1$s = { class: "rounded flex font-medium bg-gray-900 py-2px px-12px text-gray-200 text-14px leading-20px gap-8px items-center" };
const _hoisted_2$m = {
  for: "toggle-highlights",
  class: "cursor-pointer"
};
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  props: {
    value: { type: Boolean, default: true }
  },
  emits: ["toggle"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createVNode(_sfc_main$A, {
          name: "toggle-highlights",
          value: props.value,
          size: "sm",
          onUpdate: _cache[0] || (_cache[0] = ($event) => emits("toggle"))
        }, null, 8, ["value"]),
        createBaseVNode("label", _hoisted_2$m, toDisplayString(unref(t)("runner.snapshot.highlightsLabel")), 1)
      ]);
    };
  }
});
const _hoisted_1$r = {
  class: "rounded font-medium text-14px overflow-hidden children:leading-20px",
  "data-cy": "snapshot-toggle"
};
const _hoisted_2$l = ["data-cy-active-snapshot-toggle", "onClick", "onKeypress"];
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  props: {
    messages: null,
    activeIndex: { default: 0 }
  },
  emits: ["select"],
  setup(__props, { emit }) {
    const select = (message, idx) => {
      emit("select", { idx, message });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.messages, (message, idx) => {
          return openBlock(), createElementBlock("button", {
            key: message.id,
            "data-cy-active-snapshot-toggle": idx === __props.activeIndex ? "true" : void 0,
            class: normalizeClass(["border-transparent font-medium outline-none border-1 my-1 transition duration-150 hocus:border-purple-300", {
              "rounded-l": idx === 0,
              "rounded-r": idx === __props.messages.length - 1,
              "text-white bg-purple-500": idx === __props.activeIndex,
              "text-gray-200 bg-gray-900": idx !== __props.activeIndex
            }]),
            style: { "padding": "1px 12px" },
            onClick: ($event) => select(message, idx),
            onKeypress: withKeys(($event) => select(message, idx), ["enter", "space"])
          }, toDisplayString(message.text), 43, _hoisted_2$l);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$q = {
  key: 0,
  class: "inset-x-0 bottom-24 absolute",
  "data-testid": "snapshot-controls"
};
const _hoisted_2$k = { class: "flex justify-center" };
const _hoisted_3$h = { class: "rounded flex bg-gray-1000 shadow min-h-40px py-4px px-8px text-gray-600 gap-4px items-center" };
const _hoisted_4$d = {
  key: 0,
  class: "rounded min-h-24px p-4px text-14px text-gray-600 capitalize block"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  props: {
    eventManager: null,
    getAutIframe: null
  },
  setup(__props) {
    const props = __props;
    const snapshotStore = useSnapshotStore();
    const snapshots = computed(() => {
      var _a;
      return (_a = snapshotStore.snapshotProps) == null ? void 0 : _a.snapshots;
    });
    const snapshotMessages = computed(() => {
      if (!snapshots.value)
        return [];
      return snapshots.value.map(({ name }, idx) => {
        if (!name)
          return { text: `${idx + 1}`, id: `${idx}` };
        return { text: `${name}`, id: `${idx}` };
      });
    });
    const shouldShowStateControls = computed(() => {
      return snapshots.value && snapshots.value.length >= 2;
    });
    const unpin = () => {
      props.eventManager.snapshotUnpinned();
      snapshotStore.$reset();
    };
    const toggleHighlights = () => {
      snapshotStore.toggleHighlights(props.getAutIframe());
    };
    const shouldShowHighlightControls = computed(() => {
      var _a;
      return snapshotStore.isSnapshotPinned && ((_a = snapshotStore.snapshotProps) == null ? void 0 : _a.$el);
    });
    const renderSnapshotControls = computed(() => {
      return shouldShowStateControls.value || shouldShowHighlightControls.value || snapshotStore.messageTitle;
    });
    const changeState = ({ idx }) => {
      snapshotStore.changeState(idx, props.getAutIframe());
    };
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_i_cy_object_pin_x16 = __unplugin_components_0$4;
      const _component_i_cy_delete_x16 = __unplugin_components_2;
      return unref(renderSnapshotControls) ? (openBlock(), createElementBlock("div", _hoisted_1$q, [
        createBaseVNode("div", _hoisted_2$k, [
          createBaseVNode("div", _hoisted_3$h, [
            createVNode(_component_i_cy_object_pin_x16, { class: "icon-dark-purple-400 icon-light-purple-800" }),
            unref(snapshotStore).messageTitle ? (openBlock(), createElementBlock("span", _hoisted_4$d, toDisplayString(unref(snapshotStore).messageTitle), 1)) : createCommentVNode("", true),
            unref(shouldShowStateControls) ? (openBlock(), createBlock(_sfc_main$p, {
              key: 1,
              messages: unref(snapshotMessages),
              "active-index": (_a = unref(snapshotStore).snapshot) == null ? void 0 : _a.stateIndex,
              onSelect: changeState
            }, null, 8, ["messages", "active-index"])) : createCommentVNode("", true),
            unref(shouldShowHighlightControls) ? (openBlock(), createBlock(_sfc_main$q, {
              key: 2,
              value: (_b = unref(snapshotStore).snapshot) == null ? void 0 : _b.showingHighlights,
              onToggle: toggleHighlights
            }, null, 8, ["value"])) : createCommentVNode("", true),
            unref(shouldShowStateControls) || unref(shouldShowHighlightControls) ? (openBlock(), createElementBlock("button", {
              key: 3,
              class: "border-transparent rounded outline-none bg-gray-900 border-1 my-1 mr-2px transition duration-150 hocus:border-purple-300",
              style: { "padding": "3px" },
              onClick: unpin
            }, [
              createVNode(_component_i_cy_delete_x16, {
                class: "icon-dark-gray-200",
                "data-testid": "unpin"
              })
            ])) : createCommentVNode("", true)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$p = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 0C8.55228 0 9 0.447715 9 1V1.07089C12.0657 1.5094 14.4906 3.93431 14.9291 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H14.9291C14.4906 12.0657 12.0657 14.4906 9 14.9291V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V14.9291C3.93431 14.4906 1.5094 12.0657 1.07089 9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H1.07089C1.5094 3.93431 3.93431 1.5094 7 1.07089V1C7 0.447715 7.44772 0 8 0ZM7 3.10002C5.04087 3.4977 3.4977 5.04087 3.10002 7H4C4.55228 7 5 7.44772 5 8C5 8.55228 4.55228 9 4 9H3.10002C3.4977 10.9591 5.04087 12.5023 7 12.9V12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12V12.9C10.9591 12.5023 12.5023 10.9591 12.9 9H12C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7H12.9C12.5023 5.04087 10.9591 3.4977 9 3.10002V4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4V3.10002Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9 8C9 7.44772 8.55229 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9C8.55229 9 9 8.55229 9 8Z",
  fill: "#1B1E2E",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$c = [
  _hoisted_2$j,
  _hoisted_3$g
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_4$c);
}
const __unplugin_components_0$3 = { name: "cy-crosshairs_x16", render: render$7 };
const _hoisted_1$o = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5 11C5 10.7239 4.77614 10.5 4.5 10.5C4.22386 10.5 4 10.7239 4 11H5ZM4 12C4 12.2761 4.22386 12.5 4.5 12.5C4.77614 12.5 5 12.2761 5 12H4ZM8 11C8 10.7239 7.77614 10.5 7.5 10.5C7.22386 10.5 7 10.7239 7 11H8ZM7 12C7 12.2761 7.22386 12.5 7.5 12.5C7.77614 12.5 8 12.2761 8 12H7ZM10 12C10 12.2761 10.2239 12.5 10.5 12.5C10.7761 12.5 11 12.2761 11 12H10ZM12 11C12.2761 11 12.5 10.7761 12.5 10.5C12.5 10.2239 12.2761 10 12 10V11ZM11 7C10.7239 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.7239 8 11 8V7ZM12 8C12.2761 8 12.5 7.77614 12.5 7.5C12.5 7.22386 12.2761 7 12 7V8ZM11 4C10.7239 4 10.5 4.22386 10.5 4.5C10.5 4.77614 10.7239 5 11 5V4ZM12 5C12.2761 5 12.5 4.77614 12.5 4.5C12.5 4.22386 12.2761 4 12 4V5ZM11 10C10.7239 10 10.5 10.2239 10.5 10.5C10.5 10.7761 10.7239 11 11 11V10ZM11 11C11 10.7239 10.7761 10.5 10.5 10.5C10.2239 10.5 10 10.7239 10 11H11ZM4 11V12H5V11H4ZM7 11V12H8V11H7ZM11 8L12 8V7L11 7V8ZM11 5L12 5V4L11 4V5ZM11 11H12V10H11V11ZM10 11V12H11V11H10Z",
  fill: "#747994",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 15V1H10V10H1L1 15H15ZM15 15V11",
  stroke: "#1B1E2E",
  class: "icon-light",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$i,
  _hoisted_3$f
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_4$b);
}
const __unplugin_components_0$2 = { name: "cy-ruler_x16", render: render$6 };
function useAutHeader() {
  const autStore = useAutStore();
  const autHeaderEl = ref();
  const { height } = useElementSize(autHeaderEl);
  watch(height, (newVal) => {
    if (newVal && autStore.specRunnerHeaderHeight !== newVal) {
      autStore.setSpecRunnerHeaderHeight(newVal);
    }
  }, {
    immediate: true
  });
  return {
    autHeaderEl
  };
}
const _hoisted_1$n = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 5V4C14 2.89543 13.1046 2 12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H5",
  stroke: "#4956E3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$e = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 11L13 14L14 13L11 10L12.5 8.5L7 7L8.5 12.5L10 11Z",
  fill: "#4956E3",
  stroke: "#4956E3",
  "stroke-width": "2",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$h,
  _hoisted_3$e
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_4$a);
}
const __unplugin_components_0$1 = { name: "cy-selector_x16", render: render$5 };
const _hoisted_1$m = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("path", {
  opacity: "0.7",
  d: "M1 4V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V4M1 4V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V4M1 4H15M5 8L6.5 9.5L5 11",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$d = [
  _hoisted_2$g
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$d);
}
const __unplugin_components_3 = { name: "cy-technology-terminal_x16", render: render$4 };
const _hoisted_1$l = {
  class: "whitespace-nowrap",
  "data-cy": "selector-playground-tooltip"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  props: {
    hoverText: null,
    clickText: null
  },
  setup(__props) {
    const props = __props;
    const shown = ref(false);
    const textToShow = ref(props.hoverText);
    function mouseEnter() {
      textToShow.value = props.hoverText;
      shown.value = true;
    }
    function mouseLeave() {
      shown.value = false;
    }
    function click() {
      var _a;
      textToShow.value = (_a = props.clickText) != null ? _a : props.hoverText;
    }
    function focus() {
      textToShow.value = props.hoverText;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
        triggers: ["hover", "focus"],
        "hide-triggers": ["hover", "focus"],
        distance: 8,
        "hide-arrow": "",
        "handle-resize": "",
        onMouseenter: mouseEnter,
        onMouseleave: mouseLeave,
        onClick: click
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_1$l, toDisplayString(textToShow.value), 1)
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", { focus })
        ]),
        _: 3
      });
    };
  }
});
const SelectorPlayground_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-81bf6a4c"), n = n(), popScopeId(), n);
const _hoisted_1$k = {
  id: "selector-playground",
  class: "border-t border-b bg-gray-50 border-gray-200 h-56px grid py-12px px-16px gap-12px grid-cols-[40px,1fr,auto] items-center"
};
const _hoisted_2$f = ["onClick"];
const _hoisted_3$c = {
  class: "flex pl-12px inset-y-0 text-gray-600 absolute items-center pointer-events-none",
  "data-cy": "selected-playground-method"
};
const _hoisted_4$9 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", { class: "text-gray-800" }, "cy", -1));
const _hoisted_5$8 = /* @__PURE__ */ createTextVNode(".");
const _hoisted_6$5 = { class: "text-purple-500" };
const _hoisted_7$4 = /* @__PURE__ */ createTextVNode("(\u2018 ");
const _hoisted_8$2 = {
  key: 0,
  class: "text-error-400"
};
const _hoisted_9$2 = { class: "flex gap-12px" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  props: {
    eventManager: null,
    getAutIframe: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const methods = [
      {
        display: "cy.get",
        value: "get"
      },
      {
        display: "cy.contains",
        value: "contains"
      }
    ];
    const selectorPlaygroundStore = useSelectorPlaygroundStore();
    const match = ref();
    const { width: matcherWidth } = useElementSize(match);
    const leftOfInputText = computed(() => {
      return (selectorPlaygroundStore.method === "get" ? "cy.get(\u2018" : "cy.contains(\u2019").length + 1;
    });
    const widthOfMatchesHelperText = computed(() => {
      return matcherWidth.value + 32 + 24;
    });
    const leftOffsetForClosingParens = computed(() => {
      return leftOfInputText.value + selector.value.length;
    });
    watch(() => selectorPlaygroundStore.method, () => {
      props.getAutIframe().toggleSelectorHighlight(true);
    });
    const selector = computed({
      get() {
        return selectorPlaygroundStore.method === "get" ? selectorPlaygroundStore.getSelector : selectorPlaygroundStore.containsSelector;
      },
      set(value) {
        if (selectorPlaygroundStore.method === "get") {
          selectorPlaygroundStore.getSelector = value;
        }
        if (selectorPlaygroundStore.method === "contains") {
          selectorPlaygroundStore.containsSelector = value;
        }
        props.getAutIframe().toggleSelectorHighlight(true);
      }
    });
    function setShowingHighlight() {
      selectorPlaygroundStore.setShowingHighlight(true);
      props.getAutIframe().toggleSelectorHighlight(true);
    }
    function toggleEnabled() {
      const newVal = !selectorPlaygroundStore.isEnabled;
      selectorPlaygroundStore.setEnabled(newVal);
      props.getAutIframe().toggleSelectorPlayground(newVal);
    }
    function printSelected() {
      props.getAutIframe().printSelectorElementsToConsole();
    }
    const { copy: copy2 } = useClipboard({ copiedDuring: 2e3 });
    const copyToClipboard = () => {
      copy2(selectorPlaygroundStore.command);
    };
    return (_ctx, _cache) => {
      const _component_i_cy_selector_x16 = __unplugin_components_0$1;
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$1;
      const _component_i_cy_copy_clipboard_x16 = __unplugin_components_2$2;
      const _component_i_cy_technology_terminal_x16 = __unplugin_components_3;
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createVNode(_sfc_main$n, {
          "hover-text": unref(t)("runner.selectorPlayground.playgroundTooltip"),
          class: "flex h-full"
        }, {
          default: withCtx(() => [
            createBaseVNode("button", {
              class: "border rounded-md flex h-full outline-none border-gray-200 text-white transition w-40px duration-150 items-center justify-center hocus-default",
              "data-cy": "playground-toggle",
              onClick: toggleEnabled
            }, [
              createVNode(_component_i_cy_selector_x16, {
                class: normalizeClass({ "icon-dark-indigo-500": unref(selectorPlaygroundStore).isEnabled, "icon-dark-gray-500": !unref(selectorPlaygroundStore).isEnabled })
              }, null, 8, ["class"])
            ])
          ]),
          _: 1
        }, 8, ["hover-text"]),
        createBaseVNode("div", {
          class: "flex h-full flex-1 w-full relative items-center",
          onMouseover: setShowingHighlight
        }, [
          createVNode(unref(Menu), null, {
            default: withCtx(({ open }) => [
              createVNode(unref(MenuButton), {
                "aria-label": unref(t)("runner.selectorPlayground.selectorMethodsLabel"),
                class: "border border-r-transparent rounded-l-md flex h-full outline-none border-gray-200 text-white w-40px items-center justify-center hocus-default",
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_cy_chevron_down_small_x16, {
                    class: normalizeClass(["transition transition-color duration-300", open ? "icon-dark-indigo-500" : "icon-dark-gray-500"])
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1032, ["aria-label"]),
              createVNode(unref(MenuItems), { class: "rounded flex flex-col outline-transparent bg-gray-900 text-white top-34px z-40 absolute overflow-scroll" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(methods), (method) => {
                    return openBlock(), createBlock(unref(MenuItem), {
                      key: method.display
                    }, {
                      default: withCtx(({ active }) => [
                        createBaseVNode("button", {
                          class: normalizeClass([{ "bg-gray-700": active }, "border-b border-b-gray-800 text-left py-8px px-16px"]),
                          onClick: ($event) => unref(selectorPlaygroundStore).setMethod(method.value)
                        }, toDisplayString(method.display), 11, _hoisted_2$f)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createBaseVNode("code", {
            class: "flex-1 py-2px pr-2px pl-0 relative overflow-hidden",
            style: normalizeStyle({ height: "calc(100% + 4px)" })
          }, [
            createBaseVNode("span", _hoisted_3$c, [
              _hoisted_4$9,
              _hoisted_5$8,
              createBaseVNode("span", _hoisted_6$5, toDisplayString(unref(selectorPlaygroundStore).method), 1),
              _hoisted_7$4
            ]),
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selector) ? selector.value = $event : null),
              autocapitalize: "none",
              autocomplete: "off",
              autocorrect: "off",
              spellcheck: "false",
              "data-cy": "playground-selector",
              style: normalizeStyle({ paddingLeft: unref(leftOfInputText) + "ch", paddingRight: unref(widthOfMatchesHelperText) + "px" }),
              class: normalizeClass(["border rounded-r-md font-medium h-full outline-none border-gray-200 w-full text-indigo-500 hocus-default overflow-ellipsis", { "hocus-default": unref(selectorPlaygroundStore).isValid, "hocus-error": !unref(selectorPlaygroundStore).isValid }])
            }, null, 6), [
              [vModelText, unref(selector)]
            ]),
            createBaseVNode("span", {
              class: "flex inset-y-0 text-gray-600 absolute items-center pointer-events-none",
              style: normalizeStyle({
                left: `${unref(leftOffsetForClosingParens)}ch`
              })
            }, "\u2019)", 4),
            createBaseVNode("div", {
              ref_key: "match",
              ref: match,
              class: "bg-white border-l flex font-sans border-l-gray-200 my-6px px-16px inset-y-0 right-3px text-gray-600 absolute items-center",
              "data-cy": "playground-num-elements"
            }, [
              !unref(selectorPlaygroundStore).isValid ? (openBlock(), createElementBlock("span", _hoisted_8$2, toDisplayString(unref(t)("runner.selectorPlayground.invalidSelector")), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(unref(t)("runner.selectorPlayground.matches", unref(selectorPlaygroundStore).numElements)), 1)
              ], 64))
            ], 512)
          ], 4)
        ], 32),
        createBaseVNode("div", _hoisted_9$2, [
          createVNode(_sfc_main$n, {
            "hover-text": unref(t)("runner.selectorPlayground.copyTooltip"),
            "click-text": unref(t)("runner.selectorPlayground.copyTooltipAction")
          }, {
            default: withCtx(({ focus }) => [
              createVNode(_sfc_main$B, {
                size: "md",
                variant: "outline",
                "data-cy": "playground-copy",
                class: "override-border",
                onClick: copyToClipboard,
                onFocus: focus
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_cy_copy_clipboard_x16, { class: "icon-dark-gray-500" })
                ]),
                _: 2
              }, 1032, ["onFocus"])
            ]),
            _: 1
          }, 8, ["hover-text", "click-text"]),
          createVNode(_sfc_main$n, {
            "hover-text": unref(t)("runner.selectorPlayground.printTooltip"),
            "click-text": unref(t)("runner.selectorPlayground.printTooltipAction")
          }, {
            default: withCtx(({ focus }) => [
              createVNode(_sfc_main$B, {
                key: "fudge",
                size: "md",
                variant: "outline",
                "data-cy": "playground-print",
                class: "override-border",
                onClick: _cache[2] || (_cache[2] = ($event) => printSelected()),
                onFocus: focus
              }, {
                default: withCtx(() => [
                  createVNode(_component_i_cy_technology_terminal_x16, { class: "icon-dark-gray-600" })
                ]),
                _: 2
              }, 1032, ["onFocus"])
            ]),
            _: 1
          }, 8, ["hover-text", "click-text"])
        ])
      ]);
    };
  }
});
const SelectorPlayground = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-81bf6a4c"]]);
const _hoisted_1$j = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5.5 3.5L3.5 5.5L6 8L8 6L5.5 3.5Z",
  fill: "#AFB3C7",
  class: "icon-light"
}, null, -1);
const _hoisted_3$b = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5.5 3.5L6.20711 2.79289C5.81658 2.40237 5.18342 2.40237 4.79289 2.79289L5.5 3.5ZM13.5 11.5L14.2071 12.2071C14.5976 11.8166 14.5976 11.1834 14.2071 10.7929L13.5 11.5ZM11.5 13.5L10.7929 14.2071C11.1834 14.5976 11.8166 14.5976 12.2071 14.2071L11.5 13.5ZM3.5 5.5L2.79289 4.79289C2.40237 5.18342 2.40237 5.81658 2.79289 6.20711L3.5 5.5ZM12.7929 10.7929L10.7929 12.7929L12.2071 14.2071L14.2071 12.2071L12.7929 10.7929ZM4.20711 6.20711L6.20711 4.20711L4.79289 2.79289L2.79289 4.79289L4.20711 6.20711ZM12.2071 12.7929L6.70711 7.29289L5.29289 8.70711L10.7929 14.2071L12.2071 12.7929ZM6.70711 7.29289L4.20711 4.79289L2.79289 6.20711L5.29289 8.70711L6.70711 7.29289ZM4.79289 4.20711L7.29289 6.70711L8.70711 5.29289L6.20711 2.79289L4.79289 4.20711ZM7.29289 6.70711L12.7929 12.2071L14.2071 10.7929L8.70711 5.29289L7.29289 6.70711ZM6.70711 8.70711L8.70711 6.70711L7.29289 5.29289L5.29289 7.29289L6.70711 8.70711Z",
  fill: "currentColor",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M5.5 1.5V0.5M0.5 5.5H1.5M2.67157 2.67157L1.96447 1.96447M1.96447 9.03553L2.67157 8.32843M8.32843 2.67157L9.03553 1.96447",
  stroke: "#AFB3C7",
  class: "icon-light",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$7 = [
  _hoisted_2$e,
  _hoisted_3$b,
  _hoisted_4$8
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_5$7);
}
const __unplugin_components_1 = { name: "cy-object-magic-wand-dark-mode_x16", render: render$3 };
const _hoisted_1$i = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createBaseVNode("path", {
  d: "M4 8.5L7 12L12 4",
  stroke: "currentColor",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$a = [
  _hoisted_2$d
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_3$a);
}
const __unplugin_components_4 = { name: "cy-checkmark_x16", render: render$2 };
const _hoisted_1$h = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.5 2.58535C2.9174 2.79127 2.5 3.34689 2.5 4V13.5C2.5 14.3284 3.17157 15 4 15H12C12.8284 15 13.5 14.3284 13.5 13.5V4C13.5 3.34689 13.0826 2.79127 12.5 2.58535M7 4H9C9.55228 4 10 3.55228 10 3V2C10 1.44772 9.55228 1 9 1H7C6.44772 1 6 1.44772 6 2V3C6 3.55228 6.44772 4 7 4Z",
  stroke: "currentColor",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$c
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_3$9);
}
const __unplugin_components_5 = { name: "cy-general-clipboard_x16", render: render$1 };
const _hoisted_1$g = { class: "border-y flex border-gray-50 w-full justify-between" };
const _hoisted_2$b = { class: "flex" };
const _hoisted_3$8 = { class: "flex pr-5 pl-5 items-center" };
const _hoisted_4$7 = {
  key: 0,
  class: "mr-2"
};
const _hoisted_5$6 = {
  key: 1,
  class: "px-2"
};
const _hoisted_6$4 = { class: "font-semibold text-base text-gray-800" };
const _hoisted_7$3 = { class: "ml-1" };
const _hoisted_8$1 = { class: "flex items-center" };
const _hoisted_9$1 = { class: "flex" };
const _hoisted_10$1 = { class: "border rounded-md flex border-gray-100 m-1" };
const _hoisted_11$1 = ["disabled"];
const _hoisted_12$1 = ["disabled"];
const _hoisted_13 = ["disabled"];
const _hoisted_14 = { key: 0 };
const _hoisted_15 = { key: 1 };
const _hoisted_16 = { class: "flex items-center" };
const _hoisted_17 = ["disabled"];
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const controlsClassName = "border-gray-100 py-2 px-3 disabled:stroke-gray-400 disabled:pointer-events-none disabled:opacity-50";
    const { t } = useI18n$1();
    const studioStore = useStudioStore();
    const eventManager = getEventManager();
    const commandsCopied = ref(false);
    function handleClose() {
      eventManager.emit("studio:cancel", void 0);
    }
    function handleRestart() {
      studioStore.reset();
      eventManager.emit("restart", void 0);
    }
    function handleCopyCommands() {
      eventManager.emit("studio:copy:to:clipboard", () => {
        commandsCopied.value = true;
      });
    }
    function handleSaveCommands() {
      studioStore.startSave();
    }
    return (_ctx, _cache) => {
      const _component_i_cy_action_record_x16 = __unplugin_components_0$6;
      const _component_i_cy_object_magic_wand_dark_mode_x16 = __unplugin_components_1;
      const _component_i_cy_delete_x16 = __unplugin_components_2;
      const _component_i_cy_action_restart_x16 = __unplugin_components_3$1;
      const _component_i_cy_checkmark_x16 = __unplugin_components_4;
      const _component_i_cy_general_clipboard_x16 = __unplugin_components_5;
      return openBlock(), createElementBlock("div", _hoisted_1$g, [
        createBaseVNode("div", _hoisted_2$b, [
          createBaseVNode("div", _hoisted_3$8, [
            unref(studioStore).url && unref(studioStore).isActive && !unref(studioStore).isFailed ? (openBlock(), createElementBlock("span", _hoisted_4$7, [
              createVNode(_component_i_cy_action_record_x16, { class: "animate-pulse icon-dark-red-500 icon-light-red-500" })
            ])) : (openBlock(), createElementBlock("span", _hoisted_5$6, [
              createVNode(_component_i_cy_object_magic_wand_dark_mode_x16, { class: "fill-purple-300 stroke-purple-300" })
            ])),
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("span", null, toDisplayString(unref(t)("runner.studio.studio").toUpperCase()), 1),
              createBaseVNode("span", _hoisted_7$3, toDisplayString(unref(t)("versions.beta").toUpperCase()), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("a", {
              class: "cursor-pointer font-medium text-base text-indigo-500 hocus-link hover:underline",
              onClick: _cache[0] || (_cache[0] = (...args) => unref(studioStore).openInstructionModal && unref(studioStore).openInstructionModal(...args))
            }, toDisplayString(unref(t)("runner.studio.availableCommands")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("div", _hoisted_10$1, [
            createVNode(_sfc_main$x, { placement: "top" }, {
              popper: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("runner.studio.closeStudio")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("button", {
                  class: normalizeClass(`border-r ${controlsClassName}`),
                  disabled: unref(studioStore).isLoading,
                  onClick: handleClose
                }, [
                  createVNode(_component_i_cy_delete_x16)
                ], 10, _hoisted_11$1)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$x, { placement: "top" }, {
              popper: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("runner.studio.restartStudio")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("button", {
                  class: normalizeClass(`border-r ${controlsClassName}`),
                  disabled: unref(studioStore).isLoading,
                  onClick: handleRestart
                }, [
                  createVNode(_component_i_cy_action_restart_x16)
                ], 10, _hoisted_12$1)
              ]),
              _: 1
            }),
            createVNode(_sfc_main$x, { placement: "top" }, {
              popper: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)(commandsCopied.value ? "runner.studio.commandsCopied" : "runner.studio.copyCommands")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("button", {
                  class: normalizeClass(controlsClassName),
                  disabled: unref(studioStore).isLoading || unref(studioStore).isEmpty,
                  onClick: handleCopyCommands,
                  onMouseleave: _cache[1] || (_cache[1] = () => commandsCopied.value = false)
                }, [
                  commandsCopied.value ? (openBlock(), createElementBlock("span", _hoisted_14, [
                    createVNode(_component_i_cy_checkmark_x16, { class: "icon-dark-green-400 icon-light-green-400" })
                  ])) : (openBlock(), createElementBlock("span", _hoisted_15, [
                    createVNode(_component_i_cy_general_clipboard_x16)
                  ]))
                ], 40, _hoisted_13)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_16, [
            createBaseVNode("button", {
              class: "rounded-md bg-indigo-500 mx-3 text-white py-2 px-3 hover:bg-indigo-400 disabled:opacity-50 disabled:pointer-events-none",
              disabled: unref(studioStore).isLoading || unref(studioStore).isEmpty || unref(studioStore).isFailed,
              onClick: handleSaveCommands
            }, toDisplayString(unref(t)("runner.studio.saveTestButton")), 9, _hoisted_17)
          ])
        ])
      ]);
    };
  }
});
const StudioUrlPrompt_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-fb90db8a"), n = n(), popScopeId(), n);
const _hoisted_1$f = {
  "cy-data": "studio-url-prompt",
  class: "border rounded-md flex flex-col h-fit bg-gray-1000 border-gray-200 w-fit py-4 px-3 top-16 left-15 text-gray-200 z-51 studio-url-container absolute"
};
const _hoisted_2$a = { class: "text-center" };
const _hoisted_3$7 = { class: "flex mt-4 mb-1 justify-between" };
const _hoisted_4$6 = ["disabled"];
const _hoisted_5$5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", {
  "cy-data": "studio-url-overlay",
  class: "bg-black h-full w-full opacity-35 top-0 right-0 bottom-0 left-0 z-50 fixed"
}, null, -1));
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    autUrlInputRef: null,
    urlInProgress: null
  },
  emits: ["submit", "cancel"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n$1();
    onMounted(() => {
      if (props.autUrlInputRef) {
        props.autUrlInputRef.focus();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$f, [
          createBaseVNode("div", _hoisted_2$a, [
            createBaseVNode("span", null, toDisplayString(unref(t)("runner.studio.enterValidUrl")), 1)
          ]),
          createBaseVNode("form", {
            onSubmit: _cache[1] || (_cache[1] = withModifiers(($event) => emit("submit"), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_3$7, [
              createBaseVNode("button", {
                class: "rounded bg-gray-800 mx-1 text-white py-1 px-3",
                type: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("cancel"))
              }, toDisplayString(unref(t)("runner.studio.actionCancel")), 1),
              createBaseVNode("button", {
                class: "rounded bg-gray-800 mx-1 text-white py-1 px-3 disabled:opacity-50 disabled:pointer-events-none",
                disabled: !__props.urlInProgress,
                type: "submit"
              }, toDisplayString(unref(t)("runner.studio.continue")) + " \u279C ", 9, _hoisted_4$6)
            ])
          ], 32)
        ]),
        _hoisted_5$5
      ], 64);
    };
  }
});
const StudioUrlPrompt = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-fb90db8a"]]);
const _hoisted_1$e = {
  key: 0,
  class: "flex flex-col"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  props: {
    variant: { default: void 0 },
    align: { default: "right" },
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down = __unplugin_components_0$7;
      return openBlock(), createBlock(unref(Popover), {
        key: `${props.disabled}`,
        class: "bg-white rounded border-1px border-gray-100 h-32px relative"
      }, {
        default: withCtx(({ open, close }) => [
          createVNode(unref(PopoverButton), {
            class: normalizeClass(["border-transparent rounded flex-grow h-full border-1px px-12px group", {
              "hocus-default": !props.disabled,
              "opacity-50 cursor-auto": props.disabled
            }]),
            disabled: props.disabled
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["flex gap-8px items-center", {
                  "group-hocus:text-indigo-600": !props.disabled,
                  "text-indigo-600": open,
                  "text-gray-600": !open
                }])
              }, [
                renderSlot(_ctx.$slots, "heading", {
                  open,
                  close
                }),
                createVNode(_component_i_cy_chevron_down, {
                  class: normalizeClass(["transform transition-all w-10px duration-300", {
                    "group-hocus:icon-dark-indigo-500": !props.disabled,
                    "icon-dark-gray-200": !open,
                    "rotate-180 icon-dark-indigo-500": open
                  }])
                }, null, 8, ["class"])
              ], 2)
            ]),
            _: 2
          }, 1032, ["class", "disabled"]),
          createVNode(TransitionQuickFade, null, {
            default: withCtx(() => [
              createVNode(unref(PopoverPanel), {
                static: "",
                class: normalizeClass(["bg-white rounded shadow-dropdown top-36px z-10 absolute", { "hidden": !open, "right-0": __props.align === "right", "left-0": __props.align === "left" }])
              }, {
                default: withCtx(() => [
                  props.variant !== "panel" ? (openBlock(), createElementBlock("ul", _hoisted_1$e, [
                    renderSlot(_ctx.$slots, "default")
                  ])) : renderSlot(_ctx.$slots, "default", { key: 1 })
                ]),
                _: 2
              }, 1032, ["class"])
            ]),
            _: 2
          }, 1024)
        ]),
        _: 3
      });
    };
  }
});
const _hoisted_1$d = { class: "flex flex-wrap flex-grow p-16px gap-12px justify-end" };
const _hoisted_2$9 = ["value", "onKeyup"];
const _hoisted_3$6 = {
  key: 1,
  class: "flex-grow"
};
const _hoisted_4$5 = ["src", "alt"];
const _hoisted_5$4 = { class: "max-h-50vh overflow-auto" };
const _hoisted_6$3 = { class: "whitespace-nowrap" };
const _hoisted_7$2 = {
  key: 0,
  class: "-ml-6px text-gray-500"
};
const _hoisted_8 = { class: "max-h-50vw p-24px pt-5 text-gray-700 leading-5 w-346px overflow-auto" };
const _hoisted_9 = { class: "font-bold" };
const _hoisted_10 = { class: "font-bold" };
const _hoisted_11 = /* @__PURE__ */ createTextVNode("cy.viewport()");
const _hoisted_12 = { class: "flex justify-center" };
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    eventManager: null,
    getAutIframe: null
  },
  setup(__props) {
    var _a;
    const props = __props;
    gql`
fragment SpecRunnerHeader on CurrentProject {
  id
  configFile
  currentTestingType
  activeBrowser {
    id
    displayName
    majorVersion
  }
  config
  ...VerticalBrowserListItems
}
`;
    const { t } = useI18n();
    const autStore = useAutStore();
    const specStore = useSpecStore();
    const route = useRoute();
    const studioStore = useStudioStore();
    const urlInProgress = ref("");
    const autUrlInputRef = ref();
    const showAlert = ref(false);
    const { autHeaderEl } = useAutHeader();
    watchEffect(() => {
      showAlert.value = route.params.shouldShowTroubleRenderingAlert === "true";
    });
    const autIframe = props.getAutIframe();
    const displayScale = computed(() => {
      return autStore.scale < 1 ? `${Math.round(autStore.scale * 100)}%` : 0;
    });
    const autUrl = computed(() => {
      if (studioStore.isActive && studioStore.url) {
        return studioStore.url;
      }
      return autStore.url;
    });
    const selectorPlaygroundStore = useSelectorPlaygroundStore();
    const togglePlayground$1 = () => togglePlayground(autIframe);
    const selectedBrowser = ref({ ...props.gql.activeBrowser });
    const activeSpecPath = (_a = specStore.activeSpec) == null ? void 0 : _a.absolute;
    const isDisabled = computed(() => autStore.isRunning || autStore.isLoading);
    function setStudioUrl(event) {
      const url = event.currentTarget.value;
      urlInProgress.value = url;
    }
    function visitUrl() {
      studioStore.visitUrl(urlInProgress.value);
    }
    function openInNewTab() {
      var _a2;
      if (!autStore.url || studioStore.isActive) {
        return;
      }
      (_a2 = window.open(autStore.url, "_blank")) == null ? void 0 : _a2.focus();
    }
    return (_ctx, _cache) => {
      var _a2;
      const _component_i_cy_crosshairs_x16 = __unplugin_components_0$3;
      const _component_i_cy_ruler_x16 = __unplugin_components_0$2;
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_i_cy_book_x16 = __unplugin_components_0$8;
      return openBlock(), createElementBlock("div", {
        id: "spec-runner-header",
        ref_key: "autHeaderEl",
        ref: autHeaderEl,
        class: "min-h-64px text-14px"
      }, [
        createBaseVNode("div", _hoisted_1$d, [
          props.gql.currentTestingType === "e2e" ? (openBlock(), createElementBlock("div", {
            key: 0,
            "data-cy": "aut-url",
            class: normalizeClass(["border rounded flex flex-grow border-gray-100 border-1px h-32px overflow-hidden align-middle", {
              "bg-gray-50": unref(autStore).isLoadingUrl
            }])
          }, [
            createVNode(_sfc_main$B, {
              "data-cy": "playground-activator",
              disabled: unref(isDisabled),
              class: "rounded-none border-gray-100 border-r-1px mr-12px",
              variant: "text",
              "aria-label": unref(t)("runner.selectorPlayground.toggle"),
              onClick: togglePlayground$1
            }, {
              default: withCtx(() => [
                createVNode(_component_i_cy_crosshairs_x16, {
                  class: normalizeClass([unref(selectorPlaygroundStore).show ? "icon-dark-indigo-500" : "icon-dark-gray-500"])
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["disabled", "aria-label"]),
            createBaseVNode("input", {
              ref_key: "autUrlInputRef",
              ref: autUrlInputRef,
              target: "_blank",
              value: unref(studioStore).needsUrl ? urlInProgress.value : unref(autUrl),
              "data-cy": "aut-url-input",
              class: "flex flex-grow mr-12px leading-normal max-w-100% text-indigo-500 z-51 self-center hocus-link-default truncate",
              onInput: setStudioUrl,
              onClick: openInNewTab,
              onKeyup: withKeys(visitUrl, ["enter"])
            }, null, 40, _hoisted_2$9),
            unref(studioStore).needsUrl ? (openBlock(), createBlock(StudioUrlPrompt, {
              key: 0,
              "aut-url-input-ref": autUrlInputRef.value,
              "url-in-progress": urlInProgress.value,
              onSubmit: visitUrl,
              onCancel: _cache[0] || (_cache[0] = () => __props.eventManager.emit("studio:cancel", void 0))
            }, null, 8, ["aut-url-input-ref", "url-in-progress"])) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_3$6, [
            createVNode(_sfc_main$B, {
              "data-cy": "playground-activator",
              disabled: unref(isDisabled),
              class: "border-gray-100 mr-12px",
              variant: "outline",
              "aria-label": unref(t)("runner.selectorPlayground.toggle"),
              onClick: togglePlayground$1
            }, {
              default: withCtx(() => [
                createVNode(_component_i_cy_crosshairs_x16, {
                  class: normalizeClass([unref(selectorPlaygroundStore).show ? "icon-dark-indigo-500" : "icon-dark-gray-500"])
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["disabled", "aria-label"])
          ])),
          ((_a2 = selectedBrowser.value) == null ? void 0 : _a2.displayName) ? (openBlock(), createBlock(_sfc_main$j, {
            key: 2,
            "data-cy": "select-browser",
            disabled: unref(autStore).isRunning
          }, {
            heading: withCtx(() => [
              createBaseVNode("img", {
                class: "min-w-16px w-16px",
                src: unref(allBrowsersIcons)[selectedBrowser.value.displayName] || unref(allBrowsersIcons).generic,
                alt: selectedBrowser.value.displayName
              }, null, 8, _hoisted_4$5),
              createTextVNode(" " + toDisplayString(selectedBrowser.value.displayName) + " " + toDisplayString(selectedBrowser.value.majorVersion), 1)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_5$4, [
                createVNode(_sfc_main$C, {
                  gql: props.gql,
                  "spec-path": unref(activeSpecPath)
                }, null, 8, ["gql", "spec-path"])
              ])
            ]),
            _: 1
          }, 8, ["disabled"])) : createCommentVNode("", true),
          createVNode(_sfc_main$j, {
            variant: "panel",
            "data-cy": "viewport"
          }, {
            heading: withCtx(() => [
              createVNode(_component_i_cy_ruler_x16, { class: "icon-dark-gray-500 icon-light-gray-400" }),
              createBaseVNode("span", _hoisted_6$3, toDisplayString(unref(autStore).viewportWidth) + "x" + toDisplayString(unref(autStore).viewportHeight), 1),
              unref(displayScale) ? (openBlock(), createElementBlock("span", _hoisted_7$2, " (" + toDisplayString(unref(displayScale)) + ") ", 1)) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_i18n_t, {
                  tag: "p",
                  keypath: "runner.viewportTooltip.infoText",
                  class: "mb-24px"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("strong", _hoisted_9, toDisplayString(unref(autStore).defaultViewportWidth) + "px", 1),
                    createBaseVNode("strong", _hoisted_10, toDisplayString(unref(autStore).defaultViewportHeight) + "px", 1),
                    createTextVNode(" " + toDisplayString(props.gql.currentTestingType === "e2e" ? "end-to-end" : "component"), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_i18n_t, {
                  tag: "p",
                  keypath: "runner.viewportTooltip.configText",
                  class: "mb-24px"
                }, {
                  configFile: withCtx(() => [
                    createVNode(_sfc_main$D, { class: "font-medium text-xs leading-5" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.gql.configFile), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  viewportCommand: withCtx(() => [
                    createVNode(_sfc_main$D, { class: "font-medium text-xs leading-5" }, {
                      default: withCtx(() => [
                        _hoisted_11
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_12, [
                  createVNode(_sfc_main$B, {
                    class: "font-medium",
                    "data-cy": "viewport-docs",
                    "prefix-icon": unref(__unplugin_components_0$8),
                    "prefix-icon-class": "icon-dark-indigo-500",
                    variant: "outline",
                    href: unref(t)("runner.viewportTooltip.buttonHref")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("runner.viewportTooltip.buttonText")), 1)
                    ]),
                    _: 1
                  }, 8, ["prefix-icon", "href"])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        unref(selectorPlaygroundStore).show ? (openBlock(), createBlock(SelectorPlayground, {
          key: 0,
          "get-aut-iframe": __props.getAutIframe,
          "event-manager": __props.eventManager
        }, null, 8, ["get-aut-iframe", "event-manager"])) : createCommentVNode("", true),
        unref(studioStore).isActive ? (openBlock(), createBlock(_sfc_main$l, { key: 1 })) : createCommentVNode("", true),
        createVNode(_sfc_main$F, {
          modelValue: showAlert.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showAlert.value = $event),
          status: "success",
          dismissible: ""
        }, {
          title: withCtx(() => [
            createVNode(_sfc_main$E, { href: "https://on.cypress.io/mount" }, {
              default: withCtx(() => [
                createVNode(_component_i_cy_book_x16, { class: "inline-block icon-dark-indigo-500 icon-light-indigo-200" }),
                createTextVNode(" " + toDisplayString(unref(t)("runner.header.reviewDocs")), 1)
              ]),
              _: 1
            }),
            createTextVNode(" " + toDisplayString(unref(t)("runner.header.troubleRendering")), 1)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 512);
    };
  }
});
const __default__$2 = defineComponent({
  inheritAttrs: false
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const screenshotStore = useScreenshotStore();
    const attrs = useAttrs();
    const classes = computed(() => {
      return {
        [attrs.class]: !screenshotStore.isScreenshotting
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const screenshotStore = useScreenshotStore();
    const style = computed(() => {
      if (screenshotStore.isScreenshotting) {
        return {
          left: `0px`,
          width: `100%`
        };
      }
      return {
        width: isRunMode ? "100%" : `calc(100% - ${runnerConstants.collapsedNavBarWidth})`
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        style: normalizeStyle(unref(style)),
        class: normalizeClass(unref(screenshotStore).isScreenshotting || unref(isRunMode) ? "" : "border-l-1")
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
const ScreenshotHelperPixels_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-96a461b4"), n = n(), popScopeId(), n);
const _hoisted_1$c = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_3$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_4$4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_5$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _hoisted_7$1 = [
  _hoisted_1$c,
  _hoisted_2$8,
  _hoisted_3$5,
  _hoisted_4$4,
  _hoisted_5$3,
  _hoisted_6$2
];
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const screenshotStore = useScreenshotStore();
    getEventManager();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({
          "screenshot-helper-pixels": true,
          "hidden": unref(screenshotStore).isScreenshotting
        })
      }, _hoisted_7$1, 2);
    };
  }
});
const ScreenshotHelperPixels = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-96a461b4"]]);
gql`
mutation Preferences_SetPreferences ($value: String!) {
  setPreferences (value: $value, type: global) {
    ...TestingPreferences
    ...SpecRunner_Preferences
  }
}`;
function usePreferences() {
  const runnerUiStore = useRunnerUiStore();
  const setPreferences = useMutation(Preferences_SetPreferencesDocument);
  function update(preference, value) {
    if (runnerUiStore[preference] !== value) {
      runnerUiStore.setPreference(preference, value);
      setPreferences.executeMutation({ value: JSON.stringify({ [preference]: value }) });
    }
  }
  return {
    update
  };
}
var entities$1 = {};
var encode$1 = {};
const amp$2 = "&";
const apos$1 = "'";
const gt$2 = ">";
const lt$2 = "<";
const quot$2 = '"';
const require$$2 = {
  amp: amp$2,
  apos: apos$1,
  gt: gt$2,
  lt: lt$2,
  quot: quot$2
};
const Aacute$1 = "\xC1";
const aacute$1 = "\xE1";
const Abreve = "\u0102";
const abreve = "\u0103";
const ac = "\u223E";
const acd = "\u223F";
const acE = "\u223E\u0333";
const Acirc$1 = "\xC2";
const acirc$1 = "\xE2";
const acute$1 = "\xB4";
const Acy = "\u0410";
const acy = "\u0430";
const AElig$1 = "\xC6";
const aelig$1 = "\xE6";
const af = "\u2061";
const Afr = "\u{1D504}";
const afr = "\u{1D51E}";
const Agrave$1 = "\xC0";
const agrave$1 = "\xE0";
const alefsym = "\u2135";
const aleph = "\u2135";
const Alpha = "\u0391";
const alpha = "\u03B1";
const Amacr = "\u0100";
const amacr = "\u0101";
const amalg = "\u2A3F";
const amp$1 = "&";
const AMP$1 = "&";
const andand = "\u2A55";
const And = "\u2A53";
const and = "\u2227";
const andd = "\u2A5C";
const andslope = "\u2A58";
const andv = "\u2A5A";
const ang = "\u2220";
const ange = "\u29A4";
const angle = "\u2220";
const angmsdaa = "\u29A8";
const angmsdab = "\u29A9";
const angmsdac = "\u29AA";
const angmsdad = "\u29AB";
const angmsdae = "\u29AC";
const angmsdaf = "\u29AD";
const angmsdag = "\u29AE";
const angmsdah = "\u29AF";
const angmsd = "\u2221";
const angrt = "\u221F";
const angrtvb = "\u22BE";
const angrtvbd = "\u299D";
const angsph = "\u2222";
const angst = "\xC5";
const angzarr = "\u237C";
const Aogon = "\u0104";
const aogon = "\u0105";
const Aopf = "\u{1D538}";
const aopf = "\u{1D552}";
const apacir = "\u2A6F";
const ap = "\u2248";
const apE = "\u2A70";
const ape = "\u224A";
const apid = "\u224B";
const apos = "'";
const ApplyFunction = "\u2061";
const approx = "\u2248";
const approxeq = "\u224A";
const Aring$1 = "\xC5";
const aring$1 = "\xE5";
const Ascr = "\u{1D49C}";
const ascr = "\u{1D4B6}";
const Assign = "\u2254";
const ast = "*";
const asymp = "\u2248";
const asympeq = "\u224D";
const Atilde$1 = "\xC3";
const atilde$1 = "\xE3";
const Auml$1 = "\xC4";
const auml$1 = "\xE4";
const awconint = "\u2233";
const awint = "\u2A11";
const backcong = "\u224C";
const backepsilon = "\u03F6";
const backprime = "\u2035";
const backsim = "\u223D";
const backsimeq = "\u22CD";
const Backslash = "\u2216";
const Barv = "\u2AE7";
const barvee = "\u22BD";
const barwed = "\u2305";
const Barwed = "\u2306";
const barwedge = "\u2305";
const bbrk = "\u23B5";
const bbrktbrk = "\u23B6";
const bcong = "\u224C";
const Bcy = "\u0411";
const bcy = "\u0431";
const bdquo = "\u201E";
const becaus = "\u2235";
const because = "\u2235";
const Because = "\u2235";
const bemptyv = "\u29B0";
const bepsi = "\u03F6";
const bernou = "\u212C";
const Bernoullis = "\u212C";
const Beta = "\u0392";
const beta = "\u03B2";
const beth = "\u2136";
const between = "\u226C";
const Bfr = "\u{1D505}";
const bfr = "\u{1D51F}";
const bigcap = "\u22C2";
const bigcirc = "\u25EF";
const bigcup = "\u22C3";
const bigodot = "\u2A00";
const bigoplus = "\u2A01";
const bigotimes = "\u2A02";
const bigsqcup = "\u2A06";
const bigstar = "\u2605";
const bigtriangledown = "\u25BD";
const bigtriangleup = "\u25B3";
const biguplus = "\u2A04";
const bigvee = "\u22C1";
const bigwedge = "\u22C0";
const bkarow = "\u290D";
const blacklozenge = "\u29EB";
const blacksquare = "\u25AA";
const blacktriangle = "\u25B4";
const blacktriangledown = "\u25BE";
const blacktriangleleft = "\u25C2";
const blacktriangleright = "\u25B8";
const blank = "\u2423";
const blk12 = "\u2592";
const blk14 = "\u2591";
const blk34 = "\u2593";
const block = "\u2588";
const bne = "=\u20E5";
const bnequiv = "\u2261\u20E5";
const bNot = "\u2AED";
const bnot = "\u2310";
const Bopf = "\u{1D539}";
const bopf = "\u{1D553}";
const bot = "\u22A5";
const bottom = "\u22A5";
const bowtie = "\u22C8";
const boxbox = "\u29C9";
const boxdl = "\u2510";
const boxdL = "\u2555";
const boxDl = "\u2556";
const boxDL = "\u2557";
const boxdr = "\u250C";
const boxdR = "\u2552";
const boxDr = "\u2553";
const boxDR = "\u2554";
const boxh = "\u2500";
const boxH = "\u2550";
const boxhd = "\u252C";
const boxHd = "\u2564";
const boxhD = "\u2565";
const boxHD = "\u2566";
const boxhu = "\u2534";
const boxHu = "\u2567";
const boxhU = "\u2568";
const boxHU = "\u2569";
const boxminus = "\u229F";
const boxplus = "\u229E";
const boxtimes = "\u22A0";
const boxul = "\u2518";
const boxuL = "\u255B";
const boxUl = "\u255C";
const boxUL = "\u255D";
const boxur = "\u2514";
const boxuR = "\u2558";
const boxUr = "\u2559";
const boxUR = "\u255A";
const boxv = "\u2502";
const boxV = "\u2551";
const boxvh = "\u253C";
const boxvH = "\u256A";
const boxVh = "\u256B";
const boxVH = "\u256C";
const boxvl = "\u2524";
const boxvL = "\u2561";
const boxVl = "\u2562";
const boxVL = "\u2563";
const boxvr = "\u251C";
const boxvR = "\u255E";
const boxVr = "\u255F";
const boxVR = "\u2560";
const bprime = "\u2035";
const breve = "\u02D8";
const Breve = "\u02D8";
const brvbar$1 = "\xA6";
const bscr = "\u{1D4B7}";
const Bscr = "\u212C";
const bsemi = "\u204F";
const bsim = "\u223D";
const bsime = "\u22CD";
const bsolb = "\u29C5";
const bsol = "\\";
const bsolhsub = "\u27C8";
const bull = "\u2022";
const bullet = "\u2022";
const bump = "\u224E";
const bumpE = "\u2AAE";
const bumpe = "\u224F";
const Bumpeq = "\u224E";
const bumpeq = "\u224F";
const Cacute = "\u0106";
const cacute = "\u0107";
const capand = "\u2A44";
const capbrcup = "\u2A49";
const capcap = "\u2A4B";
const cap = "\u2229";
const Cap = "\u22D2";
const capcup = "\u2A47";
const capdot = "\u2A40";
const CapitalDifferentialD = "\u2145";
const caps = "\u2229\uFE00";
const caret = "\u2041";
const caron = "\u02C7";
const Cayleys = "\u212D";
const ccaps = "\u2A4D";
const Ccaron = "\u010C";
const ccaron = "\u010D";
const Ccedil$1 = "\xC7";
const ccedil$1 = "\xE7";
const Ccirc = "\u0108";
const ccirc = "\u0109";
const Cconint = "\u2230";
const ccups = "\u2A4C";
const ccupssm = "\u2A50";
const Cdot = "\u010A";
const cdot = "\u010B";
const cedil$1 = "\xB8";
const Cedilla = "\xB8";
const cemptyv = "\u29B2";
const cent$1 = "\xA2";
const centerdot = "\xB7";
const CenterDot = "\xB7";
const cfr = "\u{1D520}";
const Cfr = "\u212D";
const CHcy = "\u0427";
const chcy = "\u0447";
const check = "\u2713";
const checkmark = "\u2713";
const Chi = "\u03A7";
const chi = "\u03C7";
const circ = "\u02C6";
const circeq = "\u2257";
const circlearrowleft = "\u21BA";
const circlearrowright = "\u21BB";
const circledast = "\u229B";
const circledcirc = "\u229A";
const circleddash = "\u229D";
const CircleDot = "\u2299";
const circledR = "\xAE";
const circledS = "\u24C8";
const CircleMinus = "\u2296";
const CirclePlus = "\u2295";
const CircleTimes = "\u2297";
const cir = "\u25CB";
const cirE = "\u29C3";
const cire = "\u2257";
const cirfnint = "\u2A10";
const cirmid = "\u2AEF";
const cirscir = "\u29C2";
const ClockwiseContourIntegral = "\u2232";
const CloseCurlyDoubleQuote = "\u201D";
const CloseCurlyQuote = "\u2019";
const clubs = "\u2663";
const clubsuit = "\u2663";
const colon = ":";
const Colon = "\u2237";
const Colone = "\u2A74";
const colone = "\u2254";
const coloneq = "\u2254";
const comma = ",";
const commat = "@";
const comp = "\u2201";
const compfn = "\u2218";
const complement = "\u2201";
const complexes = "\u2102";
const cong = "\u2245";
const congdot = "\u2A6D";
const Congruent = "\u2261";
const conint = "\u222E";
const Conint = "\u222F";
const ContourIntegral = "\u222E";
const copf = "\u{1D554}";
const Copf = "\u2102";
const coprod = "\u2210";
const Coproduct = "\u2210";
const copy$1 = "\xA9";
const COPY$1 = "\xA9";
const copysr = "\u2117";
const CounterClockwiseContourIntegral = "\u2233";
const crarr = "\u21B5";
const cross = "\u2717";
const Cross = "\u2A2F";
const Cscr = "\u{1D49E}";
const cscr = "\u{1D4B8}";
const csub = "\u2ACF";
const csube = "\u2AD1";
const csup = "\u2AD0";
const csupe = "\u2AD2";
const ctdot = "\u22EF";
const cudarrl = "\u2938";
const cudarrr = "\u2935";
const cuepr = "\u22DE";
const cuesc = "\u22DF";
const cularr = "\u21B6";
const cularrp = "\u293D";
const cupbrcap = "\u2A48";
const cupcap = "\u2A46";
const CupCap = "\u224D";
const cup = "\u222A";
const Cup = "\u22D3";
const cupcup = "\u2A4A";
const cupdot = "\u228D";
const cupor = "\u2A45";
const cups = "\u222A\uFE00";
const curarr = "\u21B7";
const curarrm = "\u293C";
const curlyeqprec = "\u22DE";
const curlyeqsucc = "\u22DF";
const curlyvee = "\u22CE";
const curlywedge = "\u22CF";
const curren$1 = "\xA4";
const curvearrowleft = "\u21B6";
const curvearrowright = "\u21B7";
const cuvee = "\u22CE";
const cuwed = "\u22CF";
const cwconint = "\u2232";
const cwint = "\u2231";
const cylcty = "\u232D";
const dagger = "\u2020";
const Dagger = "\u2021";
const daleth = "\u2138";
const darr = "\u2193";
const Darr = "\u21A1";
const dArr = "\u21D3";
const dash = "\u2010";
const Dashv = "\u2AE4";
const dashv = "\u22A3";
const dbkarow = "\u290F";
const dblac = "\u02DD";
const Dcaron = "\u010E";
const dcaron = "\u010F";
const Dcy = "\u0414";
const dcy = "\u0434";
const ddagger = "\u2021";
const ddarr = "\u21CA";
const DD = "\u2145";
const dd = "\u2146";
const DDotrahd = "\u2911";
const ddotseq = "\u2A77";
const deg$1 = "\xB0";
const Del = "\u2207";
const Delta = "\u0394";
const delta = "\u03B4";
const demptyv = "\u29B1";
const dfisht = "\u297F";
const Dfr = "\u{1D507}";
const dfr = "\u{1D521}";
const dHar = "\u2965";
const dharl = "\u21C3";
const dharr = "\u21C2";
const DiacriticalAcute = "\xB4";
const DiacriticalDot = "\u02D9";
const DiacriticalDoubleAcute = "\u02DD";
const DiacriticalGrave = "`";
const DiacriticalTilde = "\u02DC";
const diam = "\u22C4";
const diamond = "\u22C4";
const Diamond = "\u22C4";
const diamondsuit = "\u2666";
const diams = "\u2666";
const die = "\xA8";
const DifferentialD = "\u2146";
const digamma = "\u03DD";
const disin = "\u22F2";
const div = "\xF7";
const divide$1 = "\xF7";
const divideontimes = "\u22C7";
const divonx = "\u22C7";
const DJcy = "\u0402";
const djcy = "\u0452";
const dlcorn = "\u231E";
const dlcrop = "\u230D";
const dollar = "$";
const Dopf = "\u{1D53B}";
const dopf = "\u{1D555}";
const Dot = "\xA8";
const dot = "\u02D9";
const DotDot = "\u20DC";
const doteq = "\u2250";
const doteqdot = "\u2251";
const DotEqual = "\u2250";
const dotminus = "\u2238";
const dotplus = "\u2214";
const dotsquare = "\u22A1";
const doublebarwedge = "\u2306";
const DoubleContourIntegral = "\u222F";
const DoubleDot = "\xA8";
const DoubleDownArrow = "\u21D3";
const DoubleLeftArrow = "\u21D0";
const DoubleLeftRightArrow = "\u21D4";
const DoubleLeftTee = "\u2AE4";
const DoubleLongLeftArrow = "\u27F8";
const DoubleLongLeftRightArrow = "\u27FA";
const DoubleLongRightArrow = "\u27F9";
const DoubleRightArrow = "\u21D2";
const DoubleRightTee = "\u22A8";
const DoubleUpArrow = "\u21D1";
const DoubleUpDownArrow = "\u21D5";
const DoubleVerticalBar = "\u2225";
const DownArrowBar = "\u2913";
const downarrow = "\u2193";
const DownArrow = "\u2193";
const Downarrow = "\u21D3";
const DownArrowUpArrow = "\u21F5";
const DownBreve = "\u0311";
const downdownarrows = "\u21CA";
const downharpoonleft = "\u21C3";
const downharpoonright = "\u21C2";
const DownLeftRightVector = "\u2950";
const DownLeftTeeVector = "\u295E";
const DownLeftVectorBar = "\u2956";
const DownLeftVector = "\u21BD";
const DownRightTeeVector = "\u295F";
const DownRightVectorBar = "\u2957";
const DownRightVector = "\u21C1";
const DownTeeArrow = "\u21A7";
const DownTee = "\u22A4";
const drbkarow = "\u2910";
const drcorn = "\u231F";
const drcrop = "\u230C";
const Dscr = "\u{1D49F}";
const dscr = "\u{1D4B9}";
const DScy = "\u0405";
const dscy = "\u0455";
const dsol = "\u29F6";
const Dstrok = "\u0110";
const dstrok = "\u0111";
const dtdot = "\u22F1";
const dtri = "\u25BF";
const dtrif = "\u25BE";
const duarr = "\u21F5";
const duhar = "\u296F";
const dwangle = "\u29A6";
const DZcy = "\u040F";
const dzcy = "\u045F";
const dzigrarr = "\u27FF";
const Eacute$1 = "\xC9";
const eacute$1 = "\xE9";
const easter = "\u2A6E";
const Ecaron = "\u011A";
const ecaron = "\u011B";
const Ecirc$1 = "\xCA";
const ecirc$1 = "\xEA";
const ecir = "\u2256";
const ecolon = "\u2255";
const Ecy = "\u042D";
const ecy = "\u044D";
const eDDot = "\u2A77";
const Edot = "\u0116";
const edot = "\u0117";
const eDot = "\u2251";
const ee = "\u2147";
const efDot = "\u2252";
const Efr = "\u{1D508}";
const efr = "\u{1D522}";
const eg = "\u2A9A";
const Egrave$1 = "\xC8";
const egrave$1 = "\xE8";
const egs = "\u2A96";
const egsdot = "\u2A98";
const el = "\u2A99";
const Element = "\u2208";
const elinters = "\u23E7";
const ell = "\u2113";
const els = "\u2A95";
const elsdot = "\u2A97";
const Emacr = "\u0112";
const emacr = "\u0113";
const empty = "\u2205";
const emptyset = "\u2205";
const EmptySmallSquare = "\u25FB";
const emptyv = "\u2205";
const EmptyVerySmallSquare = "\u25AB";
const emsp13 = "\u2004";
const emsp14 = "\u2005";
const emsp = "\u2003";
const ENG = "\u014A";
const eng = "\u014B";
const ensp = "\u2002";
const Eogon = "\u0118";
const eogon = "\u0119";
const Eopf = "\u{1D53C}";
const eopf = "\u{1D556}";
const epar = "\u22D5";
const eparsl = "\u29E3";
const eplus = "\u2A71";
const epsi = "\u03B5";
const Epsilon = "\u0395";
const epsilon = "\u03B5";
const epsiv = "\u03F5";
const eqcirc = "\u2256";
const eqcolon = "\u2255";
const eqsim = "\u2242";
const eqslantgtr = "\u2A96";
const eqslantless = "\u2A95";
const Equal = "\u2A75";
const equals = "=";
const EqualTilde = "\u2242";
const equest = "\u225F";
const Equilibrium = "\u21CC";
const equiv = "\u2261";
const equivDD = "\u2A78";
const eqvparsl = "\u29E5";
const erarr = "\u2971";
const erDot = "\u2253";
const escr = "\u212F";
const Escr = "\u2130";
const esdot = "\u2250";
const Esim = "\u2A73";
const esim = "\u2242";
const Eta = "\u0397";
const eta = "\u03B7";
const ETH$1 = "\xD0";
const eth$1 = "\xF0";
const Euml$1 = "\xCB";
const euml$1 = "\xEB";
const euro = "\u20AC";
const excl = "!";
const exist = "\u2203";
const Exists = "\u2203";
const expectation = "\u2130";
const exponentiale = "\u2147";
const ExponentialE = "\u2147";
const fallingdotseq = "\u2252";
const Fcy = "\u0424";
const fcy = "\u0444";
const female = "\u2640";
const ffilig = "\uFB03";
const fflig = "\uFB00";
const ffllig = "\uFB04";
const Ffr = "\u{1D509}";
const ffr = "\u{1D523}";
const filig = "\uFB01";
const FilledSmallSquare = "\u25FC";
const FilledVerySmallSquare = "\u25AA";
const fjlig = "fj";
const flat = "\u266D";
const fllig = "\uFB02";
const fltns = "\u25B1";
const fnof = "\u0192";
const Fopf = "\u{1D53D}";
const fopf = "\u{1D557}";
const forall = "\u2200";
const ForAll = "\u2200";
const fork = "\u22D4";
const forkv = "\u2AD9";
const Fouriertrf = "\u2131";
const fpartint = "\u2A0D";
const frac12$1 = "\xBD";
const frac13 = "\u2153";
const frac14$1 = "\xBC";
const frac15 = "\u2155";
const frac16 = "\u2159";
const frac18 = "\u215B";
const frac23 = "\u2154";
const frac25 = "\u2156";
const frac34$1 = "\xBE";
const frac35 = "\u2157";
const frac38 = "\u215C";
const frac45 = "\u2158";
const frac56 = "\u215A";
const frac58 = "\u215D";
const frac78 = "\u215E";
const frasl = "\u2044";
const frown = "\u2322";
const fscr = "\u{1D4BB}";
const Fscr = "\u2131";
const gacute = "\u01F5";
const Gamma = "\u0393";
const gamma = "\u03B3";
const Gammad = "\u03DC";
const gammad = "\u03DD";
const gap = "\u2A86";
const Gbreve = "\u011E";
const gbreve = "\u011F";
const Gcedil = "\u0122";
const Gcirc = "\u011C";
const gcirc = "\u011D";
const Gcy = "\u0413";
const gcy = "\u0433";
const Gdot = "\u0120";
const gdot = "\u0121";
const ge = "\u2265";
const gE = "\u2267";
const gEl = "\u2A8C";
const gel = "\u22DB";
const geq = "\u2265";
const geqq = "\u2267";
const geqslant = "\u2A7E";
const gescc = "\u2AA9";
const ges = "\u2A7E";
const gesdot = "\u2A80";
const gesdoto = "\u2A82";
const gesdotol = "\u2A84";
const gesl = "\u22DB\uFE00";
const gesles = "\u2A94";
const Gfr = "\u{1D50A}";
const gfr = "\u{1D524}";
const gg = "\u226B";
const Gg = "\u22D9";
const ggg = "\u22D9";
const gimel = "\u2137";
const GJcy = "\u0403";
const gjcy = "\u0453";
const gla = "\u2AA5";
const gl = "\u2277";
const glE = "\u2A92";
const glj = "\u2AA4";
const gnap = "\u2A8A";
const gnapprox = "\u2A8A";
const gne = "\u2A88";
const gnE = "\u2269";
const gneq = "\u2A88";
const gneqq = "\u2269";
const gnsim = "\u22E7";
const Gopf = "\u{1D53E}";
const gopf = "\u{1D558}";
const grave = "`";
const GreaterEqual = "\u2265";
const GreaterEqualLess = "\u22DB";
const GreaterFullEqual = "\u2267";
const GreaterGreater = "\u2AA2";
const GreaterLess = "\u2277";
const GreaterSlantEqual = "\u2A7E";
const GreaterTilde = "\u2273";
const Gscr = "\u{1D4A2}";
const gscr = "\u210A";
const gsim = "\u2273";
const gsime = "\u2A8E";
const gsiml = "\u2A90";
const gtcc = "\u2AA7";
const gtcir = "\u2A7A";
const gt$1 = ">";
const GT$1 = ">";
const Gt = "\u226B";
const gtdot = "\u22D7";
const gtlPar = "\u2995";
const gtquest = "\u2A7C";
const gtrapprox = "\u2A86";
const gtrarr = "\u2978";
const gtrdot = "\u22D7";
const gtreqless = "\u22DB";
const gtreqqless = "\u2A8C";
const gtrless = "\u2277";
const gtrsim = "\u2273";
const gvertneqq = "\u2269\uFE00";
const gvnE = "\u2269\uFE00";
const Hacek = "\u02C7";
const hairsp = "\u200A";
const half = "\xBD";
const hamilt = "\u210B";
const HARDcy = "\u042A";
const hardcy = "\u044A";
const harrcir = "\u2948";
const harr = "\u2194";
const hArr = "\u21D4";
const harrw = "\u21AD";
const Hat = "^";
const hbar = "\u210F";
const Hcirc = "\u0124";
const hcirc = "\u0125";
const hearts = "\u2665";
const heartsuit = "\u2665";
const hellip = "\u2026";
const hercon = "\u22B9";
const hfr = "\u{1D525}";
const Hfr = "\u210C";
const HilbertSpace = "\u210B";
const hksearow = "\u2925";
const hkswarow = "\u2926";
const hoarr = "\u21FF";
const homtht = "\u223B";
const hookleftarrow = "\u21A9";
const hookrightarrow = "\u21AA";
const hopf = "\u{1D559}";
const Hopf = "\u210D";
const horbar = "\u2015";
const HorizontalLine = "\u2500";
const hscr = "\u{1D4BD}";
const Hscr = "\u210B";
const hslash = "\u210F";
const Hstrok = "\u0126";
const hstrok = "\u0127";
const HumpDownHump = "\u224E";
const HumpEqual = "\u224F";
const hybull = "\u2043";
const hyphen = "\u2010";
const Iacute$1 = "\xCD";
const iacute$1 = "\xED";
const ic = "\u2063";
const Icirc$1 = "\xCE";
const icirc$1 = "\xEE";
const Icy = "\u0418";
const icy = "\u0438";
const Idot = "\u0130";
const IEcy = "\u0415";
const iecy = "\u0435";
const iexcl$1 = "\xA1";
const iff = "\u21D4";
const ifr = "\u{1D526}";
const Ifr = "\u2111";
const Igrave$1 = "\xCC";
const igrave$1 = "\xEC";
const ii = "\u2148";
const iiiint = "\u2A0C";
const iiint = "\u222D";
const iinfin = "\u29DC";
const iiota = "\u2129";
const IJlig = "\u0132";
const ijlig = "\u0133";
const Imacr = "\u012A";
const imacr = "\u012B";
const image = "\u2111";
const ImaginaryI = "\u2148";
const imagline = "\u2110";
const imagpart = "\u2111";
const imath = "\u0131";
const Im = "\u2111";
const imof = "\u22B7";
const imped = "\u01B5";
const Implies = "\u21D2";
const incare = "\u2105";
const infin = "\u221E";
const infintie = "\u29DD";
const inodot = "\u0131";
const intcal = "\u22BA";
const int = "\u222B";
const Int = "\u222C";
const integers = "\u2124";
const Integral = "\u222B";
const intercal = "\u22BA";
const Intersection = "\u22C2";
const intlarhk = "\u2A17";
const intprod = "\u2A3C";
const InvisibleComma = "\u2063";
const InvisibleTimes = "\u2062";
const IOcy = "\u0401";
const iocy = "\u0451";
const Iogon = "\u012E";
const iogon = "\u012F";
const Iopf = "\u{1D540}";
const iopf = "\u{1D55A}";
const Iota = "\u0399";
const iota = "\u03B9";
const iprod = "\u2A3C";
const iquest$1 = "\xBF";
const iscr = "\u{1D4BE}";
const Iscr = "\u2110";
const isin = "\u2208";
const isindot = "\u22F5";
const isinE = "\u22F9";
const isins = "\u22F4";
const isinsv = "\u22F3";
const isinv = "\u2208";
const it = "\u2062";
const Itilde = "\u0128";
const itilde = "\u0129";
const Iukcy = "\u0406";
const iukcy = "\u0456";
const Iuml$1 = "\xCF";
const iuml$1 = "\xEF";
const Jcirc = "\u0134";
const jcirc = "\u0135";
const Jcy = "\u0419";
const jcy = "\u0439";
const Jfr = "\u{1D50D}";
const jfr = "\u{1D527}";
const jmath = "\u0237";
const Jopf = "\u{1D541}";
const jopf = "\u{1D55B}";
const Jscr = "\u{1D4A5}";
const jscr = "\u{1D4BF}";
const Jsercy = "\u0408";
const jsercy = "\u0458";
const Jukcy = "\u0404";
const jukcy = "\u0454";
const Kappa = "\u039A";
const kappa = "\u03BA";
const kappav = "\u03F0";
const Kcedil = "\u0136";
const kcedil = "\u0137";
const Kcy = "\u041A";
const kcy = "\u043A";
const Kfr = "\u{1D50E}";
const kfr = "\u{1D528}";
const kgreen = "\u0138";
const KHcy = "\u0425";
const khcy = "\u0445";
const KJcy = "\u040C";
const kjcy = "\u045C";
const Kopf = "\u{1D542}";
const kopf = "\u{1D55C}";
const Kscr = "\u{1D4A6}";
const kscr = "\u{1D4C0}";
const lAarr = "\u21DA";
const Lacute = "\u0139";
const lacute = "\u013A";
const laemptyv = "\u29B4";
const lagran = "\u2112";
const Lambda = "\u039B";
const lambda = "\u03BB";
const lang = "\u27E8";
const Lang = "\u27EA";
const langd = "\u2991";
const langle = "\u27E8";
const lap = "\u2A85";
const Laplacetrf = "\u2112";
const laquo$1 = "\xAB";
const larrb = "\u21E4";
const larrbfs = "\u291F";
const larr = "\u2190";
const Larr = "\u219E";
const lArr = "\u21D0";
const larrfs = "\u291D";
const larrhk = "\u21A9";
const larrlp = "\u21AB";
const larrpl = "\u2939";
const larrsim = "\u2973";
const larrtl = "\u21A2";
const latail = "\u2919";
const lAtail = "\u291B";
const lat = "\u2AAB";
const late = "\u2AAD";
const lates = "\u2AAD\uFE00";
const lbarr = "\u290C";
const lBarr = "\u290E";
const lbbrk = "\u2772";
const lbrace = "{";
const lbrack = "[";
const lbrke = "\u298B";
const lbrksld = "\u298F";
const lbrkslu = "\u298D";
const Lcaron = "\u013D";
const lcaron = "\u013E";
const Lcedil = "\u013B";
const lcedil = "\u013C";
const lceil = "\u2308";
const lcub = "{";
const Lcy = "\u041B";
const lcy = "\u043B";
const ldca = "\u2936";
const ldquo = "\u201C";
const ldquor = "\u201E";
const ldrdhar = "\u2967";
const ldrushar = "\u294B";
const ldsh = "\u21B2";
const le = "\u2264";
const lE = "\u2266";
const LeftAngleBracket = "\u27E8";
const LeftArrowBar = "\u21E4";
const leftarrow = "\u2190";
const LeftArrow = "\u2190";
const Leftarrow = "\u21D0";
const LeftArrowRightArrow = "\u21C6";
const leftarrowtail = "\u21A2";
const LeftCeiling = "\u2308";
const LeftDoubleBracket = "\u27E6";
const LeftDownTeeVector = "\u2961";
const LeftDownVectorBar = "\u2959";
const LeftDownVector = "\u21C3";
const LeftFloor = "\u230A";
const leftharpoondown = "\u21BD";
const leftharpoonup = "\u21BC";
const leftleftarrows = "\u21C7";
const leftrightarrow = "\u2194";
const LeftRightArrow = "\u2194";
const Leftrightarrow = "\u21D4";
const leftrightarrows = "\u21C6";
const leftrightharpoons = "\u21CB";
const leftrightsquigarrow = "\u21AD";
const LeftRightVector = "\u294E";
const LeftTeeArrow = "\u21A4";
const LeftTee = "\u22A3";
const LeftTeeVector = "\u295A";
const leftthreetimes = "\u22CB";
const LeftTriangleBar = "\u29CF";
const LeftTriangle = "\u22B2";
const LeftTriangleEqual = "\u22B4";
const LeftUpDownVector = "\u2951";
const LeftUpTeeVector = "\u2960";
const LeftUpVectorBar = "\u2958";
const LeftUpVector = "\u21BF";
const LeftVectorBar = "\u2952";
const LeftVector = "\u21BC";
const lEg = "\u2A8B";
const leg = "\u22DA";
const leq = "\u2264";
const leqq = "\u2266";
const leqslant = "\u2A7D";
const lescc = "\u2AA8";
const les = "\u2A7D";
const lesdot = "\u2A7F";
const lesdoto = "\u2A81";
const lesdotor = "\u2A83";
const lesg = "\u22DA\uFE00";
const lesges = "\u2A93";
const lessapprox = "\u2A85";
const lessdot = "\u22D6";
const lesseqgtr = "\u22DA";
const lesseqqgtr = "\u2A8B";
const LessEqualGreater = "\u22DA";
const LessFullEqual = "\u2266";
const LessGreater = "\u2276";
const lessgtr = "\u2276";
const LessLess = "\u2AA1";
const lesssim = "\u2272";
const LessSlantEqual = "\u2A7D";
const LessTilde = "\u2272";
const lfisht = "\u297C";
const lfloor = "\u230A";
const Lfr = "\u{1D50F}";
const lfr = "\u{1D529}";
const lg = "\u2276";
const lgE = "\u2A91";
const lHar = "\u2962";
const lhard = "\u21BD";
const lharu = "\u21BC";
const lharul = "\u296A";
const lhblk = "\u2584";
const LJcy = "\u0409";
const ljcy = "\u0459";
const llarr = "\u21C7";
const ll = "\u226A";
const Ll = "\u22D8";
const llcorner = "\u231E";
const Lleftarrow = "\u21DA";
const llhard = "\u296B";
const lltri = "\u25FA";
const Lmidot = "\u013F";
const lmidot = "\u0140";
const lmoustache = "\u23B0";
const lmoust = "\u23B0";
const lnap = "\u2A89";
const lnapprox = "\u2A89";
const lne = "\u2A87";
const lnE = "\u2268";
const lneq = "\u2A87";
const lneqq = "\u2268";
const lnsim = "\u22E6";
const loang = "\u27EC";
const loarr = "\u21FD";
const lobrk = "\u27E6";
const longleftarrow = "\u27F5";
const LongLeftArrow = "\u27F5";
const Longleftarrow = "\u27F8";
const longleftrightarrow = "\u27F7";
const LongLeftRightArrow = "\u27F7";
const Longleftrightarrow = "\u27FA";
const longmapsto = "\u27FC";
const longrightarrow = "\u27F6";
const LongRightArrow = "\u27F6";
const Longrightarrow = "\u27F9";
const looparrowleft = "\u21AB";
const looparrowright = "\u21AC";
const lopar = "\u2985";
const Lopf = "\u{1D543}";
const lopf = "\u{1D55D}";
const loplus = "\u2A2D";
const lotimes = "\u2A34";
const lowast = "\u2217";
const lowbar = "_";
const LowerLeftArrow = "\u2199";
const LowerRightArrow = "\u2198";
const loz = "\u25CA";
const lozenge = "\u25CA";
const lozf = "\u29EB";
const lpar = "(";
const lparlt = "\u2993";
const lrarr = "\u21C6";
const lrcorner = "\u231F";
const lrhar = "\u21CB";
const lrhard = "\u296D";
const lrm = "\u200E";
const lrtri = "\u22BF";
const lsaquo = "\u2039";
const lscr = "\u{1D4C1}";
const Lscr = "\u2112";
const lsh = "\u21B0";
const Lsh = "\u21B0";
const lsim = "\u2272";
const lsime = "\u2A8D";
const lsimg = "\u2A8F";
const lsqb = "[";
const lsquo = "\u2018";
const lsquor = "\u201A";
const Lstrok = "\u0141";
const lstrok = "\u0142";
const ltcc = "\u2AA6";
const ltcir = "\u2A79";
const lt$1 = "<";
const LT$1 = "<";
const Lt = "\u226A";
const ltdot = "\u22D6";
const lthree = "\u22CB";
const ltimes = "\u22C9";
const ltlarr = "\u2976";
const ltquest = "\u2A7B";
const ltri = "\u25C3";
const ltrie = "\u22B4";
const ltrif = "\u25C2";
const ltrPar = "\u2996";
const lurdshar = "\u294A";
const luruhar = "\u2966";
const lvertneqq = "\u2268\uFE00";
const lvnE = "\u2268\uFE00";
const macr$1 = "\xAF";
const male = "\u2642";
const malt = "\u2720";
const maltese = "\u2720";
const map = "\u21A6";
const mapsto = "\u21A6";
const mapstodown = "\u21A7";
const mapstoleft = "\u21A4";
const mapstoup = "\u21A5";
const marker = "\u25AE";
const mcomma = "\u2A29";
const Mcy = "\u041C";
const mcy = "\u043C";
const mdash = "\u2014";
const mDDot = "\u223A";
const measuredangle = "\u2221";
const MediumSpace = "\u205F";
const Mellintrf = "\u2133";
const Mfr = "\u{1D510}";
const mfr = "\u{1D52A}";
const mho = "\u2127";
const micro$1 = "\xB5";
const midast = "*";
const midcir = "\u2AF0";
const mid = "\u2223";
const middot$1 = "\xB7";
const minusb = "\u229F";
const minus = "\u2212";
const minusd = "\u2238";
const minusdu = "\u2A2A";
const MinusPlus = "\u2213";
const mlcp = "\u2ADB";
const mldr = "\u2026";
const mnplus = "\u2213";
const models = "\u22A7";
const Mopf = "\u{1D544}";
const mopf = "\u{1D55E}";
const mp = "\u2213";
const mscr = "\u{1D4C2}";
const Mscr = "\u2133";
const mstpos = "\u223E";
const Mu = "\u039C";
const mu = "\u03BC";
const multimap = "\u22B8";
const mumap = "\u22B8";
const nabla = "\u2207";
const Nacute = "\u0143";
const nacute = "\u0144";
const nang = "\u2220\u20D2";
const nap = "\u2249";
const napE = "\u2A70\u0338";
const napid = "\u224B\u0338";
const napos = "\u0149";
const napprox = "\u2249";
const natural = "\u266E";
const naturals = "\u2115";
const natur = "\u266E";
const nbsp$1 = "\xA0";
const nbump = "\u224E\u0338";
const nbumpe = "\u224F\u0338";
const ncap = "\u2A43";
const Ncaron = "\u0147";
const ncaron = "\u0148";
const Ncedil = "\u0145";
const ncedil = "\u0146";
const ncong = "\u2247";
const ncongdot = "\u2A6D\u0338";
const ncup = "\u2A42";
const Ncy = "\u041D";
const ncy = "\u043D";
const ndash = "\u2013";
const nearhk = "\u2924";
const nearr = "\u2197";
const neArr = "\u21D7";
const nearrow = "\u2197";
const ne = "\u2260";
const nedot = "\u2250\u0338";
const NegativeMediumSpace = "\u200B";
const NegativeThickSpace = "\u200B";
const NegativeThinSpace = "\u200B";
const NegativeVeryThinSpace = "\u200B";
const nequiv = "\u2262";
const nesear = "\u2928";
const nesim = "\u2242\u0338";
const NestedGreaterGreater = "\u226B";
const NestedLessLess = "\u226A";
const NewLine = "\n";
const nexist = "\u2204";
const nexists = "\u2204";
const Nfr = "\u{1D511}";
const nfr = "\u{1D52B}";
const ngE = "\u2267\u0338";
const nge = "\u2271";
const ngeq = "\u2271";
const ngeqq = "\u2267\u0338";
const ngeqslant = "\u2A7E\u0338";
const nges = "\u2A7E\u0338";
const nGg = "\u22D9\u0338";
const ngsim = "\u2275";
const nGt = "\u226B\u20D2";
const ngt = "\u226F";
const ngtr = "\u226F";
const nGtv = "\u226B\u0338";
const nharr = "\u21AE";
const nhArr = "\u21CE";
const nhpar = "\u2AF2";
const ni = "\u220B";
const nis = "\u22FC";
const nisd = "\u22FA";
const niv = "\u220B";
const NJcy = "\u040A";
const njcy = "\u045A";
const nlarr = "\u219A";
const nlArr = "\u21CD";
const nldr = "\u2025";
const nlE = "\u2266\u0338";
const nle = "\u2270";
const nleftarrow = "\u219A";
const nLeftarrow = "\u21CD";
const nleftrightarrow = "\u21AE";
const nLeftrightarrow = "\u21CE";
const nleq = "\u2270";
const nleqq = "\u2266\u0338";
const nleqslant = "\u2A7D\u0338";
const nles = "\u2A7D\u0338";
const nless = "\u226E";
const nLl = "\u22D8\u0338";
const nlsim = "\u2274";
const nLt = "\u226A\u20D2";
const nlt = "\u226E";
const nltri = "\u22EA";
const nltrie = "\u22EC";
const nLtv = "\u226A\u0338";
const nmid = "\u2224";
const NoBreak = "\u2060";
const NonBreakingSpace = "\xA0";
const nopf = "\u{1D55F}";
const Nopf = "\u2115";
const Not = "\u2AEC";
const not$1 = "\xAC";
const NotCongruent = "\u2262";
const NotCupCap = "\u226D";
const NotDoubleVerticalBar = "\u2226";
const NotElement = "\u2209";
const NotEqual = "\u2260";
const NotEqualTilde = "\u2242\u0338";
const NotExists = "\u2204";
const NotGreater = "\u226F";
const NotGreaterEqual = "\u2271";
const NotGreaterFullEqual = "\u2267\u0338";
const NotGreaterGreater = "\u226B\u0338";
const NotGreaterLess = "\u2279";
const NotGreaterSlantEqual = "\u2A7E\u0338";
const NotGreaterTilde = "\u2275";
const NotHumpDownHump = "\u224E\u0338";
const NotHumpEqual = "\u224F\u0338";
const notin = "\u2209";
const notindot = "\u22F5\u0338";
const notinE = "\u22F9\u0338";
const notinva = "\u2209";
const notinvb = "\u22F7";
const notinvc = "\u22F6";
const NotLeftTriangleBar = "\u29CF\u0338";
const NotLeftTriangle = "\u22EA";
const NotLeftTriangleEqual = "\u22EC";
const NotLess = "\u226E";
const NotLessEqual = "\u2270";
const NotLessGreater = "\u2278";
const NotLessLess = "\u226A\u0338";
const NotLessSlantEqual = "\u2A7D\u0338";
const NotLessTilde = "\u2274";
const NotNestedGreaterGreater = "\u2AA2\u0338";
const NotNestedLessLess = "\u2AA1\u0338";
const notni = "\u220C";
const notniva = "\u220C";
const notnivb = "\u22FE";
const notnivc = "\u22FD";
const NotPrecedes = "\u2280";
const NotPrecedesEqual = "\u2AAF\u0338";
const NotPrecedesSlantEqual = "\u22E0";
const NotReverseElement = "\u220C";
const NotRightTriangleBar = "\u29D0\u0338";
const NotRightTriangle = "\u22EB";
const NotRightTriangleEqual = "\u22ED";
const NotSquareSubset = "\u228F\u0338";
const NotSquareSubsetEqual = "\u22E2";
const NotSquareSuperset = "\u2290\u0338";
const NotSquareSupersetEqual = "\u22E3";
const NotSubset = "\u2282\u20D2";
const NotSubsetEqual = "\u2288";
const NotSucceeds = "\u2281";
const NotSucceedsEqual = "\u2AB0\u0338";
const NotSucceedsSlantEqual = "\u22E1";
const NotSucceedsTilde = "\u227F\u0338";
const NotSuperset = "\u2283\u20D2";
const NotSupersetEqual = "\u2289";
const NotTilde = "\u2241";
const NotTildeEqual = "\u2244";
const NotTildeFullEqual = "\u2247";
const NotTildeTilde = "\u2249";
const NotVerticalBar = "\u2224";
const nparallel = "\u2226";
const npar = "\u2226";
const nparsl = "\u2AFD\u20E5";
const npart = "\u2202\u0338";
const npolint = "\u2A14";
const npr = "\u2280";
const nprcue = "\u22E0";
const nprec = "\u2280";
const npreceq = "\u2AAF\u0338";
const npre = "\u2AAF\u0338";
const nrarrc = "\u2933\u0338";
const nrarr = "\u219B";
const nrArr = "\u21CF";
const nrarrw = "\u219D\u0338";
const nrightarrow = "\u219B";
const nRightarrow = "\u21CF";
const nrtri = "\u22EB";
const nrtrie = "\u22ED";
const nsc = "\u2281";
const nsccue = "\u22E1";
const nsce = "\u2AB0\u0338";
const Nscr = "\u{1D4A9}";
const nscr = "\u{1D4C3}";
const nshortmid = "\u2224";
const nshortparallel = "\u2226";
const nsim = "\u2241";
const nsime = "\u2244";
const nsimeq = "\u2244";
const nsmid = "\u2224";
const nspar = "\u2226";
const nsqsube = "\u22E2";
const nsqsupe = "\u22E3";
const nsub = "\u2284";
const nsubE = "\u2AC5\u0338";
const nsube = "\u2288";
const nsubset = "\u2282\u20D2";
const nsubseteq = "\u2288";
const nsubseteqq = "\u2AC5\u0338";
const nsucc = "\u2281";
const nsucceq = "\u2AB0\u0338";
const nsup = "\u2285";
const nsupE = "\u2AC6\u0338";
const nsupe = "\u2289";
const nsupset = "\u2283\u20D2";
const nsupseteq = "\u2289";
const nsupseteqq = "\u2AC6\u0338";
const ntgl = "\u2279";
const Ntilde$1 = "\xD1";
const ntilde$1 = "\xF1";
const ntlg = "\u2278";
const ntriangleleft = "\u22EA";
const ntrianglelefteq = "\u22EC";
const ntriangleright = "\u22EB";
const ntrianglerighteq = "\u22ED";
const Nu = "\u039D";
const nu = "\u03BD";
const num = "#";
const numero = "\u2116";
const numsp = "\u2007";
const nvap = "\u224D\u20D2";
const nvdash = "\u22AC";
const nvDash = "\u22AD";
const nVdash = "\u22AE";
const nVDash = "\u22AF";
const nvge = "\u2265\u20D2";
const nvgt = ">\u20D2";
const nvHarr = "\u2904";
const nvinfin = "\u29DE";
const nvlArr = "\u2902";
const nvle = "\u2264\u20D2";
const nvlt = "<\u20D2";
const nvltrie = "\u22B4\u20D2";
const nvrArr = "\u2903";
const nvrtrie = "\u22B5\u20D2";
const nvsim = "\u223C\u20D2";
const nwarhk = "\u2923";
const nwarr = "\u2196";
const nwArr = "\u21D6";
const nwarrow = "\u2196";
const nwnear = "\u2927";
const Oacute$1 = "\xD3";
const oacute$1 = "\xF3";
const oast = "\u229B";
const Ocirc$1 = "\xD4";
const ocirc$1 = "\xF4";
const ocir = "\u229A";
const Ocy = "\u041E";
const ocy = "\u043E";
const odash = "\u229D";
const Odblac = "\u0150";
const odblac = "\u0151";
const odiv = "\u2A38";
const odot = "\u2299";
const odsold = "\u29BC";
const OElig = "\u0152";
const oelig = "\u0153";
const ofcir = "\u29BF";
const Ofr = "\u{1D512}";
const ofr = "\u{1D52C}";
const ogon = "\u02DB";
const Ograve$1 = "\xD2";
const ograve$1 = "\xF2";
const ogt = "\u29C1";
const ohbar = "\u29B5";
const ohm = "\u03A9";
const oint = "\u222E";
const olarr = "\u21BA";
const olcir = "\u29BE";
const olcross = "\u29BB";
const oline = "\u203E";
const olt = "\u29C0";
const Omacr = "\u014C";
const omacr = "\u014D";
const Omega = "\u03A9";
const omega = "\u03C9";
const Omicron = "\u039F";
const omicron = "\u03BF";
const omid = "\u29B6";
const ominus = "\u2296";
const Oopf = "\u{1D546}";
const oopf = "\u{1D560}";
const opar = "\u29B7";
const OpenCurlyDoubleQuote = "\u201C";
const OpenCurlyQuote = "\u2018";
const operp = "\u29B9";
const oplus = "\u2295";
const orarr = "\u21BB";
const Or = "\u2A54";
const or = "\u2228";
const ord = "\u2A5D";
const order = "\u2134";
const orderof = "\u2134";
const ordf$1 = "\xAA";
const ordm$1 = "\xBA";
const origof = "\u22B6";
const oror = "\u2A56";
const orslope = "\u2A57";
const orv = "\u2A5B";
const oS = "\u24C8";
const Oscr = "\u{1D4AA}";
const oscr = "\u2134";
const Oslash$1 = "\xD8";
const oslash$1 = "\xF8";
const osol = "\u2298";
const Otilde$1 = "\xD5";
const otilde$1 = "\xF5";
const otimesas = "\u2A36";
const Otimes = "\u2A37";
const otimes = "\u2297";
const Ouml$1 = "\xD6";
const ouml$1 = "\xF6";
const ovbar = "\u233D";
const OverBar = "\u203E";
const OverBrace = "\u23DE";
const OverBracket = "\u23B4";
const OverParenthesis = "\u23DC";
const para$1 = "\xB6";
const parallel = "\u2225";
const par = "\u2225";
const parsim = "\u2AF3";
const parsl = "\u2AFD";
const part = "\u2202";
const PartialD = "\u2202";
const Pcy = "\u041F";
const pcy = "\u043F";
const percnt = "%";
const period = ".";
const permil = "\u2030";
const perp = "\u22A5";
const pertenk = "\u2031";
const Pfr = "\u{1D513}";
const pfr = "\u{1D52D}";
const Phi = "\u03A6";
const phi = "\u03C6";
const phiv = "\u03D5";
const phmmat = "\u2133";
const phone = "\u260E";
const Pi = "\u03A0";
const pi = "\u03C0";
const pitchfork = "\u22D4";
const piv = "\u03D6";
const planck = "\u210F";
const planckh = "\u210E";
const plankv = "\u210F";
const plusacir = "\u2A23";
const plusb = "\u229E";
const pluscir = "\u2A22";
const plus = "+";
const plusdo = "\u2214";
const plusdu = "\u2A25";
const pluse = "\u2A72";
const PlusMinus = "\xB1";
const plusmn$1 = "\xB1";
const plussim = "\u2A26";
const plustwo = "\u2A27";
const pm = "\xB1";
const Poincareplane = "\u210C";
const pointint = "\u2A15";
const popf = "\u{1D561}";
const Popf = "\u2119";
const pound$1 = "\xA3";
const prap = "\u2AB7";
const Pr = "\u2ABB";
const pr = "\u227A";
const prcue = "\u227C";
const precapprox = "\u2AB7";
const prec = "\u227A";
const preccurlyeq = "\u227C";
const Precedes = "\u227A";
const PrecedesEqual = "\u2AAF";
const PrecedesSlantEqual = "\u227C";
const PrecedesTilde = "\u227E";
const preceq = "\u2AAF";
const precnapprox = "\u2AB9";
const precneqq = "\u2AB5";
const precnsim = "\u22E8";
const pre = "\u2AAF";
const prE = "\u2AB3";
const precsim = "\u227E";
const prime = "\u2032";
const Prime = "\u2033";
const primes = "\u2119";
const prnap = "\u2AB9";
const prnE = "\u2AB5";
const prnsim = "\u22E8";
const prod = "\u220F";
const Product = "\u220F";
const profalar = "\u232E";
const profline = "\u2312";
const profsurf = "\u2313";
const prop = "\u221D";
const Proportional = "\u221D";
const Proportion = "\u2237";
const propto = "\u221D";
const prsim = "\u227E";
const prurel = "\u22B0";
const Pscr = "\u{1D4AB}";
const pscr = "\u{1D4C5}";
const Psi = "\u03A8";
const psi = "\u03C8";
const puncsp = "\u2008";
const Qfr = "\u{1D514}";
const qfr = "\u{1D52E}";
const qint = "\u2A0C";
const qopf = "\u{1D562}";
const Qopf = "\u211A";
const qprime = "\u2057";
const Qscr = "\u{1D4AC}";
const qscr = "\u{1D4C6}";
const quaternions = "\u210D";
const quatint = "\u2A16";
const quest = "?";
const questeq = "\u225F";
const quot$1 = '"';
const QUOT$1 = '"';
const rAarr = "\u21DB";
const race = "\u223D\u0331";
const Racute = "\u0154";
const racute = "\u0155";
const radic = "\u221A";
const raemptyv = "\u29B3";
const rang = "\u27E9";
const Rang = "\u27EB";
const rangd = "\u2992";
const range$1 = "\u29A5";
const rangle = "\u27E9";
const raquo$1 = "\xBB";
const rarrap = "\u2975";
const rarrb = "\u21E5";
const rarrbfs = "\u2920";
const rarrc = "\u2933";
const rarr = "\u2192";
const Rarr = "\u21A0";
const rArr = "\u21D2";
const rarrfs = "\u291E";
const rarrhk = "\u21AA";
const rarrlp = "\u21AC";
const rarrpl = "\u2945";
const rarrsim = "\u2974";
const Rarrtl = "\u2916";
const rarrtl = "\u21A3";
const rarrw = "\u219D";
const ratail = "\u291A";
const rAtail = "\u291C";
const ratio = "\u2236";
const rationals = "\u211A";
const rbarr = "\u290D";
const rBarr = "\u290F";
const RBarr = "\u2910";
const rbbrk = "\u2773";
const rbrace = "}";
const rbrack = "]";
const rbrke = "\u298C";
const rbrksld = "\u298E";
const rbrkslu = "\u2990";
const Rcaron = "\u0158";
const rcaron = "\u0159";
const Rcedil = "\u0156";
const rcedil = "\u0157";
const rceil = "\u2309";
const rcub = "}";
const Rcy = "\u0420";
const rcy = "\u0440";
const rdca = "\u2937";
const rdldhar = "\u2969";
const rdquo = "\u201D";
const rdquor = "\u201D";
const rdsh = "\u21B3";
const real = "\u211C";
const realine = "\u211B";
const realpart = "\u211C";
const reals = "\u211D";
const Re = "\u211C";
const rect = "\u25AD";
const reg$1 = "\xAE";
const REG$1 = "\xAE";
const ReverseElement = "\u220B";
const ReverseEquilibrium = "\u21CB";
const ReverseUpEquilibrium = "\u296F";
const rfisht = "\u297D";
const rfloor = "\u230B";
const rfr = "\u{1D52F}";
const Rfr = "\u211C";
const rHar = "\u2964";
const rhard = "\u21C1";
const rharu = "\u21C0";
const rharul = "\u296C";
const Rho = "\u03A1";
const rho = "\u03C1";
const rhov = "\u03F1";
const RightAngleBracket = "\u27E9";
const RightArrowBar = "\u21E5";
const rightarrow = "\u2192";
const RightArrow = "\u2192";
const Rightarrow = "\u21D2";
const RightArrowLeftArrow = "\u21C4";
const rightarrowtail = "\u21A3";
const RightCeiling = "\u2309";
const RightDoubleBracket = "\u27E7";
const RightDownTeeVector = "\u295D";
const RightDownVectorBar = "\u2955";
const RightDownVector = "\u21C2";
const RightFloor = "\u230B";
const rightharpoondown = "\u21C1";
const rightharpoonup = "\u21C0";
const rightleftarrows = "\u21C4";
const rightleftharpoons = "\u21CC";
const rightrightarrows = "\u21C9";
const rightsquigarrow = "\u219D";
const RightTeeArrow = "\u21A6";
const RightTee = "\u22A2";
const RightTeeVector = "\u295B";
const rightthreetimes = "\u22CC";
const RightTriangleBar = "\u29D0";
const RightTriangle = "\u22B3";
const RightTriangleEqual = "\u22B5";
const RightUpDownVector = "\u294F";
const RightUpTeeVector = "\u295C";
const RightUpVectorBar = "\u2954";
const RightUpVector = "\u21BE";
const RightVectorBar = "\u2953";
const RightVector = "\u21C0";
const ring = "\u02DA";
const risingdotseq = "\u2253";
const rlarr = "\u21C4";
const rlhar = "\u21CC";
const rlm = "\u200F";
const rmoustache = "\u23B1";
const rmoust = "\u23B1";
const rnmid = "\u2AEE";
const roang = "\u27ED";
const roarr = "\u21FE";
const robrk = "\u27E7";
const ropar = "\u2986";
const ropf = "\u{1D563}";
const Ropf = "\u211D";
const roplus = "\u2A2E";
const rotimes = "\u2A35";
const RoundImplies = "\u2970";
const rpar = ")";
const rpargt = "\u2994";
const rppolint = "\u2A12";
const rrarr = "\u21C9";
const Rrightarrow = "\u21DB";
const rsaquo = "\u203A";
const rscr = "\u{1D4C7}";
const Rscr = "\u211B";
const rsh = "\u21B1";
const Rsh = "\u21B1";
const rsqb = "]";
const rsquo = "\u2019";
const rsquor = "\u2019";
const rthree = "\u22CC";
const rtimes = "\u22CA";
const rtri = "\u25B9";
const rtrie = "\u22B5";
const rtrif = "\u25B8";
const rtriltri = "\u29CE";
const RuleDelayed = "\u29F4";
const ruluhar = "\u2968";
const rx = "\u211E";
const Sacute = "\u015A";
const sacute = "\u015B";
const sbquo = "\u201A";
const scap = "\u2AB8";
const Scaron = "\u0160";
const scaron = "\u0161";
const Sc = "\u2ABC";
const sc = "\u227B";
const sccue = "\u227D";
const sce = "\u2AB0";
const scE = "\u2AB4";
const Scedil = "\u015E";
const scedil = "\u015F";
const Scirc = "\u015C";
const scirc = "\u015D";
const scnap = "\u2ABA";
const scnE = "\u2AB6";
const scnsim = "\u22E9";
const scpolint = "\u2A13";
const scsim = "\u227F";
const Scy = "\u0421";
const scy = "\u0441";
const sdotb = "\u22A1";
const sdot = "\u22C5";
const sdote = "\u2A66";
const searhk = "\u2925";
const searr = "\u2198";
const seArr = "\u21D8";
const searrow = "\u2198";
const sect$1 = "\xA7";
const semi = ";";
const seswar = "\u2929";
const setminus = "\u2216";
const setmn = "\u2216";
const sext = "\u2736";
const Sfr = "\u{1D516}";
const sfr = "\u{1D530}";
const sfrown = "\u2322";
const sharp = "\u266F";
const SHCHcy = "\u0429";
const shchcy = "\u0449";
const SHcy = "\u0428";
const shcy = "\u0448";
const ShortDownArrow = "\u2193";
const ShortLeftArrow = "\u2190";
const shortmid = "\u2223";
const shortparallel = "\u2225";
const ShortRightArrow = "\u2192";
const ShortUpArrow = "\u2191";
const shy$1 = "\xAD";
const Sigma = "\u03A3";
const sigma = "\u03C3";
const sigmaf = "\u03C2";
const sigmav = "\u03C2";
const sim = "\u223C";
const simdot = "\u2A6A";
const sime = "\u2243";
const simeq = "\u2243";
const simg = "\u2A9E";
const simgE = "\u2AA0";
const siml = "\u2A9D";
const simlE = "\u2A9F";
const simne = "\u2246";
const simplus = "\u2A24";
const simrarr = "\u2972";
const slarr = "\u2190";
const SmallCircle = "\u2218";
const smallsetminus = "\u2216";
const smashp = "\u2A33";
const smeparsl = "\u29E4";
const smid = "\u2223";
const smile = "\u2323";
const smt = "\u2AAA";
const smte = "\u2AAC";
const smtes = "\u2AAC\uFE00";
const SOFTcy = "\u042C";
const softcy = "\u044C";
const solbar = "\u233F";
const solb = "\u29C4";
const sol = "/";
const Sopf = "\u{1D54A}";
const sopf = "\u{1D564}";
const spades = "\u2660";
const spadesuit = "\u2660";
const spar = "\u2225";
const sqcap = "\u2293";
const sqcaps = "\u2293\uFE00";
const sqcup = "\u2294";
const sqcups = "\u2294\uFE00";
const Sqrt = "\u221A";
const sqsub = "\u228F";
const sqsube = "\u2291";
const sqsubset = "\u228F";
const sqsubseteq = "\u2291";
const sqsup = "\u2290";
const sqsupe = "\u2292";
const sqsupset = "\u2290";
const sqsupseteq = "\u2292";
const square = "\u25A1";
const Square = "\u25A1";
const SquareIntersection = "\u2293";
const SquareSubset = "\u228F";
const SquareSubsetEqual = "\u2291";
const SquareSuperset = "\u2290";
const SquareSupersetEqual = "\u2292";
const SquareUnion = "\u2294";
const squarf = "\u25AA";
const squ = "\u25A1";
const squf = "\u25AA";
const srarr = "\u2192";
const Sscr = "\u{1D4AE}";
const sscr = "\u{1D4C8}";
const ssetmn = "\u2216";
const ssmile = "\u2323";
const sstarf = "\u22C6";
const Star = "\u22C6";
const star = "\u2606";
const starf = "\u2605";
const straightepsilon = "\u03F5";
const straightphi = "\u03D5";
const strns = "\xAF";
const sub = "\u2282";
const Sub = "\u22D0";
const subdot = "\u2ABD";
const subE = "\u2AC5";
const sube = "\u2286";
const subedot = "\u2AC3";
const submult = "\u2AC1";
const subnE = "\u2ACB";
const subne = "\u228A";
const subplus = "\u2ABF";
const subrarr = "\u2979";
const subset = "\u2282";
const Subset = "\u22D0";
const subseteq = "\u2286";
const subseteqq = "\u2AC5";
const SubsetEqual = "\u2286";
const subsetneq = "\u228A";
const subsetneqq = "\u2ACB";
const subsim = "\u2AC7";
const subsub = "\u2AD5";
const subsup = "\u2AD3";
const succapprox = "\u2AB8";
const succ = "\u227B";
const succcurlyeq = "\u227D";
const Succeeds = "\u227B";
const SucceedsEqual = "\u2AB0";
const SucceedsSlantEqual = "\u227D";
const SucceedsTilde = "\u227F";
const succeq = "\u2AB0";
const succnapprox = "\u2ABA";
const succneqq = "\u2AB6";
const succnsim = "\u22E9";
const succsim = "\u227F";
const SuchThat = "\u220B";
const sum = "\u2211";
const Sum = "\u2211";
const sung = "\u266A";
const sup1$1 = "\xB9";
const sup2$1 = "\xB2";
const sup3$1 = "\xB3";
const sup = "\u2283";
const Sup = "\u22D1";
const supdot = "\u2ABE";
const supdsub = "\u2AD8";
const supE = "\u2AC6";
const supe = "\u2287";
const supedot = "\u2AC4";
const Superset = "\u2283";
const SupersetEqual = "\u2287";
const suphsol = "\u27C9";
const suphsub = "\u2AD7";
const suplarr = "\u297B";
const supmult = "\u2AC2";
const supnE = "\u2ACC";
const supne = "\u228B";
const supplus = "\u2AC0";
const supset = "\u2283";
const Supset = "\u22D1";
const supseteq = "\u2287";
const supseteqq = "\u2AC6";
const supsetneq = "\u228B";
const supsetneqq = "\u2ACC";
const supsim = "\u2AC8";
const supsub = "\u2AD4";
const supsup = "\u2AD6";
const swarhk = "\u2926";
const swarr = "\u2199";
const swArr = "\u21D9";
const swarrow = "\u2199";
const swnwar = "\u292A";
const szlig$1 = "\xDF";
const Tab = "	";
const target = "\u2316";
const Tau = "\u03A4";
const tau = "\u03C4";
const tbrk = "\u23B4";
const Tcaron = "\u0164";
const tcaron = "\u0165";
const Tcedil = "\u0162";
const tcedil = "\u0163";
const Tcy = "\u0422";
const tcy = "\u0442";
const tdot = "\u20DB";
const telrec = "\u2315";
const Tfr = "\u{1D517}";
const tfr = "\u{1D531}";
const there4 = "\u2234";
const therefore = "\u2234";
const Therefore = "\u2234";
const Theta = "\u0398";
const theta = "\u03B8";
const thetasym = "\u03D1";
const thetav = "\u03D1";
const thickapprox = "\u2248";
const thicksim = "\u223C";
const ThickSpace = "\u205F\u200A";
const ThinSpace = "\u2009";
const thinsp = "\u2009";
const thkap = "\u2248";
const thksim = "\u223C";
const THORN$1 = "\xDE";
const thorn$1 = "\xFE";
const tilde = "\u02DC";
const Tilde = "\u223C";
const TildeEqual = "\u2243";
const TildeFullEqual = "\u2245";
const TildeTilde = "\u2248";
const timesbar = "\u2A31";
const timesb = "\u22A0";
const times$1 = "\xD7";
const timesd = "\u2A30";
const tint = "\u222D";
const toea = "\u2928";
const topbot = "\u2336";
const topcir = "\u2AF1";
const top = "\u22A4";
const Topf = "\u{1D54B}";
const topf = "\u{1D565}";
const topfork = "\u2ADA";
const tosa = "\u2929";
const tprime = "\u2034";
const trade = "\u2122";
const TRADE = "\u2122";
const triangle = "\u25B5";
const triangledown = "\u25BF";
const triangleleft = "\u25C3";
const trianglelefteq = "\u22B4";
const triangleq = "\u225C";
const triangleright = "\u25B9";
const trianglerighteq = "\u22B5";
const tridot = "\u25EC";
const trie = "\u225C";
const triminus = "\u2A3A";
const TripleDot = "\u20DB";
const triplus = "\u2A39";
const trisb = "\u29CD";
const tritime = "\u2A3B";
const trpezium = "\u23E2";
const Tscr = "\u{1D4AF}";
const tscr = "\u{1D4C9}";
const TScy = "\u0426";
const tscy = "\u0446";
const TSHcy = "\u040B";
const tshcy = "\u045B";
const Tstrok = "\u0166";
const tstrok = "\u0167";
const twixt = "\u226C";
const twoheadleftarrow = "\u219E";
const twoheadrightarrow = "\u21A0";
const Uacute$1 = "\xDA";
const uacute$1 = "\xFA";
const uarr = "\u2191";
const Uarr = "\u219F";
const uArr = "\u21D1";
const Uarrocir = "\u2949";
const Ubrcy = "\u040E";
const ubrcy = "\u045E";
const Ubreve = "\u016C";
const ubreve = "\u016D";
const Ucirc$1 = "\xDB";
const ucirc$1 = "\xFB";
const Ucy = "\u0423";
const ucy = "\u0443";
const udarr = "\u21C5";
const Udblac = "\u0170";
const udblac = "\u0171";
const udhar = "\u296E";
const ufisht = "\u297E";
const Ufr = "\u{1D518}";
const ufr = "\u{1D532}";
const Ugrave$1 = "\xD9";
const ugrave$1 = "\xF9";
const uHar = "\u2963";
const uharl = "\u21BF";
const uharr = "\u21BE";
const uhblk = "\u2580";
const ulcorn = "\u231C";
const ulcorner = "\u231C";
const ulcrop = "\u230F";
const ultri = "\u25F8";
const Umacr = "\u016A";
const umacr = "\u016B";
const uml$1 = "\xA8";
const UnderBar = "_";
const UnderBrace = "\u23DF";
const UnderBracket = "\u23B5";
const UnderParenthesis = "\u23DD";
const Union = "\u22C3";
const UnionPlus = "\u228E";
const Uogon = "\u0172";
const uogon = "\u0173";
const Uopf = "\u{1D54C}";
const uopf = "\u{1D566}";
const UpArrowBar = "\u2912";
const uparrow = "\u2191";
const UpArrow = "\u2191";
const Uparrow = "\u21D1";
const UpArrowDownArrow = "\u21C5";
const updownarrow = "\u2195";
const UpDownArrow = "\u2195";
const Updownarrow = "\u21D5";
const UpEquilibrium = "\u296E";
const upharpoonleft = "\u21BF";
const upharpoonright = "\u21BE";
const uplus = "\u228E";
const UpperLeftArrow = "\u2196";
const UpperRightArrow = "\u2197";
const upsi = "\u03C5";
const Upsi = "\u03D2";
const upsih = "\u03D2";
const Upsilon = "\u03A5";
const upsilon = "\u03C5";
const UpTeeArrow = "\u21A5";
const UpTee = "\u22A5";
const upuparrows = "\u21C8";
const urcorn = "\u231D";
const urcorner = "\u231D";
const urcrop = "\u230E";
const Uring = "\u016E";
const uring = "\u016F";
const urtri = "\u25F9";
const Uscr = "\u{1D4B0}";
const uscr = "\u{1D4CA}";
const utdot = "\u22F0";
const Utilde = "\u0168";
const utilde = "\u0169";
const utri = "\u25B5";
const utrif = "\u25B4";
const uuarr = "\u21C8";
const Uuml$1 = "\xDC";
const uuml$1 = "\xFC";
const uwangle = "\u29A7";
const vangrt = "\u299C";
const varepsilon = "\u03F5";
const varkappa = "\u03F0";
const varnothing = "\u2205";
const varphi = "\u03D5";
const varpi = "\u03D6";
const varpropto = "\u221D";
const varr = "\u2195";
const vArr = "\u21D5";
const varrho = "\u03F1";
const varsigma = "\u03C2";
const varsubsetneq = "\u228A\uFE00";
const varsubsetneqq = "\u2ACB\uFE00";
const varsupsetneq = "\u228B\uFE00";
const varsupsetneqq = "\u2ACC\uFE00";
const vartheta = "\u03D1";
const vartriangleleft = "\u22B2";
const vartriangleright = "\u22B3";
const vBar = "\u2AE8";
const Vbar = "\u2AEB";
const vBarv = "\u2AE9";
const Vcy = "\u0412";
const vcy = "\u0432";
const vdash = "\u22A2";
const vDash = "\u22A8";
const Vdash = "\u22A9";
const VDash = "\u22AB";
const Vdashl = "\u2AE6";
const veebar = "\u22BB";
const vee = "\u2228";
const Vee = "\u22C1";
const veeeq = "\u225A";
const vellip = "\u22EE";
const verbar = "|";
const Verbar = "\u2016";
const vert = "|";
const Vert = "\u2016";
const VerticalBar = "\u2223";
const VerticalLine = "|";
const VerticalSeparator = "\u2758";
const VerticalTilde = "\u2240";
const VeryThinSpace = "\u200A";
const Vfr = "\u{1D519}";
const vfr = "\u{1D533}";
const vltri = "\u22B2";
const vnsub = "\u2282\u20D2";
const vnsup = "\u2283\u20D2";
const Vopf = "\u{1D54D}";
const vopf = "\u{1D567}";
const vprop = "\u221D";
const vrtri = "\u22B3";
const Vscr = "\u{1D4B1}";
const vscr = "\u{1D4CB}";
const vsubnE = "\u2ACB\uFE00";
const vsubne = "\u228A\uFE00";
const vsupnE = "\u2ACC\uFE00";
const vsupne = "\u228B\uFE00";
const Vvdash = "\u22AA";
const vzigzag = "\u299A";
const Wcirc = "\u0174";
const wcirc = "\u0175";
const wedbar = "\u2A5F";
const wedge = "\u2227";
const Wedge = "\u22C0";
const wedgeq = "\u2259";
const weierp = "\u2118";
const Wfr = "\u{1D51A}";
const wfr = "\u{1D534}";
const Wopf = "\u{1D54E}";
const wopf = "\u{1D568}";
const wp = "\u2118";
const wr = "\u2240";
const wreath = "\u2240";
const Wscr = "\u{1D4B2}";
const wscr = "\u{1D4CC}";
const xcap = "\u22C2";
const xcirc = "\u25EF";
const xcup = "\u22C3";
const xdtri = "\u25BD";
const Xfr = "\u{1D51B}";
const xfr = "\u{1D535}";
const xharr = "\u27F7";
const xhArr = "\u27FA";
const Xi = "\u039E";
const xi = "\u03BE";
const xlarr = "\u27F5";
const xlArr = "\u27F8";
const xmap = "\u27FC";
const xnis = "\u22FB";
const xodot = "\u2A00";
const Xopf = "\u{1D54F}";
const xopf = "\u{1D569}";
const xoplus = "\u2A01";
const xotime = "\u2A02";
const xrarr = "\u27F6";
const xrArr = "\u27F9";
const Xscr = "\u{1D4B3}";
const xscr = "\u{1D4CD}";
const xsqcup = "\u2A06";
const xuplus = "\u2A04";
const xutri = "\u25B3";
const xvee = "\u22C1";
const xwedge = "\u22C0";
const Yacute$1 = "\xDD";
const yacute$1 = "\xFD";
const YAcy = "\u042F";
const yacy = "\u044F";
const Ycirc = "\u0176";
const ycirc = "\u0177";
const Ycy = "\u042B";
const ycy = "\u044B";
const yen$1 = "\xA5";
const Yfr = "\u{1D51C}";
const yfr = "\u{1D536}";
const YIcy = "\u0407";
const yicy = "\u0457";
const Yopf = "\u{1D550}";
const yopf = "\u{1D56A}";
const Yscr = "\u{1D4B4}";
const yscr = "\u{1D4CE}";
const YUcy = "\u042E";
const yucy = "\u044E";
const yuml$1 = "\xFF";
const Yuml = "\u0178";
const Zacute = "\u0179";
const zacute = "\u017A";
const Zcaron = "\u017D";
const zcaron = "\u017E";
const Zcy = "\u0417";
const zcy = "\u0437";
const Zdot = "\u017B";
const zdot = "\u017C";
const zeetrf = "\u2128";
const ZeroWidthSpace = "\u200B";
const Zeta = "\u0396";
const zeta = "\u03B6";
const zfr = "\u{1D537}";
const Zfr = "\u2128";
const ZHcy = "\u0416";
const zhcy = "\u0436";
const zigrarr = "\u21DD";
const zopf = "\u{1D56B}";
const Zopf = "\u2124";
const Zscr = "\u{1D4B5}";
const zscr = "\u{1D4CF}";
const zwj = "\u200D";
const zwnj = "\u200C";
const require$$0$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$1,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$1,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  "in": "\u2208",
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$1,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  "Map": "\u2905",
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$1,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range: range$1,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
var inverseXML = getInverseObj(require$$2), xmlReplacer = getInverseReplacer(inverseXML);
encode$1.XML = getInverse(inverseXML, xmlReplacer);
var inverseHTML = getInverseObj(require$$0$1), htmlReplacer = getInverseReplacer(inverseHTML);
encode$1.HTML = getInverse(inverseHTML, htmlReplacer);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce(function(inverse, name) {
    inverse[obj[name]] = "&" + name + ";";
    return inverse;
  }, {});
}
function getInverseReplacer(inverse) {
  var single = [], multiple = [];
  Object.keys(inverse).forEach(function(k) {
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  });
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var re_nonASCII = /[^\0-\x7F]/g, re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
function singleCharReplacer(c) {
  return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
}
function astralReplacer(c) {
  var high = c.charCodeAt(0);
  var low = c.charCodeAt(1);
  var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
  return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  function func(name) {
    return inverse[name];
  }
  return function(data) {
    return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
  };
}
var re_xmlChars = getInverseReplacer(inverseXML);
function escapeXML(data) {
  return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
}
encode$1.escape = escapeXML;
const Aacute = "\xC1";
const aacute = "\xE1";
const Acirc = "\xC2";
const acirc = "\xE2";
const acute = "\xB4";
const AElig = "\xC6";
const aelig = "\xE6";
const Agrave = "\xC0";
const agrave = "\xE0";
const amp = "&";
const AMP = "&";
const Aring = "\xC5";
const aring = "\xE5";
const Atilde = "\xC3";
const atilde = "\xE3";
const Auml = "\xC4";
const auml = "\xE4";
const brvbar = "\xA6";
const Ccedil = "\xC7";
const ccedil = "\xE7";
const cedil = "\xB8";
const cent = "\xA2";
const copy = "\xA9";
const COPY = "\xA9";
const curren = "\xA4";
const deg = "\xB0";
const divide = "\xF7";
const Eacute = "\xC9";
const eacute = "\xE9";
const Ecirc = "\xCA";
const ecirc = "\xEA";
const Egrave = "\xC8";
const egrave = "\xE8";
const ETH = "\xD0";
const eth = "\xF0";
const Euml = "\xCB";
const euml = "\xEB";
const frac12 = "\xBD";
const frac14 = "\xBC";
const frac34 = "\xBE";
const gt = ">";
const GT = ">";
const Iacute = "\xCD";
const iacute = "\xED";
const Icirc = "\xCE";
const icirc = "\xEE";
const iexcl = "\xA1";
const Igrave = "\xCC";
const igrave = "\xEC";
const iquest = "\xBF";
const Iuml = "\xCF";
const iuml = "\xEF";
const laquo = "\xAB";
const lt = "<";
const LT = "<";
const macr = "\xAF";
const micro = "\xB5";
const middot = "\xB7";
const nbsp = "\xA0";
const not = "\xAC";
const Ntilde = "\xD1";
const ntilde = "\xF1";
const Oacute = "\xD3";
const oacute = "\xF3";
const Ocirc = "\xD4";
const ocirc = "\xF4";
const Ograve = "\xD2";
const ograve = "\xF2";
const ordf = "\xAA";
const ordm = "\xBA";
const Oslash = "\xD8";
const oslash = "\xF8";
const Otilde = "\xD5";
const otilde = "\xF5";
const Ouml = "\xD6";
const ouml = "\xF6";
const para = "\xB6";
const plusmn = "\xB1";
const pound = "\xA3";
const quot = '"';
const QUOT = '"';
const raquo = "\xBB";
const reg = "\xAE";
const REG = "\xAE";
const sect = "\xA7";
const shy = "\xAD";
const sup1 = "\xB9";
const sup2 = "\xB2";
const sup3 = "\xB3";
const szlig = "\xDF";
const THORN = "\xDE";
const thorn = "\xFE";
const times = "\xD7";
const Uacute = "\xDA";
const uacute = "\xFA";
const Ucirc = "\xDB";
const ucirc = "\xFB";
const Ugrave = "\xD9";
const ugrave = "\xF9";
const uml = "\xA8";
const Uuml = "\xDC";
const uuml = "\xFC";
const Yacute = "\xDD";
const yacute = "\xFD";
const yen = "\xA5";
const yuml = "\xFF";
const require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const require$$0 = {
  "0": 65533,
  "128": 8364,
  "130": 8218,
  "131": 402,
  "132": 8222,
  "133": 8230,
  "134": 8224,
  "135": 8225,
  "136": 710,
  "137": 8240,
  "138": 352,
  "139": 8249,
  "140": 338,
  "142": 381,
  "145": 8216,
  "146": 8217,
  "147": 8220,
  "148": 8221,
  "149": 8226,
  "150": 8211,
  "151": 8212,
  "152": 732,
  "153": 8482,
  "154": 353,
  "155": 8250,
  "156": 339,
  "158": 382,
  "159": 376
};
var decodeMap = require$$0;
var decode_codepoint = decodeCodePoint$1;
function decodeCodePoint$1(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decodeMap) {
    codePoint = decodeMap[codePoint];
  }
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
}
var entityMap = require$$0$1, legacyMap = require$$1, xmlMap = require$$2, decodeCodePoint = decode_codepoint;
var decodeXMLStrict = getStrictDecoder(xmlMap), decodeHTMLStrict = getStrictDecoder(entityMap);
function getStrictDecoder(map2) {
  var keys = Object.keys(map2).join("|"), replace = getReplacer(map2);
  keys += "|#[xX][\\da-fA-F]+|#\\d+";
  var re = new RegExp("&(?:" + keys + ");", "g");
  return function(str) {
    return String(str).replace(re, replace);
  };
}
var decodeHTML = function() {
  var legacy = Object.keys(legacyMap).sort(sorter);
  var keys = Object.keys(entityMap).sort(sorter);
  for (var i = 0, j = 0; i < keys.length; i++) {
    if (legacy[j] === keys[i]) {
      keys[i] += ";?";
      j++;
    } else {
      keys[i] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), replace = getReplacer(entityMap);
  function replacer(str) {
    if (str.substr(-1) !== ";")
      str += ";";
    return replace(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
}();
function sorter(a, b) {
  return a < b ? 1 : -1;
}
function getReplacer(map2) {
  return function replace(str) {
    if (str.charAt(1) === "#") {
      if (str.charAt(2) === "X" || str.charAt(2) === "x") {
        return decodeCodePoint(parseInt(str.substr(3), 16));
      }
      return decodeCodePoint(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)];
  };
}
var decode$1 = {
  XML: decodeXMLStrict,
  HTML: decodeHTML,
  HTMLStrict: decodeHTMLStrict
};
var encode = encode$1, decode = decode$1;
entities$1.decode = function(data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
};
entities$1.decodeStrict = function(data, level) {
  return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
};
entities$1.encode = function(data, level) {
  return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
};
entities$1.encodeXML = encode.XML;
entities$1.encodeHTML4 = entities$1.encodeHTML5 = entities$1.encodeHTML = encode.HTML;
entities$1.decodeXML = entities$1.decodeXMLStrict = decode.XML;
entities$1.decodeHTML4 = entities$1.decodeHTML5 = entities$1.decodeHTML = decode.HTML;
entities$1.decodeHTML4Strict = entities$1.decodeHTML5Strict = entities$1.decodeHTMLStrict = decode.HTMLStrict;
entities$1.escape = encode.escape;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var entities = entities$1;
var defaults = {
  fg: "#FFF",
  bg: "#000",
  newline: false,
  escapeXML: false,
  stream: false,
  colors: getDefaultColors()
};
function getDefaultColors() {
  var colors = {
    0: "#000",
    1: "#A00",
    2: "#0A0",
    3: "#A50",
    4: "#00A",
    5: "#A0A",
    6: "#0AA",
    7: "#AAA",
    8: "#555",
    9: "#F55",
    10: "#5F5",
    11: "#FF5",
    12: "#55F",
    13: "#F5F",
    14: "#5FF",
    15: "#FFF"
  };
  range(0, 5).forEach(function(red) {
    range(0, 5).forEach(function(green) {
      range(0, 5).forEach(function(blue) {
        return setStyleColor(red, green, blue, colors);
      });
    });
  });
  range(0, 23).forEach(function(gray) {
    var c = gray + 232;
    var l = toHexString(gray * 10 + 8);
    colors[c] = "#" + l + l + l;
  });
  return colors;
}
function setStyleColor(red, green, blue, colors) {
  var c = 16 + red * 36 + green * 6 + blue;
  var r = red > 0 ? red * 40 + 55 : 0;
  var g = green > 0 ? green * 40 + 55 : 0;
  var b = blue > 0 ? blue * 40 + 55 : 0;
  colors[c] = toColorHexString([r, g, b]);
}
function toHexString(num2) {
  var str = num2.toString(16);
  while (str.length < 2) {
    str = "0" + str;
  }
  return str;
}
function toColorHexString(ref2) {
  var results = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = void 0;
  try {
    for (var _iterator = ref2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var r = _step.value;
      results.push(toHexString(r));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
  return "#" + results.join("");
}
function generateOutput(stack, token, data, options) {
  var result;
  if (token === "text") {
    result = pushText(data, options);
  } else if (token === "display") {
    result = handleDisplay(stack, data, options);
  } else if (token === "xterm256") {
    result = pushForegroundColor(stack, options.colors[data]);
  } else if (token === "rgb") {
    result = handleRgb(stack, data);
  }
  return result;
}
function handleRgb(stack, data) {
  data = data.substring(2).slice(0, -1);
  var operation = +data.substr(0, 2);
  var color = data.substring(5).split(";");
  var rgb = color.map(function(value) {
    return ("0" + Number(value).toString(16)).substr(-2);
  }).join("");
  return pushStyle(stack, (operation === 38 ? "color:#" : "background-color:#") + rgb);
}
function handleDisplay(stack, code, options) {
  code = parseInt(code, 10);
  var codeMap = {
    "-1": function _() {
      return "<br/>";
    },
    0: function _() {
      return stack.length && resetStyles(stack);
    },
    1: function _() {
      return pushTag(stack, "b");
    },
    3: function _() {
      return pushTag(stack, "i");
    },
    4: function _() {
      return pushTag(stack, "u");
    },
    8: function _() {
      return pushStyle(stack, "display:none");
    },
    9: function _() {
      return pushTag(stack, "strike");
    },
    22: function _() {
      return pushStyle(stack, "font-weight:normal;text-decoration:none;font-style:normal");
    },
    23: function _() {
      return closeTag(stack, "i");
    },
    24: function _() {
      return closeTag(stack, "u");
    },
    39: function _() {
      return pushForegroundColor(stack, options.fg);
    },
    49: function _() {
      return pushBackgroundColor(stack, options.bg);
    },
    53: function _() {
      return pushStyle(stack, "text-decoration:overline");
    }
  };
  var result;
  if (codeMap[code]) {
    result = codeMap[code]();
  } else if (4 < code && code < 7) {
    result = pushTag(stack, "blink");
  } else if (29 < code && code < 38) {
    result = pushForegroundColor(stack, options.colors[code - 30]);
  } else if (39 < code && code < 48) {
    result = pushBackgroundColor(stack, options.colors[code - 40]);
  } else if (89 < code && code < 98) {
    result = pushForegroundColor(stack, options.colors[8 + (code - 90)]);
  } else if (99 < code && code < 108) {
    result = pushBackgroundColor(stack, options.colors[8 + (code - 100)]);
  }
  return result;
}
function resetStyles(stack) {
  var stackClone = stack.slice(0);
  stack.length = 0;
  return stackClone.reverse().map(function(tag) {
    return "</" + tag + ">";
  }).join("");
}
function range(low, high) {
  var results = [];
  for (var j = low; j <= high; j++) {
    results.push(j);
  }
  return results;
}
function notCategory(category) {
  return function(e) {
    return (category === null || e.category !== category) && category !== "all";
  };
}
function categoryForCode(code) {
  code = parseInt(code, 10);
  var result = null;
  if (code === 0) {
    result = "all";
  } else if (code === 1) {
    result = "bold";
  } else if (2 < code && code < 5) {
    result = "underline";
  } else if (4 < code && code < 7) {
    result = "blink";
  } else if (code === 8) {
    result = "hide";
  } else if (code === 9) {
    result = "strike";
  } else if (29 < code && code < 38 || code === 39 || 89 < code && code < 98) {
    result = "foreground-color";
  } else if (39 < code && code < 48 || code === 49 || 99 < code && code < 108) {
    result = "background-color";
  }
  return result;
}
function pushText(text, options) {
  if (options.escapeXML) {
    return entities.encodeXML(text);
  }
  return text;
}
function pushTag(stack, tag, style) {
  if (!style) {
    style = "";
  }
  stack.push(tag);
  return ["<" + tag, style ? ' style="' + style + '"' : void 0, ">"].join("");
}
function pushStyle(stack, style) {
  return pushTag(stack, "span", style);
}
function pushForegroundColor(stack, color) {
  return pushTag(stack, "span", "color:" + color);
}
function pushBackgroundColor(stack, color) {
  return pushTag(stack, "span", "background-color:" + color);
}
function closeTag(stack, style) {
  var last;
  if (stack.slice(-1)[0] === style) {
    last = stack.pop();
  }
  if (last) {
    return "</" + style + ">";
  }
}
function tokenize(text, options, callback) {
  var ansiMatch = false;
  var ansiHandler = 3;
  function remove() {
    return "";
  }
  function removeXterm256(m, g1) {
    callback("xterm256", g1);
    return "";
  }
  function newline(m) {
    if (options.newline) {
      callback("display", -1);
    } else {
      callback("text", m);
    }
    return "";
  }
  function ansiMess(m, g1) {
    ansiMatch = true;
    if (g1.trim().length === 0) {
      g1 = "0";
    }
    g1 = g1.trimRight(";").split(";");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = void 0;
    try {
      for (var _iterator2 = g1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var g = _step2.value;
        callback("display", g);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
    return "";
  }
  function realText(m) {
    callback("text", m);
    return "";
  }
  function rgb(m) {
    callback("rgb", m);
    return "";
  }
  var tokens = [{
    pattern: /^\x08+/,
    sub: remove
  }, {
    pattern: /^\x1b\[[012]?K/,
    sub: remove
  }, {
    pattern: /^\x1b\[\(B/,
    sub: remove
  }, {
    pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
    sub: rgb
  }, {
    pattern: /^\x1b\[38;5;(\d+)m/,
    sub: removeXterm256
  }, {
    pattern: /^\n/,
    sub: newline
  }, {
    pattern: /^\r+\n/,
    sub: newline
  }, {
    pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
    sub: ansiMess
  }, {
    pattern: /^\x1b\[\d?J/,
    sub: remove
  }, {
    pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
    sub: remove
  }, {
    pattern: /^\x1b\[?[\d;]{0,3}/,
    sub: remove
  }, {
    pattern: /^(([^\x1b\x08\r\n])+)/,
    sub: realText
  }];
  function process(handler2, i2) {
    if (i2 > ansiHandler && ansiMatch) {
      return;
    }
    ansiMatch = false;
    text = text.replace(handler2.pattern, handler2.sub);
  }
  var results1 = [];
  var _text = text, length = _text.length;
  outer:
    while (length > 0) {
      for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
        var handler = tokens[i];
        process(handler, i);
        if (text.length !== length) {
          length = text.length;
          continue outer;
        }
      }
      if (text.length === length) {
        break;
      }
      results1.push(0);
      length = text.length;
    }
  return results1;
}
function updateStickyStack(stickyStack, token, data) {
  if (token !== "text") {
    stickyStack = stickyStack.filter(notCategory(categoryForCode(data)));
    stickyStack.push({
      token,
      data,
      category: categoryForCode(data)
    });
  }
  return stickyStack;
}
var Filter = /* @__PURE__ */ function() {
  function Filter2(options) {
    _classCallCheck(this, Filter2);
    options = options || {};
    if (options.colors) {
      options.colors = Object.assign({}, defaults.colors, options.colors);
    }
    this.options = Object.assign({}, defaults, options);
    this.stack = [];
    this.stickyStack = [];
  }
  _createClass(Filter2, [{
    key: "toHtml",
    value: function toHtml(input) {
      var _this = this;
      input = typeof input === "string" ? [input] : input;
      var stack = this.stack, options = this.options;
      var buf = [];
      this.stickyStack.forEach(function(element) {
        var output = generateOutput(stack, element.token, element.data, options);
        if (output) {
          buf.push(output);
        }
      });
      tokenize(input.join(""), options, function(token, data) {
        var output = generateOutput(stack, token, data, options);
        if (output) {
          buf.push(output);
        }
        if (options.stream) {
          _this.stickyStack = updateStickyStack(_this.stickyStack, token, data);
        }
      });
      if (stack.length) {
        buf.push(resetStyles(stack));
      }
      return buf.join("");
    }
  }]);
  return Filter2;
}();
var ansi_to_html = Filter;
const _hoisted_1$b = ["innerHTML"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    error: null
  },
  setup(__props) {
    const props = __props;
    const autStore = useAutStore();
    const convert = new ansi_to_html({
      fg: "#000",
      bg: "#fff",
      newline: false,
      escapeXML: true,
      stream: false
    });
    const scriptError = computed(() => convert.toHtml(props.error));
    const style = computed(() => `height: calc(100vh - ${autStore.specRunnerHeaderHeight + 32}px)`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("pre", {
        class: "bg-white text-sm p-24px text-red-500 overflow-auto whitespace-pre-wrap break-all",
        style: normalizeStyle(unref(style)),
        innerHTML: unref(scriptError)
      }, null, 12, _hoisted_1$b);
    };
  }
});
const __default__$1 = {
  name: "ResizablePanels"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    showPanel1: { type: Boolean, default: true },
    showPanel2: { type: Boolean, default: true },
    initialPanel1Width: { default: runnerConstants.defaultSpecListWidth },
    initialPanel2Width: { default: runnerConstants.defaultReporterWidth },
    minPanel1Width: { default: 200 },
    minPanel2Width: { default: 220 },
    minPanel3Width: { default: 100 },
    maxTotalWidth: { default: window.innerWidth },
    offsetLeft: { default: 0 }
  },
  emits: ["resizeEnd", "panelWidthUpdated"],
  setup(__props, { emit }) {
    const props = __props;
    const panel1HandleX = ref(props.initialPanel1Width);
    const panel2HandleX = ref(props.initialPanel2Width + props.initialPanel1Width);
    const panel1IsDragging = ref(false);
    const panel2IsDragging = ref(false);
    const cachedPanel1Width = ref(props.initialPanel1Width);
    const panel2Width = ref(props.initialPanel2Width);
    const handleMousedown = (panel, event) => {
      if (panel === "panel1") {
        panel1IsDragging.value = true;
      } else if (panel === "panel2") {
        panel2IsDragging.value = true;
        panel2HandleX.value = event.clientX;
      }
    };
    const handleMousemove = (event) => {
      if (!panel1IsDragging.value && !panel2IsDragging.value) {
        return;
      }
      if (panel1IsDragging.value && isNewWidthAllowed(event.clientX, "panel1")) {
        panel1HandleX.value = event.clientX;
        cachedPanel1Width.value = event.clientX - props.offsetLeft;
        emit("panelWidthUpdated", { panel: "panel1", width: panel1Width.value });
      } else if (panel2IsDragging.value && isNewWidthAllowed(event.clientX, "panel2")) {
        panel2HandleX.value = event.clientX;
        panel2Width.value = event.clientX - props.offsetLeft - panel1Width.value;
        emit("panelWidthUpdated", { panel: "panel2", width: panel2Width.value });
      }
    };
    const handleMouseup = () => {
      if (panel1IsDragging.value) {
        panel1IsDragging.value = false;
        handleResizeEnd("panel1");
        return;
      }
      handleResizeEnd("panel2");
      panel2IsDragging.value = false;
    };
    const maxPanel1Width = computed(() => {
      const unavailableWidth = panel2Width.value + props.minPanel3Width;
      return props.maxTotalWidth - unavailableWidth;
    });
    const panel1Width = computed(() => {
      if (!props.showPanel1) {
        return 0;
      }
      return cachedPanel1Width.value;
    });
    const maxPanel2Width = computed(() => {
      const unavailableWidth = panel1Width.value + props.minPanel3Width;
      return props.maxTotalWidth - unavailableWidth;
    });
    const panel3width = computed(() => {
      const panel3SpaceAvailable = props.maxTotalWidth - panel1Width.value - panel2Width.value;
      const minimumWithBuffer = props.minPanel3Width;
      return panel3SpaceAvailable < props.minPanel3Width ? minimumWithBuffer : panel3SpaceAvailable;
    });
    function handleResizeEnd(panel) {
      emit("resizeEnd", panel);
    }
    function isNewWidthAllowed(mouseClientX, panel) {
      const isMaxWidthSmall = props.maxTotalWidth < panel1Width.value + panel2Width.value + props.minPanel3Width;
      const fallbackWidth = 50;
      if (panel === "panel1") {
        const newWidth2 = mouseClientX - props.offsetLeft;
        if (isMaxWidthSmall && newWidth2 > fallbackWidth) {
          return true;
        }
        const result = panel1IsDragging.value && newWidth2 >= props.minPanel1Width && newWidth2 <= maxPanel1Width.value;
        return result;
      }
      const newWidth = mouseClientX - props.offsetLeft - panel1Width.value;
      if (isMaxWidthSmall && newWidth > fallbackWidth) {
        return true;
      }
      return panel2IsDragging.value && newWidth >= props.minPanel2Width && newWidth <= maxPanel2Width.value;
    }
    watchEffect(() => {
      if (!props.showPanel1) {
        emit("panelWidthUpdated", { panel: "panel1", width: 0 });
      } else if (props.showPanel1) {
        emit("panelWidthUpdated", { panel: "panel1", width: cachedPanel1Width.value });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "resizable-panels-root",
        class: normalizeClass(["flex", {
          "select-none": panel1IsDragging.value || panel2IsDragging.value
        }]),
        onMouseup: handleMouseup,
        onMousemove: handleMousemove
      }, [
        withDirectives(createBaseVNode("div", {
          "data-cy": "specs-list-panel",
          class: "h-full flex-shrink-0 z-20 relative",
          style: normalizeStyle({ width: `${unref(panel1Width)}px` })
        }, [
          renderSlot(_ctx.$slots, "panel1", { isDragging: panel1IsDragging.value }),
          createBaseVNode("div", {
            "data-cy": "panel1ResizeHandle",
            class: "cursor-ew-resize h-full top-0 -right-6px w-10px z-30 absolute",
            onMousedown: _cache[0] || (_cache[0] = ($event) => handleMousedown("panel1", $event))
          }, null, 32)
        ], 4), [
          [vShow, __props.showPanel1]
        ]),
        withDirectives(createBaseVNode("div", {
          "data-cy": "reporter-panel",
          class: "h-full flex-shrink-0 z-10 relative",
          style: normalizeStyle({ width: `${panel2Width.value}px` })
        }, [
          renderSlot(_ctx.$slots, "panel2"),
          createBaseVNode("div", {
            "data-cy": "panel2ResizeHandle",
            class: "cursor-ew-resize h-full top-0 -right-6px w-10px z-30 absolute",
            onMousedown: _cache[1] || (_cache[1] = ($event) => handleMousedown("panel2", $event))
          }, null, 32)
        ], 4), [
          [vShow, __props.showPanel2]
        ]),
        createBaseVNode("div", {
          "data-cy": "aut-panel",
          class: normalizeClass(["flex-grow h-full bg-gray-100 relative", { "pointer-events-none": panel2IsDragging.value }]),
          style: normalizeStyle({
            width: `${unref(panel3width)}px`
          })
        }, [
          renderSlot(_ctx.$slots, "panel3", { width: unref(panel3width) })
        ], 6)
      ], 34);
    };
  }
});
const __default__ = defineComponent({
  inheritAttrs: true
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const screenshotStore = useScreenshotStore();
    const classes = computed(() => {
      return {
        "hidden": screenshotStore.isScreenshotting || window.__CYPRESS_MODE__ === "run"
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(classes), "p-0 m-0"])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _hoisted_1$a = ["id"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const automationElementId = UnifiedRunnerAPI.getAutomationElementId();
    const runnerUiStore = useRunnerUiStore();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(automationElementId),
        style: { "display": "none" }
      }, toDisplayString(unref(runnerUiStore).randomString), 9, _hoisted_1$a);
    };
  }
});
const { collapsedNavBarWidth } = runnerConstants;
const autMargin = 16;
const reporterWidth = ref(0);
const specListWidth = ref(0);
const useRunnerStyle = () => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const runnerUIStore = useRunnerUiStore();
  const screenshotStore = useScreenshotStore();
  const autStore = useAutStore();
  const { reporterWidth: initialReporterWidth, specListWidth: initialSpecsListWidth } = runnerUIStore;
  reporterWidth.value = initialReporterWidth;
  specListWidth.value = initialSpecsListWidth;
  const containerWidth = computed(() => {
    const miscBorders = 4;
    const containerMinimum = 50;
    let nonAutWidth = autMargin * 2;
    if (window.__CYPRESS_MODE__ === "open") {
      nonAutWidth += collapsedNavBarWidth;
    }
    if (!window.__CYPRESS_CONFIG__.hideCommandLog) {
      nonAutWidth += reporterWidth.value + specListWidth.value + miscBorders;
    }
    const containerWidth2 = windowWidth.value - nonAutWidth;
    const newContainerWidth = containerWidth2 < containerMinimum ? containerMinimum : containerWidth2;
    return newContainerWidth;
  });
  const containerHeight = computed(() => {
    const nonAutHeight = autStore.specRunnerHeaderHeight + autMargin * 2;
    return windowHeight.value - nonAutHeight;
  });
  const scale = computed(() => {
    let scale2 = 1;
    if (!screenshotStore.isScreenshotting) {
      scale2 = Math.min(containerWidth.value / autStore.viewportDimensions.width, containerHeight.value / autStore.viewportDimensions.height, 1);
    }
    return scale2;
  });
  const viewportStyle = computed(() => {
    let style = `
    width: ${autStore.viewportDimensions.width}px;
    height: ${autStore.viewportDimensions.height}px;
    transform: scale(${scale.value});
    position: absolute;
    `;
    if (!screenshotStore.isScreenshotting) {
      style += `
      margin-left: ${containerWidth.value / 2 - autStore.viewportDimensions.width / 2}px`;
    }
    return style;
  });
  watchEffect(() => {
    autStore.setScale(scale.value);
  });
  return {
    viewportStyle,
    windowWidth: computed(() => {
      if (isRunMode) {
        return windowWidth.value;
      }
      return windowWidth.value - collapsedNavBarWidth;
    })
  };
};
function useResizablePanels() {
  const preferences = usePreferences();
  const handleResizeEnd = (panel) => {
    if (panel === "panel1") {
      preferences.update("specListWidth", specListWidth.value);
    } else {
      preferences.update("reporterWidth", reporterWidth.value);
    }
  };
  const handlePanelWidthUpdated = ({ panel, width }) => {
    if (panel === "panel1") {
      specListWidth.value = width;
    } else {
      reporterWidth.value = width;
    }
  };
  return {
    handlePanelWidthUpdated,
    handleResizeEnd
  };
}
function useEventManager() {
  const eventManager = getEventManager();
  const autStore = useAutStore();
  const specStore = useSpecStore();
  const studioStore = useStudioStore();
  function runSpec(isRerun = false) {
    if (!specStore.activeSpec) {
      throw Error(`Cannot run spec when specStore.active spec is null or undefined!`);
    }
    autStore.setScriptError(null);
    UnifiedRunnerAPI.executeSpec(specStore.activeSpec, isRerun);
  }
  function initializeRunnerLifecycleEvents() {
    eventManager.on("restart", () => {
      if (specStore.activeSpec) {
        const isRerun = true;
        runSpec(isRerun);
      }
    });
    eventManager.on("script:error", (err) => {
      autStore.setScriptError(err);
    });
    eventManager.on("visit:failed", (payload) => {
      getAutIframeModel().showVisitFailure(payload);
    });
    eventManager.on("page:loading", (isLoading) => {
      if (isLoading) {
        return;
      }
      getAutIframeModel().reattachStudio();
    });
    eventManager.on("visit:blank", ({ testIsolation }) => {
      getAutIframeModel().visitBlankPage(testIsolation);
    });
    eventManager.on("run:end", () => {
      if (studioStore.isLoading) {
        getAutIframeModel().startStudio();
      }
    });
    eventManager.on("expect:origin", addCrossOriginIframe);
  }
  const startSpecWatcher = () => {
    return watch(() => specStore.activeSpec, () => {
      if (specStore.activeSpec) {
        runSpec();
      }
    }, { immediate: true, flush: "post" });
  };
  function cleanupRunner() {
    empty$1(getRunnerElement());
    window.UnifiedRunner.shortcuts.stop();
    const reporterElement = getReporterElement();
    if (reporterElement) {
      empty$1(reporterElement);
    }
  }
  return {
    initializeRunnerLifecycleEvents,
    runSpec,
    startSpecWatcher,
    cleanupRunner
  };
}
const _hoisted_1$9 = /* @__PURE__ */ createBaseVNode("img", {
  class: "h-64px w-64px",
  src: _imports_0
}, null, -1);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { windowWidth } = useRunnerStyle();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "flex flex-col p-32px gap-16px items-center",
        style: normalizeStyle({ width: `${unref(windowWidth)}px` })
      }, [
        _hoisted_1$9,
        renderSlot(_ctx.$slots, "default")
      ], 4);
    };
  }
});
const _hoisted_1$8 = { class: "flex flex-col gap-16px" };
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n$1();
    gql`
mutation AutomationDisconnected_RelaunchBrowser {
  launchOpenProject {
    id
  }
}
`;
    const gqlRelaunch = useMutation(AutomationDisconnected_RelaunchBrowserDocument);
    const relaunch = () => gqlRelaunch.executeMutation({});
    return (_ctx, _cache) => {
      const _component_i_cy_book_x16 = __unplugin_components_0$8;
      return openBlock(), createBlock(_sfc_main$a, null, {
        default: withCtx(() => [
          createVNode(_sfc_main$F, {
            title: unref(t)("runner.automation.disconnected.title"),
            status: "warning",
            icon: unref(ErrorOutlineIcon),
            dismissible: false,
            class: "w-full max-w-600px"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$8, [
                createBaseVNode("p", null, toDisplayString(unref(t)("runner.automation.disconnected.description")), 1),
                createVNode(_sfc_main$B, {
                  size: "md",
                  "prefix-icon": unref(RefreshIcon),
                  "prefix-icon-class": "icon-dark-white",
                  onClick: relaunch
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("runner.automation.disconnected.reload")), 1)
                  ]),
                  _: 1
                }, 8, ["prefix-icon"]),
                createVNode(_sfc_main$E, {
                  class: "mt-16px text-indigo-500",
                  href: "https://on.cypress.io/launching-browsers"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_i_cy_book_x16, { class: "ml-8px -top-2px relative inline-block icon-dark-indigo-500 icon-light-indigo-100" }),
                    createTextVNode(" " + toDisplayString(unref(t)("runner.automation.shared.link")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["title", "icon"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$7 = { class: "flex flex-col gap-16px" };
const _hoisted_2$7 = ["src"];
const _hoisted_3$4 = { class: "max-h-50vh overflow-auto" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    gql: { default: null }
  },
  setup(__props) {
    var _a;
    const props = __props;
    const { t } = useI18n$1();
    gql`
fragment AutomationMissing on CurrentProject {
  id
  ...VerticalBrowserListItems
  activeBrowser {
    id
    displayName
    majorVersion
  }
}
`;
    const selectedBrowser = ref({ ...(_a = props.gql) == null ? void 0 : _a.activeBrowser });
    return (_ctx, _cache) => {
      const _component_i_cy_book_x16 = __unplugin_components_0$8;
      return openBlock(), createBlock(_sfc_main$a, null, {
        default: withCtx(() => [
          createVNode(_sfc_main$F, {
            title: unref(t)("runner.automation.missing.title"),
            status: "warning",
            icon: unref(ErrorOutlineIcon),
            dismissible: false,
            overflow: false,
            class: "w-full max-w-600px"
          }, {
            default: withCtx(() => {
              var _a2;
              return [
                createBaseVNode("div", _hoisted_1$7, [
                  createBaseVNode("p", null, toDisplayString(unref(t)("runner.automation.missing.description")), 1),
                  props.gql && ((_a2 = selectedBrowser.value) == null ? void 0 : _a2.displayName) ? (openBlock(), createBlock(_sfc_main$j, {
                    key: 0,
                    align: "left",
                    class: "max-w-max",
                    "data-cy": "select-browser"
                  }, {
                    heading: withCtx(() => [
                      createBaseVNode("img", {
                        class: "min-w-16px w-16px",
                        src: unref(allBrowsersIcons)[selectedBrowser.value.displayName] || unref(allBrowsersIcons).generic
                      }, null, 8, _hoisted_2$7),
                      createTextVNode(" " + toDisplayString(selectedBrowser.value.displayName) + " " + toDisplayString(selectedBrowser.value.majorVersion), 1)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3$4, [
                        createVNode(_sfc_main$C, {
                          gql: props.gql
                        }, null, 8, ["gql"])
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_sfc_main$E, {
                    class: "mt-16px text-indigo-500",
                    href: "https://on.cypress.io/launching-browsers"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_i_cy_book_x16, { class: "ml-8px -top-2px relative inline-block icon-dark-indigo-500 icon-light-indigo-100" }),
                      createTextVNode(" " + toDisplayString(unref(t)("runner.automation.shared.link")), 1)
                    ]),
                    _: 1
                  })
                ])
              ];
            }),
            _: 1
          }, 8, ["title", "icon"])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$6 = { class: "max-w-2xl py-7 px-15 text-gray-900" };
const _hoisted_2$6 = { class: "text-center" };
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("div", { class: "flex mt-3 justify-center" }, [
  /* @__PURE__ */ createBaseVNode("ul", null, [
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("pre", null, ".check()")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("pre", null, ".click()")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("pre", null, ".select()")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("pre", null, ".type()")
    ]),
    /* @__PURE__ */ createBaseVNode("li", null, [
      /* @__PURE__ */ createBaseVNode("pre", null, ".uncheck()")
    ])
  ])
], -1);
const _hoisted_4$3 = { class: "my-3 text-center" };
const _hoisted_5$2 = {
  class: "text-indigo-500",
  href: "https://on.cypress.io/studio-beta",
  target: "_blank"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  props: {
    open: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$G, {
        "model-value": props.open,
        "help-link": "https://on.cypress.io/guides/references/cypress-studio",
        "help-text": unref(t)("links.learnMoreButton"),
        variant: "bare",
        "data-cy": "studio-instructions-modal",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("close"))
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("runner.studio.studio")) + " " + toDisplayString(unref(t)("versions.beta")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            createBaseVNode("div", _hoisted_2$6, toDisplayString(unref(t)("runner.studio.studioDetailedDescription")), 1),
            _hoisted_3$3,
            createBaseVNode("div", _hoisted_4$3, [
              createTextVNode(toDisplayString(unref(t)("runner.studio.experimentalMessage")) + " ", 1),
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: "runner.studio.feedbackPrompt"
              }, {
                default: withCtx(() => [
                  createBaseVNode("a", _hoisted_5$2, toDisplayString(unref(t)("runner.studio.feedbackLink")), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value", "help-text"]);
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
  d: "M12.9497 12.9497C10.2161 15.6834 5.78392 15.6834 3.05025 12.9497C0.316583 10.2161 0.316583 5.78392 3.05025 3.05025C5.78392 0.316583 10.2161 0.316583 12.9497 3.05025C15.6834 5.78392 15.6834 10.2161 12.9497 12.9497Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  class: "icon-dark"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 8L7.5 10L10 6",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$5,
  _hoisted_3$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$2);
}
const __unplugin_components_0 = { name: "cy-circle-check_x16", render };
const _hoisted_1$4 = { class: "max-w-sm w-sm py-5 px-5" };
const _hoisted_2$4 = { class: "w-full" };
const _hoisted_3$1 = { class: "ml-3" };
const _hoisted_4$1 = ["disabled"];
const _hoisted_5$1 = { class: "rounded-md flex bg-indigo-500 py-1.5 px-1 align-center hover:bg-indigo-400" };
const _hoisted_6$1 = { class: "ml-2 pt-1" };
const _hoisted_7 = { class: "font-medium mx-2 text-white" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    open: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n$1();
    const studioStore = useStudioStore();
    const testName = ref("");
    function submit(e) {
      e.preventDefault();
      studioStore.save(testName.value);
    }
    return (_ctx, _cache) => {
      const _component_i_cy_circle_check_x16 = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$G, {
        "model-value": props.open,
        "no-help": true,
        variant: "bare",
        "data-cy": "studio-save-modal",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emit("close"))
      }, {
        title: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("runner.studio.saveTest")), 1)
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$4, [
            createBaseVNode("form", {
              class: "flex items-center justify-evenly",
              onSubmit: submit
            }, [
              createBaseVNode("div", _hoisted_2$4, [
                createVNode(Input, {
                  id: "testName",
                  modelValue: testName.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => testName.value = $event),
                  class: "rounded-md",
                  placeholder: unref(t)("runner.studio.testName"),
                  type: "text",
                  required: true
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("button", {
                  class: "disabled:opacity-50 disabled:pointer-events-none",
                  type: "submit",
                  disabled: !testName.value
                }, [
                  createBaseVNode("div", _hoisted_5$1, [
                    createBaseVNode("div", _hoisted_6$1, [
                      createVNode(_component_i_cy_circle_check_x16, { class: "fill-gray-200 stroke-gray-1000" })
                    ]),
                    createBaseVNode("div", _hoisted_7, toDisplayString(unref(t)("runner.studio.saveTestButton")), 1)
                  ])
                ], 8, _hoisted_4$1)
              ])
            ], 32)
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
const SpecRunnerOpenMode_vue_vue_type_style_index_0_scoped_true_lang = "";
const block0$2 = {};
const _hoisted_1$3 = ["id"];
const _hoisted_2$3 = ["id"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    var _a;
    const props = __props;
    const {
      preferredMinimumPanelWidth,
      absoluteAutMinimum,
      absoluteSpecListMinimum,
      absoluteReporterMinimum,
      collapsedNavBarWidth: collapsedNavBarWidth2
    } = runnerConstants;
    gql`
fragment SpecRunner_Preferences on Query {
  localSettings {
    preferences {
      isSideNavigationOpen
      isSpecsListOpen
      autoScrollingEnabled
      reporterWidth
      specListWidth
    }
  }
}
`;
    gql`
fragment SpecRunner_Config on CurrentProject {
  id
  config
}
`;
    gql`
fragment SpecRunner on Query {
  ...Specs_InlineSpecList
  currentProject {
    id
    ...SpecRunner_Config
    ...SpecRunnerHeader
    ...AutomationMissing
  }
  ...ChooseExternalEditor
  ...SpecRunner_Preferences
}
`;
    gql`
mutation SpecRunnerOpenMode_OpenFileInIDE ($input: FileDetailsInput!) {
  openFileInIDE (input: $input)
}
`;
    const eventManager = getEventManager();
    const autStore = useAutStore();
    const screenshotStore = useScreenshotStore();
    const runnerUiStore = useRunnerUiStore();
    const preferences = usePreferences();
    const {
      handlePanelWidthUpdated,
      handleResizeEnd
    } = useResizablePanels();
    const {
      initializeRunnerLifecycleEvents,
      startSpecWatcher,
      cleanupRunner
    } = useEventManager();
    const studioStore = useStudioStore();
    const specsListWidthPreferences = computed(() => {
      var _a2;
      return (_a2 = props.gql.localSettings.preferences.specListWidth) != null ? _a2 : runnerUiStore.specListWidth;
    });
    const reporterWidthPreferences = computed(() => {
      var _a2;
      return (_a2 = props.gql.localSettings.preferences.reporterWidth) != null ? _a2 : runnerUiStore.reporterWidth;
    });
    const isSpecsListOpenPreferences = computed(() => {
      var _a2;
      return (_a2 = props.gql.localSettings.preferences.isSpecsListOpen) != null ? _a2 : false;
    });
    const hideCommandLog = runnerUiStore.hideCommandLog;
    startSpecWatcher();
    onMounted(() => {
      initializeRunnerLifecycleEvents();
    });
    preferences.update("autoScrollingEnabled", (_a = props.gql.localSettings.preferences.autoScrollingEnabled) != null ? _a : true);
    if (!hideCommandLog) {
      preferences.update("isSpecsListOpen", isSpecsListOpenPreferences.value);
      preferences.update("reporterWidth", reporterWidthPreferences.value);
      preferences.update("specListWidth", specsListWidthPreferences.value);
    }
    const {
      viewportStyle,
      windowWidth
    } = useRunnerStyle();
    function getMinimum(absoluteMinimum, doesContentFit) {
      return doesContentFit ? Math.min(absoluteMinimum, windowWidth.value / 6) : preferredMinimumPanelWidth;
    }
    const minWidths = computed(() => {
      let smallestIdealWindowSize = preferredMinimumPanelWidth * 2 + collapsedNavBarWidth2;
      let contentWidth = reporterWidthPreferences.value + collapsedNavBarWidth2 + preferredMinimumPanelWidth;
      if (isSpecsListOpenPreferences.value) {
        contentWidth += specsListWidthPreferences.value;
        smallestIdealWindowSize += preferredMinimumPanelWidth;
      }
      const isWindowTooSmall = windowWidth.value < smallestIdealWindowSize;
      const doesContentFit = contentWidth > windowWidth.value || isWindowTooSmall;
      return {
        aut: getMinimum(absoluteAutMinimum, doesContentFit),
        specsList: getMinimum(absoluteSpecListMinimum, doesContentFit),
        reporter: getMinimum(absoluteReporterMinimum, doesContentFit)
      };
    });
    let fileToOpen;
    const openFileInIDE = useMutation(SpecRunnerOpenMode_OpenFileInIdeDocument);
    function openFile() {
      runnerUiStore.setShowChooseExternalEditorModal(false);
      if (!fileToOpen) {
        return;
      }
      openFileInIDE.executeMutation({
        input: {
          filePath: fileToOpen.absoluteFile,
          line: fileToOpen.line,
          column: fileToOpen.column
        }
      });
    }
    onMounted(() => {
      const eventManager2 = getEventManager();
      eventManager2.on("open:file", (file) => {
        fileToOpen = file;
        if (props.gql.localSettings.preferences.preferredEditorBinary) {
          openFile();
        } else {
          runnerUiStore.setShowChooseExternalEditorModal(true);
        }
      });
      eventManager2.on("save:app:state", (state) => {
        preferences.update("isSpecsListOpen", state.isSpecsListOpen);
        preferences.update("autoScrollingEnabled", state.autoScrollingEnabled);
      });
    });
    onBeforeUnmount(() => {
      cleanupRunner();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$7, {
          open: unref(studioStore).instructionModalIsOpen,
          onClose: unref(studioStore).closeInstructionModal
        }, null, 8, ["open", "onClose"]),
        createVNode(_sfc_main$6, {
          open: unref(studioStore).saveModalIsOpen,
          onClose: unref(studioStore).closeSaveModal
        }, null, 8, ["open", "onClose"]),
        createVNode(_sfc_main$g, {
          id: "main-pane",
          class: "flex border-gray-900"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$b),
            unref(runnerUiStore).automationStatus === "DISCONNECTED" ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : unref(runnerUiStore).automationStatus === "MISSING" ? (openBlock(), createBlock(_sfc_main$8, {
              key: 1,
              gql: props.gql.currentProject
            }, null, 8, ["gql"])) : (openBlock(), createBlock(_sfc_main$d, {
              key: 2,
              style: normalizeStyle({ width: `calc(100vw - ${unref(screenshotStore).isScreenshotting ? 0 : unref(collapsedNavBarWidth2)}px)` }),
              "offset-left": unref(collapsedNavBarWidth2),
              "max-total-width": unref(windowWidth) - unref(collapsedNavBarWidth2),
              "initial-panel1-width": unref(specsListWidthPreferences),
              "initial-panel2-width": unref(reporterWidthPreferences),
              "min-panel1-width": unref(minWidths).specsList,
              "min-panel2-width": unref(minWidths).reporter,
              "min-panel3-width": unref(minWidths).aut,
              "show-panel1": unref(runnerUiStore).isSpecsListOpen && !unref(screenshotStore).isScreenshotting,
              "show-panel2": !unref(screenshotStore).isScreenshotting && !unref(hideCommandLog),
              onResizeEnd: unref(handleResizeEnd),
              onPanelWidthUpdated: unref(handlePanelWidthUpdated)
            }, {
              panel1: withCtx(({ isDragging }) => [
                props.gql.currentProject ? withDirectives((openBlock(), createBlock(_sfc_main$c, {
                  key: 0,
                  id: "inline-spec-list",
                  class: normalizeClass(["h-full bg-gray-1000 border-gray-900 border-r-1 force-dark", { "pointer-events-none": isDragging }])
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$r, {
                      id: "reporter-inline-specs-list",
                      gql: props.gql
                    }, null, 8, ["gql"]),
                    createVNode(_sfc_main$H, {
                      open: unref(runnerUiStore).showChooseExternalEditorModal,
                      gql: props.gql,
                      onClose: _cache[0] || (_cache[0] = ($event) => unref(runnerUiStore).setShowChooseExternalEditorModal(false)),
                      onSelected: openFile
                    }, null, 8, ["open", "gql"])
                  ]),
                  _: 2
                }, 1032, ["class"])), [
                  [vShow, unref(runnerUiStore).isSpecsListOpen]
                ]) : createCommentVNode("", true)
              ]),
              panel2: withCtx(() => [
                createVNode(_sfc_main$I, { class: "h-full" }, {
                  default: withCtx(() => [
                    _cache[1] || (setBlockTracking(-1), _cache[1] = !unref(hideCommandLog) ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      id: unref(REPORTER_ID),
                      class: "w-full force-dark"
                    }, null, 8, _hoisted_1$3)) : createCommentVNode("", true), setBlockTracking(1), _cache[1])
                  ]),
                  _: 1
                })
              ]),
              panel3: withCtx(() => [
                createVNode(_sfc_main$c, { class: "bg-white" }, {
                  default: withCtx(() => [
                    props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$i, {
                      key: 0,
                      gql: props.gql.currentProject,
                      "event-manager": unref(eventManager),
                      "get-aut-iframe": unref(getAutIframeModel)
                    }, null, 8, ["gql", "event-manager", "get-aut-iframe"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$h, { class: "h-0 p-16px" }, {
                  default: withCtx(() => [
                    unref(autStore).scriptError ? (openBlock(), createBlock(_sfc_main$e, {
                      key: 0,
                      error: unref(autStore).scriptError.error
                    }, null, 8, ["error"])) : createCommentVNode("", true),
                    withDirectives(createBaseVNode("div", {
                      id: unref(RUNNER_ID),
                      class: "origin-top viewport",
                      style: normalizeStyle(unref(viewportStyle))
                    }, null, 12, _hoisted_2$3), [
                      [vShow, !unref(autStore).scriptError]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$o, {
                  "event-manager": unref(eventManager),
                  "get-aut-iframe": unref(getAutIframeModel)
                }, null, 8, ["event-manager", "get-aut-iframe"]),
                createVNode(ScreenshotHelperPixels)
              ]),
              _: 1
            }, 8, ["style", "offset-left", "max-total-width", "initial-panel1-width", "initial-panel2-width", "min-panel1-width", "min-panel2-width", "min-panel3-width", "show-panel1", "show-panel2", "onResizeEnd", "onPanelWidthUpdated"]))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});
if (typeof block0$2 === "function")
  block0$2(_sfc_main$5);
const SpecRunnerOpenMode = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6a193584"]]);
const initialized = ref(false);
function useUnifiedRunner() {
  onMounted(async () => {
    await UnifiedRunnerAPI.initialize();
    initialized.value = true;
  });
  onBeforeUnmount(() => {
    UnifiedRunnerAPI.teardown();
    initialized.value = false;
  });
  return {
    initialized: readonly(initialized),
    watchSpecs: (specs) => {
      const specStore = useSpecStore();
      const route = useRoute();
      const selectorPlaygroundStore = useSelectorPlaygroundStore();
      watchEffect(() => {
        var _a;
        const queryFile = getPathForPlatform(route.query.file);
        if (!queryFile) {
          return;
        }
        if (queryFile === RUN_ALL_SPECS_KEY) {
          return specStore.setActiveSpec(RUN_ALL_SPECS);
        }
        const activeSpecInSpecsList = specs.value.find((x) => x.relative === queryFile);
        if (activeSpecInSpecsList && ((_a = specStore.activeSpec) == null ? void 0 : _a.relative) !== activeSpecInSpecsList.relative) {
          specStore.setActiveSpec(activeSpecInSpecsList);
        } else if (!activeSpecInSpecsList) {
          specStore.setActiveSpec(null);
        }
      });
      watch(() => getPathForPlatform(route.query.file), () => {
        if (selectorPlaygroundStore.show) {
          const autIframe = getAutIframeModel();
          autIframe.toggleSelectorPlayground(false);
          selectorPlaygroundStore.setEnabled(false);
          selectorPlaygroundStore.setShow(false);
        }
      }, { flush: "post" });
    }
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const specStore = useSpecStore();
    const router = useRouter();
    const route = useRoute();
    const specs = computed(() => {
      var _a, _b;
      return (_b = (_a = props.gql.currentProject) == null ? void 0 : _a.specs) != null ? _b : [];
    });
    const { initialized: initialized2, watchSpecs } = useUnifiedRunner();
    watchSpecs(specs);
    specStore.$subscribe((mutation, state) => {
      const queryFile = getPathForPlatform(route.query.file);
      const shouldRedirect = route.name === "SpecRunner" && queryFile && state.activeSpec === null;
      if (shouldRedirect) {
        router.push({
          name: "Specs",
          params: {
            unrunnable: queryFile
          }
        });
      }
    }, {
      immediate: true
    });
    return (_ctx, _cache) => {
      return unref(initialized2) && unref(specStore).activeSpec ? (openBlock(), createBlock(SpecRunnerOpenMode, {
        key: 0,
        gql: props.gql
      }, null, 8, ["gql"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$2 = { class: "flex flex-grow flex-wrap py-16px gap-12px justify-end" };
const _hoisted_2$2 = { class: "mx-12px max-w-100% grid text-gray-600 items-center truncate" };
const _hoisted_3 = {
  key: 1,
  class: "flex-grow"
};
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "whitespace-nowrap" };
const _hoisted_6 = {
  key: 0,
  class: "-mr-6px text-gray-500"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const displayScale = computed(() => {
      return autStore.scale < 1 ? `${Math.round(autStore.scale * 100)}%` : 0;
    });
    const autStore = useAutStore();
    const { autHeaderEl } = useAutHeader();
    const selectedBrowser = window.__CYPRESS_BROWSER__;
    const testingType = window.__CYPRESS_TESTING_TYPE__;
    return (_ctx, _cache) => {
      const _component_i_cy_ruler_x16 = __unplugin_components_0$2;
      return openBlock(), createElementBlock("div", {
        id: "spec-runner-header",
        ref_key: "autHeaderEl",
        ref: autHeaderEl,
        class: "min-h-64px px-16px text-14px"
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          unref(testingType) === "e2e" ? (openBlock(), createElementBlock("div", {
            key: 0,
            "data-cy": "aut-url",
            class: normalizeClass(["border rounded flex flex-grow border-1px border-gray-100 h-32px align-middle overflow-hidden", {
              "bg-gray-50": unref(autStore).isLoadingUrl
            }])
          }, [
            createBaseVNode("div", _hoisted_2$2, toDisplayString(unref(autStore).url), 1)
          ], 2)) : (openBlock(), createElementBlock("div", _hoisted_3)),
          createVNode(_sfc_main$j, {
            "data-cy": "select-browser",
            disabled: unref(autStore).isRunning
          }, {
            heading: withCtx(() => [
              unref(selectedBrowser).displayName ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "min-w-16px w-16px",
                src: unref(allBrowsersIcons)[unref(selectedBrowser).displayName] || unref(allBrowsersIcons).generic
              }, null, 8, _hoisted_4)) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(unref(selectedBrowser).displayName) + " " + toDisplayString(unref(selectedBrowser).majorVersion), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          createVNode(_sfc_main$j, {
            variant: "panel",
            "data-cy": "viewport"
          }, {
            heading: withCtx(() => [
              createVNode(_component_i_cy_ruler_x16, { class: "icon-dark-gray-500 icon-light-gray-400" }),
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(autStore).viewportWidth) + "x" + toDisplayString(unref(autStore).viewportHeight), 1),
              unref(displayScale) ? (openBlock(), createElementBlock("span", _hoisted_6, "(" + toDisplayString(unref(displayScale)) + ")", 1)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])
      ], 512);
    };
  }
});
const SpecRunnerRunMode_vue_vue_type_style_index_0_scoped_true_lang = "";
const block0$1 = {};
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = ["id"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const eventManager = getEventManager();
    const autStore = useAutStore();
    const screenshotStore = useScreenshotStore();
    const runnerUiStore = useRunnerUiStore();
    const {
      viewportStyle,
      windowWidth
    } = useRunnerStyle();
    const {
      handlePanelWidthUpdated,
      handleResizeEnd
    } = useResizablePanels();
    const {
      initializeRunnerLifecycleEvents,
      startSpecWatcher,
      cleanupRunner
    } = useEventManager();
    const hideCommandLog = runnerUiStore.hideCommandLog;
    startSpecWatcher();
    onMounted(() => {
      initializeRunnerLifecycleEvents();
    });
    onBeforeUnmount(() => {
      cleanupRunner();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$g, {
        id: "main-pane",
        class: "flex border-gray-900"
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$b),
          unref(runnerUiStore).automationStatus === "DISCONNECTED" ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : unref(runnerUiStore).automationStatus === "MISSING" ? (openBlock(), createBlock(_sfc_main$8, { key: 1 })) : (openBlock(), createBlock(_sfc_main$d, {
            key: 2,
            class: "w-full",
            "max-total-width": unref(windowWidth),
            "initial-panel1-width": 0,
            "initial-panel2-width": unref(runnerUiStore).reporterWidth,
            "show-panel1": false,
            "show-panel2": !unref(screenshotStore).isScreenshotting && !unref(hideCommandLog),
            onResizeEnd: unref(handleResizeEnd),
            onPanelWidthUpdated: unref(handlePanelWidthUpdated)
          }, {
            panel2: withCtx(() => [
              createVNode(_sfc_main$I, { class: "h-full" }, {
                default: withCtx(() => [
                  _cache[0] || (setBlockTracking(-1), _cache[0] = !unref(hideCommandLog) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    id: unref(REPORTER_ID),
                    class: "w-full force-dark"
                  }, null, 8, _hoisted_1$1)) : createCommentVNode("", true), setBlockTracking(1), _cache[0])
                ]),
                _: 1
              })
            ]),
            panel3: withCtx(() => [
              createVNode(_sfc_main$I, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3, {
                    "event-manager": unref(eventManager),
                    "get-aut-iframe": unref(getAutIframeModel),
                    class: "bg-white"
                  }, null, 8, ["event-manager", "get-aut-iframe"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$h, { class: "h-0 p-16px" }, {
                default: withCtx(() => [
                  unref(autStore).scriptError ? (openBlock(), createBlock(_sfc_main$e, {
                    key: 0,
                    error: unref(autStore).scriptError.error
                  }, null, 8, ["error"])) : createCommentVNode("", true),
                  withDirectives(createBaseVNode("div", {
                    id: unref(RUNNER_ID),
                    class: "origin-top viewport",
                    style: normalizeStyle(unref(viewportStyle))
                  }, null, 12, _hoisted_2$1), [
                    [vShow, !unref(autStore).scriptError]
                  ])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$o, {
                "event-manager": unref(eventManager),
                "get-aut-iframe": unref(getAutIframeModel)
              }, null, 8, ["event-manager", "get-aut-iframe"]),
              createVNode(ScreenshotHelperPixels)
            ]),
            _: 1
          }, 8, ["max-total-width", "initial-panel2-width", "show-panel2", "onResizeEnd", "onPanelWidthUpdated"]))
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0$1 === "function")
  block0$1(_sfc_main$2);
const SpecRunnerRunMode = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5874690f"]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    runModeSpecs: null
  },
  setup(__props) {
    const props = __props;
    const specStore = useSpecStore();
    const { initialized: initialized2, watchSpecs } = useUnifiedRunner();
    watchSpecs(ref(props.runModeSpecs));
    return (_ctx, _cache) => {
      return unref(specStore).activeSpec ? (openBlock(), createElementBlock("div", _hoisted_1, [
        unref(initialized2) ? (openBlock(), createBlock(SpecRunnerRunMode, { key: 0 })) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_2, " Error, no spec matched! "));
    };
  }
});
const Runner_vue_vue_type_style_index_0_lang = "";
const block0 = {};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    gql`
query SpecPageContainer {
  ...SpecRunner
}
`;
    gql`
subscription SpecPageContainer_specsChange {
  specsChange {
    id
    specs {
      id
      ...SpecNode_InlineSpecList
    }
  }
}
`;
    gql`
subscription Runner_ConfigChange {
  configChange {
    id
    serveConfig
  }
}
`;
    useSubscription({
      query: SpecPageContainer_SpecsChangeDocument,
      pause: isRunMode
    });
    const query = useQuery({
      query: SpecPageContainerDocument,
      pause: isRunMode
    });
    let initialLoad = true;
    const specStore = useSpecStore();
    const configChangeHandler = (_prev, next) => {
      var _a;
      if (!((_a = next.configChange) == null ? void 0 : _a.serveConfig)) {
        throw Error(`Did not get expected serveConfig from subscription`);
      }
      if (!initialLoad && specStore.activeSpec) {
        try {
          window.__CYPRESS_CONFIG__ = next.configChange.serveConfig;
          const eventManager = useEventManager();
          const isRerun = true;
          eventManager.runSpec(isRerun);
        } catch (e) {
        }
      }
      initialLoad = false;
    };
    useSubscription({ query: Runner_ConfigChangeDocument }, configChangeHandler);
    const specs = window.__RUN_MODE_SPECS__;
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("div", null, [
        unref(isRunMode) ? (openBlock(), createBlock(_sfc_main$1, {
          key: 0,
          "run-mode-specs": unref(specs)
        }, null, 8, ["run-mode-specs"])) : ((_b = (_a = unref(query).data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.specs) ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          gql: unref(query).data.value
        }, null, 8, ["gql"])) : createCommentVNode("", true)
      ]);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
