import { useEffect, useState } from "react";
import reviewData from "../utils/reviewData";
import SectionsHeading from "./SectionsHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Testimonial = () => {
    const [review, setReview] = useState([])


    useEffect(() => {
        const reviewsData = reviewData;
        setReview(reviewsData)
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