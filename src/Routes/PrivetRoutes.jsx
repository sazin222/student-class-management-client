/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../utilis/Loader";

const PrivetRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location = useLocation()
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} to={'/login'}>
       
    </Navigate> 
};

export default PrivetRoute;