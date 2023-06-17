"use strict";
(self["webpackChunkwebpack_zero"] = self["webpackChunkwebpack_zero"] || []).push([["src_pages_materials_index_tsx"],{

/***/ "./src/global/materials/steps/index.ts":
/*!*********************************************!*\
  !*** ./src/global/materials/steps/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelStepDemo: () => (/* reexport safe */ _level_demos__WEBPACK_IMPORTED_MODULE_0__.LevelStepDemo)
/* harmony export */ });
/* harmony import */ var _level_demos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level/demos */ "./src/global/materials/steps/level/demos/index.tsx");




/***/ }),

/***/ "./src/global/materials/steps/level/demos/index.tsx":
/*!**********************************************************!*\
  !*** ./src/global/materials/steps/level/demos/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LevelStepDemo: () => (/* binding */ LevelStepDemo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/registry.npmmirror.com+antd@5.1.2_wrrjcync2b7uri2ifzubktew2m/node_modules/antd/es/slider/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/registry.npmmirror.com+antd@5.1.2_wrrjcync2b7uri2ifzubktew2m/node_modules/antd/es/button/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/global/materials/steps/level/index.tsx");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock */ "./src/global/materials/steps/level/mock.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.scss */ "./src/global/materials/steps/level/index.scss");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));





const ActiveArrow = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: 20, backgroundColor: "red", display: "flex", justifyContent: "center" } }, "\u81EA\u5B9A\u4E49");
const LevelStepDemo = () => {
  const [lvBtn, setLvBtn] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lvBtnArrow, setLvBtnArrow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lvConfigs, lvCurrentShow] = [_mock__WEBPACK_IMPORTED_MODULE_2__._configs, _mock__WEBPACK_IMPORTED_MODULE_2__._current];
  const [lvCurOne, setLvCurOne] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lvCurrentShow);
  const onActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((actNode, idx) => {
  }, []);
  const onActiveLvLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((actNode, idx) => {
  }, []);
  const lvBtnProps = {
    ActiveArrow
  };
  const { levelStepNode: totalNode, onLabelActionReset: totalReset } = (0,_index__WEBPACK_IMPORTED_MODULE_1__.useLevelStepWrap)({
    onActive,
    steps: lvConfigs,
    current: lvCurOne,
    lvBtnProps,
    currentLv: 2
  });
  const { levelStepNode: onlyProcessNode, onLabelActionReset: onlyProcessReset } = (0,_index__WEBPACK_IMPORTED_MODULE_1__.useLevelStepWrap)({
    onActive: onActiveLvLabel,
    steps: lvConfigs,
    current: lvCurrentShow,
    currentLv: 3,
    lvBtnProps: lvBtn
  });
  const onBtnArrowChange = () => {
    lvBtnArrow ? setLvBtnArrow(false) : setLvBtnArrow(true);
    setLvBtn({ ActiveArrow: lvBtnArrow ? false : true });
  };
  const stepLen = 10;
  function getMinMax() {
    var _a, _b;
    if (lvConfigs == null ? void 0 : lvConfigs.length) {
      return {
        min: (_a = lvConfigs == null ? void 0 : lvConfigs[0]) == null ? void 0 : _a.value,
        max: (_b = lvConfigs == null ? void 0 : lvConfigs[lvConfigs.length - 1]) == null ? void 0 : _b.value
      };
    } else {
      return {
        min: 0,
        max: 100
      };
    }
  }
  const onSliderChange = (value) => {
    setLvCurOne(__spreadProps(__spreadValues({}, lvCurOne), {
      value
    }));
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `lv_5` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "\u4F7F\u7528\u4E00\u4E2A\u5B8C\u6574\u7684 LevelStepWrap \u7EC4\u4EF6: \u9ED8\u8BA4\u7B49\u7EA73\u7EA7\uFF0C\u7D22\u5F15currentLv\u4E3A2"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "ctrl_slider" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "\u7B49\u7EA7\u503C\u6539\u53D8slider"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    antd__WEBPACK_IMPORTED_MODULE_4__["default"],
    {
      min: getMinMax().min,
      max: getMinMax().max,
      step: stepLen,
      defaultValue: lvCurOne == null ? void 0 : lvCurOne.value,
      onChange: onSliderChange
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: totalReset }, "btn reset")), totalNode), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `lv_5` }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "\u53BB\u6389 \u7B49\u7EA7\u523B\u5EA6\u548C\u7B49\u7EA7\u6309\u94AE \u53EA\u5C55\u793A\u7B49\u7EA7\u8FDB\u5EA6\u6761: \u9ED8\u8BA4\u7B49\u7EA74\u7EA7\uFF0C\u7D22\u5F15currentLv\u4E3A3"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: onlyProcessReset }, "btn reset"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    antd__WEBPACK_IMPORTED_MODULE_5__["default"],
    {
      onClick: () => {
        lvBtn ? setLvBtn(false) : setLvBtn({ ActiveArrow: lvBtnArrow });
      }
    },
    lvBtn ? "hide lvBtn" : "show lvBtn"
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    antd__WEBPACK_IMPORTED_MODULE_5__["default"],
    {
      disabled: !lvBtn,
      onClick: () => {
        onBtnArrowChange();
      }
    },
    lvBtnArrow ? "hide lvBtnArrow" : "show lvBtnArrow"
  )), onlyProcessNode));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LevelStepDemo, null);
});


