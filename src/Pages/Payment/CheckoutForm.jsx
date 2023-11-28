/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const CheckoutForm = ({amount ,refetch}) => {
    console.log(amount);
    const [error, setError]= useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const {user}= useAuth()
   const stripe = useStripe();
    const elements = useElements();
    const axiosSecure= useAxiosSecure()
    const navigate = useNavigate()
  
    const Price = amount?.price
    console.log(Price);
   
    useEffect(()=>{
      if(Price >0){
        axiosSecure.post('/create-payment-intent', {price: Price})
      .then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
      }
  
    },[axiosSecure, Price])
  
      const handelSubmit = async (event)=>{
          event.preventDefault()
          if(!stripe || !elements){
              return
          }
  
          const card = elements.getElement(CardElement)
  
          if(card === null){
              return
          }
  
        const {error, paymentMethod}= await stripe.createPaymentMethod({
          type:'card',
          card
        })
        if(error){
          console.log('payment error', error);
          setError(error.message)
        }
         else{
          console.log('payment method', paymentMethod);
          setError('')
        }
    // confirm cardPayment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card: card,
            billing_details:{
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous'
            }
          }
        })
  
        if(confirmError){
          console.log('confirm error');
        }
        else{
          console.log('payment intent', paymentIntent);
          if(paymentIntent.status==='succeeded'){
            console.log('successful', paymentIntent.id);
            setTransactionId(paymentIntent.id)
  
            const payment = {
              description:amount?.description,
              title:amount?.title,
              name:amount?.name,
              image:amount?.image,
              email:user.email,
              price:Price,
              transactionId: paymentIntent.id ,
              date: new Date(),  
            }
           const res = await axiosSecure.post('/payment', payment)
           console.log('payment save',res.data);
           refetch()
           if(res.data?.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for your payment",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/dashboard/myEnrollClass')
           }
          }
        }
      }
    return (
        <form className=" mt-4 lg:mt-10 w-full lg:w-3/6 mx-auto" onSubmit={handelSubmit}>
        <CardElement
       options={{
         style: {
           base: {
             fontSize: '16px',
             color: '#424770',
             
             '::placeholder': {
               color: '#aab7c4',
             },
           },
           invalid: {
             color: '#9e2146',
           },
         },
       }}
     />
     <button className=" py-3 text-center px-4 inline-flex justify-center items-center gap-2 rounded-md bg-green-400 border border-transparent font-semibold text-white hover:text-white hover:bg-red-200 focus:outline-none focus:ring-2 ring-offset-white focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 my-6" type="submit" disabled={!stripe || !clientSecret}>
       Pay
     </button>
     <p className="my-2 text-red-600">{error}</p>
      {transactionId && <p className="text-green-500">
        Your transaction id: {transactionId}
       </p>}
      </form>
    );
};

export default CheckoutForm;