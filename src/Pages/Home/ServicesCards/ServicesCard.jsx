import React from "react";

const ServicesCard = ({serviceCard}) => {
    const {name,icon,des,bg} = serviceCard;
  return (
    <div className={`card  shadow-xl ${bg}`}>
      <figure className="pt-10">
        <img
          src={icon}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{des}</p>

      </div>
    </div>
  );
};

export default ServicesCard;
