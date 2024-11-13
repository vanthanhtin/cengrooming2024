import React, { useEffect } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { dataBenefit } from "../contexts/data";
import { Subtitle, TitleBig} from '../Styled'

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={` text-secondary ${
                id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
        </svg>
    );
}

const Benefits = () => {
    useEffect(() => {
        Aos.init();
    });
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="">
            <section class="bg-white dark:bg-gray-900  bg-benefit  bg-right my-10">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className=" w-full  pl-0 md:pl-10">
                        <div class="mx-auto max-w-screen-sm mb-8 lg:mb-16">
                            <Subtitle>
                                Benefits
                            </Subtitle>
                            <TitleBig>
                                Why Choose Our Pet Care Company?
                            </TitleBig>
                        </div>
                        {dataBenefit.map((item)=>{
                            const id=item.id
                            return(
                                <Accordion
                                open={open === id}
                                className="mb-3 rounded-lg bg-vang px-6 flex w-full md:w-3/4 lg:w-1/2"
                            >
                                <div className=" flex justify-center items-center bg-white !w-[43px] h-10 rounded-lg mt-2">
                                    <Icon id={id} open={open} />
                                </div>
                                <AccordionHeader
                                    onClick={() => handleOpen(id)}
                                    className={` flex flex-col border-b-0 transition-colors text-nau hover:!text-nau font-primary font-extrabold justify-start items-start pl-4 ${
                                        open === id
                                            ? " text-nau hover:!text-nau text-left"
                                            : ""
                                    }`}
                                >
                                    {item.name}
                                    <AccordionBody className="pt-4 text-base font-normal font-primary">
                                        {item.subtitle}
                                    </AccordionBody>
                                </AccordionHeader>
                            </Accordion>
                            )
                        })}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;
