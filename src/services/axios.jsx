import axios from "axios";
const axiosConfig=axios.create(
   {
    baseURL:import.meta.env.VITE_API_URL
   }
)

// axiosConfig.interceptors.request.use(
//    async (config) => {
//      const accessToken = localStorage.getItem('serviceToken');
//      if (accessToken) {
//        config.headers['Authorization'] = `Bearer ${accessToken}`;
//      }
//      return config;
//    },
//    (error) => {
//      return Promise.reject(error);
//    }
//  );
export default axiosConfig