"use strict";
(self["webpackChunkwebpack_zero"] = self["webpackChunkwebpack_zero"] || []).push([["leva"],{

/***/ "./node_modules/.pnpm/leva@0.9.34_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/leva/dist/leva.esm.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/leva@0.9.34_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/leva/dist/leva.esm.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Leva: () => (/* binding */ Leva),
/* harmony export */   LevaInputs: () => (/* reexport safe */ _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   LevaPanel: () => (/* binding */ LevaPanel),
/* harmony export */   LevaStoreProvider: () => (/* reexport safe */ _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   buttonGroup: () => (/* binding */ buttonGroup),
/* harmony export */   folder: () => (/* binding */ folder),
/* harmony export */   levaStore: () => (/* binding */ levaStore),
/* harmony export */   monitor: () => (/* binding */ monitor),
/* harmony export */   useControls: () => (/* binding */ useControls),
/* harmony export */   useCreateStore: () => (/* binding */ useCreateStore),
/* harmony export */   useStoreContext: () => (/* reexport safe */ _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vector-plugin-6f82aee9.esm.js */ "./node_modules/.pnpm/leva@0.9.34_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/leva/dist/vector-plugin-6f82aee9.esm.js");
/* harmony import */ var v8n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! v8n */ "./node_modules/.pnpm/v8n@1.5.1/node_modules/v8n/dist/v8n.esm.js");
/* harmony import */ var colord__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! colord */ "./node_modules/.pnpm/colord@2.9.3/node_modules/colord/index.mjs");
/* harmony import */ var colord_plugins_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! colord/plugins/names */ "./node_modules/.pnpm/colord@2.9.3/node_modules/colord/plugins/names.mjs");
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dequal/lite */ "./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var react_colorful__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-colorful */ "./node_modules/.pnpm/react-colorful@5.6.1_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/react-colorful/dist/index.mjs");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/.pnpm/zustand@3.7.2_react@16.14.0/node_modules/zustand/esm/shallow.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dropzone */ "./node_modules/.pnpm/react-dropzone@12.1.0_react@16.14.0/node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! zustand */ "./node_modules/.pnpm/zustand@3.7.2_react@16.14.0/node_modules/zustand/esm/index.js");
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zustand/middleware */ "./node_modules/.pnpm/zustand@3.7.2_react@16.14.0/node_modules/zustand/esm/middleware.js");
/* harmony import */ var merge_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merge-value */ "./node_modules/.pnpm/merge-value@1.0.0/node_modules/merge-value/index.js");
/* harmony import */ var merge_value__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(merge_value__WEBPACK_IMPORTED_MODULE_5__);



















const join = (...args) => args.filter(Boolean).join('.');
function getKeyPath(path) {
  const dir = path.split('.');
  return [dir.pop(), dir.join('.') || undefined];
}

function getValuesForPaths(data, paths) {
  return Object.entries((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.p)(data, paths)).reduce(

  (acc, [, {
    value,
    disabled,
    key
  }]) => {
    acc[key] = disabled ? undefined : value;
    return acc;
  }, {});
}

function useCompareMemoize(value, deep) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  const compare = deep ? dequal_lite__WEBPACK_IMPORTED_MODULE_2__.dequal : zustand_shallow__WEBPACK_IMPORTED_MODULE_6__["default"];
  if (!compare(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

function useDeepMemo(fn, deps) {
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(fn, useCompareMemoize(deps, true));
}

function useToggle(toggled) {
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const firstRender = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    if (!toggled) {
      wrapperRef.current.style.height = '0px';
      wrapperRef.current.style.overflow = 'hidden';
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    let timeout;
    const ref = wrapperRef.current;
    const fixHeight = () => {
      if (toggled) {
        ref.style.removeProperty('height');
        ref.style.removeProperty('overflow');
        contentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }
    };
    ref.addEventListener('transitionend', fixHeight, {
      once: true
    });
    const {
      height
    } = contentRef.current.getBoundingClientRect();
    ref.style.height = height + 'px';
    if (!toggled) {
      ref.style.overflow = 'hidden';
      timeout = window.setTimeout(() => ref.style.height = '0px', 50);
    }
    return () => {
      ref.removeEventListener('transitionend', fixHeight);
      clearTimeout(timeout);
    };
  }, [toggled]);
  return {
    wrapperRef,
    contentRef
  };
}

const useVisiblePaths = store => {
  const [paths, setPaths] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(store.getVisiblePaths());
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    setPaths(store.getVisiblePaths());
    const unsub = store.useStore.subscribe(store.getVisiblePaths, setPaths, {
      equalityFn: zustand_shallow__WEBPACK_IMPORTED_MODULE_6__["default"]
    });
    return () => unsub();
  }, [store]);
  return paths;
};

function useValuesForPath(store, paths, initialData) {
  const valuesForPath = store.useStore(s => {
    const data = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, initialData), s.data);
    return getValuesForPaths(data, paths);
  }, zustand_shallow__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return valuesForPath;
}

function usePopin(margin = 3) {
  const popinRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const [shown, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const show = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => setShow(true), []);
  const hide = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => setShow(false), []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    if (shown) {
      const {
        bottom,
        top,
        left
      } = popinRef.current.getBoundingClientRect();
      const {
        height
      } = wrapperRef.current.getBoundingClientRect();
      const direction = bottom + height > window.innerHeight - 40 ? 'up' : 'down';
      wrapperRef.current.style.position = 'fixed';
      wrapperRef.current.style.zIndex = '10000';
      wrapperRef.current.style.left = left + 'px';
      if (direction === 'down') wrapperRef.current.style.top = bottom + margin + 'px';else wrapperRef.current.style.bottom = window.innerHeight - top + margin + 'px';
    }
  }, [margin, shown]);
  return {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  };
}

(0,colord__WEBPACK_IMPORTED_MODULE_7__.extend)([colord_plugins_names__WEBPACK_IMPORTED_MODULE_8__["default"]]);
const convertMap = {
  rgb: 'toRgb',
  hsl: 'toHsl',
  hsv: 'toHsv',
  hex: 'toHex'
};
v8n__WEBPACK_IMPORTED_MODULE_1__["default"].extend({
  color: () => value => (0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(value).isValid()
});
const schema$2 = o => (0,v8n__WEBPACK_IMPORTED_MODULE_1__["default"])().color().test(o);
function convert(color, {
  format,
  hasAlpha,
  isString
}) {
  const convertFn = convertMap[format] + (isString && format !== 'hex' ? 'String' : '');
  const result = color[convertFn]();
  return typeof result === 'object' && !hasAlpha ? (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.o)(result, ['a']) : result;
}
const sanitize$2 = (v, settings) => {
  const color = (0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(v);
  if (!color.isValid()) throw Error('Invalid color');
  return convert(color, settings);
};
const format$1 = (v, settings) => {
  return convert((0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(v), (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, settings), {}, {
    isString: true,
    format: 'hex'
  }));
};
const normalize$3 = ({
  value
}) => {
  const _f = (0,colord__WEBPACK_IMPORTED_MODULE_7__.getFormat)(value);
  const format = _f === 'name' ? 'hex' : _f;
  const hasAlpha = typeof value === 'object' ? 'a' in value : _f === 'hex' && value.length === 8 || /^(rgba)|(hsla)|(hsva)/.test(value);
  const settings = {
    format,
    hasAlpha,
    isString: typeof value === 'string'
  };

  return {
    value: sanitize$2(value, settings),
    settings
  };
};

var props$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format: format$1,
  normalize: normalize$3
});

