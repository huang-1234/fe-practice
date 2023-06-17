"use strict";
(self["webpackChunkwebpack_zero"] = self["webpackChunkwebpack_zero"] || []).push([["ahooks"],{

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createDeepCompareEffect/index.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createDeepCompareEffect/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDeepCompareEffect: () => (/* binding */ createDeepCompareEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js");


var depsEqual = function (aDeps, bDeps) {
  if (aDeps === void 0) {
    aDeps = [];
  }
  if (bDeps === void 0) {
    bDeps = [];
  }
  return (0,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(aDeps, bDeps);
};
var createDeepCompareEffect = function (hook) {
  return function (effect, deps) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var signalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    if (deps === undefined || !depsEqual(deps, ref.current)) {
      ref.current = deps;
      signalRef.current += 1;
    }
    hook(effect, [signalRef.current]);
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUpdateEffect/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUpdateEffect/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUpdateEffect: () => (/* binding */ createUpdateEffect),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var createUpdateEffect = function (hook) {
  return function (effect, deps) {
    var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // for react-refresh
    hook(function () {
      return function () {
        isMounted.current = false;
      };
    }, []);
    hook(function () {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUpdateEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUseStorageState/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUseStorageState/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUseStorageState: () => (/* binding */ createUseStorageState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");

/* eslint-disable no-empty */




function createUseStorageState(getStorage) {
  function useStorageState(key, options) {
    if (options === void 0) {
      options = {};
    }
    var storage;
    var _a = options.onError,
      onError = _a === void 0 ? function (e) {
        console.error(e);
      } : _a;
    // https://github.com/alibaba/hooks/issues/800
    try {
      storage = getStorage();
    } catch (err) {
      onError(err);
    }
    var serializer = function (value) {
      if (options === null || options === void 0 ? void 0 : options.serializer) {
        return options === null || options === void 0 ? void 0 : options.serializer(value);
      }
      return JSON.stringify(value);
    };
    var deserializer = function (value) {
      if (options === null || options === void 0 ? void 0 : options.deserializer) {
        return options === null || options === void 0 ? void 0 : options.deserializer(value);
      }
      return JSON.parse(value);
    };
    function getStoredValue() {
      try {
        var raw = storage === null || storage === void 0 ? void 0 : storage.getItem(key);
        if (raw) {
          return deserializer(raw);
        }
      } catch (e) {
        onError(e);
      }
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(options === null || options === void 0 ? void 0 : options.defaultValue)) {
        return options === null || options === void 0 ? void 0 : options.defaultValue();
      }
      return options === null || options === void 0 ? void 0 : options.defaultValue;
    }
    var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
        return getStoredValue();
      }), 2),
      state = _b[0],
      setState = _b[1];
    (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      setState(getStoredValue());
    }, [key]);
    var updateState = function (value) {
      var currentState = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value) ? value(state) : value;
      setState(currentState);
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isUndef)(currentState)) {
        storage === null || storage === void 0 ? void 0 : storage.removeItem(key);
      } else {
        try {
          storage === null || storage === void 0 ? void 0 : storage.setItem(key, serializer(currentState));
        } catch (e) {
          console.error(e);
        }
      }
    };
    return [state, (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(updateState)];
  }
  return useStorageState;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCache: () => (/* reexport safe */ _useRequest__WEBPACK_IMPORTED_MODULE_71__.clearCache),
/* harmony export */   configResponsive: () => (/* reexport safe */ _useResponsive__WEBPACK_IMPORTED_MODULE_4__.configResponsive),
/* harmony export */   createUpdateEffect: () => (/* reexport safe */ _createUpdateEffect__WEBPACK_IMPORTED_MODULE_73__.createUpdateEffect),
/* harmony export */   useAntdTable: () => (/* reexport safe */ _useAntdTable__WEBPACK_IMPORTED_MODULE_67__["default"]),
/* harmony export */   useAsyncEffect: () => (/* reexport safe */ _useAsyncEffect__WEBPACK_IMPORTED_MODULE_62__["default"]),
/* harmony export */   useBoolean: () => (/* reexport safe */ _useBoolean__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   useClickAway: () => (/* reexport safe */ _useClickAway__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   useControllableValue: () => (/* reexport safe */ _useControllableValue__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useCookieState: () => (/* reexport safe */ _useCookieState__WEBPACK_IMPORTED_MODULE_43__["default"]),
/* harmony export */   useCountDown: () => (/* reexport safe */ _useCountDown__WEBPACK_IMPORTED_MODULE_52__["default"]),
/* harmony export */   useCounter: () => (/* reexport safe */ _useCounter__WEBPACK_IMPORTED_MODULE_38__["default"]),
/* harmony export */   useCreation: () => (/* reexport safe */ _useCreation__WEBPACK_IMPORTED_MODULE_34__["default"]),
/* harmony export */   useDebounce: () => (/* reexport safe */ _useDebounce__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   useDebounceEffect: () => (/* reexport safe */ _useDebounceEffect__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   useDebounceFn: () => (/* reexport safe */ _useDebounceFn__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   useDeepCompareEffect: () => (/* reexport safe */ _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_60__["default"]),
/* harmony export */   useDeepCompareLayoutEffect: () => (/* reexport safe */ _useDeepCompareLayoutEffect__WEBPACK_IMPORTED_MODULE_61__["default"]),
/* harmony export */   useDocumentVisibility: () => (/* reexport safe */ _useDocumentVisibility__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   useDrag: () => (/* reexport safe */ _useDrag__WEBPACK_IMPORTED_MODULE_35__["default"]),
/* harmony export */   useDrop: () => (/* reexport safe */ _useDrop__WEBPACK_IMPORTED_MODULE_36__["default"]),
/* harmony export */   useDynamicList: () => (/* reexport safe */ _useDynamicList__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   useEventEmitter: () => (/* reexport safe */ _useEventEmitter__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   useEventListener: () => (/* reexport safe */ _useEventListener__WEBPACK_IMPORTED_MODULE_28__["default"]),
/* harmony export */   useEventTarget: () => (/* reexport safe */ _useEventTarget__WEBPACK_IMPORTED_MODULE_41__["default"]),
/* harmony export */   useExternal: () => (/* reexport safe */ _useExternal__WEBPACK_IMPORTED_MODULE_56__["default"]),
/* harmony export */   useFavicon: () => (/* reexport safe */ _useFavicon__WEBPACK_IMPORTED_MODULE_51__["default"]),
/* harmony export */   useFocusWithin: () => (/* reexport safe */ _useFocusWithin__WEBPACK_IMPORTED_MODULE_72__["default"]),
/* harmony export */   useFullscreen: () => (/* reexport safe */ _useFullscreen__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   useFusionTable: () => (/* reexport safe */ _useFusionTable__WEBPACK_IMPORTED_MODULE_68__["default"]),
/* harmony export */   useGetState: () => (/* reexport safe */ _useGetState__WEBPACK_IMPORTED_MODULE_70__["default"]),
/* harmony export */   useHistoryTravel: () => (/* reexport safe */ _useHistoryTravel__WEBPACK_IMPORTED_MODULE_42__["default"]),
/* harmony export */   useHover: () => (/* reexport safe */ _useHover__WEBPACK_IMPORTED_MODULE_29__["default"]),
/* harmony export */   useInViewport: () => (/* reexport safe */ _useInViewport__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   useInfiniteScroll: () => (/* reexport safe */ _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_69__["default"]),
/* harmony export */   useInterval: () => (/* reexport safe */ _useInterval__WEBPACK_IMPORTED_MODULE_45__["default"]),
/* harmony export */   useIsomorphicLayoutEffect: () => (/* reexport safe */ _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_59__["default"]),
/* harmony export */   useKeyPress: () => (/* reexport safe */ _useKeyPress__WEBPACK_IMPORTED_MODULE_27__["default"]),
/* harmony export */   useLatest: () => (/* reexport safe */ _useLatest__WEBPACK_IMPORTED_MODULE_58__["default"]),
/* harmony export */   useLocalStorageState: () => (/* reexport safe */ _useLocalStorageState__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   useLockFn: () => (/* reexport safe */ _useLockFn__WEBPACK_IMPORTED_MODULE_54__["default"]),
/* harmony export */   useLongPress: () => (/* reexport safe */ _useLongPress__WEBPACK_IMPORTED_MODULE_63__["default"]),
/* harmony export */   useMap: () => (/* reexport safe */ _useMap__WEBPACK_IMPORTED_MODULE_33__["default"]),
/* harmony export */   useMemoizedFn: () => (/* reexport safe */ _useMemoizedFn__WEBPACK_IMPORTED_MODULE_32__["default"]),
/* harmony export */   useMount: () => (/* reexport safe */ _useMount__WEBPACK_IMPORTED_MODULE_37__["default"]),
/* harmony export */   useMouse: () => (/* reexport safe */ _useMouse__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   useMutationObserver: () => (/* reexport safe */ _useMutationObserver__WEBPACK_IMPORTED_MODULE_77__["default"]),
/* harmony export */   useNetwork: () => (/* reexport safe */ _useNetwork__WEBPACK_IMPORTED_MODULE_48__["default"]),
/* harmony export */   usePagination: () => (/* reexport safe */ _usePagination__WEBPACK_IMPORTED_MODULE_66__["default"]),
/* harmony export */   usePrevious: () => (/* reexport safe */ _usePrevious__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   useRafInterval: () => (/* reexport safe */ _useRafInterval__WEBPACK_IMPORTED_MODULE_74__["default"]),
/* harmony export */   useRafState: () => (/* reexport safe */ _useRafState__WEBPACK_IMPORTED_MODULE_64__["default"]),
/* harmony export */   useRafTimeout: () => (/* reexport safe */ _useRafTimeout__WEBPACK_IMPORTED_MODULE_75__["default"]),
/* harmony export */   useReactive: () => (/* reexport safe */ _useReactive__WEBPACK_IMPORTED_MODULE_50__["default"]),
/* harmony export */   useRequest: () => (/* reexport safe */ _useRequest__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useResetState: () => (/* reexport safe */ _useResetState__WEBPACK_IMPORTED_MODULE_76__["default"]),
/* harmony export */   useResponsive: () => (/* reexport safe */ _useResponsive__WEBPACK_IMPORTED_MODULE_4__.useResponsive),
/* harmony export */   useSafeState: () => (/* reexport safe */ _useSafeState__WEBPACK_IMPORTED_MODULE_57__["default"]),
/* harmony export */   useScroll: () => (/* reexport safe */ _useScroll__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   useSelections: () => (/* reexport safe */ _useSelections__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   useSessionStorageState: () => (/* reexport safe */ _useSessionStorageState__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   useSet: () => (/* reexport safe */ _useSet__WEBPACK_IMPORTED_MODULE_31__["default"]),
/* harmony export */   useSetState: () => (/* reexport safe */ _useSetState__WEBPACK_IMPORTED_MODULE_44__["default"]),
/* harmony export */   useSize: () => (/* reexport safe */ _useSize__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   useTextSelection: () => (/* reexport safe */ _useTextSelection__WEBPACK_IMPORTED_MODULE_40__["default"]),
/* harmony export */   useThrottle: () => (/* reexport safe */ _useThrottle__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   useThrottleEffect: () => (/* reexport safe */ _useThrottleEffect__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   useThrottleFn: () => (/* reexport safe */ _useThrottleFn__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   useTimeout: () => (/* reexport safe */ _useTimeout__WEBPACK_IMPORTED_MODULE_49__["default"]),
/* harmony export */   useTitle: () => (/* reexport safe */ _useTitle__WEBPACK_IMPORTED_MODULE_47__["default"]),
/* harmony export */   useToggle: () => (/* reexport safe */ _useToggle__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   useTrackedEffect: () => (/* reexport safe */ _useTrackedEffect__WEBPACK_IMPORTED_MODULE_65__["default"]),
/* harmony export */   useUnmount: () => (/* reexport safe */ _useUnmount__WEBPACK_IMPORTED_MODULE_30__["default"]),
/* harmony export */   useUnmountedRef: () => (/* reexport safe */ _useUnmountedRef__WEBPACK_IMPORTED_MODULE_55__["default"]),
/* harmony export */   useUpdate: () => (/* reexport safe */ _useUpdate__WEBPACK_IMPORTED_MODULE_39__["default"]),
/* harmony export */   useUpdateEffect: () => (/* reexport safe */ _useUpdateEffect__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   useUpdateLayoutEffect: () => (/* reexport safe */ _useUpdateLayoutEffect__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   useVirtualList: () => (/* reexport safe */ _useVirtualList__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useWebSocket: () => (/* reexport safe */ _useWebSocket__WEBPACK_IMPORTED_MODULE_53__["default"]),
/* harmony export */   useWhyDidYouUpdate: () => (/* reexport safe */ _useWhyDidYouUpdate__WEBPACK_IMPORTED_MODULE_46__["default"])
/* harmony export */ });
/* harmony import */ var _createUpdateEffect__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./createUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUpdateEffect/index.js");
/* harmony import */ var _useAntdTable__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./useAntdTable */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAntdTable/index.js");
/* harmony import */ var _useAsyncEffect__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./useAsyncEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAsyncEffect/index.js");
/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useBoolean */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useBoolean/index.js");
/* harmony import */ var _useClickAway__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./useClickAway */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useClickAway/index.js");
/* harmony import */ var _useControllableValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useControllableValue */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useControllableValue/index.js");
/* harmony import */ var _useCookieState__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./useCookieState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCookieState/index.js");
/* harmony import */ var _useCountDown__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./useCountDown */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCountDown/index.js");
/* harmony import */ var _useCounter__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./useCounter */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCounter/index.js");
/* harmony import */ var _useCreation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./useCreation */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js");
/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./useDebounce */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounce/index.js");
/* harmony import */ var _useDebounceEffect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./useDebounceEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceEffect/index.js");
/* harmony import */ var _useDebounceFn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./useDebounceFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js");
/* harmony import */ var _useDeepCompareEffect__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./useDeepCompareEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareEffect/index.js");
/* harmony import */ var _useDeepCompareLayoutEffect__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./useDeepCompareLayoutEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareLayoutEffect/index.js");
/* harmony import */ var _useDocumentVisibility__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useDocumentVisibility */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDocumentVisibility/index.js");
/* harmony import */ var _useDrag__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./useDrag */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrag/index.js");
/* harmony import */ var _useDrop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./useDrop */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrop/index.js");
/* harmony import */ var _useDynamicList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDynamicList */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDynamicList/index.js");
/* harmony import */ var _useEventEmitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useEventEmitter */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventEmitter/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");
/* harmony import */ var _useEventTarget__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./useEventTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventTarget/index.js");
/* harmony import */ var _useExternal__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./useExternal */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useExternal/index.js");
/* harmony import */ var _useFavicon__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./useFavicon */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFavicon/index.js");
/* harmony import */ var _useFocusWithin__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./useFocusWithin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFocusWithin/index.js");
/* harmony import */ var _useFullscreen__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./useFullscreen */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFullscreen/index.js");
/* harmony import */ var _useFusionTable__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./useFusionTable */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/index.js");
/* harmony import */ var _useGetState__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./useGetState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useGetState/index.js");
/* harmony import */ var _useHistoryTravel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./useHistoryTravel */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHistoryTravel/index.js");
/* harmony import */ var _useHover__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./useHover */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHover/index.js");
/* harmony import */ var _useInfiniteScroll__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./useInfiniteScroll */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInfiniteScroll/index.js");
/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./useInterval */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInterval/index.js");
/* harmony import */ var _useInViewport__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./useInViewport */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInViewport/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./useIsomorphicLayoutEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useIsomorphicLayoutEffect/index.js");
/* harmony import */ var _useKeyPress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./useKeyPress */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useKeyPress/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useLocalStorageState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useLocalStorageState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLocalStorageState/index.js");
/* harmony import */ var _useLockFn__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./useLockFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLockFn/index.js");
/* harmony import */ var _useLongPress__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./useLongPress */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLongPress/index.js");
/* harmony import */ var _useMap__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./useMap */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMap/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./useMount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMount/index.js");
/* harmony import */ var _useMouse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./useMouse */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMouse/index.js");
/* harmony import */ var _useNetwork__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./useNetwork */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useNetwork/index.js");
/* harmony import */ var _usePagination__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./usePagination */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePagination/index.js");
/* harmony import */ var _usePrevious__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./usePrevious */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePrevious/index.js");
/* harmony import */ var _useRafInterval__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./useRafInterval */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafInterval/index.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./useRafState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js");
/* harmony import */ var _useRafTimeout__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./useRafTimeout */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafTimeout/index.js");
/* harmony import */ var _useReactive__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./useReactive */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useReactive/index.js");
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRequest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/index.js");
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./useRequest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cache.js");
/* harmony import */ var _useResetState__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./useResetState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResetState/index.js");
/* harmony import */ var _useResponsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useResponsive */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResponsive/index.js");
/* harmony import */ var _useSafeState__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./useSafeState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSafeState/index.js");
/* harmony import */ var _useScroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./useScroll */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useScroll/index.js");
/* harmony import */ var _useSelections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./useSelections */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSelections/index.js");
/* harmony import */ var _useSessionStorageState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useSessionStorageState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSessionStorageState/index.js");
/* harmony import */ var _useSet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./useSet */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSet/index.js");
/* harmony import */ var _useSetState__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./useSetState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSetState/index.js");
/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useSize */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSize/index.js");
/* harmony import */ var _useTextSelection__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./useTextSelection */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTextSelection/index.js");
/* harmony import */ var _useThrottle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useThrottle */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottle/index.js");
/* harmony import */ var _useThrottleEffect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./useThrottleEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleEffect/index.js");
/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./useThrottleFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleFn/index.js");
/* harmony import */ var _useTimeout__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./useTimeout */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTimeout/index.js");
/* harmony import */ var _useTitle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./useTitle */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTitle/index.js");
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useToggle */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useToggle/index.js");
/* harmony import */ var _useTrackedEffect__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./useTrackedEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTrackedEffect/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _useUnmountedRef__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./useUnmountedRef */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmountedRef/index.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./useUpdate */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");
/* harmony import */ var _useUpdateLayoutEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useUpdateLayoutEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateLayoutEffect/index.js");
/* harmony import */ var _useVirtualList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVirtualList */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useVirtualList/index.js");
/* harmony import */ var _useWebSocket__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./useWebSocket */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWebSocket/index.js");
/* harmony import */ var _useWhyDidYouUpdate__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./useWhyDidYouUpdate */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWhyDidYouUpdate/index.js");
/* harmony import */ var _useMutationObserver__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./useMutationObserver */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMutationObserver/index.js");















































































/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAntdTable/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAntdTable/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _usePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usePagination */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePagination/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");





var useAntdTable = function (service, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var form = options.form,
    _b = options.defaultType,
    defaultType = _b === void 0 ? 'simple' : _b,
    defaultParams = options.defaultParams,
    _c = options.manual,
    manual = _c === void 0 ? false : _c,
    _d = options.refreshDeps,
    refreshDeps = _d === void 0 ? [] : _d,
    _e = options.ready,
    ready = _e === void 0 ? true : _e,
    rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(options, ["form", "defaultType", "defaultParams", "manual", "refreshDeps", "ready"]);
  var result = (0,_usePagination__WEBPACK_IMPORTED_MODULE_2__["default"])(service, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({
    manual: true
  }, rest));
  var _f = result.params,
    params = _f === void 0 ? [] : _f,
    run = result.run;
  var cacheFormTableData = params[2] || {};
  var _g = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.type) || defaultType), 2),
    type = _g[0],
    setType = _g[1];
  var allFormDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var defaultDataSourceRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var isAntdV4 = !!(form === null || form === void 0 ? void 0 : form.getInternalHooks);
  // get current active field values
  var getActiveFieldValues = function () {
    if (!form) {
      return {};
    }
    // antd 4
    if (isAntdV4) {
      return form.getFieldsValue(null, function () {
        return true;
      });
    }
    // antd 3
    var allFieldsValue = form.getFieldsValue();
    var activeFieldsValue = {};
    Object.keys(allFieldsValue).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        activeFieldsValue[key] = allFieldsValue[key];
      }
    });
    return activeFieldsValue;
  };
  var validateFields = function () {
    if (!form) {
      return Promise.resolve({});
    }
    var activeFieldsValue = getActiveFieldValues();
    var fields = Object.keys(activeFieldsValue);
    // antd 4
    if (isAntdV4) {
      return form.validateFields(fields);
    }
    // antd 3
    return new Promise(function (resolve, reject) {
      form.validateFields(fields, function (errors, values) {
        if (errors) {
          reject(errors);
        } else {
          resolve(values);
        }
      });
    });
  };
  var restoreForm = function () {
    if (!form) {
      return;
    }
    // antd v4
    if (isAntdV4) {
      return form.setFieldsValue(allFormDataRef.current);
    }
    // antd v3
    var activeFieldsValue = {};
    Object.keys(allFormDataRef.current).forEach(function (key) {
      if (form.getFieldInstance ? form.getFieldInstance(key) : true) {
        activeFieldsValue[key] = allFormDataRef.current[key];
      }
    });
    form.setFieldsValue(activeFieldsValue);
  };
  var changeType = function () {
    var activeFieldsValue = getActiveFieldValues();
    allFormDataRef.current = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, allFormDataRef.current), activeFieldsValue);
    setType(function (t) {
      return t === 'simple' ? 'advance' : 'simple';
    });
  };
  var _submit = function (initPagination) {
    if (!ready) {
      return;
    }
    setTimeout(function () {
      validateFields().then(function (values) {
        if (values === void 0) {
          values = {};
        }
        var pagination = initPagination || (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({
          pageSize: options.defaultPageSize || 10
        }, (params === null || params === void 0 ? void 0 : params[0]) || {}), {
          current: 1
        });
        if (!form) {
          // @ts-ignore
          run(pagination);
          return;
        }
        // record all form data
        allFormDataRef.current = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, allFormDataRef.current), values);
        // @ts-ignore
        run(pagination, values, {
          allFormData: allFormDataRef.current,
          type: type
        });
      }).catch(function (err) {
        return err;
      });
    });
  };
  var reset = function () {
    var _a, _b;
    if (form) {
      form.resetFields();
    }
    _submit((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]) || {}), {
      pageSize: options.defaultPageSize || ((_b = (_a = options.defaultParams) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.pageSize) || 10,
      current: 1
    }));
  };
  var submit = function (e) {
    var _a;
    (_a = e === null || e === void 0 ? void 0 : e.preventDefault) === null || _a === void 0 ? void 0 : _a.call(e);
    _submit();
  };
  var onTableChange = function (pagination, filters, sorter, extra) {
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(params || []),
      oldPaginationParams = _a[0],
      restParams = _a.slice(1);
    run.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, oldPaginationParams), {
      current: pagination.current,
      pageSize: pagination.pageSize,
      filters: filters,
      sorter: sorter,
      extra: extra
    })], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(restParams), false));
  };
  // init
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // if has cache, use cached params. ignore manual and ready.
    if (params.length > 0) {
      allFormDataRef.current = (cacheFormTableData === null || cacheFormTableData === void 0 ? void 0 : cacheFormTableData.allFormData) || {};
      restoreForm();
      // @ts-ignore
      run.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(params), false));
      return;
    }
    if (!manual && ready) {
      allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
      restoreForm();
      _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
    }
  }, []);
  // change search type, restore form data
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (!ready) {
      return;
    }
    restoreForm();
  }, [type]);
  // refresh & ready change on the same time
  var hasAutoRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  hasAutoRun.current = false;
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (!manual && ready) {
      hasAutoRun.current = true;
      if (form) {
        form.resetFields();
      }
      allFormDataRef.current = (defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[1]) || {};
      restoreForm();
      _submit(defaultParams === null || defaultParams === void 0 ? void 0 : defaultParams[0]);
    }
  }, [ready]);
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (hasAutoRun.current) {
      return;
    }
    if (!ready) {
      return;
    }
    if (!manual) {
      hasAutoRun.current = true;
      result.pagination.changeCurrent(1);
    }
  }, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(refreshDeps), false));
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), {
    tableProps: {
      dataSource: ((_a = result.data) === null || _a === void 0 ? void 0 : _a.list) || defaultDataSourceRef.current,
      loading: result.loading,
      onChange: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(onTableChange),
      pagination: {
        current: result.pagination.current,
        pageSize: result.pagination.pageSize,
        total: result.pagination.total
      }
    },
    search: {
      submit: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(submit),
      type: type,
      changeType: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(changeType),
      reset: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(reset)
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAntdTable);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAsyncEffect/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAsyncEffect/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



function useAsyncEffect(effect, deps) {
  function isAsyncGenerator(val) {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(val[Symbol.asyncIterator]);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var e = effect();
    var cancelled = false;
    function execute() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
        var result;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!isAsyncGenerator(e)) return [3 /*break*/, 4];
              _a.label = 1;
            case 1:
              if (false) {}
              return [4 /*yield*/, e.next()];
            case 2:
              result = _a.sent();
              if (result.done || cancelled) {
                return [3 /*break*/, 3];
              }
              return [3 /*break*/, 1];
            case 3:
              return [3 /*break*/, 6];
            case 4:
              return [4 /*yield*/, e];
            case 5:
              _a.sent();
              _a.label = 6;
            case 6:
              return [2 /*return*/];
          }
        });
      });
    }

    execute();
    return function () {
      cancelled = true;
    };
  }, deps);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAsyncEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useBoolean/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useBoolean/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useBoolean)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useToggle */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useToggle/index.js");



