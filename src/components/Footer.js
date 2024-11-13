import j from "../img/photo/Photos-001/2021-11-21 161025.jpg";
import k from "../img/photo/Photos-001/2022-06-15 012358.png";
import l from "../img/photo/Photos-001/2022-07-10 154043.jpg";
import z from "../img/photo/Photos-001/320882523_1290402358482320_7310063070347963591_n.jpg";
import x from "../img/photo/Photos-001/IMG_1812.JPG";
import c from "../img/photo/Photos-001/2021-12-15 001606(2).jpg";

import Logo_white from "../img/logo_white.png";
import { TfiInstagram } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
    return (
        <div className=" bg-tertiary bottom-0">
            <footer id="footer  " className=" ">
                <div className=" pt-20">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex md:flex md:flex-wrap justify-between">
                            <div className="lg:w-1/4 md:w-1/2  mb-16 lg:mb-0 flex">
                                <div className="w-full ">
                                    <ul>
                                        <li>
                                            <Link
                                                to="#"
                                                className="text-white  text-xs lg:text-sm leading-none hover:text-secondary transition duration-300"
                                            >
                                                <img
                                                    className="w-3/4 pl-7"
                                                    src={Logo_white}
                                                />
                                            </Link>
                                        </li>
                                        <li>
                                            <div className=" text-white pt-2">
                                                Nếu bạn là một người yêu thú
                                                cưng, muốn đem đến những điều
                                                tốt nhất cho chúng thì
                                                CENGROOMING chính là nơi đáp ứng
                                                được tất cả yêu cầu của bạn.
                                            </div>
                                        </li>
                                        <li className="mt-2 py-5 text-white "></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-fit  mb-16 lg:mb-0 ">
                                <div className=" px-6 font-medium">
                                    <ul>
                                        <li>
                                            <h3 className="text-white text-lg font-black pb-5">
                                                Help
                                            </h3>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Dịch vụ
                                                </Link>
                                            </Link>
                                        </li>

                                        <li className="mt-2">
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Tuyển dụng
                                                </Link>
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Khoá học
                                                </Link>
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Ưu đãi
                                                </Link>
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Cửa hàng
                                                </Link>
                                            </Link>
                                        </li>
                                        <li className="mt-2">
                                            <Link to="#">
                                                <Link className="text-xs lg:text-sm leading-none  text-white hover:text-secondary transition duration-300">
                                                    Liên lạc
                                                </Link>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:w-1/4 md:w-1/2 hidden lg:flex ">
                                <div className="w-full  px-2">
                                    <ul>
                                        <li>
                                            <h3 className="text-white text-lg font-black pb-5">
                                                Thư viện
                                            </h3>
                                        </li>
                                        <li>
                                            <div className="justify-star rounded-md  gap-2 flex flex-wrap items-center content-center ">
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={j}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={k}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={l}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={z}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={x}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                                <div className="bg-a w-24 h-24 cursor-pointer">
                                                    <img
                                                        className=" absolute  object-cover w-24 h-24  rounded-lg"
                                                        src={c}
                                                    />
                                                    <a
                                                        href="https://www.instagram.com/cengrooming/"
                                                        className=" relative  h-full w-full flex justify-center items-center text-transparent hover:text-white text-[20px] hover:bg-gray-500/50 rounded-lg transition duration-300"
                                                    >
                                                        <TfiInstagram />{" "}
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:w-1/4 md:w-1/2 hidden lg:flex">
                                <div className="w-full  px-2">
                                    <ul>
                                        <li>
                                            <h3 className="text-white text-lg font-black pb-5">
                                                Giờ làm việc
                                            </h3>
                                        </li>
                                        <li>
                                            <div className="bg-[#554D4A] text-white py-4 px-5 rounded-md">
                                                <div>
                                                    <p className="cursor-unset hover:text-secondary cursor-pointer transition duration-300">
                                                        Mon - Fri:{" "}
                                                        <p className="float-right font-fontHead font-base">
                                                            9am – 7pm
                                                        </p>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="cursor-unset hover:text-secondary cursor-pointer transition duration-300">
                                                        Saturday:{" "}
                                                        <p className="float-right font-fontHead font-base">
                                                            9am – 8pm
                                                        </p>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="cursor-unset hover:text-secondary cursor-pointer transition duration-300">
                                                        Sunday:{" "}
                                                        <p className="float-right font-fontHead font-base">
                                                            Close
                                                        </p>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="mt-2 py-5 text-white space-y-2">
                                            <div className="flex space-x-3">
                                                <MdLocalPhone className="text-lg" />
                                                <p className=" font-normal text-sm">
                                                    0917 362 422
                                                </p>
                                            </div>
                                            <div className="flex space-x-3">
                                                <TfiLocationPin className="text-lg" />
                                                <p className="font-normal  text-sm">
                                                    92b Dương Bá Trạc, Phường 2,
                                                    Quận 8, tpHCM
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex flex-col justify-center items-center">
                    <p className=" text-xs font-light lg:text-sm leading-none text-[#afafaf] dark:text-gray-50">
                        Copyright © 2023 Cengrooming by Thanhtin412. All Rights
                        Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;