const ColorPreview = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  position: 'relative',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  overflow: 'hidden',
  cursor: 'pointer',
  height: '$rowHeight',
  width: '$rowHeight',
  backgroundColor: '#fff',
  backgroundImage: `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,
  $inputStyle: '',
  $hover: '',
  zIndex: 1,
  variants: {
    active: {
      true: {
        $inputStyle: '$accent1'
      }
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'currentColor',
    zIndex: 1
  }
});
const PickerContainer = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '$sizes$rowHeight auto',
  columnGap: '$colGap',
  alignItems: 'center'
});
const PickerWrapper = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  width: '$colorPickerWidth',
  height: '$colorPickerHeight',
  '.react-colorful': {
    width: '100%',
    height: '100%',
    boxShadow: '$level2',
    cursor: 'crosshair'
  },
  '.react-colorful__saturation': {
    borderRadius: '$sm $sm 0 0'
  },
  '.react-colorful__alpha, .react-colorful__hue': {
    height: 10
  },
  '.react-colorful__last-control': {
    borderRadius: '0 0 $sm $sm'
  },
  '.react-colorful__pointer': {
    height: 12,
    width: 12
  }
});

function convertToRgb(value, format) {
  return format !== 'rgb' ? (0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(value).toRgb() : value;
}
function Color({
  value,
  displayValue,
  settings,
  onUpdate
}) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  const {
    format,
    hasAlpha
  } = settings;
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();

  const timer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);

  const [initialRgb, setInitialRgb] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => convertToRgb(value, format));
  const ColorPicker = hasAlpha ? react_colorful__WEBPACK_IMPORTED_MODULE_9__.RgbaColorPicker : react_colorful__WEBPACK_IMPORTED_MODULE_9__.RgbColorPicker;
  const showPicker = () => {
    setInitialRgb(convertToRgb(value, format));
    show();
    emitOnEditStart();
  };
  const hidePicker = () => {
    hide();
    emitOnEditEnd();
    window.clearTimeout(timer.current);
  };
  const hideAfterDelay = () => {
    timer.current = window.setTimeout(hidePicker, 500);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    return () => window.clearTimeout(timer.current);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(ColorPreview, {
    ref: popinRef,
    active: shown,
    onClick: () => showPicker(),
    style: {
      color: displayValue
    }
  }), shown && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.P, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.O, {
    onPointerUp: hidePicker
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(PickerWrapper, {
    ref: wrapperRef,
    onMouseEnter: () => window.clearTimeout(timer.current),
    onMouseLeave: e => e.buttons === 0 && hideAfterDelay()
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(ColorPicker, {
    color: initialRgb,
    onChange: onUpdate
  }))));
}
function ColorComponent() {
  const {
    value,
    displayValue,
    label,
    onChange,
    onUpdate,
    settings
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(PickerContainer, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(Color, {
    value: value,
    displayValue: displayValue,
    onChange: onChange,
    onUpdate: onUpdate,
    settings: settings
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.V, {
    value: displayValue,
    onChange: onChange,
    onUpdate: onUpdate
  })));
}

var color = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
  component: ColorComponent
}, props$2));

function Vector3dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a, {
    value: displayValue,
    settings: settings,
    onUpdate: onUpdate
  }));
}

var vector3d = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
  component: Vector3dComponent
}, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.g)(['x', 'y', 'z'])));

const JoystickTrigger = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flexCenter: '',
  position: 'relative',
  backgroundColor: '$elevation3',
  borderRadius: '$sm',
  cursor: 'pointer',
  height: '$rowHeight',
  width: '$rowHeight',
  touchAction: 'none',
  $draggable: '',
  $hover: '',
  '&:active': {
    cursor: 'none'
  },
  '&::after': {
    content: '""',
    backgroundColor: '$accent2',
    height: 4,
    width: 4,
    borderRadius: 2
  }
});
const JoystickPlayground = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flexCenter: '',
  width: '$joystickWidth',
  height: '$joystickHeight',
  borderRadius: '$sm',
  boxShadow: '$level2',
  position: 'fixed',
  zIndex: 10000,
  overflow: 'hidden',
  $draggable: '',
  transform: 'translate(-50%, -50%)',
  variants: {
    isOutOfBounds: {
      true: {
        backgroundColor: '$elevation1'
      },
      false: {
        backgroundColor: '$elevation3'
      }
    }
  },
  '> div': {
    position: 'absolute',
    $flexCenter: '',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '$highlight1',
    backgroundColor: '$elevation3',
    width: '80%',
    height: '80%',
    '&::after,&::before': {
      content: '""',
      position: 'absolute',
      zindex: 10,
      backgroundColor: '$highlight1'
    },
    '&::before': {
      width: '100%',
      height: 1
    },
    '&::after': {
      height: '100%',
      width: 1
    }
  },
  '> span': {
    position: 'relative',
    zindex: 100,
    width: 10,
    height: 10,
    backgroundColor: '$accent2',
    borderRadius: '50%'
  }
});

function Joystick({
  value,
  settings,
  onUpdate
}) {
  const timeout = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  const outOfBoundsX = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  const outOfBoundsY = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  const stepMultiplier = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(1);
  const [joystickShown, setShowJoystick] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [isOutOfBounds, setIsOutOfBounds] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [spanRef, set] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)();
  const joystickeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const playgroundRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    if (joystickShown) {
      const {
        top,
        left,
        width,
        height
      } = joystickeRef.current.getBoundingClientRect();
      playgroundRef.current.style.left = left + width / 2 + 'px';
      playgroundRef.current.style.top = top + height / 2 + 'px';
    }
  }, [joystickShown]);
  const {
    keys: [v1, v2],
    joystick
  } = settings;
  const yFactor = joystick === 'invertY' ? 1 : -1;
  const {
    [v1]: {
      step: stepV1
    },
    [v2]: {
      step: stepV2
    }
  } = settings;
  const wpx = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('sizes', 'joystickWidth');
  const hpx = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('sizes', 'joystickHeight');
  const w = parseFloat(wpx) * 0.8 / 2;
  const h = parseFloat(hpx) * 0.8 / 2;
  const startOutOfBounds = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    if (timeout.current) return;
    setIsOutOfBounds(true);
    if (outOfBoundsX.current) set({
      x: outOfBoundsX.current * w
    });
    if (outOfBoundsY.current) set({
      y: outOfBoundsY.current * -h
    });
    timeout.current = window.setInterval(() => {
      onUpdate(v => {
        const incX = stepV1 * outOfBoundsX.current * stepMultiplier.current;
        const incY = yFactor * stepV2 * outOfBoundsY.current * stepMultiplier.current;
        return Array.isArray(v) ? {
          [v1]: v[0] + incX,
          [v2]: v[1] + incY
        } : {
          [v1]: v[v1] + incX,
          [v2]: v[v2] + incY
        };
      });
    }, 16);
  }, [w, h, onUpdate, set, stepV1, stepV2, v1, v2, yFactor]);
  const endOutOfBounds = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    window.clearTimeout(timeout.current);
    timeout.current = undefined;
    setIsOutOfBounds(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    function setStepMultiplier(event) {
      stepMultiplier.current = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.m)(event);
    }
    window.addEventListener('keydown', setStepMultiplier);
    window.addEventListener('keyup', setStepMultiplier);
    return () => {
      window.clearTimeout(timeout.current);
      window.removeEventListener('keydown', setStepMultiplier);
      window.removeEventListener('keyup', setStepMultiplier);
    };
  }, []);
  const bind = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(({
    first,
    active,
    delta: [dx, dy],
    movement: [mx, my]
  }) => {
    if (first) setShowJoystick(true);
    const _x = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.h)(mx, -w, w);
    const _y = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.h)(my, -h, h);
    outOfBoundsX.current = Math.abs(mx) > Math.abs(_x) ? Math.sign(mx - _x) : 0;
    outOfBoundsY.current = Math.abs(my) > Math.abs(_y) ? Math.sign(_y - my) : 0;

    let newX = value[v1];
    let newY = value[v2];
    if (active) {
      if (!outOfBoundsX.current) {
        newX += dx * stepV1 * stepMultiplier.current;
        set({
          x: _x
        });
      }
      if (!outOfBoundsY.current) {
        newY -= yFactor * dy * stepV2 * stepMultiplier.current;
        set({
          y: _y
        });
      }
      if (outOfBoundsX.current || outOfBoundsY.current) startOutOfBounds();else endOutOfBounds();
      onUpdate({
        [v1]: newX,
        [v2]: newY
      });
    } else {
      setShowJoystick(false);
      outOfBoundsX.current = 0;
      outOfBoundsY.current = 0;
      set({
        x: 0,
        y: 0
      });
      endOutOfBounds();
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(JoystickTrigger, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    ref: joystickeRef
  }, bind()), joystickShown && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.P, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(JoystickPlayground, {
    ref: playgroundRef,
    isOutOfBounds: isOutOfBounds
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    ref: spanRef
  }))));
}

const Container$1 = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  display: 'grid',
  columnGap: '$colGap',
  variants: {
    withJoystick: {
      true: {
        gridTemplateColumns: '$sizes$rowHeight auto'
      },
      false: {
        gridTemplateColumns: 'auto'
      }
    }
  }
});
function Vector2dComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(Container$1, {
    withJoystick: !!settings.joystick
  }, settings.joystick && react__WEBPACK_IMPORTED_MODULE_4__.createElement(Joystick, {
    value: displayValue,
    settings: settings,
    onUpdate: onUpdate
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a, {
    value: displayValue,
    settings: settings,
    onUpdate: onUpdate
  })));
}

const _excluded$7 = ["joystick"];
const plugin = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.g)(['x', 'y']);
const normalize$2 = _ref => {
  let {
      joystick = true
    } = _ref,
    input = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded$7);
  const {
    value,
    settings
  } = plugin.normalize(input);
  return {
    value,
    settings: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, settings), {}, {
      joystick
    })
  };
};
var vector2d = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
  component: Vector2dComponent
}, plugin), {}, {
  normalize: normalize$2
}));

const sanitize$1 = v => {
  if (v === undefined) return undefined;
  if (v instanceof File) {
    try {
      return URL.createObjectURL(v);
    } catch (e) {
      return undefined;
    }
  }
  if (typeof v === 'string' && v.indexOf('blob:') === 0) return v;
  throw Error(`Invalid image format [undefined | blob | File].`);
};
const schema$1 = (_o, s) => typeof s === 'object' && 'image' in s;
const normalize$1 = ({
  image
}) => {
  return {
    value: image
  };
};

var props$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sanitize: sanitize$1,
  schema: schema$1,
  normalize: normalize$1
});

const ImageContainer = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '$sizes$rowHeight auto 20px',
  columnGap: '$colGap',
  alignItems: 'center'
});
const DropZone = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flexCenter: '',
  overflow: 'hidden',
  height: '$rowHeight',
  background: '$elevation3',
  textAlign: 'center',
  color: 'inherit',
  borderRadius: '$sm',
  outline: 'none',
  userSelect: 'none',
  cursor: 'pointer',
  $inputStyle: '',
  $hover: '',
  $focusWithin: '',
  $active: '$accent1 $elevation1',
  variants: {
    isDragAccept: {
      true: {
        $inputStyle: '$accent1',
        backgroundColor: '$elevation1'
      }
    }
  }
});
const ImagePreview = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  boxSizing: 'border-box',
  borderRadius: '$sm',
  height: '$rowHeight',
  width: '$rowHeight',
  $inputStyle: '',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  variants: {
    hasImage: {
      true: {
        cursor: 'pointer',
        $hover: '',
        $active: ''
      }
    }
  }
});
const ImageLargePreview = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flexCenter: '',
  width: '$imagePreviewWidth',
  height: '$imagePreviewHeight',
  borderRadius: '$sm',
  boxShadow: '$level2',
  pointerEvents: 'none',
  $inputStyle: '',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
});
const Instructions = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  fontSize: '0.8em',
  height: '100%',
  padding: '$rowGap $md'
});
const Remove = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flexCenter: '',
  top: '0',
  right: '0',
  marginRight: '$sm',
  height: '100%',
  cursor: 'pointer',
  variants: {
    disabled: {
      true: {
        color: '$elevation3',
        cursor: 'default'
      }
    }
  },
  '&::after,&::before': {
    content: '""',
    position: 'absolute',
    height: 2,
    width: 10,
    borderRadius: 1,
    backgroundColor: 'currentColor'
  },
  '&::after': {
    transform: 'rotate(45deg)'
  },
  '&::before': {
    transform: 'rotate(-45deg)'
  }
});

function ImageComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  const {
    popinRef,
    wrapperRef,
    shown,
    show,
    hide
  } = usePopin();
  const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(acceptedFiles => {
    if (acceptedFiles.length) onUpdate(acceptedFiles[0]);
  }, [onUpdate]);
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(e => {
    e.stopPropagation();
    onUpdate(undefined);
  }, [onUpdate]);
  const {
    getRootProps,
    getInputProps,
    isDragAccept
  } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_10__.useDropzone)({
    maxFiles: 1,
    accept: 'image/*',
    onDrop,
    disabled
  });

  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(ImageContainer, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(ImagePreview, {
    ref: popinRef,
    hasImage: !!value,
    onPointerDown: () => !!value && show(),
    onPointerUp: hide,
    style: {
      backgroundImage: value ? `url(${value})` : 'none'
    }
  }), shown && !!value && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.P, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.O, {
    onPointerUp: hide,
    style: {
      cursor: 'pointer'
    }
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(ImageLargePreview, {
    ref: wrapperRef,
    style: {
      backgroundImage: `url(${value})`
    }
  })), react__WEBPACK_IMPORTED_MODULE_4__.createElement(DropZone, getRootProps({
    isDragAccept
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", getInputProps()), react__WEBPACK_IMPORTED_MODULE_4__.createElement(Instructions, null, isDragAccept ? 'drop image' : 'click or drop')), react__WEBPACK_IMPORTED_MODULE_4__.createElement(Remove, {
    onClick: clear,
    disabled: !value
  })));
}

var image = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
  component: ImageComponent
}, props$1));

const number = (0,v8n__WEBPACK_IMPORTED_MODULE_1__["default"])().number();
const schema = (o, s) => (0,v8n__WEBPACK_IMPORTED_MODULE_1__["default"])().array().length(2).every.number().test(o) && (0,v8n__WEBPACK_IMPORTED_MODULE_1__["default"])().schema({
  min: number,
  max: number
}).test(s);
const format = v => ({
  min: v[0],
  max: v[1]
});
const sanitize = (value, {
  bounds: [MIN, MAX]
}, prevValue) => {
  const _value = Array.isArray(value) ? format(value) : value;
  const _newValue = {
    min: prevValue[0],
    max: prevValue[1]
  };
  const {
    min,
    max
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, _newValue), _value);
  return [(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.h)(Number(min), MIN, Math.max(MIN, max)), (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.h)(Number(max), Math.min(MAX, min), MAX)];
};
const normalize = ({
  value,
  min,
  max
}) => {
  const boundsSettings = {
    min,
    max
  };
  const _settings = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.n)(format(value), {
    min: boundsSettings,
    max: boundsSettings
  });
  const bounds = [min, max];
  const settings = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, _settings), {}, {
    bounds
  });

  const _value = sanitize(format(value), settings, value);
  return {
    value: _value,
    settings
  };
};

var props = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema,
  format: format,
  sanitize: sanitize,
  normalize: normalize
});

const _excluded$6 = ["value", "bounds", "onDrag"],
  _excluded2$1 = ["bounds"];
const Container = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  display: 'grid',
  columnGap: '$colGap',
  gridTemplateColumns: 'auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)'
});
function IntervalSlider(_ref) {
  let {
      value,
      bounds: [min, max],
      onDrag
    } = _ref,
    settings = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded$6);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const minScrubberRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const maxScrubberRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const rangeWidth = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
  const scrubberWidth = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('sizes', 'scrubberWidth');
  const bind = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(({
    event,
    first,
    xy: [x],
    movement: [mx],
    memo: _memo = {}
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === minScrubberRef.current || (event === null || event === void 0 ? void 0 : event.target) === maxScrubberRef.current;
      _memo.pos = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.j)((x - left) / width, min, max);
      const delta = Math.abs(_memo.pos - value.min) - Math.abs(_memo.pos - value.max);
      _memo.key = delta < 0 || delta === 0 && _memo.pos <= value.min ? 'min' : 'max';
      if (targetIsScrub) _memo.pos = value[_memo.key];
    }
    const newValue = _memo.pos + (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.j)(mx / rangeWidth.current, 0, max - min);
    onDrag({
      [_memo.key]: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.k)(newValue, settings[_memo.key])
    });
    return _memo;
  });
  const minStyle = `calc(${(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.r)(value.min, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  const maxStyle = `calc(${1 - (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.r)(value.max, min, max)} * (100% - ${scrubberWidth} - 8px) + 4px)`;
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.l, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    ref: ref
  }, bind()), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.q, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.I, {
    style: {
      left: minStyle,
      right: maxStyle
    }
  })), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.S, {
    position: "left",
    ref: minScrubberRef,
    style: {
      left: minStyle
    }
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.S, {
    position: "right",
    ref: maxScrubberRef,
    style: {
      right: maxStyle
    }
  }));
}
function IntervalComponent() {
  const {
    label,
    displayValue,
    onUpdate,
    settings
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)();
  const _settings = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(settings, _excluded2$1);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(IntervalSlider, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    value: displayValue
  }, settings, {
    onDrag: onUpdate
  })), react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a, {
    value: displayValue,
    settings: _settings,
    onUpdate: onUpdate,
    innerLabelTrim: 0
  }))));
}

var interval = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
  component: IntervalComponent
}, props));

const createEventEmitter = () => {
  const listenerMapping = new Map();
  return {
    on: (topic, listener) => {
      let listeners = listenerMapping.get(topic);
      if (listeners === undefined) {
        listeners = new Set();
        listenerMapping.set(topic, listeners);
      }
      listeners.add(listener);
    },
    off: (topic, listener) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === undefined) {
        return;
      }
      listeners.delete(listener);
      if (listeners.size === 0) {
        listenerMapping.delete(topic);
      }
    },
    emit: (topic, ...args) => {
      const listeners = listenerMapping.get(topic);
      if (listeners === undefined) {
        return;
      }
      for (const listener of listeners) {
        listener(...args);
      }
    }
  };
};

const _excluded$5 = ["type", "value"],
  _excluded2 = ["onChange", "transient", "onEditStart", "onEditEnd"];
