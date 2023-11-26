import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";
import Dashboard from "../Layout/Dashboard";
import StudentProfile from "../Pages/Dashboard/StudentProfile";
import PrivetRoute from "./PrivetRoutes";
import MyEnrollClass from "../Pages/Dashboard/MyEnrollClass";
import CreativeStudy from "../Pages/Home/CreativeStudy/CreativeStudy";

   
  export const Routes = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path:'/',
                element: <Home></Home>

            },
            {
              path:'/creativeStudy',
              element: <PrivetRoute>
                <CreativeStudy></CreativeStudy>
              </PrivetRoute>
            }
          ]
        },
        {
          path: '/singin',
          element: <SingIn></SingIn>
        },
        {
          path: '/singup',
          element: <SingUp></SingUp>
        },
        {
          path:'dashboard',
          element: <PrivetRoute>
            <Dashboard></Dashboard>
          </PrivetRoute>,
          children: [
            {
             path:'myEnrollClass',
             element: <PrivetRoute>
              <MyEnrollClass></MyEnrollClass>
             </PrivetRoute>
            },

            { 
              path: 'studentProfile',
              element: <PrivetRoute>
                <StudentProfile></StudentProfile>
              </PrivetRoute>
            },
          ]
        }
      ]);


