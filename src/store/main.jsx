import React from 'react';
import {createRoot} from 'react-dom/client';
import StoreApp from './Storefront.jsx';
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreApp />
  </React.StrictMode>,
);
