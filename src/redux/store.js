import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer.js';
import api from './middleware/api.js'

export default function configureStore() {
    return createStore(
        reducer,
        {},
        applyMiddleware(api)
    )
}