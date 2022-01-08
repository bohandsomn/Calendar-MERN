import { combineReducers } from 'redux'

const initialStateList = []

const listReducer = (state = initialStateList, action) => {
    switch (action.type) {
        case 'PUSH':
            return [
                ...state,
                action.payload
            ]

        case 'PUT': 
            return [
                ...action.payload
            ]

        case 'REMOVE_ONE': 
            return state.filter( (_, ind) => ind !== action.payload )

        default:
            return state
    }
}

const initialStateKey = ''

const keyReduser = (state = initialStateKey, action) => {
    switch (action.type) {
        case 'CHANGE_KEY':
            return action.payload

        default:
            return state
    }
}

export default combineReducers({
    listReducer, 
    keyReduser
})