function useBoolean(defaultValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_useToggle__WEBPACK_IMPORTED_MODULE_2__["default"])(!!defaultValue), 2),
    state = _a[0],
    _b = _a[1],
    toggle = _b.toggle,
    set = _b.set;
  var actions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var setTrue = function () {
      return set(true);
    };
    var setFalse = function () {
      return set(false);
    };
    return {
      toggle: toggle,
      set: function (v) {
        return set(!!v);
      },
      setTrue: setTrue,
      setFalse: setFalse
    };
  }, []);
  return [state, actions];
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useClickAway/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useClickAway/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useClickAway)
/* harmony export */ });
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_getDocumentOrShadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getDocumentOrShadow */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/getDocumentOrShadow.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");




function useClickAway(onClickAway, target, eventName) {
  if (eventName === void 0) {
    eventName = 'click';
  }
  var onClickAwayRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_0__["default"])(onClickAway);
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var handler = function (event) {
      var targets = Array.isArray(target) ? target : [target];
      if (targets.some(function (item) {
        var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_2__.getTargetElement)(item);
        return !targetElement || targetElement.contains(event.target);
      })) {
        return;
      }
      onClickAwayRef.current(event);
    };
    var documentOrShadow = (0,_utils_getDocumentOrShadow__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
    var eventNames = Array.isArray(eventName) ? eventName : [eventName];
    eventNames.forEach(function (event) {
      return documentOrShadow.addEventListener(event, handler);
    });
    return function () {
      eventNames.forEach(function (event) {
        return documentOrShadow.removeEventListener(event, handler);
      });
    };
  }, Array.isArray(eventName) ? eventName : [eventName], target);
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useControllableValue/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useControllableValue/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useUpdate */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js");





function useControllableValue(props, options) {
  if (props === void 0) {
    props = {};
  }
  if (options === void 0) {
    options = {};
  }
  var defaultValue = options.defaultValue,
    _a = options.defaultValuePropName,
    defaultValuePropName = _a === void 0 ? 'defaultValue' : _a,
    _b = options.valuePropName,
    valuePropName = _b === void 0 ? 'value' : _b,
    _c = options.trigger,
    trigger = _c === void 0 ? 'onChange' : _c;
  var value = props[valuePropName];
  var isControlled = props.hasOwnProperty(valuePropName);
  var initialValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (isControlled) {
      return value;
    }
    if (props.hasOwnProperty(defaultValuePropName)) {
      return props[defaultValuePropName];
    }
    return defaultValue;
  }, []);
  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);
  if (isControlled) {
    stateRef.current = value;
  }
  var update = (0,_useUpdate__WEBPACK_IMPORTED_MODULE_1__["default"])();
  function setState(v) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var r = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(v) ? v(stateRef.current) : v;
    if (!isControlled) {
      stateRef.current = r;
      update();
    }
    if (props[trigger]) {
      props[trigger].apply(props, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([r], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(args), false));
    }
  }
  return [stateRef.current, (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(setState)];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useControllableValue);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCookieState/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCookieState/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/.pnpm/js-cookie@2.2.1/node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");





function useCookieState(cookieKey, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
      var cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get(cookieKey);
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isString)(cookieValue)) return cookieValue;
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(options.defaultValue)) {
        return options.defaultValue();
      }
      return options.defaultValue;
    }), 2),
    state = _a[0],
    setState = _a[1];
  var updateState = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(function (newValue, newOptions) {
    if (newOptions === void 0) {
      newOptions = {};
    }
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), newOptions),
      defaultValue = _a.defaultValue,
      restOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__rest)(_a, ["defaultValue"]);
    var value = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(newValue) ? newValue(state) : newValue;
    setState(value);
    if (value === undefined) {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove(cookieKey);
    } else {
      js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set(cookieKey, value, restOptions);
    }
  });
  return [state, updateState];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCookieState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCountDown/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCountDown/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/.pnpm/dayjs@1.11.7/node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");





var calcLeft = function (target) {
  if (!target) {
    return 0;
  }
  // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
  var left = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(target).valueOf() - Date.now();
  return left < 0 ? 0 : left;
};
var parseMs = function (milliseconds) {
  return {
    days: Math.floor(milliseconds / 86400000),
    hours: Math.floor(milliseconds / 3600000) % 24,
    minutes: Math.floor(milliseconds / 60000) % 60,
    seconds: Math.floor(milliseconds / 1000) % 60,
    milliseconds: Math.floor(milliseconds) % 1000
  };
};
var useCountdown = function (options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options || {},
    leftTime = _a.leftTime,
    targetDate = _a.targetDate,
    _b = _a.interval,
    interval = _b === void 0 ? 1000 : _b,
    onEnd = _a.onEnd;
  var target = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if ('leftTime' in options) {
      return (0,_utils_index__WEBPACK_IMPORTED_MODULE_2__.isNumber)(leftTime) && leftTime > 0 ? Date.now() + leftTime : undefined;
    } else {
      return targetDate;
    }
  }, [leftTime, targetDate]);
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
      return calcLeft(target);
    }), 2),
    timeLeft = _c[0],
    setTimeLeft = _c[1];
  var onEndRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_4__["default"])(onEnd);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!target) {
      // for stop
      setTimeLeft(0);
      return;
    }
    // 立即执行一次
    setTimeLeft(calcLeft(target));
    var timer = setInterval(function () {
      var _a;
      var targetLeft = calcLeft(target);
      setTimeLeft(targetLeft);
      if (targetLeft === 0) {
        clearInterval(timer);
        (_a = onEndRef.current) === null || _a === void 0 ? void 0 : _a.call(onEndRef);
      }
    }, interval);
    return function () {
      return clearInterval(timer);
    };
  }, [target, interval]);
  var formattedRes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return parseMs(timeLeft);
  }, [timeLeft]);
  return [timeLeft, formattedRes];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCountdown);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCounter/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCounter/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");




function getTargetValue(val, options) {
  if (options === void 0) {
    options = {};
  }
  var min = options.min,
    max = options.max;
  var target = val;
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(max)) {
    target = Math.min(max, target);
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(min)) {
    target = Math.max(min, target);
  }
  return target;
}
function useCounter(initialValue, options) {
  if (initialValue === void 0) {
    initialValue = 0;
  }
  if (options === void 0) {
    options = {};
  }
  var min = options.min,
    max = options.max;
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return getTargetValue(initialValue, {
        min: min,
        max: max
      });
    }), 2),
    current = _a[0],
    setCurrent = _a[1];
  var setValue = function (value) {
    setCurrent(function (c) {
      var target = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(value) ? value : value(c);
      return getTargetValue(target, {
        max: max,
        min: min
      });
    });
  };
  var inc = function (delta) {
    if (delta === void 0) {
      delta = 1;
    }
    setValue(function (c) {
      return c + delta;
    });
  };
  var dec = function (delta) {
    if (delta === void 0) {
      delta = 1;
    }
    setValue(function (c) {
      return c - delta;
    });
  };
  var set = function (value) {
    setValue(value);
  };
  var reset = function () {
    setValue(initialValue);
  };
  return [current, {
    inc: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(inc),
    dec: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(dec),
    set: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(set),
    reset: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(reset)
  }];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCounter);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCreation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils_depsAreSame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/depsAreSame */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/depsAreSame.js");


function useCreation(factory, deps) {
  var current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    deps: deps,
    obj: undefined,
    initialized: false
  }).current;
  if (current.initialized === false || !(0,_utils_depsAreSame__WEBPACK_IMPORTED_MODULE_1__["default"])(current.deps, deps)) {
    current.deps = deps;
    current.obj = factory();
    current.initialized = true;
  }
  return current.obj;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounce/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounce/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useDebounceFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useDebounceFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js");



function useDebounce(value, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), 2),
    debounced = _a[0],
    setDebounced = _a[1];
  var run = (0,_useDebounceFn__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    setDebounced(value);
  }, options).run;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    run();
  }, [value]);
  return debounced;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounce);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceEffect/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceEffect/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useDebounceFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useDebounceFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");




function useDebounceEffect(effect, deps, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), 2),
    flag = _a[0],
    setFlag = _a[1];
  var run = (0,_useDebounceFn__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    setFlag({});
  }, options).run;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return run();
  }, deps);
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(effect, [flag]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounceEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");







function useDebounceFn(fn, options) {
  var _a;
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn)) {
      console.error("useDebounceFn expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var debounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,lodash_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(fnRef, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(args), false));
    }, wait, options);
  }, []);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    debounced.cancel();
  });
  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebounceFn);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareEffect/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareEffect/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createDeepCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createDeepCompareEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createDeepCompareEffect/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createDeepCompareEffect__WEBPACK_IMPORTED_MODULE_1__.createDeepCompareEffect)(react__WEBPACK_IMPORTED_MODULE_0__.useEffect));

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareLayoutEffect/index.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDeepCompareLayoutEffect/index.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createDeepCompareEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createDeepCompareEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createDeepCompareEffect/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createDeepCompareEffect__WEBPACK_IMPORTED_MODULE_1__.createDeepCompareEffect)(react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect));

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDocumentVisibility/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDocumentVisibility/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");




var getVisibility = function () {
  if (!_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    return 'visible';
  }
  return document.visibilityState;
};
function useDocumentVisibility() {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return getVisibility();
    }), 2),
    documentVisibility = _a[0],
    setDocumentVisibility = _a[1];
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"])('visibilitychange', function () {
    setDocumentVisibility(getVisibility());
  }, {
    target: function () {
      return document;
    }
  });
  return documentVisibility;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDocumentVisibility);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrag/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrag/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");



