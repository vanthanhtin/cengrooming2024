import React from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import img1 from "../img/img-1.jpg";
import avatacamtien from "../img/avatacamtien.jpg";
import chuky from "../img/chuky.png";
import img10 from "../img/img-10.png";
import img11 from "../img/img-15-2.png";
import img9 from "../img/img-9.png";
import img8 from "../img/img-8.png";
import { motion } from "framer-motion";
import "./style.css";
import ProgressLine from "../components/ProgressLine";
import { Input, Textarea } from "@material-tailwind/react";
import { TbPawFilled } from "react-icons/tb";

const Contact = () => {
    return (
        <motion.div
            className=" my-[70px] "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <div className="  w-screen">
                <div className=" bgContact">
                    <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
                        <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
                            About Us
                        </p>
                        <div className=" text-sm lg:text-base flex justify-center items-center font-fontHead bg-white px-3 py-0.5 rounded-lg shadow-3xl">
                            <Link
                                to={"/"}
                                className=" text-secondary/80 hover:text-secondary transition duration-300"
                            >
                                TRANG CHỦ
                            </Link>
                            <p className="  text-secondary text-3xl flex justify-center items-center">
                                <BsDot />
                            </p>
                            <p className=" text-secondary/80 hover:text-secondary transition duration-300">
                                VỀ CHÚNG TÔI
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <section className=" container lg:flex justify-center items-center mx-auto py-20 space-x-10">
                    <div className=" flex justify-center items-center lg:w-1/2">
                        <img src={img1} className=" w-4/6" />
                    </div>
                    <div className=" flex flex-col lg:w-1/2 lg:pl-20 py-20 ">
                        <div className="text-secondary w-fit flex justify-center items-center font-fontHead bg-white px-4 py-1 rounded-lg shadow-3xl">
                            <p>ABOUT US</p>
                        </div>
                        <h1 className="  leading-normal font-fontHead text-2xl lg:text-4xl xl:text-5xl py-5">
                            Happy to Welcome You Here in Cengrooming
                        </h1>
                        <p className=" leading-7 font-normal">
                            Semper auctor neque vitae tempus pellentesque.
                            Blandit maecenas volutpat blandit aliquam etiam erat
                            velit scelerisque. Elit pellentesque habitant
                            tristique senectus et. Pellentesque adipiscing
                            commodo. Pretium aenean pharetra magna ac placerat
                            vestibulum.
                        </p>
                        <div className="flex pt-6 items-center">
                            <img
                                src={avatacamtien}
                                className=" w-20 h-20 rounded-[50%] "
                            />
                            <div className=" flex flex-col px-6 space-y-2">
                                <h1 className=" font-fontHead text-2xl">
                                    DT.Cẩm Tiên
                                </h1>
                                <p className=" text-secondary font-bold">
                                    COMPANY OWNER
                                </p>
                            </div>
                            <img
                                src={chuky}
                                className="h-20 w-auto origin-center -rotate-12"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div className=" bg-section3 bg-[#ffffff]">
                <section className="  container lg:flex justify-center items-center mx-auto py-20  space-x-10">
                    <div className=" flex flex-col lg:w-1/2 lg:pl-20 ">
                        <div className="text-secondary w-fit flex justify-center items-center font-fontHead bg-white px-4 py-1 rounded-lg shadow-3xl">
                            <p>OUR SKILLS</p>
                        </div>
                        <h1 className=" font-fontHead text-2xl lg:text-4xl xl:text-5xl py-5">
                            Few Resons Why You Should Choose Us
                        </h1>
                        <p className=" leading-7 font-normal">
                            Pharetra pharetra massa massa ultricies mi quis
                            hendrerit. Mauris rhoncus aenean vel elit
                            scelerisque mauris pellentesque pulvinar. Massa enim
                            dui nunc mattis. Lacus vestibulum sed arcu non.
                        </p>
                        <div className="flex flex-col pt-6 items-center">
                            <div className=" font-fontHead pt-4">
                                <h1 className=" font-fontHead text-lg">
                                    Pets Grooming
                                </h1>
                                <div className=" flex justify-center items-center">
                                    <ProgressLine
                                        label=""
                                        backgroundColor="#F9F4EA"
                                        visualParts={[
                                            {
                                                percentage: "99%",
                                                color: "#F69946",
                                            },
                                        ]}
                                    />
                                    <h1 className=" font-fontHead px-3">99%</h1>
                                </div>
                            </div>{" "}
                            <div className=" font-fontHead pt-4">
                                <h1 className=" font-fontHead text-lg">
                                    Veterinary Care
                                </h1>
                                <div className=" flex justify-center items-center">
                                    <ProgressLine
                                        label=""
                                        backgroundColor="#F9F4EA"
                                        visualParts={[
                                            {
                                                percentage: "55%",
                                                color: "#F69946",
                                            },
                                        ]}
                                    />
                                    <h1 className=" font-fontHead px-3">99%</h1>
                                </div>
                            </div>{" "}
                            <div className=" font-fontHead pt-4">
                                <h1 className=" font-fontHead text-lg">
                                    Pets Training
                                </h1>
                                <div className=" flex justify-center items-center">
                                    <ProgressLine
                                        label=""
                                        backgroundColor="#F9F4EA"
                                        visualParts={[
                                            {
                                                percentage: "80%",
                                                color: "#F69946",
                                            },
                                        ]}
                                    />
                                    <h1 className=" font-fontHead px-3">80%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center h-full">
                        <img src={img8} className=" cucxuong absolute z-20" />
                        <img src={img9} className=" traitim absolute z-20" />
                        <img src={img10} className=" z-20" />
                        <img src={img11} className=" absolute z-10" />
                    </div>
                </section>
            </div>

            {/* <!-- component --> */}
            <div>
                <div className="bgimg max-h-full bg-[#FCF9F4] flex justify-center items-center py-28">
                    <form class="w-full relative max-w-[40rem] max-h-full mt-[100px ] m-auto p-[50px] bg-white rounded-xl shadow-2xl">
                        <div class="flex gap-3 w-full justify-between items-center mb-6 group">
                            <div className="w-2/3 flex ">
                                <Input
                                    size="lg"
                                    label="Last Name"
                                    type="name"
                                    name="floating_name"
                                    id="floating_name"
                                    className=" text-nau border-nau appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer "
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#f69946"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="4"
                                            ></circle>
                                        </svg>
                                    }
                                />
                            </div>
                            <div className="w-2/3 ">
                                <Input
                                    size="lg"
                                    label="Phone Number"
                                    maxLength={12}
                                    inputMode="numeric"
                                    type="number"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className=" text-nau border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer "
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#f69946"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    }
                                />
                            </div>
                        </div>

                        <div className="w-full ">
                            <Input
                                size="lg"
                                label="Email"
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className=" text-nau border-nau/20 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer "
                                icon={
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#f69946"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                }
                            />
                        </div>

                        <div className="w-full pt-8">
                            <Textarea
                                label="Message"
                                resize={true}
                                className="!max-h-[1000px] "
                            />
                        </div>

                        <div class="md:flex md:items-center pt-6">
                            <button class="btn group bg-secondary hover:bg-nau text-white font-extrabold text-sm transition-all ">
                                Send
                                <TbPawFilled className=" w-5 h-5  rotate-45 group-hover:origin-center group-hover:text-secondary group-hover:-rotate-45 transition-all"></TbPawFilled>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <SimpleMap/> */}
        </motion.div>
    );
};

export default Contact;
