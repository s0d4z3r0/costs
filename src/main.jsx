import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Pages
import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import Contact from './components/pages/Contact.jsx'
import NewProject from './components/pages/NewProject.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx'


// Configurações de Rotas DOM
import {
  createHashRouter, RouterProvider
} from "react-router-dom";
import Projects from "./components/pages/Projects.jsx";

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/company',
        element: <Company/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/newproject',
        element: <NewProject/>
      },
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    
);
