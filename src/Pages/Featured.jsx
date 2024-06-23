import SectionTItle from "./Shared/SectionTItle";
import featuredImg from '../assets/home/featured.jpg'

const Featured = () => {
    return(
        <div className="featured-item bg-fixed pt-8 my-20">
            <SectionTItle heading='featured item' subHeading='Check it out'></SectionTItle>
            <div className="md:flex justify-center items-center pb-20 pt-12 bg-opacity-60 bg-slate-500 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sit delectus inventore aliquid minus quasi nulla! Voluptate, rem nihil eos perspiciatis, inventore nobis fugit, nulla eius libero consequatur atque recusandae cum temporibus corporis dicta quisquam fuga exercitationem quo est quasi. Officiis sequi sapiente cupiditate eveniet ducimus amet in eligendi est!</p>
                    <button className="btn btn-outline border-0 mt-4 border-b-4 uppercase">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;