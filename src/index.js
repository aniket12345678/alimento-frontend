import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';

import reportWebVitals from './reportWebVitals';
import { persistor, store } from './app/redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary fallback={<div>some error</div>}>
        <App />
        <ToastContainer />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
reportWebVitals();
