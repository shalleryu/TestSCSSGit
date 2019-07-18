import regeneratorRuntime from "regenerator-runtime";
import Http from "./Http";
import DoPost from "./Thenable";

export const api = "hello world";

/**
 *请求
 *
 * @export
 * @class Requests
 */
export class Request {

    /**
     *类型
     *
     * @memberof Request
     */
    Type;
}

/**
 *响应
 *
 * @export
 * @class Response
 */
export class Response {

    /**
     *状态
     *
     * @memberof Response
     * @type {number}
     */
    Status;
}

/**
 *
 *
 * @export
 * @param {Http} httpInst
 * @param {Request} request
 * @returns {Response}
 */
export default async function GetResponse(httpInst, request) {
    let response = await new DoPost(httpInst, api, request);
    return response;
}