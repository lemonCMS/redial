(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./propName"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./propName"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propName);
    global.trigger = mod.exports;
  }
})(this, function (_exports, _propName) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  _propName = _interopRequireDefault(_propName);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(name, components, locals) {
    var promises = (Array.isArray(components) ? components : [components]). // Filter out falsy components
    filter(function (component) {
      return component;
    }) // Get component lifecycle hooks
    .map(function (component) {
      return {
        component: component,
        hooks: component.default ? component.default[_propName.default] : component[_propName.default]
      };
    }) // Filter out components that haven't been decorated
    .filter(function (_ref) {
      var hooks = _ref.hooks;
      return hooks;
    }) // Calculate locals if required, execute hooks and store promises
    .map(function (_ref2) {
      var component = _ref2.component,
          hooks = _ref2.hooks;
      var hook = hooks[name];

      if (typeof hook !== 'function') {
        return;
      }

      try {
        return typeof locals === 'function' ? hook(locals(component)) : hook(locals);
      } catch (err) {
        return Promise.reject(err);
      }
    });
    return Promise.all(promises);
  };

  _exports.default = _default;
});