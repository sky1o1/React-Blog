import * as actionType from '../actionType'

const initState = {
    name: '',
    type: '',
    description: '',
    imageName: '',
    createdAt: '',
    imageUrl: '',
}

const brands = (state = initState, action) => {
    switch (action.type) {
        case actionType.SET_BRANDS:
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default brands