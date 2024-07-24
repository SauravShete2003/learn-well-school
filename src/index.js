import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./views/Home/Home"
import Navbar from './components/Navbar/Navbar';
import About from './views/About/About';
import Academics from './views/Academics/Academics'
import Admission from './views/Admission/Admission';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path : '/navbar',
    element : <Navbar/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
     path : '/academics',
     element : <Academics/>
  },
  {
    path : '/admission',
    element : <Admission/>
  }
])

root.render(<RouterProvider router={router}/>)
