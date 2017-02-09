import React from 'react';
import { render } from 'react-dom';

import Layout from "./components/Layout";

import { Provider } from "react-redux";
import store from "./store";
import ItemList from "./components/ItemList.js";

// Redux 
const App = function() {
    return (
        <Provider store={store}>
            <Layout></Layout>
        </Provider>
    )
};

render(
    <ItemList></ItemList>,
    document.getElementById('root')
);