const Store = function Store() {
  const store = (0,zustand__WEBPACK_IMPORTED_MODULE_11__["default"])((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_12__.subscribeWithSelector)(() => ({
    data: {}
  })));
  const eventEmitter = createEventEmitter();
  this.storeId = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.t)();
  this.useStore = store;
  const folders = {};

  const orderedPaths = new Set();

  this.getVisiblePaths = () => {
    const data = this.getData();
    const paths = Object.keys(data);
    const hiddenFolders = [];
    Object.entries(folders).forEach(([path, settings]) => {
      if (
      settings.render &&
      paths.some(p => p.indexOf(path) === 0) &&
      !settings.render(this.get))
        hiddenFolders.push(path + '.');
    });
    const visiblePaths = [];
    orderedPaths.forEach(path => {
      if (path in data &&
      data[path].__refCount > 0 &&
      hiddenFolders.every(p => path.indexOf(p) === -1) && (
      !data[path].render || data[path].render(this.get))) {
        visiblePaths.push(path);
      }
    });
    return visiblePaths;
  };

  this.setOrderedPaths = newPaths => {
    newPaths.forEach(p => orderedPaths.add(p));
  };
  this.orderPaths = paths => {
    this.setOrderedPaths(paths);
    return paths;
  };

  this.disposePaths = paths => {
    store.setState(s => {
      const data = s.data;
      paths.forEach(path => {
        if (path in data) {
          const input = data[path];
          input.__refCount--;
          if (input.__refCount === 0 && input.type in _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v) {
            delete data[path];
          }
        }
      });
      return {
        data
      };
    });
  };
  this.dispose = () => {
    store.setState(() => {
      return {
        data: {}
      };
    });
  };
  this.getFolderSettings = path => {
    return folders[path] || {};
  };

  this.getData = () => {
    return store.getState().data;
  };

  this.addData = (newData, override) => {
    store.setState(s => {
      const data = s.data;
      Object.entries(newData).forEach(([path, newInputData]) => {
        let input = data[path];

        if (!!input) {
          const {
              type,
              value
            } = newInputData,
            rest = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(newInputData, _excluded$5);
          if (type !== input.type) {
            (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.INPUT_TYPE_OVERRIDE, type);
          } else {
            if (input.__refCount === 0 || override) {
              Object.assign(input, rest);
            }
            input.__refCount++;
          }
        } else {
          data[path] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, newInputData), {}, {
            __refCount: 1
          });
        }
      });

      return {
        data
      };
    });
  };

  this.setValueAtPath = (path, value, fromPanel) => {
    store.setState(s => {
      const data = s.data;
      (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.y)(data[path], value, path, this, fromPanel);
      return {
        data
      };
    });
  };
  this.setSettingsAtPath = (path, settings) => {
    store.setState(s => {
      const data = s.data;
      data[path].settings = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, data[path].settings), settings);
      return {
        data
      };
    });
  };
  this.disableInputAtPath = (path, flag) => {
    store.setState(s => {
      const data = s.data;
      data[path].disabled = flag;
      return {
        data
      };
    });
  };
  this.set = (values, fromPanel) => {
    store.setState(s => {
      const data = s.data;
      Object.entries(values).forEach(([path, value]) => {
        try {
          (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.y)(data[path], value, undefined, undefined, fromPanel);
        } catch (e) {
          if (true) {
            console.warn(`[This message will only show in development]: \`set\` for path ${path} has failed.`, e);
          }
        }
      });
      return {
        data
      };
    });
  };
  this.getInput = path => {
    try {
      return this.getData()[path];
    } catch (e) {
      (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.PATH_DOESNT_EXIST, path);
    }
  };
  this.get = path => {
    var _this$getInput;
    return (_this$getInput = this.getInput(path)) === null || _this$getInput === void 0 ? void 0 : _this$getInput.value;
  };
  this.emitOnEditStart = path => {
    eventEmitter.emit(`onEditStart:${path}`, this.get(path), path, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.emitOnEditEnd = path => {
    eventEmitter.emit(`onEditEnd:${path}`, this.get(path), path, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, this.getInput(path)), {}, {
      get: this.get
    }));
  };
  this.subscribeToEditStart = (path, listener) => {
    const _path = `onEditStart:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };
  this.subscribeToEditEnd = (path, listener) => {
    const _path = `onEditEnd:${path}`;
    eventEmitter.on(_path, listener);
    return () => eventEmitter.off(_path, listener);
  };

  const _getDataFromSchema = (schema, rootPath, mappedPaths) => {
    const data = {};
    Object.entries(schema).forEach(([key, rawInput]) => {
      if (key === '') return (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.EMPTY_KEY);
      let newPath = join(rootPath, key);

      if (rawInput.type === _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.FOLDER) {
        const newData = _getDataFromSchema(rawInput.schema, newPath, mappedPaths);
        Object.assign(data, newData);

        if (!(newPath in folders)) folders[newPath] = rawInput.settings;
      } else if (key in mappedPaths) {
        (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.DUPLICATE_KEYS, key, newPath, mappedPaths[key].path);
      } else {
        const normalizedInput = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.z)(rawInput, key, newPath, data);
        if (normalizedInput) {
          const {
            type,
            options,
            input
          } = normalizedInput;
          const {
              onChange,
              transient,
              onEditStart,
              onEditEnd
            } = options,
            _options = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(options, _excluded2);
          data[newPath] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
            type
          }, _options), input), {}, {
            fromPanel: true
          });
          mappedPaths[key] = {
            path: newPath,
            onChange,
            transient,
            onEditStart,
            onEditEnd
          };
        } else {
          (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.UNKNOWN_INPUT, newPath, rawInput);
        }
      }
    });
    return data;
  };
  this.getDataFromSchema = schema => {
    const mappedPaths = {};
    const data = _getDataFromSchema(schema, '', mappedPaths);
    return [data, mappedPaths];
  };
};
const levaStore = new Store();
function useCreateStore() {
  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => new Store(), []);
}
if ( true && typeof window !== 'undefined') {
  window.__STORE = levaStore;
}

const defaultSettings$2 = {
  collapsed: false
};
function folder(schema, settings) {
  return {
    type: _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.FOLDER,
    schema,
    settings: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, defaultSettings$2), settings)
  };
}

const defaultSettings$1 = {
  disabled: false
};

function button(onClick, settings) {
  return {
    type: _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.BUTTON,
    onClick,
    settings: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, defaultSettings$1), settings)
  };
}

function buttonGroup(opts) {
  return {
    type: _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.BUTTON_GROUP,
    opts
  };
}

const defaultSettings = {
  graph: false,
  interval: 100
};
function monitor(objectOrFn, settings) {
  return {
    type: _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.MONITOR,
    objectOrFn,
    settings: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)((0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, defaultSettings), settings)
  };
}

const isInput = v => '__levaInput' in v;
const buildTree = (paths, filter) => {
  const tree = {};
  const _filter = filter ? filter.toLowerCase() : null;
  paths.forEach(path => {
    const [valueKey, folderPath] = getKeyPath(path);
    if (!_filter || valueKey.toLowerCase().indexOf(_filter) > -1) {
      merge_value__WEBPACK_IMPORTED_MODULE_5___default()(tree, folderPath, {
        [valueKey]: {
          __levaInput: true,
          path
        }
      });
    }
  });
  return tree;
};

const _excluded$4 = ["type", "label", "path", "valueKey", "value", "settings", "setValue", "disabled"];
function ControlInput(_ref) {
  let {
      type,
      label,
      path,
      valueKey,
      value,
      settings,
      setValue,
      disabled
    } = _ref,
    rest = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded$4);
  const {
    displayValue,
    onChange,
    onUpdate
  } = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.A)({
    type,
    value,
    settings,
    setValue
  });
  const Input = _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.B[type].component;
  if (!Input) {
    (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.NO_COMPONENT_FOR_TYPE, type, path);
    return null;
  }
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.C.Provider, {
    value: (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
      key: valueKey,
      path,
      id: '' + path,
      label,
      displayValue,
      value,
      onChange,
      onUpdate,
      settings,
      setValue,
      disabled
    }, rest)
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.D, {
    disabled: disabled
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(Input, null)));
}

const StyledButton = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('button', {
  display: 'block',
  $reset: '',
  fontWeight: '$button',
  height: '$rowHeight',
  borderStyle: 'none',
  borderRadius: '$sm',
  backgroundColor: '$elevation1',
  color: '$highlight1',
  '&:not(:disabled)': {
    color: '$highlight3',
    backgroundColor: '$accent2',
    cursor: 'pointer',
    $hover: '$accent3',
    $active: '$accent3 $accent1',
    $focus: ''
  }
});

function Button({
  onClick,
  settings,
  label
}) {
  const store = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledButton, {
    disabled: settings.disabled,
    onClick: () => onClick(store.get)
  }, label));
}

const StyledButtonGroup = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flex: '',
  justifyContent: 'flex-end',
  gap: '$colGap'
});

const StyledButtonGroupButton = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('button', {
  $reset: '',
  cursor: 'pointer',
  borderRadius: '$xs',
  '&:hover': {
    backgroundColor: '$elevation3'
  }
});

const getOpts = ({
  label: _label,
  opts: _opts
}) => {
  let label = typeof _label === 'string' ? _label.trim() === '' ? null : _label : _label;
  let opts = _opts;
  if (typeof _opts.opts === 'object') {
    if (opts.label !== undefined) {
      label = _opts.label;
    }
    opts = _opts.opts;
  }
  return {
    label,
    opts: opts
  };
};
function ButtonGroup(props) {
  const {
    label,
    opts
  } = getOpts(props);
  const store = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: !!label
  }, label && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, null, label), react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledButtonGroup, null, Object.entries(opts).map(([label, onClick]) => react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledButtonGroupButton, {
    key: label,
    onClick: () => onClick(store.get)
  }, label))));
}

const Canvas = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('canvas', {
  height: '$monitorHeight',
  width: '100%',
  display: 'block',
  borderRadius: '$sm'
});

const POINTS = 100;
function push(arr, val) {
  arr.push(val);
  if (arr.length > POINTS) arr.shift();
}
const MonitorCanvas = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function ({
  initialValue
}, ref) {
  const accentColor = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('colors', 'highlight3');
  const backgroundColor = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('colors', 'elevation2');
  const fillColor = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('colors', 'highlight1');
  const [gradientTop, gradientBottom] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    return [(0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(fillColor).alpha(0.4).toRgbString(), (0,colord__WEBPACK_IMPORTED_MODULE_7__.colord)(fillColor).alpha(0.1).toRgbString()];
  }, [fillColor]);
  const points = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)([initialValue]);
  const min = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(initialValue);
  const max = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(initialValue);
  const raf = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  const drawPlot = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((_canvas, _ctx) => {
    if (!_canvas) return;
    const {
      width,
      height
    } = _canvas;

    const path = new Path2D();
    const interval = width / POINTS;
    const verticalPadding = height * 0.05;
    for (let i = 0; i < points.current.length; i++) {
      const p = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.r)(points.current[i], min.current, max.current);
      const x = interval * i;
      const y = height - p * (height - verticalPadding * 2) - verticalPadding;
      path.lineTo(x, y);
    }

    _ctx.clearRect(0, 0, width, height);

    const gradientPath = new Path2D(path);
    gradientPath.lineTo(interval * (points.current.length + 1), height);
    gradientPath.lineTo(0, height);
    gradientPath.lineTo(0, 0);
    const gradient = _ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0.0, gradientTop);
    gradient.addColorStop(1.0, gradientBottom);
    _ctx.fillStyle = gradient;
    _ctx.fill(gradientPath);

    _ctx.strokeStyle = backgroundColor;
    _ctx.lineJoin = 'round';
    _ctx.lineWidth = 14;
    _ctx.stroke(path);

    _ctx.strokeStyle = accentColor;
    _ctx.lineWidth = 2;
    _ctx.stroke(path);
  }, [accentColor, backgroundColor, gradientTop, gradientBottom]);
  const [canvas, ctx] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.F)(drawPlot);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, () => ({
    frame: val => {
      if (min.current === undefined || val < min.current) min.current = val;
      if (max.current === undefined || val > max.current) max.current = val;
      push(points.current, val);
      raf.current = requestAnimationFrame(() => drawPlot(canvas.current, ctx.current));
    }
  }), [canvas, ctx, drawPlot]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => () => cancelAnimationFrame(raf.current), []);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(Canvas, {
    ref: canvas
  });
});
const parse = val => Number.isFinite(val) ? val.toPrecision(2) : val.toString();
const MonitorLog = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(function ({
  initialValue
}, ref) {
  const [val, set] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(parse(initialValue));
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, () => ({
    frame: v => set(parse(v))
  }), []);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, val);
});
function getValue(o) {
  return typeof o === 'function' ? o() : o.current;
}
function Monitor({
  label,
  objectOrFn,
  settings
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
  const initialValue = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(getValue(objectOrFn));
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const timeout = window.setInterval(() => {
      var _ref$current;
      if (document.hidden) return;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.frame(getValue(objectOrFn));
    }, settings.interval);
    return () => window.clearInterval(timeout);
  }, [objectOrFn, settings.interval]);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.R, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.L, {
    align: "top"
  }, label), settings.graph ? react__WEBPACK_IMPORTED_MODULE_4__.createElement(MonitorCanvas, {
    ref: ref,
    initialValue: initialValue.current
  }) : react__WEBPACK_IMPORTED_MODULE_4__.createElement(MonitorLog, {
    ref: ref,
    initialValue: initialValue.current
  }));
}

const _excluded$3 = ["type", "label", "key"];
const specialComponents = {
  [_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.BUTTON]: Button,
  [_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.BUTTON_GROUP]: ButtonGroup,
  [_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v.MONITOR]: Monitor
};
const Control = react__WEBPACK_IMPORTED_MODULE_4__.memo(({
  path
}) => {
  const [input, {
    set,
    setSettings,
    disable,
    storeId,
    emitOnEditStart,
    emitOnEditEnd
  }] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.G)(path);
  if (!input) return null;
  const {
      type,
      label,
      key
    } = input,
    inputProps = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(input, _excluded$3);
  if (type in _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.v) {
    const SpecialInputForType = specialComponents[type];
    return react__WEBPACK_IMPORTED_MODULE_4__.createElement(SpecialInputForType, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
      label: label,
      path: path
    }, inputProps));
  }
  if (!(type in _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.B)) {
    (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.H)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.x.UNSUPPORTED_INPUT, type, path);
    return null;
  }
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(ControlInput, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    key: storeId + path,
    type: type,
    label: label,
    storeId: storeId,
    path: path,
    valueKey: key,
    setValue: set,
    setSettings: setSettings,
    disable: disable,
    emitOnEditStart: emitOnEditStart,
    emitOnEditEnd: emitOnEditEnd
  }, inputProps));
});

function FolderTitle({
  toggle,
  toggled,
  name
}) {
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.J, {
    onClick: () => toggle()
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.K, {
    toggled: toggled
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, name));
}

const Folder = ({
  name,
  path,
  tree
}) => {
  const store = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)();
  const newPath = join(path, name);
  const {
    collapsed,
    color
  } = store.getFolderSettings(newPath);
  const [toggled, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!collapsed);
  const folderRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const widgetColor = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('colors', 'folderWidgetColor');
  const textColor = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.d)('colors', 'folderTextColor');
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(() => {
    folderRef.current.style.setProperty('--leva-colors-folderWidgetColor', color || widgetColor);
    folderRef.current.style.setProperty('--leva-colors-folderTextColor', color || textColor);
  }, [color, widgetColor, textColor]);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.Q, {
    ref: folderRef
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(FolderTitle, {
    name: name,
    toggled: toggled,
    toggle: () => setToggle(t => !t)
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(TreeWrapper, {
    parent: newPath,
    tree: tree,
    toggled: toggled
  }));
};
const TreeWrapper = react__WEBPACK_IMPORTED_MODULE_4__.memo(({
  isRoot: _isRoot = false,
  fill: _fill = false,
  flat: _flat = false,
  parent,
  tree,
  toggled
}) => {
  const {
    wrapperRef,
    contentRef
  } = useToggle(toggled);
  const store = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)();
  const getOrder = ([key, o]) => {
    var _store$getInput;
    const order = isInput(o) ? (_store$getInput = store.getInput(o.path)) === null || _store$getInput === void 0 ? void 0 : _store$getInput.order : store.getFolderSettings(join(parent, key)).order;
    return order || 0;
  };
  const entries = Object.entries(tree).sort((a, b) => getOrder(a) - getOrder(b));
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.M, {
    ref: wrapperRef,
    isRoot: _isRoot,
    fill: _fill,
    flat: _flat
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.N, {
    ref: contentRef,
    isRoot: _isRoot,
    toggled: toggled
  }, entries.map(([key, value]) => isInput(value) ? react__WEBPACK_IMPORTED_MODULE_4__.createElement(Control, {
    key: value.path,
    valueKey: value.valueKey,
    path: value.path
  }) : react__WEBPACK_IMPORTED_MODULE_4__.createElement(Folder, {
    key: key,
    name: key,
    path: parent,
    tree: value
  }))));
});

const StyledRoot = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  position: 'relative',
  fontFamily: '$mono',
  fontSize: '$root',
  color: '$rootText',
  backgroundColor: '$elevation1',
  variants: {
    fill: {
      false: {
        position: 'fixed',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        width: '$rootWidth'
      },
      true: {
        position: 'relative',
        width: '100%'
      }
    },
    flat: {
      false: {
        borderRadius: '$lg',
        boxShadow: '$level1'
      }
    },
    oneLineLabels: {
      true: {
        [`${_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.T}`]: {
          gridTemplateColumns: 'auto',
          gridAutoColumns: 'minmax(max-content, 1fr)',
          gridAutoRows: 'minmax($sizes$rowHeight), auto)',
          rowGap: 0,
          columnGap: 0,
          marginTop: '$rowGap'
        }
      }
    },
    hideTitleBar: {
      true: {
        $$titleBarHeight: '0px'
      },
      false: {
        $$titleBarHeight: '$sizes$titleBarHeight'
      }
    }
  },
  '&,*,*:after,*:before': {
    boxSizing: 'border-box'
  },
  '*::selection': {
    backgroundColor: '$accent2'
  }
});

const iconWidth = 40;
const Icon = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('i', {
  $flexCenter: '',
  width: iconWidth,
  userSelect: 'none',
  cursor: 'pointer',
  '> svg': {
    fill: '$highlight1',
    transition: 'transform 350ms ease, fill 250ms ease'
  },
  '&:hover > svg': {
    fill: '$highlight3'
  },
  variants: {
    active: {
      true: {
        '> svg': {
          fill: '$highlight2'
        }
      }
    }
  }
});
const StyledTitleWithFilter = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  height: '$titleBarHeight',
  variants: {
    mode: {
      drag: {
        cursor: 'grab'
      }
    }
  }
});
const FilterWrapper = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  $flex: '',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  transition: 'height 250ms ease',
  color: '$highlight3',
  paddingLeft: '$md',
  [`> ${Icon}`]: {
    height: 30
  },
  variants: {
    toggled: {
      true: {
        height: 30
      },
      false: {
        height: 0
      }
    }
  }
});
const StyledFilterInput = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('input', {
  $reset: '',
  flex: 1,
  position: 'relative',
  height: 30,
  width: '100%',
  backgroundColor: 'transparent',
  fontSize: '10px',
  borderRadius: '$root',
  '&:focus': {},
  '&::placeholder': {
    color: '$highlight2'
  }
});
const TitleContainer = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.s)('div', {
  touchAction: 'none',
  $flexCenter: '',
  flex: 1,
  '> svg': {
    fill: '$highlight1'
  },
  color: '$highlight1',
  variants: {
    drag: {
      true: {
        $draggable: '',
        '> svg': {
          transition: 'fill 250ms ease'
        },
        '&:hover': {
          color: '$highlight3'
        },
        '&:hover > svg': {
          fill: '$highlight3'
        }
      }
    },
    filterEnabled: {
      false: {
        paddingRight: iconWidth
      }
    }
  }
});

const FilterInput = react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(({
  setFilter,
  toggle
}, ref) => {
  const [value, set] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const debouncedOnChange = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.U)(setFilter, 250), [setFilter]);
  const clear = () => {
    setFilter('');
    set('');
  };
  const _onChange = e => {
    const v = e.currentTarget.value;
    toggle(true);
    set(v);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    debouncedOnChange(value);
  }, [value, debouncedOnChange]);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledFilterInput, {
    ref: ref,
    value: value,
    placeholder: "[Open filter with CMD+SHIFT+L]",
    onPointerDown: e => e.stopPropagation(),
    onChange: _onChange
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement(Icon, {
    onClick: () => clear(),
    style: {
      visibility: value ? 'visible' : 'hidden'
    }
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "14",
    width: "14",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
    clipRule: "evenodd"
  }))));
});
function TitleWithFilter({
  setFilter,
  onDrag,
  onDragStart,
  onDragEnd,
  toggle,
  toggled,
  title,
  drag,
  filterEnabled,
  from
}) {
  const [filterShown, setShowFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    var _inputRef$current, _inputRef$current2;
    if (filterShown) (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();else (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.blur();
  }, [filterShown]);
  const bind = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.e)(({
    offset: [x, y],
    first,
    last
  }) => {
    onDrag({
      x,
      y
    });
    if (first) {
      onDragStart({
        x,
        y
      });
    }
    if (last) {
      onDragEnd({
        x,
        y
      });
    }
  }, {
    filterTaps: true,
    from: ({
      offset: [x, y]
    }) => [(from === null || from === void 0 ? void 0 : from.x) || x, (from === null || from === void 0 ? void 0 : from.y) || y]
  });
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const handleShortcut = event => {
      if (event.key === 'L' && event.shiftKey && event.metaKey) {
        setShowFilter(f => !f);
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledTitleWithFilter, {
    mode: drag ? 'drag' : undefined
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(Icon, {
    active: !toggled,
    onClick: () => toggle()
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.K, {
    toggled: toggled,
    width: 12,
    height: 8
  })), react__WEBPACK_IMPORTED_MODULE_4__.createElement(TitleContainer, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({}, drag ? bind() : {}, {
    drag: drag,
    filterEnabled: filterEnabled
  }), title === undefined && drag ? react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", {
    width: "20",
    height: "10",
    viewBox: "0 0 28 14",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "2"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "14",
    cy: "2",
    r: "2"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "26",
    cy: "2",
    r: "2"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "2",
    cy: "12",
    r: "2"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("circle", {
    cx: "26",
    cy: "12",
    r: "2"
  })) : title), filterEnabled && react__WEBPACK_IMPORTED_MODULE_4__.createElement(Icon, {
    active: filterShown,
    onClick: () => setShowFilter(f => !f)
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 0 20 20"
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement("path", {
    d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z"
  }), react__WEBPACK_IMPORTED_MODULE_4__.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
    clipRule: "evenodd"
  })))), react__WEBPACK_IMPORTED_MODULE_4__.createElement(FilterWrapper, {
    toggled: filterShown
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(FilterInput, {
    ref: inputRef,
    setFilter: setFilter,
    toggle: toggle
  })));
}

const _excluded$2 = ["store", "hidden", "theme", "collapsed"];
function LevaRoot(_ref) {
  let {
      store,
      hidden = false,
      theme,
      collapsed = false
    } = _ref,
    props = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded$2);
  const themeContext = useDeepMemo(() => (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.Z)(theme), [theme]);
  const [toggled, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!collapsed);
  const computedToggled = typeof collapsed === 'object' ? !collapsed.collapsed : toggled;
  const computedSetToggle = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    if (typeof collapsed === 'object') {
      return value => {
        if (typeof value === 'function') {
          collapsed.onChange(!value(!collapsed.collapsed));
        } else {
          collapsed.onChange(!value);
        }
      };
    }
    return setToggle;
  }, [collapsed]);
  if (!store || hidden) return null;
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.$.Provider, {
    value: themeContext
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(LevaCore, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    store: store
  }, props, {
    toggled: computedToggled,
    setToggle: computedSetToggle,
    rootClass: themeContext.className
  })));
}
const LevaCore = react__WEBPACK_IMPORTED_MODULE_4__.memo(({
  store,
  rootClass,
  fill: _fill = false,
  flat: _flat = false,
  neverHide: _neverHide = false,
  oneLineLabels: _oneLineLabels = false,
  titleBar: _titleBar = {
    title: undefined,
    drag: true,
    filter: true,
    position: undefined,
    onDrag: undefined,
    onDragStart: undefined,
    onDragEnd: undefined
  },
  hideCopyButton: _hideCopyButton = false,
  toggled,
  setToggle
}) => {
  var _titleBar$drag, _titleBar$filter;
  const paths = useVisiblePaths(store);
  const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const tree = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => buildTree(paths, filter), [paths, filter]);

  const [rootRef, set] = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)();

  const shouldShow = _neverHide || paths.length > 0;
  const title = typeof _titleBar === 'object' ? _titleBar.title || undefined : undefined;
  const drag = typeof _titleBar === 'object' ? (_titleBar$drag = _titleBar.drag) !== null && _titleBar$drag !== void 0 ? _titleBar$drag : true : true;
  const filterEnabled = typeof _titleBar === 'object' ? (_titleBar$filter = _titleBar.filter) !== null && _titleBar$filter !== void 0 ? _titleBar$filter : true : true;
  const position = typeof _titleBar === 'object' ? _titleBar.position || undefined : undefined;
  const onDrag = typeof _titleBar === 'object' ? _titleBar.onDrag || undefined : undefined;
  const onDragStart = typeof _titleBar === 'object' ? _titleBar.onDragStart || undefined : undefined;
  const onDragEnd = typeof _titleBar === 'object' ? _titleBar.onDragEnd || undefined : undefined;
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(() => {
    set({
      x: position === null || position === void 0 ? void 0 : position.x,
      y: position === null || position === void 0 ? void 0 : position.y
    });
  }, [position, set]);
  (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.W)();
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.X.Provider, {
    value: {
      hideCopyButton: _hideCopyButton
    }
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(StyledRoot, {
    ref: rootRef,
    className: rootClass,
    fill: _fill,
    flat: _flat,
    oneLineLabels: _oneLineLabels,
    hideTitleBar: !_titleBar,
    style: {
      display: shouldShow ? 'block' : 'none'
    }
  }, _titleBar && react__WEBPACK_IMPORTED_MODULE_4__.createElement(TitleWithFilter, {
    onDrag: point => {
      set(point);
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(point);
    },
    onDragStart: point => onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(point),
    onDragEnd: point => onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(point),
    setFilter: setFilter,
    toggle: flag => setToggle(t => flag !== null && flag !== void 0 ? flag : !t),
    toggled: toggled,
    title: title,
    drag: drag,
    filterEnabled: filterEnabled,
    from: position
  }), shouldShow && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.Y.Provider, {
    value: store
  }, react__WEBPACK_IMPORTED_MODULE_4__.createElement(TreeWrapper, {
    isRoot: true,
    fill: _fill,
    flat: _flat,
    tree: tree,
    toggled: toggled
  }))));
});

const _excluded$1 = ["isRoot"];
let rootInitialized = false;
let rootEl = null;
function Leva(_ref) {
  let {
      isRoot = false
    } = _ref,
    props = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded$1);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    rootInitialized = true;
    if (!isRoot && rootEl) {
      rootEl.remove();
      rootEl = null;
    }
    return () => {
      if (!isRoot) rootInitialized = false;
    };
  }, [isRoot]);
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(LevaRoot, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    store: levaStore
  }, props));
}

function useRenderRoot(isGlobalPanel) {
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isGlobalPanel && !rootInitialized) {
      if (!rootEl) {
        rootEl = document.getElementById('leva__root') || Object.assign(document.createElement('div'), {
          id: 'leva__root'
        });
        if (document.body) {
          document.body.appendChild(rootEl);
          (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a0)(react__WEBPACK_IMPORTED_MODULE_4__.createElement(Leva, {
            isRoot: true
          }), rootEl);
        }
      }
      rootInitialized = true;
    }
  }, [isGlobalPanel]);
}

const _excluded = ["store"];
function LevaPanel(_ref) {
  let {
      store
    } = _ref,
    props = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.i)(_ref, _excluded);
  const parentStore = (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.E)();
  const _store = store === undefined ? parentStore : store;
  return react__WEBPACK_IMPORTED_MODULE_4__.createElement(LevaRoot, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.f)({
    store: _store
  }, props));
}

function parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  let schema;
  let folderName = undefined;
  let folderSettings;
  let hookSettings;
  let deps;
  if (typeof schemaOrFolderName === 'string') {
    folderName = schemaOrFolderName;
    schema = settingsOrDepsOrSchema;
    if (Array.isArray(depsOrSettingsOrFolderSettings)) {
      deps = depsOrSettingsOrFolderSettings;
    } else {
      if (depsOrSettingsOrFolderSettings) {
        if ('store' in depsOrSettingsOrFolderSettings) {
          hookSettings = depsOrSettingsOrFolderSettings;
          deps = depsOrSettings;
        } else {
          folderSettings = depsOrSettingsOrFolderSettings;
          if (Array.isArray(depsOrSettings)) {
            deps = depsOrSettings;
          } else {
            hookSettings = depsOrSettings;
            deps = depsOrUndefined;
          }
        }
      }
    }
  } else {
    schema = schemaOrFolderName;
    if (Array.isArray(settingsOrDepsOrSchema)) {
      deps = settingsOrDepsOrSchema;
    } else {
      hookSettings = settingsOrDepsOrSchema;
      deps = depsOrSettingsOrFolderSettings;
    }
  }
  return {
    schema,
    folderName,
    folderSettings,
    hookSettings,
    deps: deps || []
  };
}

function useControls(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined) {
  const {
    folderName,
    schema,
    folderSettings,
    hookSettings,
    deps
  } = parseArgs(schemaOrFolderName, settingsOrDepsOrSchema, depsOrSettingsOrFolderSettings, depsOrSettings, depsOrUndefined);
  const schemaIsFunction = typeof schema === 'function';

  const depsChanged = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
  const firstRender = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(true);

  const _schema = useDeepMemo(() => {
    depsChanged.current = true;
    const s = typeof schema === 'function' ? schema() : schema;
    return folderName ? {
      [folderName]: folder(s, folderSettings)
    } : s;
  }, deps);

  const isGlobalPanel = !(hookSettings !== null && hookSettings !== void 0 && hookSettings.store);
  useRenderRoot(isGlobalPanel);
  const [store] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(() => (hookSettings === null || hookSettings === void 0 ? void 0 : hookSettings.store) || levaStore);

  const [initialData, mappedPaths] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => store.getDataFromSchema(_schema), [store, _schema]);
  const [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    const allPaths = [];
    const renderPaths = [];
    const onChangePaths = {};
    const onEditStartPaths = {};
    const onEditEndPaths = {};
    Object.values(mappedPaths).forEach(({
      path,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    }) => {
      allPaths.push(path);
      if (!!onChange) {
        onChangePaths[path] = onChange;
        if (!transient) {
          renderPaths.push(path);
        }
      } else {
        renderPaths.push(path);
      }
      if (onEditStart) {
        onEditStartPaths[path] = onEditStart;
      }
      if (onEditEnd) {
        onEditEndPaths[path] = onEditEnd;
      }
    });
    return [allPaths, renderPaths, onChangePaths, onEditStartPaths, onEditEndPaths];
  }, [mappedPaths]);

  const paths = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => store.orderPaths(allPaths), [allPaths, store]);

  const values = useValuesForPath(store, renderPaths, initialData);
  const set = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(values => {
    const _values = Object.entries(values).reduce((acc, [p, v]) => Object.assign(acc, {
      [mappedPaths[p].path]: v
    }), {});
    store.set(_values, false);
  }, [store, mappedPaths]);
  const get = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(path => store.get(mappedPaths[path].path), [store, mappedPaths]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {

    const shouldOverrideSettings = !firstRender.current && depsChanged.current;
    store.addData(initialData, shouldOverrideSettings);
    firstRender.current = false;
    depsChanged.current = false;
    return () => store.disposePaths(paths);
  }, [store, paths, initialData]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onChangePaths).forEach(([path, onChange]) => {
      onChange(store.get(path), path, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        initial: true,
        get: store.get
      }, store.getInput(path)));
      const unsub = store.useStore.subscribe(s => {
        const input = s.data[path];
        const value = input.disabled ? undefined : input.value;
        return [value, input];
      }, ([value, input]) => onChange(value, path, (0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        initial: false,
        get: store.get
      }, input)), {
        equalityFn: zustand_shallow__WEBPACK_IMPORTED_MODULE_6__["default"]
      });
      unsubscriptions.push(unsub);
    });
    return () => unsubscriptions.forEach(unsub => unsub());
  }, [store, onChangePaths]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const unsubscriptions = [];
    Object.entries(onEditStartPaths).forEach(([path, onEditStart]) => unsubscriptions.push(store.subscribeToEditStart(path, onEditStart)));
    Object.entries(onEditEndPaths).forEach(([path, onEditEnd]) => unsubscriptions.push(store.subscribeToEditEnd(path, onEditEnd)));
    return () => unsubscriptions.forEach(unsub => unsub());
  }, [onEditStartPaths, onEditEndPaths, store]);
  if (schemaIsFunction) return [values, set, get];
  return values;
}

(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.SELECT, _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a3);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.IMAGE, image);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.NUMBER, _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a4);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.COLOR, color);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.STRING, _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a5);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.BOOLEAN, _vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a6);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.INTERVAL, interval);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.VECTOR3D, vector3d);
(0,_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a1)(_vector_plugin_6f82aee9_esm_js__WEBPACK_IMPORTED_MODULE_0__.a2.VECTOR2D, vector2d);




/***/ }),

/***/ "./node_modules/.pnpm/leva@0.9.34_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/leva/dist/vector-plugin-6f82aee9.esm.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/leva@0.9.34_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/leva/dist/vector-plugin-6f82aee9.esm.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ThemeContext),
/* harmony export */   A: () => (/* binding */ useInputSetters),
/* harmony export */   B: () => (/* binding */ Plugins),
/* harmony export */   C: () => (/* binding */ InputContext),
/* harmony export */   D: () => (/* binding */ StyledInputWrapper$1),
/* harmony export */   E: () => (/* binding */ useStoreContext),
/* harmony export */   F: () => (/* binding */ useCanvas2d),
/* harmony export */   G: () => (/* binding */ useInput),
/* harmony export */   H: () => (/* binding */ log),
/* harmony export */   I: () => (/* binding */ Indicator),
/* harmony export */   J: () => (/* binding */ StyledTitle),
/* harmony export */   K: () => (/* binding */ Chevron),
/* harmony export */   L: () => (/* binding */ Label),
/* harmony export */   M: () => (/* binding */ StyledWrapper),
/* harmony export */   N: () => (/* binding */ StyledContent),
/* harmony export */   O: () => (/* binding */ Overlay),
/* harmony export */   P: () => (/* binding */ Portal),
/* harmony export */   Q: () => (/* binding */ StyledFolder),
/* harmony export */   R: () => (/* binding */ Row),
/* harmony export */   S: () => (/* binding */ Scrubber),
/* harmony export */   T: () => (/* binding */ StyledInputRow),
/* harmony export */   U: () => (/* binding */ debounce),
/* harmony export */   V: () => (/* binding */ ValueInput),
/* harmony export */   W: () => (/* binding */ globalStyles),
/* harmony export */   X: () => (/* binding */ PanelSettingsContext),
/* harmony export */   Y: () => (/* binding */ StoreContext),
/* harmony export */   Z: () => (/* binding */ mergeTheme),
/* harmony export */   _: () => (/* binding */ _objectSpread2),
/* harmony export */   a: () => (/* binding */ Vector),
/* harmony export */   a0: () => (/* binding */ render),
/* harmony export */   a1: () => (/* binding */ register),
/* harmony export */   a2: () => (/* binding */ LevaInputs),
/* harmony export */   a3: () => (/* binding */ select),
/* harmony export */   a4: () => (/* binding */ number),
/* harmony export */   a5: () => (/* binding */ string),
/* harmony export */   a6: () => (/* binding */ boolean),
/* harmony export */   a7: () => (/* binding */ LevaStoreProvider),
/* harmony export */   a8: () => (/* binding */ String$1),
/* harmony export */   a9: () => (/* binding */ Number$1),
/* harmony export */   aa: () => (/* binding */ Boolean),
/* harmony export */   ab: () => (/* binding */ Select),
/* harmony export */   ac: () => (/* binding */ InnerLabel),
/* harmony export */   ad: () => (/* binding */ pad),
/* harmony export */   ae: () => (/* binding */ evaluate),
/* harmony export */   af: () => (/* binding */ mergeRefs),
/* harmony export */   ag: () => (/* binding */ createPlugin),
/* harmony export */   ah: () => (/* binding */ keyframes),
/* harmony export */   ai: () => (/* binding */ getVectorSchema),
/* harmony export */   aj: () => (/* binding */ getVectorType),
/* harmony export */   ak: () => (/* binding */ sanitizeVector),
/* harmony export */   al: () => (/* binding */ formatVector),
/* harmony export */   am: () => (/* binding */ normalizeVector),
/* harmony export */   b: () => (/* binding */ useTransform),
/* harmony export */   c: () => (/* binding */ createInternalPlugin),
/* harmony export */   d: () => (/* binding */ useTh),
/* harmony export */   e: () => (/* binding */ useDrag),
/* harmony export */   f: () => (/* binding */ _extends),
/* harmony export */   g: () => (/* binding */ getVectorPlugin),
/* harmony export */   h: () => (/* binding */ clamp),
/* harmony export */   i: () => (/* binding */ _objectWithoutProperties),
/* harmony export */   j: () => (/* binding */ invertedRange),
/* harmony export */   k: () => (/* binding */ sanitizeStep),
/* harmony export */   l: () => (/* binding */ RangeWrapper),
/* harmony export */   m: () => (/* binding */ multiplyStep),
/* harmony export */   n: () => (/* binding */ normalizeKeyedNumberSettings),
/* harmony export */   o: () => (/* binding */ omit),
/* harmony export */   p: () => (/* binding */ pick),
/* harmony export */   q: () => (/* binding */ Range),
/* harmony export */   r: () => (/* binding */ range),
/* harmony export */   s: () => (/* binding */ styled),
/* harmony export */   t: () => (/* binding */ getUid),
/* harmony export */   u: () => (/* binding */ useInputContext),
/* harmony export */   v: () => (/* binding */ SpecialInputs),
/* harmony export */   w: () => (/* binding */ warn),
/* harmony export */   x: () => (/* binding */ LevaErrors),
/* harmony export */   y: () => (/* binding */ updateInput),
/* harmony export */   z: () => (/* binding */ normalizeInput)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/react-dom@16.14.0_react@16.14.0/node_modules/react-dom/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@16.14.0/node_modules/react/index.js");
/* harmony import */ var _radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/react-portal */ "./node_modules/.pnpm/@radix-ui+react-portal@0.1.4_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/@radix-ui/react-portal/dist/index.module.js");
/* harmony import */ var dequal_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dequal/lite */ "./node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs");
/* harmony import */ var zustand_shallow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! zustand/shallow */ "./node_modules/.pnpm/zustand@3.7.2_react@16.14.0/node_modules/zustand/esm/shallow.js");
/* harmony import */ var v8n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v8n */ "./node_modules/.pnpm/v8n@1.5.1/node_modules/v8n/dist/v8n.esm.js");
/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stitches/react */ "./node_modules/.pnpm/@stitches+react@1.2.8_react@16.14.0/node_modules/@stitches/react/dist/index.mjs");
/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @use-gesture/react */ "./node_modules/.pnpm/@use-gesture+react@10.2.27_react@16.14.0/node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");
/* harmony import */ var _radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/react-tooltip */ "./node_modules/.pnpm/@radix-ui+react-tooltip@0.1.6_wcqkhtmu7mswc6yz4uyexck3ty/node_modules/@radix-ui/react-tooltip/dist/index.module.js");











function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

let LevaErrors;
(function (LevaErrors) {
  LevaErrors[LevaErrors["UNSUPPORTED_INPUT"] = 0] = "UNSUPPORTED_INPUT";
  LevaErrors[LevaErrors["NO_COMPONENT_FOR_TYPE"] = 1] = "NO_COMPONENT_FOR_TYPE";
  LevaErrors[LevaErrors["UNKNOWN_INPUT"] = 2] = "UNKNOWN_INPUT";
  LevaErrors[LevaErrors["DUPLICATE_KEYS"] = 3] = "DUPLICATE_KEYS";
  LevaErrors[LevaErrors["ALREADY_REGISTERED_TYPE"] = 4] = "ALREADY_REGISTERED_TYPE";
  LevaErrors[LevaErrors["CLIPBOARD_ERROR"] = 5] = "CLIPBOARD_ERROR";
  LevaErrors[LevaErrors["THEME_ERROR"] = 6] = "THEME_ERROR";
  LevaErrors[LevaErrors["PATH_DOESNT_EXIST"] = 7] = "PATH_DOESNT_EXIST";
  LevaErrors[LevaErrors["INPUT_TYPE_OVERRIDE"] = 8] = "INPUT_TYPE_OVERRIDE";
  LevaErrors[LevaErrors["EMPTY_KEY"] = 9] = "EMPTY_KEY";
})(LevaErrors || (LevaErrors = {}));
const ErrorList = {
  [LevaErrors.UNSUPPORTED_INPUT]: (type, path) => [`An input with type \`${type}\` input was found at path \`${path}\` but it's not supported yet.`],
  [LevaErrors.NO_COMPONENT_FOR_TYPE]: (type, path) => [`Type \`${type}\` found at path \`${path}\` can't be displayed in panel because no component supports it yet.`],
  [LevaErrors.UNKNOWN_INPUT]: (path, value) => [`input at path \`${path}\` is not recognized.`, value],
  [LevaErrors.DUPLICATE_KEYS]: (key, path, prevPath) => [`Key \`${key}\` of path \`${path}\` already exists at path \`${prevPath}\`. Even nested keys need to be unique. Rename one of the keys.`],
  [LevaErrors.ALREADY_REGISTERED_TYPE]: type => [`Type ${type} has already been registered. You can't register a component with the same type.`],
  [LevaErrors.CLIPBOARD_ERROR]: value => [`Error copying the value`, value],
  [LevaErrors.THEME_ERROR]: (category, key) => [`Error accessing the theme \`${category}.${key}\` value.`],
  [LevaErrors.PATH_DOESNT_EXIST]: path => [`Error getting the value at path \`${path}\`. There is probably an error in your \`render\` function.`],
  [LevaErrors.PATH_DOESNT_EXIST]: path => [`Error accessing the value at path \`${path}\``],
  [LevaErrors.INPUT_TYPE_OVERRIDE]: (path, type, wrongType) => [`Input at path \`${path}\` already exists with type: \`${type}\`. Its type cannot be overridden with type \`${wrongType}\`.`],
  [LevaErrors.EMPTY_KEY]: () => ['Keys can not be empty, if you want to hide a label use whitespace.']
};
function _log(fn, errorType, ...args) {
  const [message, ...rest] = ErrorList[errorType](...args);
  console[fn]('LEVA: ' + message, ...rest);
}

