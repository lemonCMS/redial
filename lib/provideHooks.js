'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _propName = require('./propName');

var _propName2 = _interopRequireDefault(_propName);

var _propNameAuth = require('./propNameAuth');

var _propNameAuth2 = _interopRequireDefault(_propNameAuth);

exports['default'] = function (hooks) {
  return function (ComposedComponent) {

    if (hooks.authorized !== 'undefined') {
      var authHooks = {};
      authHooks.authorized = hooks.authorized;
      ComposedComponent[_propNameAuth2['default']] = authHooks;
      delete hooks.authorized;
    }
    if (Object.keys(hooks).length > 0) {
      console.log('Hooks', hooks);
      ComposedComponent[_propName2['default']] = hooks;
    }
    return ComposedComponent;
  };
};

module.exports = exports['default'];