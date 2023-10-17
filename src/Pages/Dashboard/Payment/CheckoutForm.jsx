import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price, email, patient ,_id} = booking;
  useEffect(() => {
    fetch("https://doctor-portal-server-mu.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
setSuccess('');
setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email: email,
          },
        },
      });


      if(confirmError){
        setCardError(confirmError.message);
        return;
      }
      if(paymentIntent.status === 'succeeded'){
        console.log('card successfully', card)
      

        // store payment information in the database //
        const payment ={
          price,
          transactionId:paymentIntent.id,
          email,
          bookingId : _id,

        }
        fetch('https://doctor-portal-server-mu.vercel.app/payment',{
          method: 'POST',
          headers: {
             'Content-Type': 'application/json',
             authorization:`bearer ${localStorage.getItem('accessToken')}`
             },
             body: JSON.stringify(payment)


        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.insertedId){
            setSuccess('congratulation your payment successfully');
            setTransactionId(paymentIntent.id);
          }
        })

       
      }
      setProcessing(false);
     

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-info mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <div className="text-red-600">{cardError}</div>
      {
        success && <div>
          <p className="text-green-500">{success}</p>
          <p className="font-bold"> Your TransactionId:{transactionId}</p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;
