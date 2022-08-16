import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";

const Brands = () => {
    return (
        <>
            <div className="allbrands">
                <div className="brands mt-5">
                    <div className="container">
                        <div className="row" style={{ borderTop: '2px solid rgba(40, 40, 48, 0.1)' }}>
                            <div className="col-12">
                                <div className="slider">
                                    <Swiper 
                                        slidesPerView={5}
                                        spaceBetween={30}
                                        breakpoints={{
                                            0: {
                                                spaceBetween: 10,
                                                slidesPerView: 2,
                                            },
                                            768: {
                                                spaceBetween: 20,
                                                slidesPerView: 3,
                                            },
                                            1480: {
                                                spaceBetween: 45,
                                            },
                                        }}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                        modules={[Autoplay]}
                                        className="brands-slider">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide className="swiper-slide">
                                                <div className="slide">
                                                    <img src="/image/clients/1.jpg" alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="slide">
                                                    <img src="/image/clients/2.png" alt="" />
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <img src="/image/clients/3.png" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <img src="/image/clients/4.jpg" alt="" />
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide">
                                                <div className="slide">
                                                    <img src="/image/clients/5.png" alt="" />
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pre-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>OnZone</h1>
                                <p>
                                    <a href="#">OnZone.uz</a> – маркетплейс, предоставляющий
                                    возможность покупателям приобрести широкий спектр товаров быстро и
                                    с удобством.
                                </p>
                                <p>
                                    На <a href="#"> onZone.uz</a> вы сможете найти смартфон,
                                    компьютер, планшет, телевизор, умные часы и множество других
                                    гаджетов которых вам так не хватало. На нашем маркетплейсе имеется
                                    большой выбор электроники, бытовой техники, автотоваров и товаров
                                    для дома.
                                </p>
                                <p>
                                    Мы работаем по всем международным стандартам и общепринятым
                                    нормам. Найдите нужный вам товар на <a href="#"> onZone.uz</a>!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brands