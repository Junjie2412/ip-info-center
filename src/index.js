import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import searchReducer from './store/reducers/uploadFilesReducer';
import tabReducer from './store/reducers/tabReducer';
import geolocationReducer from './store/reducers/geolocationReducer';
import tradeDataReducer from "./store/reducers/tradeDataReducer";

const composeEnhancers = compose;

const rootReducer = combineReducers({
    searchReducer: searchReducer,
    tabReducer: tabReducer,
    geolocationReducer: geolocationReducer,
    tradeDataReducer: tradeDataReducer,
    uploadFilesReducer: searchReducer
});

const store = createStore(rootReducer, composeEnhancers (
    applyMiddleware(thunk)
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
