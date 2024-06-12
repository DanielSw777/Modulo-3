import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthProvider';
import CarritoProvider from './Context/CarritoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <CarritoProvider>
                <App />
            </CarritoProvider>
        </AuthProvider>
    </React.StrictMode>
);

reportWebVitals();
