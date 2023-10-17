import React from "react";
import doctorImg  from '../../../assets/images/doctor-small.png'
import Button from "../../../components/Button/Button";

const MakeAppointment = () => {
  return (
    <div className="hero bg-base-200 lg:mt-24 mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctorImg}
          className="lg:w-1/2 lg:h-[500px] -mt-24 hidden lg:block rounded-lg shadow-2xl d-none"
        />
        <div>
            <h4 className="text-lg text-primary font-bold mb-3">Appointment</h4>
          <h1 className="lg:text-4xl font-bold">Make an appointment Today</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
        <Button>Appointment</Button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
