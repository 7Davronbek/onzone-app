import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/swiper-navigation.css"
import "./sass/catalog.scss"
import "./sass/product.scss"
import "./sass/secondary.scss"
import "./sass/third.scss"
import "./sass/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

