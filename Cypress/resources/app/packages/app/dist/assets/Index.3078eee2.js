import { d as defineComponent, g as gql, u as useI18n, a as computed, b as useMutation, R as RequestAccessButton_RequestAccessDocument, e as unref, o as openBlock, c as createBlock, w as withCtx, f as createTextVNode, t as toDisplayString, h as _sfc_main$w, i as createCommentVNode, j as useQuery, T as TrackedBanner_ProjectStateDocument, k as TrackedBanner_SetProjectStateDocument, l as TrackedBanner_RecordBannerSeenDocument, m as ref, n as nanoid, p as watchEffect, q as watch, s as onMounted, v as lodash, x as renderSlot, y as mergeProps, z as _sfc_main$x, A as useLoginConnectStore, B as createBaseVNode, C as createVNode, D as ConnectIcon, E as BannerIds, F as CreateOrganizationBannerDocument, G as getUrlWithParams, O as OrganizationIcon, H as _sfc_main$y, U as UseCohorts_DetermineCohortDocument, I as useRoute, J as useSubscription, S as SpecsListBanners_CheckCloudOrgMembershipDocument, K as usePromptManager, L as reactive, r as resolveComponent, W as WarningIcon, M as _sfc_main$A, N as __unplugin_components_3, P as resolveDynamicComponent, Q as _sfc_main$C, V as __unplugin_components_0$3, X as normalizeClass, Y as createElementBlock, Z as withModifiers, _ as _export_sfc, $ as __unplugin_components_0$4, a0 as Input, a1 as __unplugin_components_1, a2 as __unplugin_components_2, a3 as Fragment, a4 as renderList, a5 as useElementHover, a6 as useTimeoutFn, a7 as TransitionQuickFade, a8 as useTimeout, a9 as __unplugin_components_1$2, aa as StandardModalFooter, ab as _sfc_main$H, ac as FlakySpecSummaryQueryDocument, ad as PurgeCloudSpecCacheDocument, ae as onBeforeMount, af as CloudData_RefetchDocument, ag as useDebounce, ah as RequestAccessComposable_RequestAccessDocument, ai as useI18n$1, aj as IconActionPlaySmall, ak as useOnline, al as useResizeObserver, am as toRef, an as isRef, ao as normalizeStyle, ap as withDirectives, aq as vShow, ar as SpecsList_GitInfoUpdatedDocument, as as SpecsPageContainer_BranchInfoDocument, at as SpecsPageContainer_SpecsChangeDocument, au as SpecsPageContainer_SpecListPollingDocument, av as SpecsPageContainerDocument } from "./index.ca5c273b.js";
import { S as SendIcon, _ as _sfc_main$B, a as _sfc_main$D } from "./ResultCounts.1681ff47.js";
import { _ as __unplugin_components_0$2, a as _sfc_main$z, b as __unplugin_components_1$1, c as _sfc_main$E, d as deriveIndexes, D as DocumentIconBlank, u as useCachedSpecs, e as useSpecFilter, m as makeFuzzyFoundSpec, f as fuzzySortSpecs, g as useCollapsibleTree, h as buildSpecTree, i as useVirtualList, j as useRunAllSpecsStore, k as _sfc_main$I, l as getFilteredGeneratorList, n as _sfc_main$J, o as _sfc_main$K } from "./CreateSpecModal.f98dc6c2.js";
import { U as UserIcon } from "./user-outline_x16.2d9d4987.js";
import { _ as _sfc_main$F, a as _sfc_main$G } from "./SpecPatterns.08056d57.js";
import { S as SettingsIcon } from "./settings_x16.dcd56fa2.js";
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RequestAccessButton on Query {
  currentProject {
    id
    projectId
    cloudProject {
      __typename
      ... on CloudProjectUnauthorized {
        message
        hasRequestedAccess
      }
      ... on CloudProject {
        id
      }
    }
  }
}
`;
    gql`
