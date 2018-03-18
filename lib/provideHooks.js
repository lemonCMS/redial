(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./propName", "./propNameAuth"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./propName"), require("./propNameAuth"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propName, global.propNameAuth);
    global.provideHooks = mod.exports;
  }
})(this, function (_exports, _propName, _propNameAuth) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propName = _interopRequireDefault(_propName);
  _propNameAuth = _interopRequireDefault(_propNameAuth);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(hooks) {
    return function (ComposedComponent) {
      if (hooks.authorized !== 'undefined') {
        var authHooks = {};
        authHooks.authorized = hooks.authorized;
        ComposedComponent[_propNameAuth.default] = authHooks;
        delete hooks.authorized;
      }

      if (Object.keys(hooks).length > 0) {
        ComposedComponent[_propName.default] = hooks;
      }

      return ComposedComponent;
    };
  };

  _exports.default = _default;
});