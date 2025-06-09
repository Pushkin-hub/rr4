import axios from "axios";

// const baseUrl = 'https://meowfacts.herokuapp.com/';
const baseUrl = 'https://openLibrary.org/';

const instance = axios.create ({
    baseURL: baseUrl
})
export default instance;