import React from "react";
import { Subtitle, Title, TitleBig, NameCard, NameCardSmall } from "../Styled";
import {
    Input,
    Button,
    Dialog,
    DialogHeader,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import Slider from "react-slick";
import paw from "../img/paw.png";
import { TbPawFilled } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { dataSevce } from "../contexts/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

const GetItForFree = () => {
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState(dataSevce);

    const handleOpen = () => setOpen(!open);

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className=" GetItForFree bg-bgGetItForFree2 bg-vang mt-[300px] pb-[100px] h-full ">
            <div className=" rounded-xl container mx-auto relative top-[-200px] ">
                <section className="bg-bgGetItForFree bg-center bg-cover py-10 px-20 rounded-xl">
                    <div className=" flex flex-col w-full lg:w-[60%]">
                        <Subtitle>Get It For Free</Subtitle>
                        <TitleBig>Your First Consultation</TitleBig>
                        <Title>
                            Sit amet consectetur adipiscing elit ut aliquam
                            purus amet. Neque laoreet suspendisse interdum
                            consectetur libero id faucibus. Venenatis lectus
                            magna fringilla urna rhoncus dolor purus non.
                        </Title>
                        <div className=" flex flex-col lg:flex-row  py-10 gap-5">
                            <div className="w-60 flex items-center">
                                <Input
                                    label="Your Name *"
                                    className=" !bg-white"
                                    size="lg"
                                />
                            </div>
                            <div className="w-60 flex items-center">
                                <Input
                                    label="Your Email *"
                                    className=" !bg-white"
                                    size="lg"
                                />
                            </div>
                            <div className="w-60 flex items-center">

                                    <button onClick={handleOpen} class="btn border-none group bg-secondary hover:bg-nau text-white font-extrabold text-sm transition-all ">
                                        GET IT NOW
                                        <TbPawFilled className=" w-5 h-5  rotate-45 group-hover:origin-center group-hover:text-secondary group-hover:-rotate-45 transition-all"></TbPawFilled>
                                        
                                    </button>

                                <Dialog
                                    open={open}
                                    handler={handleOpen}
                                    animate={{
                                        mount: { scale: 1, y: 0 },
                                        unmount: { scale: 0.9, y: -100 },
                                    }}
                                    className=" bg-vang"
                                >
                                    <DialogHeader>
                                        <Typography
                                            variant="h5"
                                            className="text-center font-primary"
                                        >
                                            Thank you for your message. It has
                                            been sent.
                                        </Typography>
                                    </DialogHeader>
                                    <DialogFooter>
                                        <Button
                                            variant="text"
                                            color="#564741"
                                            onClick={handleOpen}
                                            className="mr-1 text-white bg-nau hover:bg-secondary font-primary font-extrabold text-sm"
                                        >
                                            <span>Cancel</span>
                                        </Button>
                                    </DialogFooter>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className=" container mx-auto flex flex-col items-center justify-center text-center">
                <Subtitle>SEVIECES</Subtitle>
                <TitleBig>What We Can Offer</TitleBig>
                <Title className=" w-1/2">
                    Facilisi morbi tempus iaculis urna id. Ornare massa eget
                    egestas purus viverra accumsan. Non sodales neque sodales ut
                    etiam.
                </Title>
            </div>
            <div className=" container mx-auto lg:px-[120px]">
                <div className="slider-container">
                    <Slider {...settings} className="">
                        {content.map((item) => {
                            return (
                                <div className=" !p-10  ">
                                    <div
                                        id={item.id}
                                        className="w-[340px] group !cursor-pointer  bg-white rounded-xl shadow-3xl"
                                    >
                                        <div
                                            shadow={false}
                                            floated={false}
                                            className=" h-auto m-0 rounded-t-xl"
                                        >
                                            <img
                                                src={item.img}
                                                alt="card-image"
                                                className="w-full h-auto object-cover  rounded-t-xl"
                                            />
                                        </div>
                                        <div className=" p-0 h-12">
                                            <div
                                                style={{
                                                    backgroundImage: `url(${item.bg})`,
                                                }}
                                                className="mb-2 bg-nau py-5 rounded-xl relative top-[-35px] left-[-25px] bg-no-repeat bg-right40 group-hover:bg-secondary transition-all "
                                            >
                                                <NameCard
                                                    className=" pl-10 text-2xl cursor-pointer"
                                                    $primary={false}
                                                >
                                                    {item.name}
                                                </NameCard>
                                            </div>
                                        </div>
                                        <div className=" p-8 pt-0">
                                            <p className="font-normal text-left text-xamnhat">
                                                {item.title}
                                            </p>
                                        </div>
                                        <div className=" p-8 pt-0 ">
                                            <div className=" text-[14px] font-bold flex gap-3 text-nau ">
                                                <img
                                                    src={paw}
                                                    className=" w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300"
                                                />
                                                LEARN MORE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default GetItForFree;
