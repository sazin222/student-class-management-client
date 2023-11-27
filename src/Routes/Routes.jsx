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
import TeacherRequest from "../Pages/Dashboard/Admin/TeacherRequest";
import Users from "../Pages/Dashboard/Admin/Users/Users";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

   
  export const Routes = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
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
          path:'/dashboard',
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
            {
              path:'teacherRequest',
              element: <TeacherRequest></TeacherRequest>
            },
            {
              path:'users',
              element: <Users></Users>
            }
          ]
        }
      ]);


