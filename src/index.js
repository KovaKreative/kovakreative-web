import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Project from './components/projects/Project';
import NotFound from './components/notFound';
import Footer from './components/Footer';

import { content as goalContent } from './components/projects/Goal/goalContent';
import { content as openbookContent } from './components/projects/OpenBook/openbookContent';
import { content as geekTriviaContent } from './components/projects/GeekTrivia/geekTriviaContent';

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
    path: "/geektrivia",
    element: <Project title="Geek Trivia Quiz" content={geekTriviaContent} />
  },
  {
    path: "/openbook",
    element: <Project title="Open Book" content={openbookContent} />
  },
  {
    path: "/*",
    element: <NotFound />
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
