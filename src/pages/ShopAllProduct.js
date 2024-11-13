import React, { useContext} from 'react'
import Product from '../components/Product'
import bgshop from '../img/bgshop.png'
import {TfiMinus} from 'react-icons/tfi'
import './style.css'
import { motion } from 'framer-motion'
import infobox1 from '../img/groomingtool.png'
import infobox2 from '../img/infobox-img-2-124x135.png'
import infobox3 from '../img/infobox-img-1-116x135.png'
import {Button} from '@material-tailwind/react'
import tongdo1 from '../img/product/tongdo1.png'
import keothangchonrynonebg from '../img/product/keothangchonrynonebg.png'
import './style.css'





const Shop = () => {
    
    
    return (
    <motion.div 
    className=' mt-20'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}>
        <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div class="flex flex-col md:flex-row items-strech justify-between bg-[#DAC7C1] dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg">
                    <div class="flex flex-col justify-center md:w-1/2">
                        <p className='text-sm lg:text-md text-secondary font-medium'>CHUYÊN NGHIỆP</p>
                        <h1 class="text-3xl lg:text-3xl font-semibold dark:text-white">Khoá học grooming Level C</h1>
                        <p class="text-base lg:text-xl dark:text-white mt-2">Ưu đãi tặng bộ dụng cụ lên tới <span class="font-bold">5.000.000₫</span></p>
                        <Button className=" text-sm w-[140px] right-0 mr-1 mt-4 items-center justify-center rounded-lg bg-secondary text-white font-bold hover:bg-nau transition-all hover:shadow-3xl">Đăng ký</Button>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" class="" />
                    </div>
                </div>
                <div class=" md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 h-auto flex flex-col justify-between">
                    <div class=" cursor-pointer flex justify-between bg-[#B3DEEF] dark:bg-gray-800 mb-5 py-6 px-6 md:py-0 md:px-4 lg:px-6 relative rounded-lg" >
                        <div class="flex flex-col w-[75%] justify-center my-5">
                            <p className='text-sm md:text-xs lg:text-md text-secondary font-medium'>BÁN CHẠY</p>
                            <h1 class="text-3xl md:text-3xl lg:text-3xl font-semibold dark:text-white">Kéo chonry</h1>
                            <p class="text-base lg:text-xl dark:text-white">Chỉ từ <span class="font-bold">1.200.000₫</span></p>
                        </div>
                        <div class="flex justify-end w-[25%] items-center md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src={keothangchonrynonebg} alt="" class="md:w-16 lg:w-full " />
                        </div>
                    </div>

                    <div class=" cursor-pointer flex justify-between bg-[#BFDDD7] dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 relative rounded-lg">
                        <div class="flex flex-col w-[75%] justify-center my-5">
                            <p className='text-sm md:text-xs lg:text-md text-secondary font-medium'>SẢN PHẨM MỚI</p>
                            <h1 class="text-3xl md:text-3xl lg:text-3xl font-semibold dark:text-white">Tông đơ điện</h1>
                            <p class="text-base lg:text-xl dark:text-white">Chỉ từ <span class="font-bold">2.990.000₫</span></p>
                        </div>
                        <div class="flex justify-end w-[25%] items-center md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
                            <img src={tongdo1} alt="" class="md:w-16 lg:w-full " />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
        <div className=' container mx-auto'>
            <div className=' flex flex-col'>
                <div className='w-full grid lg:flex gap-5 lg:gap-5 xl:gap-16 font-medium'>
                    <div></div>
                    <div></div>
                    <div className='group cursor-pointer hover:-translate-y-3 transition-all flex bg-white shadow-3xl rounded-lg'>
                        <img src={infobox1} className=' w-36 rounded-xl' />
                        <div className=' flex flex-col justify-center'>
                            <h1 className=' text-lg pl-3'>Grooming tools</h1>
                            <p className=' text-sm pl-3 pt-2'>Odio eumod lacinia quis risus. Dolor morbi non ornare.</p>
                            
                        </div>
                    </div>
                    <div className='group cursor-pointer hover:-translate-y-3 transition-all flex bg-white shadow-3xl rounded-lg'>
                        <img src={infobox2} className=' w-36 rounded-xl' />
                        <div className=' flex flex-col justify-center'>
                            <h1 className=' text-lg pl-3'>Clothes for Pets</h1>
                            <p className=' text-sm pl-3 pt-2'>Pet health and wellness that’s one step ahead.</p>
                            
                        </div>
                    </div>
                    <div className='group cursor-pointer hover:-translate-y-3 transition-all flex bg-white shadow-3xl rounded-lg'>
                        <img src={infobox3} className=' w-36 rounded-xl' />
                        <div className=' flex flex-col justify-center'>
                            <h1 className=' text-lg pl-3'>Pets Game Toys</h1>
                            <p className=' text-sm pl-3 pt-2'>Risus ultricies tristique nulla aliquet enim tortor urna.</p>
                            
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div>
        <section className=''>
                <div className='mx-auto container py-8'>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-start ">

                        <Product/>
                        
                    </div>
                </div>
        </section>
    </div> 
        



        
    </motion.div>
  )
}

export default Shop
