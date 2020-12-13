import { getRequest } from '../config/axios.config.js'

/**
 * pageN
 */
export const getAllUser = (pageNo, pageLimit = 10) => {
    return getRequest(`/user?_  page=${pageNo}&_limit=${pageLimit}`)
}