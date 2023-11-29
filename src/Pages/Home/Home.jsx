
import AboutUS from "./AboutUS/AboutUS";
import Banner from "./Banner/Banner";
import Class from "./Class/Class";
import PatnersBrand from "./PatnersBrand/PatnersBrand";
import TeacherAdding from "./TeacherAdd/TeacherAdding";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PatnersBrand></PatnersBrand>
            <Class></Class>
            <AboutUS></AboutUS>
            <TeacherAdding></TeacherAdding>
            
        </div>
    );
};

export default Home;