var useDrag = function (data, target, options) {
  if (options === void 0) {
    options = {};
  }
  var optionsRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_0__["default"])(options);
  var dataRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_2__.getTargetElement)(target);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var onDragStart = function (event) {
      var _a, _b;
      (_b = (_a = optionsRef.current).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      event.dataTransfer.setData('custom', JSON.stringify(dataRef.current));
    };
    var onDragEnd = function (event) {
      var _a, _b;
      (_b = (_a = optionsRef.current).onDragEnd) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };
    targetElement.setAttribute('draggable', 'true');
    targetElement.addEventListener('dragstart', onDragStart);
    targetElement.addEventListener('dragend', onDragEnd);
    return function () {
      targetElement.removeEventListener('dragstart', onDragStart);
      targetElement.removeEventListener('dragend', onDragEnd);
    };
  }, [], target);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDrag);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrop/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDrop/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");




var useDrop = function (target, options) {
  if (options === void 0) {
    options = {};
  }
  var optionsRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(options);
  // https://stackoverflow.com/a/26459269
  var dragEnterTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_3__.getTargetElement)(target);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var onData = function (dataTransfer, event) {
      var uri = dataTransfer.getData('text/uri-list');
      var dom = dataTransfer.getData('custom');
      if (dom && optionsRef.current.onDom) {
        var data = dom;
        try {
          data = JSON.parse(dom);
        } catch (e) {
          data = dom;
        }
        optionsRef.current.onDom(data, event);
        return;
      }
      if (uri && optionsRef.current.onUri) {
        optionsRef.current.onUri(uri, event);
        return;
      }
      if (dataTransfer.files && dataTransfer.files.length && optionsRef.current.onFiles) {
        optionsRef.current.onFiles(Array.from(dataTransfer.files), event);
        return;
      }
      if (dataTransfer.items && dataTransfer.items.length && optionsRef.current.onText) {
        dataTransfer.items[0].getAsString(function (text) {
          optionsRef.current.onText(text, event);
        });
      }
    };
    var onDragEnter = function (event) {
      var _a, _b;
      event.preventDefault();
      event.stopPropagation();
      dragEnterTarget.current = event.target;
      (_b = (_a = optionsRef.current).onDragEnter) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };
    var onDragOver = function (event) {
      var _a, _b;
      event.preventDefault();
      (_b = (_a = optionsRef.current).onDragOver) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };
    var onDragLeave = function (event) {
      var _a, _b;
      if (event.target === dragEnterTarget.current) {
        (_b = (_a = optionsRef.current).onDragLeave) === null || _b === void 0 ? void 0 : _b.call(_a, event);
      }
    };
    var onDrop = function (event) {
      var _a, _b;
      event.preventDefault();
      onData(event.dataTransfer, event);
      (_b = (_a = optionsRef.current).onDrop) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };
    var onPaste = function (event) {
      var _a, _b;
      onData(event.clipboardData, event);
      (_b = (_a = optionsRef.current).onPaste) === null || _b === void 0 ? void 0 : _b.call(_a, event);
    };
    targetElement.addEventListener('dragenter', onDragEnter);
    targetElement.addEventListener('dragover', onDragOver);
    targetElement.addEventListener('dragleave', onDragLeave);
    targetElement.addEventListener('drop', onDrop);
    targetElement.addEventListener('paste', onPaste);
    return function () {
      targetElement.removeEventListener('dragenter', onDragEnter);
      targetElement.removeEventListener('dragover', onDragOver);
      targetElement.removeEventListener('dragleave', onDragLeave);
      targetElement.removeEventListener('drop', onDrop);
      targetElement.removeEventListener('paste', onPaste);
    };
  }, [], target);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDrop);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDynamicList/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDynamicList/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


var useDynamicList = function (initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var counterRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(-1);
  var keyList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  var setKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    counterRef.current += 1;
    keyList.current.splice(index, 0, counterRef.current);
  }, []);
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      initialList.forEach(function (_, index) {
        setKey(index);
      });
      return initialList;
    }), 2),
    list = _a[0],
    setList = _a[1];
  var resetList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (newList) {
    keyList.current = [];
    setList(function () {
      newList.forEach(function (_, index) {
        setKey(index);
      });
      return newList;
    });
  }, []);
  var insert = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, item) {
    setList(function (l) {
      var temp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(l), false);
      temp.splice(index, 0, item);
      setKey(index);
      return temp;
    });
  }, []);
  var getKey = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    return keyList.current[index];
  }, []);
  var getIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (key) {
    return keyList.current.findIndex(function (ele) {
      return ele === key;
    });
  }, []);
  var merge = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, items) {
    setList(function (l) {
      var temp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(l), false);
      items.forEach(function (_, i) {
        setKey(index + i);
      });
      temp.splice.apply(temp, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([index, 0], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(items), false));
      return temp;
    });
  }, []);
  var replace = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index, item) {
    setList(function (l) {
      var temp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(l), false);
      temp[index] = item;
      return temp;
    });
  }, []);
  var remove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {
    setList(function (l) {
      var temp = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(l), false);
      temp.splice(index, 1);
      // remove keys if necessary
      try {
        keyList.current.splice(index, 1);
      } catch (e) {
        console.error(e);
      }
      return temp;
    });
  }, []);
  var move = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (oldIndex, newIndex) {
    if (oldIndex === newIndex) {
      return;
    }
    setList(function (l) {
      var newList = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(l), false);
      var temp = newList.filter(function (_, index) {
        return index !== oldIndex;
      });
      temp.splice(newIndex, 0, newList[oldIndex]);
      // move keys if necessary
      try {
        var keyTemp = keyList.current.filter(function (_, index) {
          return index !== oldIndex;
        });
        keyTemp.splice(newIndex, 0, keyList.current[oldIndex]);
        keyList.current = keyTemp;
      } catch (e) {
        console.error(e);
      }
      return temp;
    });
  }, []);
  var push = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {
    setList(function (l) {
      setKey(l.length);
      return l.concat([item]);
    });
  }, []);
  var pop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(0, keyList.current.length - 1);
    } catch (e) {
      console.error(e);
    }
    setList(function (l) {
      return l.slice(0, l.length - 1);
    });
  }, []);
  var unshift = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (item) {
    setList(function (l) {
      setKey(0);
      return [item].concat(l);
    });
  }, []);
  var shift = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // remove keys if necessary
    try {
      keyList.current = keyList.current.slice(1, keyList.current.length);
    } catch (e) {
      console.error(e);
    }
    setList(function (l) {
      return l.slice(1, l.length);
    });
  }, []);
  var sortList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (result) {
    return result.map(function (item, index) {
      return {
        key: index,
        item: item
      };
    }) // add index into obj
    .sort(function (a, b) {
      return getIndex(a.key) - getIndex(b.key);
    }) // sort based on the index of table
    .filter(function (item) {
      return !!item.item;
    }) // remove undefined(s)
    .map(function (item) {
      return item.item;
    });
  },
  // retrive the data
  []);
  return {
    list: list,
    insert: insert,
    merge: merge,
    replace: replace,
    remove: remove,
    getKey: getKey,
    getIndex: getIndex,
    move: move,
    push: push,
    pop: pop,
    unshift: unshift,
    shift: shift,
    sortList: sortList,
    resetList: resetList
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDynamicList);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventEmitter/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventEmitter/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventEmitter: () => (/* binding */ EventEmitter),
/* harmony export */   "default": () => (/* binding */ useEventEmitter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


var EventEmitter = /** @class */function () {
  function EventEmitter() {
    var _this = this;
    this.subscriptions = new Set();
    this.emit = function (val) {
      var e_1, _a;
      try {
        for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(_this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subscription = _c.value;
          subscription(val);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    this.useSubscription = function (callback) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
      callbackRef.current = callback;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        function subscription(val) {
          if (callbackRef.current) {
            callbackRef.current(val);
          }
        }
        _this.subscriptions.add(subscription);
        return function () {
          _this.subscriptions.delete(subscription);
        };
      }, []);
    };
  }
  return EventEmitter;
}();

function useEventEmitter() {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!ref.current) {
    ref.current = new EventEmitter();
  }
  return ref.current;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");



function useEventListener(eventName, handler, options) {
  if (options === void 0) {
    options = {};
  }
  var handlerRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_0__["default"])(handler);
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_2__.getTargetElement)(options.target, window);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var eventListener = function (event) {
      return handlerRef.current(event);
    };
    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive
    });
    return function () {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture
      });
    };
  }, [eventName, options.capture, options.once, options.passive], options.target);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventListener);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventTarget/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventTarget/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");




function useEventTarget(options) {
  var _a = options || {},
    initialValue = _a.initialValue,
    transformer = _a.transformer;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue), 2),
    value = _b[0],
    setValue = _b[1];
  var transformerRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(transformer);
  var reset = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setValue(initialValue);
  }, []);
  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    var _value = e.target.value;
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(transformerRef.current)) {
      return setValue(transformerRef.current(_value));
    }
    // no transformer => U and T should be the same
    return setValue(_value);
  }, []);
  return [value, {
    onChange: onChange,
    reset: reset
  }];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventTarget);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useExternal/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useExternal/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


// {[path]: count}
// remove external when no used
var EXTERNAL_USED_COUNT = {};
var loadScript = function (path, props) {
  if (props === void 0) {
    props = {};
  }
  var script = document.querySelector("script[src=\"".concat(path, "\"]"));
  if (!script) {
    var newScript_1 = document.createElement('script');
    newScript_1.src = path;
    Object.keys(props).forEach(function (key) {
      newScript_1[key] = props[key];
    });
    newScript_1.setAttribute('data-status', 'loading');
    document.body.appendChild(newScript_1);
    return {
      ref: newScript_1,
      status: 'loading'
    };
  }
  return {
    ref: script,
    status: script.getAttribute('data-status') || 'ready'
  };
};
var loadCss = function (path, props) {
  if (props === void 0) {
    props = {};
  }
  var css = document.querySelector("link[href=\"".concat(path, "\"]"));
  if (!css) {
    var newCss_1 = document.createElement('link');
    newCss_1.rel = 'stylesheet';
    newCss_1.href = path;
    Object.keys(props).forEach(function (key) {
      newCss_1[key] = props[key];
    });
    // IE9+
    var isLegacyIECss = ('hideFocus' in newCss_1);
    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && newCss_1.relList) {
      newCss_1.rel = 'preload';
      newCss_1.as = 'style';
    }
    newCss_1.setAttribute('data-status', 'loading');
    document.head.appendChild(newCss_1);
    return {
      ref: newCss_1,
      status: 'loading'
    };
  }
  return {
    ref: css,
    status: css.getAttribute('data-status') || 'ready'
  };
};
var useExternal = function (path, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(path ? 'loading' : 'unset'), 2),
    status = _a[0],
    setStatus = _a[1];
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!path) {
      setStatus('unset');
      return;
    }
    var pathname = path.replace(/[|#].*$/, '');
    if ((options === null || options === void 0 ? void 0 : options.type) === 'css' || !(options === null || options === void 0 ? void 0 : options.type) && /(^css!|\.css$)/.test(pathname)) {
      var result = loadCss(path, options === null || options === void 0 ? void 0 : options.css);
      ref.current = result.ref;
      setStatus(result.status);
    } else if ((options === null || options === void 0 ? void 0 : options.type) === 'js' || !(options === null || options === void 0 ? void 0 : options.type) && /(^js!|\.js$)/.test(pathname)) {
      var result = loadScript(path, options === null || options === void 0 ? void 0 : options.js);
      ref.current = result.ref;
      setStatus(result.status);
    } else {
      // do nothing
      console.error("Cannot infer the type of external resource, and please provide a type ('js' | 'css'). " + 'Refer to the https://ahooks.js.org/hooks/dom/use-external/#options');
    }
    if (!ref.current) {
      return;
    }
    if (EXTERNAL_USED_COUNT[path] === undefined) {
      EXTERNAL_USED_COUNT[path] = 1;
    } else {
      EXTERNAL_USED_COUNT[path] += 1;
    }
    var handler = function (event) {
      var _a;
      var targetStatus = event.type === 'load' ? 'ready' : 'error';
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setAttribute('data-status', targetStatus);
      setStatus(targetStatus);
    };
    ref.current.addEventListener('load', handler);
    ref.current.addEventListener('error', handler);
    return function () {
      var _a, _b, _c;
      (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('load', handler);
      (_b = ref.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('error', handler);
      EXTERNAL_USED_COUNT[path] -= 1;
      if (EXTERNAL_USED_COUNT[path] === 0 && !(options === null || options === void 0 ? void 0 : options.keepWhenUnused)) {
        (_c = ref.current) === null || _c === void 0 ? void 0 : _c.remove();
      }
      ref.current = undefined;
    };
  }, [path]);
  return status;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useExternal);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFavicon/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFavicon/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var ImgTypeMap = {
  SVG: 'image/svg+xml',
  ICO: 'image/x-icon',
  GIF: 'image/gif',
  PNG: 'image/png'
};
var useFavicon = function (href) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!href) return;
    var cutUrl = href.split('.');
    var imgSuffix = cutUrl[cutUrl.length - 1].toLocaleUpperCase();
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = ImgTypeMap[imgSuffix];
    link.href = href;
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [href]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFavicon);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFocusWithin/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFocusWithin/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useFocusWithin)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");



function useFocusWithin(target, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    isFocusWithin = _a[0],
    setIsFocusWithin = _a[1];
  var _b = options || {},
    onFocus = _b.onFocus,
    onBlur = _b.onBlur,
    onChange = _b.onChange;
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"])('focusin', function (e) {
    if (!isFocusWithin) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
      onChange === null || onChange === void 0 ? void 0 : onChange(true);
      setIsFocusWithin(true);
    }
  }, {
    target: target
  });
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"])('focusout', function (e) {
    var _a, _b;
    if (isFocusWithin && !((_b = (_a = e.currentTarget) === null || _a === void 0 ? void 0 : _a.contains) === null || _b === void 0 ? void 0 : _b.call(_a, e.relatedTarget))) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
      onChange === null || onChange === void 0 ? void 0 : onChange(false);
      setIsFocusWithin(false);
    }
  }, {
    target: target
  });
  return isFocusWithin;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFullscreen/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFullscreen/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/.pnpm/screenfull@5.2.0/node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");








var useFullscreen = function (target, options) {
  var _a = options || {},
    onExit = _a.onExit,
    onEnter = _a.onEnter,
    _b = _a.pageFullscreen,
    pageFullscreen = _b === void 0 ? false : _b;
  var _c = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isBoolean)(pageFullscreen) || !pageFullscreen ? {} : pageFullscreen,
    _d = _c.className,
    className = _d === void 0 ? 'ahooks-page-fullscreen' : _d,
    _e = _c.zIndex,
    zIndex = _e === void 0 ? 999999 : _e;
  var onExitRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(onExit);
  var onEnterRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(onEnter);
  var _f = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    state = _f[0],
    setState = _f[1];
  var invokeCallback = function (fullscreen) {
    var _a, _b;
    if (fullscreen) {
      (_a = onEnterRef.current) === null || _a === void 0 ? void 0 : _a.call(onEnterRef);
    } else {
      (_b = onExitRef.current) === null || _b === void 0 ? void 0 : _b.call(onExitRef);
    }
  };
  // Memoized, otherwise it will be listened multiple times.
  var onScreenfullChange = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    if ((screenfull__WEBPACK_IMPORTED_MODULE_1___default().isEnabled)) {
      var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_6__.getTargetElement)(target);
      if (!(screenfull__WEBPACK_IMPORTED_MODULE_1___default().element)) {
        invokeCallback(false);
        setState(false);
        screenfull__WEBPACK_IMPORTED_MODULE_1___default().off('change', onScreenfullChange);
      } else {
        var isFullscreen = (screenfull__WEBPACK_IMPORTED_MODULE_1___default().element) === el;
        invokeCallback(isFullscreen);
        setState(isFullscreen);
      }
    }
  });
  var togglePageFullscreen = function (fullscreen) {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_6__.getTargetElement)(target);
    if (!el) {
      return;
    }
    var styleElem = document.getElementById(className);
    if (fullscreen) {
      el.classList.add(className);
      if (!styleElem) {
        styleElem = document.createElement('style');
        styleElem.setAttribute('id', className);
        styleElem.textContent = "\n          .".concat(className, " {\n            position: fixed; left: 0; top: 0; right: 0; bottom: 0;\n            width: 100% !important; height: 100% !important;\n            z-index: ").concat(zIndex, ";\n          }");
        el.appendChild(styleElem);
      }
    } else {
      el.classList.remove(className);
      if (styleElem) {
        styleElem.remove();
      }
    }
    // Prevent repeated calls when the state is not changed.
    if (state !== fullscreen) {
      invokeCallback(fullscreen);
      setState(fullscreen);
    }
  };
  var enterFullscreen = function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_6__.getTargetElement)(target);
    if (!el) {
      return;
    }
    if (pageFullscreen) {
      togglePageFullscreen(true);
      return;
    }
    if ((screenfull__WEBPACK_IMPORTED_MODULE_1___default().isEnabled)) {
      try {
        screenfull__WEBPACK_IMPORTED_MODULE_1___default().request(el);
        screenfull__WEBPACK_IMPORTED_MODULE_1___default().on('change', onScreenfullChange);
      } catch (error) {
        console.error(error);
      }
    }
  };
  var exitFullscreen = function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_6__.getTargetElement)(target);
    if (!el) {
      return;
    }
    if (pageFullscreen) {
      togglePageFullscreen(false);
      return;
    }
    if ((screenfull__WEBPACK_IMPORTED_MODULE_1___default().isEnabled) && (screenfull__WEBPACK_IMPORTED_MODULE_1___default().element) === el) {
      screenfull__WEBPACK_IMPORTED_MODULE_1___default().exit();
    }
  };
  var toggleFullscreen = function () {
    if (state) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  };
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    if ((screenfull__WEBPACK_IMPORTED_MODULE_1___default().isEnabled) && !pageFullscreen) {
      screenfull__WEBPACK_IMPORTED_MODULE_1___default().off('change', onScreenfullChange);
    }
  });
  return [state, {
    enterFullscreen: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_5__["default"])(enterFullscreen),
    exitFullscreen: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_5__["default"])(exitFullscreen),
    toggleFullscreen: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_5__["default"])(toggleFullscreen),
    isEnabled: (screenfull__WEBPACK_IMPORTED_MODULE_1___default().isEnabled)
  }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFullscreen);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/fusionAdapter.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/fusionAdapter.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fieldAdapter: () => (/* binding */ fieldAdapter),