mutation RequestAccessButton_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
    const { t } = useI18n();
    const hasRequestedAccess = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql.currentProject) == null ? void 0 : _a.cloudProject) == null ? void 0 : _b.__typename) === "CloudProjectUnauthorized" && ((_d = (_c = props.gql.currentProject) == null ? void 0 : _c.cloudProject) == null ? void 0 : _d.hasRequestedAccess);
    });
    const projectConnectionStatus = computed(() => {
      if (hasRequestedAccess.value) {
        return "ACCESS_REQUESTED";
      }
      return "UNAUTHORIZED";
    });
    const requestAccessMutation = useMutation(RequestAccessButton_RequestAccessDocument);
    async function requestAccess() {
      var _a;
      const projectId = (_a = props.gql.currentProject) == null ? void 0 : _a.projectId;
      if (projectId) {
        await requestAccessMutation.executeMutation({ projectId });
      }
    }
    return (_ctx, _cache) => {
      return unref(projectConnectionStatus) === "UNAUTHORIZED" ? (openBlock(), createBlock(_sfc_main$w, {
        key: 0,
        "prefix-icon": unref(SendIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        "data-cy": "request-access-button",
        onClick: requestAccess
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("specPage.requestAccessButton")), 1)
        ]),
        _: 1
      }, 8, ["prefix-icon"])) : unref(projectConnectionStatus) === "ACCESS_REQUESTED" ? (openBlock(), createBlock(_sfc_main$w, {
        key: 1,
        "prefix-icon": unref(SendIcon),
        "prefix-icon-class": "icon-dark-white icon-light-transparent",
        "data-cy": "access-requested-button",
        class: "bg-gray-800 border-gray-800",
        disabled: ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("specPage.requestSentButton")), 1)
        ]),
        _: 1
      }, 8, ["prefix-icon"])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  props: {
    bannerId: null,
    hasBannerBeenShown: { type: Boolean },
    eventData: null
  },
  setup(__props) {
    const props = __props;
    gql`
query TrackedBanner_ProjectState {
  currentProject {
    id
    savedState
  }
}
`;
    gql`
mutation TrackedBanner_SetProjectState($value: String!) {
  setPreferences(type: project, value: $value) {
    ...TestingPreferences
    ...SpecRunner_Preferences
    currentProject {
      id
      savedState
    }
  }
}
`;
    gql`
mutation TrackedBanner_recordBannerSeen($campaign: String!, $messageId: String!, $medium: String!, $cohort: String) {
  recordEvent(campaign: $campaign, messageId: $messageId, medium: $medium, cohort: $cohort)
}
`;
    const stateQuery = useQuery({ query: TrackedBanner_ProjectStateDocument });
    const setStateMutation = useMutation(TrackedBanner_SetProjectStateDocument);
    const reportSeenMutation = useMutation(TrackedBanner_RecordBannerSeenDocument);
    const bannerInstanceId = ref(nanoid());
    const isAlertDisplayed = ref(true);
    watchEffect(() => {
      if (!props.hasBannerBeenShown && props.eventData) {
        recordBannerShown(props.eventData);
      }
    });
    watch(() => isAlertDisplayed.value, (newVal) => {
      if (!newVal) {
        updateBannerState("dismissed");
      }
    });
    onMounted(() => {
      updateBannerState("lastShown");
    });
    function updateBannerState(field) {
      var _a, _b, _c, _d;
      const savedBannerState = (_d = (_c = (_b = (_a = stateQuery.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.savedState) == null ? void 0 : _c.banners) != null ? _d : {};
      lodash.exports.set(savedBannerState, [props.bannerId, field], Date.now());
      setStateMutation.executeMutation({ value: JSON.stringify({ banners: savedBannerState }) });
    }
    function recordBannerShown({ campaign, medium, cohort }) {
      reportSeenMutation.executeMutation({
        campaign,
        messageId: bannerInstanceId.value,
        medium,
        cohort: cohort || null
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, mergeProps({
        modelValue: isAlertDisplayed.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isAlertDisplayed.value = $event)
      }, _ctx.$attrs), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["modelValue"]);
    };
  }
});
const _hoisted_1$F = { class: "mb-24px" };
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const { openLoginConnectModal } = useLoginConnectStore();
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_LOGIN;
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$u, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "login-banner",
        status: "info",
        title: unref(t)("specPage.banners.login.title"),
        class: "mb-16px",
        icon: unref(ConnectIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Log In",
          medium: "Specs Login Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$F, toDisplayString(__props.cohortOption.value), 1),
          createVNode(_sfc_main$w, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-24px",
            "data-cy": "login-button",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Login Banner" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.login.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$E = { class: "mb-24px" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const props = __props;
    gql`
query CreateOrganizationBanner {
  cloudViewer {
    id
    createCloudOrganizationUrl
  }
}
`;
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_CREATE_ORG;
    const query = useQuery({ query: CreateOrganizationBannerDocument });
    const createOrganizationUrl = computed(() => {
      var _a, _b, _c, _d;
      const baseUrl = (_c = (_b = (_a = query.data) == null ? void 0 : _a.value) == null ? void 0 : _b.cloudViewer) == null ? void 0 : _c.createCloudOrganizationUrl;
      if (!baseUrl) {
        return "";
      }
      return getUrlWithParams({
        url: baseUrl,
        params: {
          utm_medium: "Specs Create Organization Banner",
          utm_campaign: "Set up your organization",
          utm_content: (_d = props.cohortOption.value) == null ? void 0 : _d.cohort
        }
      });
    });
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$u, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "create-organization-banner",
        status: "info",
        title: __props.cohortOption.value,
        class: "mb-16px",
        icon: unref(OrganizationIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Set up your organization",
          medium: "Specs Create Organization Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$E, toDisplayString(unref(t)("specPage.banners.createOrganization.content")), 1),
          createVNode(_sfc_main$w, {
            href: unref(createOrganizationUrl),
            "include-graphql-port": true,
            "data-cy": "create-organization-button",
            "prefix-icon": unref(OrganizationIcon),
            "prefix-icon-class": "icon-dark-white icon-light-indigo-500"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.createOrganization.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["href", "prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$D = { class: "mb-24px" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  props: {
    hasBannerBeenShown: { type: Boolean },
    cohortOption: null
  },
  setup(__props) {
    const { openLoginConnectModal } = useLoginConnectStore();
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_CONNECT_PROJECT;
    return (_ctx, _cache) => {
      return __props.cohortOption ? (openBlock(), createBlock(_sfc_main$u, {
        key: 0,
        "banner-id": unref(bannerId),
        "data-cy": "connect-project-banner",
        status: "info",
        title: unref(t)("specPage.banners.connectProject.title"),
        class: "mb-16px",
        icon: unref(ConnectIcon),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Create project",
          medium: "Specs Create Project Banner",
          cohort: __props.cohortOption.cohort
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$D, toDisplayString(__props.cohortOption.value), 1),
          createVNode(_sfc_main$w, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-24px",
            "data-cy": "connect-project-button",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Create Project Banner" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.banners.connectProject.buttonLabel")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown", "event-data"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$C = { class: "mb-24px" };
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  props: {
    hasBannerBeenShown: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    const bannerId = BannerIds.ACI_082022_RECORD;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$u, {
        "banner-id": unref(bannerId),
        "data-cy": "record-banner",
        status: "info",
        title: unref(t)("specPage.banners.record.title"),
        class: "mb-16px",
        icon: unref(__unplugin_components_0$2),
        dismissible: "",
        "has-banner-been-shown": __props.hasBannerBeenShown,
        "event-data": {
          campaign: "Record Runs",
          medium: "Specs Record Runs Banner",
          cohort: "n/a"
        }
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$C, toDisplayString(unref(t)("specPage.banners.record.content")), 1),
          createVNode(_sfc_main$y)
        ]),
        _: 1
      }, 8, ["banner-id", "title", "icon", "has-banner-been-shown"]);
    };
  }
});
gql`
mutation UseCohorts_DetermineCohort ($name: String!, $cohorts: [String!]!) {
  determineCohort(cohortConfig: { name: $name, cohorts: $cohorts } ) {
    __typename
    name
    cohort
  }
}`;
const useCohorts = () => {
  const determineCohortMutation = useMutation(UseCohorts_DetermineCohortDocument);
  const determineCohort = async (name, cohorts) => {
    return await determineCohortMutation.executeMutation({
      name,
      cohorts
    });
  };
  const getCohort = (config) => {
    const cohortOptionSelected = ref();
    const cohortIds = config.options.map((option) => option.cohort);
    const fetchCohort = async () => {
      const cohortSelected = await determineCohort(config.name, cohortIds);
      cohortOptionSelected.value = config.options.find((option) => {
        var _a, _b;
        return option.cohort === ((_b = (_a = cohortSelected.data) == null ? void 0 : _a.determineCohort) == null ? void 0 : _b.cohort);
      });
    };
    fetchCohort();
    return cohortOptionSelected;
  };
  return {
    getCohort
  };
};
const _hoisted_1$B = { class: "mb-24px" };
const _hoisted_2$x = { class: "mb-24px" };
const _hoisted_3$r = /* @__PURE__ */ createTextVNode(" Status Page ");
const _hoisted_4$i = { class: "mb-24px" };
const _hoisted_5$9 = { class: "mb-24px" };
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    hasRequestedAccess: { type: Boolean },
    isSpecNotFound: { type: Boolean, default: void 0 },
    isOffline: { type: Boolean, default: void 0 },
    isFetchError: { type: Boolean, default: void 0 },
    isProjectNotFound: { type: Boolean, default: void 0 },
    isProjectUnauthorized: { type: Boolean, default: void 0 }
  },
  emits: ["refetchFailedCloudData"],
  setup(__props, { emit }) {
    const props = __props;
    const route = useRoute();
    const { t } = useI18n();
    const loginConnectStore = useLoginConnectStore();
    gql`
fragment SpecsListBanners on Query {
  ...RequestAccessButton
  cloudViewer {
    id
    firstOrganization: organizations(first: 1) {
      nodes {
        id
      }
    }
  }
  cachedUser {
    id
  }
  currentProject {
    id
    projectId
    savedState
  }
}
`;
    gql`
subscription SpecsListBanners_CheckCloudOrgMembership {
  cloudViewerChange {
    ...SpecsListBanners
  }
}
`;
    useSubscription({ query: SpecsListBanners_CheckCloudOrgMembershipDocument });
    const showSpecNotFound = ref(props.isSpecNotFound);
    const showOffline = ref(props.isOffline);
    const showFetchError = ref(props.isFetchError);
    const showProjectNotFound = ref(props.isProjectNotFound);
    const showProjectRequestAccess = ref(props.isProjectUnauthorized);
    const isBannerAllowed = ref(false);
    const bannerIds = {
      isLoggedOut: BannerIds.ACI_082022_LOGIN,
      needsOrgConnect: BannerIds.ACI_082022_CREATE_ORG,
      needsProjectConnect: BannerIds.ACI_082022_CONNECT_PROJECT,
      needsRecordedRun: BannerIds.ACI_082022_RECORD
    };
    watch(
      () => [props.isSpecNotFound, props.isOffline, props.isFetchError, props.isProjectNotFound, props.isProjectUnauthorized],
      () => {
        showSpecNotFound.value = props.isSpecNotFound;
        showOffline.value = props.isOffline;
        showFetchError.value = props.isFetchError;
        showProjectNotFound.value = props.isProjectNotFound;
        showProjectRequestAccess.value = props.isProjectUnauthorized;
      }
    );
    const cloudData = computed(() => [props.gql.cloudViewer, props.gql.cachedUser, props.gql.currentProject]);
    const bannerToShow = computed(() => {
      var _a;
      const componentsByStatus = {
        isLoggedOut: _sfc_main$t,
        needsOrgConnect: _sfc_main$s,
        needsProjectConnect: _sfc_main$r,
        needsRecordedRun: _sfc_main$q
      };
      return (_a = componentsByStatus[loginConnectStore.userStatus]) != null ? _a : null;
    });
    const hasCurrentBannerBeenShown = computed(() => {
      var _a, _b, _c;
      const bannersState = (_b = (_a = props.gql.currentProject) == null ? void 0 : _a.savedState) == null ? void 0 : _b.banners;
      return !!(bannersState == null ? void 0 : bannersState._disabled) || !!((_c = bannersState == null ? void 0 : bannersState[bannerIds[loginConnectStore.userStatus]]) == null ? void 0 : _c.lastShown);
    });
    const { isAllowedFeature } = usePromptManager();
    watch(
      cloudData,
      () => {
        isBannerAllowed.value = isAllowedFeature("specsListBanner");
      },
      { immediate: true }
    );
    const bannerCohortOptions = {
      [BannerIds.ACI_082022_LOGIN]: [
        { cohort: "A", value: t("specPage.banners.login.contentA") },
        { cohort: "B", value: t("specPage.banners.login.contentB") }
      ],
      [BannerIds.ACI_082022_CREATE_ORG]: [
        { cohort: "A", value: t("specPage.banners.createOrganization.titleA") },
        { cohort: "B", value: t("specPage.banners.createOrganization.titleB") }
      ],
      [BannerIds.ACI_082022_CONNECT_PROJECT]: [
        { cohort: "A", value: t("specPage.banners.connectProject.contentA") },
        { cohort: "B", value: t("specPage.banners.connectProject.contentB") }
      ]
    };
    const cohortBuilder = useCohorts();
    const getCohortForBanner = (bannerId) => {
      const cohortConfig = {
        name: bannerId,
        options: bannerCohortOptions[bannerId]
      };
      return cohortBuilder.getCohort(cohortConfig);
    };
    const currentCohortOption = computed(() => {
      if (!bannerCohortOptions[bannerIds[loginConnectStore.userStatus]]) {
        return { cohort: null };
      }
      return reactive({ cohort: getCohortForBanner(bannerIds[loginConnectStore.userStatus]) });
    });
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      return showSpecNotFound.value ? (openBlock(), createBlock(_sfc_main$x, {
        key: 0,
        modelValue: showSpecNotFound.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showSpecNotFound.value = $event),
        status: "error",
        title: unref(t)("specPage.noSpecError.title"),
        class: "mb-16px",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_1$B, [
            createTextVNode(toDisplayString(unref(t)("specPage.noSpecError.intro")) + " ", 1),
            createVNode(_sfc_main$z, { variant: "error" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(route).params.unrunnable), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("p", null, toDisplayString(unref(t)("specPage.noSpecError.explainer")), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showOffline.value ? (openBlock(), createBlock(_sfc_main$x, {
        key: 1,
        modelValue: showOffline.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => showOffline.value = $event),
        "data-cy": "offline-alert",
        status: "warning",
        title: unref(t)("specPage.offlineWarning.title"),
        class: "mb-16px",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_2$x, toDisplayString(unref(t)("specPage.offlineWarning.explainer")), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showFetchError.value ? (openBlock(), createBlock(_sfc_main$x, {
        key: 2,
        modelValue: showFetchError.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showFetchError.value = $event),
        status: "warning",
        title: unref(t)("specPage.fetchFailedWarning.title"),
        class: "mb-16px",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", null, toDisplayString(unref(t)("specPage.fetchFailedWarning.explainer1")), 1),
          createBaseVNode("p", null, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "specPage.fetchFailedWarning.explainer2"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$A, {
                  href: "https://www.cypressstatus.com",
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    _hoisted_3$r
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_sfc_main$w, {
            "prefix-icon": unref(__unplugin_components_3),
            class: "mt-24px",
            "data-cy": "refresh-button",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("refetchFailedCloudData"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.fetchFailedWarning.refreshButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showProjectNotFound.value ? (openBlock(), createBlock(_sfc_main$x, {
        key: 3,
        modelValue: showProjectNotFound.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showProjectNotFound.value = $event),
        "data-cy": "project-not-found-alert",
        status: "warning",
        title: unref(t)("runs.errors.notFound.title"),
        class: "mb-16px",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_4$i, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: "runs.errors.notFound.description"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$B, {
                  bg: "",
                  class: "bg-warning-100"
                }, {
                  default: withCtx(() => {
                    var _a;
                    return [
                      createTextVNode(' projectId: "' + toDisplayString((_a = props.gql.currentProject) == null ? void 0 : _a.projectId) + '" ', 1)
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode(_sfc_main$w, {
            "prefix-icon": unref(ConnectIcon),
            class: "mt-24px",
            "data-cy": "reconnect-button",
            onClick: _cache[4] || (_cache[4] = ($event) => unref(loginConnectStore).openLoginConnectModal({ utmMedium: "Tests Tab" }))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("runs.errors.notFound.button")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : showProjectRequestAccess.value ? (openBlock(), createBlock(_sfc_main$x, {
        key: 4,
        modelValue: showProjectRequestAccess.value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => showProjectRequestAccess.value = $event),
        "data-cy": "project-request-access-alert",
        status: "warning",
        title: unref(t)("specPage.unauthorizedBannerTitle"),
        class: "mb-16px",
        icon: unref(WarningIcon),
        dismissible: ""
      }, {
        default: withCtx(() => [
          createBaseVNode("p", _hoisted_5$9, toDisplayString(props.hasRequestedAccess ? unref(t)("runs.errors.unauthorizedRequested.description") : unref(t)("runs.errors.unauthorized.description")), 1),
          createVNode(_sfc_main$v, {
            gql: props.gql
          }, null, 8, ["gql"])
        ]),
        _: 1
      }, 8, ["modelValue", "title", "icon"])) : isBannerAllowed.value && unref(bannerToShow) ? (openBlock(), createBlock(resolveDynamicComponent(unref(bannerToShow)), {
        key: 5,
        "has-banner-been-shown": unref(hasCurrentBannerBeenShown),
        "cohort-option": unref(currentCohortOption).cohort
      }, null, 8, ["has-banner-been-shown", "cohort-option"])) : createCommentVNode("", true);
    };
  }
});
const _hoisted_1$A = {
  type: "button",
  class: "cursor-default flex font-medium items-center decoration-dotted underline underline-gray-300 underline-offset-4",
  "data-cy": "last-updated-header"
};
const _hoisted_2$w = { class: "flex flex-col text-sm text-center max-w-300px p-4 items-center" };
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  props: {
    isGitAvailable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const docsUrl = getUrlWithParams({
      url: "https://on.cypress.io/specs-last-updated",
      params: {
        utm_medium: "Specs Last Updated Tooltip",
        utm_campaign: "Last Updated"
      }
    });
    return (_ctx, _cache) => {
      const _component_i_cy_circle_bg_question_mark_x16 = __unplugin_components_0$3;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$C, {
        placement: "top",
        "is-interactive": true,
        "show-group": "last-updated-header",
        "show-delay": 250
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_2$w, [
            props.isGitAvailable ? (openBlock(), createBlock(_component_i18n_t, {
              key: 0,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoAvailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$A, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitStatus")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            })) : (openBlock(), createBlock(_component_i18n_t, {
              key: 1,
              scope: "global",
              keypath: "specPage.lastUpdated.tooltip.gitInfoUnavailable"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$A, {
                  href: unref(docsUrl),
                  class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.tooltip.gitInfo")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])
              ]),
              _: 1
            }))
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_1$A, [
            createTextVNode(toDisplayString(unref(t)("specPage.lastUpdated.header")) + " ", 1),
            createVNode(_component_i_cy_circle_bg_question_mark_x16, { class: "ml-1 icon-dark-indigo-500 icon-light-indigo-100" })
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$z = {
  type: "button",
  class: "cursor-default flex font-medium items-center decoration-dotted underline underline-gray-300 underline-offset-4"
};
const _hoisted_2$v = {
  class: "hidden lg:flex",
  "data-cy": "full-header-text"
};
const _hoisted_3$q = {
  class: "lg:hidden",
  "data-cy": "short-header-text"
};
const _hoisted_4$h = {
  class: "flex flex-col text-sm text-center p-4 items-center",
  "data-cy": "cloud-data-tooltip-content"
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    mode: null
  },
  emits: ["showLoginConnect"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { userStatusMatches, project } = useLoginConnectStore();
    const { t } = useI18n();
    const VALUES = {
      LATEST_RUNS: {
        header: "specPage.latestRuns.header",
        shortHeader: "specPage.latestRuns.headerShort",
        connected: "specPage.latestRuns.tooltip.connected",
        notConnected: "specPage.latestRuns.tooltip.notConnected",
        noAccess: "specPage.latestRuns.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-latest-runs",
          params: {
            utm_medium: "Specs Latest Runs Tooltip",
            utm_campaign: "Latest Runs"
          }
        }),
        docs: "specPage.latestRuns.tooltip.linkText"
      },
      AVG_DURATION: {
        header: "specPage.averageDuration.header",
        shortHeader: "specPage.averageDuration.headerShort",
        connected: "specPage.averageDuration.tooltip.connected",
        notConnected: "specPage.averageDuration.tooltip.notConnected",
        noAccess: "specPage.averageDuration.tooltip.noAccess",
        docsUrl: getUrlWithParams({
          url: "https://on.cypress.io/specs-average-duration",
          params: {
            utm_medium: "Specs Average Duration Tooltip",
            utm_campaign: "Average Duration"
          }
        }),
        docs: "specPage.averageDuration.tooltip.linkText"
      }
    };
    gql`
fragment SpecHeaderCloudDataTooltip on Query {
  currentProject {
    id
    cloudProject{
      __typename
      ... on CloudProjectUnauthorized {
        hasRequestedAccess
      }
    }
  }
  ...RequestAccessButton
}
`;
    const tooltipTextKey = computed(() => {
      if (project.isProjectConnected) {
        return VALUES[props.mode].connected;
      }
      if (project.isNotAuthorized) {
        return VALUES[props.mode].noAccess;
      }
      return VALUES[props.mode].notConnected;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_circle_bg_question_mark_x16 = __unplugin_components_0$3;
      const _component_i18n_t = resolveComponent("i18n-t");
      return openBlock(), createBlock(_sfc_main$C, {
        placement: "top",
        "is-interactive": true,
        "show-group": VALUES[__props.mode].header,
        "show-delay": 250
      }, {
        popper: withCtx(() => [
          createBaseVNode("div", _hoisted_4$h, [
            createBaseVNode("div", {
              class: normalizeClass([{ "my-2": !unref(project).isProjectConnected }, "max-w-300px"])
            }, [
              createVNode(_component_i18n_t, {
                scope: "global",
                keypath: unref(tooltipTextKey)
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$A, {
                    href: VALUES[__props.mode].docsUrl,
                    class: "font-medium text-indigo-500 contents group-hocus:text-indigo-600"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)(VALUES[__props.mode].docs)), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                _: 1
              }, 8, ["keypath"])
            ], 2),
            createBaseVNode("div", null, [
              unref(userStatusMatches)("isLoggedOut") ? (openBlock(), createBlock(_sfc_main$w, {
                key: 0,
                "prefix-icon": unref(UserIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "login-button",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.cloudLoginButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(userStatusMatches)("needsProjectConnect") ? (openBlock(), createBlock(_sfc_main$w, {
                key: 1,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "connect-button",
                onClick: _cache[1] || (_cache[1] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.connectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(project).isNotFound ? (openBlock(), createBlock(_sfc_main$w, {
                key: 2,
                "prefix-icon": unref(ConnectIcon),
                "prefix-icon-class": "icon-dark-white icon-light-transparent",
                "data-cy": "reconnect-button",
                onClick: _cache[2] || (_cache[2] = ($event) => emits("showLoginConnect"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("specPage.reconnectProjectButton")), 1)
                ]),
                _: 1
              }, 8, ["prefix-icon"])) : unref(project).isNotAuthorized ? (openBlock(), createBlock(_sfc_main$v, {
                key: 3,
                gql: props.gql
              }, null, 8, ["gql"])) : createCommentVNode("", true)
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_1$z, [
            createBaseVNode("span", _hoisted_2$v, toDisplayString(unref(t)(VALUES[__props.mode].header)), 1),
            createBaseVNode("span", _hoisted_3$q, toDisplayString(unref(t)(VALUES[__props.mode].shortHeader || VALUES[__props.mode].header)), 1),
            createVNode(_component_i_cy_circle_bg_question_mark_x16, { class: "ml-1 icon-dark-indigo-500 icon-light-indigo-100" })
          ])
        ]),
        _: 1
      }, 8, ["show-group"]);
    };
  }
});
const _hoisted_1$y = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$u = /* @__PURE__ */ createBaseVNode("path", {
  d: "M12.2854 8.42875L3.75725 13.5457C3.42399 13.7456 3 13.5056 3 13.1169V2.8831C3 2.49445 3.42399 2.25439 3.75725 2.45435L12.2854 7.57125C12.6091 7.76546 12.6091 8.23455 12.2854 8.42875Z",
  fill: "#D0D2E0",
  stroke: "#1B1E2E",
  class: "icon-dark-stroke icon-light-fill",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$p = [
  _hoisted_2$u
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$y, _hoisted_3$p);
}
const PlayIcon = { name: "cy-play-large_x16", render: render$f };
const _hoisted_1$x = { class: "hidden lg:inline" };
const _hoisted_2$t = { class: "lg:hidden" };
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    projectConnectionStatus: null
  },
  emits: ["showLoginConnect", "requestAccess"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment SpecCloudDataHoverButton on Query {
  currentProject {
    id
    cloudProject{
      __typename
      ... on CloudProjectUnauthorized {
        hasRequestedAccess
      }
    }
  }
  ...RequestAccessButton
}
`;
    const VALUES = {
      LOGGED_OUT: {
        text: t("specPage.hoverButton.connect"),
        textShort: t("specPage.hoverButton.connect"),
        icon: UserIcon,
        emits: "showLoginConnect"
      },
      NOT_CONNECTED: {
        text: t("specPage.hoverButton.connectProject"),
        textShort: t("specPage.hoverButton.connectProjectShort"),
        icon: ConnectIcon,
        emits: "showLoginConnect"
      },
      NOT_FOUND: {
        text: t("specPage.hoverButton.connectProject"),
        textShort: t("specPage.hoverButton.connectProjectShort"),
        icon: ConnectIcon,
        emits: "showLoginConnect"
      },
      UNAUTHORIZED: {
        text: t("specPage.hoverButton.requestAccess"),
        textShort: t("specPage.hoverButton.requestAccessShort"),
        icon: PlayIcon,
        emits: "requestAccess"
      },
      ACCESS_REQUESTED: {
        text: t("specPage.hoverButton.requestSent"),
        textShort: t("specPage.hoverButton.requestSentShort"),
        icon: PlayIcon,
        emits: void 0
      }
    };
    const buttonOptions = computed(() => {
      const options = {
        text: VALUES[props.projectConnectionStatus].text,
        textShort: VALUES[props.projectConnectionStatus].textShort,
        icon: VALUES[props.projectConnectionStatus].icon,
        emits: VALUES[props.projectConnectionStatus].emits
      };
      return options;
    });
    const handleClick = () => {
      switch (props.projectConnectionStatus) {
        case "LOGGED_OUT":
        case "NOT_CONNECTED":
        case "NOT_FOUND":
          emits("showLoginConnect");
          break;
        case "UNAUTHORIZED":
          emits("requestAccess");
          break;
        default:
          return;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$w, {
        "data-cy": "cloud-button",
        variant: "linkBold",
        "prefix-icon": unref(buttonOptions).icon,
        disabled: !unref(buttonOptions).emits,
        "prefix-icon-class": "icon-light-indigo-100 icon-dark-indigo-500",
        onClick: withModifiers(handleClick, ["stop", "prevent"])
      }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_1$x, toDisplayString(unref(buttonOptions).text), 1),
          createBaseVNode("span", _hoisted_2$t, toDisplayString(unref(buttonOptions).textShort), 1)
        ]),
        _: 1
      }, 8, ["prefix-icon", "disabled", "onClick"]);
    };
  }
});
const SpecsListHeader_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$w = { class: "flex w-full gap-16px relative" };
const _hoisted_2$s = ["aria-label"];
const _hoisted_3$o = { class: "bg-white border-transparent rounded-r flex h-full border-t-1 border-b-1 border-r-1 mr-1px px-16px transition-all items-center matches-button group-hocus:bg-indigo-50 group-hocus:text-indigo-500" };
const _hoisted_4$g = { key: 0 };
const _hoisted_5$8 = { key: 1 };
const _hoisted_6$6 = { class: "sr-only" };
const _hoisted_7$5 = { class: "flex h-40px min-w-127px gap-16px" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: null,
    resultCount: { default: 0 },
    specCount: { default: 0 },
    specsListInputRefFn: { type: Function, default: void 0 }
  },
  emits: ["update:modelValue", "showSpecPatternModal", "showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    const onInput = (e) => {
      const value = e.target.value;
      emit("update:modelValue", value);
    };
    const clearInput = (e) => {
      emit("update:modelValue", "");
    };
    return (_ctx, _cache) => {
      const _component_i_cy_delete_x16 = __unplugin_components_2;
      return openBlock(), createElementBlock("div", _hoisted_1$w, [
        createVNode(Input, {
          id: "spec-filter",
          "input-ref": props.specsListInputRefFn,
          type: "search",
          class: "flex-grow h-full min-w-200px",
          "prefix-icon-classes": "icon-light-gray-50 icon-dark-gray-500",
          "prefix-icon": unref(__unplugin_components_0$4),
          "model-value": props.modelValue,
          placeholder: unref(t)("specPage.searchPlaceholder"),
          "aria-label": unref(t)("specPage.searchPlaceholder"),
          onInput
        }, {
          suffix: withCtx(() => [
            props.modelValue ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              "data-cy": "clear-search-button",
              class: "border-transparent rounded-md flex outline-none h-24px mr-16px w-24px duration-300 items-center justify-center group hocus-default hocus:ring-0 hocus:bg-indigo-50",
              "aria-label": unref(t)("specPage.clearSearch"),
              onClick: clearInput
            }, [
              createVNode(_component_i_cy_delete_x16, { class: "icon-light-gray-50 icon-dark-gray-500 group-hocus:icon-dark-indigo-500" })
            ], 8, _hoisted_2$s)) : createCommentVNode("", true),
            createBaseVNode("button", {
              class: "rounded-r-md outline-none h-38px mr-[-0.75rem] group relative",
              "aria-live": "polite",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("showSpecPatternModal"))
            }, [
              createBaseVNode("span", _hoisted_3$o, [
                props.modelValue ? (openBlock(), createElementBlock("span", _hoisted_4$g, toDisplayString(unref(t)("components.fileSearch.matchesIndicator", { count: __props.specCount, denominator: __props.specCount, numerator: __props.resultCount })), 1)) : (openBlock(), createElementBlock("span", _hoisted_5$8, toDisplayString(unref(t)("components.fileSearch.matchesIndicatorEmptyFileSearch", { count: __props.specCount, denominator: __props.specCount })), 1)),
                createBaseVNode("span", _hoisted_6$6, toDisplayString(unref(t)(`createSpec.viewSpecPatternButton`)), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["input-ref", "prefix-icon", "model-value", "placeholder", "aria-label"]),
        createBaseVNode("div", _hoisted_7$5, [
          createVNode(_sfc_main$w, {
            "data-cy": "new-spec-button",
            "prefix-icon": unref(__unplugin_components_1),
            "prefix-icon-class": "justify-center text-lg text-center icon-light-transparent icon-dark-white",
            class: "min-w-134px",
            size: "lg",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("showCreateSpecModal"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("specPage.newSpecButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ])
      ]);
    };
  }
});
const SpecsListHeader = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-ef435f12"]]);
const _hoisted_1$v = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$r = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1H13C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$n = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 8H10M8 10V6M13 1H3C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$f = [
  _hoisted_2$r,
  _hoisted_3$n
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _hoisted_4$f);
}
const DocumentIconPlus = { name: "cy-document-plus_x16", render: render$e };
const _hoisted_1$u = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$q = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3 15C2.44772 15 2 14.5523 2 14V2C2 1.44772 2.44772 1 3 1L13 1C13.5523 1 14 1.44772 14 2V14C14 14.5523 13.5523 15 13 15H3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$m = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6 6.5H10M8 8.5V4.5M6 11.5H10M13 1L3 1C2.44772 1 2 1.44772 2 2V14C2 14.5523 2.44772 15 3 15H13C13.5523 15 14 14.5523 14 14V2C14 1.44772 13.5523 1 13 1Z",
  stroke: "#1B1E2E",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "icon-dark"
}, null, -1);
const _hoisted_4$e = [
  _hoisted_2$q,
  _hoisted_3$m
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _hoisted_4$e);
}
const DocumentIconPlusMinus = { name: "cy-document-plus-minus_x16", render: render$d };
const _hoisted_1$t = {
  height: "1em",
  width: "1em",
  style: { "min-width": "14px", "min-height": "14px" },
  viewBox: "0 0 14 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4C4 2.34315 5.34315 1 7 1C8.65685 1 10 2.34315 10 4Z",
  fill: "#E1E3ED"
}, null, -1);
const _hoisted_3$l = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 4C10 5.65685 8.65685 7 7 7C5.34315 7 4 5.65685 4 4M10 4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4M10 4H13M4 4H1",
  stroke: "#9095AD",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$d = [
  _hoisted_2$p,
  _hoisted_3$l
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$t, _hoisted_4$d);
}
const CommitIcon = { name: "cy-commit_x14", render: render$c };
const _hoisted_1$s = {
  class: "h-full grid grid-col-1 git-info-row justify-start items-center",
  "data-cy": "git-info-row"
};
const _hoisted_2$o = { class: "flex h-full w-full gap-9px justify-start items-center" };
const _hoisted_3$k = { class: "text-gray-700 overflow-hidden truncate" };
const _hoisted_4$c = { "data-cy": "git-info-tooltip" };
const _hoisted_5$7 = { class: "max-w-sm text-sm truncate overflow-hidden" };
const _hoisted_6$5 = {
  key: 0,
  class: "text-xs"
};
const _hoisted_7$4 = {
  key: 1,
  class: "text-gray-700 overflow-hidden truncate"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment SpecListRow on GitInfo {
  lastModifiedTimestamp
  lastModifiedHumanReadable
  author
  statusType
  shortHash
  subject
}
`;
    const classes = computed(() => {
      var _a;
      return {
        created: {
          icon: DocumentIconPlus,
          iconClasses: "icon-dark-jade-400 icon-light-jade-50",
          testId: "created-icon"
        },
        modified: {
          icon: DocumentIconPlusMinus,
          iconClasses: "icon-dark-orange-400 icon-light-orange-50",
          testId: "modified-icon"
        },
        unmodified: {
          icon: CommitIcon,
          iconClasses: "icon-light-gray-500",
          testId: "unmodified-icon"
        },
        noGitInfo: {}
      }[((_a = props.gql) == null ? void 0 : _a.statusType) || "unmodified"];
    });
    const tooltipMainText = computed(() => {
      var _a, _b;
      switch ((_a = props.gql) == null ? void 0 : _a.statusType) {
        case "unmodified":
          return (_b = props.gql) == null ? void 0 : _b.subject;
        case "created":
          return t("file.git.created");
        case "modified":
          return t("file.git.modified");
        default:
          return null;
      }
    });
    const tooltipSubtext = computed(() => {
      var _a;
      if (((_a = props.gql) == null ? void 0 : _a.statusType) === "unmodified") {
        return t("specPage.rows.gitTooltipSubtext", {
          author: props.gql.author,
          shortHash: props.gql.shortHash
        });
      }
      return "";
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        unref(classes).icon ? (openBlock(), createBlock(_sfc_main$C, {
          key: (_b = (_a = props.gql) == null ? void 0 : _a.statusType) != null ? _b : void 0,
          placement: "top",
          class: "h-full truncate",
          "data-cy": "tooltip"
        }, {
          popper: withCtx(() => [
            createBaseVNode("div", _hoisted_4$c, [
              createBaseVNode("p", _hoisted_5$7, toDisplayString(unref(tooltipMainText)), 1),
              unref(tooltipSubtext) ? (openBlock(), createElementBlock("p", _hoisted_6$5, toDisplayString(unref(tooltipSubtext)), 1)) : createCommentVNode("", true)
            ])
          ]),
          default: withCtx(() => {
            var _a2, _b2;
            return [
              createBaseVNode("button", _hoisted_2$o, [
                createBaseVNode("div", null, [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(classes).icon), {
                    class: normalizeClass(unref(classes).iconClasses),
                    "data-cy": unref(classes).testId
                  }, null, 8, ["class", "data-cy"]))
                ]),
                createBaseVNode("div", _hoisted_3$k, toDisplayString((_b2 = (_a2 = props.gql) == null ? void 0 : _a2.lastModifiedHumanReadable) != null ? _b2 : ""), 1)
              ])
            ];
          }),
          _: 1
        })) : (openBlock(), createElementBlock("div", _hoisted_7$4, toDisplayString((_d = (_c = props.gql) == null ? void 0 : _c.lastModifiedHumanReadable) != null ? _d : ""), 1))
      ]);
    };
  }
});
const _hoisted_1$r = {
  height: "1em",
  width: "1em",
  style: { "min-width": "4px", "min-height": "4px" },
  viewBox: "0 0 4 4",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "2",
  cy: "2",
  r: "2",
  fill: "#1FA971",
  class: "icon-light"
}, null, -1);
const _hoisted_3$j = [
  _hoisted_2$n
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$r, _hoisted_3$j);
}
const __unplugin_components_0$1 = { name: "cy-dot-solid_x4", render: render$b };
const _hoisted_1$q = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8ZM5 7C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H5Z",
  fill: "#AFB3C7"
}, null, -1);
const _hoisted_3$i = [
  _hoisted_2$m
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_3$i);
}
const CancelledIcon = { name: "cy-cancelled-solid_x16", render: render$a };
const _hoisted_1$p = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V5ZM8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12Z",
  fill: "#DB7903"
}, null, -1);
const _hoisted_3$h = [
  _hoisted_2$l
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_3$h);
}
const ErroredIcon = { name: "cy-errored-solid_x16", render: render$9 };
const _hoisted_1$o = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#E45770"
}, null, -1);
const _hoisted_3$g = /* @__PURE__ */ createBaseVNode("path", {
  d: "M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.70711 5.29289ZM9.29289 10.7071C9.68342 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.68342 10.7071 9.29289L9.29289 10.7071ZM10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.68342 4.90237 9.29289 5.29289L10.7071 6.70711ZM5.29289 9.29289C4.90237 9.68342 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L5.29289 9.29289ZM5.29289 6.70711L9.29289 10.7071L10.7071 9.29289L6.70711 5.29289L5.29289 6.70711ZM9.29289 5.29289L5.29289 9.29289L6.70711 10.7071L10.7071 6.70711L9.29289 5.29289Z",
  fill: "white"
}, null, -1);
const _hoisted_4$b = [
  _hoisted_2$k,
  _hoisted_3$g
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_4$b);
}
const FailedIcon = { name: "cy-failed-solid_x16", render: render$8 };
const _hoisted_1$n = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#1FA971"
}, null, -1);
const _hoisted_3$f = /* @__PURE__ */ createBaseVNode("path", {
  d: "M10 6L7.5 10L6 8.5",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$a = [
  _hoisted_2$j,
  _hoisted_3$f
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_4$a);
}
const PassedIcon = { name: "cy-passed-solid_x16", render: render$7 };
const _hoisted_1$m = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "7",
  fill: "#D0D2E0"
}, null, -1);
const _hoisted_3$e = [
  _hoisted_2$i
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_3$e);
}
const PlaceholderIcon = { name: "cy-placeholder-solid_x16", render: render$6 };
const _hoisted_1$l = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createBaseVNode("circle", {
  id: "InnerCircle",
  class: "icon-light",
  cx: "8",
  cy: "8",
  r: "6",
  fill: "none"
}, null, -1);
const _hoisted_3$d = /* @__PURE__ */ createBaseVNode("circle", {
  id: "OuterCircle",
  class: "icon-dark",
  cx: "8",
  cy: "8",
  r: "7",
  stroke: "#BFC2D4",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$9 = [
  _hoisted_2$h,
  _hoisted_3$d
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_4$9);
}
const QueuedIcon = { name: "cy-queued-solid_x16", render: render$5 };
const _hoisted_1$k = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createBaseVNode("circle", {
  cx: "8",
  cy: "8",
  r: "6",
  stroke: "#E1E3ED",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$c = /* @__PURE__ */ createBaseVNode("path", {
  d: "M14 8C14 4.68629 11.3137 2 8 2",
  stroke: "#6470F3",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$8 = [
  _hoisted_2$g,
  _hoisted_3$c
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_4$8);
}
const RunningIcon = { name: "cy-running-outline_x16", render: render$4 };
const locale = "en";
const long = {
  year: {
    previous: "last year",
    current: "this year",
    next: "next year",
    past: {
      one: "{0} year ago",
      other: "{0} years ago"
    },
    future: {
      one: "in {0} year",
      other: "in {0} years"
    }
  },
  quarter: {
    previous: "last quarter",
    current: "this quarter",
    next: "next quarter",
    past: {
      one: "{0} quarter ago",
      other: "{0} quarters ago"
    },
    future: {
      one: "in {0} quarter",
      other: "in {0} quarters"
    }
  },
  month: {
    previous: "last month",
    current: "this month",
    next: "next month",
    past: {
      one: "{0} month ago",
      other: "{0} months ago"
    },
    future: {
      one: "in {0} month",
      other: "in {0} months"
    }
  },
  week: {
    previous: "last week",
    current: "this week",
    next: "next week",
    past: {
      one: "{0} week ago",
      other: "{0} weeks ago"
    },
    future: {
      one: "in {0} week",
      other: "in {0} weeks"
    }
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: {
      one: "{0} hour ago",
      other: "{0} hours ago"
    },
    future: {
      one: "in {0} hour",
      other: "in {0} hours"
    }
  },
  minute: {
    current: "this minute",
    past: {
      one: "{0} minute ago",
      other: "{0} minutes ago"
    },
    future: {
      one: "in {0} minute",
      other: "in {0} minutes"
    }
  },
  second: {
    current: "now",
    past: {
      one: "{0} second ago",
      other: "{0} seconds ago"
    },
    future: {
      one: "in {0} second",
      other: "in {0} seconds"
    }
  }
};
const short = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const narrow = {
  year: {
    previous: "last yr.",
    current: "this yr.",
    next: "next yr.",
    past: "{0} yr. ago",
    future: "in {0} yr."
  },
  quarter: {
    previous: "last qtr.",
    current: "this qtr.",
    next: "next qtr.",
    past: {
      one: "{0} qtr. ago",
      other: "{0} qtrs. ago"
    },
    future: {
      one: "in {0} qtr.",
      other: "in {0} qtrs."
    }
  },
  month: {
    previous: "last mo.",
    current: "this mo.",
    next: "next mo.",
    past: "{0} mo. ago",
    future: "in {0} mo."
  },
  week: {
    previous: "last wk.",
    current: "this wk.",
    next: "next wk.",
    past: "{0} wk. ago",
    future: "in {0} wk."
  },
  day: {
    previous: "yesterday",
    current: "today",
    next: "tomorrow",
    past: {
      one: "{0} day ago",
      other: "{0} days ago"
    },
    future: {
      one: "in {0} day",
      other: "in {0} days"
    }
  },
  hour: {
    current: "this hour",
    past: "{0} hr. ago",
    future: "in {0} hr."
  },
  minute: {
    current: "this minute",
    past: "{0} min. ago",
    future: "in {0} min."
  },
  second: {
    current: "now",
    past: "{0} sec. ago",
    future: "in {0} sec."
  }
};
const now = {
  now: {
    current: "now",
    future: "in a moment",
    past: "just now"
  }
};
const mini$1 = {
  year: "{0}yr",
  month: "{0}mo",
  week: "{0}wk",
  day: "{0}d",
  hour: "{0}h",
  minute: "{0}m",
  second: "{0}s",
  now: "now"
};
const enTimeAgo = {
  locale,
  long,
  short,
  narrow,
  now,
  mini: mini$1,
  "short-time": {
    year: "{0} yr.",
    month: "{0} mo.",
    week: "{0} wk.",
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: "{0} hr.",
    minute: "{0} min.",
    second: "{0} sec."
  },
  "long-time": {
    year: {
      one: "{0} year",
      other: "{0} years"
    },
    month: {
      one: "{0} month",
      other: "{0} months"
    },
    week: {
      one: "{0} week",
      other: "{0} weeks"
    },
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: {
      one: "{0} hour",
      other: "{0} hours"
    },
    minute: {
      one: "{0} minute",
      other: "{0} minutes"
    },
    second: {
      one: "{0} second",
      other: "{0} seconds"
    }
  }
};
var defaultLocale$1 = "en";
var localesData$1 = {};
var lowercaseLocaleLookup = {};
function getDefaultLocale() {
  return defaultLocale$1;
}
function setDefaultLocale(locale2) {
  defaultLocale$1 = locale2;
}
function getLocaleData$1(locale2) {
  return localesData$1[locale2];
}
function addLocaleData$1(localeData) {
  if (!localeData) {
    throw new Error("No locale data passed");
  }
  localesData$1[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
function resolveLocale$1(locale2) {
  if (localesData$1[locale2]) {
    return locale2;
  }
  if (lowercaseLocaleLookup[locale2.toLowerCase()]) {
    return lowercaseLocaleLookup[locale2.toLowerCase()];
  }
}
function resolveLocale(locale2) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || "lookup";
  switch (localeMatcher) {
    case "lookup":
      return resolveLocaleLookup(locale2);
    case "best fit":
      return resolveLocaleLookup(locale2);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
  }
}
function resolveLocaleLookup(locale2) {
  var resolvedLocale = resolveLocale$1(locale2);
  if (resolvedLocale) {
    return resolvedLocale;
  }
  var parts = locale2.split("-");
  while (locale2.length > 1) {
    parts.pop();
    locale2 = parts.join("-");
    var _resolvedLocale = resolveLocale$1(locale2);
    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}
var $ = {
  af: function classify(n) {
    return n == 1 ? "one" : "other";
  },
  am: function classify2(n) {
    return n >= 0 && n <= 1 ? "one" : "other";
  },
  ar: function classify3(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n100 >= 3 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 99 ? "many" : "other";
  },
  ast: function classify4(n) {
    var s = String(n).split("."), v0 = !s[1];
    return n == 1 && v0 ? "one" : "other";
  },
  be: function classify5(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? "one" : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? "few" : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? "many" : "other";
  },
  br: function classify6(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? "one" : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? "two" : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? "few" : n != 0 && t0 && n1000000 == 0 ? "many" : "other";
  },
  bs: function classify7(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? "few" : "other";
  },
  cs: function classify8(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1];
    return n == 1 && v0 ? "one" : i >= 2 && i <= 4 && v0 ? "few" : !v0 ? "many" : "other";
  },
  cy: function classify9(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : n == 2 ? "two" : n == 3 ? "few" : n == 6 ? "many" : "other";
  },
  da: function classify10(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? "one" : "other";
  },
  dsb: function classify11(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? "one" : v0 && i100 == 2 || f100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? "few" : "other";
  },
  dz: function classify12(n) {
    return "other";
  },
  fil: function classify13(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? "one" : "other";
  },
  fr: function classify14(n) {
    return n >= 0 && n < 2 ? "one" : "other";
  },
  ga: function classify15(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 ? "one" : n == 2 ? "two" : t0 && n >= 3 && n <= 6 ? "few" : t0 && n >= 7 && n <= 10 ? "many" : "other";
  },
  gd: function classify16(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? "one" : n == 2 || n == 12 ? "two" : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? "few" : "other";
  },
  he: function classify17(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1);
    return n == 1 && v0 ? "one" : i == 2 && v0 ? "two" : v0 && (n < 0 || n > 10) && t0 && n10 == 0 ? "many" : "other";
  },
  is: function classify18(n) {
    var s = String(n).split("."), i = s[0], t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || !t0 ? "one" : "other";
  },
  ksh: function classify19(n) {
    return n == 0 ? "zero" : n == 1 ? "one" : "other";
  },
  lt: function classify20(n) {
    var s = String(n).split("."), f = s[1] || "", t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? "one" : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? "few" : f != 0 ? "many" : "other";
  },
  lv: function classify21(n) {
    var s = String(n).split("."), f = s[1] || "", v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? "zero" : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? "one" : "other";
  },
  mk: function classify22(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "", v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? "one" : "other";
  },
  mt: function classify23(n) {
    var s = String(n).split("."), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 ? "one" : n == 0 || n100 >= 2 && n100 <= 10 ? "few" : n100 >= 11 && n100 <= 19 ? "many" : "other";
  },
  pa: function classify24(n) {
    return n == 0 || n == 1 ? "one" : "other";
  },
  pl: function classify25(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return n == 1 && v0 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? "many" : "other";
  },
  pt: function classify26(n) {
    var s = String(n).split("."), i = s[0];
    return i == 0 || i == 1 ? "one" : "other";
  },
  ro: function classify27(n) {
    var s = String(n).split("."), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? "one" : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? "few" : "other";
  },
  ru: function classify28(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? "one" : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? "few" : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? "many" : "other";
  },
  se: function classify29(n) {
    return n == 1 ? "one" : n == 2 ? "two" : "other";
  },
  si: function classify30(n) {
    var s = String(n).split("."), i = s[0], f = s[1] || "";
    return n == 0 || n == 1 || i == 0 && f == 1 ? "one" : "other";
  },
  sl: function classify31(n) {
    var s = String(n).split("."), i = s[0], v0 = !s[1], i100 = i.slice(-2);
    return v0 && i100 == 1 ? "one" : v0 && i100 == 2 ? "two" : v0 && (i100 == 3 || i100 == 4) || !v0 ? "few" : "other";
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.ca = $.ast;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.es = $.af;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.fr;
$.ia = $.ast;
$.id = $.dz;
$.it = $.ast;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.am;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.or = $.af;
$.ps = $.af;
$["pt-PT"] = $.ast;
$.sah = $.dz;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.yi = $.ast;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
const PluralRuleFunctions = $;
function getPluralRulesLocale(locale2) {
  if (locale2 === "pt-PT") {
    return locale2;
  }
  return getLanguageFromLanguageTag(locale2);
}
var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;
function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);
  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }
  return match[1];
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
var PluralRules = /* @__PURE__ */ function() {
  function PluralRules2(locale2, options) {
    _classCallCheck$3(this, PluralRules2);
    var locales = PluralRules2.supportedLocalesOf(locale2);
    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale2);
    }
    if (options && options.type !== "cardinal") {
      throw new RangeError('Only "cardinal" "type" is supported');
    }
    this.$ = PluralRuleFunctions[getPluralRulesLocale(locales[0])];
  }
  _createClass$3(PluralRules2, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }
      return locales.filter(function(locale2) {
        return PluralRuleFunctions[getPluralRulesLocale(locale2)];
      });
    }
  }]);
  return PluralRules2;
}();
function _typeof$4(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$4 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$4 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$4(obj);
}
function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$a(target, key, source[key]);
    });
  }
  return target;
}
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
var NUMERIC_VALUES = ["auto", "always"];
var STYLE_VALUES = ["long", "short", "narrow"];
var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
var RelativeTimeFormat = /* @__PURE__ */ function() {
  function RelativeTimeFormat2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _classCallCheck$2(this, RelativeTimeFormat2);
    _defineProperty$a(this, "numeric", "always");
    _defineProperty$a(this, "style", "long");
    _defineProperty$a(this, "localeMatcher", "lookup");
    var numeric = options.numeric, style = options.style, localeMatcher = options.localeMatcher;
    if (numeric !== void 0) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError('Invalid "numeric" option: '.concat(numeric));
      }
      this.numeric = numeric;
    }
    if (style !== void 0) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError('Invalid "style" option: '.concat(style));
      }
      this.style = style;
    }
    if (localeMatcher !== void 0) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError('Invalid "localeMatcher" option: '.concat(localeMatcher));
      }
      this.localeMatcher = localeMatcher;
    }
    if (typeof locales === "string") {
      locales = [locales];
    }
    locales.push(getDefaultLocale());
    this.locale = RelativeTimeFormat2.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];
    if (!this.locale) {
      throw new Error("No supported locale was found");
    }
    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale);
    } else {
      console.warn('"'.concat(this.locale, '" locale is not supported'));
    }
    if (typeof Intl !== "undefined" && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = "latn";
    }
    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  _createClass$2(RelativeTimeFormat2, [{
    key: "format",
    value: function format3() {
      var _parseFormatArgs = parseFormatArgs(arguments), _parseFormatArgs2 = _slicedToArray$1(_parseFormatArgs, 2), number = _parseFormatArgs2[0], unit = _parseFormatArgs2[1];
      return this.getRule(number, unit).replace("{0}", this.formatNumber(Math.abs(number)));
    }
  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments), _parseFormatArgs4 = _slicedToArray$1(_parseFormatArgs3, 2), number = _parseFormatArgs4[0], unit = _parseFormatArgs4[1];
      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}");
      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function(part) {
        return _objectSpread$9({}, part, {
          unit
        });
      }));
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }
  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      var unitMessages = getLocaleData$1(this.locale)[this.style][unit];
      if (this.numeric === "auto") {
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? "" : "-" + Math.abs(value))];
          if (message) {
            return message;
          }
        } else if (value === 1 || value === 2) {
          var _message = unitMessages["next".concat(value === 1 ? "" : "-" + Math.abs(value))];
          if (_message) {
            return _message;
          }
        } else if (value === 0) {
          if (unitMessages.current) {
            return unitMessages.current;
          }
        }
      }
      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"];
      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      }
      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || "other";
      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);
  return RelativeTimeFormat2;
}();
RelativeTimeFormat.supportedLocalesOf = function(locales) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof locales === "string") {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }
  return locales.filter(function(locale2) {
    return resolveLocale(locale2, options);
  });
};
RelativeTimeFormat.addLocale = addLocaleData$1;
RelativeTimeFormat.setDefaultLocale = setDefaultLocale;
RelativeTimeFormat.getDefaultLocale = getDefaultLocale;
RelativeTimeFormat.PluralRules = PluralRules;
var UNIT_ERROR = 'Invalid "unit" argument';
function parseUnit(unit) {
  if (_typeof$4(unit) === "symbol") {
    throw new TypeError(UNIT_ERROR);
  }
  if (typeof unit !== "string") {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  if (unit[unit.length - 1] === "s") {
    unit = unit.slice(0, unit.length - 1);
  }
  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }
  return unit;
}
var NUMBER_ERROR = 'Invalid "number" argument';
function parseNumber(value) {
  value = Number(value);
  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }
  return value;
}
function isNegativeZero(number) {
  return 1 / number === -Infinity;
}
function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}
function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError('"unit" argument is required');
  }
  return [parseNumber(args[0]), parseUnit(args[1])];
}
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$3 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$3(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Cache = /* @__PURE__ */ function() {
  function Cache2() {
    _classCallCheck$1(this, Cache2);
    _defineProperty$9(this, "cache", {});
  }
  _createClass$1(Cache2, [{
    key: "get",
    value: function get() {
      var cache = this.cache;
      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }
      for (var _i = 0; _i < keys.length; _i++) {
        var key = keys[_i];
        if (_typeof$3(cache) !== "object") {
          return;
        }
        cache = cache[key];
      }
      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }
      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;
      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        var key = keys[_i2];
        if (_typeof$3(cache[key]) !== "object") {
          cache[key] = {};
        }
        cache = cache[key];
      }
      return cache[lastKey] = value;
    }
  }]);
  return Cache2;
}();
function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$2 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$2(obj);
}
function chooseLocale(locales, isLocaleDataAvailable) {
  for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
    var _ref;
    if (_isArray) {
      if (_i >= _iterator.length)
        break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done)
        break;
      _ref = _i.value;
    }
    var locale2 = _ref;
    if (isLocaleDataAvailable(locale2)) {
      return locale2;
    }
    var parts = locale2.split("-");
    while (parts.length > 1) {
      parts.pop();
      locale2 = parts.join("-");
      if (isLocaleDataAvailable(locale2)) {
        return locale2;
      }
    }
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(", ")));
}
function intlDateTimeFormatSupported() {
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof$2(Intl)) === "object";
  return isIntlAvailable && typeof Intl.DateTimeFormat === "function";
}
var minute = 60;
var hour = 60 * minute;
var day = 24 * hour;
var week = 7 * day;
var month = 30.44 * day;
var year = 146097 / 400 * day;
function getSecondsInUnit(unit) {
  switch (unit) {
    case "second":
      return 1;
    case "minute":
      return minute;
    case "hour":
      return hour;
    case "day":
      return day;
    case "week":
      return week;
    case "month":
      return month;
    case "year":
      return year;
  }
}
function getStepDenominator(step) {
  if (step.factor !== void 0) {
    return step.factor;
  }
  return getSecondsInUnit(step.unit || step.formatAs) || 1;
}
function getRoundFunction(round2) {
  switch (round2) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function getDiffRatioToNextRoundedNumber(round2) {
  switch (round2) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep, timestamp = _ref.timestamp, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var minTime3;
  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime3 = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }
  if (minTime3 === void 0) {
    if (step.threshold !== void 0) {
      minTime3 = step.threshold;
      if (typeof minTime3 === "function") {
        minTime3 = minTime3(now2, future);
      }
    }
  }
  if (minTime3 === void 0) {
    minTime3 = step.minTime;
  }
  if (_typeof$1(minTime3) === "object") {
    if (prevStep && prevStep.id && minTime3[prevStep.id] !== void 0) {
      minTime3 = minTime3[prevStep.id];
    } else {
      minTime3 = minTime3.default;
    }
  }
  if (typeof minTime3 === "function") {
    minTime3 = minTime3(timestamp, {
      future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round2
        });
      }
    });
  }
  if (minTime3 === void 0) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now2,
        future
      })) {
        minTime3 = 0;
      } else {
        minTime3 = 9007199254740991;
      }
    }
  }
  if (minTime3 === void 0) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime3 = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round2
        });
      }
    } else {
      minTime3 = 0;
    }
  }
  if (minTime3 === void 0) {
    console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(step, null, 2));
  }
  return minTime3;
}
function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round2 = _ref2.round;
  var toUnitAmount = getSecondsInUnit(toUnit);
  var fromUnitAmount;
  if (fromUnit === "now") {
    fromUnitAmount = getSecondsInUnit(toUnit);
  } else {
    fromUnitAmount = getSecondsInUnit(fromUnit);
  }
  if (toUnitAmount !== void 0 && fromUnitAmount !== void 0) {
    return toUnitAmount - fromUnitAmount * (1 - getDiffRatioToNextRoundedNumber(round2));
  }
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function getStep(steps2, secondsPassed, _ref) {
  var now2 = _ref.now, future = _ref.future, round2 = _ref.round, units = _ref.units, getNextStep = _ref.getNextStep;
  steps2 = filterStepsByUnits(steps2, units);
  var step = _getStep(steps2, secondsPassed, {
    now: now2,
    future,
    round: round2
  });
  if (getNextStep) {
    if (step) {
      var prevStep = steps2[steps2.indexOf(step) - 1];
      var nextStep = steps2[steps2.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }
    return [void 0, void 0, steps2[0]];
  }
  return step;
}
function _getStep(steps2, secondsPassed, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
  if (steps2.length === 0) {
    return;
  }
  var i = getStepIndex(steps2, secondsPassed, {
    now: now2,
    future: future || secondsPassed < 0,
    round: round2
  });
  if (i === -1) {
    return;
  }
  var step = steps2[i];
  if (step.granularity) {
    var secondsPassedGranular = getRoundFunction(round2)(Math.abs(secondsPassed) / getStepDenominator(step) / step.granularity) * step.granularity;
    if (secondsPassedGranular === 0 && i > 0) {
      return steps2[i - 1];
    }
  }
  return step;
}
function getStepIndex(steps2, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  var minTime3 = getStepMinTime(steps2[i], _objectSpread$8({
    prevStep: steps2[i - 1],
    timestamp: options.now - secondsPassed * 1e3
  }, options));
  if (minTime3 === void 0) {
    return i - 1;
  }
  if (Math.abs(secondsPassed) < minTime3) {
    return i - 1;
  }
  if (i === steps2.length - 1) {
    return i;
  }
  return getStepIndex(steps2, secondsPassed, options, i + 1);
}
function filterStepsByUnits(steps2, units) {
  return steps2.filter(function(_ref3) {
    var unit = _ref3.unit, formatAs = _ref3.formatAs;
    unit = unit || formatAs;
    if (unit) {
      return units.indexOf(unit) >= 0;
    }
    return true;
  });
}
function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now2 = _ref.now, round2 = _ref.round;
  if (!getSecondsInUnit(unit)) {
    return;
  }
  var unitDenominator = getSecondsInUnit(unit) * 1e3;
  var future = timestamp > now2;
  var preciseAmount = Math.abs(timestamp - now2);
  var roundedAmount = getRoundFunction(round2)(preciseAmount / unitDenominator) * unitDenominator;
  if (future) {
    if (roundedAmount > 0) {
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round2, unitDenominator);
    } else {
      return preciseAmount - roundedAmount + 1;
    }
  }
  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round2, unitDenominator);
}
function getDiffToNextRoundedNumber(round2, unitDenominator) {
  return getDiffRatioToNextRoundedNumber(round2) * unitDenominator;
}
function getDiffToPreviousRoundedNumber(round2, unitDenominator) {
  return (1 - getDiffRatioToNextRoundedNumber(round2)) * unitDenominator + 1;
}
var YEAR = 365 * 24 * 60 * 60 * 1e3;
var INFINITY = 1e3 * YEAR;
function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep, nextStep = _ref.nextStep, now2 = _ref.now, future = _ref.future, round2 = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;
  var getTimeToNextUpdateForUnit$1 = function getTimeToNextUpdateForUnit$12(unit2) {
    return getTimeToNextUpdateForUnit(unit2, timestamp, {
      now: now2,
      round: round2
    });
  };
  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future,
    now: now2,
    round: round2,
    prevStep: future ? prevStep : step
  });
  if (timeToStepChange === void 0) {
    return;
  }
  var timeToNextUpdate;
  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit$1,
        getRoundFunction,
        now: now2,
        future,
        round: round2
      });
    }
    if (timeToNextUpdate === void 0) {
      var unit = step.unit || step.formatAs;
      if (unit) {
        timeToNextUpdate = getTimeToNextUpdateForUnit$1(unit);
      }
    }
  }
  if (timeToNextUpdate === void 0) {
    return timeToStepChange;
  }
  return Math.min(timeToNextUpdate, timeToStepChange);
}
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round, prevStep = _ref2.prevStep;
  var minTime3 = getStepMinTime(currentOrNextStep, {
    timestamp,
    now: now2,
    future,
    round: round2,
    prevStep
  });
  if (minTime3 === void 0) {
    return;
  }
  if (future) {
    return timestamp - minTime3 * 1e3 + 1;
  } else {
    if (minTime3 === 0 && timestamp === now2) {
      return INFINITY;
    }
    return timestamp + minTime3 * 1e3;
  }
}
function getTimeToStepChange(step, timestamp, _ref3) {
  var now2 = _ref3.now, future = _ref3.future, round2 = _ref3.round, prevStep = _ref3.prevStep;
  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now2,
      future,
      round: round2,
      prevStep
    });
    if (stepChangesAt === void 0) {
      return;
    }
    return stepChangesAt - now2;
  } else {
    if (future) {
      return timestamp - now2 + 1;
    } else {
      return INFINITY;
    }
  }
}
var localesData = {};
function getLocaleData(locale2) {
  return localesData[locale2];
}
function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error("[javascript-time-ago] No locale data passed.");
  }
  localesData[localeData.locale] = localeData;
}
const round$1 = [{
  formatAs: "now"
}, {
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}, {
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
}];
const round = {
  steps: round$1,
  labels: "long"
};
function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const defaultStyle = _objectSpread$7({}, round, {
  steps: round.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
const approximate$1 = [{
  factor: 1,
  unit: "now"
}, {
  threshold: 1,
  threshold_for_now: 45.5,
  factor: 1,
  unit: "second"
}, {
  threshold: 45.5,
  factor: minute,
  unit: "minute"
}, {
  threshold: 2.5 * minute,
  granularity: 5,
  factor: minute,
  unit: "minute"
}, {
  threshold: 22.5 * minute,
  factor: 0.5 * hour,
  unit: "half-hour"
}, {
  threshold: 42.5 * minute,
  threshold_for_minute: 52.5 * minute,
  factor: hour,
  unit: "hour"
}, {
  threshold: 20.5 / 24 * day,
  factor: day,
  unit: "day"
}, {
  threshold: 5.5 * day,
  factor: week,
  unit: "week"
}, {
  threshold: 3.5 * week,
  factor: month,
  unit: "month"
}, {
  threshold: 10.5 * month,
  factor: year,
  unit: "year"
}];
const approximate = {
  gradation: approximate$1,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
const approximateTime = {
  gradation: approximate$1,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
var steps = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}];
var formatters = {};
var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    _ref.future;
    var getMinTimeForUnit = _ref.getMinTimeForUnit;
    return getMinTimeForUnit("day");
  },
  format: function format(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonth) {
      formatters[locale2].dayMonth = new Intl.DateTimeFormat(locale2, {
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonth.format(getDate(value));
  }
};
var yearMonthAndDay = {
  minTime: function minTime2(timestamp, _ref2) {
    var future = _ref2.future;
    if (future) {
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1;
      return (timestamp - maxFittingNow) / 1e3;
    } else {
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime();
      return (minFittingNow - timestamp) / 1e3;
    }
  },
  format: function format2(value, locale2) {
    if (!formatters[locale2]) {
      formatters[locale2] = {};
    }
    if (!formatters[locale2].dayMonthYear) {
      formatters[locale2].dayMonthYear = new Intl.DateTimeFormat(locale2, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    }
    return formatters[locale2].dayMonthYear.format(getDate(value));
  }
};
if (intlDateTimeFormatSupported()) {
  steps.push(monthAndDay, yearMonthAndDay);
} else {
  steps.push({
    formatAs: "day"
  }, {
    formatAs: "week"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  });
}
const twitter = {
  steps,
  labels: [
    "mini",
    "short-time",
    "narrow",
    "short"
  ]
};
function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterNow = _objectSpread$6({}, twitter, {
  steps: [{
    formatAs: "now"
  }].concat(twitter.steps)
});
function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterMinute = _objectSpread$5({}, twitter, {
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterMinuteNow = _objectSpread$4({}, twitterMinute, {
  steps: [{
    formatAs: "now"
  }].concat(twitterMinute.steps)
});
function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const twitterFirstMinute = _objectSpread$3({}, twitter, {
  steps: twitter.steps.filter(function(step) {
    return step.formatAs !== "second";
  }).map(function(step) {
    return step.formatAs === "minute" ? _objectSpread$3({}, step, {
      minTime: minute
    }) : step;
  })
});
const mini = {
  steps: [{
    formatAs: "second"
  }, {
    formatAs: "minute"
  }, {
    formatAs: "hour"
  }, {
    formatAs: "day"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  }],
  labels: [
    "mini",
    "short-time",
    "narrow",
    "short"
  ]
};
function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniNow = _objectSpread$2({}, mini, {
  steps: [{
    formatAs: "now"
  }].concat(mini.steps)
});
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniMinute = _objectSpread$1({}, mini, {
  steps: mini.steps.filter(function(step) {
    return step.formatAs !== "second";
  })
});
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
const miniMinuteNow = _objectSpread({}, miniMinute, {
  steps: [{
    formatAs: "now"
  }].concat(miniMinute.steps)
});
function getStyleByName(style) {
  switch (style) {
    case "default":
    case "round":
      return round;
    case "round-minute":
      return defaultStyle;
    case "approximate":
      return approximate;
    case "time":
    case "approximate-time":
      return approximateTime;
    case "mini":
      return mini;
    case "mini-now":
      return miniNow;
    case "mini-minute":
      return miniMinute;
    case "mini-minute-now":
      return miniMinuteNow;
    case "twitter":
      return twitter;
    case "twitter-now":
      return twitterNow;
    case "twitter-minute":
      return twitterMinute;
    case "twitter-minute-now":
      return twitterMinuteNow;
    case "twitter-first-minute":
      return twitterFirstMinute;
    default:
      return approximate;
  }
}
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var TimeAgo = /* @__PURE__ */ function() {
  function TimeAgo2() {
    var locales = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, polyfill = _ref.polyfill;
    _classCallCheck(this, TimeAgo2);
    if (typeof locales === "string") {
      locales = [locales];
    }
    this.locale = chooseLocale(locales.concat(TimeAgo2.getDefaultLocale()), getLocaleData);
    if (typeof Intl !== "undefined") {
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    }
    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = RelativeTimeFormat;
      this.IntlPluralRules = RelativeTimeFormat.PluralRules;
    }
    this.relativeTimeFormatCache = new Cache();
    this.pluralRulesCache = new Cache();
  }
  _createClass(TimeAgo2, [{
    key: "format",
    value: function format3(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = void 0;
        } else {
          options = {};
        }
      }
      if (!style) {
        style = defaultStyle;
      }
      if (typeof style === "string") {
        style = getStyleByName(style);
      }
      var timestamp = getTimestamp(input);
      var _this$getLabels = this.getLabels(style.flavour || style.labels), labels = _this$getLabels.labels, labelsType = _this$getLabels.labelsType;
      var now2;
      if (style.now !== void 0) {
        now2 = style.now;
      }
      if (now2 === void 0 && options.now !== void 0) {
        now2 = options.now;
      }
      if (now2 === void 0) {
        now2 = Date.now();
      }
      var secondsPassed = (now2 - timestamp) / 1e3;
      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, getLocaleData(this.locale).now, getLocaleData(this.locale).long, future);
      if (style.custom) {
        var custom = style.custom({
          now: now2,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });
        if (custom !== void 0) {
          return custom;
        }
      }
      var units = getTimeIntervalMeasurementUnits(
        style.units,
        labels,
        nowLabel
      );
      var round2 = options.round || style.round;
      var _getStep2 = getStep(
        style.gradation || style.steps || defaultStyle.steps,
        secondsPassed,
        {
          now: now2,
          units,
          round: round2,
          future,
          getNextStep: true
        }
      ), _getStep22 = _slicedToArray(_getStep2, 3), prevStep = _getStep22[0], step = _getStep22[1], nextStep = _getStep22[2];
      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels,
        labelsType,
        nowLabel,
        now: now2,
        future,
        round: round2
      }) || "";
      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = getTimeToNextUpdate(timestamp, step, {
          nextStep,
          prevStep,
          now: now2,
          future,
          round: round2
        });
        return [formattedDate, timeToNextUpdate];
      }
      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;
      var labels = _ref2.labels, labelsType = _ref2.labelsType, nowLabel = _ref2.nowLabel, now2 = _ref2.now, future = _ref2.future, round2 = _ref2.round;
      if (!step) {
        return;
      }
      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit2, value) {
            return _this.formatValue(value, unit2, {
              labels,
              future
            });
          },
          now: now2,
          future
        });
      }
      var unit = step.unit || step.formatAs;
      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      }
      if (unit === "now") {
        return nowLabel;
      }
      var amount = Math.abs(secondsPassed) / getStepDenominator(step);
      if (step.granularity) {
        amount = getRoundFunction(round2)(amount / step.granularity) * step.granularity;
      }
      var valueForFormatting = -1 * Math.sign(secondsPassed) * getRoundFunction(round2)(amount);
      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }
      switch (labelsType) {
        case "long":
        case "short":
        case "narrow":
          return this.getFormatter(labelsType).format(valueForFormatting, unit);
        default:
          return this.formatValue(valueForFormatting, unit, {
            labels,
            future
          });
      }
    }
  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels, future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future
      }).replace("{0}", this.formatNumber(Math.abs(value)));
    }
  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      this.locale;
      formattingRules = formattingRules[unit];
      if (typeof formattingRules === "string") {
        return formattingRules;
      }
      var pastOrFuture = value === 0 ? future ? "future" : "past" : value < 0 ? "past" : "future";
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules;
      if (typeof quantifierRules === "string") {
        return quantifierRules;
      }
      var quantifier = this.getPluralRules().select(Math.abs(value));
      return quantifierRules[quantifier] || quantifierRules.other;
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      if (typeof labelsType === "string") {
        labelsType = [labelsType];
      }
      labelsType = labelsType.map(function(labelsType2) {
        switch (labelsType2) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return labelsType2;
        }
      });
      labelsType = labelsType.concat("long");
      var localeData = getLocaleData(this.locale);
      for (var _iterator = labelsType, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ; ) {
        var _ref5;
        if (_isArray) {
          if (_i2 >= _iterator.length)
            break;
          _ref5 = _iterator[_i2++];
        } else {
          _i2 = _iterator.next();
          if (_i2.done)
            break;
          _ref5 = _i2.value;
        }
        var _labelsType = _ref5;
        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);
  return TimeAgo2;
}();
var defaultLocale = "en";
TimeAgo.getDefaultLocale = function() {
  return defaultLocale;
};
TimeAgo.setDefaultLocale = function(locale2) {
  return defaultLocale = locale2;
};
TimeAgo.addDefaultLocale = function(localeData) {
  if (defaultLocaleHasBeenSpecified) {
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  }
  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};
