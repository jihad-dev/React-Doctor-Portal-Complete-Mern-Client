import React from "react";
import img from "../../../assets/images/treatment.png";
import Button from "../../../components/Button/Button";

const BannerCard = () => {
  return (
    <div className="hero lg:mt-20 mt-16  bg-base-200 p-8">
      <div className="hero-content flex-col lg:flex-row lg:gap-14">
        <img
          src={img}
          className="lg:w-1/2 lg:h-96 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="lg:text-5xl text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
          <p className="py-6 ">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
      <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
