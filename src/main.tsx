import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'




import {
  createBrowserRouter,

} from "react-router-dom";

import './index.css'

import About from '@/pagas/About';
import Contact from '@/pagas/Contact';
import Pages from '@/pagas/Pages';
import Blog from '@/pagas/Blog';
import Portfolio from '@/pagas/Portfolio';
import Services from '@/pagas/Services';

import { RouterProvider } from 'react-router';
import Home from '@/pagas/Home.tsx';

// import { ThemeProvider } from '@/compounte/povider/them-poider.tsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      // ...existing code...
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "pages",
        Component: Pages
      },
      {
        path: "blog",
        Component: Blog,
      },
      {
        path: "portfolio",
        Component: Portfolio
      },
      {
        path: "services",
        Component: Services
      },
    ]
  },
]);



createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <RouterProvider router={router} />




  </StrictMode>

)


