import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Files from './screens/Files';
import Commits from './screens/Commits';
import Branches from './screens/Branches';
import PullRequests from './screens/PullRequests';
import DiffView from './screens/DiffView';
import GraphView from './screens/GraphView';
import Settings from './screens/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'files',
        element: <Files />
      },
      {
        path: 'commits',
        element: <Commits />
      },
      {
        path: 'branches',
        element: <Branches />
      },
      {
        path: 'pullrequests',
        element: <PullRequests />
      },
      {
        path: 'diffview',
        element: <DiffView />
      },
      {
        path: 'graphView',
        element: <GraphView />
      },
      {
        path: 'settings',
        element: <Settings />
      }
    ]
  },
  {
    path: 'about',
    element: <div>About</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
