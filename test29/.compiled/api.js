"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoPost = function () {
    /**
       *Creates an instance of Request.
       * @param {Http} httpInst
       * @param {Request} request
       * @memberof Request
       */
    function DoPost(httpInst, api, request) {
        _classCallCheck(this, DoPost);

        this.httpInst = httpInst;
        this.api = api;
        this.request = request;
    }

    _createClass(DoPost, [{
        key: "then",
        value: function then(resolve, reject) {
            this.httpInst.post(this.api, this.request).then(resolve, reject);
        }
    }]);

    return DoPost;
}();

//DoGet


exports.default = DoPost;
//# sourceMappingURL=Api.js.map