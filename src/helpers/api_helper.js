/* eslint-disable prettier/prettier */
import axios from 'axios'
// import { refreshToken } from "./jwt-token-access/accessToken";
import getAccessToken from './jwt-token-access/accessToken'

//calling refreshAccessToken checks the expiration. if it is expired get a new token
// refreshToken();
//pass new generated access token here
// const token = getAccessToken();
// console.log("token", token);

//apply base url for axios
const API_URL = 'https://udanay-backend.onrender.com/api/v1'

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.interceptors.request.use(
  async (config) => {
    // Get the access token
    const token = getAccessToken()

    // Set the token in the request headers
    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function postFormData(url, formData, config = {}) {
  // Set appropriate headers for multipart/form-data
  config = {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...config.headers,
    },
  }

  // Make the POST request using axios
  return axiosApi.post(url, formData, config).then((response) => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function patch(url, data, config = {}) {
  return axiosApi.patch(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data)
}

//-------------------------------------------------------------------------------------
