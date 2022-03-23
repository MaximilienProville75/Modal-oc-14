"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUp = void 0;

var _react = _interopRequireDefault(require("react"));

var _fi = require("react-icons/fi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PopUp = props => {
  return props.trigger ? /*#__PURE__*/_react.default.createElement("div", {
    className: "fixed top-0 left-0 w-full h-screen flex justify-center items-center ".concat(props.bgView ? "bg-purple-900/50" : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "relative p-6 w-full max-w-xl bg-white rounded-xl border-4 border-purple-500 shadow-lg shadow-purple-500 ".concat(props.animationOn ? "animate-bounce" : "")
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "absolute right-4 top-4 text-3xl text-purple-500 font-extrabold ",
    onClick: () => props.setTrigger(false)
  }, !props.closeIcon ? /*#__PURE__*/_react.default.createElement(_fi.FiX, null) : props.closeIcon), props.children)) : null;
};

exports.PopUp = PopUp;