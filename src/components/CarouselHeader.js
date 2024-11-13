import React from "react";
import { Carousel } from "@material-tailwind/react";
import Typed from "typed.js";
import hero_section_1 from "../img/hero_home_1.png";
import hero_section_2 from "../img/Home-2-Banner.png";
import paw from "../img/paw.png";
import { TbPawFilled } from "react-icons/tb";

const CarouselHeader = () => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["^1000Level C", "^1000Level B"],
            typeSpeed: 200,
            backSpeed: 100,
            shuffle: true,
            smartBackspace: false,
            loop: true,
            loopCount: Infinity,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <Carousel
            loop="true"
            //   autoplay="true"
            autoplayDelay="7000"
            className="rounded-xl max-h-lg btnCarousel"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "w-8 bg-white"
                                    : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="pt-[70px]">
                <section className=" flex bg-[#F0E3DE] bg-repeat h-[700px] bg-cover bg-right">
                    <div className="flex flex-col h-full justify-center w-2/3 xl:mx-auto ml-8 pl-[125px]">
                        <div className="hero1 font-fontHead  xl:text-[60px] md:text-[47px] text-[30px]  leading-8 md:leading-[45px] lg:leading-[55px] xl:leading-[68px]  font-black   ">
                            Khóa học cắt tỉa lông chó mèo chuyên nghiệp&nbsp;{" "}
                            <span
                                style={{ whiteSpace: "pre" }}
                                ref={el}
                                className=" text-secondary "
                            ></span>
                            của Cengrooming
                        </div>
                        <div className="hero flex text-[15px] font-medium max-w-[600px] md:w-full sm:w-full md:w-full pt-4 md:w-[43%]">
                            ĐÀO TẠO TRỞ THÀNH CHUYÊN VIÊN SPA GROOMING PET
                            CHUYÊN NGHIỆP VỚI THU NHẬP LÊN ĐẾN 8 CON SỐ
                        </div>
                        <div className=" flex gap-4  top-0 pt-5">
                            <button class="btn border-none group bg-secondary hover:bg-nau text-white hover:text-secondary font-extrabold text-sm transition-all ">
                                Đăng ký ngay
                                <TbPawFilled className=" w-5 h-5  rotate-45 group-hover:origin-center group-hover:text-secondary group-hover:-rotate-45 transition-all"></TbPawFilled>
                            </button>
                        </div>
                    </div>
                    <div className=" contents w-1/3">
                        <img src={hero_section_1} />
                    </div>
                </section>
            </div>

            <div className="pt-20">
                <section className=" flex bg-[#E5F7FF] bg-repeat h-[700px] bg-cover bg-right">
                    <div className="flex flex-col h-full justify-center w-2/3 xl:mx-auto ml-8 pl-[125px]">
                        <div className="hero1 font-fontHead  xl:text-[60px] md:text-[47px] text-[30px]  leading-8 md:leading-[45px] lg:leading-[55px] xl:leading-[68px]  font-black   ">
                            Travel Pet Backpack Carrier for Cats
                        </div>
                        <div className="hero flex text-[15px] font-medium max-w-[600px] md:w-full sm:w-full md:w-full pt-4 md:w-[43%]">
                            If you want the best for your pet, you can't go
                            wrong Ziggy
                        </div>
                        <div className="flex gap-4  top-0 pt-5">
                            <button class="btn bg-secondary text-white">
                                Mua ngay !
                            </button>
                        </div>
                    </div>
                    <div className=" contents w-1/3">
                        <img src={hero_section_2} />
                    </div>
                </section>
            </div>

            <div className="pt-20">
                <section className="flex bg-[#b8ffd3] bg-repeat h-[700px] bg-cover bg-right">
                    <div className="flex flex-col h-full justify-center w-[1440px] xl:mx-auto ml-8">
                        <div className="hero1 font-fontHead xl:w-[65%] w-[35%] xl:text-[60px] md:text-[47px] text-[30px] md:w-[45%] leading-8 md:leading-[45px] lg:leading-[55px] xl:leading-[68px]  font-black max-w-[65%]  ">
                            New & Exclusive Dog Clothing
                        </div>
                        <div className="hero flex text-[15px] font-medium max-w-[600px] pt-4 md:w-[43%] w-[30%]">
                            Shop our new range of winter dog coats & jackets
                            in-store or online
                        </div>
                        <div className="flex gap-4  top-0 pt-5">
                            <button class="btn bg-secondary text-white">
                                Mua ngay !
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </Carousel>
    );
};

export default CarouselHeader;
