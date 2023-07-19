import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Auth0Provider
    domain="dev-ipwf8ypfebf6xn6t.us.auth0.com"
    clientId="jXiGf13Ftk4EKdecuVhQtaO75aE4Dmes"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
    </BrowserRouter>
);
reportWebVitals();
