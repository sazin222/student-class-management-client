import { BiSolidQuoteLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";



import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Feedback = () => {
    const axiosPublic = useAxiosPublic()
    const {data:reviews=[]} = useQuery({
        queryKey:['reviews'],
        queryFn: async ()=>{
            const res= await axiosPublic.get('/reviews')
            return res.data
        }
    })

    return (
        <div className='mt-11'>
            <div className="text-center my-4">
                <h1 className="text-3xl mt-7 font-bold">FEEDBACK FROM<span 
              className="text-green-500"> STUDENT</span></h1>
               <h1 className="text-center mt-3 mx-auto w-20 border-2 border-green-600"></h1>
              </div>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className=" mx-24 my-15 text-center flex flex-col items-center">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <BiSolidQuoteLeft className="text-3xl my-3">
           
           </BiSolidQuoteLeft>
            <img  className="inline-block cursor-pointer h-8 w-8 rounded-full" src={review?.image} alt="Image Description"></img>
            <h3 className="text-orange-500 text-2xl">{review.name}</h3>
            <p className="text-xl">{review.title}</p>
            
            <p className="text-xl">{review.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default Feedback;