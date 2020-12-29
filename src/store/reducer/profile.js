import * as actionType from '../actionType'

const initState = {
    fullName: '',
    email: '',
    gender: '',
    imageName: '',
    createdAt: '',
    imageUrl: '',
    phoneNumber: '',
    id: '',
    isProfileCompleted: ''
}

const profile = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.payload
            }
        case actionType.SET_UUID:
            return {
                ...state,
                id: action.payload
            }
        case actionType.SET_PROFILE:
            return {
                ...action.payload,
            }
        case actionType.SET_IS_PROFILE_COMPLETED:
            return {
                ...state,
                isProfileCompleted: action.payload
            }
        default:
            return state
    }
}

export default profile
