import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SingIn from "../Pages/SingIn/SingIn";

   
  export const Routes = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children: [
            {
                path:'/',
                element: <Home></Home>

            }
          ]
        },
        {
          path: '/singin',
          element: <SingIn></SingIn>
        }
      ]);


