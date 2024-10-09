import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

AxiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = "Bearer" + " " + token;
  return config;
});

AxiosInstance.interceptors.response.use(
  function (response) {
    if (response.data) {
      console.log(response.data);
    }
    return response;
  },
  function (err) {
    if (err.response.data.message==="unauthorised user" && err.response.status === 401 ) {
        localStorage.removeItem('token')
        window.location.href='/'
    }else if (err.response.status ===404){
        window.location.href('/notFound')
    }
    return Promise.reject(err)
  }
);
