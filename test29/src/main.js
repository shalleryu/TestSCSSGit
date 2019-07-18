import Http from "./Http";
import GetResponse from "./GetResponse";
import { async } from "q";
let http = new Http();

let getData = async () => {
    let response = await GetResponse(http, { Type: 'test' });
    let status = response.Status;
    console.log(status);
}

getData();