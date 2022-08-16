import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const RelationProducts = () => {
    return (
        <>
            <div className="sameProducts">
                <div className="container">
                    <div className="row">
                        <h2 className="col-7">O'xshash mahsulotlar</h2>
                        <div className="col-lg-2 col-4 d-flex justify-content-end ml-auto">
                            <div className="swiper-button-prev" id="swp-smart-prev"></div>
                            <div className="swiper-button-next ml-2" id="swp-smart-next"></div>
                        </div>

                        <Swiper
                            slidesPerView={4.5}
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
                                },
                            }}
                            spaceBetween={30}
                            navigation={{
                                prevEl: '#swp-smart-prev',
                                nextEl: '#swp-smart-next',
                            }}
                            modules={[Navigation]}
                            className="productSwiper3 swiper mySwiper-products mt-3"
                            style={{ height: 'inherit' }}
                        >
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide d-flex flex-column">
                                    <a className="myCard" href="">
                                        <img
                                            src="/image/pop-category-01.jpg"
                                            className="swiper-lazy"
                                            alt=""
                                        />
                                        <h5>Narx: 1 900 000 so'm</h5>
                                        <h4>101 440 <span>so‘mdan oyiga</span></h4>
                                        <p>Смартфон Samsung Galaxy A21s 3/32GB Red</p>

                                        <div className="line"></div>

                                        <div
                                            className="d-flex align-items-center justify-content-between w-100"
                                        >
                                            <h3>11 taklif</h3>
                                            <div className="heart scales">
                                                <i className="icon icon-heart scales"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide d-flex flex-column">
                                    <a className="myCard" href="">
                                        <img
                                            src="../image/new-products/3.png"
                                            className="swiper-lazy"
                                            alt=""
                                        />
                                        <h5>Narx: 1 750 000 so'm</h5>
                                        <h4>93 430 <span> so‘mdan oyiga</span></h4>
                                        <p>Смартфон Samsung A125 Galaxy A12 4/64Gb Blue</p>

                                        <div className="line"></div>

                                        <div
                                            className="d-flex align-items-center justify-content-between w-100"
                                        >
                                            <h3>15 taklif</h3>
                                            <div className="heart scales">
                                                <i className="icon icon-heart scales"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide d-flex flex-column">
                                    <a className="myCard" href="">
                                        <img
                                            src="../image/popular-products/2.webp"
                                            className="swiper-lazy"
                                            alt=""
                                        />
                                        <h5>Narx: 1 750 000 so'm</h5>
                                        <h4>93 430 <span>so‘mdan oyiga </span></h4>
                                        <p>Смартфон Samsung Galaxy A12 32GB Black</p>

                                        <div className="line"></div>

                                        <div
                                            className="d-flex align-items-center justify-content-between w-100"
                                        >
                                            <h3>25 taklif</h3>
                                            <div className="heart scales">
                                                <i className="icon icon-heart scales"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide d-flex flex-column">
                                    <a className="myCard" href="">
                                        <img
                                            src="../image/popular-products/3.webp"
                                            className="swiper-lazy"
                                            alt=""
                                        />
                                        <h5>Narx: 21 200 000 so'm</h5>
                                        <h4>1 131 780 <span> so‘mdan oyiga </span></h4>
                                        <p>Смартфон iPhone 12 Pro max 512GB Black (Dual)</p>

                                        <div className="line"></div>

                                        <div
                                            className="d-flex align-items-center justify-content-between w-100"
                                        >
                                            <h3>2 taklif</h3>
                                            <div className="heart scales">
                                                <i className="icon icon-heart scales"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>

                                <SwiperSlide className="swiper-slide d-flex flex-column">
                                    <a className="myCard" href="">
                                        <img
                                            src="../image/popular-products/4.webp"
                                            className="swiper-lazy"
                                            alt=""
                                        />
                                        <h5>Narx: 1 900 000 so'm</h5>
                                        <h4>101 440 <span>so‘mdan oyiga </span></h4>
                                        <p>Смартфон Samsung Galaxy A21s 3/32GB black</p>

                                        <div className="line"></div>

                                        <div
                                            className="d-flex align-items-center justify-content-between w-100"
                                        >
                                            <h3>3 taklif</h3>
                                            <div className="heart scales">
                                                <i className="icon icon-heart scales"></i>
                                            </div>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelationProducts