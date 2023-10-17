import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import Loading from "../../Shered/Loading/Loading";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_SK);
console.log(stripePromise)

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const {price,slot,appointmentDate,treatment} = booking;
  if(navigation.state === "loading"){
    return <Loading></Loading>
  }
  console.log(booking);
  return (
    <div>
      <div className="p-10 ">
      <h2>Payment for {treatment}</h2>
      <p className="text-xl">please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
      <div className="w-96 my-12">
      <Elements stripe={stripePromise}>
      <CheckoutForm
      booking={booking}
       />
    </Elements>
      </div>
      </div>
    </div>
  );
};

export default Payment;
