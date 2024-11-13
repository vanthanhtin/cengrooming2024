import React, { useEffect } from "react";
// Import Swiper React components
import { gallrely } from "../contexts/dataGallrely";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "react-slick";

import "./style.css";
import { Subtitle } from "../Styled";
import Aos from "aos";
import "aos/dist/aos";

const Carousel = () => {
    useEffect(() => {
        Aos.init();
    });
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    const datagallrely = gallrely;
    return (
        <div className="container m-auto hidden lg:block my-10">
            <div className="flex justify-center items-center ">
                <Subtitle>Thư Viện Ảnh</Subtitle>
            </div>

            <div
                data-aos="fade-up"
                className="slider-container py-10"
            >
                <Slider {...settings}>
                    {datagallrely.map((item) => {
                        return (
                            <div className=" cursor-pointer w-[280px] h-[350px] rounded-xl">
                                <img
                                    src={item.photo}
                                    className=" w-[280px] h-[350px] object-cover rounded-xl"
                                />
                                {/* <div  className="w-[280px] h-[350px] bg-cover" style={ {backgroundImage: `url(${item.photo})`,}}>

                            </div> */}
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;