/* harmony export */   resultAdapter: () => (/* binding */ resultAdapter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");

var fieldAdapter = function (field) {
  return {
    getFieldInstance: function (name) {
      return field.getNames().includes(name);
    },
    setFieldsValue: field.setValues,
    getFieldsValue: field.getValues,
    resetFields: field.resetToDefault,
    validateFields: function (fields, callback) {
      field.validate(fields, callback);
    }
  };
};
var resultAdapter = function (result) {
  var tableProps = {
    dataSource: result.tableProps.dataSource,
    loading: result.tableProps.loading,
    onSort: function (dataIndex, order) {
      var _a;
      result.tableProps.onChange({
        current: result.pagination.current,
        pageSize: result.pagination.pageSize
      }, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.filters, {
        field: dataIndex,
        order: order
      });
    },
    onFilter: function (filterParams) {
      var _a;
      result.tableProps.onChange({
        current: result.pagination.current,
        pageSize: result.pagination.pageSize
      }, filterParams, (_a = result.params[0]) === null || _a === void 0 ? void 0 : _a.sorter);
    }
  };
  var paginationProps = {
    onChange: result.pagination.changeCurrent,
    onPageSizeChange: result.pagination.changePageSize,
    current: result.pagination.current,
    pageSize: result.pagination.pageSize,
    total: result.pagination.total
  };
  return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, result), {
    tableProps: tableProps,
    paginationProps: paginationProps
  });
};

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useAntdTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useAntdTable */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useAntdTable/index.js");
/* harmony import */ var _fusionAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fusionAdapter */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useFusionTable/fusionAdapter.js");



var useFusionTable = function (service, options) {
  if (options === void 0) {
    options = {};
  }
  var ret = (0,_useAntdTable__WEBPACK_IMPORTED_MODULE_0__["default"])(service, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, options), {
    form: options.field ? (0,_fusionAdapter__WEBPACK_IMPORTED_MODULE_2__.fieldAdapter)(options.field) : undefined
  }));
  return (0,_fusionAdapter__WEBPACK_IMPORTED_MODULE_2__.resultAdapter)(ret);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFusionTable);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useGetState/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useGetState/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


function useGetState(initialState) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
  stateRef.current = state;
  var getState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return stateRef.current;
  }, []);
  return [state, setState, getState];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHistoryTravel/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHistoryTravel/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useHistoryTravel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");




var dumpIndex = function (step, arr) {
  var index = step > 0 ? step - 1 // move forward
  : arr.length + step; // move backward
  if (index >= arr.length - 1) {
    index = arr.length - 1;
  }
  if (index < 0) {
    index = 0;
  }
  return index;
};
var split = function (step, targetArr) {
  var index = dumpIndex(step, targetArr);
  return {
    _current: targetArr[index],
    _before: targetArr.slice(0, index),
    _after: targetArr.slice(index + 1)
  };
};
function useHistoryTravel(initialValue, maxLength) {
  if (maxLength === void 0) {
    maxLength = 0;
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      present: initialValue,
      past: [],
      future: []
    }), 2),
    history = _a[0],
    setHistory = _a[1];
  var present = history.present,
    past = history.past,
    future = history.future;
  var initialValueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);
  var reset = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    var _initial = params.length > 0 ? params[0] : initialValueRef.current;
    initialValueRef.current = _initial;
    setHistory({
      present: _initial,
      future: [],
      past: []
    });
  };
  var updateValue = function (val) {
    var _past = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(past), false), [present], false);
    var maxLengthNum = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(maxLength) ? maxLength : Number(maxLength);
    // maximum number of records exceeded
    if (maxLengthNum > 0 && _past.length > maxLengthNum) {
      //delete first
      _past.splice(0, 1);
    }
    setHistory({
      present: val,
      future: [],
      past: _past
    });
  };
  var _forward = function (step) {
    if (step === void 0) {
      step = 1;
    }
    if (future.length === 0) {
      return;
    }
    var _a = split(step, future),
      _before = _a._before,
      _current = _a._current,
      _after = _a._after;
    setHistory({
      past: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(past), false), [present], false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_before), false),
      present: _current,
      future: _after
    });
  };
  var _backward = function (step) {
    if (step === void 0) {
      step = -1;
    }
    if (past.length === 0) {
      return;
    }
    var _a = split(step, past),
      _before = _a._before,
      _current = _a._current,
      _after = _a._after;
    setHistory({
      past: _before,
      present: _current,
      future: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_after), false), [present], false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(future), false)
    });
  };
  var go = function (step) {
    var stepNum = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(step) ? step : Number(step);
    if (stepNum === 0) {
      return;
    }
    if (stepNum > 0) {
      return _forward(stepNum);
    }
    _backward(stepNum);
  };
  return {
    value: present,
    backLength: past.length,
    forwardLength: future.length,
    setValue: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(updateValue),
    go: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(go),
    back: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      go(-1);
    }),
    forward: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      go(1);
    }),
    reset: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(reset)
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHover/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useHover/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useBoolean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useBoolean */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useBoolean/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (target, options) {
  var _a = options || {},
    onEnter = _a.onEnter,
    onLeave = _a.onLeave,
    onChange = _a.onChange;
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)((0,_useBoolean__WEBPACK_IMPORTED_MODULE_1__["default"])(false), 2),
    state = _b[0],
    _c = _b[1],
    setTrue = _c.setTrue,
    setFalse = _c.setFalse;
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"])('mouseenter', function () {
    onEnter === null || onEnter === void 0 ? void 0 : onEnter();
    setTrue();
    onChange === null || onChange === void 0 ? void 0 : onChange(true);
  }, {
    target: target
  });
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"])('mouseleave', function () {
    onLeave === null || onLeave === void 0 ? void 0 : onLeave();
    setFalse();
    onChange === null || onChange === void 0 ? void 0 : onChange(false);
  }, {
    target: target
  });
  return state;
});

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInViewport/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInViewport/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! intersection-observer */ "./node_modules/.pnpm/intersection-observer@0.12.2/node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");





function useInViewport(target, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2),
    state = _a[0],
    setState = _a[1];
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), 2),
    ratio = _b[0],
    setRatio = _b[1];
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_4__.getTargetElement)(target);
    if (!el) {
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      var e_1, _a;
      try {
        for (var entries_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
          var entry = entries_1_1.value;
          setRatio(entry.intersectionRatio);
          setState(entry.isIntersecting);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, options), {
      root: (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_4__.getTargetElement)(options === null || options === void 0 ? void 0 : options.root)
    }));
    observer.observe(el);
    return function () {
      observer.disconnect();
    };
  }, [options === null || options === void 0 ? void 0 : options.rootMargin, options === null || options === void 0 ? void 0 : options.threshold], target);
  return [state, ratio];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInViewport);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInfiniteScroll/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInfiniteScroll/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useRequest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/rect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/rect.js");








var useInfiniteScroll = function (service, options) {
  if (options === void 0) {
    options = {};
  }
  var target = options.target,
    isNoMore = options.isNoMore,
    _a = options.threshold,
    threshold = _a === void 0 ? 100 : _a,
    _b = options.reloadDeps,
    reloadDeps = _b === void 0 ? [] : _b,
    manual = options.manual,
    onBefore = options.onBefore,
    onSuccess = options.onSuccess,
    onError = options.onError,
    onFinally = options.onFinally;
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), 2),
    finalData = _c[0],
    setFinalData = _c[1];
  var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), 2),
    loadingMore = _d[0],
    setLoadingMore = _d[1];
  var noMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if (!isNoMore) return false;
    return isNoMore(finalData);
  }, [finalData]);
  var _e = (0,_useRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(function (lastData) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(void 0, void 0, void 0, function () {
        var currentData;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, service(lastData)];
            case 1:
              currentData = _a.sent();
              if (!lastData) {
                setFinalData(currentData);
              } else {
                setFinalData((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, currentData), {
                  // @ts-ignore
                  list: (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(lastData.list), false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(currentData.list), false)
                }));
              }
              return [2 /*return*/, currentData];
          }
        });
      });
    }, {
      manual: manual,
      onFinally: function (_, d, e) {
        setLoadingMore(false);
        onFinally === null || onFinally === void 0 ? void 0 : onFinally(d, e);
      },
      onBefore: function () {
        return onBefore === null || onBefore === void 0 ? void 0 : onBefore();
      },
      onSuccess: function (d) {
        setTimeout(function () {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          scrollMethod();
        });
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(d);
      },
      onError: function (e) {
        return onError === null || onError === void 0 ? void 0 : onError(e);
      }
    }),
    loading = _e.loading,
    run = _e.run,
    runAsync = _e.runAsync,
    cancel = _e.cancel;
  var loadMore = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (noMore) return;
    setLoadingMore(true);
    run(finalData);
  });
  var loadMoreAsync = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (noMore) return Promise.reject();
    setLoadingMore(true);
    return runAsync(finalData);
  });
  var reload = function () {
    setLoadingMore(false);
    return run();
  };
  var reloadAsync = function () {
    setLoadingMore(false);
    return runAsync();
  };
  var scrollMethod = function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_4__.getTargetElement)(target);
    if (!el) {
      return;
    }
    el = el === document ? document.documentElement : el;
    var scrollTop = (0,_utils_rect__WEBPACK_IMPORTED_MODULE_5__.getScrollTop)(el);
    var scrollHeight = (0,_utils_rect__WEBPACK_IMPORTED_MODULE_5__.getScrollHeight)(el);
    var clientHeight = (0,_utils_rect__WEBPACK_IMPORTED_MODULE_5__.getClientHeight)(el);
    if (scrollHeight - scrollTop <= clientHeight + threshold) {
      loadMore();
    }
  };
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_6__["default"])('scroll', function () {
    if (loading || loadingMore) {
      return;
    }
    scrollMethod();
  }, {
    target: target
  });
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    run();
  }, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(reloadDeps), false));
  return {
    data: finalData,
    loading: !loadingMore && loading,
    loadingMore: loadingMore,
    noMore: noMore,
    loadMore: loadMore,
    loadMoreAsync: loadMoreAsync,
    reload: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(reload),
    reloadAsync: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(reloadAsync),
    mutate: setFinalData,
    cancel: cancel
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInfiniteScroll);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInterval/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useInterval/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var useInterval = function (fn, delay, options) {
  if (options === void 0) {
    options = {};
  }
  var timerCallback = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(delay) || delay < 0) {
      return;
    }
    if (options.immediate) {
      timerCallback();
    }
    timerRef.current = setInterval(timerCallback, delay);
    return clear;
  }, [delay, options.immediate]);
  return clear;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInterval);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useIsomorphicLayoutEffect/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useIsomorphicLayoutEffect/index.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");


var useIsomorphicLayoutEffect = _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"] ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useKeyPress/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useKeyPress/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useDeepCompareWithTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useDeepCompareWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useDeepCompareWithTarget.js");
/* harmony import */ var _utils_isAppleDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/isAppleDevice */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isAppleDevice.js");






// 键盘事件 keyCode 别名
var aliasKeyCodeMap = {
  '0': 48,
  '1': 49,
  '2': 50,
  '3': 51,
  '4': 52,
  '5': 53,
  '6': 54,
  '7': 55,
  '8': 56,
  '9': 57,
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  pausebreak: 19,
  capslock: 20,
  esc: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  leftarrow: 37,
  uparrow: 38,
  rightarrow: 39,
  downarrow: 40,
  insert: 45,
  delete: 46,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  leftwindowkey: 91,
  rightwindowkey: 92,
  meta: _utils_isAppleDevice__WEBPACK_IMPORTED_MODULE_0__["default"] ? [91, 93] : [91, 92],
  selectkey: 93,
  numpad0: 96,
  numpad1: 97,
  numpad2: 98,
  numpad3: 99,
  numpad4: 100,
  numpad5: 101,
  numpad6: 102,
  numpad7: 103,
  numpad8: 104,
  numpad9: 105,
  multiply: 106,
  add: 107,
  subtract: 109,
  decimalpoint: 110,
  divide: 111,
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123,
  numlock: 144,
  scrolllock: 145,
  semicolon: 186,
  equalsign: 187,
  comma: 188,
  dash: 189,
  period: 190,
  forwardslash: 191,
  graveaccent: 192,
  openbracket: 219,
  backslash: 220,
  closebracket: 221,
  singlequote: 222
};
// 修饰键
var modifierKey = {
  ctrl: function (event) {
    return event.ctrlKey;
  },
  shift: function (event) {
    return event.shiftKey;
  },
  alt: function (event) {
    return event.altKey;
  },
  meta: function (event) {
    if (event.type === 'keyup') {
      return aliasKeyCodeMap.meta.includes(event.keyCode);
    }
    return event.metaKey;
  }
};
// 根据 event 计算激活键数量
function countKeyByEvent(event) {
  var countOfModifier = Object.keys(modifierKey).reduce(function (total, key) {
    if (modifierKey[key](event)) {
      return total + 1;
    }
    return total;
  }, 0);
  // 16 17 18 91 92 是修饰键的 keyCode，如果 keyCode 是修饰键，那么激活数量就是修饰键的数量，如果不是，那么就需要 +1
  return [16, 17, 18, 91, 92].includes(event.keyCode) ? countOfModifier : countOfModifier + 1;
}
/**
 * 判断按键是否激活
 * @param [event: KeyboardEvent]键盘事件
 * @param [keyFilter: any] 当前键
 * @returns Boolean
 */
function genFilterKey(event, keyFilter, exactMatch) {
  var e_1, _a;
  // 浏览器自动补全 input 的时候，会触发 keyDown、keyUp 事件，但此时 event.key 等为空
  if (!event.key) {
    return false;
  }
  // 数字类型直接匹配事件的 keyCode
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(keyFilter)) {
    return event.keyCode === keyFilter;
  }
  // 字符串依次判断是否有组合键
  var genArr = keyFilter.split('.');
  var genLen = 0;
  try {
    for (var genArr_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(genArr), genArr_1_1 = genArr_1.next(); !genArr_1_1.done; genArr_1_1 = genArr_1.next()) {
      var key = genArr_1_1.value;
      // 组合键
      var genModifier = modifierKey[key];
      // keyCode 别名
      var aliasKeyCode = aliasKeyCodeMap[key.toLowerCase()];
      if (genModifier && genModifier(event) || aliasKeyCode && aliasKeyCode === event.keyCode) {
        genLen++;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (genArr_1_1 && !genArr_1_1.done && (_a = genArr_1.return)) _a.call(genArr_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  /**
   * 需要判断触发的键位和监听的键位完全一致，判断方法就是触发的键位里有且等于监听的键位
   * genLen === genArr.length 能判断出来触发的键位里有监听的键位
   * countKeyByEvent(event) === genArr.length 判断出来触发的键位数量里有且等于监听的键位数量
   * 主要用来防止按组合键其子集也会触发的情况，例如监听 ctrl+a 会触发监听 ctrl 和 a 两个键的事件。
   */
  if (exactMatch) {
    return genLen === genArr.length && countKeyByEvent(event) === genArr.length;
  }
  return genLen === genArr.length;
}
/**
 * 键盘输入预处理方法
 * @param [keyFilter: any] 当前键
 * @returns () => Boolean
 */
function genKeyFormatter(keyFilter, exactMatch) {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(keyFilter)) {
    return keyFilter;
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_1__.isString)(keyFilter) || (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isNumber)(keyFilter)) {
    return function (event) {
      return genFilterKey(event, keyFilter, exactMatch);
    };
  }
  if (Array.isArray(keyFilter)) {
    return function (event) {
      return keyFilter.some(function (item) {
        return genFilterKey(event, item, exactMatch);
      });
    };
  }
  return function () {
    return Boolean(keyFilter);
  };
}
var defaultEvents = ['keydown'];
function useKeyPress(keyFilter, eventHandler, option) {
  var _a = option || {},
    _b = _a.events,
    events = _b === void 0 ? defaultEvents : _b,
    target = _a.target,
    _c = _a.exactMatch,
    exactMatch = _c === void 0 ? false : _c,
    _d = _a.useCapture,
    useCapture = _d === void 0 ? false : _d;
  var eventHandlerRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(eventHandler);
  var keyFilterRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(keyFilter);
  (0,_utils_useDeepCompareWithTarget__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    var e_2, _a;
    var _b;
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_5__.getTargetElement)(target, window);
    if (!el) {
      return;
    }
    var callbackHandler = function (event) {
      var _a;
      var genGuard = genKeyFormatter(keyFilterRef.current, exactMatch);
      if (genGuard(event)) {
        return (_a = eventHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(eventHandlerRef, event);
      }
    };
    try {
      for (var events_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
        var eventName = events_1_1.value;
        (_b = el === null || el === void 0 ? void 0 : el.addEventListener) === null || _b === void 0 ? void 0 : _b.call(el, eventName, callbackHandler, useCapture);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return function () {
      var e_3, _a;
      var _b;
      try {
        for (var events_2 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
          var eventName = events_2_1.value;
          (_b = el === null || el === void 0 ? void 0 : el.removeEventListener) === null || _b === void 0 ? void 0 : _b.call(el, eventName, callbackHandler, useCapture);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
    };
  }, [events], target);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useKeyPress);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

function useLatest(value) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  ref.current = value;
  return ref;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLocalStorageState/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLocalStorageState/index.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createUseStorageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createUseStorageState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUseStorageState/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");


var useLocalStorageState = (0,_createUseStorageState__WEBPACK_IMPORTED_MODULE_0__.createUseStorageState)(function () {
  return _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"] ? localStorage : undefined;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLocalStorageState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLockFn/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLockFn/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


function useLockFn(fn) {
  var _this = this;
  var lockRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {
      var ret, e_1;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (lockRef.current) return [2 /*return*/];
            lockRef.current = true;
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3,, 4]);
            return [4 /*yield*/, fn.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args), false))];
          case 2:
            ret = _a.sent();
            lockRef.current = false;
            return [2 /*return*/, ret];
          case 3:
            e_1 = _a.sent();
            lockRef.current = false;
            throw e_1;
          case 4:
            return [2 /*return*/];
        }
      });
    });
  }, [fn]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockFn);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLongPress/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLongPress/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");





