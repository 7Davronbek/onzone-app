import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

const TvProducts = () => {
    return (
        <>
            <div className="tv-products">
                <div className="row mt-4 align-items-center justify-content-between">
                    <h2 className="col-8">Televizorlar</h2>
                    <div className="col-4 d-flex justify-content-end">
                        <div className="swiper-button-prev" id="swp-tel-prev"></div>
                        <div className="swiper-button-next ml-2" id="swp-tel-next"></div>
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
                        },
                    }}
                    spaceBetween={30}
                    navigation={{
                        prevEl: '#swp-tel-prev',
                        nextEl: '#swp-tel-next',
                    }}
                    modules={[Navigation]}
                    className="swiper mySwiper-tel-products" 
                    style={{ height: 'inherit' }}>
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img src="/image/tv/4.webp" className="swiper-lazy" alt="" />
                                <h5>Narx: 1 900 000 so'm</h5>
                                <h4>101 440 <span>so‘mdan oyiga</span></h4>
                                <p>Смартфон Samsung Galaxy A21s 3/32GB Red</p>

                                <div className="line"></div>

                                <div
                                    className="d-flex align-items-center justify-content-between w-100"
                                >
                                    <h3>11 taklif</h3>
                                    <div className="heart scales">
                                        <div className="hearts icon icon-heart scales"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img src="/image/tv/5.webp" className="swiper-lazy" alt="" />
                                <h5>Narx: 1 900 000 so'm</h5>
                                <h4>101 440 <span>so‘mdan oyiga</span></h4>
                                <p>Смартфон Samsung Galaxy A21s 3/32GB Red</p>

                                <div className="line"></div>

                                <div
                                    className="d-flex align-items-center justify-content-between w-100"
                                >
                                    <h3>11 taklif</h3>
                                    <div className="heart scales">
                                        <div className="hearts icon icon-heart scales"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img src="image/tv/1.webp" className="swiper-lazy" alt="" />
                                <h5>Narx: 1 750 000 so'm</h5>
                                <h4>93 430 <span>so‘mdan oyiga </span></h4>
                                <p>Смартфон Samsung Galaxy A12 32GB Black</p>

                                <div className="line"></div>

                                <div
                                    className="d-flex align-items-center justify-content-between w-100"
                                >
                                    <h3>25 taklif</h3>
                                    <div className="heart scales">
                                        <div className="hearts icon icon-heart scales"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img src="image/tv/2.webp" className="swiper-lazy" alt="" />
                                <h5>Narx: 21 200 000 so'm</h5>
                                <h4>1 131 780 <span> so‘mdan oyiga </span></h4>
                                <p>Смартфон iPhone 12 Pro max 512GB Black (Dual)</p>

                                <div className="line"></div>

                                <div
                                    className="d-flex align-items-center justify-content-between w-100"
                                >
                                    <h3>2 taklif</h3>
                                    <div className="heart scales">
                                        <div className="hearts icon icon-heart scales"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide d-flex flex-column">
                            <Link className="myCard" to={'/product'}>
                                <img src="image/tv/3.webp" className="swiper-lazy" alt="" />
                                <h5>Narx: 1 900 000 so'm</h5>
                                <h4>101 440 <span>so‘mdan oyiga </span></h4>
                                <p>Смартфон Samsung Galaxy A21s 3/32GB black</p>

                                <div className="line"></div>

                                <div
                                    className="d-flex align-items-center justify-content-between w-100"
                                >
                                    <h3>3 taklif</h3>
                                    <div className="heart scales">
                                        <div className="hearts icon icon-heart scales"></div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </>
    )
}

export default TvProducts