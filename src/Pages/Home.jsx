import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import './Featured.css'
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS RESTURANT</title>
            </Helmet>
            <Banner></Banner>
            <div>
                <Category/>
            </div>
            <PopularMenu />

            <Featured />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;