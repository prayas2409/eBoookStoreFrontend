const axios = require('axios').default;
// const URL = "http://13.234.136.55:3000/";
const URL = "http://localhost:3000/";


export function getMethod(data) {
    return axios.get(URL + data.path);
}
export function postMethod(data) {
    console.log("in http", data.data);
    return axios.post(URL + data.path, data.data);
}