import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer.js';
import api from './middleware/api.js'

const initialState = {
    home: {},
    event: {}
}

export default function configureStore() {
    return createStore(
        reducer,
        initialState,
        applyMiddleware(api)
    )
}