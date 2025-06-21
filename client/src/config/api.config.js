// api/ApiManager.ts
import axios from 'axios';

const ApiManager = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE,
    withCredentials: true,

});

export default ApiManager;