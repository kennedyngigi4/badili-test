import axios from 'axios';

export function getAllProducts(){
    const res = axios.get('https://fakestoreapi.com/products');
    return res;
}