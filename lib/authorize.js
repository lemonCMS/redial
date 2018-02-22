'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _propNameAuth = require('./propNameAuth');

var _propNameAuth2 = _interopRequireDefault(_propNameAuth);

exports['default'] = function (name, components, locals) {
  var promises = (Array.isArray(components) ? components : [components]).

  // Filter out falsy components
  filter(function (component) {
    return component;
  })

  // Get component lifecycle hooks
  .map(function (component) {
    return { component: component, hooks: component[_propNameAuth2['default']] };
  })

  // Filter out components that haven't been decorated
  .filter(function (_ref) {
    var hooks = _ref.hooks;
    return hooks;
  })

  // Calculate locals if required, execute hooks and store promises
  .map(function (_ref2) {
    var component = _ref2.component;
    var hooks = _ref2.hooks;

    var hook = hooks[name];

    if (typeof hook !== 'function') {
      return;
    }

    try {
      var authorized = typeof locals === 'function' ? hook(locals(component)) : hook(locals);

      return authorized ? Promise.resolve() : Promise.reject('not authorized');
    } catch (err) {
      return Promise.reject(err);
    }
  });

  return Promise.all(promises);
};

module.exports = exports['default'];