const warn = _log.bind(null, 'warn');
const log = _log.bind(null, 'log');

const _excluded$a = ["value"],
  _excluded2$4 = ["schema"],
  _excluded3$1 = ["value"];
const Schemas = [];
const Plugins = {};
function getValueType(_ref) {
  let {
      value
    } = _ref,
    settings = _objectWithoutProperties(_ref, _excluded$a);
  for (let checker of Schemas) {
    const type = checker(value, settings);
    if (type) return type;
  }
  return undefined;
}

function register(type, _ref2) {
  let {
      schema
    } = _ref2,
    plugin = _objectWithoutProperties(_ref2, _excluded2$4);
  if (type in Plugins) {
    warn(LevaErrors.ALREADY_REGISTERED_TYPE, type);
    return;
  }
  Schemas.push((value, settings) => schema(value, settings) && type);
  Plugins[type] = plugin;
}
const getUniqueType = () => '__CUSTOM__PLUGIN__' + Math.random().toString(36).substr(2, 9);

function createInternalPlugin(plugin) {
  return plugin;
}
function createPlugin(plugin) {
  const type = getUniqueType();
  Plugins[type] = plugin;
  return input => {
    return {
      type,
      __customInput: input
    };
  };
}
function normalize$3(type, input, path, data) {
  const {
    normalize: _normalize
  } = Plugins[type];
  if (_normalize) return _normalize(input, path, data);
  if (typeof input !== 'object' || !('value' in input)) return {
    value: input
  };
  const {
      value
    } = input,
    settings = _objectWithoutProperties(input, _excluded3$1);
  return {
    value,
    settings
  };
}
function sanitize$4(type, value, settings, prevValue, path, store) {
  const {
    sanitize
  } = Plugins[type];
  if (sanitize) return sanitize(value, settings, prevValue, path, store);
  return value;
}
function format$2(type, value, settings) {
  const {
    format
  } = Plugins[type];
  if (format) return format(value, settings);
  return value;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

const clamp = (x, min, max) => x > max ? max : x < min ? min : x;
const pad = (x, pad) => String(x).padStart(pad, '0');
const parseNumber = v => {
  if (v === '' || typeof v === 'number') return v;
  try {
    const _v = evaluate(v);
    if (!isNaN(_v)) return _v;
  } catch (_unused) {}
  return parseFloat(v);
};
const log10 = Math.log(10);
function getStep(number) {
  let n = Math.abs(+String(number).replace('.', ''));
  if (n === 0) return 0.01;
  while (n !== 0 && n % 10 === 0) n /= 10;
  const significantDigits = Math.floor(Math.log(n) / log10) + 1;
  const numberLog = Math.floor(Math.log10(Math.abs(number)));
  const step = Math.pow(10, numberLog - significantDigits);
  return Math.max(step, 0.001);
}
const range = (v, min, max) => {
  if (max === min) return 0;
  const _v = clamp(v, min, max);
  return (_v - min) / (max - min);
};
const invertedRange = (p, min, max) => p * (max - min) + min;

const getUid = () => '_' + Math.random().toString(36).substr(2, 9);
const parens = /\(([0-9+\-*/^ .]+)\)/;
const exp = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/;
const mul = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/;
const div = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/;
const add = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/;
const sub = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;

function evaluate(expr) {
  if (isNaN(Number(expr))) {
    if (parens.test(expr)) {
      const newExpr = expr.replace(parens, (match, subExpr) => String(evaluate(subExpr)));
      return evaluate(newExpr);
    } else if (exp.test(expr)) {
      const newExpr = expr.replace(exp, (match, base, pow) => String(Math.pow(Number(base), Number(pow))));
      return evaluate(newExpr);
    } else if (mul.test(expr)) {
      const newExpr = expr.replace(mul, (match, a, b) => String(Number(a) * Number(b)));
      return evaluate(newExpr);
    } else if (div.test(expr)) {
      const newExpr = expr.replace(div, (match, a, b) => {
        if (b != 0) return String(Number(a) / Number(b));else throw new Error('Division by zero');
      });
      return evaluate(newExpr);
    } else if (add.test(expr)) {
      const newExpr = expr.replace(add, (match, a, b) => String(Number(a) + Number(b)));
      return evaluate(newExpr);
    } else if (sub.test(expr)) {
      const newExpr = expr.replace(sub, (match, a, b) => String(Number(a) - Number(b)));
      return evaluate(newExpr);
    } else {
      return Number(expr);
    }
  }
  return Number(expr);
}

function pick(object, keys) {
  return keys.reduce((obj, key) => {
    if (!!object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
}
function omit(object, keys) {
  const obj = _objectSpread2({}, object);
  keys.forEach(k => k in object && delete obj[k]);
  return obj;
}
function mapArrayToKeys(value, keys) {
  return value.reduce((acc, v, i) => Object.assign(acc, {
    [keys[i]]: v
  }), {});
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]';
}
const isEmptyObject = obj => isObject(obj) && Object.keys(obj).length === 0;

let SpecialInputs;
(function (SpecialInputs) {
  SpecialInputs["BUTTON"] = "BUTTON";
  SpecialInputs["BUTTON_GROUP"] = "BUTTON_GROUP";
  SpecialInputs["MONITOR"] = "MONITOR";
  SpecialInputs["FOLDER"] = "FOLDER";
})(SpecialInputs || (SpecialInputs = {}));
let LevaInputs;
(function (LevaInputs) {
  LevaInputs["SELECT"] = "SELECT";
  LevaInputs["IMAGE"] = "IMAGE";
  LevaInputs["NUMBER"] = "NUMBER";
  LevaInputs["COLOR"] = "COLOR";
  LevaInputs["STRING"] = "STRING";
  LevaInputs["BOOLEAN"] = "BOOLEAN";
  LevaInputs["INTERVAL"] = "INTERVAL";
  LevaInputs["VECTOR3D"] = "VECTOR3D";
  LevaInputs["VECTOR2D"] = "VECTOR2D";
})(LevaInputs || (LevaInputs = {}));

const _excluded$9 = ["type", "__customInput"],
  _excluded2$3 = ["render", "label", "optional", "order", "disabled", "hint", "onChange", "onEditStart", "onEditEnd", "transient"],
  _excluded3 = ["type"];
function parseOptions(_input, key, mergedOptions = {}, customType) {
  var _commonOptions$option, _commonOptions$disabl;
  if (typeof _input !== 'object' || Array.isArray(_input)) {
    return {
      type: customType,
      input: _input,
      options: _objectSpread2({
        key,
        label: key,
        optional: false,
        disabled: false,
        order: 0
      }, mergedOptions)
    };
  }

  if ('__customInput' in _input) {
    const {
        type: _type,
        __customInput
      } = _input,
      options = _objectWithoutProperties(_input, _excluded$9);
    return parseOptions(__customInput, key, options, _type);
  }

  const {
      render,
      label,
      optional,
      order = 0,
      disabled,
      hint,
      onChange,
      onEditStart,
      onEditEnd,
      transient
    } = _input,
    inputWithType = _objectWithoutProperties(_input, _excluded2$3);
  const commonOptions = _objectSpread2({
    render,
    key,
    label: label !== null && label !== void 0 ? label : key,
    hint,
    transient: transient !== null && transient !== void 0 ? transient : !!onChange,
    onEditStart,
    onEditEnd,
    disabled,
    optional,
    order
  }, mergedOptions);
  let {
      type
    } = inputWithType,
    input = _objectWithoutProperties(inputWithType, _excluded3);
  type = customType !== null && customType !== void 0 ? customType : type;
  if (type in SpecialInputs) {
    return {
      type,
      input,
      options: commonOptions
    };
  }

  let computedInput;
  if (customType && isObject(input) && 'value' in input) computedInput = input.value;else computedInput = isEmptyObject(input) ? undefined : input;
  return {
    type,
    input: computedInput,
    options: _objectSpread2(_objectSpread2({}, commonOptions), {}, {
      onChange,
      optional: (_commonOptions$option = commonOptions.optional) !== null && _commonOptions$option !== void 0 ? _commonOptions$option : false,
      disabled: (_commonOptions$disabl = commonOptions.disabled) !== null && _commonOptions$disabl !== void 0 ? _commonOptions$disabl : false
    })
  };
}

function normalizeInput(_input, key, path, data) {
  const parsedInputAndOptions = parseOptions(_input, key);
  const {
    type,
    input: parsedInput,
    options
  } = parsedInputAndOptions;
  if (type) {
    if (type in SpecialInputs)
      return parsedInputAndOptions;

    return {
      type,
      input: normalize$3(type, parsedInput, path, data),
      options
    };
  }
  let inputType = getValueType(parsedInput);
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, parsedInput, path, data),
    options
  };
  inputType = getValueType({
    value: parsedInput
  });
  if (inputType) return {
    type: inputType,
    input: normalize$3(inputType, {
      value: parsedInput
    }, path, data),
    options
  };

  return false;
}
function updateInput(input, newValue, path, store, fromPanel) {
  const {
    value,
    type,
    settings
  } = input;
  input.value = sanitizeValue({
    type,
    value,
    settings
  }, newValue, path, store);
  input.fromPanel = fromPanel;
}
const ValueError = function ValueError(message, value, error) {
  this.type = 'LEVA_ERROR';
  this.message = 'LEVA: ' + message;
  this.previousValue = value;
  this.error = error;
};
function sanitizeValue({
  type,
  value,
  settings
}, newValue, path, store) {
  const _newValue = type !== 'SELECT' && typeof newValue === 'function' ? newValue(value) : newValue;
  let sanitizedNewValue;
  try {
    sanitizedNewValue = sanitize$4(type, _newValue, settings, value, path, store);
  } catch (e) {
    throw new ValueError(`The value \`${newValue}\` did not result in a correct value.`, value, e);
  }
  if ((0,dequal_lite__WEBPACK_IMPORTED_MODULE_2__.dequal)(sanitizedNewValue, value)) {

    return value;

  }

  return sanitizedNewValue;
}

const debounce = (callback, wait, immediate = false) => {
  let timeout = 0;
  return function () {
    const args = arguments;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);
    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);
    if (callNow) next();
  };
};

