import { Types } from './actions.js'

function fetch(key, state, action) {
    return Object.assign({}, state, {
        [key]: {
            status: action.status,
            response: action.response,
            error: action.error
        }
    })
}

export default function(state, action) {
    if (action.type === Types.TopEvents) {
        return fetch('home', state, action)
    } else if (action.type === Types.Event) {
        return fetch('event', state, action)
    }
    return state
}