/***/ }),

/***/ "./src/global/materials/steps/level/index.tsx":
/*!****************************************************!*\
  !*** ./src/global/materials/steps/level/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ILevelStepWrap: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.ILevelStepWrap),
/* harmony export */   ILvLabelAction: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.ILvLabelAction),
/* harmony export */   INode: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.INode),
/* harmony export */   LevelStep: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.LevelStep),
/* harmony export */   LvScale: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.LvScale),
/* harmony export */   _nodePar: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__._nodePar),
/* harmony export */   getLvIdxByCurScore: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.getLvIdxByCurScore),
/* harmony export */   useLevelStepWrap: () => (/* reexport safe */ _level_step_LevelStepWrap__WEBPACK_IMPORTED_MODULE_1__.useLevelStepWrap),
/* harmony export */   useLvLabelAction: () => (/* reexport safe */ _level_step__WEBPACK_IMPORTED_MODULE_0__.useLvLabelAction)
/* harmony export */ });
/* harmony import */ var _level_step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level-step */ "./src/global/materials/steps/level/level-step/index.tsx");
/* harmony import */ var _level_step_LevelStepWrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level-step/LevelStepWrap */ "./src/global/materials/steps/level/level-step/LevelStepWrap.tsx");
/* harmony import */ var _level_step_LvScale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level-step/LvScale */ "./src/global/materials/steps/level/level-step/LvScale.tsx");





/***/ }),

/***/ "./src/global/materials/steps/level/level-step/LevelStepWrap.tsx":
/*!***********************************************************************!*\
  !*** ./src/global/materials/steps/level/level-step/LevelStepWrap.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLevelStepWrap: () => (/* binding */ useLevelStepWrap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/global/materials/steps/level/level-step/index.tsx");
/* harmony import */ var _LvScale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LvScale */ "./src/global/materials/steps/level/level-step/LvScale.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/global/materials/steps/level/level-step/utils.ts");
/* harmony import */ var _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LevelStep.m.scss */ "./src/global/materials/steps/level/level-step/LevelStep.m.scss");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};





function useLevelStepWrap(props) {
  const {
    steps,
    current,
    onActive,
    levelStepStyle,
    curLvScaleStyle,
    scale = true,
    lvBtnProps = false,
    currentLv
  } = props;
  const _levelStepStyle = __spreadValues({
    margin: "7px 0 7px 0"
  }, levelStepStyle);
  const _curLvScaleStyle = curLvScaleStyle != null ? curLvScaleStyle : { fontWeight: 600 };
  const { value } = current;
  const curLvIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getLvIdxByCurScore)(
    value,
    steps.map((lv) => Number(lv.value))
  );
  const { lvLabelNode, onReset } = (0,_LvScale__WEBPACK_IMPORTED_MODULE_2__.useLvLabelAction)({
    steps,
    current,
    onActive,
    lvBtnProps,
    currentLv: currentLv != null ? currentLv : curLvIdx
  });
  const levelStepNode = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_4__["default"].wrap }, scale ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LvScale__WEBPACK_IMPORTED_MODULE_2__.LvScale, { steps, currentLv: currentLv != null ? currentLv : curLvIdx, current, inCurStyle: _curLvScaleStyle }) : null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: _levelStepStyle }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.LevelStep, { steps, current })), lvBtnProps ? lvLabelNode : null);
  return {
    levelStepNode,
    onLabelActionReset: onReset
  };
}


/***/ }),

/***/ "./src/global/materials/steps/level/level-step/LvScale.tsx":
/*!*****************************************************************!*\
  !*** ./src/global/materials/steps/level/level-step/LvScale.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LvScale: () => (/* binding */ LvScale),
