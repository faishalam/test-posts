
import Axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const heroService = Axios.create({
    baseURL: baseUrl     
});