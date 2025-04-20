import { useState } from "react";
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'

export const Category = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: slide1, }, { img: slide2, }, { img: slide3, }, { img: slide4, }, { img: slide5, },];
    const names = ["Salad", "Pizza", "Soup", "Dessert", "Salad"]

    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);


    return (
        <div className=" max-w-5xl mx-auto h-[440px] md:h-[570px] flex flex-col xl:flex-row items-center overflow-hidden gap-5 lg:gap-10 relative">
            <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>
            {/* slider container */}
            <div className="h-[440px] md:h-[570px] w-2/3 ml-auto relative ease-linear duration-300 flex items-center"
                style={{ transform: `translateX(-${currentSlider * 50}%)` }}>
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <div key={inx}
                        className={`${currentSlider === inx ? "h-[200px] sm:h-[210px] md:h-[380px] lg:h-[480px]" : "h-[170px] sm:h-[160px] md:h-[280px] lg:h-[400px] scale-95 opacity-40"} min-w-[50%] relative duration-200`}
                        style={{ perspective: "200px" }}>
                        <img src={slide.img} className="w-full h-full bg-gray-900 rounded-lg duration-300" alt={slide.tags} style={{ transform: `${currentSlider - 1 === inx ? "rotateY(4deg)" : currentSlider + 1 === inx ? "rotateY(-4deg)" : ""}`, transformStyle: "preserve-3d", }} />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm md:text-base font-medium">
                            {names[inx]}
                        </div>
                        {/* <div className="absolute flex items-center  justify-center  bg-black bg-opacity-50 text-white uppercase px-2 left-0 right-0 mx-auto w-max py-1 rounded-sm bottom-4 md:text-base font-medium">
                            {names[inx]}
                        </div> */}
                    </div>

                ))}
            </div>
        </div>
    );
};
