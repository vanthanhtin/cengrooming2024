import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
import { CartContext } from "../contexts/CartContext";
import { motion } from "framer-motion";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import pagetitlecart from "../img/page-title-cart.jpg";
import { BsDot } from "react-icons/bs";
import { Input } from "@material-tailwind/react";

const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});

const Cart = (item) => {
    const {
        cart,
        removeFromCart,
        clearCart,
        itemAmount,
        total,
        decreaseAmount,
        increaseAmount,
    } = useContext(CartContext);
    const { id, name, price, src, amount } = item;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <div className="  w-screen pt-[70px]">
                <div
                    className="bg-no-repeat bg-cover bg-right"
                    style={{ backgroundImage: `url(${pagetitlecart})` }}
                >
                    <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
                        <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
                            Cart
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
                            <Link
                                to={"/shop"}
                                className=" text-secondary/80 hover:text-secondary transition duration-300"
                            >
                                CỬA HÀNG
                            </Link>
                            <p className="  text-secondary text-3xl flex justify-center items-center">
                                <BsDot />
                            </p>
                            <p className=" text-secondary/80 hover:text-secondary transition duration-300">
                                GIỎ HÀNG
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {cart.length < 1 && (
                <div className="flex flex-wrap max-w-7xl mx-auto my-20">
                    <div className="w-full sm:w-2/2 md:w-2/2 xl:w-5/5 p-4 h-[500px] my-auto">
                        <div className="shadow-sm b-t bg-stone-500/50 shadow-zinc-900/10 rounded-lg overflow-hidden h-full">
                            <p className="text-xl font-extralight tracking-widest text-center pt-6">
                                There are no products in your cart.
                            </p>
                            <p className="text-center mt-2 font-bold tracking-wide">
                                Add the products you like to the cart and buy.
                            </p>
                            <Link to="/shop">
                                <div className="mx-auto text-center mt-2">
                                    <button className=" inline-flex justify-center rounded-md border border-neutral-300 shadow-sm shadow-zinc-900/10 px-4 py-2 bg-gradient-to-l from-blue-600  to-blue-500 text-sm text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-700 hover:to-blue-500 hover:shadow-blue-700 hover:shadow-inner mt-4">
                                        <div className="flex flex-col self-center">
                                            <span className="font-light">
                                                Continue Shopping
                                            </span>
                                        </div>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {cart.length > 0 && (
                <div className="flex flex-col justify-center max-w-7xl mx-auto my-32 px-20">
                    <div className="flex flex-col w-full hidden lg:block">
                        <div className=" flex justify-between bg-nau text-white px-10 py-5  rounded-xl">
                            <h1 className=" w-[33%]">Sản phẩm</h1>
                            <h1 className="flex justify-center w-[6%]">Giá</h1>
                            <h1 className="flex justify-center w-[15%]">
                                Số lượng
                            </h1>
                            <h1 className="flex justify-center w-[20%]">
                                Tổng
                            </h1>
                            <h1 className=" w-3.5"></h1>
                        </div>
                        <div className="flex flex-col w-full flex-1 my-4">
                            {cart.map((item) => {
                                return (
                                    <>
                                        <div className="w-full  my-auto">
                                            <div className="flex justify-between bg-white w-full  border-b py-6 overflow-hidden  h-full">
                                                {/* --------------------- product ----------------- */}
                                                <div className="flex w-[33%] justify-items-center items-center">
                                                    <img
                                                        className="w-20 my-auto object-contain rounded-xl"
                                                        src={item.src[0]}
                                                        alt="Cart Item"
                                                    />
                                                    <Link
                                                        to={`/shop/${item.id}`}
                                                    >
                                                        <h1 className="pl-3 text-lg hover:text-secondary transition duration-300">
                                                            {item.name}
                                                        </h1>
                                                    </Link>
                                                </div>
                                                <p className=" flex  w-[10%] text-secondary font-fontHead text-lg flex justify-center items-center">
                                                    {VND.format(item.price)}
                                                </p>
                                                {/* -----------------amount--------------- */}
                                                <div className="flex w-[15%] my-auto">
                                                    <div className=" py-3 px-4 w-fit bg-[#F9F4EA] flex items-center h-fit my-auto text-nau  items-center gap-x-4 rounded-md">
                                                        <div
                                                            onClick={() =>
                                                                decreaseAmount(
                                                                    item.id
                                                                )
                                                            }
                                                            className="flex cursor-pointer p-2 bg-white text-secondary hover:bg-secondary hover:text-white rounded-md transition duration-300"
                                                        >
                                                            <IoMdRemove />
                                                        </div>
                                                        <div className="flex w-12 font-fontHead justify-center items-center">
                                                            {item.amount}
                                                        </div>
                                                        <div
                                                            onClick={() =>
                                                                increaseAmount(
                                                                    item.id
                                                                )
                                                            }
                                                            className="flex cursor-pointer p-2 bg-white text-secondary hover:bg-secondary hover:text-white rounded-md transition duration-300"
                                                        >
                                                            <IoMdAdd />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ----------------------total--------------- */}
                                                <div className=" flex items-center justify-center w-[20%]">
                                                    <p className=" text-secondary font-fontHead text-lg flex justify-center items-center">
                                                        {VND.format(
                                                            item.price *
                                                                item.amount
                                                        )}
                                                    </p>
                                                </div>

                                                {/* -------------------remove------------------ */}
                                                <div className="flex flex-row w-3.5 p-8">
                                                    <button
                                                        className="ml-auto hover:text-red-500 transition duration-300"
                                                        onClick={() =>
                                                            removeFromCart(
                                                                item.id
                                                            )
                                                        }
                                                    >
                                                        <RiCloseFill className=" text-2xl" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div className=" flex flex-col lg:hidden container mx-auto gap-y-10">
                        {cart.map((item) => {
                            return (
                                <>
                                    <div className=" flex flex-col rounded-3xl shadow-big p-5 gap-y-5">
                                        <div className=" flex justify-between">
                                            <img
                                                className="w-20 my-auto object-contain rounded-xl"
                                                src={item.src[0]}
                                                alt="Cart Item"
                                            />
                                            <div className="flex flex-row items-start">
                                                <button
                                                    className="ml-auto hover:text-red-500 transition duration-300"
                                                    onClick={() =>
                                                        removeFromCart(item.id)
                                                    }
                                                >
                                                    <RiCloseFill className=" text-2xl" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className=" flex justify-between items-center">
                                            <h1>Sản phẩm:</h1>
                                            <Link to={`/shop/${item.id}`}>
                                                <h1 className="pl-3 text-lg hover:text-secondary transition duration-300">
                                                    {item.name}
                                                </h1>
                                            </Link>
                                        </div>
                                        <div className=" flex justify-between items-center">
                                            <h1>Giá:</h1>
                                            <p className=" text-secondary font-fontHead text-lg flex justify-center items-center">
                                                {VND.format(
                                                    item.price * item.amount
                                                )}
                                            </p>
                                        </div>
                                        <div className=" flex justify-between items-center">
                                            <h1>Số lượng:</h1>
                                            <div className=" py-2 px-4 w-fit bg-[#F9F4EA] flex items-center h-fit my-auto text-nau  items-center gap-x-1 rounded-md">
                                                <div
                                                    onClick={() =>
                                                        decreaseAmount(item.id)
                                                    }
                                                    className="flex cursor-pointer p-2 bg-white text-secondary hover:bg-secondary hover:text-white rounded-md transition duration-300"
                                                >
                                                    <IoMdRemove />
                                                </div>
                                                <div className="flex w-12 font-fontHead justify-center items-center">
                                                    {item.amount}
                                                </div>
                                                <div
                                                    onClick={() =>
                                                        increaseAmount(item.id)
                                                    }
                                                    className="flex cursor-pointer p-2 bg-white text-secondary hover:bg-secondary hover:text-white rounded-md transition duration-300"
                                                >
                                                    <IoMdAdd />
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-between items-center">
                                            <h1>Tổng:</h1>
                                            <p className=" text-secondary font-fontHead text-lg flex justify-center items-center">
                                                {VND.format(
                                                    item.price * item.amount
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>

                    <div className=" flex flex-col lg:flex-row justify-between items-start pt-7 gap-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            <div className="w-60 flex items-center">
                                <Input
                                    label="Coupon code"
                                    className=" !bg-white"
                                    size="lg"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className=" text-white py-2 w-fit bg-secondary hover:bg-nau font-medium text-base  rounded-lg cursor-pointer px-6 justify-center items-center shadow-xl transition-all"
                                whileTap={{ scale: 0.95 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 17,
                                }}
                            >
                                ÁP DỤNG
                            </motion.button>
                        </div>

                        <div className=" flex flex-col rounded-lg shadow-3xl p-10 gap-3">
                            <div className=" flex justify-between">
                                <h1>Tổng</h1>
                                <h1 className=" text-secondary">
                                    {VND.format(total)}
                                </h1>
                            </div>
                            <div className=" flex justify-between">
                                <h1>Giao hàng</h1>
                                <h1 className=" text-secondary">Miễn phí</h1>
                            </div>
                            <div className=" flex text-xl justify-between border-t pt-3">
                                <h1 className="">Thanh toán</h1>
                                <h1 className=" text-secondary">
                                    {VND.format(total)}
                                </h1>
                            </div>
                            <Link to="/shop/checkout">
                                <motion.button
                                    type="submit"
                                    className=" text-white w-full bg-secondary hover:bg-nau font-bold text-lg py-3 rounded-lg cursor-pointer justify-center items-center  shadow-xl transition-all"
                                    whileTap={{ scale: 0.95 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 17,
                                    }}
                                >
                                    THANH TOÁN NGAY
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default Cart;
