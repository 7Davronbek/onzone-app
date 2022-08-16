import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header-slider">
                <div className="container">
                    <Swiper 
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next',
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        lazy={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="swiper mySwiper">

                        <div className="swiper-wrapper">
                            <SwiperSlide className='swiper-slide'>
                                <Link to={'/sub-multi-category'}>
                                    <img src="/image/header2.png" alt="" className="swiper-lazy" />
                                    <div
                                        className="swiper-lazy-preloader swiper-lazy-preloader-white"
                                    ></div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <Link to={'/sub-multi-category'}>
                                    <img src="/image/header1.png" alt="" className="swiper-lazy" />
                                    <div
                                        className="swiper-lazy-preloader swiper-lazy-preloader-white"
                                    ></div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <Link to={'/sub-multi-category'}>
                                    <img src="/image/617bf1de92d40.png" alt="" className="swiper-lazy" />
                                    <div
                                        className="swiper-lazy-preloader swiper-lazy-preloader-white"
                                    ></div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-slide'>
                                <Link to={'/sub-multi-category'}>
                                    <img src="/image/617f835700f9f.png" alt="" className="swiper-lazy" />
                                    <div
                                        className="swiper-lazy-preloader swiper-lazy-preloader-white"
                                    ></div>
                                </Link>
                            </SwiperSlide>
                        </div>

                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    )
}

export default Header
