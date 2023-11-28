import { Outlet } from "react-router-dom";
import Navber from "../Pages/Shared/Navber";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-68px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;