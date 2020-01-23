const axios = require('axios').default;
const URL = "http://15.206.75.134:3000/";

export function getMethod(data) {
    console.log(data.path);
    return axios.get(URL + data.path);
}