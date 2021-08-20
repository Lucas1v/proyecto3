import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Drum from "./components/Drum";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Drum />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')

);


reportWebVitals();
