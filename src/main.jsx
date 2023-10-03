import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import AddUser from './addUser.jsx';
import UpdateUser from './updateUser.jsx';
import Home from './Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path: '/addUser',
        element: <AddUser></AddUser>
      },
      {
        path: '/updateUser',
        element: <UpdateUser></UpdateUser>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