var defaultLocaleHasBeenSpecified;
TimeAgo.addLocale = function(localeData) {
  addLocaleData(localeData);
  RelativeTimeFormat.addLocale(localeData);
};
TimeAgo.locale = TimeAgo.addLocale;
TimeAgo.addLabels = function(locale2, name, labels) {
  var localeData = getLocaleData(locale2);
  if (!localeData) {
    addLocaleData({
      locale: locale2
    });
    localeData = getLocaleData(locale2);
  }
  localeData[name] = labels;
};
function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }
  if (typeof input === "number") {
    return input;
  }
  throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
}
function isMockedDate(object) {
  return _typeof(object) === "object" && typeof object.getTime === "function";
}
function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  var units = Object.keys(labels);
  if (nowLabel) {
    units.push("now");
  }
  if (allowedUnits) {
    units = allowedUnits.filter(function(unit) {
      return unit === "now" || units.indexOf(unit) >= 0;
    });
  }
  return units;
}
function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now;
  if (nowLabel) {
    if (typeof nowLabel === "string") {
      return nowLabel;
    }
    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  }
  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}
var OBJECT_CONSTRUCTOR = {}.constructor;
function isObject(object) {
  return _typeof(object) !== void 0 && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}
function isStyle(variable) {
  return typeof variable === "string" || isStyleObject(variable);
}
function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || Array.isArray(object.gradation) || Array.isArray(object.flavour) || typeof object.flavour === "string" || Array.isArray(object.labels) || typeof object.labels === "string" || Array.isArray(object.units) || typeof object.custom === "function");
}
TimeAgo.addDefaultLocale(enTimeAgo);
const timeAgo = new TimeAgo("en-US");
function getTimeAgo(iso8601) {
  return timeAgo.format(new Date(iso8601));
}
function getDurationString(totalSeconds) {
  const roundedTotalSeconds = Math.floor(totalSeconds / 1e3);
  const seconds = roundedTotalSeconds % 60;
  const roundedTotalMinutes = Math.floor(roundedTotalSeconds / 60);
  const minutes = roundedTotalMinutes % 60;
  const roundedTotalHours = Math.floor(roundedTotalMinutes / 60);
  const hours = roundedTotalHours % 60;
  if (hours) {
    return `${hours}:${minutes.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
  }
  return `${minutes}:${seconds.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false })}`;
}
const _hoisted_1$j = ["title"];
const _hoisted_2$f = { class: "font-semibold text-gray-800" };
const _hoisted_3$b = { class: "text-gray-600" };
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  props: {
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "max-w-60 truncate overflow-hidden",
        "data-cy": "spec-filename",
        title: __props.specFileName + __props.specFileExtension
      }, [
        createBaseVNode("span", _hoisted_2$f, toDisplayString(__props.specFileName), 1),
        createBaseVNode("span", _hoisted_3$b, toDisplayString(__props.specFileExtension), 1)
      ], 8, _hoisted_1$j);
    };
  }
});
const SpecRunSummary_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$i = { class: "flex flex-row text-gray-700 text-size-14px gap-2 items-center" };
const _hoisted_2$e = {
  key: 2,
  "data-cy": "spec-run-time-ago"
};
const _hoisted_3$a = { "data-cy": "spec-run-duration-1" };
const _hoisted_4$7 = {
  key: 3,
  class: "m-[-5px] text-gray-200"
};
const _hoisted_5$6 = {
  key: 4,
  "data-cy": "spec-run-duration-2"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  props: {
    run: null,
    specFileNoExtension: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    const getAggregateTestCountString = (agg) => {
      if (agg.min == null)
        return "0";
      if (!agg.max || agg.min === agg.max)
        return agg.min;
      return `${agg.min}-${agg.max}`;
    };
    const durationText1 = computed(() => {
      var _a, _b, _c, _d;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return "--";
      return getDurationString((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.min);
    });
    const durationText2 = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if (((_b = (_a = props.run) == null ? void 0 : _a.specDuration) == null ? void 0 : _b.min) == null)
        return null;
      if (!((_d = (_c = props.run) == null ? void 0 : _c.specDuration) == null ? void 0 : _d.max) || Math.round(((_f = (_e = props.run) == null ? void 0 : _e.specDuration) == null ? void 0 : _f.min) / 1e3) === Math.round(((_h = (_g = props.run) == null ? void 0 : _g.specDuration) == null ? void 0 : _h.max) / 1e3))
        return null;
      return getDurationString((_j = (_i = props.run) == null ? void 0 : _i.specDuration) == null ? void 0 : _j.max);
    });
    const runResults = computed(() => {
      var _a, _b, _c, _d;
      if (!props.run)
        return null;
      return {
        id: props.run.id,
        totalFailed: getAggregateTestCountString((_a = props.run.testsFailed) != null ? _a : {}),
        totalPassed: getAggregateTestCountString((_b = props.run.testsPassed) != null ? _b : {}),
        totalPending: getAggregateTestCountString((_c = props.run.testsPending) != null ? _c : {}),
        totalSkipped: getAggregateTestCountString((_d = props.run.testsSkipped) != null ? _d : {})
      };
    });
    const statusText = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return null;
      switch (props.run.status) {
        case "CANCELLED":
          return "Canceled";
        case "ERRORED":
          return "Errored";
        case "FAILED":
          return "Failed";
        case "NOTESTS":
          return "No tests";
        case "PASSED":
          return "Passed";
        case "UNCLAIMED":
          return "Queued";
        case "RUNNING":
          return "Running";
        case "TIMEDOUT":
          return "Timed out";
        default:
          return null;
      }
    });
    const statusColor = computed(() => {
      var _a;
      if (!((_a = props.run) == null ? void 0 : _a.status))
        return "gray";
      switch (props.run.status) {
        case "ERRORED":
        case "TIMEDOUT":
          return "orange";
        case "FAILED":
          return "red";
        case "PASSED":
          return "jade";
        case "RUNNING":
          return "indigo";
        case "CANCELLED":
        case "NOTESTS":
        case "UNCLAIMED":
        default:
          return "gray";
      }
    });
    const highlightColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-500";
      return `${color}-400`;
    });
    const statusTextColor = computed(() => {
      const color = statusColor.value;
      if (color === "gray")
        return "gray-700";
      return `${color}-500`;
    });
    return (_ctx, _cache) => {
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return props.run ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["flex flex-col p-4 gap-2 items-center", unref(highlightColor)]),
        "data-cy": "spec-run-summary"
      }, [
        createVNode(_sfc_main$j, {
          "spec-file-name": props.specFileNoExtension,
          "spec-file-extension": props.specFileExtension
        }, null, 8, ["spec-file-name", "spec-file-extension"]),
        createBaseVNode("div", _hoisted_1$i, [
          unref(statusText) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["text-" + unref(statusTextColor), "font-medium"]),
            "data-cy": "spec-run-status"
          }, toDisplayString(unref(statusText)), 3)) : createCommentVNode("", true),
          unref(statusText) ? (openBlock(), createBlock(_component_i_cy_dot_solid_x4, {
            key: 1,
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          })) : createCommentVNode("", true),
          props.run.createdAt ? (openBlock(), createElementBlock("div", _hoisted_2$e, toDisplayString(unref(getTimeAgo)(props.run.createdAt)), 1)) : createCommentVNode("", true),
          createVNode(_component_i_cy_dot_solid_x4, {
            width: "4px",
            height: "4px",
            class: "icon-light-gray-200"
          }),
          createBaseVNode("div", _hoisted_3$a, toDisplayString(unref(durationText1)), 1),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_4$7, " - ")) : createCommentVNode("", true),
          unref(durationText2) ? (openBlock(), createElementBlock("div", _hoisted_5$6, toDisplayString(unref(durationText2)), 1)) : createCommentVNode("", true)
        ]),
        unref(runResults) ? (openBlock(), createBlock(_sfc_main$D, mergeProps({ key: 0 }, unref(runResults), {
          class: "my-2",
          "data-cy": "spec-run-result-counts"
        }), null, 16)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const SpecRunSummary = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-4652a3a6"]]);
const RunStatusDots_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$h = {
  key: 0,
  class: "flex justify-end items-center",
  "data-cy": "run-status-dots"
};
const _hoisted_2$d = {
  key: 0,
  class: "sr-only"
};
const _hoisted_3$9 = {
  key: 1,
  "data-cy": "run-status-empty",
  class: "text-gray-400"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    specFileName: null,
    specFileExtension: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment RunStatusDots on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    __typename
    ... on CloudProjectSpecNotFound {
      retrievedAt
      # We query for message even though we don't use it so GQL can discriminate these two types properly
      message
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      specRuns(first: 4, fromBranch: $fromBranch) {
        nodes {
          id
          runNumber
          testsFailed{
            min
            max
          }
          testsPassed{
            min
            max
          }
          testsPending{
            min
            max
          }
          testsSkipped{
            min
            max
          }
          createdAt
          groupCount
          specDuration{
            min
            max
          }
          status
          url
        }
      }
    }
  }
}
`;
    const runs = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" ? (_f = (_e = (_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.specRuns) == null ? void 0 : _e.nodes) != null ? _f : [] : [];
    });
    const isRunsLoaded = computed(() => {
      var _a;
      return !!((_a = props.gql) == null ? void 0 : _a.data);
    });
    const dotClasses = computed(() => {
      var _a, _b;
      const statuses = ["placeholder", "placeholder", "placeholder"];
      if (runs.value && runs.value.length > 1) {
        for (let i = 1; i < Math.min(runs.value.length, 4); i++) {
          statuses[i - 1] = (_b = (_a = runs.value[i]) == null ? void 0 : _a.status) != null ? _b : "";
        }
      }
      return statuses.reverse().map((s) => {
        switch (s) {
          case "PASSED":
            return "icon-light-jade-400";
          case "RUNNING":
            return "icon-light-indigo-400";
          case "FAILED":
            return "icon-light-red-400";
          case "ERRORED":
          case "TIMEDOUT":
            return "icon-light-orange-400";
          case "NOTESTS":
            return "icon-light-gray-400";
          case "CANCELLED":
          case "UNCLAIMED":
          default:
            return "icon-light-gray-300";
        }
      });
    });
    const latestRun = computed(() => {
      var _a, _b;
      return (_b = (_a = runs.value) == null ? void 0 : _a[0]) != null ? _b : null;
    });
    const latestDot = computed(() => {
      var _a;
      const status = (_a = latestRun.value) == null ? void 0 : _a.status;
      switch (status) {
        case "PASSED":
          return { icon: PassedIcon, spin: false, status };
        case "RUNNING":
          return { icon: RunningIcon, spin: true, status };
        case "UNCLAIMED":
          return { icon: QueuedIcon, spin: false, status };
        case "FAILED":
          return { icon: FailedIcon, spin: false, status };
        case "ERRORED":
        case "TIMEDOUT":
          return { icon: ErroredIcon, spin: false, status };
        case "NOTESTS":
        case "CANCELLED":
          return { icon: CancelledIcon, spin: false, status };
        default:
          return { icon: PlaceholderIcon, spin: false, status: "PLACEHOLDER" };
      }
    });
    const cloudUrl = computed(() => {
      var _a;
      if ((_a = latestRun.value) == null ? void 0 : _a.url) {
        return getUrlWithParams({
          url: latestRun.value.url,
          params: {
            utm_medium: "Specs Latest Runs Dots",
            utm_campaign: latestDot.value.status
          }
        });
      }
      return "#";
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", null, [
        unref(isRunsLoaded) ? (openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$C : "div"), {
          key: 0,
          placement: "top",
          "is-interactive": true,
          class: "h-16px",
          "hide-delay": 0,
          "show-group": (_a = props.gql) == null ? void 0 : _a.id,
          distance: 7,
          "popper-class": "RunStatusDots_Tooltip"
        }, {
          popper: withCtx(() => [
            unref(latestRun) ? (openBlock(), createBlock(_sfc_main$A, {
              key: 0,
              href: unref(cloudUrl),
              "use-default-hocus": false
            }, {
              default: withCtx(() => [
                createVNode(SpecRunSummary, {
                  run: unref(latestRun),
                  "spec-file-no-extension": props.specFileName,
                  "spec-file-extension": props.specFileExtension
                }, null, 8, ["run", "spec-file-no-extension", "spec-file-extension"])
              ]),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(latestRun) ? _sfc_main$A : "div"), { href: unref(cloudUrl) }, {
              default: withCtx(() => [
                unref(isRunsLoaded) ? (openBlock(), createElementBlock("div", _hoisted_1$h, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dotClasses), (dot, i) => {
                    return openBlock(), createElementBlock("div", {
                      key: i,
                      class: "ml-4px"
                    }, [
                      createVNode(_component_i_cy_dot_solid_x4, {
                        width: "4",
                        height: "4",
                        class: normalizeClass(dot),
                        "data-cy": "run-status-dot-" + i
                      }, null, 8, ["class", "data-cy"])
                    ]);
                  }), 128)),
                  createBaseVNode("div", null, [
                    (openBlock(), createBlock(resolveDynamicComponent(unref(latestDot).icon), {
                      width: "16",
                      height: "16",
                      class: normalizeClass([{ "animate-spin": unref(latestDot).spin }, "ml-4px"]),
                      "data-cy": "run-status-dot-latest",
                      "data-cy-run-status": unref(latestDot).status
                    }, null, 8, ["class", "data-cy-run-status"]))
                  ]),
                  unref(latestRun) ? (openBlock(), createElementBlock("span", _hoisted_2$d, toDisplayString(props.specFileName) + toDisplayString(props.specFileExtension) + " test results", 1)) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["href"]))
          ]),
          _: 1
        }, 8, ["show-group"])) : createCommentVNode("", true),
        !unref(isRunsLoaded) ? (openBlock(), createElementBlock("div", _hoisted_3$9, " -- ")) : createCommentVNode("", true)
      ]);
    };
  }
});
const _hoisted_1$g = {
  key: 0,
  class: "h-full grid text-gray-700 justify-end items-center",
  "data-cy": "average-duration"
};
const _hoisted_2$c = {
  key: 1,
  class: "h-full grid text-gray-400 justify-end items-center"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment AverageDuration on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    ... on CloudProjectSpecNotFound {
      retrievedAt
    }
    ... on CloudProjectSpec {
      id
      retrievedAt
      averageDuration(fromBranch: $fromBranch)
    }
  }
}
`;
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.gql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" && ((_d = (_c = props.gql) == null ? void 0 : _c.data) == null ? void 0 : _d.averageDuration) ? (openBlock(), createElementBlock("div", _hoisted_1$g, toDisplayString(unref(getDurationString)(props.gql.data.averageDuration)), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$c, " -- "));
    };
  }
});
const _hoisted_1$f = {
  key: 1,
  ref: "hoverButton",
  class: "inset-y-1 right-0 absolute"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  props: {
    isHoverDisabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const columnRef = ref();
    const hoveredItem = ref();
    const shouldShowHover = ref(false);
    const isHoveredColumn = useElementHover(columnRef);
    const isHoveredItem = useElementHover(hoveredItem);
    let controls;
    watch([isHoveredColumn, isHoveredItem], () => {
      if (props.isHoverDisabled) {
        return;
      }
      if (controls) {
        controls.stop();
      }
      if (isHoveredItem.value) {
        isHoveredColumn.value = false;
      }
      if (isHoveredColumn.value || isHoveredItem.value) {
        if (shouldShowHover.value)
          return;
        controls = useTimeoutFn(() => {
          shouldShowHover.value = true;
        }, 200);
      } else if (!isHoveredColumn.value && !isHoveredItem.value) {
        shouldShowHover.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "columnRef",
        ref: columnRef,
        class: "relative"
      }, [
        createVNode(TransitionQuickFade, null, {
          default: withCtx(() => [
            !shouldShowHover.value ? renderSlot(_ctx.$slots, "content", { key: 0 }) : (openBlock(), createElementBlock("div", _hoisted_1$f, [
              renderSlot(_ctx.$slots, "hover")
            ], 512))
          ]),
          _: 3
        })
      ], 512);
    };
  }
});
const _hoisted_1$e = { "data-cy": "specs-list-row" };
const _hoisted_2$b = { "data-cy": "specs-list-row-file" };
const _hoisted_3$8 = {
  "data-cy": "specs-list-row-git-info",
  class: "group"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  props: {
    isLeaf: { type: Boolean },
    route: null,
    isProjectConnected: { type: Boolean },
    gridColumns: null
  },
  emits: ["toggleRow"],
  setup(__props, { emit }) {
    const lazyRender = useTimeout(50);
    function handleCtrlClick() {
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        (openBlock(), createBlock(resolveDynamicComponent(__props.isLeaf ? "RouterLink" : "div"), {
          class: normalizeClass(["h-full outline-none ring-inset grid pr-20px focus:outline-transparent focus-within:ring-indigo-300 focus-within:ring-1 children:cursor-pointer", __props.gridColumns]),
          to: __props.route,
          "data-cy": __props.isLeaf ? "spec-item-link" : "spec-item-directory",
          onClick: [
            _cache[0] || (_cache[0] = ($event) => emit("toggleRow")),
            withModifiers(handleCtrlClick, ["meta", "prevent"]),
            withModifiers(handleCtrlClick, ["ctrl", "prevent"])
          ]
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$b, [
              renderSlot(_ctx.$slots, "file")
            ]),
            unref(lazyRender) && __props.isLeaf ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("div", _hoisted_3$8, [
                renderSlot(_ctx.$slots, "git-info")
              ]),
              createVNode(_sfc_main$f, {
                "data-cy": "specs-list-row-latest-runs",
                "is-hover-disabled": __props.isProjectConnected,
                class: "group"
              }, {
                content: withCtx(() => [
                  renderSlot(_ctx.$slots, "latest-runs")
                ]),
                hover: withCtx(() => [
                  renderSlot(_ctx.$slots, "connect-button", { utmMedium: "Specs Latest Runs Empty State" })
                ]),
                _: 3
              }, 8, ["is-hover-disabled"]),
              createVNode(_sfc_main$f, {
                "data-cy": "specs-list-row-average-duration",
                "is-hover-disabled": __props.isProjectConnected,
                class: "hidden group md:block"
              }, {
                content: withCtx(() => [
                  renderSlot(_ctx.$slots, "average-duration")
                ]),
                hover: withCtx(() => [
                  renderSlot(_ctx.$slots, "connect-button", { utmMedium: "Specs Average Duration Empty State" })
                ]),
                _: 3
              }, 8, ["is-hover-disabled"])
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["class", "to", "data-cy", "onClick"]))
      ]);
    };
  }
});
const _hoisted_1$d = { class: "flex h-full items-center" };
const _hoisted_2$a = ["data-cy", "aria-expanded"];
const _hoisted_3$7 = ["title"];
const _hoisted_4$6 = { class: "sr-only" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  props: {
    name: { default: "" },
    expanded: { type: Boolean, default: false },
    indexes: { default: () => [] },
    depth: null
  },
  emits: ["toggle"],
  setup(__props, { emit: emits }) {
    return (_ctx, _cache) => {
      const _component_i_cy_chevron_down_small_x16 = __unplugin_components_1$2;
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createBaseVNode("button", {
          class: "h-full grid gap-8px grid-cols-[14px,16px,auto] items-center group focus:outline-none",
          "data-cy": `row-directory-depth-${__props.depth}`,
          "aria-expanded": __props.expanded,
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("toggle"), ["stop"]))
        }, [
          createVNode(_component_i_cy_chevron_down_small_x16, {
            class: normalizeClass(["mr-8px text-sm icon-dark-gray-300 group-hocus:icon-dark-gray-700", { "transform rotate-270": !__props.expanded }])
          }, null, 8, ["class"]),
          createVNode(unref(__unplugin_components_1$1), { class: "icon-dark-white icon-light-gray-200" }),
          createBaseVNode("div", {
            title: __props.name,
            class: "flex text-gray-600 truncate"
          }, [
            createVNode(_sfc_main$E, {
              text: __props.name,
              indexes: __props.indexes,
              class: "font-medium",
              "highlight-classes": "text-gray-1000"
            }, null, 8, ["text", "indexes"])
          ], 8, _hoisted_3$7),
          createBaseVNode("span", _hoisted_4$6, toDisplayString(__props.expanded ? "collapse" : "expand"), 1)
        ], 8, _hoisted_2$a),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$c = {
  class: "h-full grid gap-8px group grid-cols-[16px,auto,auto] items-center",
  "data-cy": "spec-item"
};
const _hoisted_2$9 = ["title"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  props: {
    fileName: null,
    extension: null,
    indexes: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    const split = computed(() => {
      return deriveIndexes(props.fileName, props.indexes);
    });
    return (_ctx, _cache) => {
      const _component_i_cy_document_blank_x16 = DocumentIconBlank;
      return openBlock(), createElementBlock("div", _hoisted_1$c, [
        createVNode(_component_i_cy_document_blank_x16, { class: "icon-light-gray-50 icon-dark-gray-200 group-hocus:icon-light-indigo-200 group-hocus:icon-dark-indigo-400" }),
        createBaseVNode("div", {
          title: __props.fileName + __props.extension,
          class: "text-gray-400 text-indigo-500 truncate group-hocus:text-indigo-600"
        }, [
          createVNode(_sfc_main$E, {
            text: __props.fileName,
            indexes: unref(split).fileNameIndexes,
            class: "font-medium text-indigo-500 group-hocus:text-indigo-700",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"]),
          createVNode(_sfc_main$E, {
            text: __props.extension,
            indexes: unref(split).extensionIndexes,
            class: "font-light group-hocus:text-gray-400",
            "highlight-classes": "text-gray-1000"
          }, null, 8, ["text", "indexes"]),
          renderSlot(_ctx.$slots, "default")
        ], 8, _hoisted_2$9)
      ]);
    };
  }
});
const _hoisted_1$b = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createBaseVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M15 3C15 1.89543 14.1046 1 13 1H3C1.89543 1 1 1.89543 1 3V4H15V3Z",
  fill: "#D0D2E0",
  class: "icon-light"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M1 4V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V4M1 4V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V4M1 4H15M10 8L11.5 9.5L10 11M6 8L4.5 9.5L6 11",
  stroke: "#1B1E2E",
  class: "icon-dark",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5$5 = [
  _hoisted_2$8,
  _hoisted_3$6,
  _hoisted_4$5
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_5$5);
}
const __unplugin_components_0 = { name: "cy-code-editor_x16", render: render$3 };
const _hoisted_1$a = { class: "w-full p-24px sm:min-w-640px" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: emits }) {
    const props = __props;
    gql`
