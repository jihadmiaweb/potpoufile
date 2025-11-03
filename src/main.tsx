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

import Portfolio from '@/pagas/Portfolio';
import Services from '@/pagas/Services';

import { RouterProvider } from 'react-router';
import Home from '@/pagas/Home.tsx';
import CV from '@/pagas/CV.tsx';
import Getcv from '@/pagas/GETcv.tsx';
import HireMeSection from '@/pagas/HireMeSection.tsx';

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
        path: "portfolio",
        Component: Portfolio
      },
      {
        path: "services",
        Component: Services
      },
      {
        path: "CV",
        Component: CV
      },
      {
        path: "Getcv",
        Component: Getcv
      },

      {
        path: "HireMeSection",
        Component: HireMeSection
      },
    ]
  },
]);



createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <RouterProvider router={router} />




  </StrictMode>

)


