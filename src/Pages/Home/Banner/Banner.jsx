import React from "react";
import chair from "../../../assets/images/chair.png";
import Button from "../../../components/Button/Button";
const Banner = () => {
  return (
    <div className="hero bg-base-300 backgroundImage lg:p-8 w-full  ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl " />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
         <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
