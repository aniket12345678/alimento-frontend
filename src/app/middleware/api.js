import axios from "axios";
import { toastMessage } from "../config/methods";

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

API.interceptors.response.use(res => res, (error) => {
    toastMessage('error', error.response.data.message);
    return error;
})

export { API };