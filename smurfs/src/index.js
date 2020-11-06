import React from "react";
import ReactDOM from "react-dom";

// ------- import styles --------------
import "./index.css";

// -------- import redux functions ----------
import { createStore, applyMiddleware } from 'redux'

// --------- import Logger ---------------
import logger from 'redux-logger' 

// ---------- import Provider ---------------
import { Provider } from 'react-redux';

// ---------- import thunk --------------
import thunk from 'redux-thunk';

// -------- import components ----------------
import App from "./components/App";

// -------- import reducer function --------------
import { reducer } from './store/reducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById("root"));
