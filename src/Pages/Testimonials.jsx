import SectionTItle from "./Shared/SectionTItle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <section className="my-20">
            <SectionTItle subHeading='What Our Client Say' heading='Testimonials'></SectionTItle>
            <Swiper navigation={true} loop modules={[Navigation]} className="mySwiper">
                {reviews.map(review => <SwiperSlide key={review._id}>
                    <div className="flex flex-col items-center mx-24 my-16 m-24">
                        <Rating style={{ maxWidth: 250 }} value={review.rating} />
                        <p className="py-8">{review.details}</p>
                        <h3 className="text-2xl text-orange-400">{review.name}</h3>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Testimonials;