"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-undef */
var ScrollSpy = function ScrollSpy(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'active' : _ref$className,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === void 0 ? 0 : _ref$offsetTop,
      _ref$offsetLeft = _ref.offsetLeft,
      offsetLeft = _ref$offsetLeft === void 0 ? 0 : _ref$offsetLeft,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1000 : _ref$duration,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    var sourceElements = [];
    var targetElements = [];
    var pendingScroll;

    var throttle = function throttle(fn) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var timer;
      var time = Date.now();
      return function (params) {
        clearTimeout(timer);

        if (time + wait - Date.now() < 0) {
          fn(params);
          time = Date.now();
        } else {
          timer = setTimeout(fn, wait / 5);
        }
      };
    };

    var onScrollHandler = throttle(function () {
      var scrollElement = document.scrollingElement || document.documentElement;
      var center = {
        x: scrollElement.scrollLeft + window.innerWidth / 2,
        y: scrollElement.scrollTop + window.innerHeight / 2
      };
      sourceElements.map(function (source, i) {
        var target = targetElements[i];
        var visibleHorizontal = target.offsetLeft >= 0 && center.x >= target.offsetLeft && center.x < target.offsetLeft + target.offsetWidth;
        var visibleVertical = target.offsetTop >= 0 && center.y >= target.offsetTop && center.y < target.offsetTop + target.offsetHeight;

        if (visibleVertical && visibleHorizontal) {
          source.classList.add(className);
        } else {
          source.classList.remove(className);
        }

        return true;
      });
    });

    var onClickHandler = function onClickHandler(event, targetTop, targetLeft, targetDuration) {
      event.preventDefault();
      if (pendingScroll) return true;
      pendingScroll = true;
      var scrollElement = document.scrollingElement || document.documentElement;
      var scrollLimit = {
        x: Math.max(0, scrollElement.scrollWidth - window.innerWidth),
        y: Math.max(0, scrollElement.scrollHeight - window.innerHeight)
      };
      var scrollToPosition = {
        x: Math.min(Math.max(0, targetLeft), scrollLimit.x),
        y: Math.min(Math.max(0, targetTop), scrollLimit.y)
      };
      var diff = {
        x: Math.round(scrollToPosition.x - scrollElement.scrollLeft),
        y: Math.round(scrollToPosition.y - scrollElement.scrollTop)
      };
      var step = {
        x: Math.round(diff.x / Math.abs(targetDuration) * 1000 / 16),
        y: Math.round(diff.y / Math.abs(targetDuration) * 1000 / 16)
      };

      var tick = function tick(scrollTop) {
        var scrollLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var diffTick = {
          x: Math.round(scrollToPosition.x - scrollElement.scrollLeft),
          y: Math.round(scrollToPosition.y - scrollElement.scrollTop)
        };

        if (diffTick.x === 0 && diffTick.y === 0) {
          pendingScroll = false;
          return true;
        }

        if (Math.abs(diffTick.x) > 0) {
          scrollElement.scrollLeft += Math.abs(step.x) < Math.abs(diffTick.x) ? step.x : diffTick.x;
        }

        if (Math.abs(diffTick.y) > 0) {
          scrollElement.scrollTop += Math.abs(step.y) < Math.abs(diffTick.y) ? step.y : diffTick.y;
        }

        return requestAnimationFrame(function () {
          return tick(scrollTop, scrollLeft);
        });
      };

      return tick(scrollToPosition);
    };

    children.map(function (el) {
      var href = el.props && el.props.href;
      var self = el.ref && el.ref.current;

      if (!self || !href || href.charAt(0) !== '#') {
        return false;
      }

      var targetElement = href === '#' ? document.body : document.querySelector(href);

      if (targetElement) {
        self.onclick = function (e) {
          return (// eslint-disable-next-line implicit-arrow-linebreak
            onClickHandler(e, targetElement.offsetTop - offsetTop, targetElement.offsetLeft - offsetLeft, // eslint-disable-next-line comma-dangle
            duration)
          );
        };

        targetElements.push(targetElement);
        sourceElements.push(self);
      }

      return true;
    });

    if (targetElements.length) {
      var ScrollEvent = new Event('scroll');
      window.addEventListener('scroll', onScrollHandler, {
        passive: true
      });
      window.dispatchEvent(ScrollEvent);
    }

    return function () {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, [children, className, duration, offsetTop, offsetLeft]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

var _default = ScrollSpy;
exports["default"] = _default;