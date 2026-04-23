// index.js или main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./Redux/redux-store.js";
import App from './App.jsx';
import './index.css';

// Создаем root ОДИН раз
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим ОДИН раз - Redux сам будет обновлять компоненты
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);