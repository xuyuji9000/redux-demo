import React from 'react';
import { render } from 'react-dom';

import Layout from "./components/Layout";

import { Provider } from "react-redux";
import store from "./store";
import Form from "./components/Form.js";


render(
    <Form></Form>,
    document.getElementById('root')
);
