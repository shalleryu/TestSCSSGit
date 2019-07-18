"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Response = exports.Request = exports.api = undefined;

var _regeneratorRuntime = require("regenerator-runtime");

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _Http = require("./Http");

var _Http2 = _interopRequireDefault(_Http);

var _Thenable = require("./Thenable");

var _Thenable2 = _interopRequireDefault(_Thenable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var api = exports.api = "hello world";

/**
 *请求
 *
 * @export
 * @class Requests
 */

var Request = exports.Request = function Request() {
  _classCallCheck(this, Request);
};

/**
 *响应
 *
 * @export
 * @class Response
 */


var Response = exports.Response = function Response() {
  _classCallCheck(this, Response);
};

/**
 *
 *
 * @export
 * @param {Http} httpInst
 * @param {Request} request
 * @returns {Response}
 */


exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee(httpInst, request) {
    var response;
    return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _Thenable2.default(httpInst, api, request);

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function GetResponse(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return GetResponse;
}();
//# sourceMappingURL=GetResponse.js.map