/* harmony export */   useLvLabelAction: () => (/* binding */ useLvLabelAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/global/materials/steps/level/level-step/utils.ts");
/* harmony import */ var _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LevelStep.m.scss */ "./src/global/materials/steps/level/level-step/LevelStep.m.scss");
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};





const arrow = "https://p3-infra.elabpic.com/tos-cn-i-ax5x5hote5/4b3373af401248ef905bcee4057623b9~tplv-ax5x5hote5-image.image";
function useLvLabelAction(props) {
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props == null ? void 0 : props.currentLv);
  const { steps, current, currentLv, style = {}, onActive, classnames = {}, fillColor, lvBtnProps } = props;
  const { ActiveArrow } = lvBtnProps != null ? lvBtnProps : {};
  const curLvIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getLvIdxByCurScore)(
    current.value,
    steps.map((lv) => Number(lv.value))
  );
  const _currentLv = currentLv != null ? currentLv : curLvIdx;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    setActive(_currentLv);
  }, [_currentLv]);
  const onReset = () => {
    setActive(currentLv);
  };
  const _renderArrowNode = (_isAct) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].activeSlide }, _isAct ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: arrow, alt: "arrow" }) : null);
  const lvLabelNode = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].label, style }, steps.map((lv, idx) => {
    const isActive = idx === active;
    const curTag = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nodeTagCur);
    const _textWrap = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].text, classnames == null ? void 0 : classnames.text, isActive ? curTag : "");
    const _nodeWrap = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nodeWrap, classnames == null ? void 0 : classnames.nodeWrap);
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: _nodeWrap,
        key: String(lv.tag),
        onClick: () => {
          setActive(idx);
          onActive == null ? void 0 : onActive(steps == null ? void 0 : steps[idx], idx);
        }
      },
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].argue, _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].nodeTag, classnames == null ? void 0 : classnames.nodeTag) }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: isActive ? { color: fillColor } : {}, className: _textWrap }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].argue }, lv.tag))),
      Boolean(lvBtnProps && isActive) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, ActiveArrow === false ? null : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ActiveArrow === true ? _renderArrowNode(isActive) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, ActiveArrow))) : null
    );
  }));
  return {
    lvLabelNode,
    onReset
  };
}
const LvScale = (props) => {
  const _a = props, { steps, currentLv, current, inCurStyle, inLbStyle, style } = _a, resProps = __objRest(_a, ["steps", "currentLv", "current", "inCurStyle", "inLbStyle", "style"]);
  const curLvIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getLvIdxByCurScore)(
    current.value,
    steps.map((lv) => Number(lv.value))
  );
  const _currentLv = currentLv != null ? currentLv : curLvIdx;
  const [_inCurStyle, _inLbStyle, _style] = [inCurStyle != null ? inCurStyle : {}, inLbStyle != null ? inLbStyle : {}, style != null ? style : {}];
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].value, style: _style }, steps == null ? void 0 : steps.map((lv, idx) => {
    const _key = String(lv.label);
    if (idx === _currentLv) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].argue, key: _key }, resProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].lbTxtCur, style: _inCurStyle }, !(0,lodash__WEBPACK_IMPORTED_MODULE_4__["default"])(current == null ? void 0 : current.label) ? current == null ? void 0 : current.label : lv.label));
    } else {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __spreadValues({ className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].argue, key: _key }, resProps), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: _LevelStep_m_scss__WEBPACK_IMPORTED_MODULE_3__["default"].lbTxt, style: _inLbStyle }, lv.label));
    }
  })));
};


/***/ }),

/***/ "./src/global/materials/steps/level/level-step/index.tsx":
/*!***************************************************************!*\
  !*** ./src/global/materials/steps/level/level-step/index.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ILevelStepWrap: () => (/* reexport safe */ _LevelStepWrap__WEBPACK_IMPORTED_MODULE_2__.ILevelStepWrap),
