import * as actionType from '../actionType'

const initState = {
    isAuthenticated: '',
}

const authenticate = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: action.payload,
            }
        default:
            return state
    }
}

export default authenticate;