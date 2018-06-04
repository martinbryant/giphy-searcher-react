import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './store/configureStore'
import { getTrendingGifsStarted } from './actions/actions'
//import registerServiceWorker from './registerServiceWorker';

const initialState = {
    searchTerm: '',
    searchError: '',
    gifsRequired: 5,
    loadedGifList: [],
    loadingError: '',
    loadingStatus: false
}

const store = configureStore(initialState);
store.dispatch(getTrendingGifsStarted());

const root = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>, root);
// registerServiceWorker();
