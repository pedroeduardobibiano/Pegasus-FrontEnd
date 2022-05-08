import axios from 'axios';

const BASE = 'http://localhost:8080';

export const getCategories = async () => {
    let result = [];
    await axios.get(`${BASE}/categories`)
        .then(response => {
            result = response.data;
        });
    return result;
}

export const getProducts = async () => {
    let result = {};
    await axios.get(`${BASE}/products`)
    .then(response => {
        result = {...response.data}
    });
    return result
}
