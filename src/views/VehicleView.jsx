import React from "react";
import { Link } from "react-router-dom";
import "./VehicleView.css";

const VehicleView = ({ vehicle }) => {
  return (
    <div className="VehicleView">
      <h2>{vehicle.name}</h2>
      <p>{vehicle.description}</p>
      <img src={vehicle.image} alt={vehicle.name + " image"} />

      <Link to="/contact" className="contact-button">
        Contactanos
      </Link>

    </div>
  );
};

export default VehicleView;



