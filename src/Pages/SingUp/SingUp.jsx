import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";


const SingUp = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        console.log(data);
      }
    return (
        <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-md py-7 px-4 sm:px-6 md:max-w-screen-xl md:py-9 lg:py-12 md:px-8">
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200">
             Please Sing Up your  <span className="text-green-600 dark:text-blue-500">account</span>
            </h1>
            <p className="mt-3 text-base text-gray-500">
             Create your account and get the some existing course for your better career 
            </p>
      
            <div className="py-4 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600"></div>
      
            
            <form  onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-4">
                <label htmlFor="hs-hero-name-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Full name</span></label>
                <input type="text"  {...register("name" ,{ required: true })} id="hs-hero-name-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Full name" />
                {errors.name && <span className="text-red-600"> Name is required</span>}
              </div>
              <div className="mb-4">
                <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Photo Url</span></label>
                <input type="text"  {...register("PhotoURL",{ required: true })}id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Photo Url "/>
                {errors.PhotoURL&& <span className="text-red-600"> PhotoURL is required</span>}
              </div>
      
              <div className="mb-4">
                <label htmlFor="hs-hero-email-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Email address</span></label>
                <input type="email" {...register("email",{required: true})} id="hs-hero-email-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Email address" />
                {errors.email && <span className="text-red-600"> Email is required</span>}
              </div>
      
              <div className="mb-4">
                <label htmlFor="hs-hero-password-2" className="block text-sm font-medium dark:text-white"><span className="sr-only">Password</span></label>
                <input type="password" {...register("password",{required: true, minLength:6,})} id="hs-hero-password-2" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder='*******' />
                {errors.password?.type === "required" && (
                <p className="text-red-500"> password is required</p>
                 )}
                 {errors.password?.type === "minLength" && (
                <p className="text-red-500"> password must be 6 characters</p>
                 )}
              </div>
              
      
              <div className="grid">
                <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 sm:p-4">

                   Sing Up
                    </button>
              </div>
              <p className="text-center mt-3 "> Already have an Account ? <Link to={"/singin"} className="text-green-600 border-b-2">Sing In</Link></p>
            </form>
          </div>
        </div>
      
        <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://i.ibb.co/DkT7xpk/4957136-4957136.jpg')] bg-no-repeat bg-center bg-cover"></div>
      </div>
    );
};

export default SingUp;