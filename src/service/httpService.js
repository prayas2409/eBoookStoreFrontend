const axios = require('axios').default;
// TODO: const url = "htt "
const URL="http://172.31.18.122:3000/"

export function getMethod(data) {
    console.log(data.path);

    return axios.get( URL+ data.path);
}