var touchSupported = _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"] && (
// @ts-ignore
'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
function useLongPress(onLongPress, target, _a) {
  var _b = _a === void 0 ? {} : _a,
    _c = _b.delay,
    delay = _c === void 0 ? 300 : _c,
    moveThreshold = _b.moveThreshold,
    onClick = _b.onClick,
    onLongPressEnd = _b.onLongPressEnd;
  var onLongPressRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(onLongPress);
  var onClickRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(onClick);
  var onLongPressEndRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(onLongPressEnd);
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var isTriggeredRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var pervPositionRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    x: 0,
    y: 0
  });
  var hasMoveThreshold = !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && moveThreshold.x > 0 || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && moveThreshold.y > 0);
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_4__.getTargetElement)(target);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var overThreshold = function (event) {
      var _a = getClientPosition(event),
        clientX = _a.clientX,
        clientY = _a.clientY;
      var offsetX = Math.abs(clientX - pervPositionRef.current.x);
      var offsetY = Math.abs(clientY - pervPositionRef.current.y);
      return !!((moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.x) && offsetX > moveThreshold.x || (moveThreshold === null || moveThreshold === void 0 ? void 0 : moveThreshold.y) && offsetY > moveThreshold.y);
    };
    function getClientPosition(event) {
      if (event instanceof TouchEvent) {
        return {
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY
        };
      }
      if (event instanceof MouseEvent) {
        return {
          clientX: event.clientX,
          clientY: event.clientY
        };
      }
      console.warn('Unsupported event type');
      return {
        clientX: 0,
        clientY: 0
      };
    }
    var onStart = function (event) {
      if (hasMoveThreshold) {
        var _a = getClientPosition(event),
          clientX = _a.clientX,
          clientY = _a.clientY;
        pervPositionRef.current.x = clientX;
        pervPositionRef.current.y = clientY;
      }
      timerRef.current = setTimeout(function () {
        onLongPressRef.current(event);
        isTriggeredRef.current = true;
      }, delay);
    };
    var onMove = function (event) {
      if (timerRef.current && overThreshold(event)) {
        clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    };
    var onEnd = function (event, shouldTriggerClick) {
      var _a;
      if (shouldTriggerClick === void 0) {
        shouldTriggerClick = false;
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (isTriggeredRef.current) {
        (_a = onLongPressEndRef.current) === null || _a === void 0 ? void 0 : _a.call(onLongPressEndRef, event);
      }
      if (shouldTriggerClick && !isTriggeredRef.current && onClickRef.current) {
        onClickRef.current(event);
      }
      isTriggeredRef.current = false;
    };
    var onEndWithClick = function (event) {
      return onEnd(event, true);
    };
    if (!touchSupported) {
      targetElement.addEventListener('mousedown', onStart);
      targetElement.addEventListener('mouseup', onEndWithClick);
      targetElement.addEventListener('mouseleave', onEnd);
      if (hasMoveThreshold) targetElement.addEventListener('mousemove', onMove);
    } else {
      targetElement.addEventListener('touchstart', onStart);
      targetElement.addEventListener('touchend', onEndWithClick);
      if (hasMoveThreshold) targetElement.addEventListener('touchmove', onMove);
    }
    return function () {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        isTriggeredRef.current = false;
      }
      if (!touchSupported) {
        targetElement.removeEventListener('mousedown', onStart);
        targetElement.removeEventListener('mouseup', onEndWithClick);
        targetElement.removeEventListener('mouseleave', onEnd);
        if (hasMoveThreshold) targetElement.removeEventListener('mousemove', onMove);
      } else {
        targetElement.removeEventListener('touchstart', onStart);
        targetElement.removeEventListener('touchend', onEndWithClick);
        if (hasMoveThreshold) targetElement.removeEventListener('touchmove', onMove);
      }
    };
  }, [], target);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLongPress);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMap/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMap/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");



function useMap(initialValue) {
  var getInitValue = function () {
    return new Map(initialValue);
  };
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitValue), 2),
    map = _a[0],
    setMap = _a[1];
  var set = function (key, entry) {
    setMap(function (prev) {
      var temp = new Map(prev);
      temp.set(key, entry);
      return temp;
    });
  };
  var setAll = function (newMap) {
    setMap(new Map(newMap));
  };
  var remove = function (key) {
    setMap(function (prev) {
      var temp = new Map(prev);
      temp.delete(key);
      return temp;
    });
  };
  var reset = function () {
    return setMap(getInitValue());
  };
  var get = function (key) {
    return map.get(key);
  };
  return [map, {
    set: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(set),
    setAll: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(setAll),
    remove: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(remove),
    reset: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(reset),
    get: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(get)
  }];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMap);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");



function useMemoizedFn(fn) {
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn)) {
      console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return fn;
  }, [fn]);
  var memoizedFn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!memoizedFn.current) {
    memoizedFn.current = function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMemoizedFn);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMount/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMount/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");



var useMount = function (fn) {
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn)) {
      console.error("useMount: parameter `fn` expected to be a function, but got \"".concat(typeof fn, "\"."));
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fn === null || fn === void 0 ? void 0 : fn();
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMount);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMouse/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMouse/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useRafState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");




var initState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
  elementX: NaN,
  elementY: NaN,
  elementH: NaN,
  elementW: NaN,
  elementPosX: NaN,
  elementPosY: NaN
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (target) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)((0,_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])(initState), 2),
    state = _a[0],
    setState = _a[1];
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_2__["default"])('mousemove', function (event) {
    var screenX = event.screenX,
      screenY = event.screenY,
      clientX = event.clientX,
      clientY = event.clientY,
      pageX = event.pageX,
      pageY = event.pageY;
    var newState = {
      screenX: screenX,
      screenY: screenY,
      clientX: clientX,
      clientY: clientY,
      pageX: pageX,
      pageY: pageY,
      elementX: NaN,
      elementY: NaN,
      elementH: NaN,
      elementW: NaN,
      elementPosX: NaN,
      elementPosY: NaN
    };
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_3__.getTargetElement)(target);
    if (targetElement) {
      var _a = targetElement.getBoundingClientRect(),
        left = _a.left,
        top_1 = _a.top,
        width = _a.width,
        height = _a.height;
      newState.elementPosX = left + window.pageXOffset;
      newState.elementPosY = top_1 + window.pageYOffset;
      newState.elementX = pageX - newState.elementPosX;
      newState.elementY = pageY - newState.elementPosY;
      newState.elementW = width;
      newState.elementH = height;
    }
    setState(newState);
  }, {
    target: function () {
      return document;
    }
  });
  return state;
});

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMutationObserver/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMutationObserver/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useDeepCompareWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useDeepCompareWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useDeepCompareWithTarget.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");



var useMutationObserver = function (callback, target, options) {
  if (options === void 0) {
    options = {};
  }
  var callbackRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_0__["default"])(callback);
  (0,_utils_useDeepCompareWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var element = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_2__.getTargetElement)(target);
    if (!element) {
      return;
    }
    var observer = new MutationObserver(callbackRef.current);
    observer.observe(element, options);
    return function () {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options], target);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMutationObserver);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useNetwork/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useNetwork/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var NetworkEventType;
(function (NetworkEventType) {
  NetworkEventType["ONLINE"] = "online";
  NetworkEventType["OFFLINE"] = "offline";
  NetworkEventType["CHANGE"] = "change";
})(NetworkEventType || (NetworkEventType = {}));
function getConnection() {
  var nav = navigator;
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(nav)) return null;
  return nav.connection || nav.mozConnection || nav.webkitConnection;
}
function getConnectionProperty() {
  var c = getConnection();
  if (!c) return {};
  return {
    rtt: c.rtt,
    type: c.type,
    saveData: c.saveData,
    downlink: c.downlink,
    downlinkMax: c.downlinkMax,
    effectiveType: c.effectiveType
  };
}
function useNetwork() {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        since: undefined,
        online: navigator === null || navigator === void 0 ? void 0 : navigator.onLine
      }, getConnectionProperty());
    }), 2),
    state = _a[0],
    setState = _a[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var onOnline = function () {
      setState(function (prevState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, prevState), {
          online: true,
          since: new Date()
        });
      });
    };
    var onOffline = function () {
      setState(function (prevState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, prevState), {
          online: false,
          since: new Date()
        });
      });
    };
    var onConnectionChange = function () {
      setState(function (prevState) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, prevState), getConnectionProperty());
      });
    };
    window.addEventListener(NetworkEventType.ONLINE, onOnline);
    window.addEventListener(NetworkEventType.OFFLINE, onOffline);
    var connection = getConnection();
    connection === null || connection === void 0 ? void 0 : connection.addEventListener(NetworkEventType.CHANGE, onConnectionChange);
    return function () {
      window.removeEventListener(NetworkEventType.ONLINE, onOnline);
      window.removeEventListener(NetworkEventType.OFFLINE, onOffline);
      connection === null || connection === void 0 ? void 0 : connection.removeEventListener(NetworkEventType.CHANGE, onConnectionChange);
    };
  }, []);
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNetwork);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePagination/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePagination/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useRequest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/index.js");




var usePagination = function (service, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var _b = options.defaultPageSize,
    defaultPageSize = _b === void 0 ? 10 : _b,
    _c = options.defaultCurrent,
    defaultCurrent = _c === void 0 ? 1 : _c,
    rest = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__rest)(options, ["defaultPageSize", "defaultCurrent"]);
  var result = (0,_useRequest__WEBPACK_IMPORTED_MODULE_2__["default"])(service, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({
    defaultParams: [{
      current: defaultCurrent,
      pageSize: defaultPageSize
    }],
    refreshDepsAction: function () {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      changeCurrent(1);
    }
  }, rest));
  var _d = result.params[0] || {},
    _e = _d.current,
    current = _e === void 0 ? 1 : _e,
    _f = _d.pageSize,
    pageSize = _f === void 0 ? defaultPageSize : _f;
  var total = ((_a = result.data) === null || _a === void 0 ? void 0 : _a.total) || 0;
  var totalPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]);
  var onChange = function (c, p) {
    var toCurrent = c <= 0 ? 1 : c;
    var toPageSize = p <= 0 ? 1 : p;
    var tempTotalPage = Math.ceil(total / toPageSize);
    if (toCurrent > tempTotalPage) {
      toCurrent = Math.max(1, tempTotalPage);
    }
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(result.params || []),
      _b = _a[0],
      oldPaginationParams = _b === void 0 ? {} : _b,
      restParams = _a.slice(1);
    result.run.apply(result, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([(0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, oldPaginationParams), {
      current: toCurrent,
      pageSize: toPageSize
    })], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(restParams), false));
  };
  var changeCurrent = function (c) {
    onChange(c, pageSize);
  };
  var changePageSize = function (p) {
    onChange(current, p);
  };
  return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, result), {
    pagination: {
      current: current,
      pageSize: pageSize,
      total: total,
      totalPage: totalPage,
      onChange: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(onChange),
      changeCurrent: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(changeCurrent),
      changePageSize: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_3__["default"])(changePageSize)
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePagination);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePrevious/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/usePrevious/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var defaultShouldUpdate = function (a, b) {
  return !Object.is(a, b);
};
function usePrevious(state, shouldUpdate) {
  if (shouldUpdate === void 0) {
    shouldUpdate = defaultShouldUpdate;
  }
  var prevRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var curRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (shouldUpdate(curRef.current, state)) {
    prevRef.current = curRef.current;
    curRef.current = state;
  }
  return prevRef.current;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePrevious);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafInterval/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafInterval/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var setRafInterval = function (callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setInterval(callback, delay)
    };
  }
  var start = new Date().getTime();
  var handle = {
    id: 0
  };
  var loop = function () {
    var current = new Date().getTime();
    if (current - start >= delay) {
      callback();
      start = new Date().getTime();
    }
    handle.id = requestAnimationFrame(loop);
  };
  handle.id = requestAnimationFrame(loop);
  return handle;
};
function cancelAnimationFrameIsNotDefined(t) {
  return typeof cancelAnimationFrame === typeof undefined;
}
var clearRafInterval = function (handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearInterval(handle.id);
  }
  cancelAnimationFrame(handle.id);
};
function useRafInterval(fn, delay, options) {
  var immediate = options === null || options === void 0 ? void 0 : options.immediate;
  var fnRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(delay) || delay < 0) return;
    if (immediate) {
      fnRef.current();
    }
    timerRef.current = setRafInterval(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearRafInterval(timerRef.current);
      }
    };
  }, [delay]);
  var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (timerRef.current) {
      clearRafInterval(timerRef.current);
    }
  }, []);
  return clear;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafInterval);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");



function useRafState(initialState) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var setRafState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (value) {
    cancelAnimationFrame(ref.current);
    ref.current = requestAnimationFrame(function () {
      setState(value);
    });
  }, []);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    cancelAnimationFrame(ref.current);
  });
  return [state, setRafState];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafTimeout/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafTimeout/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var setRafTimeout = function (callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  if (typeof requestAnimationFrame === typeof undefined) {
    return {
      id: setTimeout(callback, delay)
    };
  }
  var handle = {
    id: 0
  };
  var startTime = new Date().getTime();
  var loop = function () {
    var current = new Date().getTime();
    if (current - startTime >= delay) {
      callback();
    } else {
      handle.id = requestAnimationFrame(loop);
    }
  };
  handle.id = requestAnimationFrame(loop);
  return handle;
};
function cancelAnimationFrameIsNotDefined(t) {
  return typeof cancelAnimationFrame === typeof undefined;
}
var clearRafTimeout = function (handle) {
  if (cancelAnimationFrameIsNotDefined(handle.id)) {
    return clearTimeout(handle.id);
  }
  cancelAnimationFrame(handle.id);
};
function useRafTimeout(fn, delay) {
  var fnRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(delay) || delay < 0) return;
    timerRef.current = setRafTimeout(function () {
      fnRef.current();
    }, delay);
    return function () {
      if (timerRef.current) {
        clearRafTimeout(timerRef.current);
      }
    };
  }, [delay]);
  var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (timerRef.current) {
      clearRafTimeout(timerRef.current);
    }
  }, []);
  return clear;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRafTimeout);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useReactive/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useReactive/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isPlainObject.js");
/* harmony import */ var _useCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useCreation */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useUpdate */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js");




// k:v 原对象:代理过的对象
var proxyMap = new WeakMap();
// k:v 代理过的对象:原对象
var rawMap = new WeakMap();
function observer(initialVal, cb) {
  var existingProxy = proxyMap.get(initialVal);
  // 添加缓存 防止重新构建proxy
  if (existingProxy) {
    return existingProxy;
  }
  // 防止代理已经代理过的对象
  // https://github.com/alibaba/hooks/issues/839
  if (rawMap.has(initialVal)) {
    return initialVal;
  }
  var proxy = new Proxy(initialVal, {
    get: function (target, key, receiver) {
      var res = Reflect.get(target, key, receiver);
      // Only proxy plain object or array,
      // otherwise it will cause: https://github.com/alibaba/hooks/issues/2080
      return (0,lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_1__["default"])(res) || Array.isArray(res) ? observer(res, cb) : res;
    },
    set: function (target, key, val) {
      var ret = Reflect.set(target, key, val);
      cb();
      return ret;
    },
    deleteProperty: function (target, key) {
      var ret = Reflect.deleteProperty(target, key);
      cb();
      return ret;
    }
  });
  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);
  return proxy;
}
function useReactive(initialState) {
  var update = (0,_useUpdate__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialState);
  var state = (0,_useCreation__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    return observer(stateRef.current, function () {
      update();
    });
  }, []);
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useReactive);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCache: () => (/* reexport safe */ _src_utils_cache__WEBPACK_IMPORTED_MODULE_0__.clearCache),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_useRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/useRequest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequest.js");
/* harmony import */ var _src_utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/utils/cache */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cache.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_useRequest__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/Fetch.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/Fetch.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");

/* eslint-disable @typescript-eslint/no-parameter-properties */

