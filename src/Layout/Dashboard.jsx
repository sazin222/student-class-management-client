import { NavLink, Outlet } from "react-router-dom";
import useRole from "../hooks/useRole";


const Dashboard = () => {
    const [role] = useRole()
    return (
     <div className="flex flex-col lg:flex-row">
        <div className=" w-full  md:w-64 lg:min-h-screen bg-gray-300">
         <ul className=" p-2 lg:p-5 flex-wrap flex flex-row lg:flex-col  gap-3 mt-4" >
         {role.role === 'student' && <>
           <li className="font-bold ">
                  <NavLink to={'/dashboard/myEnrollClass'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                     My enroll class
                  </NavLink>
              </li>
              <li className="font-bold ">
                  <NavLink to={'/dashboard/studentProfile'}
                    className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-4 border-blue-500 text-green-500  font-bold "
                      : ""
                  }
                  >
                     Profile
                  </NavLink>
              </li>
         </>}

         {role.role === 'admin' && <>
          
         <li className="font-bold ">
                  <NavLink to={'/dashboard/teacherRequest'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                    Teacher Request
                  </NavLink>
              </li>
         <li className="font-bold ">
                  <NavLink to={'/dashboard/users'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                    Users
                  </NavLink>
              </li>
         <li className="font-bold ">
                  <NavLink to={'/dashboard/allClass'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                    All classes

                  </NavLink>
              </li>
              <li className="font-bold ">
                  <NavLink to={'/dashboard/studentProfile'}
                    className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-4 border-blue-500 text-green-500  font-bold "
                      : ""
                  }
                  >
                     Profile
                  </NavLink>
              </li>
         
         </>}

         {role.role === 'teacher' && <>

         <li className="font-bold ">
                  <NavLink to={'/dashboard/addClass'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                    Add class

                  </NavLink>
              </li>
         
         <li className="font-bold ">
                  <NavLink to={'/dashboard/myClass'}
                   className={({ isActive, isPending }) =>
                   isPending
                     ? "pending"
                     : isActive
                     ? "border-b-4 border-blue-500 text-green-500  font-bold "
                     : ""
                 }
                  >
                    My class

                  </NavLink>
              </li>


         <li className="font-bold ">
                  <NavLink to={'/dashboard/studentProfile'}
                    className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-4 border-blue-500 text-green-500  font-bold "
                      : ""
                  }
                  >
                     Profile
                  </NavLink>
              </li>
         
         </>}
         
         {/* menu for all role */}
         <div className="py-3 flex  items-center text-sm text-gray-800 before:flex-[1_1_0%] before:border-t before:border-green-500 before:me-6 after:flex-[1_1_0%] after:border-t after:border-green-500 after:ms-6 dark:text-white dark:before:border-gray-600 dark:after:border-gray-600">or</div>
          
           
         <li className="font-bold"> <NavLink to={"/"}
             className={({ isActive, isPending }) =>
             isPending
               ? "pending"
               : isActive
               ? "border-b-4 border-blue-500 text-green-500  font-bold "
               : ""
           }
            
            >Home</NavLink></li>
          
            <li className="font-bold ">
            <NavLink to={"/allClasses"}>All Classes</NavLink>
            </li>
         
           
           <li className="font-bold ">
           <NavLink to={"/creativeStudy"}> Creative Study</NavLink>
           </li>

         </ul>
        </div>
        <div className="flex-1">
        <div>
          <Outlet></Outlet>
         </div>
        </div>
     </div>
    );
};

export default Dashboard;