const multiplyStep = event => event.shiftKey ? 5 : event.altKey ? 1 / 5 : 1;

function render(element, container) {
  const error = console.error;
  console.error = () => {};
  react_dom__WEBPACK_IMPORTED_MODULE_0__.render(element, container);
  console.error = error;
}

function mergeRefs(refs) {
  return value => {
    refs.forEach(ref => {
      if (typeof ref === 'function') ref(value);else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

const _excluded$8 = ["value"],
  _excluded2$2 = ["min", "max"];
const schema$3 = v => {
  if (typeof v === 'number') return true;
  if (typeof v === 'string') {
    const _v = parseFloat(v);
    if (isNaN(_v)) return false;
    const suffix = v.substring(('' + _v).length).trim();
    return suffix.length < 4;
  }
  return false;
};
const sanitize$3 = (v, {
  min: _min = -Infinity,
  max: _max = Infinity,
  suffix
}) => {
  const _v = parseFloat(v);
  if (v === '' || isNaN(_v)) throw Error('Invalid number');
  const f = clamp(_v, _min, _max);
  return suffix ? f + suffix : f;
};
const format$1 = (v, {
  pad: _pad = 0,
  suffix
}) => {
  const f = parseFloat(v).toFixed(_pad);
  return suffix ? f + suffix : f;
};
const normalize$2 = _ref => {
  let {
      value
    } = _ref,
    settings = _objectWithoutProperties(_ref, _excluded$8);
  const {
      min = -Infinity,
      max = Infinity
    } = settings,
    _settings = _objectWithoutProperties(settings, _excluded2$2);
  let _value = parseFloat(value);
  const suffix = typeof value === 'string' ? value.substring(('' + _value).length) : undefined;
  _value = clamp(_value, min, max);

  let step = settings.step;
  if (!step) {
    if (Number.isFinite(min)) {
      if (Number.isFinite(max)) step = +(Math.abs(max - min) / 100).toPrecision(1);else step = +(Math.abs(_value - min) / 100).toPrecision(1);
    } else if (Number.isFinite(max)) step = +(Math.abs(max - _value) / 100).toPrecision(1);
  }
  const padStep = step ? getStep(step) * 10 : getStep(_value);
  step = step || padStep / 10;
  const pad = Math.round(clamp(Math.log10(1 / padStep), 0, 2));
  return {
    value: suffix ? _value + suffix : _value,
    settings: _objectSpread2({
      initialValue: _value,
      step,
      pad,
      min,
      max,
      suffix
    }, _settings)
  };
};

const sanitizeStep$1 = (v, {
  step,
  initialValue
}) => {
  const steps = Math.round((v - initialValue) / step);
  return initialValue + steps * step;
};

var props$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$3,
  sanitize: sanitize$3,
  format: format$1,
  normalize: normalize$2,
  sanitizeStep: sanitizeStep$1
});

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

const InputContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function useInputContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(InputContext);
}
const ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const StoreContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const PanelSettingsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function useStoreContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StoreContext);
}
function usePanelSettingsContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PanelSettingsContext);
}
function LevaStoreProvider({
  children,
  store
}) {
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(StoreContext.Provider, {
    value: store
  }, children);
}

