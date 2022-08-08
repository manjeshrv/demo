import React from "react";
import Hero from "./../components/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import demoImgOne from "./../img/demo-1.jpg";
import demoImgTwo from "./../img/demo-2.jpg";
import demoImgThree from "./../img/demo-3.jpg";
import demoImgFour from "./../img/demo-4.jpg";

const Home = () => {
  const swiperImgStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <Hero style={{ backgroundColor: "red" }}>
        <Swiper
          style={{ width: "100%", height: "100%" }}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide>
            <img style={swiperImgStyles} src={demoImgOne} alt="demo one" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={swiperImgStyles} src={demoImgTwo} alt="demo one" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={swiperImgStyles} src={demoImgThree} alt="demo one" />
          </SwiperSlide>
          <SwiperSlide>
            <img style={swiperImgStyles} src={demoImgFour} alt="demo one" />
          </SwiperSlide>
        </Swiper>
      </Hero>
    </>
  );
};

export default Home;
