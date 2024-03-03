import React from 'react'
import ReactDOM from 'react-dom/client'
import { AccommodationProvider } from './components/Context/Context.jsx';


import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AccommodationProvider>
    <RouterProvider router={router} />
    </AccommodationProvider>
  </React.StrictMode>,
)
