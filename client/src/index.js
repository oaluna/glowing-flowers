import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ParallaxProvider } from 'react-scroll-parallax';

import { store, persistor } from './redux/store';

import App from './App';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
