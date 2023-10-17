import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const BookingModal = ({ treatment,setTreatment, selectedDate,refetch }) => {
  const date = format(selectedDate, "PP");
  const { name: treatmentName, slots,price } = treatment;
  const {user} = useContext(AuthContext);


  const HandleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const Booking ={
     appointmentDate:date,
     treatment:treatmentName,
     patientName: name,
      email,
      phone,
      slot,
      price
    }
fetch('https://doctor-portal-server-mu.vercel.app/bookings',{
  method:'POST',
  headers:{
    'content-type': 'application/json',

  },
  body: JSON.stringify(Booking)
})
.then(res => res.json())
.then(data => {

  if(data.acknowledged){
    setTreatment(null);
    toast.success('Booking confirmed successfully');
    refetch();
  }
  else{
    toast.error(data.message);
  }

})

  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <h3 className="font-bold text-lg">{treatmentName}</h3>
          <form onSubmit={HandleBooking}>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-300">
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    disabled
                    value={date}
                    className="input input-bordered"
                  />
                </div>
                <select key={slots._id}
                  name="slot"
                  className="select select-bordered w-full mt-3"
                >
                  {slots.map((slot ,index) => (
                    <option  
                    key={index}
                    value={slot}
                    >{slot}</option>
                  ))}
                </select>
                <div className="form-control text-lg">
                  <input
                    type="text"
                    placeholder="Name" defaultValue={user?.displayName} readOnly
                    name="name" required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="email" required
                    name="email" defaultValue={user?.email} readOnly
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="phone Number" required
                    name="phone"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