var Fetch = /** @class */function () {
  function Fetch(serviceRef, options, subscribe, initState) {
    if (initState === void 0) {
      initState = {};
    }
    this.serviceRef = serviceRef;
    this.options = options;
    this.subscribe = subscribe;
    this.initState = initState;
    this.count = 0;
    this.state = {
      loading: false,
      params: undefined,
      data: undefined,
      error: undefined
    };
    this.state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.state), {
      loading: !options.manual
    }), initState);
  }
  Fetch.prototype.setState = function (s) {
    if (s === void 0) {
      s = {};
    }
    this.state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.state), s);
    this.subscribe();
  };
  Fetch.prototype.runPluginHandler = function (event) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }
    // @ts-ignore
    var r = this.pluginImpls.map(function (i) {
      var _a;
      return (_a = i[event]) === null || _a === void 0 ? void 0 : _a.call.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([i], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(rest), false));
    }).filter(Boolean);
    return Object.assign.apply(Object, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([{}], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(r), false));
  };
  Fetch.prototype.runAsync = function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function () {
      var currentCount, _l, _m, stopNow, _o, returnNow, state, servicePromise, res, error_1;
      var _p;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_q) {
        switch (_q.label) {
          case 0:
            this.count += 1;
            currentCount = this.count;
            _l = this.runPluginHandler('onBefore', params), _m = _l.stopNow, stopNow = _m === void 0 ? false : _m, _o = _l.returnNow, returnNow = _o === void 0 ? false : _o, state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(_l, ["stopNow", "returnNow"]);
            // stop request
            if (stopNow) {
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
              loading: true,
              params: params
            }, state));
            // return now
            if (returnNow) {
              return [2 /*return*/, Promise.resolve(state.data)];
            }
            (_b = (_a = this.options).onBefore) === null || _b === void 0 ? void 0 : _b.call(_a, params);
            _q.label = 1;
          case 1:
            _q.trys.push([1, 3,, 4]);
            servicePromise = this.runPluginHandler('onRequest', this.serviceRef.current, params).servicePromise;
            if (!servicePromise) {
              servicePromise = (_p = this.serviceRef).current.apply(_p, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(params), false));
            }
            return [4 /*yield*/, servicePromise];
          case 2:
            res = _q.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;
            this.setState({
              data: res,
              error: undefined,
              loading: false
            });
            (_d = (_c = this.options).onSuccess) === null || _d === void 0 ? void 0 : _d.call(_c, res, params);
            this.runPluginHandler('onSuccess', res, params);
            (_f = (_e = this.options).onFinally) === null || _f === void 0 ? void 0 : _f.call(_e, params, res, undefined);
            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, res, undefined);
            }
            return [2 /*return*/, res];
          case 3:
            error_1 = _q.sent();
            if (currentCount !== this.count) {
              // prevent run.then when request is canceled
              return [2 /*return*/, new Promise(function () {})];
            }
            this.setState({
              error: error_1,
              loading: false
            });
            (_h = (_g = this.options).onError) === null || _h === void 0 ? void 0 : _h.call(_g, error_1, params);
            this.runPluginHandler('onError', error_1, params);
            (_k = (_j = this.options).onFinally) === null || _k === void 0 ? void 0 : _k.call(_j, params, undefined, error_1);
            if (currentCount === this.count) {
              this.runPluginHandler('onFinally', params, undefined, error_1);
            }
            throw error_1;
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };

  Fetch.prototype.run = function () {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    this.runAsync.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(params), false)).catch(function (error) {
      if (!_this.options.onError) {
        console.error(error);
      }
    });
  };
  Fetch.prototype.cancel = function () {
    this.count += 1;
    this.setState({
      loading: false
    });
    this.runPluginHandler('onCancel');
  };
  Fetch.prototype.refresh = function () {
    // @ts-ignore
    this.run.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(this.state.params || []), false));
  };
  Fetch.prototype.refreshAsync = function () {
    // @ts-ignore
    return this.runAsync.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(this.state.params || []), false));
  };
  Fetch.prototype.mutate = function (data) {
    var targetData = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.isFunction)(data) ? data(this.state.data) : data;
    this.runPluginHandler('onMutate', targetData);
    this.setState({
      data: targetData
    });
  };
  return Fetch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fetch);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");



// support refreshDeps & ready
var useAutoRunPlugin = function (fetchInstance, _a) {
  var manual = _a.manual,
    _b = _a.ready,
    ready = _b === void 0 ? true : _b,
    _c = _a.defaultParams,
    defaultParams = _c === void 0 ? [] : _c,
    _d = _a.refreshDeps,
    refreshDeps = _d === void 0 ? [] : _d,
    refreshDepsAction = _a.refreshDepsAction;
  var hasAutoRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  hasAutoRun.current = false;
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!manual && ready) {
      hasAutoRun.current = true;
      fetchInstance.run.apply(fetchInstance, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(defaultParams), false));
    }
  }, [ready]);
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (hasAutoRun.current) {
      return;
    }
    if (!manual) {
      hasAutoRun.current = true;
      if (refreshDepsAction) {
        refreshDepsAction();
      } else {
        fetchInstance.refresh();
      }
    }
  }, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(refreshDeps), false));
  return {
    onBefore: function () {
      if (!ready) {
        return {
          stopNow: true
        };
      }
    }
  };
};
useAutoRunPlugin.onInit = function (_a) {
  var _b = _a.ready,
    ready = _b === void 0 ? true : _b,
    manual = _a.manual;
  return {
    loading: !manual && ready
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAutoRunPlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useCreation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useCreation */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cache */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cache.js");
/* harmony import */ var _utils_cachePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cachePromise */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cachePromise.js");
/* harmony import */ var _utils_cacheSubscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cacheSubscribe */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js");







var useCachePlugin = function (fetchInstance, _a) {
  var cacheKey = _a.cacheKey,
    _b = _a.cacheTime,
    cacheTime = _b === void 0 ? 5 * 60 * 1000 : _b,
    _c = _a.staleTime,
    staleTime = _c === void 0 ? 0 : _c,
    customSetCache = _a.setCache,
    customGetCache = _a.getCache;
  var unSubscribeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var currentPromiseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var _setCache = function (key, cachedData) {
    if (customSetCache) {
      customSetCache(cachedData);
    } else {
      _utils_cache__WEBPACK_IMPORTED_MODULE_1__.setCache(key, cacheTime, cachedData);
    }
    _utils_cacheSubscribe__WEBPACK_IMPORTED_MODULE_2__.trigger(key, cachedData.data);
  };
  var _getCache = function (key, params) {
    if (params === void 0) {
      params = [];
    }
    if (customGetCache) {
      return customGetCache(params);
    }
    return _utils_cache__WEBPACK_IMPORTED_MODULE_1__.getCache(key);
  };
  (0,_useCreation__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    if (!cacheKey) {
      return;
    }
    // get data from cache when init
    var cacheData = _getCache(cacheKey);
    if (cacheData && Object.hasOwnProperty.call(cacheData, 'data')) {
      fetchInstance.state.data = cacheData.data;
      fetchInstance.state.params = cacheData.params;
      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        fetchInstance.state.loading = false;
      }
    }
    // subscribe same cachekey update, trigger update
    unSubscribeRef.current = _utils_cacheSubscribe__WEBPACK_IMPORTED_MODULE_2__.subscribe(cacheKey, function (data) {
      fetchInstance.setState({
        data: data
      });
    });
  }, []);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    var _a;
    (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
  });
  if (!cacheKey) {
    return {};
  }
  return {
    onBefore: function (params) {
      var cacheData = _getCache(cacheKey, params);
      if (!cacheData || !Object.hasOwnProperty.call(cacheData, 'data')) {
        return {};
      }
      // If the data is fresh, stop request
      if (staleTime === -1 || new Date().getTime() - cacheData.time <= staleTime) {
        return {
          loading: false,
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          error: undefined,
          returnNow: true
        };
      } else {
        // If the data is stale, return data, and request continue
        return {
          data: cacheData === null || cacheData === void 0 ? void 0 : cacheData.data,
          error: undefined
        };
      }
    },
    onRequest: function (service, args) {
      var servicePromise = _utils_cachePromise__WEBPACK_IMPORTED_MODULE_5__.getCachePromise(cacheKey);
      // If has servicePromise, and is not trigger by self, then use it
      if (servicePromise && servicePromise !== currentPromiseRef.current) {
        return {
          servicePromise: servicePromise
        };
      }
      servicePromise = service.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__read)(args), false));
      currentPromiseRef.current = servicePromise;
      _utils_cachePromise__WEBPACK_IMPORTED_MODULE_5__.setCachePromise(cacheKey, servicePromise);
      return {
        servicePromise: servicePromise
      };
    },
    onSuccess: function (data, params) {
      var _a;
      if (cacheKey) {
        // cancel subscribe, avoid trgger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data,
          params: params,
          time: new Date().getTime()
        });
        // resubscribe
        unSubscribeRef.current = _utils_cacheSubscribe__WEBPACK_IMPORTED_MODULE_2__.subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    },
    onMutate: function (data) {
      var _a;
      if (cacheKey) {
        // cancel subscribe, avoid trigger self
        (_a = unSubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unSubscribeRef);
        _setCache(cacheKey, {
          data: data,
          params: fetchInstance.state.params,
          time: new Date().getTime()
        });
        // resubscribe
        unSubscribeRef.current = _utils_cacheSubscribe__WEBPACK_IMPORTED_MODULE_2__.subscribe(cacheKey, function (d) {
          fetchInstance.setState({
            data: d
          });
        });
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCachePlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");



var useDebouncePlugin = function (fetchInstance, _a) {
  var debounceWait = _a.debounceWait,
    debounceLeading = _a.debounceLeading,
    debounceTrailing = _a.debounceTrailing,
    debounceMaxWait = _a.debounceMaxWait;
  var debouncedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var options = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var ret = {};
    if (debounceLeading !== undefined) {
      ret.leading = debounceLeading;
    }
    if (debounceTrailing !== undefined) {
      ret.trailing = debounceTrailing;
    }
    if (debounceMaxWait !== undefined) {
      ret.maxWait = debounceMaxWait;
    }
    return ret;
  }, [debounceLeading, debounceTrailing, debounceMaxWait]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (debounceWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      debouncedRef.current = (0,lodash_debounce__WEBPACK_IMPORTED_MODULE_1__["default"])(function (callback) {
        callback();
      }, debounceWait, options);
      // debounce runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
      fetchInstance.runAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
          var _a;
          (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.call(debouncedRef, function () {
            _originRunAsync_1.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(args), false)).then(resolve).catch(reject);
          });
        });
      };
      return function () {
        var _a;
        (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
        fetchInstance.runAsync = _originRunAsync_1;
      };
    }
  }, [debounceWait, options]);
  if (!debounceWait) {
    return {};
  }
  return {
    onCancel: function () {
      var _a;
      (_a = debouncedRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDebouncePlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var useLoadingDelayPlugin = function (fetchInstance, _a) {
  var loadingDelay = _a.loadingDelay,
    ready = _a.ready;
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!loadingDelay) {
    return {};
  }
  var cancelTimeout = function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };
  return {
    onBefore: function () {
      cancelTimeout();
      // Two cases:
      // 1. ready === undefined
      // 2. ready === true
      if (ready !== false) {
        timerRef.current = setTimeout(function () {
          fetchInstance.setState({
            loading: true
          });
        }, loadingDelay);
      }
      return {
        loading: false
      };
    },
    onFinally: function () {
      cancelTimeout();
    },
    onCancel: function () {
      cancelTimeout();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLoadingDelayPlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");
/* harmony import */ var _utils_isDocumentVisible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isDocumentVisible */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js");
/* harmony import */ var _utils_subscribeReVisible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/subscribeReVisible */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js");




var usePollingPlugin = function (fetchInstance, _a) {
  var pollingInterval = _a.pollingInterval,
    _b = _a.pollingWhenHidden,
    pollingWhenHidden = _b === void 0 ? true : _b,
    _c = _a.pollingErrorRetryCount,
    pollingErrorRetryCount = _c === void 0 ? -1 : _c;
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var unsubscribeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var countRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var stopPolling = function () {
    var _a;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    if (!pollingInterval) {
      stopPolling();
    }
  }, [pollingInterval]);
  if (!pollingInterval) {
    return {};
  }
  return {
    onBefore: function () {
      stopPolling();
    },
    onError: function () {
      countRef.current += 1;
    },
    onSuccess: function () {
      countRef.current = 0;
    },
    onFinally: function () {
      if (pollingErrorRetryCount === -1 ||
      // When an error occurs, the request is not repeated after pollingErrorRetryCount retries
      pollingErrorRetryCount !== -1 && countRef.current <= pollingErrorRetryCount) {
        timerRef.current = setTimeout(function () {
          // if pollingWhenHidden = false && document is hidden, then stop polling and subscribe revisible
          if (!pollingWhenHidden && !(0,_utils_isDocumentVisible__WEBPACK_IMPORTED_MODULE_2__["default"])()) {
            unsubscribeRef.current = (0,_utils_subscribeReVisible__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
              fetchInstance.refresh();
            });
          } else {
            fetchInstance.refresh();
          }
        }, pollingInterval);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function () {
      stopPolling();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePollingPlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils_limit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/limit */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/limit.js");
/* harmony import */ var _utils_subscribeFocus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/subscribeFocus */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js");




var useRefreshOnWindowFocusPlugin = function (fetchInstance, _a) {
  var refreshOnWindowFocus = _a.refreshOnWindowFocus,
    _b = _a.focusTimespan,
    focusTimespan = _b === void 0 ? 5000 : _b;
  var unsubscribeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var stopSubscribe = function () {
    var _a;
    (_a = unsubscribeRef.current) === null || _a === void 0 ? void 0 : _a.call(unsubscribeRef);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (refreshOnWindowFocus) {
      var limitRefresh_1 = (0,_utils_limit__WEBPACK_IMPORTED_MODULE_1__["default"])(fetchInstance.refresh.bind(fetchInstance), focusTimespan);
      unsubscribeRef.current = (0,_utils_subscribeFocus__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
        limitRefresh_1();
      });
    }
    return function () {
      stopSubscribe();
    };
  }, [refreshOnWindowFocus, focusTimespan]);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    stopSubscribe();
  });
  return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRefreshOnWindowFocusPlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var useRetryPlugin = function (fetchInstance, _a) {
  var retryInterval = _a.retryInterval,
    retryCount = _a.retryCount;
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var countRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var triggerByRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  if (!retryCount) {
    return {};
  }
  return {
    onBefore: function () {
      if (!triggerByRetry.current) {
        countRef.current = 0;
      }
      triggerByRetry.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    onSuccess: function () {
      countRef.current = 0;
    },
    onError: function () {
      countRef.current += 1;
      if (retryCount === -1 || countRef.current <= retryCount) {
        // Exponential backoff
        var timeout = retryInterval !== null && retryInterval !== void 0 ? retryInterval : Math.min(1000 * Math.pow(2, countRef.current), 30000);
        timerRef.current = setTimeout(function () {
          triggerByRetry.current = true;
          fetchInstance.refresh();
        }, timeout);
      } else {
        countRef.current = 0;
      }
    },
    onCancel: function () {
      countRef.current = 0;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRetryPlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");



var useThrottlePlugin = function (fetchInstance, _a) {
  var throttleWait = _a.throttleWait,
    throttleLeading = _a.throttleLeading,
    throttleTrailing = _a.throttleTrailing;
  var throttledRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var options = {};
  if (throttleLeading !== undefined) {
    options.leading = throttleLeading;
  }
  if (throttleTrailing !== undefined) {
    options.trailing = throttleTrailing;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (throttleWait) {
      var _originRunAsync_1 = fetchInstance.runAsync.bind(fetchInstance);
      throttledRef.current = (0,lodash_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(function (callback) {
        callback();
      }, throttleWait, options);
      // throttle runAsync should be promise
      // https://github.com/lodash/lodash/issues/4400#issuecomment-834800398
      fetchInstance.runAsync = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
          var _a;
          (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.call(throttledRef, function () {
            _originRunAsync_1.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(args), false)).then(resolve).catch(reject);
          });
        });
      };
      return function () {
        var _a;
        fetchInstance.runAsync = _originRunAsync_1;
        (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
      };
    }
  }, [throttleWait, throttleLeading, throttleTrailing]);
  if (!throttleWait) {
    return {};
  }
  return {
    onCancel: function () {
      var _a;
      (_a = throttledRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThrottlePlugin);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequest.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequest.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _plugins_useAutoRunPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plugins/useAutoRunPlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useAutoRunPlugin.js");
/* harmony import */ var _plugins_useCachePlugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plugins/useCachePlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useCachePlugin.js");
/* harmony import */ var _plugins_useDebouncePlugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/useDebouncePlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useDebouncePlugin.js");
/* harmony import */ var _plugins_useLoadingDelayPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/useLoadingDelayPlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useLoadingDelayPlugin.js");
/* harmony import */ var _plugins_usePollingPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/usePollingPlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/usePollingPlugin.js");
/* harmony import */ var _plugins_useRefreshOnWindowFocusPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/useRefreshOnWindowFocusPlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRefreshOnWindowFocusPlugin.js");
/* harmony import */ var _plugins_useRetryPlugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plugins/useRetryPlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useRetryPlugin.js");
/* harmony import */ var _plugins_useThrottlePlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/useThrottlePlugin */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/plugins/useThrottlePlugin.js");
/* harmony import */ var _useRequestImplement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useRequestImplement */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequestImplement.js");










// function useRequest<TData, TParams extends any[], TFormated, TTFormated extends TFormated = any>(
//   service: Service<TData, TParams>,
//   options: OptionsWithFormat<TData, TParams, TFormated, TTFormated>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TFormated, TParams>
// function useRequest<TData, TParams extends any[]>(
//   service: Service<TData, TParams>,
//   options?: OptionsWithoutFormat<TData, TParams>,
//   plugins?: Plugin<TData, TParams>[],
// ): Result<TData, TParams>
function useRequest(service, options, plugins) {
  return (0,_useRequestImplement__WEBPACK_IMPORTED_MODULE_0__["default"])(service, options, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(plugins || []), false), [_plugins_useDebouncePlugin__WEBPACK_IMPORTED_MODULE_2__["default"], _plugins_useLoadingDelayPlugin__WEBPACK_IMPORTED_MODULE_3__["default"], _plugins_usePollingPlugin__WEBPACK_IMPORTED_MODULE_4__["default"], _plugins_useRefreshOnWindowFocusPlugin__WEBPACK_IMPORTED_MODULE_5__["default"], _plugins_useThrottlePlugin__WEBPACK_IMPORTED_MODULE_6__["default"], _plugins_useAutoRunPlugin__WEBPACK_IMPORTED_MODULE_7__["default"], _plugins_useCachePlugin__WEBPACK_IMPORTED_MODULE_8__["default"], _plugins_useRetryPlugin__WEBPACK_IMPORTED_MODULE_9__["default"]], false));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequestImplement.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/useRequestImplement.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useCreation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../useCreation */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useCreation/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../useMount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMount/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _useUpdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../useUpdate */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");
/* harmony import */ var _Fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fetch */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/Fetch.js");









function useRequestImplement(service, options, plugins) {
  if (options === void 0) {
    options = {};
  }
  if (plugins === void 0) {
    plugins = [];
  }
  var _a = options.manual,
    manual = _a === void 0 ? false : _a,
    rest = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__rest)(options, ["manual"]);
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (options.defaultParams && !Array.isArray(options.defaultParams)) {
      console.warn("expected defaultParams is array, got ".concat(typeof options.defaultParams));
    }
  }
  var fetchOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({
    manual: manual
  }, rest);
  var serviceRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(service);
  var update = (0,_useUpdate__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var fetchInstance = (0,_useCreation__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    var initState = plugins.map(function (p) {
      var _a;
      return (_a = p === null || p === void 0 ? void 0 : p.onInit) === null || _a === void 0 ? void 0 : _a.call(p, fetchOptions);
    }).filter(Boolean);
    return new _Fetch__WEBPACK_IMPORTED_MODULE_5__["default"](serviceRef, fetchOptions, update, Object.assign.apply(Object, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([{}], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(initState), false)));
  }, []);
  fetchInstance.options = fetchOptions;
  // run all plugins hooks
  fetchInstance.pluginImpls = plugins.map(function (p) {
    return p(fetchInstance, fetchOptions);
  });
  (0,_useMount__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    if (!manual) {
      // useCachePlugin can set fetchInstance.state.params from cache when init
      var params = fetchInstance.state.params || options.defaultParams || [];
      // @ts-ignore
      fetchInstance.run.apply(fetchInstance, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(params), false));
    }
  });
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.cancel.bind(fetchInstance)),
    refresh: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.run.bind(fetchInstance)),
    runAsync: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(fetchInstance.mutate.bind(fetchInstance))
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequestImplement);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cache.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cache.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCache: () => (/* binding */ clearCache),
/* harmony export */   getCache: () => (/* binding */ getCache),
/* harmony export */   setCache: () => (/* binding */ setCache)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");

var cache = new Map();
var setCache = function (key, cacheTime, cachedData) {
  var currentCache = cache.get(key);
  if (currentCache === null || currentCache === void 0 ? void 0 : currentCache.timer) {
    clearTimeout(currentCache.timer);
  }
  var timer = undefined;
  if (cacheTime > -1) {
    // if cache out, clear it
    timer = setTimeout(function () {
      cache.delete(key);
    }, cacheTime);
  }
  cache.set(key, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, cachedData), {
    timer: timer
  }));
};
var getCache = function (key) {
  return cache.get(key);
};
var clearCache = function (key) {
  if (key) {
    var cacheKeys = Array.isArray(key) ? key : [key];
    cacheKeys.forEach(function (cacheKey) {
      return cache.delete(cacheKey);
    });
  } else {
    cache.clear();
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cachePromise.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cachePromise.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCachePromise: () => (/* binding */ getCachePromise),
/* harmony export */   setCachePromise: () => (/* binding */ setCachePromise)
/* harmony export */ });
var cachePromise = new Map();
var getCachePromise = function (cacheKey) {
  return cachePromise.get(cacheKey);
};
var setCachePromise = function (cacheKey, promise) {
  // Should cache the same promise, cannot be promise.finally
  // Because the promise.finally will change the reference of the promise
  cachePromise.set(cacheKey, promise);
  // no use promise.finally for compatibility
  promise.then(function (res) {
    cachePromise.delete(cacheKey);
    return res;
  }).catch(function () {
    cachePromise.delete(cacheKey);
  });
};


