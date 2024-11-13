import React, { useContext, useEffect, useState, useRef } from "react";
import { useClickAway } from "react-use";
import { SidebarContext } from "../contexts/SidebarContext";

import Logo from "../img/logo-header.png";
import { Link } from "react-router-dom";
import "./style.css";
import { CartContext } from "../contexts/CartContext";
import { BsChevronDown } from "react-icons/bs";
import {
    Drawer,
    ThemeProvider,
    IconButton,
    Badge,
} from "@material-tailwind/react";
import Sidebar from "./sidebar/Sidebar";
import { LuShoppingCart } from "react-icons/lu";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion, useAnimate, stagger } from "framer-motion";
import ButtonMenu from "./buttonMenu/ButtonMenu";

const customTheme = {
    drawer: {
        defaultProps: {
            size: 300,
            overlay: true,
            placement: "left",
            overlayProps: undefined,
            dismiss: undefined,
            onClose: undefined,
            transition: {
                type: "tween",
                duration: 0.3,
            },
        },
        styles: {
            base: {
                drawer: {
                    position: "fixed",
                    zIndex: "z-[9999]",
                    pointerEvents: "pointer-events-auto",
                    backgroundColor: "none",
                    boxSizing: "box-border",
                    width: "w-[400px]",
                    height: "h-auto",
                    boxShadow: "none",
                    marginLeft: "0",
                    
                },
                overlay: {
                    position: "fixed",
                    inset: "inset-0",
                    width: "w-full",
                    height: "h-[100vh]",
                    pointerEvents: "pointer-events-auto",
                    zIndex: "z-[999]",
                    backgroundColor: "bg-black",
                    backgroundOpacity: "bg-opacity-40",
                    backdropBlur: "backdrop-blur-sm",
                    className: "space-x-0",
                },
            },
        },
    },
};

