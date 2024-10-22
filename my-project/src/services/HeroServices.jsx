
import Axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/'

export const heroService = Axios.create({
    baseURL: baseUrl,
    // headers: {
    //     Authorization: `Bearer ${localStorage.getItem("access_token")}`
    // }
});