import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { dataOurTeam } from "../contexts/data";
import { Subtitle, TitleBig} from '../Styled'

const OurTeam = () => {
    useEffect(() => {
        Aos.init();
    });
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 flex flex-col items-center">
                        <Subtitle>Thành viên của chúng tôi</Subtitle>
                        <TitleBig class="mt-2 text-3xl tracking-tight text-nau sm:text-4xl">
                            Explore the whole collection of open-source 
                        </TitleBig>
                    </div>

                    <div class="flex flex-wrap justify-center gap-8 mb-6 lg:mb-16 md:grid-cols-2 lg:grid-cols-3">
                        {dataOurTeam.map((item) => {
                            return (
                                <div  data-aos="zoom-in-left" data-aos-delay={item.delay} class="group flex flex-col h-[500px] items-center w-fit bg-vang hover:bg-white rounded-lg hover:shadow-big sm:flex  transition">
                                    <a href="#" className="">
                                        <img
                                            class=" w-[370px] h-[370px] rounded-t-lg  object-cover"
                                            src={item.img}
                                        />
                                    </a>
                                    <div className="w-[300px] relative -top-5">
                                        <div class="flex items-center sm:mt-0">
                                            <Link
                                                to=""
                                                className="flex justify-center items-center bg-secondary w-10 h-10 rounded-lg group-hover:rounded-r-none z-[1]"
                                            >
                                                <div className="bg-secondary text-white rounded-lg p-2">
                                                    <IoShareSocialSharp
                                                        size={16}
                                                    />
                                                </div>
                                            </Link>
                                            <Link
                                                to={item.tw}
                                                className="flex -translate-x-[40px] group-hover:-translate-x-[0px] rounded-lg  group-hover:rounded-none justify-center items-center bg-secondary w-10 h-10 transition duration-100"
                                            >
                                                <div className="bg-secondary hover:bg-[#5cd2ef] text-white rounded-lg hover:p-2 ease-linear duration-150">
                                                    <FaTwitter size={16} />
                                                </div>
                                            </Link>
                                            <Link
                                                to={item.fb}
                                                className="flex -translate-x-[80px] group-hover:-translate-x-[0px] rounded-lg  group-hover:rounded-none justify-center items-center bg-secondary w-10 h-10  transition duration-150"
                                            >
                                                <div className="bg-secondary hover:bg-[#3c6cc4] text-white rounded-lg hover:p-2 ease-linear duration-150">
                                                    <FaFacebookF size={16} />
                                                </div>
                                            </Link>
                                            <Link
                                                to={item.in}
                                                className="flex -translate-x-[120px] group-hover:-translate-x-[0px] rounded-lg  group-hover:rounded-none justify-center items-center bg-secondary w-10 h-10  transition duration-200"
                                            >
                                                <div className="bg-secondary hover:bg-[#000000] text-white rounded-lg hover:p-2 ease-linear duration-150">
                                                    <FaTiktok size={16} />
                                                </div>
                                            </Link>
                                            <Link
                                                to={item.ins}
                                                className="flex -translate-x-[160px] group-hover:-translate-x-[0px] rounded-lg group-hover:rounded-l-none justify-center items-center bg-secondary w-10 h-10 rounded-r-lg transition duration-300"
                                            >
                                                <div className="bg-secondary hover:bg-[#c287de] text-white rounded-lg hover:p-2 ease-linear duration-150">
                                                    <FaInstagram size={16} />
                                                </div>
                                            </Link>
                                        </div>

                                        <div class="">
                                            <h1 class="text-3xl tracking-tight pt-3">
                                                <Link to="#">{item.name}</Link>
                                            </h1>
                                            <p class="mt-2 text-secondary font-bold cursor-default">
                                                {item.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurTeam;
