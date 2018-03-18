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
  _exports.default = void 0;
  _provideHooks = _interopRequireDefault(_provideHooks);
  _trigger = _interopRequireDefault(_trigger);
  _triggerWait = _interopRequireDefault(_triggerWait);
  _authorize = _interopRequireDefault(_authorize);
  _authorizeWait = _interopRequireDefault(_authorizeWait);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var obj = {};
  obj.provideHooks = _provideHooks.default;
  obj.trigger = _trigger.default;
  obj.triggerWait = _triggerWait.default;
  obj.authorize = _authorize.default;
  obj.authorizeWait = _authorizeWait.default;
  var _default = obj;
  _exports.default = _default;
});