import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero bg-base-300 lg:p-5 my-12">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-64">
        <figure>
          <img
            src={chair}
            className=" rounded-lg shadow-2xl lg:w-[600px] sm:w-1/2"
            alt="chair-img"
          />
        </figure>

        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
