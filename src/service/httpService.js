import URL from '../Constants/Constants'

const axios = require('axios').default;
// const URL = "http://13.234.136.55:3000/";

export function getMethod(data) {
    console.log(data.path);
    return axios.get(URL + data.path);
}