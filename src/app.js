import React from 'react';
import { render } from 'react-dom';

import Layout from "./components/Layout";

import { Provider } from "react-redux";
import store from "./store";


render(
    <Provider store={store}>
        <Layout></Layout>
    </Provider>,
    document.getElementById('root')
);
