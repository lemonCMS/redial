"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (arr, mapper) {
  var q = Promise.resolve();
  return Promise.all(arr.map(function (v) {
    return q = q.then(function () {
      return mapper(v);
    });
  }));
};

module.exports = exports["default"];