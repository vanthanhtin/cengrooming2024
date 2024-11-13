import React, { useContext } from 'react'
import logo from '../img/logotext.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import {BsDot} from 'react-icons/bs'
import pagetitlecart from "../img/page-title-cart.jpg";
import { Input, Textarea, Button } from "@material-tailwind/react";
import { CartContext } from '../contexts/CartContext';


const VND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

const Checkout = (item) =>{
  const {cart,removeFromCart, clearCart, itemAmount, total, decreaseAmount, increaseAmount} = useContext(CartContext);
  const { id, name, price, src, amount} = item;
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
      >
        <div className="my-[70px] mx-auto w-screen j">
          <div
            className="bg-no-repeat bg-cover bg-right"
            style={{ backgroundImage: `url(${pagetitlecart})` }}
          >
            <div className=" flex flex-col py-32 justify-center items-center w-8/12 mx-auto  cursor-default">
              <p className=" text-white text-4xl lg:text-6xl font-fontHead py-6">
                Cart
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
                <p className=" text-secondary/80 hover:text-secondary transition duration-300">
                  GIỎ HÀNG
                </p>
              </div>
            </div>
          </div>
          <div class=" container mx-auto flex flex-col items-center justify-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <h1 className='h-24 flex justify-center items-center text-2xl'>Cengrooming</h1>
            <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div class="relative">
                <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-white"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </a>
                    <Link to="/cart">
                      <span class="font-semibold text-nau">Giỏ hàng</span>
                    </Link>
                  </li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                    <a
                      class="flex h-6 w-6 items-center justify-center rounded-full bg-nau text-xs font-semibold text-white ring ring-nau ring-offset-2"
                      href="#"
                    >
                      2
                    </a>
                    <span class="font-semibold text-nau">Thanh toán</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class=" container mx-auto flex flex-col lg:flex-row sm:px-10 lg:px-20 xl:px-32">
            <div class="mt-10 px-4 pt-8 lg:mt-0 ">
              <h1 class="text-3xl">Chi tiết thanh toán</h1>
                <p class="text-nau pb-10">
                    Hoàn thành đơn đặt hàng của bạn bằng cách cung cấp chi tiết
                    thanh toán của bạn.
                </p>
                <div class="">
                    <div className="w-full flex gap-3 pt-6">
                        <Input label="Tên" />
                        <Input label="Số điện thoại" />
                    </div>
                    <div className="w-full flex pt-6">
                        <Input label="Email" />
                    </div>
                    <div className="w-full flex pt-6">
                        <Input label="Địa chỉ" />
                    </div>
                    
                    <label
                        for="card-no"
                        class="mt-4 mb-2 block text-sm font-medium"
                    >
                        Thêm thông tin
                    </label>
                    <div className="">
                        <Textarea className=' focus:ring-0' resize={true} label="Ví dụ: ghi chú đặc biệt để giao hàng." />
                    </div>
              </div>
            </div>

            <div className='mt-10 px-4 pt-8 lg:mt-0'>
              <div>
                <h1 className='text-3xl pb-10'>Đơn hàng của bạn</h1>
                <div className=' bg-nau text-white flex rounded-lg px-7 py-3'>
                  <h1 className='w-[70%]'>Sản phẩm</h1>
                  <h1 className='w-[30%] flex justify-center items-center'>Giá</h1>
                </div>
              </div>

              <div className=' p-10'>
                {cart.map((item) => {
                  return(
                    <div className=' pb-5'>
                      <div className='flex justify-between  text-base'>
                        <div className='flex' key={item.id}>
                          <h1>{item.name}</h1>
                          <h1 className='pl-3 text-[#999998]'>x {item.amount}</h1>
                        </div>
                        <div className=' flex justify-center items-center'>
                          <h1 className='flex text-secondary'>{VND.format(item.price * item.amount)}</h1>
                        </div>
                      </div>
                    </div>
                  )
                  })}
                <div>
                  <div className='flex justify-between text-base border-t pt-5'>
                        <div className='flex flex-col gap-2'>
                          <h1>Tổng</h1>
                          <h1>Giao hàng</h1>
                          <h1 className='text-lg'>Thanh toán</h1>
                        </div>
                        <div className=' flex flex-col items-end gap-3'>
                          <h1 className='flex text-secondary'>{VND.format(total)}</h1>
                          <h1 className='flex text-secondary'>Miễn phí</h1>
                          <h1 className='flex text-secondary text-lg'>{VND.format(total)}</h1>
                        </div>
                  </div>
                </div>
              </div>
              <div className='p-10 bg-[#FCF9F4] flex flex-col'>
                <p className='pb-5'>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng, hỗ trợ trải nghiệm của bạn trên trang web này và cho các mục đích khác được mô tả trong chính sách bảo mật của chúng tôi.</p>
                <Button variant="filled" className=" bg-secondary px-6 py-4 flex ml-auto text-sm hover:bg-nau transition duration-300">Đặt hàng</Button>
              </div>

            </div>


          </div>
        </div>
      </motion.div>
    );
}

export default Checkout
