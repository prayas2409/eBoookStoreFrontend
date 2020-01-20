const axios = require('axios').default;
// const url = "htt"

export function getMethod() {
    return axios.get('http://192.168.0.127:3000/books?pageNo=1');
}

export function getFiltered(minimum,maximum) {
    return axios({
        method:"GET",
        url:'http://192.168.0.127:3000//sortBooks?pageNo=1',
        data:{
            min:({minimum}),
            max:{maximum}
        }
    });
}