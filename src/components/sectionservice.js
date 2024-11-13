import React from 'react'
import './style.css'
import { TitleSmall, NameCardSmall} from '../Styled'
import {dataSectionservice} from '../contexts/data'

const Sectionservice = () => {
    return (
    <div className=' relative z-50 top-[-75px] my-8 container m-auto h-auto max-w-[1200px]'>
        <div className='w-full grid lg:flex gap-5 lg:gap-5 xl:gap-5 font-medium'>
            {dataSectionservice.map((item)=>{
                return(
                    <div className='cursor-pointer group hover:bg-nau hover:text-white hover:-translate-y-3 transition duration-300 flex flex-row justify-center items-center px-6 py-6 bg-white shadow-3xl rounded-lg'>
                    <img src={item.img} className=' w-14 h-14' />
                    <div className=' px-5'>
                        <NameCardSmall className=' group-hover:text-white '>{item.name}</NameCardSmall>
                        <TitleSmall className=' pt-2 group-hover:text-white transition-all'>{item.subtitle}</TitleSmall>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
    )
}

export default Sectionservice

