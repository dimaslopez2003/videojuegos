import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Populares from './routes/Populares';
import reportWebVitals from './reportWebVitals';
import Novedades from './routes/Novedades';
import Ofertas from './routes/Ofertas';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/populares",
    element: <Populares />,
  },
  {
    path: "/novedades",
    element: <Novedades />,
  },
  {
    path: "/ofertas",
    element: <Ofertas />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
