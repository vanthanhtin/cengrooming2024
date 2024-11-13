import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {} from 'react-icons'
import { RiCloseFill } from 'react-icons/ri';
import './style.css'
import { CartContext } from '../contexts/CartContext';
import {BsTrash3} from 'react-icons/bs'

const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const CartItem = ({item}) => {
  
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)
  //  detructure item
  const { id, name, price, src, amount} = item;
  

  return (
    <div className="  flex flex-row items-start justify-end transition duration-300">
      {/* remove icon */}
      <div
        onClick={() => removeFromCart(id)}
        className="absolute left-auto text-xl cursor-pointer transition duration-300"
      >
        <RiCloseFill className="text-[#898988] text-lg hover:text-red-500 transition duration-300" />
      </div>

      <div className=" group w-full flex items-center gap-x-4 ">
        <Link to={`/shop/${id}`}>
          <img className="max-w-[65px] rounded-md  group-hover:shadow-3xl transition" src={src[0]} />
        </Link>
        <div className="w-full flex flex-col justify-between m-[10px]">
          <div className="flex justify-between">
            <Link
              to={`shop/${id}`}
              className="text-sm font-medium max-w-[300px] text-nau font-fontHead text_underline"
            >
              <h1>{name}</h1>
            </Link>
          </div>
          <div className="gap-2 flex-1/2 flex justify-start font-primary font-black text-sm text-nau">
            <p className=" text-[#898988]">{amount} x</p>
            <p className=" text-secondary">{VND.format(item.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
