import banner2 from '../../../assets/image/wes-hicks-4-EeTnaC1S4-unsplash.jpg'

const Banner2 = () => {
    return (
    <div >
           
        <div className="relative overflow-hidden">
  <div className="max-w-[85rem] mx-auto px-2 sm:px-3 lg:px-4 ">

    <div className="mt-10 relative ">
      <div
        className="w-full
     object-cover h-96  sm:h-[550px] bg-center bg-cover rounded-xl"
     style={{ backgroundImage: `url(${banner2})` }}
      >
    
      </div>

      <div className="absolute inset-0 w-full h-full">
        <div className="flex space-y-4 flex-col justify-center items-center w-full h-full">
         <h1 className=" text-2xl lg:text-4xl font-bold text-white">

              <span className='text-green-600'> Welcome to Creative Study</span> <br />  Unleash the Power of Organized Learning 
              </h1>
              <p className=" text-sm lg:text-xl   text-white">
              your comprehensive resource <br /> for effective and efficient class management.
                
               
              </p>
        </div>
      </div>

      <div className="absolute bottom-12 -left-20 -z-[1] w-48 h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-slate-900">
        <div className="bg-white w-48 h-48 rounded-lg dark:bg-slate-900"></div>
      </div>

      <div className="absolute -top-12 -right-20 -z-[1] w-48 h-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div className="bg-white w-48 h-48 rounded-full dark:bg-slate-900"></div>
      </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default Banner2;
