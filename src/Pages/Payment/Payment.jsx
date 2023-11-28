/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
  const { id } = useParams();
  console.log(id);
  const axiosSecure = useAxiosSecure();
  const { data: amount = [] , refetch } = useQuery({
    queryKey: ["amount"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/class/${id}`);
      return res.data;
    },
  });
  return (
    <div>
        <h1 className="text-center mt-3 text-2xl font-bold">Please payment For Your class</h1>
      <div>
        <Elements stripe={stripePromise}>
         <CheckoutForm amount={amount} refetch={refetch}>

         </CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
