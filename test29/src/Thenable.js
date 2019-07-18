

export default class DoPost {
    /**
       *Creates an instance of Request.
       * @param {Http} httpInst
       * @param {Request} request
       * @memberof Request
       */
    constructor(httpInst, api, request) {
        this.httpInst = httpInst;
        this.api = api;
        this.request = request;
    }

    then(resolve, reject) {
        this.httpInst.post(this.api, this.request).then(resolve, reject)
    }

}

//DoGet
