(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./provideHooks", "./trigger", "./triggerWait", "./authorize", "./authorizeWait"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./provideHooks"), require("./trigger"), require("./triggerWait"), require("./authorize"), require("./authorizeWait"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.provideHooks, global.trigger, global.triggerWait, global.authorize, global.authorizeWait);
    global.index = mod.exports;
  }
})(this, function (_exports, _provideHooks, _trigger, _triggerWait, _authorize, _authorizeWait) {
  "use strict";

  _exports.__esModule = true;
  _exports.authorizeWait = _exports.authorize = _exports.triggerWait = _exports.trigger = _exports.provideHooks = void 0;
  _provideHooks = _interopRequireDefault(_provideHooks);
  _exports.provideHooks = _provideHooks.default;
  _trigger = _interopRequireDefault(_trigger);
  _exports.trigger = _trigger.default;
  _triggerWait = _interopRequireDefault(_triggerWait);
  _exports.triggerWait = _triggerWait.default;
  _authorize = _interopRequireDefault(_authorize);
  _exports.authorize = _authorize.default;
  _authorizeWait = _interopRequireDefault(_authorizeWait);
  _exports.authorizeWait = _authorizeWait.default;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});