import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import './components/style/index.css';
import rootReducer from './reducer/rootReducer';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({ reducer: rootReducer });

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
