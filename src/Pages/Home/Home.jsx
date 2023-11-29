
import { Helmet } from "react-helmet-async";
import AboutUS from "./AboutUS/AboutUS";
import Banner from "./Banner/Banner";
import Class from "./Class/Class";
import Feedback from "./Feedback/Feedback";
import PatnersBrand from "./PatnersBrand/PatnersBrand";
import TeacherAdding from "./TeacherAdd/TeacherAdding";
import TeacherSection from "./TeacherSection";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Creative Study | Home</title>
            </Helmet>
            <Banner></Banner>
            <PatnersBrand></PatnersBrand>
            <Class></Class>
            <Feedback></Feedback>
            <AboutUS></AboutUS>
            <TeacherAdding></TeacherAdding>
            <TeacherSection></TeacherSection>
            
        </div>
    );
};

export default Home;