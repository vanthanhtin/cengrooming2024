import React from "react";
import paw from "../img/paw.png";
import "./style.css";
import { NameCard, Subtitle, Title, TitleBig, TitleSmall} from '../Styled'
import {dataSectionServiceBig} from '../contexts/data'

const SectionServiceBig = () => {
    return (
        <div className="  my-8 container m-auto h-auto max-w-[1200px]">
            <div className=" py-8 text-center flex flex-col items-center ">
                <Subtitle>OUR BENEFITS</Subtitle>
                <TitleBig>Explore How Can We Help</TitleBig>
                <Title>Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Maecenas volutpat blandit aliquam etiam scelerisque.</Title>
            </div>
            <div className="w-full grid lg:flex gap-5 lg:gap-5 xl:gap-7 font-medium px-5 ">
                {dataSectionServiceBig.map((item) => {
                    return(
                        <div className=" group cursor-pointer hover:bg-white  hover:-translate-y-3 transition duration-300 flex flex-col justify-center items-center px-6 py-5 bg-vang hover:shadow-big rounded-lg">
                        <div className=" flex bg-pawSection1 group-hover:bg-pawSection2 bg-no-repeat w-[115px] h-[121px] bg-center bg-scroll transition-all justify-center items-center ">
                            <img src={item.img} className=" w-fit h-fit z-20" />
                        </div>
                        
                        <div className=" flex flex-col justify-center items-center text-center">
                            <NameCard $primary={true} className="my-4">{item.name}</NameCard>
                            <TitleSmall className="">
                                {item.subtitle}
                            </TitleSmall>
                            <div className="flex mt-7 gap-3">
                                <img
                                    src={paw}
                                    className=" w-5 h-5 rotate-45 group-hover:origin-center group-hover:-rotate-45 transition duration-300"
                                />
                                <p className=" font-extrabold text-sm">LEARN MORE</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SectionServiceBig;

