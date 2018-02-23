'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _asyncMap = require('asyncMap');

var _asyncMap2 = _interopRequireDefault(_asyncMap);

var _trigger = require('trigger');

var _trigger2 = _interopRequireDefault(_trigger);

exports['default'] = function (name, components, locals) {
  return (0, _asyncMap2['default'])(components, function (component) {
    return (0, _trigger2['default'])(name, component, locals);
  });
};

module.exports = exports['default'];