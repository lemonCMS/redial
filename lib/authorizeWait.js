(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./asyncMap", "./authorize"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./asyncMap"), require("./authorize"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.asyncMap, global.authorize);
    global.authorizeWait = mod.exports;
  }
})(this, function (_exports, _asyncMap, _authorize) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _asyncMap = _interopRequireDefault(_asyncMap);
  _authorize = _interopRequireDefault(_authorize);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(name, components, locals) {
    return (0, _asyncMap.default)(components, function (component) {
      return (0, _authorize.default)(name, component, locals);
    });
  };

  _exports.default = _default;
});