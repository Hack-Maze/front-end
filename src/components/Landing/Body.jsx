import { Rows } from "../../static/data.jsx";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const Body = () => {
  const isMobile = window.innerWidth <= 500;
  return (
    <div className="flex flex-col my-10 md:px-7 text-white scroll-smooth">
      {Rows.map((row, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 items-start mt-12 w-auto md:w-full"
        >
          <>
            <div className="px-1 md:px-0">
              <div className="flex flex-row items-center border border-[#5EE848] bg-[#5de84810] rounded-2xl px-1 md:px-2 py-1 text-sm lg-text-base w-fit mb-2">
                <span className="mr-2 text-[#5EE848]">{row.icon}</span>
                <span className="">{row.iconText}</span>
              </div>
              <h2 className="text-2xl lg:text-5xl mb-2">
                <span className="text-[#5EE848] font-medium">
                  {row.titleHighlight}
                </span>
                {row.title}
              </h2>
              <h3 className="text-base lg:text-2xl md:font-medium">{row.desc}</h3>
            </div>
            {isMobile ? (
              <Swiper
                effect={'coverflow'}
                slideToClickedSlide={true}
                grabCursor={true}
                centeredSlides={true}
                rewind={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 10,
                  modifier: 1,
                  slideShadows: true,
                  slideShadowsOffset: 20,
                  slideShadowsOpacity: 1,
                  slideShadowsRadius: 9,
                  parallax: true,
                }}
                initialSlide={1}
                modules={[EffectCoverflow, Pagination]}
              >
                <div className="flex flex-row gap-10 items-center justify-start">
                  {row.cards.map((card, cardIndex) => (
                    <SwiperSlide key={cardIndex}>
                      <div
                        className="border border-[#5de84846] px-2 w-[55vw] h-[35vh] bg-[#0d2018f1] rounded-md flex flex-col justify-evenly shadow-box"
                      >
                        <h2 className="text-lg font-semibold">{card.id}.</h2>
                        <h3 className="text-base font-medium">{card.title}</h3>
                        <p className="text-sm leading-4">{card.desc}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            ) : (
              <div className="flex flex-row gap-3 lg:gap-10 items-center justify-start">
                {row.cards.map((card, cardIndex) => (
                  <div
                    key={cardIndex}
                    className="border border-[#5de84846] px-1 md:px-5 w-[29vw] h-[30vh] bg-[#013c3314] rounded-md flex flex-col justify-evenly shadow-box"
                  >
                    <h2 className="text-2xl lg:text-3xl xl:text-5xl font-semibold">{card.id}.</h2>
                    <h3 className="text-base lg:text-lg xl:text-3xl font-medium">{card.title}</h3>
                    <p className="text-sm lg:text-base xl:text-xl leading-5 xl:leading-7 xl:mr-5">{card.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Body;
