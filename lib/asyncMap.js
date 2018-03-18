(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.asyncMap = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;

  var _default = function _default(arr, mapper) {
    var q = Promise.resolve();
    return Promise.all(arr.map(function (v) {
      return q = q.then(function () {
        return mapper(v);
      });
    }));
  };

  _exports.default = _default;
});