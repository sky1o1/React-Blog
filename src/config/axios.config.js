import axios from 'axios';

const api = axios.create({
    baseURL: `https://dummyapi.io/data/api/user?page=1&limit=50`,
    headers: {
        'app-id': process.env.REACT_APP_APP_ID,
        Accept: 'application/json',
    }
})


export const getRequest = (url, headers = true) => {
    return api.get(url)
}

export const postRequest = (url, data, headers = true) => {
    return api.post(url, data)
}

export const putRequest = (url, data, headers = true) => {
    return api.put(url, data)
}

export const patchRequest = (url, data, headers = true) => {
    return api.patch(url, data)
}

export const deleteRequest = (url, headers = true) => {
    return api.delete(url)
}