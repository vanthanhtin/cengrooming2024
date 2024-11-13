import React, { useContext, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {dataProduct} from '../contexts/dataProduct'
import {CartContext} from '../contexts/CartContext'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'
import {motion} from 'framer-motion';
import {BsDot} from 'react-icons/bs'

var Carousel = require('react-responsive-carousel').Carousel;




const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    });

const ProductDetails = () => {
    const navigate = useNavigate();
    const {addToCart} = useContext(CartContext);

  //  get the product id from the url
    let {productId} = useParams()

  //  get the single product based on the id
    const thisProduct = dataProduct.find(product => product.id === Number(productId))

  //  if product not found
    if(!thisProduct){
        return <section className='h-screen flex justify-center items-center'>Loading...</section>
    }


  //  destructure product
    const { id, name, price, description, src, } = thisProduct;




    return (
    <motion.div
      className=" mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      <div className="  w-screen">
        <div className=" bgContact">
          <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
            <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
              Shop
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
              <p className="uppercase text-secondary/80 hover:text-secondary transition duration-300">
                {thisProduct.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className=' py-40'>
        <div className="flex items-center w-2/3 cursor-pointer h-[fit-content] mx-auto text-headColor my-5 transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-[16px] h-[16px]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                <p onClick={() => navigate(-1)} className="ml-[2px] mr-[10px] hover:text-secondary">Trở về</p>
            </div>
        <div className="flex w-[1280px] m-auto ">
            
            <Carousel 
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={false}
            autoFocus={false}
            emulateTouch={true}
            infiniteLoop={true}
            className="w-[48%] pr-10 "
            >
                    {thisProduct.src.map((item)=>{
                            return(
                                <div className="rounded-md thumb1">
                                    <img key={item.id} src={item} className="rounded-md"/>
                                </div>
                            )
                        })}
                    
            </Carousel>
            <div className="w-[48%]">
                <div>
                    <h1 className="text-3xl font-fontHead">{thisProduct.name}</h1>
                    <span className=" text-contentColor text-xs"> SKU: <strong className="font-medium">{thisProduct.id}</strong></span>
                </div>
                <div className="h-20 grid content-center">
                    <span className="text-3xl top-[117px] font-bold text-secondary">{VND.format(thisProduct.price)}</span>
                </div>
                <p className="text-contentColor">{thisProduct.description} <br/><br/> {thisProduct.description2}</p>

                <div className="flex pt-10 font-black ">
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={() => addToCart(thisProduct, id)} 
                        className=" text-white w-[250px] h-[55px] bg-[#f69946] rounded-md shadow-xl ml-8 hover:bg-nau"
                        >
                            Thêm vào giỏ
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
    )
};

export default ProductDetails;
// onClick={() => addToCart(thisProduct, id)}