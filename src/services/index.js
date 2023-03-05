import axios from 'axios';
const getAllProducts = (signal) => {
    let result = axios.get('https://my-json-server.typicode.com/benirvingplt/products/products', { signal: signal })
        .then(function (response) {
            // handle success
            return response.data;
        })
        .catch(function (error) {
            // handle error
            return error;
        })
    return result
}
export { getAllProducts }