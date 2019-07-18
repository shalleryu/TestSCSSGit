"use strict";

var _Http = require("./Http");

var _Http2 = _interopRequireDefault(_Http);

var _GetResponse = require("./GetResponse");

var _GetResponse2 = _interopRequireDefault(_GetResponse);

var _q = require("q");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var http = new _Http2.default();

var getData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, status;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return (0, _GetResponse2.default)(http, { Type: 'test' });

                    case 2:
                        response = _context.sent;
                        status = response.Status;

                        console.log(status);

                    case 5:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getData() {
        return _ref.apply(this, arguments);
    };
}();

getData();
//# sourceMappingURL=main.js.map