import React from "react";
import "./Trips.css";
import { trips } from "../data";

export const Trips = () => {
  
  function getTrips(data) {
    return data.map((item, index) => (
      <div className="trips__item" key={index}>
        <img src={item.img} alt={item.alt} className="trips__img" />
        <div className="item__info">
            <div className="item__title"><img src="./images/geo.svg" alt="geo"/>{item.name}</div>
            <button className="btn btn--outline item__btn">{item.button}</button>
        </div>
      </div>
    ));
  }

  return (
    <div className="trips">
      <div className="trips__container">
        <h2 className="trips__title">Our favorite trips</h2>
        <div className="trips__wrapper">{getTrips(trips)}</div>
      </div>
    </div>
  );
};
