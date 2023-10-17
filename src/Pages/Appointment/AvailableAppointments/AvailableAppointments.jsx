import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import Loading from "../../Shered/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  // https://doctor-portal-server-mu.vercel.app/
  const {data:appointmentOptions=[],refetch,isLoading} = useQuery({
    queryKey:['appointmentOptions',date],
    queryFn: () =>  fetch(`https://doctor-portal-server-mu.vercel.app/v2/appointmentOptions?date=${date}`)
    .then((res) => res.json())
  });
  if(isLoading){
    return <Loading/>;
  }

  // useEffect(() => {
  //   fetch("https://doctor-portal-server-mu.vercel.app/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
  return (
    <section className="mt-16">
      <p className="text-center text-primary font-bold">
        Available Appointments on {format(selectedDate, "PP")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16  mx-4">
        {
        appointmentOptions.map( (option,i )=> 
          <AppointmentOption key={i} option={option} setTreatment={setTreatment} ></AppointmentOption>)
        
        }
      </div>

    {  treatment && <BookingModal
     treatment={treatment}
     setTreatment={setTreatment}
     selectedDate={selectedDate}
     refetch={refetch}
     ></BookingModal>}
    </section>
  );
};

export default AvailableAppointments;
