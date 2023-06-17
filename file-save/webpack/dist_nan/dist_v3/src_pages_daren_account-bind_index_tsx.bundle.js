"use strict";
(self["webpackChunkwebpack_zero"] = self["webpackChunkwebpack_zero"] || []).push([["src_pages_daren_account-bind_index_tsx"],{

/***/ "./src/global/materials/editor/EditorBaseWang/index.tsx":
/*!**************************************************************!*\
  !*** ./src/global/materials/editor/EditorBaseWang/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorBaseWang: () => (/* binding */ EditorBaseWang)
/* harmony export */ });
/* harmony import */ var _wangeditor_editor_dist_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wangeditor/editor/dist/css/style.css */ "./node_modules/.pnpm/@wangeditor+editor@5.1.23/node_modules/@wangeditor/editor/dist/css/style.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _wangeditor_editor_for_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wangeditor/editor-for-react */ "./node_modules/.pnpm/@wangeditor+editor-for-react@1.0.6_qssaigfcjmv5jyz3bca2xlqtzm/node_modules/@wangeditor/editor-for-react/dist/index.esm.js");



function EditorBaseWang() {
  const [editor, setEditor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [html, setHtml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("<p>hello</p>");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>");
    }, 1500);
  }, []);
  const toolbarConfig = {};
  const editorConfig = {
    // TS 语法
    // const editorConfig = {                         // JS 语法
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9..."
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      if (editor == null)
        return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { style: { border: "1px solid #ccc", zIndex: 100 } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    _wangeditor_editor_for_react__WEBPACK_IMPORTED_MODULE_2__.Toolbar,
    {
      editor,
      defaultConfig: toolbarConfig,
      mode: "default",
      style: { borderBottom: "1px solid #ccc" }
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(
    _wangeditor_editor_for_react__WEBPACK_IMPORTED_MODULE_2__.Editor,
    {
      defaultConfig: editorConfig,
      value: html,
      onCreated: setEditor,
      onChange: (editor2) => setHtml(editor2.getHtml()),
      mode: "default",
      style: { height: "500px", overflowY: "hidden" }
    }
  )), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { style: { marginTop: "15px" } }, html));
}


/***/ }),

/***/ "./src/pages/daren/account-bind/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/daren/account-bind/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountBind)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/.pnpm/registry.npmmirror.com+antd@5.1.2_wrrjcync2b7uri2ifzubktew2m/node_modules/antd/es/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _global_materials_editor_EditorBaseWang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @global/materials/editor/EditorBaseWang */ "./src/global/materials/editor/EditorBaseWang/index.tsx");
/* harmony import */ var _global_styles_layout_sub_app_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @global/styles/layout/sub-app-border */ "./src/global/styles/layout/sub-app-border.tsx");




const components = [
  /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_materials_editor_EditorBaseWang__WEBPACK_IMPORTED_MODULE_1__.EditorBaseWang, null)
];
function getCompByKey(idx) {
  return components == null ? void 0 : components[0 % components.length];
}
function AccountBind() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_global_styles_layout_sub_app_border__WEBPACK_IMPORTED_MODULE_2__.SubAppBorder, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "EditorBaseWang"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    antd__WEBPACK_IMPORTED_MODULE_3__["default"],
    {
      defaultActiveKey: "0",
      tabPosition: "top",
      onTabClick: (activeKey, e) => {
      },
      items: new Array(30).fill(0).map((_, i) => {
        const id = String(i);
        return {
          label: `Tab-${id}`,
          key: id,
          disabled: i === 28,
          children: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { minWidth: `calc(80vw)`, minHeight: `calc(80vh)` } }, getCompByKey(i))
        };
      })
    }
  ));
}


/***/ })

}]);
//# sourceMappingURL=src_pages_daren_account-bind_index_tsx.bundle.js.map