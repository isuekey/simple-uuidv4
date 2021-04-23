(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.simpleUUId = {}));
}(this, (function (exports) { 'use strict';

  var hexArray = Object.freeze(new Array(256).fill(0).map(function (ele, idx) {
    return idx.toString(16).padStart(2, '0').toLowerCase();
  }));

  var randomIndex = function () {
    return Math.floor(Math.random() * 256);
  };

  var randomHex = function (size) {
    if ( size === void 0 ) size=0;

    return new Array(size).fill(0).map(function (ele) {
      return hexArray[randomIndex()];
    });
  };

  var uuid = function (divider) {
    if ( divider === void 0 ) divider="-";

    return randomHex(4).concat( [divider],
      randomHex(2), [divider],
      randomHex(2), [divider],
      randomHex(2), [divider],
      randomHex(6) ).join('');
  };

  var simpleUUId = {
    hexArray: hexArray,
    randomHex: randomHex,
    uuid: uuid
  };

  exports.default = simpleUUId;
  exports.hexArray = hexArray;
  exports.randomHex = randomHex;
  exports.randomIndex = randomIndex;
  exports.uuid = uuid;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
