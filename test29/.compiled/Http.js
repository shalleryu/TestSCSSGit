"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function Http() {
    _classCallCheck(this, Http);

    this.post = function (api, request) {
        console.log(api);
        console.log(request);
        return Promise.resolve({ Status: 1 });
    };
};

exports.default = Http;
//# sourceMappingURL=Http.js.map