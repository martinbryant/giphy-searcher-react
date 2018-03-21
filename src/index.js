import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './store/configureStore'
//import registerServiceWorker from './registerServiceWorker';

const initialState = {
    searchTerm: "",
    searchTermError: "",
    loadedGifList: [],
    newGifs: [],
    gifsToLoad: 5
}

const store = configureStore(initialState);

const root = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>, root);
// registerServiceWorker();
