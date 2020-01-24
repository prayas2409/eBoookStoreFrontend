const axios = require('axios').default;
const URL = "http://35.154.111.231:3000/";

export function getMethod(data) {
    console.log(data.path);
    return axios.get(URL + data.path);
}