/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/cacheSubscribe.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subscribe: () => (/* binding */ subscribe),
/* harmony export */   trigger: () => (/* binding */ trigger)
/* harmony export */ });
var listeners = {};
var trigger = function (key, data) {
  if (listeners[key]) {
    listeners[key].forEach(function (item) {
      return item(data);
    });
  }
};
var subscribe = function (key, listener) {
  if (!listeners[key]) {
    listeners[key] = [];
  }
  listeners[key].push(listener);
  return function unsubscribe() {
    var index = listeners[key].indexOf(listener);
    listeners[key].splice(index, 1);
  };
};


/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDocumentVisible)
/* harmony export */ });
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");

function isDocumentVisible() {
  if (_utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return document.visibilityState !== 'hidden';
  }
  return true;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isOnline.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isOnline.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isOnline)
/* harmony export */ });
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");

function isOnline() {
  if (_utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"] && typeof navigator.onLine !== 'undefined') {
    return navigator.onLine;
  }
  return true;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/limit.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/limit.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ limit)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");

function limit(fn, timespan) {
  var pending = false;
  return function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (pending) return;
    pending = true;
    fn.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args), false));
    setTimeout(function () {
      pending = false;
    }, timespan);
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeFocus.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");
/* harmony import */ var _isDocumentVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDocumentVisible */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js");
/* harmony import */ var _isOnline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isOnline */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isOnline.js");
// from swr



var listeners = [];
function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  };
}
if (_utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  var revalidate = function () {
    if (!(0,_isDocumentVisible__WEBPACK_IMPORTED_MODULE_1__["default"])() || !(0,_isOnline__WEBPACK_IMPORTED_MODULE_2__["default"])()) return;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', revalidate, false);
  window.addEventListener('focus', revalidate, false);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribe);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/subscribeReVisible.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");
/* harmony import */ var _isDocumentVisible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDocumentVisible */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRequest/src/utils/isDocumentVisible.js");


var listeners = [];
function subscribe(listener) {
  listeners.push(listener);
  return function unsubscribe() {
    var index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}
if (_utils_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  var revalidate = function () {
    if (!(0,_isDocumentVisible__WEBPACK_IMPORTED_MODULE_1__["default"])()) return;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  };
  window.addEventListener('visibilitychange', revalidate, false);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subscribe);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResetState/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResetState/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");



var useResetState = function (initialState) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var resetState = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    setState(initialState);
  });
  return [state, setState, resetState];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useResetState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResponsive/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useResponsive/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configResponsive: () => (/* binding */ configResponsive),
/* harmony export */   useResponsive: () => (/* binding */ useResponsive)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");



var subscribers = new Set();
var info;
var responsiveConfig = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
function handleResize() {
  var e_1, _a;
  var oldInfo = info;
  calculate();
  if (oldInfo === info) return;
  try {
    for (var subscribers_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(subscribers), subscribers_1_1 = subscribers_1.next(); !subscribers_1_1.done; subscribers_1_1 = subscribers_1.next()) {
      var subscriber = subscribers_1_1.value;
      subscriber();
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (subscribers_1_1 && !subscribers_1_1.done && (_a = subscribers_1.return)) _a.call(subscribers_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}
var listening = false;
function calculate() {
  var e_2, _a;
  var width = window.innerWidth;
  var newInfo = {};
  var shouldUpdate = false;
  try {
    for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(Object.keys(responsiveConfig)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      newInfo[key] = width >= responsiveConfig[key];
      if (newInfo[key] !== info[key]) {
        shouldUpdate = true;
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  if (shouldUpdate) {
    info = newInfo;
  }
}
function configResponsive(config) {
  responsiveConfig = config;
  if (info) calculate();
}
function useResponsive() {
  if (_utils_isBrowser__WEBPACK_IMPORTED_MODULE_2__["default"] && !listening) {
    info = {};
    calculate();
    window.addEventListener('resize', handleResize);
    listening = true;
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(info), 2),
    state = _a[0],
    setState = _a[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!_utils_isBrowser__WEBPACK_IMPORTED_MODULE_2__["default"]) return;
    // In React 18's StrictMode, useEffect perform twice, resize listener is remove, so handleResize is never perform.
    // https://github.com/alibaba/hooks/issues/1910
    if (!listening) {
      window.addEventListener('resize', handleResize);
    }
    var subscriber = function () {
      setState(info);
    };
    subscribers.add(subscriber);
    return function () {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        window.removeEventListener('resize', handleResize);
        listening = false;
      }
    };
  }, []);
  return state;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSafeState/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSafeState/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUnmountedRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useUnmountedRef */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmountedRef/index.js");



function useSafeState(initialState) {
  var unmountedRef = (0,_useUnmountedRef__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var setCurrentState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (currentState) {
    /** if component is unmounted, stop update */
    if (unmountedRef.current) return;
    setState(currentState);
  }, []);
  return [state, setCurrentState];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSafeState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useScroll/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useScroll/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useRafState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");





function useScroll(target, shouldUpdate) {
  if (shouldUpdate === void 0) {
    shouldUpdate = function () {
      return true;
    };
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)((0,_useRafState__WEBPACK_IMPORTED_MODULE_1__["default"])(), 2),
    position = _a[0],
    setPosition = _a[1];
  var shouldUpdateRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_2__["default"])(shouldUpdate);
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_4__.getTargetElement)(target, document);
    if (!el) {
      return;
    }
    var updatePosition = function () {
      var newPosition;
      if (el === document) {
        if (document.scrollingElement) {
          newPosition = {
            left: document.scrollingElement.scrollLeft,
            top: document.scrollingElement.scrollTop
          };
        } else {
          // When in quirks mode, the scrollingElement attribute returns the HTML body element if it exists and is potentially scrollable, otherwise it returns null.
          // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/scrollingElement
          // https://stackoverflow.com/questions/28633221/document-body-scrolltop-firefox-returns-0-only-js
          newPosition = {
            left: Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft),
            top: Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
          };
        }
      } else {
        newPosition = {
          left: el.scrollLeft,
          top: el.scrollTop
        };
      }
      if (shouldUpdateRef.current(newPosition)) {
        setPosition(newPosition);
      }
    };
    updatePosition();
    el.addEventListener('scroll', updatePosition);
    return function () {
      el.removeEventListener('scroll', updatePosition);
    };
  }, [], target);
  return position;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useScroll);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSelections/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSelections/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSelections)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");



function useSelections(items, defaultSelected) {
  if (defaultSelected === void 0) {
    defaultSelected = [];
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultSelected), 2),
    selected = _a[0],
    setSelected = _a[1];
  var selectedSet = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return new Set(selected);
  }, [selected]);
  var isSelected = function (item) {
    return selectedSet.has(item);
  };
  var select = function (item) {
    selectedSet.add(item);
    return setSelected(Array.from(selectedSet));
  };
  var unSelect = function (item) {
    selectedSet.delete(item);
    return setSelected(Array.from(selectedSet));
  };
  var toggle = function (item) {
    if (isSelected(item)) {
      unSelect(item);
    } else {
      select(item);
    }
  };
  var selectAll = function () {
    items.forEach(function (o) {
      selectedSet.add(o);
    });
    setSelected(Array.from(selectedSet));
  };
  var unSelectAll = function () {
    items.forEach(function (o) {
      selectedSet.delete(o);
    });
    setSelected(Array.from(selectedSet));
  };
  var noneSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.every(function (o) {
      return !selectedSet.has(o);
    });
  }, [items, selectedSet]);
  var allSelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return items.every(function (o) {
      return selectedSet.has(o);
    }) && !noneSelected;
  }, [items, selectedSet, noneSelected]);
  var partiallySelected = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return !noneSelected && !allSelected;
  }, [noneSelected, allSelected]);
  var toggleAll = function () {
    return allSelected ? unSelectAll() : selectAll();
  };
  return {
    selected: selected,
    noneSelected: noneSelected,
    allSelected: allSelected,
    partiallySelected: partiallySelected,
    setSelected: setSelected,
    isSelected: isSelected,
    select: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(select),
    unSelect: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(unSelect),
    toggle: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(toggle),
    selectAll: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(selectAll),
    unSelectAll: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(unSelectAll),
    toggleAll: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(toggleAll)
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSessionStorageState/index.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSessionStorageState/index.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createUseStorageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createUseStorageState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUseStorageState/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");


var useSessionStorageState = (0,_createUseStorageState__WEBPACK_IMPORTED_MODULE_0__.createUseStorageState)(function () {
  return _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"] ? sessionStorage : undefined;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSessionStorageState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSet/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSet/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");



function useSet(initialValue) {
  var getInitValue = function () {
    return new Set(initialValue);
  };
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getInitValue), 2),
    set = _a[0],
    setSet = _a[1];
  var add = function (key) {
    if (set.has(key)) {
      return;
    }
    setSet(function (prevSet) {
      var temp = new Set(prevSet);
      temp.add(key);
      return temp;
    });
  };
  var remove = function (key) {
    if (!set.has(key)) {
      return;
    }
    setSet(function (prevSet) {
      var temp = new Set(prevSet);
      temp.delete(key);
      return temp;
    });
  };
  var reset = function () {
    return setSet(getInitValue());
  };
  return [set, {
    add: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(add),
    remove: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(remove),
    reset: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_2__["default"])(reset)
  }];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSet);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSetState/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSetState/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var useSetState = function (initialState) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var setMergeState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (patch) {
    setState(function (prevState) {
      var newState = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(patch) ? patch(prevState) : patch;
      return newState ? (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevState), newState) : prevState;
    });
  }, []);
  return [state, setMergeState];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSetState);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSize/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSize/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/.pnpm/resize-observer-polyfill@1.5.1/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");
/* harmony import */ var _useRafState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useRafState */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useRafState/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useIsomorphicLayoutEffectWithTarget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useIsomorphicLayoutEffectWithTarget.js");





function useSize(target) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,_useRafState__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_3__.getTargetElement)(target);
      return el ? {
        width: el.clientWidth,
        height: el.clientHeight
      } : undefined;
    }), 2),
    state = _a[0],
    setState = _a[1];
  (0,_utils_useIsomorphicLayoutEffectWithTarget__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_3__.getTargetElement)(target);
    if (!el) {
      return;
    }
    var resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"](function (entries) {
      entries.forEach(function (entry) {
        var _a = entry.target,
          clientWidth = _a.clientWidth,
          clientHeight = _a.clientHeight;
        setState({
          width: clientWidth,
          height: clientHeight
        });
      });
    });
    resizeObserver.observe(el);
    return function () {
      resizeObserver.disconnect();
    };
  }, [], target);
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSize);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTextSelection/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTextSelection/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");




var initRect = {
  top: NaN,
  left: NaN,
  bottom: NaN,
  right: NaN,
  height: NaN,
  width: NaN
};
var initState = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({
  text: ''
}, initRect);
function getRectFromSelection(selection) {
  if (!selection) {
    return initRect;
  }
  if (selection.rangeCount < 1) {
    return initRect;
  }
  var range = selection.getRangeAt(0);
  var _a = range.getBoundingClientRect(),
    height = _a.height,
    width = _a.width,
    top = _a.top,
    left = _a.left,
    right = _a.right,
    bottom = _a.bottom;
  return {
    height: height,
    width: width,
    top: top,
    left: left,
    right: right,
    bottom: bottom
  };
}
function useTextSelection(target) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initState), 2),
    state = _a[0],
    setState = _a[1];
  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state);
  var isInRangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  stateRef.current = state;
  (0,_utils_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    var el = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_3__.getTargetElement)(target, document);
    if (!el) {
      return;
    }
    var mouseupHandler = function () {
      var selObj = null;
      var text = '';
      var rect = initRect;
      if (!window.getSelection) return;
      selObj = window.getSelection();
      text = selObj ? selObj.toString() : '';
      if (text && isInRangeRef.current) {
        rect = getRectFromSelection(selObj);
        setState((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, state), {
          text: text
        }), rect));
      }
    };
    // 任意点击都需要清空之前的 range
    var mousedownHandler = function (e) {
      if (!window.getSelection) return;
      if (stateRef.current.text) {
        setState((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, initState));
      }
      isInRangeRef.current = false;
      var selObj = window.getSelection();
      if (!selObj) return;
      selObj.removeAllRanges();
      isInRangeRef.current = el.contains(e.target);
    };
    el.addEventListener('mouseup', mouseupHandler);
    document.addEventListener('mousedown', mousedownHandler);
    return function () {
      el.removeEventListener('mouseup', mouseupHandler);
      document.removeEventListener('mousedown', mousedownHandler);
    };
  }, [], target);
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTextSelection);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottle/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottle/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useThrottleFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleFn/index.js");



function useThrottle(value, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), 2),
    throttled = _a[0],
    setThrottled = _a[1];
  var run = (0,_useThrottleFn__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    setThrottled(value);
  }, options).run;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    run();
  }, [value]);
  return throttled;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThrottle);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleEffect/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleEffect/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useThrottleFn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useThrottleFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleFn/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");




function useThrottleEffect(effect, deps, options) {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), 2),
    flag = _a[0],
    setFlag = _a[1];
  var run = (0,_useThrottleFn__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    setFlag({});
  }, options).run;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return run();
  }, deps);
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_3__["default"])(effect, [flag]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThrottleEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleFn/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useThrottleFn/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");







function useThrottleFn(fn, options) {
  var _a;
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn)) {
      console.error("useThrottleFn expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(fn);
  var wait = (_a = options === null || options === void 0 ? void 0 : options.wait) !== null && _a !== void 0 ? _a : 1000;
  var throttled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,lodash_throttle__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(fnRef, (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__read)(args), false));
    }, wait, options);
  }, []);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    throttled.cancel();
  });
  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThrottleFn);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTimeout/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTimeout/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");



