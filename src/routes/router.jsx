import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App.jsx';
import ErrorPage from '../components/ErrorPage.jsx';
import Profile from '../components/Profile.jsx';
import About from '../components/About.jsx';
import Posts from '../components/Posts.jsx';

import { ABOUT, HOME, PROFILE } from './routes.js';

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME,
        element: <Posts />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: ABOUT,
        element: <About />,
      },
    ]
  },
])