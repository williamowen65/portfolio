import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './context/store';
import './assets/resets.css'
import './assets/global.scss'

const Layer = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layer />
    </Provider>
  </React.StrictMode>
);