/* harmony export */   ILvLabelAction: () => (/* reexport safe */ _LvScale__WEBPACK_IMPORTED_MODULE_3__.ILvLabelAction),
/* harmony export */   LevelStep: () => (/* binding */ LevelStep),
/* harmony export */   LvScale: () => (/* reexport safe */ _LvScale__WEBPACK_IMPORTED_MODULE_3__.LvScale),
/* harmony export */   _nodePar: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__._nodePar),
/* harmony export */   getLvIdxByCurScore: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getLvIdxByCurScore),
/* harmony export */   useLevelStepWrap: () => (/* reexport safe */ _LevelStepWrap__WEBPACK_IMPORTED_MODULE_2__.useLevelStepWrap),
/* harmony export */   useLvLabelAction: () => (/* reexport safe */ _LvScale__WEBPACK_IMPORTED_MODULE_3__.useLvLabelAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var ahooks_es_useDebounceFn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ahooks/es/useDebounceFn */ "./node_modules/.pnpm/ahooks@3.7.7_react@16.14.0/node_modules/ahooks/es/useDebounceFn/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LevelStepWrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LevelStepWrap */ "./src/global/materials/steps/level/level-step/LevelStepWrap.tsx");
/* harmony import */ var _LvScale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LvScale */ "./src/global/materials/steps/level/level-step/LvScale.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/global/materials/steps/level/level-step/utils.ts");
/* harmony import */ var _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levelNode.m.scss */ "./src/global/materials/steps/level/level-step/levelNode.m.scss");







const progressWrapId = "ecom_byted_LevelStep_progressWrap";
function LevelStep(props) {
  const [fill, setFill] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    fillPer: 0,
    lvWillFilledWid: 0
  });
  const { steps = [], current = {}, baseColor = "#fff", fillColor = "#7570fb" } = props;
  const nodePar = _utils__WEBPACK_IMPORTED_MODULE_4__._nodePar;
  const { node2Radius, curNode2Radius } = nodePar;
  const { value } = current;
  const progressWrapRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const levelNum = steps.length - 1;
  const curLvIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getLvIdxByCurScore)(
    value,
    steps.map((lv) => Number(lv.value))
  );
  const calcFillPer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    var _a, _b;
    if (levelNum === curLvIdx) {
      setFill({
        fillPer: 1,
        lvWillFilledWid: 0
      });
    } else if (0 < curLvIdx || curLvIdx < levelNum) {
      const progressWrapEle = (_a = document.getElementById(progressWrapId)) != null ? _a : {};
      const lvRangleLen = Number((_b = progressWrapEle == null ? void 0 : progressWrapEle.clientWidth) != null ? _b : 0);
      const lvTotalSum = lvRangleLen - levelNum * node2Radius - curNode2Radius;
      const nextLvRange = steps[curLvIdx + 1].value - steps[curLvIdx].value;
      const lvFilledPer = curLvIdx / levelNum * lvTotalSum / lvRangleLen;
      const _lvWillFilledWid = (value - steps[curLvIdx].value) / nextLvRange / levelNum * lvTotalSum;
      const fillDotPer = (curNode2Radius + curLvIdx * node2Radius) / lvRangleLen;
      const _fillPer = lvFilledPer + fillDotPer;
      const __fillPer = _fillPer <= 0 ? 0 : _fillPer >= 1 ? 1 : _fillPer;
      const _fill = {
        fillPer: __fillPer,
        lvWillFilledWid: _lvWillFilledWid
      };
      setFill(_fill);
    }
  }, [steps, curLvIdx, curNode2Radius, levelNum, node2Radius, value]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    calcFillPer();
  }, [calcFillPer]);
  const { run } = (0,ahooks_es_useDebounceFn__WEBPACK_IMPORTED_MODULE_6__["default"])(calcFillPer, 500);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", run);
    return () => {
      window.removeEventListener("resize", run);
    };
  }, []);
  function getLvNodeOffset() {
    return {
      leftOffset: 0 === curLvIdx ? curNode2Radius : node2Radius,
      rightOffset: levelNum === curLvIdx ? curNode2Radius : node2Radius
    };
  }
  const { leftOffset, rightOffset } = getLvNodeOffset();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progress }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "div",
    {
      className: _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].progressWrap,
      style: {
        margin: `0 calc(${1 / steps.length / 2 * 100}% - ${rightOffset / 2}px) 0 calc(${1 / steps.length / 2 * 100}% - ${leftOffset / 2}px)`
      },
      id: progressWrapId,
      ref: progressWrapRef
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].line, _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].baseLine),
        style: {
          width: `calc(100% - ${node2Radius * 2}px)`,
          margin: `0 ${rightOffset}px 0 ${leftOffset}px`,
          borderColor: baseColor
        }
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "div",
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].line, _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fillLine),
        style: { width: `calc(${fill.fillPer * 100}% + ${fill.lvWillFilledWid}px)`, borderColor: fillColor }
      }
    ),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].bottomBox) }),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { className: _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].floatLvNode }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].levelDot }, steps.map((_lv, key) => {
      if (curLvIdx > key) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { key, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].levelNode, _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fill), style: { backgroundColor: fillColor } });
      } else if (curLvIdx === key) {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "section",
          {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].levelCurNode),
            style: {
              backgroundColor: baseColor,
              borderColor: fillColor
            }
          }
        ));
      } else {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", { key, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].levelNode, _levelNode_m_scss__WEBPACK_IMPORTED_MODULE_5__["default"].unFill), style: { backgroundColor: baseColor } });
      }
    })))
  ));
}




