'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var reactSwipeable = require('react-swipeable');
var cx = _interopDefault(require('classnames'));
var ResizeObserver = _interopDefault(require('resize-observer-polyfill'));
var Only = _interopDefault(require('react-only-when'));

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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _extends() {
  _extends = Object.assign || function (target) {
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var noop = function noop() {};
var numberToArray = function numberToArray(n) {
  return _toConsumableArray(Array(n).keys());
};
var cssPrefix = function cssPrefix(className) {
  return "rec rec-".concat(className);
};
var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgb(0, 196, 255);\n  color: ", ";\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover:enabled,\n  &:focus:enabled {\n    color: #fff;\n    background-color: rgb(0, 196, 255);\n    box-shadow: 0 0 2px 0 #333;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Button = styled.button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject(), function (props) {
  return props.disabled ? "#999" : "#333";
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var ItemWrapper = styled.div.attrs(function (_ref) {
  var style = _ref.style;
  return {
    style: style
  };
})(_templateObject$1(), function (_ref2) {
  var itemPosition = _ref2.itemPosition;
  return itemPosition;
});

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var SliderContainer = styled.div(_templateObject$2());

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: ", ";\n  ", "\n  transition: ", ";\n  left: ", ";\n  right: ", ";\n  top: ", ";\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var calcLeft = function calcLeft(_ref) {
  var isRTL = _ref.isRTL,
      verticalMode = _ref.verticalMode,
      isSwiping = _ref.isSwiping,
      swipedSliderPosition = _ref.swipedSliderPosition,
      sliderPosition = _ref.sliderPosition;

  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcRight = function calcRight(_ref2) {
  var isRTL = _ref2.isRTL,
      verticalMode = _ref2.verticalMode,
      isSwiping = _ref2.isSwiping,
      swipedSliderPosition = _ref2.swipedSliderPosition,
      sliderPosition = _ref2.sliderPosition;

  if (!verticalMode && isRTL) {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  } else {
    return "auto";
  }
};

var calcTop = function calcTop(_ref3) {
  var verticalMode = _ref3.verticalMode,
      isSwiping = _ref3.isSwiping,
      swipedSliderPosition = _ref3.swipedSliderPosition,
      sliderPosition = _ref3.sliderPosition;

  if (!verticalMode) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};

var calcTransition = function calcTransition(_ref4) {
  var isSwiping = _ref4.isSwiping,
      transitionMs = _ref4.transitionMs,
      easing = _ref4.easing,
      tiltEasing = _ref4.tiltEasing;
  var duration = isSwiping ? 250 : transitionMs;
  var effectiveEasing = isSwiping ? tiltEasing : easing;
  return "all ".concat(duration, "ms ").concat(effectiveEasing);
};

var Slider = styled.div(_templateObject$3(), function (_ref5) {
  var verticalMode = _ref5.verticalMode;
  return verticalMode ? "column" : "row";
}, function (_ref6) {
  var verticalMode = _ref6.verticalMode;
  return verticalMode ? "min-height: 100%;" : "";
}, calcTransition, calcLeft, calcRight, calcTop);

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledCarousel = styled.div.attrs(function (props) {
  return {
    style: {
      height: props.size.height
    }
  };
})(_templateObject$4());

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ", ";\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var CarouselWrapper = styled.div(_templateObject$5(), function (_ref) {
  var isRTL = _ref.isRTL;
  return isRTL ? "rtl" : "ltr";
});

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end"
};

var ItemWrapperContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(ItemWrapperContainer, _React$Component);

  var _super = _createSuper(ItemWrapperContainer);

  function ItemWrapperContainer() {
    var _this;

    _classCallCheck(this, ItemWrapperContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(ItemWrapperContainer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          child = _this$props2.child,
          style = _this$props2.style,
          itemPosition = _this$props2.itemPosition;
      return /*#__PURE__*/React.createElement(ItemWrapper, {
        onClick: this.onClick,
        className: cssPrefix("item-wrapper"),
        itemPosition: itemPosition,
        style: style
      }, child);
    }
  }]);

  return ItemWrapperContainer;
}(React.Component);

ItemWrapperContainer.defaultProps = {
  style: {},
  itemPosition: consts.CENTER,
  onClick: noop
};
ItemWrapperContainer.propTypes = {
  child: PropTypes.element.isRequired,
  itemPosition: PropTypes.oneOf([consts.START, consts.CENTER, consts.END]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  onClick: PropTypes.func
};

var Track = function Track(_ref) {
  var children = _ref.children,
      childWidth = _ref.childWidth,
      enableSwipe = _ref.enableSwipe,
      enableMouseSwipe = _ref.enableMouseSwipe,
      preventDefaultTouchmoveEvent = _ref.preventDefaultTouchmoveEvent,
      itemsToShow = _ref.itemsToShow,
      currentItem = _ref.currentItem,
      itemPosition = _ref.itemPosition,
      itemPadding = _ref.itemPadding,
      onSwipedLeft = _ref.onSwipedLeft,
      onSwipedRight = _ref.onSwipedRight,
      onSwipedUp = _ref.onSwipedUp,
      onSwipedDown = _ref.onSwipedDown,
      onItemClick = _ref.onItemClick;
  var width = "".concat(childWidth, "px");
  var paddingStyle = "".concat(itemPadding.join("px "), "px");
  var originalChildren = React.Children.map(children, function (child, idx) {
    var min = currentItem;
    var max = currentItem + itemsToShow;
    var isVisible = idx >= min && idx < max;
    var item = /*#__PURE__*/React.createElement(ItemWrapperContainer, {
      id: idx,
      itemPosition: itemPosition,
      child: child,
      style: {
        width: width,
        padding: paddingStyle
      },
      key: idx,
      onClick: onItemClick
    });
    var toRender = enableSwipe ? /*#__PURE__*/React.createElement(reactSwipeable.Swipeable, {
      stopPropagation: true,
      preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
      trackMouse: enableMouseSwipe,
      onSwipedLeft: onSwipedLeft,
      onSwipedRight: onSwipedRight,
      onSwipedUp: onSwipedUp,
      onSwipedDown: onSwipedDown,
      className: cssPrefix("swipable-".concat(idx))
    }, item) : item;
    return /*#__PURE__*/React.createElement("div", {
      tabIndex: isVisible ? 0 : -1
    }, toRender);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, originalChildren);
};

Track.propTypes = {
  children: PropTypes.array.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  currentItem: PropTypes.number.isRequired,
  itemPosition: PropTypes.string,
  itemPadding: PropTypes.array,
  childWidth: PropTypes.number,
  enableSwipe: PropTypes.bool,
  enableMouseSwipe: PropTypes.bool,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  onSwipedLeft: PropTypes.func,
  onSwipedRight: PropTypes.func,
  onSwipedUp: PropTypes.func,
  onSwipedDown: PropTypes.func,
  onItemClick: PropTypes.func
};

var directionIcons = {
  left: "❮",
  right: "❯",
  up: "❮",
  down: "❯"
};
var arrowClassname = cssPrefix("arrow");

var rotateStyle = function rotateStyle(direction) {
  var rotate = {};

  if (direction === Arrow.up || direction === Arrow.down) {
    rotate.transform = "rotate(90deg)";
  }

  return rotate;
};

var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
      onClick = _ref.onClick,
      icons = _ref.icons,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["direction", "onClick", "icons", "style"]);

  var arrows = _objectSpread2(_objectSpread2({}, directionIcons), icons);

  var styleObj = _objectSpread2(_objectSpread2({}, rotateStyle(direction)), style);

  return /*#__PURE__*/React.createElement(Button, _extends({
    tabIndex: 0,
    onClick: onClick,
    className: cx(arrowClassname, "".concat(arrowClassname, "-").concat(direction)),
    style: styleObj
  }, rest), arrows[direction]);
};

Arrow.left = "left";
Arrow.right = "right";
Arrow.up = "up";
Arrow.down = "down";
Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]).isRequired,
  icons: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func
};

