import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EnrollSingleDetails = () => {
 const AxiosPublic = useAxiosPublic()
 const {id}= useParams()
 console.log(id);
 const {user}= useAuth()
 const [title , setTile] = useState([])
  
 useEffect(()=>{
    AxiosPublic.get(`/payment/classes/${id}`)
    .then(res=>{
     console.log(res.data.title
        );
     setTile(res.data?.title
        )

    })
},[AxiosPublic, id])

    const {
        register,
        reset,
        handleSubmit,
      } = useForm()


      const onSubmit = async (data) =>{ 
        console.log(data);
        const feedbackInfo ={
            rating: data.rating,
            description: data.description,
            name:user?.displayName,
            image:user?.photoURL,
            title: title
        }
        const res = await AxiosPublic.post('/feedback', feedbackInfo)
        if(res.data.insertedId){
            reset()
            Swal.fire({
        position: "top-center",
        icon: "success",
       title: "Your Feedback has been saved",
       showConfirmButton: false,
       timer: 1500
      });
          }

      }
    return (
        <div>
           <h1 className="text-center text-2xl font-bold mt-4"> Please Provide Your Feedback </h1> 

           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mx-auto max-w-2xl sm:grid grid-cols-3 sm:space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
     
      <div className="pb-2 sm:pb-0 sm:flex-[1_0_0%]">
        <label htmlFor="hs-hero-name-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Rating</span></label>
        <input type="number"  {...register("rating",{required: true})} id="hs-hero-name-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder=" Rating"/>
      </div>
      
      <div className="pt-2 sm:pt-0 sm:pl-3 border-t border-gray-200 sm:border-t-0 sm:border-l sm:flex-[1_0_0%] dark:border-gray-700">
        <label htmlFor="hs-hero-email-1" className="block text-sm font-medium dark:text-white"><span className="sr-only">Description</span></label>
        <textarea {...register("description",{required: true})} id="hs-hero-email-1" className="py-3 px-4 block w-full border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-transparent dark:text-gray-400" placeholder="Description" cols="20" rows="0">

        </textarea>
      </div>
      
    </div>
    <div className="text-center">
     <button type="submit" className=" text-center mx-auto py-3 px-4 flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-white bg-green-500 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
    
     Send
    </button>
     </div>
  </form>
           </div>
        </div>
    );
};

export default EnrollSingleDetails;