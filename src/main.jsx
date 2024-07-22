import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import vehicles from "./data/vehicles";
import VehicleView from "./views/VehicleView";
import ContactForm from "./views/ContactForm"; // Importa el componente del formulario de contacto
import SolicitudApi from './components/SolicitudApi';
const routes = [
  {
    path: "/",
    element: <App />,
    
  },
  
  
  {
    path: "/contact",
    element: <ContactForm />, // Define la ruta para el formulario de contacto
  },


  
];

vehicles.forEach((vehicle) => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle} />,
  });
});

const router = createBrowserRouter(routes);

  <div>
    <h1>My App</h1>
    <SolicitudApi />
  </div>


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


  
