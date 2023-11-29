/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../utilis/Loader";


const AdminRoutes = ({children}) => {
    const [role, isLoading] = useRole()
    const location = useLocation()

  if (isLoading) return <Loader></Loader>
  
  if (role?.role === 'admin') return children
  
  return <Navigate state={{from:location}} to={'/'}>
       
  </Navigate>
};

export default AdminRoutes;