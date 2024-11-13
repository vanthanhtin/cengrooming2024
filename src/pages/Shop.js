import React, { useContext, useState } from "react";
import Product from "../components/Product";
import "./style.css";
import { motion } from "framer-motion";
import infobox1 from "../img/groomingtool.png";
import infobox2 from "../img/infobox-img-2-124x135.png";
import infobox3 from "../img/infobox-img-1-116x135.png";
import infobox4 from "../img/infobox-img-3-118x135.png";
import { Button } from "@material-tailwind/react";
import tongdo1 from "../img/product/tongdo1.png";
import keothangchonrynonebg from "../img/product/keothangchonrynonebg.png";

import { CartContext } from "../contexts/CartContext";
import "./style.css";
import { dataProduct } from "../contexts/dataProduct";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});

const FilterNavText = ["food", "ao", "tools"];

const Shop = () => {
    const [filter, setFilter] = React.useState("all");
    const [content, setContent] = React.useState(dataProduct);
    const [filterContent, setFilterContent] = React.useState([]);

    const [count, setCount] = useState(0);

    React.useEffect(() => {
        FilterChange();
    }, [filter]);
    function FilterChange() {
        switch (filter) {
            case "food":
                setFilterContent(
                    content.filter((f) => f.categories === filter)
                );
                break;
            case "ao":
                setFilterContent(
                    content.filter((f) => f.categories === filter)
                );
                break;
            case "tools":
                setFilterContent(
                    content.filter((f) => f.categories === filter)
                );
                break;
            default:
                setFilterContent(content);
                break;
        }
    }

    return (
        <motion.div
            className=" py-[70px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            key={count}
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
                            <p className=" text-secondary/80 hover:text-secondary uppercase transition duration-300">
                                cửa hàng
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-20">
                <FilterNav
                    setFilter={setFilter}
                    FilterNavText={FilterNavText}
                />
                <FilterContent content={filterContent} />
            </div>
        </motion.div>
    );
};

function FilterNavItem({ FilterNavText, setFilter }) {
    function handleChange(e) {
        const status = e.target.id;
        setFilter(status);
    }

    return (
        <div>
            <div className=" mx-auto">
                <div className=" flex flex-col">
                    <div className="w-full lg:flex list-category font-medium">
                        <div
                            className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                            id="tools"
                            onClick={handleChange}
                        >
                            <img
                                src={infobox4}
                                className=" w-36 rounded-xl"
                                id="all"
                                onClick={handleChange}
                            ></img>
                            <div
                                className=" flex flex-col justify-center"
                                id="all"
                                onClick={handleChange}
                            >
                                <h1
                                    className=" text-lg pl-3"
                                    id="all"
                                    onClick={handleChange}
                                >
                                    Tất cả sản phẩm
                                </h1>
                                <p
                                    className=" text-sm pl-3 pt-2"
                                    id="all"
                                    onClick={handleChange}
                                >
                                    Odio eumod lacinia quis risus. Dolor morbi
                                    non ornare.
                                </p>
                            </div>
                        </div>
                        <div
                            className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                            id="tools"
                            onClick={handleChange}
                        >
                            <img
                                src={infobox1}
                                className=" w-36 rounded-xl"
                                id="tools"
                                onClick={handleChange}
                            ></img>
                            <div
                                className=" flex flex-col justify-center"
                                id="tools"
                                onClick={handleChange}
                            >
                                <h1
                                    className=" text-lg pl-3"
                                    id="tools"
                                    onClick={handleChange}
                                >
                                    Grooming tools
                                </h1>
                                <p
                                    className=" text-sm pl-3 pt-2"
                                    id="tools"
                                    onClick={handleChange}
                                >
                                    Odio eumod lacinia quis risus. Dolor morbi
                                    non ornare.
                                </p>
                            </div>
                        </div>
                        <div
                            id="ao"
                            onClick={handleChange}
                            className="group  w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                        >
                            <img
                                src={infobox2}
                                className=" w-36 rounded-xl"
                                id="ao"
                                onClick={handleChange}
                            />
                            <div
                                className=" flex flex-col justify-center"
                                id="ao"
                                onClick={handleChange}
                            >
                                <h1
                                    className=" text-lg pl-3"
                                    id="ao"
                                    onClick={handleChange}
                                >
                                    Clothes for Pets
                                </h1>
                                <p
                                    className=" text-sm pl-3 pt-2"
                                    id="ao"
                                    onClick={handleChange}
                                >
                                    Pet health and wellness that’s one step
                                    ahead.
                                </p>
                            </div>
                        </div>
                        <div
                            id="food"
                            onClick={handleChange}
                            className="group w-full cursor-pointer hover:-translate-y-3 transition duration-300 flex bg-white shadow-3xl rounded-lg"
                        >
                            <img
                                src={infobox3}
                                className=" w-36 rounded-xl"
                                id="food"
                                onClick={handleChange}
                            />
                            <div
                                className=" flex flex-col justify-center"
                                id="food"
                                onClick={handleChange}
                            >
                                <h1
                                    className=" text-lg pl-3"
                                    id="food"
                                    onClick={handleChange}
                                >
                                    Dogs Food & Toy
                                </h1>
                                <p
                                    className=" text-sm pl-3 pt-2"
                                    id="food"
                                    onClick={handleChange}
                                >
                                    Risus ultricies tristique nulla aliquet enim
                                    tortor urna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterContent({ content }) {
    const { addToCart } = useContext(CartContext);
    return (
        <div className="mx-auto container min-h-screen py-8">
            <motion.div layout className=" list-product">
                {content.map((c) => {
                    return <Product key={c.id} c={c} />;
                })}
            </motion.div>
        </div>
    );
}

function FilterNav({ FilterNavText, setFilter }) {
    return (
        <nav className="navbar navbar-light">
            <ul className="nav">
                <FilterNavItem setFilter={setFilter} />
            </ul>
        </nav>
    );
}

export default Shop;
