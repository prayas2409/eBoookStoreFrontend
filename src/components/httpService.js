const axios = require('axios').default;
// const url = "htt"

export function getMethod() {
    return axios.get('http://localhost:3000/books?pageNo=1');
}