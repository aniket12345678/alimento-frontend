import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { persistor, store } from './app/redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary fallback={<div>some error</div>}>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);
reportWebVitals();
