import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const ReduxProvider = lazy(() => import('../components/ReduxProvider.jsx'));
const ErrorPage = lazy(() => import('../components/ErrorPage.jsx'));
const Profile = lazy(() => import('../components/Profile.jsx'));
const About = lazy(() => import('../components/About.jsx'));
const Posts = lazy(() => import('../components/Posts.jsx'));

import { ABOUT, HOME, PROFILE } from './routes.js';

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <ReduxProvider />,
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