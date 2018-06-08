import axios from 'axios'

import { Status } from '../actions'

function url(endpoint) {
    return `https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0${endpoint}`
}

export default store => next => action => {
    if (!action.API_CALL) {
        return next(action)
    }

    let actionWith = (status, data) => Object.assign({}, action, { status, ...data })

    next(actionWith(Status.Requesting))

    axios.get(url(action.API_CALL.endpoint))
    .then(response => {
        next(actionWith(Status.Success, { response: response.data }))
    })
    .catch(error => {
        next(actionWith(Status.Failure, { error }))
    })
}