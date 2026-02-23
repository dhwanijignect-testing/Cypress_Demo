import { d as defineComponent, c1 as useSlots, o as openBlock, Y as createElementBlock, B as createBaseVNode, x as renderSlot, c as createBlock, P as resolveDynamicComponent, X as normalizeClass, t as toDisplayString, e as unref, i as createCommentVNode, A as useLoginConnectStore, u as useI18n, w as withCtx, f as createTextVNode, D as ConnectIcon, h as _sfc_main$2 } from "./index.ca5c273b.js";
import { U as UserIcon } from "./user-outline_x16.2d9d4987.js";
const _hoisted_1 = { class: "rounded flex text-left w-full py-14px items-center" };
const _hoisted_2 = { class: "flex h-40px px-24px items-center" };
const _hoisted_3 = { class: "flex-grow h-auto border-gray-100 border-l-1px px-16px" };
const _hoisted_4 = { class: "font-normal text-sm text-gray-700 select-none" };
const _hoisted_5 = {
  key: 0,
  class: "flex px-16px items-center"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    description: { default: void 0 },
    icon: { default: void 0 },
    gray: { type: Boolean, default: false },
    bigHeader: { type: Boolean, default: false }
  },
  setup(__props) {
    const slots = useSlots();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            (openBlock(), createBlock(resolveDynamicComponent(__props.icon), { class: "h-24px w-24px" }))
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("h2", {
            class: normalizeClass(["text-indigo-500 whitespace-nowrap", { "text-size-18px leading-24px": __props.bigHeader }])
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2),
          createBaseVNode("p", _hoisted_4, [
            renderSlot(_ctx.$slots, "description", {}, () => [
              createBaseVNode("span", null, toDisplayString(__props.description), 1)
            ])
          ])
        ]),
        unref(slots).right ? (openBlock(), createElementBlock("div", _hoisted_5, [
          renderSlot(_ctx.$slots, "right")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    class: null,
    utmMedium: null
  },
  setup(__props) {
    const props = __props;
    const { openLoginConnectModal, user } = useLoginConnectStore();
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        class: normalizeClass(props.class),
        "prefix-icon": unref(user).isLoggedIn ? unref(ConnectIcon) : unref(UserIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: props.utmMedium }))
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(user).isLoggedIn ? unref(t)("runs.connect.buttonProject") : unref(t)("runs.connect.buttonUser")), 1)
        ]),
        _: 1
      }, 8, ["class", "prefix-icon"]);
    };
  }
});
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