const getDefaultTheme = () => ({
  colors: {
    elevation1: '#292d39',
    elevation2: '#181c20',
    elevation3: '#373c4b',
    accent1: '#0066dc',
    accent2: '#007bff',
    accent3: '#3c93ff',
    highlight1: '#535760',
    highlight2: '#8c92a4',
    highlight3: '#fefefe',
    vivid1: '#ffcc00',
    folderWidgetColor: '$highlight2',
    folderTextColor: '$highlight3',
    toolTipBackground: '$highlight3',
    toolTipText: '$elevation2'
  },
  radii: {
    xs: '2px',
    sm: '3px',
    lg: '10px'
  },
  space: {
    xs: '3px',
    sm: '6px',
    md: '10px',
    rowGap: '7px',
    colGap: '7px'
  },
  fonts: {
    mono: `ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace`,
    sans: `system-ui, sans-serif`
  },
  fontSizes: {
    root: '11px',
    toolTip: '$root'
  },
  sizes: {
    rootWidth: '280px',
    controlWidth: '160px',
    numberInputMinWidth: '38px',
    scrubberWidth: '8px',
    scrubberHeight: '16px',
    rowHeight: '24px',
    folderTitleHeight: '20px',
    checkboxSize: '16px',
    joystickWidth: '100px',
    joystickHeight: '100px',
    colorPickerWidth: '$controlWidth',
    colorPickerHeight: '100px',
    imagePreviewWidth: '$controlWidth',
    imagePreviewHeight: '100px',
    monitorHeight: '60px',
    titleBarHeight: '39px'
  },
  shadows: {
    level1: '0 0 9px 0 #00000088',
    level2: '0 4px 14px #00000033'
  },
  borderWidths: {
    root: '0px',
    input: '1px',
    focus: '1px',
    hover: '1px',
    active: '1px',
    folder: '1px'
  },
  fontWeights: {
    label: 'normal',
    folder: 'normal',
    button: 'normal'
  }
});
function createStateClass(value, options) {
  const [borderColor, bgColor] = value.split(' ');
  const css = {};
  if (borderColor !== 'none') {
    css.boxShadow = `${options.inset ? 'inset ' : ''}0 0 0 $borderWidths${[options.key]} $colors${borderColor !== 'default' && borderColor || options.borderColor}`;
  }
  if (bgColor) {
    css.backgroundColor = bgColor;
  }
  return css;
}
const utils = {
  $inputStyle: () => value => createStateClass(value, {
    key: '$input',
    borderColor: '$highlight1',
    inset: true
  }),
  $focusStyle: () => value => createStateClass(value, {
    key: '$focus',
    borderColor: '$accent2'
  }),
  $hoverStyle: () => value => createStateClass(value, {
    key: '$hover',
    borderColor: '$accent1',
    inset: true
  }),
  $activeStyle: () => value => createStateClass(value, {
    key: '$active',
    borderColor: '$accent1',
    inset: true
  })
};
const {
  styled,
  css,
  createTheme,
  globalCss,
  keyframes
} = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_4__.createStitches)({
  prefix: 'leva',
  theme: getDefaultTheme(),
  utils: _objectSpread2(_objectSpread2({}, utils), {}, {
    $flex: () => ({
      display: 'flex',
      alignItems: 'center'
    }),
    $flexCenter: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }),
    $reset: () => ({
      outline: 'none',
      fontSize: 'inherit',
      fontWeight: 'inherit',
      color: 'inherit',
      fontFamily: 'inherit',
      border: 'none',
      backgroundColor: 'transparent',
      appearance: 'none'
    }),
    $draggable: () => ({
      touchAction: 'none',
      WebkitUserDrag: 'none',
      userSelect: 'none'
    }),
    $focus: value => ({
      '&:focus': utils.$focusStyle()(value)
    }),
    $focusWithin: value => ({
      '&:focus-within': utils.$focusStyle()(value)
    }),
    $hover: value => ({
      '&:hover': utils.$hoverStyle()(value)
    }),
    $active: value => ({
      '&:active': utils.$activeStyle()(value)
    })
  })
});
const globalStyles = globalCss({
  '.leva__panel__dragged': {
    WebkitUserDrag: 'none',
    userSelect: 'none',
    input: {
      userSelect: 'none'
    },
    '*': {
      cursor: 'ew-resize !important'
    }
  }
});

function mergeTheme(newTheme) {
  const defaultTheme = getDefaultTheme();
  if (!newTheme) return {
    theme: defaultTheme,
    className: ''
  };
  Object.keys(newTheme).forEach(key => {
    Object.assign(defaultTheme[key], newTheme[key]);
  });
  const customTheme = createTheme(defaultTheme);
  return {
    theme: defaultTheme,
    className: customTheme.className
  };
}
function useTh(category, key) {
  const {
    theme
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
  if (!(category in theme) || !(key in theme[category])) {
    warn(LevaErrors.THEME_ERROR, category, key);
    return '';
  }
  let _key = key;
  while (true) {
    let value = theme[category][_key];
    if (typeof value === 'string' && value.charAt(0) === '$') _key = value.substr(1);else return value;
  }
}

const StyledInput = styled('input', {
  $reset: '',
  padding: '0 $sm',
  width: 0,
  minWidth: 0,
  flex: 1,
  height: '100%',
  variants: {
    levaType: {
      number: {
        textAlign: 'right'
      }
    },
    as: {
      textarea: {
        padding: '$sm'
      }
    }
  }
});
const InnerLabel = styled('div', {
  $draggable: '',
  height: '100%',
  $flexCenter: '',
  position: 'relative',
  padding: '0 $xs',
  fontSize: '0.8em',
  opacity: 0.8,
  cursor: 'default',
  touchAction: 'none',
  [`& + ${StyledInput}`]: {
    paddingLeft: 0
  }
});
const InnerNumberLabel = styled(InnerLabel, {
  cursor: 'ew-resize',
  marginRight: '-$xs',
  textTransform: 'uppercase',
  opacity: 0.3,
  '&:hover': {
    opacity: 1
  },
  variants: {
    dragging: {
      true: {
        backgroundColor: '$accent2',
        opacity: 1
      }
    }
  }
});
const InputContainer = styled('div', {
  $flex: '',
  position: 'relative',
  borderRadius: '$sm',
  overflow: 'hidden',
  color: 'inherit',
  height: '$rowHeight',
  backgroundColor: '$elevation3',
  $inputStyle: '$elevation1',
  $hover: '',
  $focusWithin: '',
  variants: {
    textArea: {
      true: {
        height: 'auto'
      }
    }
  }
});

const _excluded$7 = ["innerLabel", "value", "onUpdate", "onChange", "onKeyDown", "type", "id", "inputType", "rows"],
  _excluded2$1 = ["onUpdate"];
function ValueInput(_ref) {
  let {
      innerLabel,
      value,
      onUpdate,
      onChange,
      onKeyDown,
      type,
      id,
      inputType = 'text',
      rows = 0
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$7);
  const {
    id: _id,
    emitOnEditStart,
    emitOnEditEnd,
    disabled
  } = useInputContext();
  const inputId = id || _id;
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const isTextArea = rows > 0;
  const asType = isTextArea ? 'textarea' : 'input';
  const update = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(fn => event => {
    const _value = event.currentTarget.value;
    fn(_value);
  }, []);

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    const ref = inputRef.current;
    const _onUpdate = update(value => {
      onUpdate(value);
      emitOnEditEnd();
    });
    ref === null || ref === void 0 ? void 0 : ref.addEventListener('blur', _onUpdate);
    return () => ref === null || ref === void 0 ? void 0 : ref.removeEventListener('blur', _onUpdate);
  }, [update, onUpdate, emitOnEditEnd]);
  const onKeyPress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    if (event.key === 'Enter') {
      update(onUpdate)(event);
    }
  }, [update, onUpdate]);

  const inputProps = Object.assign({
    as: asType
  }, isTextArea ? {
    rows
  } : {}, props);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(InputContainer, {
    textArea: isTextArea
  }, innerLabel && typeof innerLabel === 'string' ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(InnerLabel, null, innerLabel) : innerLabel, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledInput, _extends({
    levaType: type
    ,
    ref: inputRef,
    id: inputId,
    type: inputType,
    autoComplete: "off",
    spellCheck: "false",
    value: value,
    onChange: update(onChange),
    onFocus: () => emitOnEditStart(),
    onKeyPress: onKeyPress,
    onKeyDown: onKeyDown,
    disabled: disabled
  }, inputProps)));
}
function NumberInput(_ref2) {
  let {
      onUpdate
    } = _ref2,
    props = _objectWithoutProperties(_ref2, _excluded2$1);
  const _onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(v => onUpdate(parseNumber(v)), [onUpdate]);
  const onKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event => {
    const dir = event.key === 'ArrowUp' ? 1 : event.key === 'ArrowDown' ? -1 : 0;
    if (dir) {
      event.preventDefault();
      const step = event.altKey ? 0.1 : event.shiftKey ? 10 : 1;
      onUpdate(v => parseFloat(v) + dir * step);
    }
  }, [onUpdate]);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ValueInput, _extends({}, props, {
    onUpdate: _onUpdate,
    onKeyDown: onKeyDown,
    type: "number"
  }));
}

