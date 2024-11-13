import React, { useContext, useState, Fragment, useRef, } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem'
import {Scrollbars} from 'react-custom-scrollbars-2'
import '../style.css'
import {BsTrash3} from 'react-icons/bs'



const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const Sidebar = () => {

  const {cart, clearCart, itemAmount, total} = useContext(CartContext);



  if (!cart.length) {
    return (
      <div className='bg-white flex flex-col justify-center items-center gap-6 rounded-xl py-10 px-5 shadow-3xl'>
        <p className=' text-nau font-primary text-lg'>Không có sản phẩm trong giỏ hàng.</p>
        <Link
              to={`/shop`}
              className="flex justify-center items-center w-fit px-6 py-4 rounded-md  bg-secondary text-white hover:bg-white hover:text-secondary shadow-3xl transition duration-300"
            >
              TIẾP TỤC MUA HÀNG
        </Link>
      </div>
    )
  }

  return (
    <div className=' bg-white rounded-xl py-10 shadow-3xl' >
        <Scrollbars autoHeight
                    autoHeightMin={50}
                    autoHeightMax={600} 
                    className="flex scrollbar" 
                    style={{width: '360px' }}
        >
          <div className="flex flex-col gap-4 w-[360px] px-5 transition duration-300">
            {cart.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
          </div>
        </Scrollbars>

        <div className="flex flex-col gap-5 pt-4 mx-5">
          <div className="flex justify-between items-center font-primary text-xl">
            <div className=" flex justify-start font-extrabold ">
              <p className=' text-nau'>Tất cả:&nbsp;&nbsp; <span className=' text-secondary'>{VND.format(total)}</span></p>
            </div>
            <div
              title="Xoá tất cả"
              onClick={clearCart}
              className=" flex justify-end text-2xl bg-red-500 text-white p-2 rounded-md cursor-pointer hover:text-red-500 hover:bg-white shadow-lg transition duration-300"
            >
              {/* <VscTrash/> */}
              <BsTrash3 />
            </div>
          </div>
          <div className="flex justify-around gap-2 font-primary font-bold text-sm">
            <Link
              to={`/cart`}
              className="flex justify-center px-6 py-4 rounded-md  bg-secondary text-white hover:bg-white hover:text-secondary shadow-3xl transition duration-300"
            >
              XEM GIỎ HÀNG
            </Link>
            <Link
              to={`/shop/checkout`}
              className="flex justify-center px-6 py-4 rounded-md  bg-white text-secondary hover:bg-secondary hover:text-white shadow-3xl transition duration-300"
            >
              THANH TOÁN
            </Link>
          </div>
        </div>
    </div>
  );    
};

export default Sidebar;

