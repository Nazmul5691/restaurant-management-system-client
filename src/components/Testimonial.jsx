import { useEffect, useState } from "react";
import reviewData from "../utils/reviewData";
import SectionsHeading from "./SectionsHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div className="my-20">
            <SectionsHeading
                subHeading='What Our Client Says'
                heading='Testimonials'
            />
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center justify-center">
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        className="pt-8"
                                    />
                                <p className="py-10 px-64 text-center">{review.details}</p>
                                <h2 className="text-2xl">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;