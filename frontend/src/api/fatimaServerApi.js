import axios from "axios";
// import { getEnvVariables } from "../helpers/getEnvVariables";
//de esta manera se puede optener la variable de entorno para no tener problemas con los test
// const { VITE_API_FATIMA_URL } = getEnvVariables();

export const fatimaServerApi = axios.create({
    baseURL: import.meta.env.VITE_API_FATIMA_URL

});

//interceptors
fatimaServerApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-auth-token': localStorage.getItem('token')
    }

    return config;
});

export default fatimaServerApi;