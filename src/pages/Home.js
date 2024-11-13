import React, { useContext, useState } from "react";
//import product context
import Product from "../components/Product";
import Hero from "../components/Hero";
import IntroTeacher from "../components/IntroTeacher";
import Carousel from "../components/Carousel";
import Stats from "../components/Stats";
import OurTeam from "../components/OurTeam";
import Sectionservice from "../components/sectionservice";
import { dataProduct } from "../contexts/dataProduct";
import { motion } from "framer-motion";
import iconPrev from "../img/iconPrev.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Slider from "react-slick";
import "./style.css";

import { Autoplay, Navigation } from "swiper/modules";
import CarouselHeader from "../components/CarouselHeader";
import Benefits from "../components/Benefits";
import SectionServiceBig from "../components/SectionServiceBig";
import GetItForFree from "../components/GetItForFree";
import { NameCard, Title, TitleBig } from "../Styled";
import Blog from "./Blog";

const getRandomObject1 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};
const getRandomObject2 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};
const getRandomObject3 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};
const getRandomObject4 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};
const getRandomObject5 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};
const getRandomObject6 = (array) => {
    const randomObject = array[Math.floor(Math.random() * array.length)];
    return randomObject;
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className=" opacity-50 hover:opacity-100 absolute top-1/2 right-[-40px] cursor-pointer transition-all"
            style={{ ...style, display: "block", background: "none", width:"40px", height:"40px" }}
            onClick={onClick}
        >
            <img src={iconPrev} className=" rotate-180"  />
        </div>
    );
}

function SamplePrevArrow(props) {
    const {  style, onClick } = props;
    return (
        <div
            className=" opacity-50 hover:opacity-100 absolute top-1/2 left-[-40px] cursor-pointer transition-all"
            style={{ ...style, display: "block", background: "none", width:"40px", height:"40px" }}
            onClick={onClick}
        >
            <img src={iconPrev}/>
        </div>
    );
}

const Home = ({blogs}) => {

    
    const [randomData1, setRandomData1] = useState(() =>
        getRandomObject1(dataProduct)
    );
    const [randomData2, setRandomData2] = useState(() =>
        getRandomObject2(dataProduct)
    );
    const [randomData3, setRandomData3] = useState(() =>
        getRandomObject3(dataProduct)
    );
    const [randomData4, setRandomData4] = useState(() =>
        getRandomObject4(dataProduct)
    );
    const [randomData5, setRandomData5] = useState(() =>
        getRandomObject5(dataProduct)
    );
    const [randomData6, setRandomData6] = useState(() =>
        getRandomObject6(dataProduct)
    );

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
        
    console.log("homepage");
    
    console.log(blogs);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            {/* <Hero /> */}
            <CarouselHeader />
            <Sectionservice />
            {/* <Blog blogs={blogs?blogs:""} /> */}
            <SectionServiceBig />
            <GetItForFree />
            <Benefits />
            <Stats />
            <OurTeam />
            <Carousel />
            <IntroTeacher />
            <section className="py-[70px]">
                <div className="container mx-auto">
                    <h1 className=" flex justify-center items-center !text-[2.5rem]">Related products</h1>

                    <div data-aos="fade-up" className="slider-container py-10">
                        <Slider {...settings}>
                            <div>
                                <Product c={randomData1} key={randomData1.id} />
                            </div>
                            <div>
                                <Product c={randomData2} key={randomData2.id} />
                            </div>
                            <div>
                                <Product c={randomData3} key={randomData3.id} />
                            </div>
                            <div>
                                <Product c={randomData4} key={randomData4.id} />
                            </div>
                            <div>
                                <Product c={randomData5} key={randomData5.id} />
                            </div>
                            <div>
                                <Product c={randomData6} key={randomData6.id} />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
