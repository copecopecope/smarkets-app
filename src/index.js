import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './layout/index.css';
import 'normalize.css';

import App from './components/App';
import configureStore from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();
