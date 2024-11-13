import React from "react";
import hero from "../img/Hero.png";
import { BsFillPlayFill } from "react-icons/bs";
import Typed from "typed.js";
import video from "../img/video.mp4";

const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["^1000Level C", "^1000Level B"],
      typeSpeed: 200,
      backSpeed: 100,
      shuffle: true,
      smartBackspace: false,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className=" pt-[72px]">
      <section className="bg-hero bg-repeat h-[600px] bg-cover bg-right">
        <div className="flex flex-col h-full justify-center w-[1440px] xl:mx-auto ml-8">
          <div
            style={{ "--i": 1 }}
            className="hero font-fontHead xl:w-[65%] w-[35%] xl:text-[60px] md:text-[47px] text-[30px] md:w-[45%] leading-8 md:leading-[45px] lg:leading-[55px] xl:leading-[68px]  font-black max-w-[65%]  "
          >
            Khóa học cắt tỉa lông chó mèo chuyên nghiệp&nbsp;
            <span
              style={{ whiteSpace: "pre" }}
              ref={el}
              className=" text-secondary "
            ></span>
            của Cengrooming
          </div>
          <div
            style={{ "--i": 2 }}
            className="hero flex text-[15px] font-medium max-w-[600px] pt-4 md:w-[43%] w-[30%]"
          >
            ĐÀO TẠO TRỞ THÀNH CHUYÊN VIÊN SPA GROOMING PET CHUYÊN NGHIỆP VỚI THU
            NHẬP LÊN ĐẾN 8 CON SỐ
          </div>
          <div className="flex gap-4 absolute top-0">
            {/* <button  style = {{ "--i": 3 }} className='heroBtn btn'>
            Đăng ký ngay !
          </button>
          <button style = {{ "--i": 4 }} className='heroBtn ml-6 px-3 py-2 my-8 w-fit bg-white hover:bg-secondary text-secondary hover:text-white rounded-full shadow-lg font-medium transition duration-300'>
            <BsFillPlayFill/>
          </button>
          <div style = {{ "--i": 5 }} className='heroBtn flex justify-center items-center font-medium'>Xem video</div> */}
          </div>
        </div>
        {/* <div class="fullvideo top-[-90%]">
            <input type="checkbox"/>
            <div class="video ">
              <video loop muted autoPlay playsInline  src={video}></video>
            </div>
            <div class="text">
              <span data-text="Xem video"></span>
            </div>
          </div> */}
      </section>
    </div>
  );
};

export default Hero;
