import React, {  } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { TbPawFilled } from "react-icons/tb";

const Blog = ({ blogs }) => {
    console.log("blogpage");
    console.log(blogs);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <div className="  w-screen">
                <div className=" bgContact">
                    <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
                        <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
                            Blogs
                        </p>
                        <div className=" text-sm lg:text-base flex justify-center items-center font-fontHead bg-white px-3 py-0.5 rounded-lg shadow-3xl">
                            <Link
                                to={"/"}
                                className=" text-secondary/80 hover:text-secondary uppercase transition duration-300"
                            >
                                TRANG CHỦ
                            </Link>
                            <p className="  text-secondary text-3xl flex justify-center items-center">
                                <BsDot />
                            </p>
                            <p className=" text-secondary/80 hover:text-secondary uppercase transition duration-300">
                                Blog
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.data.map((item) => (
                        <Link
                            key={item.id}
                            to={`/blog/${item.id}`}
                            class="group flex flex-col h-full border gap-y-5 border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5"
                        >
                            <div class="aspect-w-16 aspect-h-11">
                                <img
                                    class="w-full h-[250px] object-cover rounded-xl"
                                    src={`http://localhost:1337${item.coverImage.url}`}
                                    alt="Blog Image"
                                />
                            </div>
                            <div class="">
                                <h3 class="text-xl font-semibold text-gray-800">
                                    {item.blogTitle}
                                </h3>
                            </div>
                            <div className=" flex flex-col gap-y-4">
                                <div class=" flex text-gray-600">
                                    {item.categories.map((cate) => {
                                        return (
                                            <Chip
                                                key={cate.id}
                                                value={cate.name}
                                            />
                                        );
                                    })}
                                </div>
                                <div class="mt-auto flex items-center gap-x-3">
                                    <img
                                        class="size-8 rounded-full"
                                        src={`http://localhost:1337${item.authorImg.url}`}
                                        alt="Avatar"
                                    />
                                    <div>
                                        <h5 class="text-sm text-gray-800">
                                            {item.authorName}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}
            <div className=" container mx-auto flex flex-col lg:flex-row my-20 ">
                <div className="w-full lg:w-[80%] px-5 lg:px-20 ">
                    <div className=" flex flex-col gap-10 ">
                        {blogs.data.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className=" group hover:shadow-big rounded-xl transition-all duration-500"
                                >
                                    <div className=" w-full rounded-xl">
                                        <Link to="#">
                                            <img
                                                className=" rounded-t-lg object-cover w-full"
                                                src={`http://localhost:1337${item.coverImage.url}`}
                                            />
                                        </Link>
                                    </div>
                                    <div className=" bg-vang  group-hover:bg-white rounded-b-xl px-10 pb-10 transition-all duration-500">
                                        <div className=" bg-secondary absolute rounded-r w-fit text-white px-3 py-1 ml-[-40px] mt-[-16px] flex justify-start items-baseline flex-wrap ">
                                            <span className=" font-fontHead text-base inline-block ">
                                                April 13, 2021
                                            </span>
                                        </div>
                                        <div class=" flex w-fit font-bold pt-6 pb-2  transition-all duration-500">
                                            {item.categories.map((cate) => {
                                                return (
                                                    <div className=" flex justify-center items-center">
                                                        <BsDot className="text-3xl text-secondary"/>
                                                        <Link
                                                            to=""
                                                            key={cate.id}
                                                        >
                                                            <p className="text-nau hover:text-secondary  uppercase transition-all duration-500">
                                                                {cate.name}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <h1 className="hover-underline-animation left text-2xl lg:text-4xl cursor-pointer transition-all duration-500">
                                            The Best Flea Medicine for Dogs
                                        </h1>
                                        <div>
                                            {/* <Link
                                        to={`/shop/${c.id}`}
                                        className="w-fit"
                                        title={c.name}
                                    >
                                        <h1 className=" text_underline text-lg">
                                            {c.name.length < 25
                                                ? `${c.name}`
                                                : `${c.name.substring(
                                                      0,
                                                      25
                                                  )}...`}
                                        </h1>
                                    </Link> */}
                                            <p className=" py-4 text-xamnhat font-light">
                                                
                                                {item.content.long_text1.length < 200
                                                ? `${item.content.long_text1}`
                                                : `${item.content.long_text1.substring(
                                                      0,
                                                      200
                                                  )}...`}
                                            </p>
                                        </div>
                                        <button class=" flex btn group bg-transparent border-none shadow-none px-0 text-nau font-extrabold text-sm transition-all duration-500">
                                            <TbPawFilled className=" w-5 h-5  rotate-45 group-hover:origin-center text-secondary group-hover:-rotate-45 transition-all duration-500"></TbPawFilled>
                                            LEARN MORE
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full lg:w-[20%] ">bbbbbbbbbb</div>
            </div>
        </motion.div>
    );
};

export default Blog;