const StyledFolder = styled('div', {});
const StyledWrapper = styled('div', {
  position: 'relative',
  background: '$elevation2',
  transition: 'height 300ms ease',
  variants: {
    fill: {
      true: {},
      false: {}
    },
    flat: {
      false: {},
      true: {}
    },
    isRoot: {
      true: {},
      false: {
        paddingLeft: '$md',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          width: '$borderWidths$folder',
          height: '100%',
          backgroundColor: '$folderWidgetColor',
          opacity: 0.4,
          transform: 'translateX(-50%)'
        }
      }
    }
  },
  compoundVariants: [{
    isRoot: true,
    fill: false,
    css: {
      overflowY: 'auto',
      maxHeight: 'calc(100vh - 20px - $$titleBarHeight)'
    }
  }, {
    isRoot: true,
    flat: false,
    css: {
      borderRadius: '$lg'
    }
  }]
});
const StyledTitle = styled('div', {
  $flex: '',
  color: '$folderTextColor',
  userSelect: 'none',
  cursor: 'pointer',
  height: '$folderTitleHeight',
  fontWeight: '$folder',
  '> svg': {
    marginLeft: -4,
    marginRight: 4,
    cursor: 'pointer',
    fill: '$folderWidgetColor',
    opacity: 0.6
  },
  '&:hover > svg': {
    fill: '$folderWidgetColor'
  },
  [`&:hover + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & + ${StyledWrapper}::after`]: {
    opacity: 0.6
  },
  [`${StyledFolder}:hover > & > svg`]: {
    opacity: 1
  }
});
const StyledContent = styled('div', {
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '100%',
  rowGap: '$rowGap',
  transition: 'opacity 250ms ease',
  variants: {
    toggled: {
      true: {
        opacity: 1,
        transitionDelay: '250ms'
      },
      false: {
        opacity: 0,
        transitionDelay: '0ms',
        pointerEvents: 'none'
      }
    },
    isRoot: {
      true: {
        '& > div': {
          paddingLeft: '$md',
          paddingRight: '$md'
        },
        '& > div:first-of-type': {
          paddingTop: '$sm'
        },
        '& > div:last-of-type': {
          paddingBottom: '$sm'
        },

        [`> ${StyledFolder}:not(:first-of-type)`]: {
          paddingTop: '$sm',
          marginTop: '$md',
          borderTop: '$borderWidths$folder solid $colors$elevation1'
        }
      }
    }
  }
});

const StyledRow = styled('div', {
  position: 'relative',
  zIndex: 100,
  display: 'grid',
  rowGap: '$rowGap',
  gridTemplateRows: 'minmax($sizes$rowHeight, max-content)',
  alignItems: 'center',
  color: '$highlight2',
  [`${StyledContent} > &`]: {
    '&:first-of-type': {
      marginTop: '$rowGap'
    },
    '&:last-of-type': {
      marginBottom: '$rowGap'
    }
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none'
      },
      false: {
        '&:hover,&:focus-within': {
          color: '$highlight3'
        }
      }
    }
  }
});
const StyledInputRow = styled(StyledRow, {
  gridTemplateColumns: 'auto $sizes$controlWidth',
  columnGap: '$colGap'
});
const CopyLabelContainer = styled('div', {
  $flex: '',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '& > div': {
    marginLeft: '$colGap',
    padding: '0 $xs',
    opacity: 0.4
  },
  '& > div:hover': {
    opacity: 0.8
  },
  '& > div > svg': {
    display: 'none',
    cursor: 'pointer',
    width: 13,
    minWidth: 13,
    height: 13,
    backgroundColor: '$elevation2'
  },
  '&:hover > div > svg': {
    display: 'block'
  },
  variants: {
    align: {
      top: {
        height: '100%',
        alignItems: 'flex-start',
        paddingTop: '$sm'
      }
    }
  }
});
const StyledOptionalToggle = styled('input', {
  $reset: '',
  height: 0,
  width: 0,
  opacity: 0,
  margin: 0,
  '& + label': {
    position: 'relative',
    $flexCenter: '',
    height: '100%',
    userSelect: 'none',
    cursor: 'pointer',
    paddingLeft: 2,
    paddingRight: '$sm',
    pointerEvents: 'auto'
  },
  '& + label:after': {
    content: '""',
    width: 6,
    height: 6,
    backgroundColor: '$elevation3',
    borderRadius: '50%',
    $activeStyle: ''
  },
  '&:focus + label:after': {
    $focusStyle: ''
  },
  '& + label:active:after': {
    backgroundColor: '$accent1',
    $focusStyle: ''
  },
  '&:checked + label:after': {
    backgroundColor: '$accent1'
  }
});
const StyledLabel = styled('label', {
  fontWeight: '$label',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  '& > svg': {
    display: 'block'
  }
});

const StyledInputWrapper$1 = styled('div', {
  opacity: 1,
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: 'none',
        [`& ${StyledLabel}`]: {
          pointerEvents: 'auto'
        }
      }
    }
  }
});
const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 1000,
  userSelect: 'none'
});
const StyledToolTipContent = styled('div', {
  background: '$toolTipBackground',
  fontFamily: '$sans',
  fontSize: '$toolTip',
  padding: '$xs $sm',
  color: '$toolTipText',
  borderRadius: '$xs',
  boxShadow: '$level2',
  maxWidth: 260
});
const ToolTipArrow = styled(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Arrow, {
  fill: '$toolTipBackground'
});

function Portal({
  children
}) {
  const {
    className
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeContext);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_portal__WEBPACK_IMPORTED_MODULE_6__.Root, {
    className: className
  }, children);
}

const _excluded$6 = ["align"];
function OptionalToggle() {
  const {
    id,
    disable,
    disabled
  } = useInputContext();
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledOptionalToggle, {
    id: id + '__disable',
    type: "checkbox",
    checked: !disabled,
    onChange: () => disable(!disabled)
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: id + '__disable'
  }));
}
function RawLabel(props) {
  const {
    id,
    optional,
    hint
  } = useInputContext();
  const htmlFor = props.htmlFor || (id ? {
    htmlFor: id
  } : null);

  const title = !hint && typeof props.children === 'string' ? {
    title: props.children
  } : null;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, optional && react__WEBPACK_IMPORTED_MODULE_1__.createElement(OptionalToggle, null), hint !== undefined ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Root, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Trigger, {
    asChild: true
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledLabel, _extends({}, htmlFor, props))), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_5__.Content, {
    side: "top",
    sideOffset: 2
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledToolTipContent, null, hint, react__WEBPACK_IMPORTED_MODULE_1__.createElement(ToolTipArrow, null)))) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledLabel, _extends({}, htmlFor, title, props)));
}
function Label(_ref) {
  let {
      align
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$6);
  const {
    value,
    label,
    key,
    disabled
  } = useInputContext();
  const {
    hideCopyButton
  } = usePanelSettingsContext();
  const copyEnabled = !hideCopyButton && key !== undefined;
  const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify({
        [key]: value !== null && value !== void 0 ? value : ''
      }));
      setCopied(true);
    } catch (_unused) {
      warn(LevaErrors.CLIPBOARD_ERROR, {
        [key]: value
      });
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(CopyLabelContainer, {
    align: align,
    onPointerLeave: () => setCopied(false)
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(RawLabel, props), copyEnabled && !disabled && react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    title: `Click to copy ${typeof label === 'string' ? label : key} value`
  }, !copied ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    onClick: handleClick,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
  })) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    fillRule: "evenodd",
    d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
    clipRule: "evenodd"
  }))));
}

const _excluded$5 = ["toggled"];

const Svg = styled('svg', {
  fill: 'currentColor',
  transition: 'transform 350ms ease, fill 250ms ease'
});
function Chevron(_ref) {
  let {
      toggled
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$5);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Svg, _extends({
    width: "9",
    height: "5",
    viewBox: "0 0 9 5",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      transform: `rotate(${toggled ? 0 : -90}deg)`
    }
  }, props), react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z"
  }));
}

const _excluded$4 = ["input"];
function Row(_ref) {
  let {
      input
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$4);
  if (input) return react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledInputRow, props);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledRow, props);
}

function useInputSetters({
  value,
  type,
  settings,
  setValue
}) {
  const [displayValue, setDisplayValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(format$2(type, value, settings));
  const previousValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value);
  const settingsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(settings);
  settingsRef.current = settings;
  const setFormat = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(v => setDisplayValue(format$2(type, v, settingsRef.current)), [type]);
  const onUpdate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(updatedValue => {
    try {
      setValue(updatedValue);
    } catch (error) {
      const {
        type,
        previousValue
      } = error;
      if (type !== 'LEVA_ERROR') throw error;
      setFormat(previousValue);
    }
  }, [setFormat, setValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!(0,dequal_lite__WEBPACK_IMPORTED_MODULE_2__.dequal)(value, previousValueRef.current)) {
      setFormat(value);
    }
    previousValueRef.current = value;
  }, [value, setFormat]);
  return {
    displayValue,
    onChange: setDisplayValue,
    onUpdate
  };
}

function useDrag(handler, config) {
  const {
    emitOnEditStart,
    emitOnEditEnd
  } = useInputContext();
  return (0,_use_gesture_react__WEBPACK_IMPORTED_MODULE_7__.useDrag)(state => {
    if (state.first) {
      document.body.classList.add('leva__panel__dragged');
      emitOnEditStart === null || emitOnEditStart === void 0 ? void 0 : emitOnEditStart();
    }
    const result = handler(state);
    if (state.last) {
      document.body.classList.remove('leva__panel__dragged');
      emitOnEditEnd === null || emitOnEditEnd === void 0 ? void 0 : emitOnEditEnd();
    }
    return result;
  }, config);
}

function useCanvas2d(fn) {
  const canvas = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const hasFired = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleCanvas = debounce(() => {
      canvas.current.width = canvas.current.offsetWidth * window.devicePixelRatio;
      canvas.current.height = canvas.current.offsetHeight * window.devicePixelRatio;
      fn(canvas.current, ctx.current);
    }, 250);
    window.addEventListener('resize', handleCanvas);
    if (!hasFired.current) {
      handleCanvas();
      hasFired.current = true;
    }
    return () => window.removeEventListener('resize', handleCanvas);
  }, [fn]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    ctx.current = canvas.current.getContext('2d');
  }, []);
  return [canvas, ctx];
}

function useTransform() {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const local = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
    x: 0,
    y: 0
  });
  const set = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(point => {
    Object.assign(local.current, point);
    if (ref.current) ref.current.style.transform = `translate3d(${local.current.x}px, ${local.current.y}px, 0)`;
  }, []);
  return [ref, set];
}

const _excluded$3 = ["__refCount"];
const getInputAtPath = (data, path) => {
  if (!data[path]) return null;
  const _data$path = data[path],
    input = _objectWithoutProperties(_data$path, _excluded$3);
  return input;
};
function useInput(path) {
  const store = useStoreContext();
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getInputAtPath(store.getData(), path));
  const set = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(value => store.setValueAtPath(path, value, true), [path, store]);
  const setSettings = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(settings => store.setSettingsAtPath(path, settings), [path, store]);
  const disable = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(flag => store.disableInputAtPath(path, flag), [path, store]);
  const emitOnEditStart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => store.emitOnEditStart(path), [path, store]);
  const emitOnEditEnd = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => store.emitOnEditEnd(path), [path, store]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setState(getInputAtPath(store.getData(), path));
    const unsub = store.useStore.subscribe(s => getInputAtPath(s.data, path), setState, {
      equalityFn: zustand_shallow__WEBPACK_IMPORTED_MODULE_8__["default"]
    });
    return () => unsub();
  }, [store, path]);
  return [state, {
    set,
    setSettings,
    disable,
    storeId: store.storeId,
    emitOnEditStart,
    emitOnEditEnd
  }];
}

const RangeGrid = styled('div', {
  variants: {
    hasRange: {
      true: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'auto $sizes$numberInputMinWidth',
        columnGap: '$colGap',
        alignItems: 'center'
      }
    }
  }
});

const Range = styled('div', {
  position: 'relative',
  width: '100%',
  height: 2,
  borderRadius: '$xs',
  backgroundColor: '$elevation1'
});
const Scrubber = styled('div', {
  position: 'absolute',
  width: '$scrubberWidth',
  height: '$scrubberHeight',
  borderRadius: '$xs',
  boxShadow: '0 0 0 2px $colors$elevation2',
  backgroundColor: '$accent2',
  cursor: 'pointer',
  $active: 'none $accent1',
  $hover: 'none $accent3',
  variants: {
    position: {
      left: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        transform: 'translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))'
      },
      right: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        transform: 'translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))'
      }
    }
  }
});
const RangeWrapper = styled('div', {
  position: 'relative',
  $flex: '',
  height: '100%',
  cursor: 'pointer',
  touchAction: 'none'
});
const Indicator = styled('div', {
  position: 'absolute',
  height: '100%',
  backgroundColor: '$accent2'
});

