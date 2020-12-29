import * as actionType from '../actionType'


export const setIsAuthenticated = (isAuthenticated) => {
    console.log('from action', isAuthenticated)
    return {
        type: actionType.SET_IS_AUTHENTICATED,
        payload: isAuthenticated
    }
}

export const setPhoneNumber = (phoneNumber) => {
    return {
        type: actionType.SET_PHONE_NUMBER,
        payload: phoneNumber
    }
}

export const setUuid = (uuid) => {
    return {
        type: actionType.SET_UUID,
        payload: uuid
    }
}

export const setProfile = (userProfile) => {
    return {
        type: actionType.SET_PROFILE,
        payload: userProfile
    }
}

export const setProfileCompleted = (isProfileCompleted) => {
    return {
        type: actionType.SET_IS_PROFILE_COMPLETED,
        payload: isProfileCompleted
    }
}

export const setBrands = (setBrands) => {
    return {
        type: actionType.SET_BRANDS,
        payload: setBrands
    }
}

