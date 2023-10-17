import React from 'react';

const AppointmentOption = ({option,setTreatment}) => {
    const {name,slots,price} = option;
    return (
        <div className="card bg-base-300 text-primary-content">
        <div className="card-body text-center">
          <h2 className="  text-secondary font-bold">{name}</h2>
          <p className='text-primary'>{slots.length > 0 ? slots[0] : "try another day"}</p>
          <p className='text-primary'>price:${price}</p>
          <p className='text-primary'> {slots.length } {slots.length > 1 ?  "spaces" : "space"} Available</p>
          <div className="card-actions justify-center ">
          <label  disabled={slots.length === 0 } onClick={() => setTreatment(option) }  htmlFor="booking-modal" className="btn btn-primary">Book Appointment</label>
     
    </div>
        </div>
      </div>
    );
};

export default AppointmentOption;