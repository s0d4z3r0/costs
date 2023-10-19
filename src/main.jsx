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
  createBrowserRouter, RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/costs',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/costs',
        element: <Home/>
      },
      {
        path: '/costs/company',
        element: <Company/>
      },
      {
        path: '/costs/contact',
        element: <Contact/>
      },
      {
        path: '/costs/newproject',
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
