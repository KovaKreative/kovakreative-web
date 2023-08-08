import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './components/projects/Project';
import Footer from './components/Footer';

import { projectContent as goalContent } from './components/projects/Goal/goalContent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/goal",
    element: <Project title="GOAL" content={goalContent} />
  },
  {
    path: "/goal",
    element: <Project title="GOAL" content={goalContent} />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