const Header = () => {
    //   header state
    const [isActive, setIsActive] = useState(false);
    const [isopen, setOpen] = useState(false);
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    //  event header
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });

    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    const ref = useRef(null);
    useClickAway(ref, () => setOpen(false));

    const [count, setCount] = useState(0);

    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;

            setVisible(position > moving);
            setPosition(moving);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    const cls = visible ? "visibleUP" : "hiddenDown";

    return (
        <header className={cls}>
            <div className="container max-w-none p-0 flex flex-col justify-between items-center h-full m-auto">
                <div className="dark:bg-gray-900 md:px-6  w-full  font-fontHead">
                    <div className="px-0 container mx-auto flex justify-center items-center">
                        <div className=" logo h-[70px] ">
                            <Link to={"/"} className=" ">
                                <img src={Logo} className=" h-[70px]" />
                            </Link>
                        </div>
                        <ul className="hidden w-8/12 md:flex items-center xl:justify-center md:justify-start md:ml-5 lg:space-x-8 space-x-2">
                            <li className="li1">
                                <Link
                                    to={"/"}
                                    className="  text_underline hover:text-secondary  focus:text-secondary"
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="li2">
                                <Link
                                    to={"/shop"}
                                    className="  text_underline  hover:text-secondary focus:text-secondary"
                                >
                                    Cửa hàng
                                </Link>
                            </li>
                            <li className="li3">
                                <div className="group py-[21px]">
                                    <div className="flex justify-center items-center  hover:text-secondary focus:text-secondary ">
                                        <h1 className="  flex   transition duration-300  focus:text-secondary  focus:text-secondary">
                                            Khoá học
                                        </h1>
                                        <BsChevronDown className="ml-1 mt-1 stroke-1 text-xs  hover:text-secondary group-hover:rotate-[-180deg] cursor-pointer  transition" />
                                    </div>

                                    <motion.ul
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        // style={{ translateX: "-50%" }}
                                        className="absolute w-max py-2 mt-[20px] hidden rounded-lg  bg-white mt-4 shadow-[0px_25px_60px_0px_rgba(0,0,0,0.3)] group-hover:block ring-1 ring-black ring-opacity-5 transition duration-300"
                                    >
                                        <li className="w-full items-start  hover:text-secondary transition duration-300 ">
                                            <Link
                                                className=" focus:text-secondary py-1 pl-4 pr-20 block whitespace-no-wrap hover:bg-gray-200  transition duration-300"
                                                href="#"
                                            >
                                                Level C
                                            </Link>
                                        </li>
                                        <li className=" w-full  hover:text-secondary transition duration-300  focus:text-secondary">
                                            <Link
                                                className="py-1 pl-4 pr-20 block whitespace-no-wrap hover:bg-gray-200  transition duration-300"
                                                href="#"
                                            >
                                                Level B
                                            </Link>
                                        </li>
                                    </motion.ul>
                                </div>
                            </li>
                            <li className="li4">
                                <Link
                                    to={"/blog"}
                                    className="  text_underline  hover:text-secondary"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li className="li5">
                                <Link
                                    to={"/contact"}
                                    className="  text_underline  hover:text-secondary"
                                >
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>

                        <div className="hidden md:flex items-center justify-end relative top-1 ">
                            <div
                                onClick={openDrawerRight}
                                className="float-right cursor-pointer relative right-3 hover:text-secondary"
                            >
                                {/* <Badge
                                    content={itemAmount}
                                    className=" bg-secondary translate-x-[20%] -translate-y-[20%] "
                                >
                                    <IconButton className=" bg-white shadow-none hover:shadow-none">
                                        <LuShoppingCart className="h-6 w-6 text-nau hover:text-secondary transition-all" />
                                    </IconButton>
                                </Badge> */}
                                <div className="indicator group " >
                                    <span className="indicator-item badge badge-secondary bg-secondary border-none -translate-y-[20%] w-[32px] h-[28px] leading-none grid place-items-center text-[11px] font-medium">
                                        {itemAmount < 99 ? itemAmount : "99+"}
                                    </span>
                                    <IconButton className=" bg-white shadow-none hover:shadow-none">
                                        <LuShoppingCart className="h-7 w-7 text-nau hover:text-secondary transition-all" />
                                    </IconButton>
                                </div>
                            </div>
                            <ThemeProvider value={customTheme}>
                                <Drawer
                                    placement="right"
                                    size={400}
                                    open={openRight}
                                    onClose={closeDrawerRight}
                                    className="top-16 w-full pr-10"
                                >
                                    <Sidebar />
                                </Drawer>
                            </ThemeProvider>
                        </div>
                        <div className="flex md:hidden absolute right-4 top-[15px]  ">
                            <div
                                onClick={openDrawerRight}
                                className="float-right cursor-pointer relative right-3 hover:text-secondary"
                            >
                                {/* <Badge
                                    content={itemAmount}
                                    className=" bg-secondary translate-x-[20%] -translate-y-[20%] "
                                >
                                    
                                    <IconButton className=" bg-white shadow-none hover:shadow-none">
                                        <LuShoppingCart className="h-6 w-6 text-nau hover:text-secondary transition-all" />
                                    </IconButton>
                                </Badge > */}
                                <div className="indicator group " >
                                    <span className="indicator-item badge badge-secondary group bg-secondary border-none -translate-y-[20%] w-[32px] h-[28px] leading-none grid place-items-center text-xs font-medium">
                                        {itemAmount < 99 ? itemAmount : "99+"}
                                    </span>
                                    <IconButton className=" bg-white shadow-none hover:shadow-none text-nau hover:text-secondary">
                                        <LuShoppingCart className="h-7 w-7  transition-all" />
                                    </IconButton>
                                </div>
                            </div>
                            <ThemeProvider value={customTheme}>
                                <Drawer
                                    placement="right"
                                    size={400}
                                    open={openRight}
                                    // onClose={closeDrawerRight}
                                    className="top-16 w-full pr-10"
                                >
                                    <Sidebar />
                                </Drawer>
                            </ThemeProvider>
                        </div>
                        <ButtonMenu className=" lg:hidden" key={count} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
