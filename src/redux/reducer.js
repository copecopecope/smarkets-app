// import { Types } from './actions.js'

export default function(state={}, action) {
    return Object.assign({}, state, {
        status: action.status,
        response: action.response,
        error: action.error
    })
}