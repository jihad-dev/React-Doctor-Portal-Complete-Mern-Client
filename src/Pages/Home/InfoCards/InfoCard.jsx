import React from "react";

const InfoCard = ({ card }) => {
  const { name, bg, des, icon } = card;

  return (
    <div className={`card card-side  shadow-xl ${bg} p-5`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default InfoCard;
