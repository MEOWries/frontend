import axios from "axios";
import Cookies from "js-cookie";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
    withCredentials:true,
    timeout: 8000,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get('accessToken')
        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error)
    }
)

export default axiosInstance;