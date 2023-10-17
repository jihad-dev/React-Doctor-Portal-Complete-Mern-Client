import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const ReviewData = [
    {
      id: "1",
      name: "Winson Herry",
      location:"California",
      img: people1,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
      bg: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      id: "2",
      name: "Winson Herry",
      location:"California",
      img: people2,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
      bg: "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    },
    {
      id: "3",
      name: "Winson Herry",
      location:"California",
      img: people3,
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed",
      bg: "bg-gradient-to-r from-green-400 to-blue-500",
    },
  ];
  return (
    <section className="lg:mt-16 mt-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-primary font-bold ">Testimonial</h4>
          <p className="text-3xl">What Our Patients Says</p>
        </div>
        <figure>
          <img className="lg:48 w-24" src={quote} alt="quote" />
        </figure>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-16">
        {ReviewData.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