fragment SpecPatternModal on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
}
`;
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$H, {
        class: "transition-all transition duration-200",
        variant: "bare",
        title: unref(t)("components.specPatternModal.title"),
        "model-value": __props.show,
        "data-cy": "spec-pattern-modal",
        "help-link": "https://on.cypress.io/test-type-options",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => emits("close"))
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$a, [
            createVNode(_sfc_main$F, {
              gql: props.gql,
              class: "border-px rounded border-gray-100"
            }, null, 8, ["gql"])
          ]),
          createVNode(StandardModalFooter, { class: "flex gap-16px items-center" }, {
            default: withCtx(() => [
              createVNode(_sfc_main$G, {
                gql: props.gql
              }, {
                default: withCtx(({ onClick }) => [
                  createVNode(_sfc_main$w, {
                    size: "lg",
                    "data-cy": "open-config-file",
                    onClick
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                    ]),
                    default: withCtx(() => [
                      createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              }, 8, ["gql"]),
              createVNode(_sfc_main$w, {
                variant: "outline",
                size: "lg",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("components.modal.dismiss")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title", "model-value"]);
    };
  }
});
const _hoisted_1$9 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142L13.6834 3.11839L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001Z",
  stroke: "black",
  "stroke-opacity": "0.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$5 = ["id"];
const _hoisted_4$4 = /* @__PURE__ */ createBaseVNode("rect", {
  fill: "white",
  x: "0.606445",
  y: "7.63281",
  width: "5",
  height: "7"
}, null, -1);
const _hoisted_5$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M2.69045 12.1134L4.5 10.6328V13.0004H3.00708C2.5372 13.0004 2.32679 12.411 2.69045 12.1134Z" }, null, -1);
const _hoisted_6$4 = [
  _hoisted_4$4,
  _hoisted_5$4
];
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2.69045 12.1134L4.5 10.6328V13.0004H3.00708C2.5372 13.0004 2.32679 12.411 2.69045 12.1134Z",
  fill: "#DB7903"
}, null, -1);
const _hoisted_8$2 = ["mask"];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, [
    _hoisted_2$7,
    createBaseVNode("mask", {
      id: _ctx.idMap["path-2-outside-1_17851_4400"],
      maskUnits: "userSpaceOnUse",
      x: "0.606445",
      y: "7.63281",
      width: "5",
      height: "7",
      fill: "black"
    }, _hoisted_6$4, 8, _hoisted_3$5),
    _hoisted_7$3,
    createBaseVNode("path", {
      d: "M4.5 10.6328H5.5V8.52249L3.86674 9.85887L4.5 10.6328ZM2.69045 12.1134L3.32371 12.8874L2.69045 12.1134ZM4.5 13.0004V14.0004H5.5V13.0004H4.5ZM3.86674 9.85887L2.05719 11.3395L3.32371 12.8874L5.13326 11.4068L3.86674 9.85887ZM3.00708 14.0004H4.5V12.0004H3.00708V14.0004ZM3.5 10.6328V13.0004H5.5V10.6328H3.5ZM2.05719 11.3395C0.966199 12.2322 1.59743 14.0004 3.00708 14.0004V12.0004C3.47696 12.0004 3.68738 12.5898 3.32371 12.8874L2.05719 11.3395Z",
      fill: "#BD5800",
      mask: "url(#" + _ctx.idMap["path-2-outside-1_17851_4400"] + ")"
    }, null, 8, _hoisted_8$2)
  ]);
}
const LowRateIcon = { name: "cy-rate-low_x16", render: render$2, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "path-2-outside-1_17851_4400": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$8 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142L13.6834 3.11839L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001Z",
  stroke: "black",
  "stroke-opacity": "0.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$4 = ["id"];
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("rect", {
  fill: "white",
  x: "0.606445",
  y: "4.35938",
  width: "9",
  height: "10"
}, null, -1);
const _hoisted_5$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M2.69045 12.1129L8.5 7.35938V12.9999H3.00708C2.5372 12.9999 2.32679 12.4105 2.69045 12.1129Z" }, null, -1);
const _hoisted_6$3 = [
  _hoisted_4$3,
  _hoisted_5$3
];
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M2.69045 12.1129L8.5 7.35938V12.9999H3.00708C2.5372 12.9999 2.32679 12.4105 2.69045 12.1129Z",
  fill: "#BD5800"
}, null, -1);
const _hoisted_8$1 = ["mask"];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, [
    _hoisted_2$6,
    createBaseVNode("mask", {
      id: _ctx.idMap["path-2-outside-1_17851_4763"],
      maskUnits: "userSpaceOnUse",
      x: "0.606445",
      y: "4.35938",
      width: "9",
      height: "10",
      fill: "black"
    }, _hoisted_6$3, 8, _hoisted_3$4),
    _hoisted_7$2,
    createBaseVNode("path", {
      d: "M8.5 7.35938H9.5V5.24905L7.86674 6.58544L8.5 7.35938ZM2.69045 12.1129L3.32371 12.8869H3.32371L2.69045 12.1129ZM8.5 12.9999V13.9999H9.5V12.9999H8.5ZM7.86674 6.58544L2.05719 11.339L3.32371 12.8869L9.13326 8.13331L7.86674 6.58544ZM3.00708 13.9999H8.5V11.9999H3.00708V13.9999ZM7.5 7.35938V12.9999H9.5V7.35938H7.5ZM2.05719 11.339C0.966209 12.2317 1.59742 13.9999 3.00708 13.9999V11.9999C3.47697 11.9999 3.68737 12.5893 3.32371 12.8869L2.05719 11.339Z",
      fill: "#963F00",
      mask: "url(#" + _ctx.idMap["path-2-outside-1_17851_4763"] + ")"
    }, null, 8, _hoisted_8$1)
  ]);
}
const MediumRateIcon = { name: "cy-rate-medium_x16", render: render$1, data() {
  const __randId = () => Math.random().toString(36).substr(2, 10);
  const idMap = { "path-2-outside-1_17851_4763": "uicons-" + __randId() };
  return { idMap };
} };
const _hoisted_1$7 = {
  height: "1em",
  width: "1em",
  style: { "min-width": "16px", "min-height": "16px" },
  viewBox: "0 0 17 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M13.3668 2.73142L13.3668 2.73142L2.37382 11.7262C1.64649 12.3213 2.06732 13.5001 3.00708 13.5001H13.5C14.3284 13.5001 15 12.8286 15 12.0001V3.50536C15 2.66171 14.0197 2.19718 13.3668 2.73142Z",
  fill: "#963F00",
  stroke: "#BD5800",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$3);
}
const HighRateIcon = { name: "cy-rate-high_x16", render };
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-gray-50 rounded-[20px] h-15px w-full animate-pulse",
  "data-cy": "flaky-specsummary-loading-1"
}, null, -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("div", {
  class: "bg-gray-50 rounded-[20px] h-15px w-full animate-pulse",
  "data-cy": "flaky-specsummary-loading-2"
}, null, -1);
const _hoisted_3$2 = { class: "flex flex-row w-full text-size-14px justify-center items-center" };
const _hoisted_4$2 = {
  class: "ml-4 text-gray-800",
  "data-cy": "flaky-rate"
};
const _hoisted_5$2 = { class: "flex flex-row text-gray-700 text-size-14px items-center" };
const _hoisted_6$2 = { "data-cy": "flaky-runs" };
const _hoisted_7$1 = { "data-cy": "last-flaky" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  props: {
    specName: null,
    specExtension: null,
    severity: null,
    totalFlakyRuns: null,
    totalRuns: null,
    runsSinceLastFlake: null
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const SEVERITIES = {
      LOADING: {
        accentClass: "border-t-orange-400",
        textClass: null,
        label: null,
        icon: null
      },
      LOW: {
        accentClass: "border-t-orange-400",
        textClass: "text-orange-400",
        label: t("specPage.flaky.severityLow"),
        icon: LowRateIcon
      },
      MEDIUM: {
        accentClass: "border-t-orange-500",
        textClass: "text-orange-500",
        label: t("specPage.flaky.severityMedium"),
        icon: MediumRateIcon
      },
      HIGH: {
        accentClass: "border-t-orange-600",
        textClass: "text-orange-600",
        label: t("specPage.flaky.severityHigh"),
        icon: HighRateIcon
      }
    };
    const flakyRate = computed(() => {
      if (props.totalFlakyRuns <= 0 || props.totalRuns <= 0) {
        return 0;
      }
      const rawRate = props.totalFlakyRuns / props.totalRuns * 100;
      if (rawRate > 99 && rawRate < 100) {
        return 99;
      }
      return Math.ceil(rawRate);
    });
    const severity = computed(() => {
      var _a;
      return SEVERITIES[(_a = props.severity) == null ? void 0 : _a.toUpperCase()] || SEVERITIES.LOADING;
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i_cy_dot_solid_x4 = __unplugin_components_0$1;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["border-t-4px min-w-300px w-full max-w-400px grid p-4 gap-4 grid-cols-1 justify-items-center", unref(severity).accentClass]),
        "data-cy": "flaky-spec-summary"
      }, [
        createVNode(_sfc_main$j, {
          "spec-file-name": __props.specName,
          "spec-file-extension": __props.specExtension
        }, null, 8, ["spec-file-name", "spec-file-extension"]),
        unref(severity) === SEVERITIES.LOADING ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _hoisted_1$6,
          _hoisted_2$4
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createBaseVNode("div", _hoisted_3$2, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(severity).icon))),
            createBaseVNode("span", {
              class: normalizeClass(["font-medium ml-2", unref(severity).textClass])
            }, toDisplayString((_a = unref(severity)) == null ? void 0 : _a.label), 3),
            createBaseVNode("span", _hoisted_4$2, toDisplayString(unref(t)("specPage.flaky.flakyRate", [unref(flakyRate)])), 1)
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createBaseVNode("span", _hoisted_6$2, toDisplayString(unref(t)("specPage.flaky.flakyRuns", { count: __props.totalFlakyRuns, flakyRuns: __props.totalFlakyRuns, totalRuns: __props.totalRuns })), 1),
            createVNode(_component_i_cy_dot_solid_x4, {
              width: "4",
              height: "4",
              class: "mx-2 icon-light-gray-200"
            }),
            createBaseVNode("span", _hoisted_7$1, toDisplayString(unref(t)("specPage.flaky.lastFlaky", { count: __props.runsSinceLastFlake, runsSinceLastFlake: __props.runsSinceLastFlake })), 1)
          ])
        ], 64))
      ], 2);
    };
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  props: {
    projectId: null,
    specName: null,
    specExtension: null,
    specPath: null,
    fromBranch: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment FlakySpecSummaryQueryData on Query {
  cloudSpecByPath(projectSlug: $projectId, specPath: $specPath) {
    __typename
    ... on CloudProjectSpec {
      id
      flakyStatus(fromBranch: $fromBranch, flakyRunsWindow: 50) {
        __typename
        ... on CloudProjectSpecFlakyStatus {
          severity
          flakyRuns
          flakyRunsWindow
          lastFlaky
        }
      }
    }
  }
}
`;
    gql`
query FlakySpecSummaryQuery($projectId: String!, $specPath: String!, $fromBranch: String!) {
  ...FlakySpecSummaryQueryData
}
`;
    gql`
mutation PurgeCloudSpecCache ($projectSlug: String!, $specPaths: [String!]!) {
  purgeCloudSpecByPathCache(projectSlug: $projectSlug, specPaths: $specPaths)
}
`;
    const variables = computed(() => {
      return {
        projectId: props.projectId,
        specPath: props.specPath,
        fromBranch: props.fromBranch
      };
    });
    const query = useQuery({ query: FlakySpecSummaryQueryDocument, variables, pause: true });
    const purgeCloudSpecCacheMutation = useMutation(PurgeCloudSpecCacheDocument);
    const flakyStatus = computed(() => {
      var _a, _b, _c, _d, _e;
      if (((_b = (_a = query.data.value) == null ? void 0 : _a.cloudSpecByPath) == null ? void 0 : _b.__typename) === "CloudProjectSpec" && ((_e = (_d = (_c = query.data.value) == null ? void 0 : _c.cloudSpecByPath) == null ? void 0 : _d.flakyStatus) == null ? void 0 : _e.__typename) === "CloudProjectSpecFlakyStatus") {
        return query.data.value.cloudSpecByPath.flakyStatus;
      }
      return null;
    });
    onBeforeMount(async () => {
      await purgeCloudSpecCacheMutation.executeMutation({ projectSlug: props.projectId, specPaths: [props.specPath] });
      await query.executeQuery({ requestPolicy: "network-only" });
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return openBlock(), createBlock(_sfc_main$a, {
        "spec-name": __props.specName,
        "spec-extension": __props.specExtension,
        severity: (_b = (_a = unref(flakyStatus)) == null ? void 0 : _a.severity) != null ? _b : "NONE",
        "total-runs": (_d = (_c = unref(flakyStatus)) == null ? void 0 : _c.flakyRunsWindow) != null ? _d : 0,
        "total-flaky-runs": (_f = (_e = unref(flakyStatus)) == null ? void 0 : _e.flakyRuns) != null ? _f : 0,
        "runs-since-last-flake": (_h = (_g = unref(flakyStatus)) == null ? void 0 : _g.lastFlaky) != null ? _h : 0
      }, null, 8, ["spec-name", "spec-extension", "severity", "total-runs", "total-flaky-runs", "runs-since-last-flake"]);
    };
  }
});
const statusClassesObject = {
  disabled: "bg-gray-50 text-gray-500",
  error: "bg-error-100 text-error-600",
  skipped: "bg-gray-100 text-gray-700",
  success: "bg-success-100 text-success-600",
  warning: "bg-warning-100 text-warning-600"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    status: null
  },
  setup(__props) {
    const statusClasses = statusClassesObject;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["rounded mx-1 text-sm px-1 inline-block whitespace-nowrap", unref(statusClasses)[__props.status || ""]])
      }, toDisplayString(__props.label), 3);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$8, {
        label: unref(t)("specPage.flaky.badgeLabel"),
        status: "warning",
        class: "font-bold uppercase",
        "data-cy": "flaky-badge"
      }, null, 8, ["label"]);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  props: {
    projectGql: null,
    specGql: null,
    cloudSpecGql: null
  },
  setup(__props) {
    const props = __props;
    gql`
fragment FlakyInformationProject on CurrentProject {
  id
  projectId
  branch
}
`;
    gql`
fragment FlakyInformationSpec on Spec {
  id
  relative
  fileName
  specFileExtension
}
`;
    gql`
fragment FlakyInformationCloudSpec on RemoteFetchableCloudProjectSpecResult {
  id
  data {
    ... on CloudProjectSpec {
      id
      isConsideredFlaky(fromBranch: $fromBranch)
      flakyStatus(fromBranch: $fromBranch, flakyRunsWindow: 50) {
        __typename
        ... on CloudProjectSpecFlakyStatus {
          dashboardUrl
        }
      }
    }
  }
}
`;
    const isFlaky = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = props.cloudSpecGql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" && !!((_d = (_c = props.cloudSpecGql) == null ? void 0 : _c.data) == null ? void 0 : _d.isConsideredFlaky);
    });
    const cloudUrl = computed(() => {
      var _a, _b, _c;
      const cloudSpec = ((_b = (_a = props.cloudSpecGql) == null ? void 0 : _a.data) == null ? void 0 : _b.__typename) === "CloudProjectSpec" ? props.cloudSpecGql.data : null;
      const flakyStatus = ((_c = cloudSpec == null ? void 0 : cloudSpec.flakyStatus) == null ? void 0 : _c.__typename) === "CloudProjectSpecFlakyStatus" ? cloudSpec.flakyStatus : null;
      return getUrlWithParams({
        url: (flakyStatus == null ? void 0 : flakyStatus.dashboardUrl) || "#",
        params: {
          utm_medium: "Specs Flake Annotation Badge",
          utm_campaign: "Flaky"
        }
      });
    });
    return (_ctx, _cache) => {
      return unref(isFlaky) ? (openBlock(), createBlock(_sfc_main$C, {
        key: 0,
        placement: "top",
        "is-interactive": true,
        class: "h-16px",
        "hide-delay": 0,
        distance: 10,
        style: { "width": "fit-content" }
      }, {
        popper: withCtx(({ shown }) => {
          var _a, _b;
          return [
            shown && ((_a = props.projectGql) == null ? void 0 : _a.projectId) && ((_b = props.specGql) == null ? void 0 : _b.relative) ? (openBlock(), createBlock(_sfc_main$A, {
              key: 0,
              href: unref(cloudUrl),
              class: "hocus:no-underline"
            }, {
              default: withCtx(() => {
                var _a2, _b2, _c, _d, _e;
                return [
                  createVNode(_sfc_main$9, {
                    "project-id": props.projectGql.projectId,
                    "from-branch": ((_a2 = props.projectGql) == null ? void 0 : _a2.branch) || "",
                    "spec-path": props.specGql.relative,
                    "spec-name": (_c = (_b2 = props.specGql) == null ? void 0 : _b2.fileName) != null ? _c : "",
                    "spec-extension": (_e = (_d = props.specGql) == null ? void 0 : _d.specFileExtension) != null ? _e : ""
                  }, null, 8, ["project-id", "from-branch", "spec-path", "spec-name", "spec-extension"])
                ];
              }),
              _: 1
            }, 8, ["href"])) : createCommentVNode("", true)
          ];
        }),
        default: withCtx(() => [
          createVNode(_sfc_main$A, {
            href: unref(cloudUrl),
            class: "hocus:no-underline"
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$7)
            ]),
            _: 1
          }, 8, ["href"])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
gql`
mutation CloudData_Refetch ($ids: [ID!]!) {
  loadRemoteFetchables(ids: $ids){
    id
    fetchingStatus
  }
}
`;
function useCloudSpecData(isProjectDisconnected, isOffline, projectId, mostRecentUpdate, displayedSpecs, allSpecs) {
  const refetchMutation = useMutation(CloudData_RefetchDocument);
  const isCloudSpecOlderThan = (item, comparisonDttm) => {
    var _a, _b;
    if (((_a = item.data) == null ? void 0 : _a.__typename) !== "CloudProjectSpec" && ((_b = item.data) == null ? void 0 : _b.__typename) !== "CloudProjectSpecNotFound") {
      return false;
    }
    if (!item.data.retrievedAt || !comparisonDttm) {
      return false;
    }
    return new Date(comparisonDttm).getTime() > new Date(item.data.retrievedAt).getTime();
  };
  const shouldRefetch = (item) => {
    if (isOffline.value) {
      return false;
    }
    if (item.fetchingStatus === "NOT_FETCHED" || item.fetchingStatus === void 0) {
      return true;
    }
    if (isCloudSpecOlderThan(item, mostRecentUpdate.value)) {
      return true;
    }
    return false;
  };
  const fetchDisplayedCloudData = async () => {
    var _a;
    const cloudSpecIdsToRefetch = (_a = displayedSpecs.value.map((spec) => spec == null ? void 0 : spec.cloudSpec).filter((cloudSpec) => Boolean(cloudSpec && shouldRefetch(cloudSpec))).map((cloudSpec) => cloudSpec.id)) != null ? _a : [];
    if (!isProjectDisconnected.value && !refetchMutation.fetching.value && cloudSpecIdsToRefetch.length > 0) {
      await refetchMutation.executeMutation({ ids: cloudSpecIdsToRefetch });
    }
  };
  const refetchFailedCloudData = async () => {
    var _a;
    const latestRunsIds = (_a = allSpecs.map((s) => s == null ? void 0 : s.cloudSpec).filter((cloudSpec) => Boolean((cloudSpec == null ? void 0 : cloudSpec.fetchingStatus) === "ERRORED")).map((cloudSpec) => cloudSpec.id)) != null ? _a : [];
    await refetchMutation.executeMutation({ ids: [...latestRunsIds] });
  };
  const displayedSpecIds = computed(() => displayedSpecs.value.map((v) => {
    var _a;
    return (_a = v == null ? void 0 : v.cloudSpec) == null ? void 0 : _a.id;
  }).filter((id) => !!id).join("|"));
  const debouncedDisplayedSpecIds = useDebounce(displayedSpecIds, 200);
  watch(
    [debouncedDisplayedSpecIds, isOffline, isProjectDisconnected, mostRecentUpdate],
    () => {
      fetchDisplayedCloudData();
    },
    { flush: "post" }
  );
  return {
    fetchDisplayedCloudData,
    refetchFailedCloudData
  };
}
gql`
mutation RequestAccessComposable_RequestAccess( $projectId: String! ) {
  cloudProjectRequestAccess(projectSlug: $projectId) {
    __typename
    ... on CloudProjectUnauthorized {
      message
      hasRequestedAccess
    }
  }
}
`;
function useRequestAccess() {
  const requestAccessMutation = useMutation(RequestAccessComposable_RequestAccessDocument);
  return async function requestAccess(projectId) {
    if (projectId) {
      await requestAccessMutation.executeMutation({ projectId });
    }
  };
}
const _hoisted_1$5 = ["data-cy"];
const _hoisted_2$3 = {
  class: "font-normal text-sm",
  "data-cy": "run-all-specs-text"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    specNumber: null,
    directory: null
  },
  emits: ["runAllSpecs"],
  setup(__props, { emit: emits }) {
    const { t } = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "h-full space-x-2 ml-24px text-gray-600 group items-center whitespace-nowrap hocus:text-indigo-700",
        "data-cy": `run-all-specs-for-${__props.directory}`,
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emits("runAllSpecs"), ["stop"]))
      }, [
        createVNode(unref(IconActionPlaySmall), {
          size: "16",
          "stroke-color": "gray-300",
          "fill-color": "gray-50",
          "hocus-stroke-color": "indigo-500",
          "hocus-fill-color": "indigo-100",
          "interactive-colors-on-group": "",
          class: "align-text-bottom group-hover: inline-flex",
          "data-cy": "play-button"
        }),
        createBaseVNode("span", _hoisted_2$3, toDisplayString(unref(t)("specPage.runSelectedSpecs", __props.specNumber)), 1)
      ], 8, _hoisted_1$5);
    };
  }
});
const SpecsList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$4 = { class: "p-24px spec-container" };
const _hoisted_2$2 = {
  class: "flex items-center",
  "data-cy": "specs-testing-type-header"
};
const _hoisted_3$1 = { class: "flex items-center justify-between truncate" };
const _hoisted_4$1 = { class: "flex items-center justify-end whitespace-nowrap" };
const _hoisted_5$1 = { class: "hidden items-center justify-end truncate md:flex" };
const _hoisted_6$1 = { class: "ml-2 inline-block" };
const _hoisted_7 = { class: "h-full grid justify-items-end items-center relative" };
const _hoisted_8 = {
  key: 1,
  class: "bg-gray-50 rounded-[20px] h-24px w-full animate-pulse",
  "data-cy": "run-status-dots-loading"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    mostRecentUpdate: { default: null }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    var _a, _b, _c, _d, _e;
    const props = __props;
    const { openLoginConnectModal } = useLoginConnectStore();
    const route = useRoute();
    const { t } = useI18n();
    const isOnline = useOnline();
    const isOffline = ref(false);
    watch(isOnline, (newIsOnlineValue) => isOffline.value = !newIsOnlineValue, { immediate: true });
    const tableGridColumns = "grid-cols-[1fr,135px,130px] md:grid-cols-[1fr,135px,130px,130px] lg:grid-cols-[1fr,160px,160px,180px]";
    const projectConnectionStatus = computed(() => {
      var _a2, _b2, _c2, _d2, _e2, _f, _g, _h;
      if (!props.gql.cloudViewer)
        return "LOGGED_OUT";
      if (!((_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.cloudProject) == null ? void 0 : _b2.__typename))
        return "NOT_CONNECTED";
      if (((_d2 = (_c2 = props.gql.currentProject) == null ? void 0 : _c2.cloudProject) == null ? void 0 : _d2.__typename) === "CloudProjectNotFound")
        return "NOT_FOUND";
      if (((_f = (_e2 = props.gql.currentProject) == null ? void 0 : _e2.cloudProject) == null ? void 0 : _f.__typename) === "CloudProjectUnauthorized") {
        if ((_h = (_g = props.gql.currentProject) == null ? void 0 : _g.cloudProject) == null ? void 0 : _h.hasRequestedAccess) {
          return "ACCESS_REQUESTED";
        }
        return "UNAUTHORIZED";
      }
      return "CONNECTED";
    });
    const cloudProjectType = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.cloudProject) == null ? void 0 : _b2.__typename;
    });
    const hasRequestedAccess = computed(() => {
      return projectConnectionStatus.value === "ACCESS_REQUESTED";
    });
    const requestAccess = useRequestAccess();
    const isGitAvailable = computed(() => {
      var _a2, _b2;
      return !((_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.gitInfo) == null ? void 0 : _a3.statusType) === "noGitInfo";
      })) != null ? _b2 : false);
    });
    const hasCloudErrors = computed(() => {
      var _a2, _b2;
      return (_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs.some((s) => {
        var _a3;
        return ((_a3 = s.cloudSpec) == null ? void 0 : _a3.fetchingStatus) === "ERRORED";
      })) != null ? _b2 : false;
    });
    const shouldShowFetchError = ref(false);
    watch(hasCloudErrors, (wasErrorFound) => shouldShowFetchError.value = wasErrorFound, { immediate: true });
    gql`
subscription SpecsList_GitInfoUpdated {
  gitInfoChange {
    id
    absolute
    gitInfo {
      ...SpecListRow
    }
  }
}
`;
    gql`
fragment SpecsList on Spec {
  id
  name
  specType
  absolute
  baseName
  fileName
  specFileExtension
  fileExtension
  relative
  gitInfo {
    ...SpecListRow
  }
  cloudSpec(name: "cloudSpec") @include(if: $hasBranch) {
    id
    fetchingStatus
    ...AverageDuration
    ...FlakyInformationCloudSpec
    ...RunStatusDots
  }
  ...FlakyInformationSpec
}
`;
    gql`
fragment Specs_SpecsList on Query {
  currentProject {
    id
    projectRoot
    currentTestingType
    cloudProject {
      __typename
      ... on CloudProject {
        id
      }
    }
    specs {
      id
      ...SpecsList
    }
    config
    savedState
    ...SpecPatternModal
    ...FlakyInformationProject
  }
  ...SpecHeaderCloudDataTooltip
  ...SpecsListBanners
}
`;
    useSubscription({ query: SpecsList_GitInfoUpdatedDocument });
    const showSpecPatternModal = ref(false);
    const isSpecNotFound = ref(!!((_a = route.params) == null ? void 0 : _a.unrunnable));
    const cachedSpecs = useCachedSpecs(
      computed(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = props.gql.currentProject) == null ? void 0 : _a2.specs) != null ? _b2 : [];
      })
    );
    const { debouncedSpecFilterModel, specFilterModel } = useSpecFilter((_c = (_b = props.gql.currentProject) == null ? void 0 : _b.savedState) == null ? void 0 : _c.specFilter);
    const specsListInputRef = ref();
    const specsListInputRefFn = () => specsListInputRef;
    function handleClear() {
      var _a2;
      specFilterModel.value = "";
      (_a2 = specsListInputRef.value) == null ? void 0 : _a2.focus();
    }
    const specs = computed(() => {
      const fuzzyFoundSpecs = cachedSpecs.value.map(makeFuzzyFoundSpec);
      if (!(debouncedSpecFilterModel == null ? void 0 : debouncedSpecFilterModel.value)) {
        return fuzzyFoundSpecs;
      }
      return fuzzySortSpecs(fuzzyFoundSpecs, debouncedSpecFilterModel.value);
    });
    const treeExpansionCache = ref(/* @__PURE__ */ new Map());
    watch([() => specFilterModel.value, () => specs.value.length], () => treeExpansionCache.value.clear());
    const collapsible = computed(() => {
      return useCollapsibleTree(
        buildSpecTree(specs.value),
        { dropRoot: true, cache: treeExpansionCache.value }
      );
    });
    const treeSpecList = computed(() => collapsible.value.tree.filter((item) => !item.hidden.value));
    const { containerProps, list, wrapperProps, scrollTo } = useVirtualList(treeSpecList, { itemHeight: 40, overscan: 10 });
    const scrollbarOffset = ref(0);
    useResizeObserver(containerProps.ref, (entries) => {
      const specListContainer = entries == null ? void 0 : entries[0];
      const containerElement = specListContainer == null ? void 0 : specListContainer.target;
      if (containerElement) {
        const displayedScrollbarWidth = containerElement.offsetWidth - containerElement.clientWidth;
        scrollbarOffset.value = displayedScrollbarWidth;
      } else {
        scrollbarOffset.value = 0;
      }
    });
    watch(() => debouncedSpecFilterModel == null ? void 0 : debouncedSpecFilterModel.value, () => {
      scrollTo(0);
    });
    function getIdIfDirectory(row) {
      if (row.data.isLeaf && row.data) {
        return void 0;
      }
      return `speclist-${row.data.data.relative.replace(row.data.data.baseName, "")}`;
    }
    const isProjectDisconnected = computed(() => {
      var _a2;
      return ((_a2 = props.gql.cloudViewer) == null ? void 0 : _a2.id) === void 0 || cloudProjectType.value !== "CloudProject";
    });
    const displayedSpecs = computed(() => list.value.map((v) => v.data.data));
    const mostRecentUpdateRef = toRef(props, "mostRecentUpdate");
    const { refetchFailedCloudData } = useCloudSpecData(
      isProjectDisconnected,
      isOffline,
      (_d = props.gql.currentProject) == null ? void 0 : _d.projectId,
      mostRecentUpdateRef,
      displayedSpecs,
      ((_e = props.gql.currentProject) == null ? void 0 : _e.specs) || []
    );
    const runAllSpecsStore = useRunAllSpecsStore();
    watch(collapsible, () => {
      runAllSpecsStore.setRunAllSpecsData(collapsible.value.tree);
    }, { immediate: true });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_sfc_main$p, {
          gql: props.gql,
          "is-spec-not-found": isSpecNotFound.value,
          "is-offline": isOffline.value,
          "is-fetch-error": shouldShowFetchError.value,
          "is-project-not-found": unref(cloudProjectType) === "CloudProjectNotFound",
          "is-project-unauthorized": unref(cloudProjectType) === "CloudProjectUnauthorized",
          "has-requested-access": unref(hasRequestedAccess),
          onRefetchFailedCloudData: unref(refetchFailedCloudData)
        }, null, 8, ["gql", "is-spec-not-found", "is-offline", "is-fetch-error", "is-project-not-found", "is-project-unauthorized", "has-requested-access", "onRefetchFailedCloudData"]),
        createVNode(SpecsListHeader, {
          modelValue: unref(specFilterModel),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(specFilterModel) ? specFilterModel.value = $event : null),
          "specs-list-input-ref-fn": specsListInputRefFn,
          class: "pb-32px",
          "result-count": unref(specs).length,
          "spec-count": unref(cachedSpecs).length,
          onShowCreateSpecModal: _cache[1] || (_cache[1] = ($event) => emit("showCreateSpecModal")),
          onShowSpecPatternModal: _cache[2] || (_cache[2] = ($event) => showSpecPatternModal.value = true)
        }, null, 8, ["modelValue", "result-count", "spec-count"]),
        props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$b, {
          key: 0,
          show: showSpecPatternModal.value,
          gql: props.gql.currentProject,
          onClose: _cache[3] || (_cache[3] = ($event) => showSpecPatternModal.value = false)
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
        unref(specs).length ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(["mb-4 grid children:font-medium children:text-gray-800", tableGridColumns]),
          style: normalizeStyle(`padding-right: ${scrollbarOffset.value + 20}px`)
        }, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("span", null, toDisplayString(((_a2 = props.gql.currentProject) == null ? void 0 : _a2.currentTestingType) === "component" ? unref(t)("specPage.componentSpecsHeader") : unref(t)("specPage.e2eSpecsHeader")), 1),
            unref(runAllSpecsStore).isRunAllSpecsAllowed ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              "spec-number": unref(runAllSpecsStore).allSpecsRef.length,
              directory: "all",
              onRunAllSpecs: unref(runAllSpecsStore).runAllSpecs
            }, null, 8, ["spec-number", "onRunAllSpecs"])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(_sfc_main$o, { "is-git-available": unref(isGitAvailable) }, null, 8, ["is-git-available"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_sfc_main$n, {
              gql: props.gql,
              mode: "LATEST_RUNS",
              "data-cy": "latest-runs-header",
              onShowLoginConnect: _cache[4] || (_cache[4] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Latest Runs Tooltip" }))
            }, null, 8, ["gql"])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_sfc_main$n, {
              gql: props.gql,
              mode: "AVG_DURATION",
              "data-cy": "average-duration-header",
              onShowLoginConnect: _cache[5] || (_cache[5] = ($event) => unref(openLoginConnectModal)({ utmMedium: "Specs Average Duration Tooltip" }))
            }, null, 8, ["gql"])
          ])
        ], 4)) : createCommentVNode("", true),
        createBaseVNode("div", mergeProps({
          class: ["pb-32px spec-list-container", unref(specs).length ? "grid" : "hidden"]
        }, unref(containerProps)), [
          createBaseVNode("div", mergeProps(unref(wrapperProps), { class: "divide-y-1 border-gray-50 border-y-1 children:border-gray-50 children:h-40px" }), [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (row) => {
              var _a3, _b2, _c2;
              return openBlock(), createBlock(_sfc_main$e, {
                id: getIdIfDirectory(row),
                key: row.index,
                "data-cy": row.data.isLeaf ? "spec-list-file" : "spec-list-directory",
                "data-cy-row": (_a3 = row.data.data) == null ? void 0 : _a3.baseName,
                "is-leaf": row.data.isLeaf,
                "is-project-connected": unref(projectConnectionStatus) === "CONNECTED",
                "grid-columns": row.data.isLeaf ? tableGridColumns : "grid-cols-[1fr]",
                route: { path: "/specs/runner", query: { file: (_c2 = (_b2 = row.data.data) == null ? void 0 : _b2.relative) == null ? void 0 : _c2.replace(/\\/g, "/") } },
                onToggleRow: row.data.toggle
              }, {
                file: withCtx(() => {
                  var _a4, _b3;
                  return [
                    row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$c, {
                      key: 0,
                      "file-name": ((_a4 = row.data.data) == null ? void 0 : _a4.fileName) || row.data.name,
                      extension: ((_b3 = row.data.data) == null ? void 0 : _b3.specFileExtension) || "",
                      indexes: row.data.highlightIndexes,
                      style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10 + 22}px` })
                    }, {
                      default: withCtx(() => {
                        var _a5;
                        return [
                          createBaseVNode("span", _hoisted_6$1, [
                            createVNode(_sfc_main$6, {
                              "project-gql": props.gql.currentProject,
                              "spec-gql": row.data.data,
                              "cloud-spec-gql": (_a5 = row.data.data) == null ? void 0 : _a5.cloudSpec
                            }, null, 8, ["project-gql", "spec-gql", "cloud-spec-gql"])
                          ])
                        ];
                      }),
                      _: 2
                    }, 1032, ["file-name", "extension", "indexes", "style"])) : (openBlock(), createBlock(_sfc_main$d, {
                      key: 1,
                      name: row.data.name,
                      expanded: unref(treeSpecList)[row.index].expanded.value,
                      depth: row.data.depth - 2,
                      style: normalizeStyle({ paddingLeft: `${(row.data.depth - 2) * 10}px` }),
                      indexes: row.data.highlightIndexes,
                      "aria-controls": getIdIfDirectory(row),
                      onToggle: () => row.data.toggle()
                    }, {
                      default: withCtx(() => [
                        unref(runAllSpecsStore).isRunAllSpecsAllowed ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          directory: row.data.name,
                          class: "opacity-0 run-all",
                          "spec-number": unref(runAllSpecsStore).directoryChildren[row.data.id].length,
                          onRunAllSpecs: () => unref(runAllSpecsStore).runSelectedSpecs(row.data.id)
                        }, null, 8, ["directory", "spec-number", "onRunAllSpecs"])) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["name", "expanded", "depth", "style", "indexes", "aria-controls", "onToggle"]))
                  ];
                }),
                "git-info": withCtx(() => {
                  var _a4, _b3;
                  return [
                    row.data.isLeaf && ((_a4 = row.data.data) == null ? void 0 : _a4.gitInfo) ? (openBlock(), createBlock(_sfc_main$k, {
                      key: 0,
                      gql: (_b3 = row.data.data) == null ? void 0 : _b3.gitInfo
                    }, null, 8, ["gql"])) : createCommentVNode("", true)
                  ];
                }),
                "connect-button": withCtx(({ utmMedium }) => {
                  var _a4, _b3;
                  return [
                    unref(projectConnectionStatus) !== "CONNECTED" && row.data.isLeaf && row.data.data && (((_a4 = row.data.data.cloudSpec) == null ? void 0 : _a4.data) || ((_b3 = row.data.data.cloudSpec) == null ? void 0 : _b3.fetchingStatus) !== "FETCHING") ? (openBlock(), createBlock(_sfc_main$m, {
                      key: 0,
                      gql: props.gql,
                      "project-connection-status": unref(projectConnectionStatus),
                      onShowLoginConnect: ($event) => unref(openLoginConnectModal)({ utmMedium }),
                      onRequestAccess: _cache[6] || (_cache[6] = ($event) => {
                        var _a5, _b4;
                        return unref(requestAccess)((_b4 = (_a5 = props.gql) == null ? void 0 : _a5.currentProject) == null ? void 0 : _b4.projectId);
                      })
                    }, null, 8, ["gql", "project-connection-status", "onShowLoginConnect"])) : createCommentVNode("", true)
                  ];
                }),
                "latest-runs": withCtx(() => {
                  var _a4, _b3, _c3, _d2, _e2;
                  return [
                    createBaseVNode("div", _hoisted_7, [
                      row.data.isLeaf && row.data.data && (((_a4 = row.data.data.cloudSpec) == null ? void 0 : _a4.data) || ((_b3 = row.data.data.cloudSpec) == null ? void 0 : _b3.fetchingStatus) !== "FETCHING") ? (openBlock(), createBlock(_sfc_main$h, {
                        key: 0,
                        gql: (_c3 = row.data.data.cloudSpec) != null ? _c3 : null,
                        "spec-file-extension": row.data.data.specFileExtension,
                        "spec-file-name": row.data.data.fileName
                      }, null, 8, ["gql", "spec-file-extension", "spec-file-name"])) : row.data.isLeaf && ((_e2 = (_d2 = row.data.data) == null ? void 0 : _d2.cloudSpec) == null ? void 0 : _e2.fetchingStatus) === "FETCHING" ? (openBlock(), createElementBlock("div", _hoisted_8)) : createCommentVNode("", true)
                    ])
                  ];
                }),
                "average-duration": withCtx(() => {
                  var _a4, _b3;
                  return [
                    row.data.isLeaf ? (openBlock(), createBlock(_sfc_main$g, {
                      key: 0,
                      gql: (_b3 = (_a4 = row.data.data) == null ? void 0 : _a4.cloudSpec) != null ? _b3 : null
                    }, null, 8, ["gql"])) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["id", "data-cy", "data-cy-row", "is-leaf", "is-project-connected", "grid-columns", "route", "onToggleRow"]);
            }), 128))
          ], 16)
        ], 16),
        withDirectives(createVNode(_sfc_main$I, {
          "search-term": unref(specFilterModel),
          message: unref(t)("specPage.noResultsMessage"),
          class: "mt-56px",
          onClear: handleClear
        }, null, 8, ["search-term", "message"]), [
          [vShow, !unref(specs).length]
        ])
      ]);
    };
  }
});
const SpecsList = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-a28be748"]]);
const _hoisted_1$3 = { class: "border-t-1 mt-32px text-center pt-32px" };
const _hoisted_2$1 = {
  "data-cy": "no-specs-message",
  class: "leading-normal mb-16px text-gray-600 text-16px"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CreateSpecContent on Query {
  ...CreateSpecCards
  currentProject {
    id
    codeGenGlobs {
      id
      component
    }
    ...SpecPatternModal
  }
}
`;
    const filteredGenerators = getFilteredGeneratorList(props.gql.currentProject);
    const selectSpecCard = (id) => {
      emit("showCreateSpecModal", id);
    };
    const showSpecPatternModal = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        props.gql.currentProject ? (openBlock(), createBlock(_sfc_main$b, {
          key: 0,
          show: showSpecPatternModal.value,
          gql: props.gql.currentProject,
          onClose: _cache[0] || (_cache[0] = ($event) => showSpecPatternModal.value = false)
        }, null, 8, ["show", "gql"])) : createCommentVNode("", true),
        createVNode(_sfc_main$J, {
          "data-cy": "create-spec-page-cards",
          gql: props.gql,
          generators: unref(filteredGenerators),
          onSelect: selectSpecCard
        }, null, 8, ["gql", "generators"]),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("p", _hoisted_2$1, toDisplayString(unref(t)("createSpec.noSpecsMessage")), 1),
          createVNode(_sfc_main$w, {
            "data-cy": "view-spec-pattern",
            variant: "outline",
            "prefix-icon-class": "icon-light-gray-50 icon-dark-gray-400",
            "prefix-icon": unref(SettingsIcon),
            class: "mx-auto duration-300 hocus:ring-gray-50 hocus:border-gray-200",
            onClick: _cache[1] || (_cache[1] = ($event) => showSpecPatternModal.value = true)
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(t)("createSpec.viewSpecPatternButton")), 1)
            ]),
            _: 1
          }, 8, ["prefix-icon"])
        ])
      ], 64);
    };
  }
});
const _hoisted_1$2 = { class: "flex mt-32px gap-16px justify-center" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    const { t } = useI18n();
    gql`
fragment CustomPatternNoSpecContent on CurrentProject {
  id
  ...SpecPatterns
  ...OpenConfigFileInIDE
  configFileAbsolutePath
}
`;
    return (_ctx, _cache) => {
      const _component_i_cy_code_editor_x16 = __unplugin_components_0;
      const _component_i_cy_add_large_x16 = __unplugin_components_1;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$F, {
          gql: props.gql
        }, null, 8, ["gql"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(_sfc_main$G, {
            gql: props.gql
          }, {
            default: withCtx(({ onClick }) => [
              createVNode(_sfc_main$w, {
                size: "lg",
                onClick
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_i_cy_code_editor_x16, { class: "icon-dark-white" })
                ]),
                default: withCtx(() => [
                  createTextVNode(" " + toDisplayString(unref(t)("createSpec.updateSpecPattern")), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])
            ]),
            _: 1
          }, 8, ["gql"]),
          createVNode(_sfc_main$w, {
            size: "lg",
            variant: "outline",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("showCreateSpecModal"))
          }, {
            prefix: withCtx(() => [
              createVNode(_component_i_cy_add_large_x16, { class: "icon-dark-gray-500" })
            ]),
            default: withCtx(() => [
              createTextVNode(" " + toDisplayString(unref(t)("createSpec.newSpec")), 1)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "mx-auto text-center max-w-642px py-40px"
};
const _hoisted_2 = { class: "m-x-auto max-w-600px" };
const _hoisted_3 = {
  "data-cy": "create-spec-page-title",
  class: "mb-12px text-gray-900 text-32px"
};
const _hoisted_4 = {
  "data-cy": "create-spec-page-description",
  class: "leading-normal mb-32px text-gray-600 text-18px"
};
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    gql: null,
    title: null,
    isDefaultSpecPattern: { type: Boolean }
  },
  emits: ["showCreateSpecModal"],
  setup(__props, { emit }) {
    const props = __props;
    gql`
fragment NoSpecsPage on Query {
  ...CreateSpecCards
  ...ChooseExternalEditor
  currentProject {
    id
    codeGenGlobs {
      id
      component
    }
    currentTestingType
    configFileAbsolutePath
    ...CustomPatternNoSpecContent
    ...OpenConfigFileInIDE
  }
}
`;
    const showCreateSpecModal = (id) => {
      emit("showCreateSpecModal", id);
    };
    const descriptionKeyPath = computed(() => {
      var _a;
      return props.isDefaultSpecPattern ? `createSpec.page.defaultPatternNoSpecs.${(_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType}.description` : "createSpec.page.customPatternNoSpecs.description";
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_i18n_t = resolveComponent("i18n-t");
      return ((_a = props.gql.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h1", _hoisted_3, toDisplayString(props.title), 1),
          createBaseVNode("p", _hoisted_4, [
            createVNode(_component_i18n_t, {
              scope: "global",
              keypath: unref(descriptionKeyPath)
            }, {
              default: withCtx(() => [
                props.gql.currentProject.configFileAbsolutePath ? (openBlock(), createBlock(_sfc_main$G, {
                  key: 0,
                  gql: props.gql.currentProject
                }, {
                  default: withCtx(({ onClick }) => [
                    createBaseVNode("button", {
                      class: "text-purple-500 hocus-link-default",
                      "data-cy": "no-specs-specPattern",
                      onClick
                    }, " specPattern ", 8, _hoisted_5)
                  ]),
                  _: 1
                }, 8, ["gql"])) : (openBlock(), createElementBlock("span", _hoisted_6, "specPattern"))
              ]),
              _: 1
            }, 8, ["keypath"])
          ])
        ]),
        props.isDefaultSpecPattern ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          gql: props.gql,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"])) : (openBlock(), createBlock(_sfc_main$2, {
          key: 1,
          gql: props.gql.currentProject,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql"]))
      ])) : createCommentVNode("", true);
    };
  }
});
const block0 = {};
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    gql`
query SpecsPageContainer_BranchInfo {
  currentProject {
    id
    branch
    projectId
  }
}
`;
    gql`
query SpecsPageContainer($fromBranch: String!, $hasBranch: Boolean!) {
  ...Specs_SpecsList
  ...NoSpecsPage
  ...CreateSpecModal
  currentProject {
    id
    isDefaultSpecPattern
  }
}
`;
    gql`
subscription SpecsPageContainer_specsChange($fromBranch: String!, $hasBranch: Boolean!) {
  specsChange {
    id
    specs {
      id
      ...SpecsList
    }
  }
}
`;
    gql`
subscription SpecsPageContainer_specListPolling($fromBranch: String, $projectId: String) {
  startPollingForSpecs(branchName: $fromBranch, projectId: $projectId)
}
`;
    const branchInfo = useQuery({ query: SpecsPageContainer_BranchInfoDocument });
    const variables = computed(() => {
      var _a, _b, _c;
      const fromBranch = (_c = (_b = (_a = branchInfo.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.branch) != null ? _c : "";
      const hasBranch = Boolean(fromBranch);
      return { fromBranch, hasBranch };
    });
    const pollingVariables = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const fromBranch = (_c = (_b = (_a = branchInfo.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.branch) != null ? _c : null;
      const projectId = (_f = (_e = (_d = branchInfo.data.value) == null ? void 0 : _d.currentProject) == null ? void 0 : _e.projectId) != null ? _f : null;
      return { fromBranch, projectId };
    });
    useSubscription({
      query: SpecsPageContainer_SpecsChangeDocument,
      variables
    });
    const mostRecentUpdate = ref(null);
    const updateMostRecentUpdate = (_, reportedUpdate) => {
      var _a;
      mostRecentUpdate.value = (_a = reportedUpdate == null ? void 0 : reportedUpdate.startPollingForSpecs) != null ? _a : null;
    };
    useSubscription({
      query: SpecsPageContainer_SpecListPollingDocument,
      variables: pollingVariables
    }, updateMostRecentUpdate);
    const query = useQuery({
      query: SpecsPageContainerDocument,
      variables
    });
    const isDefaultSpecPattern = computed(() => {
      var _a, _b;
      return !!((_b = (_a = query.data.value) == null ? void 0 : _a.currentProject) == null ? void 0 : _b.isDefaultSpecPattern);
    });
    const title = computed(() => {
      return isDefaultSpecPattern.value ? t("createSpec.page.defaultPatternNoSpecs.title") : t("createSpec.page.customPatternNoSpecs.title");
    });
    const modalIsShown = ref(false);
    const generator = ref();
    const showCreateSpecModal = (generatorId) => {
      modalIsShown.value = true;
      generator.value = generatorId || null;
    };
    const closeCreateSpecModal = () => {
      modalIsShown.value = false;
      generator.value = null;
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return unref(query).data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        ((_a = unref(query).data.value.currentProject) == null ? void 0 : _a.currentTestingType) ? (openBlock(), createBlock(_sfc_main$K, {
          key: generator.value,
          "initial-generator": generator.value,
          show: modalIsShown.value,
          gql: unref(query).data.value,
          onClose: closeCreateSpecModal
        }, null, 8, ["initial-generator", "show", "gql"])) : createCommentVNode("", true),
        ((_b = unref(query).data.value.currentProject) == null ? void 0 : _b.specs.length) ? (openBlock(), createBlock(SpecsList, {
          key: 1,
          gql: unref(query).data.value,
          "most-recent-update": mostRecentUpdate.value,
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "most-recent-update"])) : (openBlock(), createBlock(_sfc_main$1, {
          key: 2,
          gql: unref(query).data.value,
          title: unref(title),
          "is-default-spec-pattern": unref(isDefaultSpecPattern),
          onShowCreateSpecModal: showCreateSpecModal
        }, null, 8, ["gql", "title", "is-default-spec-pattern"]))
      ])) : createCommentVNode("", true);
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main);
export {
  _sfc_main as default
};