/***/ }),

/***/ "./src/global/materials/steps/level/level-step/utils.ts":
/*!**************************************************************!*\
  !*** ./src/global/materials/steps/level/level-step/utils.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _nodePar: () => (/* binding */ _nodePar),
/* harmony export */   getLvIdxByCurScore: () => (/* binding */ getLvIdxByCurScore)
/* harmony export */ });
function getLvIdxByCurScore(score, scoreRange) {
  const len = scoreRange.length;
  if (len === 0 || len === 1) {
    return 0;
  }
  if (scoreRange[0] >= score) {
    return 0;
  } else if (scoreRange[len - 1] <= score) {
    return len - 1;
  } else if (len >= 2 && scoreRange[len - 2] <= score && score < scoreRange[len - 1]) {
    return len - 2;
  }
  const sIdx = scoreRange.findIndex((_, idx) => {
    return scoreRange[idx] <= score && score < scoreRange[idx + 1];
  });
  return sIdx;
}
const _nodePar = {
  node2Radius: 12,
  curNode2Radius: 22
};


/***/ }),

/***/ "./src/global/materials/steps/level/mock.ts":
/*!**************************************************!*\
  !*** ./src/global/materials/steps/level/mock.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _configs: () => (/* binding */ _configs),
/* harmony export */   _curTabLv: () => (/* binding */ _curTabLv),
/* harmony export */   _current: () => (/* binding */ _current)
/* harmony export */ });
const _configs = [
  {
    value: 0,
    label: "0",
    tag: "V1 \u673A\u6784"
  },
  {
    value: 390,
    label: "390",
    tag: "V2 \u673A\u6784"
  },
  {
    value: 490,
    label: "490",
    tag: "V3 \u673A\u6784"
  },
  {
    value: 590,
    label: "590",
    tag: "V4 \u673A\u6784"
  },
  {
    value: 690,
    label: "690+",
    tag: "V5 \u673A\u6784"
  }
];
const _current = {
  value: 400,
  label: "\u5F53\u524D\u7B49\u7EA7",
  tag: "\u5F53\u524D\u6C34\u5E73"
};
const _curTabLv = {
  value: 0,
  label: "\u5F53\u524D\u7B49\u7EA7",
  tag: "\u5F53\u524D\u6C34\u5E73"
};


/***/ }),

/***/ "./src/pages/materials/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/materials/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaterialList)
/* harmony export */ });
/* harmony import */ var _global_materials_steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @global/materials/steps */ "./src/global/materials/steps/index.ts");
/* harmony import */ var _global_styles_layout_sub_app_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @global/styles/layout/sub-app-border */ "./src/global/styles/layout/sub-app-border.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/registry.npmmirror.com+antd@5.1.2_wrrjcync2b7uri2ifzubktew2m/node_modules/antd/es/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");




const materialList = [
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_global_materials_steps__WEBPACK_IMPORTED_MODULE_0__.LevelStepDemo, null)
  // <DatePickerSimple />
];
const compTotal = 30;
function getCompByKey(idx) {
  console.log("idx", idx);
  if (idx < materialList.length) {
    return materialList == null ? void 0 : materialList[idx];
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, "nothing");
}
function MaterialList() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_global_styles_layout_sub_app_border__WEBPACK_IMPORTED_MODULE_1__.SubAppBorder, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("h2", null, "MaterialList"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(
    antd__WEBPACK_IMPORTED_MODULE_3__["default"],
    {
      defaultActiveKey: "0",
      tabPosition: "top",
      onTabClick: (activeKey, e) => {
      },
      items: new Array(compTotal).fill(0).map((_, i) => {
        const id = String(i);
        return {
          label: `Tab-${id}`,
          key: id,
          // disabled: i === 28,
          children: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, getCompByKey(compTotal - i))
        };
      })
    }
  ));
}


/***/ })

}]);
//# sourceMappingURL=src_pages_materials_index_tsx.bundle.js.map