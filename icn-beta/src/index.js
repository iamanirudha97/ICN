import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Elements stripe={stripePromise}>

       <App />

      </Elements>      
    </AuthContextProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);