import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Header from './Header/Header';
import Contact from './contact/Contact';
import About from './about/About';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path: "/header",
        element:<Header></Header>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
      
    
  },

])
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
