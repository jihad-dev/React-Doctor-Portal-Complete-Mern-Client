import React from "react";

const Review = ({ review }) => {
  const { name, img, des, bg,location } = review;
  return (
    <div className={`card  text-primary-content ${bg}`}>
      <div className="card-body">
        <p>{des}</p>
        <div className="flex items-center gap-6 lg:mt-4">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>

          <div>
            <h2>{name}</h2>
            <h2>{location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
