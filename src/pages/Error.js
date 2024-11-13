import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import img404 from "../img/404.png";
import { Button } from "@material-tailwind/react";
import { TbPawFilled } from "react-icons/tb";

const Error = () => {
    const navigate = useNavigate();

    return (
        <div className=" flex flex-col justify-center items-center w-screen m-auto h-full my-32">
            <img src={img404} />
            <h1 className=" font-fontHead text-5xl py-5">
                Sorry We Can`t Find That Page!
            </h1>
            <p className=" font-medium">
                Trang bạn đang tìm kiếm đã bị di chuyển, xóa, đổi tên hoặc không
                tồn tại.
            </p>
            <div class="mx-auto mt-5 w-screen max-w-screen-md flex flex-col justify-center items-center pt-10 leading-6">
                <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
                    <svg
                        class="absolute left-2 block h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" class=""></circle>
                        <line
                            x1="21"
                            y1="21"
                            x2="16.65"
                            y2="16.65"
                            class=""
                        ></line>
                    </svg>
                    <input
                        type="name"
                        name="search"
                        class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none"
                        placeholder="Cửa hàng, kéo, máy sấy, ..."
                    />
                    {/* <button type="submit" class=" font-xl font-bold absolute right-0 mr-1 h-12 items-center justify-center rounded-lg bg-secondary px-7 text-white font-light hover:bg-nau transition duration-300 shadow-lg">Tìm kiếm</button> */}
                    <Button className=" text-sm w-[140px] absolute right-0 mr-1 h-12 items-center justify-center rounded-lg bg-secondary text-white font-bold hover:bg-nau transition duration-300 hover:shadow-3xl">
                        Tìm kiếm
                    </Button>
                </form>
                <Link to={"/"}>
                    <button class="btn border-none group bg-secondary hover:bg-nau text-white font-extrabold text-sm uppercase my-10 transition-all ">
                        take my home
                        <TbPawFilled className=" w-5 h-5  rotate-45 group-hover:origin-center group-hover:text-secondary group-hover:-rotate-45 transition-all"></TbPawFilled>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