var NEXT_ITEM = "NEXT_ITEM";
var PREV_ITEM = "PREV_ITEM";

var firstItemReducer = function firstItemReducer(state, action) {
  var limit = action.limit,
      itemsToScroll = action.itemsToScroll,
      type = action.type;

  switch (type) {
    case NEXT_ITEM:
      {
        var optimisticNextItem = state + itemsToScroll;
        var nextItem = limit >= optimisticNextItem ? optimisticNextItem : limit;
        return nextItem;
      }

    case PREV_ITEM:
      {
        var optimisticPrevItem = state - itemsToScroll;
        var prevItem = optimisticPrevItem >= limit ? optimisticPrevItem : limit;
        return prevItem;
      }

    default:
      return state;
  }
};

var nextItemAction = function nextItemAction(limit, itemsToScroll) {
  return {
    type: NEXT_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};
var prevItemAction = function prevItemAction(limit, itemsToScroll) {
  return {
    type: PREV_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  transition: all 250ms ease;\n  border: none;\n  margin: 5px;\n  background-color: ", ";\n  font-size: 1.3em;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  box-shadow: ", ";\n  border-radius: 50%;\n  outline: none;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: ", ";\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var boxShadow = "0 0 1px 2px rgb(0, 196, 255)";
var activeBoxShadow = "0 0 1px 3px rgb(0, 196, 255)";
var hoveredBoxShadow = "0 0 1px 3px rgb(0, 196, 255)";
var Dot = styled.button.attrs(function (_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$6(), function (_ref2) {
  var active = _ref2.active;
  return active ? "rgb(0, 196, 255)" : "transparent";
}, function (_ref3) {
  var active = _ref3.active;
  return active ? activeBoxShadow : boxShadow;
}, function (_ref4) {
  var active = _ref4.active;
  return active ? activeBoxShadow : hoveredBoxShadow;
});

var DotContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(DotContainer, _React$Component);

  var _super = _createSuper(DotContainer);

  function DotContainer() {
    var _this;

    _classCallCheck(this, DotContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onClick", function () {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          id = _this$props.id;
      onClick(id);
    });

    return _this;
  }

  _createClass(DotContainer, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return /*#__PURE__*/React.createElement(Dot, {
        tabIndex: active ? -1 : 0,
        onClick: this.onClick,
        active: active,
        className: "".concat(cssPrefix("dot"), " ").concat(active ? cssPrefix("dot_active") : "")
      });
    }
  }]);

  return DotContainer;
}(React.Component);

DotContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Indicators = styled.div(_templateObject$7());

var Pagination = /*#__PURE__*/function (_React$Component) {
  _inherits(Pagination, _React$Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _super.apply(this, arguments);
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          numOfPages = _this$props.numOfPages,
          activePage = _this$props.activePage,
          onClick = _this$props.onClick;
      var pages = numberToArray(numOfPages);
      return /*#__PURE__*/React.createElement(Indicators, {
        className: cssPrefix("pagination")
      }, pages.map(function (item, i) {
        return /*#__PURE__*/React.createElement(DotContainer, {
          key: i,
          id: i,
          active: i === activePage,
          onClick: onClick
        });
      }));
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.defaultProps = {
  onClick: noop
};
Pagination.propTypes = {
  numOfPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rootHeight: 0,
      rootWidth: 0,
      childWidth: 0,
      childHeight: 0,
      sliderPosition: 0,
      swipedSliderPosition: 0,
      isSwiping: false,
      transitioning: false,
      firstItem: _this.props.initialFirstItem,
      pages: [],
      activePage: 0,
      sliderContainerWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (name) {
      return function (ref) {
        return _this[name] = ref;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "initResizeObserver", function () {
      _this.ro = new ResizeObserver(function (entries, observer) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;

            if (entry.target === _this.sliderContainer) {
              _this.onContainerResize(entry);
            }

            if (entry.target === _this.slider) {
              _this.onSliderResize(entry);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });

      _this.ro.observe(_this.sliderContainer);

      _this.ro.observe(_this.slider);
    });

    _defineProperty(_assertThisInitialized(_this), "unSubscribeObserver", function () {
      return _this.ro.disconnect();
    });

    _defineProperty(_assertThisInitialized(_this), "setAutoPlay", function () {
      var autoPlaySpeed = _this.props.autoPlaySpeed;
      _this.autoPlayIntervalId = setInterval(function () {
        var transitioning = _this.state.transitioning;

        if (!transitioning) {
          _this.slideNext();
        }
      }, autoPlaySpeed);
    });

    _defineProperty(_assertThisInitialized(_this), "removeAutoPlay", function () {
      if (_this.autoPlayIntervalId) {
        clearInterval(_this.autoPlayIntervalId);
        _this.autoPlayIntervalId = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setPages", function () {
      var numOfPages = _this.getNumOfPages();

      var pages = numberToArray(numOfPages);

      _this.setState({
        pages: pages
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderTransitionEnd", function (fn) {
      _this.slider.addEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSliderTransitionHook", function (fn) {
      _this.slider.removeEventListener("transitionend", fn);
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentBreakpoint", function () {
      var _this$props = _this.props,
          breakPoints = _this$props.breakPoints,
          itemsToShow = _this$props.itemsToShow,
          itemsToScroll = _this$props.itemsToScroll;
      var sliderContainerWidth = _this.state.sliderContainerWidth; // default breakpoint from individual props

      var currentBreakPoint = {
        itemsToScroll: itemsToScroll,
        itemsToShow: itemsToShow
      }; // if breakpoints were added as props override the individual props

      if (breakPoints && breakPoints.length > 0) {
        currentBreakPoint = breakPoints.slice() // no mutations
        .reverse() // so we can find last match
        .find(function (bp) {
          return bp.width <= sliderContainerWidth;
        });

        if (!currentBreakPoint) {
          /* in case we don't have a lower width than sliderContainerWidth
          * this mostly happens in initilization when sliderContainerWidth is 0
          */
          currentBreakPoint = breakPoints[0];
        }
      }

      return currentBreakPoint;
    });

    _defineProperty(_assertThisInitialized(_this), "getNumOfVisibleItems", function () {
      var itemsToShow = _this.props.itemsToShow;
      var visibleItems = itemsToShow;

      var currentBreakPoint = _this.getCurrentBreakpoint();

      if (currentBreakPoint) {
        visibleItems = currentBreakPoint.itemsToShow;
      }

      return visibleItems;
    });

    _defineProperty(_assertThisInitialized(_this), "getItemsToScroll", function () {
      var itemsToScroll = _this.props.itemsToScroll;

      var currentBreakPoint = _this.getCurrentBreakpoint();

      var effectiveItemsToScroll = itemsToScroll;

      if (currentBreakPoint && currentBreakPoint.itemsToScroll) {
        effectiveItemsToScroll = currentBreakPoint.itemsToScroll;
      }

      return effectiveItemsToScroll;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSliderPosition", function () {
      _this.setState(function (state, props) {
        var children = props.children,
            verticalMode = props.verticalMode;
        var childWidth = state.childWidth,
            childHeight = state.childHeight,
            firstItem = state.firstItem;
        var totalItems = children.length;

        var numOfVisibleItems = _this.getNumOfVisibleItems();

        var hiddenSlots = totalItems - numOfVisibleItems;
        var moveBy = firstItem * -1;
        var emptySlots = numOfVisibleItems - (totalItems - firstItem);

        if (emptySlots > 0 && hiddenSlots > 0) {
          moveBy = emptySlots + firstItem * -1;
        }

        var sliderPosition = (verticalMode ? childHeight : childWidth) * moveBy;
        var newFirstItem = emptySlots > 0 ? firstItem - emptySlots : firstItem;
        return {
          sliderPosition: sliderPosition,
          firstItem: newFirstItem < 0 ? 0 : newFirstItem
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSliderResize", function (sliderNode) {
      var _this$props2 = _this.props,
          verticalMode = _this$props2.verticalMode,
          children = _this$props2.children;
      var height = sliderNode.contentRect.height;
      var nextState = {};

      if (verticalMode) {
        var numOfVisibleItems = _this.getNumOfVisibleItems();

        var childHeight = height / children.length;
        nextState.rootHeight = childHeight * numOfVisibleItems;
        nextState.childHeight = childHeight;
      } else {
        nextState.rootHeight = height;
      }

      _this.setState(nextState);
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerResize", function (sliderContainerNode) {
      var _this$props3 = _this.props,
          onResize = _this$props3.onResize,
          verticalMode = _this$props3.verticalMode;
      var width = sliderContainerNode.contentRect.width; // update slider container width

      _this.setState({
        sliderContainerWidth: width
      }, function () {
        /* based on slider container's width, get num of items to show
        * and calculate child's width (and update it in state)
        */
        var visibleItems = _this.getNumOfVisibleItems();

        var childWidth = verticalMode ? width : width / visibleItems;

        _this.setState(function (state) {
          return {
            childWidth: childWidth
          };
        }, function () {
          /* Based on all of the above new data:
          * update slider position
          * get the new current breakpoint
          * pass the current breakpoint to the consumer's callback
          */
          _this.updateSliderPosition();

          var currentBreakPoint = _this.getCurrentBreakpoint();

          onResize(currentBreakPoint);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "tiltMovement", function (position) {
      var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;

      _this.setState(function (state) {
        return {
          isSwiping: true,
          swipedSliderPosition: position - distance
        };
      });

      setTimeout(function () {
        _this.setState({
          isSwiping: false,
          swipedSliderPosition: 0
        });
      }, duration);
    });

    _defineProperty(_assertThisInitialized(_this), "convertChildToCbObj", function (index) {
      var children = _this.props.children; // support decimal itemsToShow

      var roundedIdx = Math.round(index);
      var child = children[roundedIdx];
      return {
        item: child.props,
        index: roundedIdx
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemIndex", function (currentIndex, getPrev) {
      var children = _this.props.children;

      var itemsToScroll = _this.getItemsToScroll();

      var numOfvisibleItems = _this.getNumOfVisibleItems();

      var notEnoughItemsToshow = numOfvisibleItems > children.length;
      var limit = getPrev ? 0 : children.length - numOfvisibleItems;

      if (notEnoughItemsToshow) {
        limit = 0; // basically don't move
      }

      var nextAction = getPrev ? prevItemAction(0, itemsToScroll) : nextItemAction(limit, itemsToScroll);
      var nextItem = firstItemReducer(currentIndex, nextAction);
      return nextItem;
    });

    _defineProperty(_assertThisInitialized(_this), "getNextItemObj", function (getPrev) {
      var children = _this.props.children;
      var firstItem = _this.state.firstItem;

      var nextItemIndex = _this.getNextItemIndex(firstItem, getPrev); // support decimal itemsToShow


      var roundedIdx = Math.round(nextItemIndex);
      var asElement = children[roundedIdx];
      var asObj = {
        item: asElement.props,
        index: roundedIdx
      };
      return asObj;
    });

    _defineProperty(_assertThisInitialized(_this), "onNextStart", function () {
      var onNextStart = _this.props.onNextStart;
      var firstItem = _this.state.firstItem;

      var nextItemObj = _this.getNextItemObj();

      var prevItemObj = _this.convertChildToCbObj(firstItem);

      onNextStart(prevItemObj, nextItemObj);

      _this.slideNext();
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevStart", function () {
      var onPrevStart = _this.props.onPrevStart;
      var firstItem = _this.state.firstItem;

      var nextItemObj = _this.getNextItemObj(true);

      var prevItemObj = _this.convertChildToCbObj(firstItem);

      onPrevStart(prevItemObj, nextItemObj);

      _this.slidePrev();
    });

    _defineProperty(_assertThisInitialized(_this), "slideNext", function () {
      var enableTilt = _this.props.enableTilt;
      var _this$state = _this.state,
          firstItem = _this$state.firstItem,
          sliderPosition = _this$state.sliderPosition;

      var nextItem = _this.getNextItemIndex(firstItem, false);

      if (firstItem !== nextItem) {
        _this.goTo(nextItem);
      } else if (enableTilt) {
        _this.tiltMovement(sliderPosition, 20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "slidePrev", function () {
      var firstItem = _this.state.firstItem;
      var enableTilt = _this.props.enableTilt;

      var prevItem = _this.getNextItemIndex(firstItem, true);

      if (firstItem !== prevItem) {
        _this.goTo(prevItem);
      } else if (enableTilt) {
        _this.tiltMovement(0, -20, 150);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onNextEnd", function () {
      var _this$props4 = _this.props,
          onNextEnd = _this$props4.onNextEnd,
          onChange = _this$props4.onChange;
      var _this$state2 = _this.state,
          firstItem = _this$state2.firstItem,
          activePage = _this$state2.activePage;

      var nextItemObj = _this.convertChildToCbObj(firstItem);

      _this.removeSliderTransitionHook(_this.onNextEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onNextEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "onPrevEnd", function () {
      var _this$props5 = _this.props,
          onPrevEnd = _this$props5.onPrevEnd,
          onChange = _this$props5.onChange;
      var _this$state3 = _this.state,
          firstItem = _this$state3.firstItem,
          activePage = _this$state3.activePage;

      var nextItemObj = _this.convertChildToCbObj(firstItem);

      _this.removeSliderTransitionHook(_this.onPrevEnd);

      _this.setState({
        transitioning: false
      });

      onChange && onChange(nextItemObj, activePage);
      onPrevEnd(nextItemObj, activePage);
    });

    _defineProperty(_assertThisInitialized(_this), "generatePositionUpdater", function (direction, nextItemId, verticalMode, rest) {
      return function (state) {
        var sliderPosition = state.sliderPosition,
            childWidth = state.childWidth,
            childHeight = state.childHeight,
            firstItem = state.firstItem;
        var newSliderPosition = 0;
        var childSize = verticalMode ? childHeight : childWidth;

        if (direction === consts.NEXT) {
          newSliderPosition = sliderPosition - childSize * (nextItemId - firstItem);
        } else {
          newSliderPosition = sliderPosition + childSize * (firstItem - nextItemId);
        }

        return _objectSpread2({
          sliderPosition: newSliderPosition,
          firstItem: nextItemId,
          swipedSliderPosition: 0,
          isSwiping: false
        }, rest);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "goTo", function (nextItemId) {
      var _this$props6 = _this.props,
          children = _this$props6.children,
          verticalMode = _this$props6.verticalMode;
      var firstItem = _this.state.firstItem;
      var isPrev = firstItem > nextItemId;

      var nextAvailbaleItem = _this.getNextItemIndex(firstItem, isPrev);

      var itemsToshow = _this.getNumOfVisibleItems();

      var noChange = nextAvailbaleItem === firstItem;
      var outOfBoundry = nextItemId + itemsToshow >= children.length;

      if (noChange) {
        return;
      }

      if (outOfBoundry) {
        if (children.length - itemsToshow > 0) {
          nextItemId = children.length - itemsToshow;
        } else {
          nextItemId = Math.max(children.length - 1, children.length - itemsToshow);
        }
      }

      var direction = consts.NEXT;
      var positionEndCb = _this.onNextEnd;

      if (isPrev) {
        direction = consts.PREV;
        positionEndCb = _this.onPrevEnd;
      }

      var stateUpdater = _this.generatePositionUpdater(direction, nextItemId, verticalMode, {
        transitioning: true
      });

      _this.setState(stateUpdater, function () {
        // callback
        pipe(_this.updateActivePage(), _this.onSliderTransitionEnd(positionEndCb));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getNumOfPages", function () {
      var children = _this.props.children;

      var numOfVisibleItems = _this.getNumOfVisibleItems();

      var numOfPages = Math.ceil(children.length / numOfVisibleItems);
      return numOfPages || 1;
    });

    _defineProperty(_assertThisInitialized(_this), "updateActivePage", function () {
      _this.setState(function (state) {
        var firstItem = state.firstItem,
            activePage = state.activePage;

        var numOfVisibleItems = _this.getNumOfVisibleItems();

        var newActivePage = Math.ceil(firstItem / numOfVisibleItems);

        if (activePage !== newActivePage) {
          return {
            activePage: newActivePage
          };
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIndicatorClick", function (indicatorId) {
      var numOfVisibleItems = _this.getNumOfVisibleItems();

      var gotoIndex = indicatorId * numOfVisibleItems;

      _this.setState({
        activePage: indicatorId
      });

      _this.goTo(gotoIndex);
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initResizeObserver();
      this.updateActivePage();
      this.setPages();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props7 = this.props,
          enableAutoPlay = _this$props7.enableAutoPlay,
          children = _this$props7.children,
          itemsToShow = _this$props7.itemsToShow,
          itemsToScroll = _this$props7.itemsToScroll,
          breakPoints = _this$props7.breakPoints;
      var _this$state4 = this.state,
          firstItem = _this$state4.firstItem,
          sliderContainerWidth = _this$state4.sliderContainerWidth;
      var nextItem = this.getNextItemIndex(firstItem, false); // update pages (for pagination)

      if (prevProps.children !== children || prevProps.itemsToShow !== itemsToShow || prevProps.itemsToScroll !== itemsToScroll || prevProps.breakPoints !== breakPoints || sliderContainerWidth !== prevState.sliderContainerWidth) {
        this.setPages();
      } // autoplay update


      if (firstItem === nextItem) {
        this.removeAutoPlay();
      } else if (enableAutoPlay && !this.autoPlayIntervalId) {
        this.setAutoPlay();
      } else if (!enableAutoPlay && this.autoPlayIntervalId) {
        this.removeAutoPlay();
      }

      if (prevProps.children.length > children.length) {
        // number of items is reduced (we don't care if number of items is increased)
        // we need to check if our current index is not out of boundaries
        // we need to include itemsToShow so we can fill up the slots
        var lastIndex = children.length - 1;
        var isOutOfRange = firstItem + itemsToShow > lastIndex;

        if (isOutOfRange) {
          // we are out of boundaries, go "back" to last item of the list (respect itemsToShow)
          this.goTo(children.length - itemsToShow);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unSubscribeObserver();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          childWidth = _this$state5.childWidth,
          activePage = _this$state5.activePage,
          isSwiping = _this$state5.isSwiping,
          sliderPosition = _this$state5.sliderPosition,
          swipedSliderPosition = _this$state5.swipedSliderPosition,
          rootHeight = _this$state5.rootHeight,
          pages = _this$state5.pages,
          firstItem = _this$state5.firstItem;
      var _this$props8 = this.props,
          className = _this$props8.className,
          style = _this$props8.style,
          verticalMode = _this$props8.verticalMode,
          isRTL = _this$props8.isRTL,
          easing = _this$props8.easing,
          tiltEasing = _this$props8.tiltEasing,
          transitionMs = _this$props8.transitionMs,
          children = _this$props8.children,
          focusOnSelect = _this$props8.focusOnSelect,
          itemsToShow = _this$props8.itemsToShow,
          itemPosition = _this$props8.itemPosition,
          itemPadding = _this$props8.itemPadding,
          enableSwipe = _this$props8.enableSwipe,
          enableMouseSwipe = _this$props8.enableMouseSwipe,
          pagination = _this$props8.pagination,
          showArrows = _this$props8.showArrows,
          disableArrowsOnEnd = _this$props8.disableArrowsOnEnd,
          preventDefaultTouchmoveEvent = _this$props8.preventDefaultTouchmoveEvent,
          renderArrow = _this$props8.renderArrow,
          renderPagination = _this$props8.renderPagination;
      var onSwipedLeft = verticalMode ? noop : isRTL ? this.onPrevStart : this.onNextStart;
      var onSwipedRight = verticalMode ? noop : isRTL ? this.onNextStart : this.onPrevStart;
      var onSwipedUp = verticalMode ? this.onNextStart : noop;
      var onSwipedDown = verticalMode ? this.onPrevStart : noop;
      var numOfPages = this.getNumOfPages();
      /** Determine if arrows should be disabled */

      var canSlidePrev = firstItem !== this.getNextItemIndex(firstItem, true);
      var canSlideNext = firstItem !== this.getNextItemIndex(firstItem, false);
      var disabledPrevArrow = !canSlidePrev && disableArrowsOnEnd;
      var disabledNextArrow = !canSlideNext && disableArrowsOnEnd;
      return /*#__PURE__*/React.createElement(CarouselWrapper, {
        isRTL: isRTL,
        className: "".concat(cssPrefix("carousel-wrapper"), " ").concat(className),
        style: style
      }, /*#__PURE__*/React.createElement(StyledCarousel, {
        className: cssPrefix("carousel"),
        size: {
          height: rootHeight
        }
      }, /*#__PURE__*/React.createElement(Only, {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.PREV,
        onClick: this.onPrevStart,
        isEdge: !canSlidePrev
      }) : /*#__PURE__*/React.createElement(Arrow, {
        onClick: this.onPrevStart,
        direction: verticalMode ? Arrow.up : Arrow.left,
        disabled: disabledPrevArrow
      })), /*#__PURE__*/React.createElement(SliderContainer, {
        className: cssPrefix("slider-container"),
        ref: this.setRef("sliderContainer")
      }, /*#__PURE__*/React.createElement(Slider, {
        verticalMode: verticalMode,
        isRTL: isRTL,
        easing: easing,
        sliderPosition: sliderPosition,
        swipedSliderPosition: swipedSliderPosition,
        isSwiping: isSwiping,
        transitionMs: transitionMs,
        tiltEasing: tiltEasing,
        className: cssPrefix("slider"),
        ref: this.setRef("slider")
      }, /*#__PURE__*/React.createElement(Track, {
        children: children,
        childWidth: childWidth,
        currentItem: firstItem,
        itemsToShow: itemsToShow,
        itemPosition: itemPosition,
        itemPadding: itemPadding,
        enableSwipe: enableSwipe,
        enableMouseSwipe: enableMouseSwipe,
        preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
        onSwipedLeft: onSwipedLeft,
        onSwipedRight: onSwipedRight,
        onSwipedUp: onSwipedUp,
        onSwipedDown: onSwipedDown,
        onItemClick: focusOnSelect ? this.goTo : undefined
      }))), /*#__PURE__*/React.createElement(Only, {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.NEXT,
        onClick: this.onNextStart,
        isEdge: !canSlideNext
      }) : /*#__PURE__*/React.createElement(Arrow, {
        onClick: this.onNextStart,
        direction: verticalMode ? Arrow.down : Arrow.right,
        disabled: disabledNextArrow
      }))), /*#__PURE__*/React.createElement(Only, {
        when: pagination
      }, renderPagination ? renderPagination({
        pages: pages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      }) : /*#__PURE__*/React.createElement(Pagination, {
        numOfPages: numOfPages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      })));
    }
  }]);

  return Carousel;
}(React.Component);

Carousel.defaultProps = {
  className: "",
  style: {},
  verticalMode: false,
  isRTL: false,
  initialFirstItem: 0,
  showArrows: true,
  disableArrowsOnEnd: true,
  pagination: true,
  easing: "ease",
  tiltEasing: "ease",
  transitionMs: 500,
  enableTilt: true,
  enableSwipe: true,
  enableMouseSwipe: true,
  preventDefaultTouchmoveEvent: false,
  focusOnSelect: false,
  itemsToShow: 1,
  itemsToScroll: 1,
  itemPosition: consts.CENTER,
  itemPadding: [0, 0, 0, 0],
  enableAutoPlay: false,
  autoPlaySpeed: 2000,
  // callbacks
  onNextEnd: noop,
  onPrevEnd: noop,
  onNextStart: noop,
  onPrevStart: noop,
  onResize: noop
};
Carousel.propTypes = {
  /** Items to render */
  children: PropTypes.node.isRequired,

  /** The css class for the root element */
  className: PropTypes.string,

  /** The style object for the root element */
  style: PropTypes.object,

  /** Display the Carousel in a vertical layout */
  verticalMode: PropTypes.bool,

  /** Flip right to left */
  isRTL: PropTypes.bool,

  /** Show dots for paging */
  pagination: PropTypes.bool,

  /** Animation speed */
  transitionMs: PropTypes.number,

  /** transition easing pattern */
  easing: PropTypes.string,

  /** transition easing pattern for the tilt */
  tiltEasing: PropTypes.string,

  /** The "bump" animation when reaching the last item */
  enableTilt: PropTypes.bool,

  /** Number of visible items  */
  itemsToShow: PropTypes.number,

  /** Number of items to scroll */
  itemsToScroll: PropTypes.number,

  /** Collection of objects with a width, itemsToShow and itemsToScroll  */
  breakPoints: PropTypes.arrayOf(PropTypes.shape({
    width: PropTypes.number.isRequired,
    itemsToShow: PropTypes.number,
    itemsToScroll: PropTypes.number
  })),

  /** The first items when the component mounts */
  initialFirstItem: PropTypes.number,

  /** Show the arrow buttons */
  showArrows: PropTypes.bool,

  /** Disables the arrow button when there are no more items */
  disableArrowsOnEnd: PropTypes.bool,

  /** Go to item on click */
  focusOnSelect: PropTypes.bool,

  /** A render prop for the arrow component
   * - ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>
   */
  renderArrow: PropTypes.func,

  /** A render prop for the pagination component
   * - ({ pages, activePage, onClick }) =>  <YourComponent/>
   */
  renderPagination: PropTypes.func,

  /** Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END */
  itemPosition: PropTypes.oneOf([consts.START, consts.CENTER, consts.END]),

  /** A padding for each element  */
  itemPadding: PropTypes.array,
  // swipe

  /** Enable or disable swipe */
  enableSwipe: PropTypes.bool,

  /** Enable or disable mouse swipe */
  enableMouseSwipe: PropTypes.bool,

  /** Prevent page scroll on touchmove.
   * Use this to stop the browser from scrolling while a user swipes.
   * More details: https://github.com/FormidableLabs/react-swipeable#preventdefaulttouchmoveevent-details
   */
  preventDefaultTouchmoveEvent: PropTypes.bool,
  // auto play

  /** Enable or disable auto play */
  enableAutoPlay: PropTypes.bool,

  /** Set auto play speed (ms) */
  autoPlaySpeed: PropTypes.number,
  // callbacks

  /** A callback for the change of an item
   * - onChange(currentItemObject, currentPageIndex) => {} */
  onChange: PropTypes.func,

  /** A callback for the beginning of the next transition
   * - onNextStart(prevItemObject, nextItemObject) => {} */
  onNextStart: PropTypes.func,

  /** A callback for the beginning of the prev transition
   * - onPrevStart(prevItemObject, nextItemObject) => {} */
  onPrevStart: PropTypes.func,

  /** A callback for the end of the next transition
   * - onNextEnd(nextItemObject, currentPageIndex) => {} */
  onNextEnd: PropTypes.func,

  /** A callback for the end of the prev transition
   * - onPrevEnd(nextItemObject, currentPageIndex) => {} */
  onPrevEnd: PropTypes.func,

  /** A callback for the "slider-container" resize
   * - onResize(currentBreakPoint) => {} */
  onResize: PropTypes.func
};

exports.default = Carousel;
exports.consts = consts;
//# sourceMappingURL=index.js.map