var useTimeout = function (fn, delay) {
  var timerCallback = (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_1__["default"])(fn);
  var timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var clear = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isNumber)(delay) || delay < 0) {
      return;
    }
    timerRef.current = setTimeout(timerCallback, delay);
    return clear;
  }, [delay]);
  return clear;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTimeout);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTitle/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTitle/index.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");



var DEFAULT_OPTIONS = {
  restoreOnUnmount: false
};
function useTitle(title, options) {
  if (options === void 0) {
    options = DEFAULT_OPTIONS;
  }
  var titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_utils_isBrowser__WEBPACK_IMPORTED_MODULE_1__["default"] ? document.title : '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.title = title;
  }, [title]);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    if (options.restoreOnUnmount) {
      document.title = titleRef.current;
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTitle);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useToggle/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useToggle/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var toggle = function () {
      return setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    var set = function (value) {
      return setState(value);
    };
    var setLeft = function () {
      return setState(defaultValue);
    };
    var setRight = function () {
      return setState(reverseValueOrigin);
    };
    return {
      toggle: toggle,
      set: set,
      setLeft: setLeft,
      setRight: setRight
    };
    // useToggle ignore value change
    // }, [defaultValue, reverseValue]);
  }, []);
  return [state, actions];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggle);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTrackedEffect/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useTrackedEffect/index.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var diffTwoDeps = function (deps1, deps2) {
  //Let's do a reference equality check on 2 dependency list.
  //If deps1 is defined, we iterate over deps1 and do comparison on each element with equivalent element from deps2
  //As this func is used only in this hook, we assume 2 deps always have same length.
  return deps1 ? deps1.map(function (_ele, idx) {
    return !Object.is(deps1[idx], deps2 === null || deps2 === void 0 ? void 0 : deps2[idx]) ? idx : -1;
  }).filter(function (ele) {
    return ele >= 0;
  }) : deps2 ? deps2.map(function (_ele, idx) {
    return idx;
  }) : [];
};
var useTrackedEffect = function (effect, deps) {
  var previousDepsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var changes = diffTwoDeps(previousDepsRef.current, deps);
    var previousDeps = previousDepsRef.current;
    previousDepsRef.current = deps;
    return effect(changes, previousDeps, deps);
  }, deps);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTrackedEffect);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _utils_isDev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isDev */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js");




var useUnmount = function (fn) {
  if (_utils_isDev__WEBPACK_IMPORTED_MODULE_1__["default"]) {
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isFunction)(fn)) {
      console.error("useUnmount expected parameter is a function, got ".concat(typeof fn));
    }
  }
  var fnRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_3__["default"])(fn);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmount);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmountedRef/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmountedRef/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");

var useUnmountedRef = function () {
  var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    unmountedRef.current = false;
    return function () {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUnmountedRef);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdate/index.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


var useUpdate = function () {
  var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), 2),
    setState = _a[1];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return setState({});
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUpdate);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUpdateEffect/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createUpdateEffect__WEBPACK_IMPORTED_MODULE_1__.createUpdateEffect)(react__WEBPACK_IMPORTED_MODULE_0__.useEffect));

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateLayoutEffect/index.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateLayoutEffect/index.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createUpdateEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/createUpdateEffect/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_createUpdateEffect__WEBPACK_IMPORTED_MODULE_1__.createUpdateEffect)(react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect));

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useVirtualList/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useVirtualList/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useEventListener */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useEventListener/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useSize */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useSize/index.js");
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _useUpdateEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../useUpdateEffect */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUpdateEffect/index.js");









var useVirtualList = function (list, options) {
  var containerTarget = options.containerTarget,
    wrapperTarget = options.wrapperTarget,
    itemHeight = options.itemHeight,
    _a = options.overscan,
    overscan = _a === void 0 ? 5 : _a;
  var itemHeightRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(itemHeight);
  var size = (0,_useSize__WEBPACK_IMPORTED_MODULE_2__["default"])(containerTarget);
  var scrollTriggerByScrollToFunc = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), 2),
    targetList = _b[0],
    setTargetList = _b[1];
  var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}), 2),
    wrapperStyle = _c[0],
    setWrapperStyle = _c[1];
  var getVisibleCount = function (containerHeight, fromIndex) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isNumber)(itemHeightRef.current)) {
      return Math.ceil(containerHeight / itemHeightRef.current);
    }
    var sum = 0;
    var endIndex = 0;
    for (var i = fromIndex; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;
      endIndex = i;
      if (sum >= containerHeight) {
        break;
      }
    }
    return endIndex - fromIndex;
  };
  var getOffset = function (scrollTop) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isNumber)(itemHeightRef.current)) {
      return Math.floor(scrollTop / itemHeightRef.current) + 1;
    }
    var sum = 0;
    var offset = 0;
    for (var i = 0; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  // 获取上部高度
  var getDistanceTop = function (index) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isNumber)(itemHeightRef.current)) {
      var height_1 = index * itemHeightRef.current;
      return height_1;
    }
    var height = list.slice(0, index).reduce(function (sum, _, i) {
      return sum + itemHeightRef.current(i, list[i]);
    }, 0);
    return height;
  };
  var totalHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isNumber)(itemHeightRef.current)) {
      return list.length * itemHeightRef.current;
    }
    return list.reduce(function (sum, _, index) {
      return sum + itemHeightRef.current(index, list[index]);
    }, 0);
  }, [list]);
  var calculateRange = function () {
    var container = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_5__.getTargetElement)(containerTarget);
    if (container) {
      var scrollTop = container.scrollTop,
        clientHeight = container.clientHeight;
      var offset = getOffset(scrollTop);
      var visibleCount = getVisibleCount(clientHeight, offset);
      var start_1 = Math.max(0, offset - overscan);
      var end = Math.min(list.length, offset + visibleCount + overscan);
      var offsetTop = getDistanceTop(start_1);
      setWrapperStyle({
        height: totalHeight - offsetTop + 'px',
        marginTop: offsetTop + 'px'
      });
      setTargetList(list.slice(start_1, end).map(function (ele, index) {
        return {
          data: ele,
          index: index + start_1
        };
      }));
    }
  };
  (0,_useUpdateEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    var wrapper = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_5__.getTargetElement)(wrapperTarget);
    if (wrapper) {
      Object.keys(wrapperStyle).forEach(function (key) {
        return wrapper.style[key] = wrapperStyle[key];
      });
    }
  }, [wrapperStyle]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!(size === null || size === void 0 ? void 0 : size.width) || !(size === null || size === void 0 ? void 0 : size.height)) {
      return;
    }
    calculateRange();
  }, [size === null || size === void 0 ? void 0 : size.width, size === null || size === void 0 ? void 0 : size.height, list]);
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])('scroll', function (e) {
    if (scrollTriggerByScrollToFunc.current) {
      scrollTriggerByScrollToFunc.current = false;
      return;
    }
    e.preventDefault();
    calculateRange();
  }, {
    target: containerTarget
  });
  var scrollTo = function (index) {
    var container = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_5__.getTargetElement)(containerTarget);
    if (container) {
      scrollTriggerByScrollToFunc.current = true;
      container.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  return [targetList, (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_8__["default"])(scrollTo)];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useVirtualList);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWebSocket/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWebSocket/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadyState: () => (/* binding */ ReadyState),
/* harmony export */   "default": () => (/* binding */ useWebSocket)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLatest */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useLatest/index.js");
/* harmony import */ var _useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useMemoizedFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useMemoizedFn/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");





var ReadyState;
(function (ReadyState) {
  ReadyState[ReadyState["Connecting"] = 0] = "Connecting";
  ReadyState[ReadyState["Open"] = 1] = "Open";
  ReadyState[ReadyState["Closing"] = 2] = "Closing";
  ReadyState[ReadyState["Closed"] = 3] = "Closed";
})(ReadyState || (ReadyState = {}));
function useWebSocket(socketUrl, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.reconnectLimit,
    reconnectLimit = _a === void 0 ? 3 : _a,
    _b = options.reconnectInterval,
    reconnectInterval = _b === void 0 ? 3 * 1000 : _b,
    _c = options.manual,
    manual = _c === void 0 ? false : _c,
    onOpen = options.onOpen,
    onClose = options.onClose,
    onMessage = options.onMessage,
    onError = options.onError,
    protocols = options.protocols;
  var onOpenRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(onOpen);
  var onCloseRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(onClose);
  var onMessageRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(onMessage);
  var onErrorRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__["default"])(onError);
  var reconnectTimesRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  var reconnectTimerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var websocketRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), 2),
    latestMessage = _d[0],
    setLatestMessage = _d[1];
  var _e = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ReadyState.Closed), 2),
    readyState = _e[0],
    setReadyState = _e[1];
  var reconnect = function () {
    var _a;
    if (reconnectTimesRef.current < reconnectLimit && ((_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.readyState) !== ReadyState.Open) {
      if (reconnectTimerRef.current) {
        clearTimeout(reconnectTimerRef.current);
      }
      reconnectTimerRef.current = setTimeout(function () {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        connectWs();
        reconnectTimesRef.current++;
      }, reconnectInterval);
    }
  };
  var connectWs = function () {
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    if (websocketRef.current) {
      websocketRef.current.close();
    }
    var ws = new WebSocket(socketUrl, protocols);
    setReadyState(ReadyState.Connecting);
    ws.onerror = function (event) {
      var _a;
      if (unmountedRef.current) {
        return;
      }
      reconnect();
      (_a = onErrorRef.current) === null || _a === void 0 ? void 0 : _a.call(onErrorRef, event, ws);
      setReadyState(ws.readyState || ReadyState.Closed);
    };
    ws.onopen = function (event) {
      var _a;
      if (unmountedRef.current) {
        return;
      }
      (_a = onOpenRef.current) === null || _a === void 0 ? void 0 : _a.call(onOpenRef, event, ws);
      reconnectTimesRef.current = 0;
      setReadyState(ws.readyState || ReadyState.Open);
    };
    ws.onmessage = function (message) {
      var _a;
      if (unmountedRef.current) {
        return;
      }
      (_a = onMessageRef.current) === null || _a === void 0 ? void 0 : _a.call(onMessageRef, message, ws);
      setLatestMessage(message);
    };
    ws.onclose = function (event) {
      var _a;
      if (unmountedRef.current) {
        return;
      }
      reconnect();
      (_a = onCloseRef.current) === null || _a === void 0 ? void 0 : _a.call(onCloseRef, event, ws);
      setReadyState(ws.readyState || ReadyState.Closed);
    };
    websocketRef.current = ws;
  };
  var sendMessage = function (message) {
    var _a;
    if (readyState === ReadyState.Open) {
      (_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.send(message);
    } else {
      throw new Error('WebSocket disconnected');
    }
  };
  var connect = function () {
    reconnectTimesRef.current = 0;
    connectWs();
  };
  var disconnect = function () {
    var _a;
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
    }
    reconnectTimesRef.current = reconnectLimit;
    (_a = websocketRef.current) === null || _a === void 0 ? void 0 : _a.close();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!manual) {
      connect();
    }
  }, [socketUrl, manual]);
  (0,_useUnmount__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
    unmountedRef.current = true;
    disconnect();
  });
  return {
    latestMessage: latestMessage,
    sendMessage: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(sendMessage),
    connect: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(connect),
    disconnect: (0,_useMemoizedFn__WEBPACK_IMPORTED_MODULE_4__["default"])(disconnect),
    readyState: readyState,
    webSocketIns: websocketRef.current
  };
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWhyDidYouUpdate/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useWhyDidYouUpdate/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useWhyDidYouUpdate)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/.pnpm/tslib@2.5.2/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");


function useWhyDidYouUpdate(componentName, props) {
  var prevProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (prevProps.current) {
      var allKeys = Object.keys((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, prevProps.current), props));
      var changedProps_1 = {};
      allKeys.forEach(function (key) {
        if (!Object.is(prevProps.current[key], props[key])) {
          changedProps_1[key] = {
            from: prevProps.current[key],
            to: props[key]
          };
        }
      });
      if (Object.keys(changedProps_1).length) {
        console.log('[why-did-you-update]', componentName, changedProps_1);
      }
    }
    prevProps.current = props;
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/createEffectWithTarget.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/createEffectWithTarget.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../useUnmount */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useUnmount/index.js");
/* harmony import */ var _depsAreSame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./depsAreSame */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/depsAreSame.js");
/* harmony import */ var _domTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");




var createEffectWithTarget = function (useEffectType) {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  var useEffectWithTarget = function (effect, deps, target) {
    var hasInitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var lastElementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    var lastDepsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    var unLoadRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    useEffectType(function () {
      var _a;
      var targets = Array.isArray(target) ? target : [target];
      var els = targets.map(function (item) {
        return (0,_domTarget__WEBPACK_IMPORTED_MODULE_1__.getTargetElement)(item);
      });
      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }
      if (els.length !== lastElementRef.current.length || !(0,_depsAreSame__WEBPACK_IMPORTED_MODULE_2__["default"])(els, lastElementRef.current) || !(0,_depsAreSame__WEBPACK_IMPORTED_MODULE_2__["default"])(deps, lastDepsRef.current)) {
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_3__["default"])(function () {
      var _a;
      (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
      // for react-refresh
      hasInitRef.current = false;
    });
  };
  return useEffectWithTarget;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEffectWithTarget);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/depsAreSame.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/depsAreSame.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ depsAreSame)
/* harmony export */ });
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;
  for (var i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTargetElement: () => (/* binding */ getTargetElement)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js");
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");


function getTargetElement(target, defaultElement) {
  if (!_isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    return undefined;
  }
  if (!target) {
    return defaultElement;
  }
  var targetElement;
  if ((0,_index__WEBPACK_IMPORTED_MODULE_1__.isFunction)(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
}

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/getDocumentOrShadow.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/getDocumentOrShadow.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_domTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/domTarget.js");

var checkIfAllInShadow = function (targets) {
  return targets.every(function (item) {
    var targetElement = (0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_0__.getTargetElement)(item);
    if (!targetElement) return false;
    if (targetElement.getRootNode() instanceof ShadowRoot) return true;
  });
};
var getShadow = function (node) {
  if (!node) {
    return document;
  }
  return node.getRootNode();
};
var getDocumentOrShadow = function (target) {
  if (!target || !document.getRootNode) {
    return document;
  }
  var targets = Array.isArray(target) ? target : [target];
  if (checkIfAllInShadow(targets)) {
    return getShadow((0,_utils_domTarget__WEBPACK_IMPORTED_MODULE_0__.getTargetElement)(targets[0]));
  }
  return document;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDocumentOrShadow);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndef: () => (/* binding */ isUndef)
/* harmony export */ });
var isObject = function (value) {
  return value !== null && typeof value === 'object';
};
var isFunction = function (value) {
  return typeof value === 'function';
};
var isString = function (value) {
  return typeof value === 'string';
};
var isBoolean = function (value) {
  return typeof value === 'boolean';
};
var isNumber = function (value) {
  return typeof value === 'number';
};
var isUndef = function (value) {
  return typeof value === 'undefined';
};

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isAppleDevice.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isAppleDevice.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isAppleDevice = /(mac|iphone|ipod|ipad)/i.test(typeof navigator !== 'undefined' ? navigator === null || navigator === void 0 ? void 0 : navigator.platform : '');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isAppleDevice);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isBrowser = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBrowser);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isDev.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isDev =  true || 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDev);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/rect.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/rect.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClientHeight: () => (/* binding */ getClientHeight),
/* harmony export */   getScrollHeight: () => (/* binding */ getScrollHeight),
/* harmony export */   getScrollTop: () => (/* binding */ getScrollTop)
/* harmony export */ });
var getScrollTop = function (el) {
  if (el === document || el === document.body) {
    return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  }
  return el.scrollTop;
};
var getScrollHeight = function (el) {
  return el.scrollHeight || Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
};
var getClientHeight = function (el) {
  return el.clientHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
};


/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useDeepCompareWithTarget.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useDeepCompareWithTarget.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");



var depsEqual = function (aDeps, bDeps) {
  if (bDeps === void 0) {
    bDeps = [];
  }
  return (0,lodash_isEqual__WEBPACK_IMPORTED_MODULE_1__["default"])(aDeps, bDeps);
};
var useDeepCompareEffectWithTarget = function (effect, deps, target) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var signalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  if (!depsEqual(deps, ref.current)) {
    ref.current = deps;
    signalRef.current += 1;
  }
  (0,_useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__["default"])(effect, [signalRef.current], target);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDeepCompareEffectWithTarget);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/createEffectWithTarget.js");


var useEffectWithTarget = (0,_createEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.useEffect);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectWithTarget);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useIsomorphicLayoutEffectWithTarget.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useIsomorphicLayoutEffectWithTarget.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isBrowser */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/isBrowser.js");
/* harmony import */ var _useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useEffectWithTarget.js");
/* harmony import */ var _useLayoutEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useLayoutEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useLayoutEffectWithTarget.js");



var useIsomorphicLayoutEffectWithTarget = _isBrowser__WEBPACK_IMPORTED_MODULE_0__["default"] ? _useLayoutEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"] : _useEffectWithTarget__WEBPACK_IMPORTED_MODULE_2__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffectWithTarget);

/***/ }),

/***/ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useLayoutEffectWithTarget.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/useLayoutEffectWithTarget.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _createEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEffectWithTarget */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/utils/createEffectWithTarget.js");


var useEffectWithTarget = (0,_createEffectWithTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEffectWithTarget);

/***/ })

}]);
//# sourceMappingURL=ahooks.bundle.js.map