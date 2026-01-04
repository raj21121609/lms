import axios from "axios";

const api = axios.create({
    baseURL:'http://127.0.0.1:8000/'
})

api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('access')
        if (token){
            config.headers.Authorization = `Bearer ${token}`
             
        }
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    res=>res,
    async (error)=>{
        const originalRequest = error.config
        if (error.response?.status === 401 && !error.config._retry){
            try {
                originalRequest._retry= true
                const refresh = localStorage.getItem('refresh')
                const res = await axios.post("http://127.0.0.1:8000/api/token/refresh/",
                    {refresh}
                )
                localStorage.setItem('access',res.data.access)
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`
                return api(originalRequest)
            } catch (error) {
                localStorage.removeItem('access')
                localStorage.removeItem('refresh')
            }
        }
        return Promise.reject(error)
    }
)

export default api