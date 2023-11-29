/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../utilis/Loader";
import useRole from "../hooks/useRole";

const TeacherRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    const location = useLocation()

  if (isLoading) return <Loader></Loader>
  
  if (role?.role === 'teacher') return children
  
  return <Navigate state={{from:location}} to={'/'}>
       
  </Navigate>
};

export default TeacherRoutes;