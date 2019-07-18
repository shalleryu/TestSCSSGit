export default class Http {

    post = (api, request) => {
        console.log(api);
        console.log(request);
        return Promise.resolve({ Status: 1 });
    }
}