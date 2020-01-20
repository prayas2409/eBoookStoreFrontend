const axios = require('axios').default;
// TODO: const url = "htt "

export function getMethod(data) {
    return axios.get('http://localhost:3000/'+data.path);
}