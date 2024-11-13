import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
//  import cart context
import { CartContext } from "../contexts/CartContext";
import "./style.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Rating from "@mui/material/Rating";
import { motion } from "framer-motion";

const RotateRight = ({ size = 20, color = "#f69946" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
    </svg>
);

const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});

const Loader = ({ className }) => (
    <div className={className}>
        <RotateRight/>
    </div>
);

const Button = ({ onSubmit, text, svg, loading = false, disabled }) => {
    return (
        <button
            className="submit-btn flex justify-center items-center "
            onClick={onSubmit}
            disabled={disabled}
        >
            {!loading ? (
                <TiShoppingCart className=" text-secondary group-hover:text-white text-3xl" />
            ) : (
                <Loader className=" spinner " />
            )}
        </button>
    );
};

function Product({ c }) {
    const { addToCart } = useContext(CartContext);

    const [showLoader, setShowLoader] = React.useState(false);
    const onSubmit = () => {
        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 1000);
    };

    return (
        <motion.div layout animate>
            <div className="mx-auto my-2 w-[300px] card bg-[#FCF9F4] rounded-lg hover:shadow-3xl transition duration-300">
                <div className=" h-[300px] md-4 relative overflow-hidden group border-b">
                    <Link
                        to={`/shop/${c.id}`}
                        className=" text-4xl flex justify-center items-center text-secondary drop-shadow-xl"
                    >
                        <div className="w-full h-full flex justify-center items-center bg-white rounded-md">
                            <div className="w-full cursor-pointer">
                                <img
                                    className="  transition duration-300 rounded-t-lg "
                                    src={c.src[0]}
                                    alt=""
                                />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="h-[120px] w-[90%] flex flex-col justify-evenly  m-auto">
                    <Link to={`/shop/${c.id}`} className="w-fit" title={c.name}>
                        <h1 className=" text_underline text-lg">
                            {c.name.length < 25
                                ? `${c.name}`
                                : `${c.name.substring(0, 25)}...`}
                        </h1>
                    </Link>
                    <div className="flex justify-between items-center w-full ">
                        <div className="flex flex-col items-center">
                            <h1 className=" text-secondary">
                                {VND.format(c.price)}
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="flex text-secondary text-sm">
                                    <Rating
                                        name="size-small"
                                        precision={0.5}
                                        value={c.rating}
                                        size="small"
                                        color="#F69946"
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                        <motion.button
                            onClick={() => {
                                addToCart(c, c.id);
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="flex justify-center items-center group bg-white  hover:bg-nau transition duration-300 shadow-3xl w-12 h-12 rounded-md"
                        >
                            {/* <div className="flex justify-center items-center bg-white text-secondary hover:text-white hover:bg-nau transition duration-300 shadow-3xl w-12 h-12 rounded-lg">
                                <RiShoppingBasket2Line className=" text-2xl" />
                            </div> */}
                            <Button
                                text="Add"
                                onSubmit={onSubmit}
                                loading={showLoader}
                                disabled={showLoader}
                                svg={RiShoppingBasket2Line}
                                className=""
                            ></Button>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Product;
