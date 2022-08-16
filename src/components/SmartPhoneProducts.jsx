import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const SmartPhoneProducts = () => {
    return (
        <>
            <div className="smartphone-products">
                <div className="row mt-4 align-items-center justify-content-between">
                    <h2 className="col-8">Smartfonlar</h2>
                    <div className="col-4 d-flex justify-content-end">
                        <div className="swiper-button-prev" id="swp-smart-prev"></div>
                        <div className="swiper-button-next ml-2" id="swp-smart-next"></div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3.5}
                    loop={true}
                    lazy={true}
                    breakpoints={{
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.8,
                        },
                        768: {
                            spaceBetween: 20,
                            slidesPerView: 3,
                        },
                        1480: {
                            spaceBetween: 45,
                        }
                    }}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '#swp-smart-prev',
                        nextEl: '#swp-smart-next',
                    }}
                    modules={[Navigation]}
                    className="swiper mySwiper-smart-products mt-3"
                    style={{ height: 'inherit' }}
                >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img
                                    src="/image/pop-category-01.jpg"
                                    className="swiper-lazy"
                                    alt=""
                                />
                                <h5>Narx: 1 900 000 so'm</h5>
                                <h4>101 440 <span>so‘mdan oyiga</span></h4>
                                <p>Смартфон Samsung Galaxy A21s 3/32GB Red</p>

                                <div className="line"></div>
                            </Link>
                            <div
                                className="pb-3 d-flex align-items-center justify-content-between w-100"
                            >
                                <h3>3 taklif</h3>
                                <div className="heart scales">
                                    <div className="hearts icon icon-heart scales"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img
                                    src="image/popular-products/2.webp"
                                    className="swiper-lazy"
                                    alt=""
                                />
                                <h5>Narx: 1 750 000 so'm</h5>
                                <h4>93 430 <span>so‘mdan oyiga </span></h4>
                                <p>Смартфон Samsung Galaxy A12 32GB Black</p>

                                <div className="line"></div>
                            </Link>
                            <div
                                className="pb-3 d-flex align-items-center justify-content-between w-100"
                            >
                                <h3>3 taklif</h3>
                                <div className="heart scales">
                                    <div className="hearts icon icon-heart scales"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img
                                    src="image/popular-products/3.webp"
                                    className="swiper-lazy"
                                    alt=""
                                />
                                <h5>Narx: 21 200 000 so'm</h5>
                                <h4>1 131 780 <span> so‘mdan oyiga </span></h4>
                                <p>Смартфон iPhone 12 Pro max 512GB Black (Dual)</p>

                                <div className="line"></div>
                            </Link>
                            <div
                                className="pb-3 d-flex align-items-center justify-content-between w-100"
                            >
                                <h3>3 taklif</h3>
                                <div className="heart scales">
                                    <div className="hearts icon icon-heart scales"></div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img
                                    src="image/popular-products/4.webp"
                                    className="swiper-lazy"
                                    alt=""
                                />
                                <h5>Narx: 1 900 000 so'm</h5>
                                <h4>101 440 <span>so‘mdan oyiga </span></h4>
                                <p>Смартфон Samsung Galaxy A21s 3/32GB black</p>

                                <div className="line"></div>
                            </Link>
                            <div
                                className="pb-3 d-flex align-items-center justify-content-between w-100"
                            >
                                <h3>3 taklif</h3>
                                <div className="heart scales">
                                    <div className="hearts icon icon-heart scales"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default SmartPhoneProducts