function RangeSlider({
  value,
  min,
  max,
  onDrag,
  step,
  initialValue
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const scrubberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const rangeWidth = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
  const scrubberWidth = useTh('sizes', 'scrubberWidth');
  const bind = useDrag(({
    event,
    first,
    xy: [x],
    movement: [mx],
    memo
  }) => {
    if (first) {
      const {
        width,
        left
      } = ref.current.getBoundingClientRect();
      rangeWidth.current = width - parseFloat(scrubberWidth);
      const targetIsScrub = (event === null || event === void 0 ? void 0 : event.target) === scrubberRef.current;
      memo = targetIsScrub ? value : invertedRange((x - left) / width, min, max);
    }
    const newValue = memo + invertedRange(mx / rangeWidth.current, 0, max - min);
    onDrag(sanitizeStep$1(newValue, {
      step,
      initialValue
    }));
    return memo;
  });
  const pos = range(value, min, max);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(RangeWrapper, _extends({
    ref: ref
  }, bind()), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Range, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Indicator, {
    style: {
      left: 0,
      right: `${(1 - pos) * 100}%`
    }
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Scrubber, {
    ref: scrubberRef,
    style: {
      left: `calc(${pos} * (100% - ${scrubberWidth}))`
    }
  }));
}

const DraggableLabel = react__WEBPACK_IMPORTED_MODULE_1__.memo(({
  label,
  onUpdate,
  step,
  innerLabelTrim
}) => {
  const [dragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const bind = useDrag(({
    active,
    delta: [dx],
    event,
    memo: _memo = 0
  }) => {
    setDragging(active);
    _memo += dx / 2;
    if (Math.abs(_memo) >= 1) {
      onUpdate(v => parseFloat(v) + Math.floor(_memo) * step * multiplyStep(event));
      _memo = 0;
    }
    return _memo;
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(InnerNumberLabel, _extends({
    dragging: dragging,
    title: label.length > 1 ? label : ''
  }, bind()), label.slice(0, innerLabelTrim));
});
function Number$1({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  innerLabelTrim = 1
}) {
  const InnerLabel = innerLabelTrim > 0 && react__WEBPACK_IMPORTED_MODULE_1__.createElement(DraggableLabel, {
    label: label,
    step: settings.step,
    onUpdate: onUpdate,
    innerLabelTrim: innerLabelTrim
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(NumberInput, {
    id: id,
    value: String(displayValue),
    onUpdate: onUpdate,
    onChange: onChange,
    innerLabel: InnerLabel
  });
}
function NumberComponent() {
  const props = useInputContext();
  const {
    label,
    value,
    onUpdate,
    settings,
    id
  } = props;
  const {
    min,
    max
  } = settings;
  const hasRange = max !== Infinity && min !== -Infinity;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Row, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Label, null, label), react__WEBPACK_IMPORTED_MODULE_1__.createElement(RangeGrid, {
    hasRange: hasRange
  }, hasRange && react__WEBPACK_IMPORTED_MODULE_1__.createElement(RangeSlider, _extends({
    value: parseFloat(value),
    onDrag: onUpdate
  }, settings)), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Number$1, _extends({}, props, {
    id: id,
    label: "value",
    innerLabelTrim: hasRange ? 0 : 1
  }))));
}

const {
    sanitizeStep
  } = props$3,
  rest = _objectWithoutProperties(props$3, ["sanitizeStep"]);
var number = createInternalPlugin(_objectSpread2({
  component: NumberComponent
}, rest));

const schema$2 = (_o, s) => (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().schema({
  options: (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().passesAnyOf((0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().object(), (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().array())
}).test(s);
const sanitize$2 = (value, {
  values
}) => {
  if (values.indexOf(value) < 0) throw Error(`Selected value doesn't match Select options`);
  return value;
};
const format = (value, {
  values
}) => {
  return values.indexOf(value);
};
const normalize$1 = input => {
  let {
    value,
    options
  } = input;
  let keys;
  let values;
  if (Array.isArray(options)) {
    values = options;
    keys = options.map(o => String(o));
  } else {
    values = Object.values(options);
    keys = Object.keys(options);
  }
  if (!('value' in input)) value = values[0];else if (!values.includes(value)) {
    keys.unshift(String(value));
    values.unshift(value);
  }
  if (!Object.values(options).includes(value)) options[String(value)] = value;
  return {
    value,
    settings: {
      keys,
      values
    }
  };
};

var props$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$2,
  sanitize: sanitize$2,
  format: format,
  normalize: normalize$1
});

const SelectContainer = styled('div', {
  $flexCenter: '',
  position: 'relative',
  '> svg': {
    pointerEvents: 'none',
    position: 'absolute',
    right: '$md'
  }
});
const NativeSelect = styled('select', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0
});
const PresentationalSelect = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '$rowHeight',
  backgroundColor: '$elevation3',
  borderRadius: '$sm',
  padding: '0 $sm',
  cursor: 'pointer',
  [`${NativeSelect}:focus + &`]: {
    $focusStyle: ''
  },
  [`${NativeSelect}:hover + &`]: {
    $hoverStyle: ''
  }
});

function Select({
  displayValue,
  value,
  onUpdate,
  id,
  settings,
  disabled
}) {
  const {
    keys,
    values
  } = settings;
  const lastDisplayedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  if (value === values[displayValue]) {
    lastDisplayedValue.current = keys[displayValue];
  }
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(SelectContainer, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(NativeSelect, {
    id: id,
    value: displayValue,
    onChange: e => onUpdate(values[Number(e.currentTarget.value)]),
    disabled: disabled
  }, keys.map((key, index) => react__WEBPACK_IMPORTED_MODULE_1__.createElement("option", {
    key: key,
    value: index
  }, key))), react__WEBPACK_IMPORTED_MODULE_1__.createElement(PresentationalSelect, null, lastDisplayedValue.current), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Chevron, {
    toggled: true
  }));
}
function SelectComponent() {
  const {
    label,
    value,
    displayValue,
    onUpdate,
    id,
    disabled,
    settings
  } = useInputContext();
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Row, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Label, null, label), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Select, {
    id: id,
    value: value,
    displayValue: displayValue,
    onUpdate: onUpdate,
    settings: settings,
    disabled: disabled
  }));
}

var select = createInternalPlugin(_objectSpread2({
  component: SelectComponent
}, props$2));

const schema$1 = o => (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().string().test(o);
const sanitize$1 = v => {
  if (typeof v !== 'string') throw Error(`Invalid string`);
  return v;
};
const normalize = ({
  value,
  editable: _editable = true,
  rows: _rows = false
}) => {
  return {
    value,
    settings: {
      editable: _editable,
      rows: typeof _rows === 'number' ? _rows : _rows ? 5 : 0
    }
  };
};

var props$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$1,
  sanitize: sanitize$1,
  normalize: normalize
});

const _excluded$2 = ["displayValue", "onUpdate", "onChange", "editable"];
const NonEditableString = styled('div', {
  whiteSpace: 'pre-wrap'
});
function String$1(_ref) {
  let {
      displayValue,
      onUpdate,
      onChange,
      editable = true
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$2);
  if (editable) return react__WEBPACK_IMPORTED_MODULE_1__.createElement(ValueInput, _extends({
    value: displayValue,
    onUpdate: onUpdate,
    onChange: onChange
  }, props));
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(NonEditableString, null, displayValue);
}
function StringComponent() {
  const {
    label,
    settings,
    displayValue,
    onUpdate,
    onChange
  } = useInputContext();
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Row, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Label, null, label), react__WEBPACK_IMPORTED_MODULE_1__.createElement(String$1, _extends({
    displayValue: displayValue,
    onUpdate: onUpdate,
    onChange: onChange
  }, settings)));
}

var string = createInternalPlugin(_objectSpread2({
  component: StringComponent
}, props$1));

const schema = o => (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().boolean().test(o);
const sanitize = v => {
  if (typeof v !== 'boolean') throw Error('Invalid boolean');
  return v;
};

var props = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema,
  sanitize: sanitize
});

const StyledInputWrapper = styled('div', {
  position: 'relative',
  $flex: '',
  height: '$rowHeight',
  input: {
    $reset: '',
    height: 0,
    width: 0,
    opacity: 0,
    margin: 0
  },
  label: {
    position: 'relative',
    $flexCenter: '',
    userSelect: 'none',
    cursor: 'pointer',
    height: '$checkboxSize',
    width: '$checkboxSize',
    backgroundColor: '$elevation3',
    borderRadius: '$sm',
    $hover: ''
  },
  'input:focus + label': {
    $focusStyle: ''
  },
  'input:focus:checked + label, input:checked + label:hover': {
    $hoverStyle: '$accent3'
  },
  'input + label:active': {
    backgroundColor: '$accent1'
  },
  'input:checked + label:active': {
    backgroundColor: '$accent1'
  },
  'label > svg': {
    display: 'none',
    width: '90%',
    height: '90%',
    stroke: '$highlight3'
  },
  'input:checked + label': {
    backgroundColor: '$accent2'
  },
  'input:checked + label > svg': {
    display: 'block'
  }
});

function Boolean({
  value,
  onUpdate,
  id,
  disabled
}) {
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(StyledInputWrapper, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    id: id,
    type: "checkbox",
    checked: value,
    onChange: e => onUpdate(e.currentTarget.checked),
    disabled: disabled
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    htmlFor: id
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 13l4 4L19 7"
  }))));
}
function BooleanComponent() {
  const {
    label,
    value,
    onUpdate,
    disabled,
    id
  } = useInputContext();
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Row, {
    input: true
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(Label, null, label), react__WEBPACK_IMPORTED_MODULE_1__.createElement(Boolean, {
    value: value,
    onUpdate: onUpdate,
    id: id,
    disabled: disabled
  }));
}

var boolean = createInternalPlugin(_objectSpread2({
  component: BooleanComponent
}, props));

const _excluded$1 = ["locked"];
function Coordinate({
  value,
  id,
  valueKey,
  settings,
  onUpdate,
  innerLabelTrim
}) {

  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value[valueKey]);
  valueRef.current = value[valueKey];
  const setValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue =>
  onUpdate({
    [valueKey]: sanitizeValue({
      type: 'NUMBER',
      value: valueRef.current,
      settings
    }, newValue)
  }), [onUpdate, settings, valueKey]);
  const number = useInputSetters({
    type: 'NUMBER',
    value: value[valueKey],
    settings,
    setValue
  });
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Number$1, {
    id: id,
    label: valueKey,
    value: value[valueKey],
    displayValue: number.displayValue,
    onUpdate: number.onUpdate,
    onChange: number.onChange,
    settings: settings,
    innerLabelTrim: innerLabelTrim
  });
}
const Container = styled('div', {
  display: 'grid',
  columnGap: '$colGap',
  gridAutoFlow: 'column dense',
  alignItems: 'center',
  variants: {
    withLock: {
      true: {
        gridTemplateColumns: '10px auto',
        '> svg': {
          cursor: 'pointer'
        }
      }
    }
  }
});

function Lock(_ref) {
  let {
      locked
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded$1);
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", _extends({
    width: "10",
    height: "10",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), locked ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }) : react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}
function Vector({
  value,
  onUpdate,
  settings,
  innerLabelTrim
}) {
  const {
    id,
    setSettings
  } = useInputContext();

  const {
    lock,
    locked
  } = settings;
  return react__WEBPACK_IMPORTED_MODULE_1__.createElement(Container, {
    withLock: lock
  }, lock && react__WEBPACK_IMPORTED_MODULE_1__.createElement(Lock, {
    locked: locked,
    onClick: () => setSettings({
      locked: !locked
    })
  }), Object.keys(value).map((key, i) => react__WEBPACK_IMPORTED_MODULE_1__.createElement(Coordinate, {
    id: i === 0 ? id : `${id}.${key}`,
    key: key,
    valueKey: key,
    value: value,
    settings: settings[key],
    onUpdate: onUpdate,
    innerLabelTrim: innerLabelTrim
  })));
}

const normalizeKeyedNumberSettings = (value, settings) => {
  const _settings = {};
  let maxStep = 0;
  let minPad = Infinity;
  Object.entries(value).forEach(([key, v]) => {
    _settings[key] = normalize$2(_objectSpread2({
      value: v
    }, settings[key])).settings;
    maxStep = Math.max(maxStep, _settings[key].step);
    minPad = Math.min(minPad, _settings[key].pad);
  });

  for (let key in _settings) {
    const {
      step,
      min,
      max
    } = settings[key] || {};
    if (!isFinite(step) && (!isFinite(min) || !isFinite(max))) {
      _settings[key].step = maxStep;
      _settings[key].pad = minPad;
    }
  }
  return _settings;
};

const _excluded = ["lock"],
  _excluded2 = ["value"];
function getVectorSchema(dimension) {
  const isVectorArray = (0,v8n__WEBPACK_IMPORTED_MODULE_3__["default"])().array().length(dimension).every.number();

  const isVectorObject = o => {
    if (!o || typeof o !== 'object') return false;
    const values = Object.values(o);
    return values.length === dimension && values.every(v => isFinite(v));
  };
  return o => {
    return isVectorArray.test(o) || isVectorObject(o);
  };
}

function getVectorType(value) {
  return Array.isArray(value) ? 'array' : 'object';
}

function convert(value, format, keys) {
  if (getVectorType(value) === format) return value;
  return format === 'array' ? Object.values(value) : mapArrayToKeys(value, keys);
}

const sanitizeVector = (value, settings, previousValue) => {
  const _value = convert(value, 'object', settings.keys);
  for (let key in _value) _value[key] = sanitize$3(_value[key], settings[key]);

  const _valueKeys = Object.keys(_value);
  let newValue = {};

  if (_valueKeys.length === settings.keys.length) newValue = _value;
  else {
    const _previousValue = convert(previousValue, 'object', settings.keys);
    if (_valueKeys.length === 1 && settings.locked) {
      const lockedKey = _valueKeys[0];
      const lockedCoordinate = _value[lockedKey];
      const previousLockedCoordinate = _previousValue[lockedKey];
      const ratio = previousLockedCoordinate !== 0 ? lockedCoordinate / previousLockedCoordinate : 1;
      for (let key in _previousValue) {
        if (key === lockedKey) newValue[lockedKey] = lockedCoordinate;
        else newValue[key] = _previousValue[key] * ratio;
      }
    } else {
      newValue = _objectSpread2(_objectSpread2({}, _previousValue), _value);
    }
  }
  return convert(newValue, settings.format, settings.keys);
};

const formatVector = (value, settings) => convert(value, 'object', settings.keys);

const isNumberSettings = o => !!o && ('step' in o || 'min' in o || 'max' in o);

function normalizeVector(value, settings, defaultKeys = []) {
  const {
      lock = false
    } = settings,
    _settings = _objectWithoutProperties(settings, _excluded);
  const format = Array.isArray(value) ? 'array' : 'object';
  const keys = format === 'object' ? Object.keys(value) : defaultKeys;
  const _value = convert(value, 'object', keys);

  const mergedSettings = isNumberSettings(_settings) ? keys.reduce((acc, k) => Object.assign(acc, {
    [k]: _settings
  }), {}) : _settings;
  const numberSettings = normalizeKeyedNumberSettings(_value, mergedSettings);
  return {
    value: format === 'array' ? value : _value,
    settings: _objectSpread2(_objectSpread2({}, numberSettings), {}, {
      format,
      keys,
      lock,
      locked: false
    })
  };
}
function getVectorPlugin(defaultKeys) {
  return {
    schema: getVectorSchema(defaultKeys.length),
    normalize: _ref => {
      let {
          value
        } = _ref,
        settings = _objectWithoutProperties(_ref, _excluded2);
      return normalizeVector(value, settings, defaultKeys);
    },
    format: (value, settings) => formatVector(value, settings),
    sanitize: (value, settings, prevValue) => sanitizeVector(value, settings, prevValue)
  };
}




/***/ })

}]);
//# sourceMappingURL=leva.bundle.js.map