import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import './index.css';
import './variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename='/car-search-app'>
          <App />
        </BrowserRouter>
      </PersistGate>
      </Provider>
  </React.StrictMode>
);