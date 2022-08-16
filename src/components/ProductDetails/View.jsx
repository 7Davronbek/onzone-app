import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Thumbs } from "swiper";

const View = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <section className="view">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="/pages/catalog/phone"><span>/</span> Telefonlar va gadjetlar</a>
                                <a href="/pages/catalog/phone"><span>/</span> Smartfonlar</a>
                                <a href="#!"><span>/</span> Смартфон Samsung Galaxy A71 Black</a>
                            </div>
                        </div>
                    </div>
                    <h1 className="section__title">Смартфон Samsung Galaxy A12 32GB Black</h1>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="view-left myShadow">
                                <div className="view__main">
                                    <div className="row flex-column-reverse flex-lg-row flex-md-row">

                                        <div className="col-lg-1 col-md-2 leftCol">
                                            <Swiper
                                                onSwiper={setThumbsSwiper}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                                freeMode={true}
                                                watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs]}
                                                className="swiper productSwiper">

                                                <div className="swiper-wrapper d-flex flex-column">
                                                    <SwiperSlide className="swiper-slide">
                                                        <img src="/image/viewProduct/1.png" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <img src="/image/viewProduct/2.webp" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <img src="/image/viewProduct/3.png" />
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <img src="/image/viewProduct/4.png" />
                                                    </SwiperSlide>
                                                </div>

                                            </Swiper>
                                        </div>

                                        <div className="col-lg-6 col-md-8 midCol">
                                            <Swiper
                                                style={{
                                                    "--swiper-navigation-color": "#fff",
                                                    "--swiper-pagination-color": "#fff",
                                                }}
                                                pagination={{
                                                    el: ".swiper-pagination",
                                                    dynamicBullets: true,
                                                }}
                                                navigation={{
                                                    prevEl: '.swiper-button-prev',
                                                    nextEl: '.swiper-button-next',
                                                }}
                                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                modules={[FreeMode, Pagination, Navigation, Thumbs]}
                                                className="swiper productSwiper2">
                                                <div className="img">
                                                    <i className="icon icon-heart"></i>
                                                </div>
                                                <div className="swiper-wrapper">
                                                    <SwiperSlide className="swiper-slide">
                                                        <a
                                                            href="/image/viewProduct/1.png"
                                                            data-fancybox="gallery"
                                                            data-caption="Optional caption"
                                                        >
                                                            <img src="/image/viewProduct/1.png" />
                                                        </a>
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <a
                                                            href="/image/viewProduct/2.webp"
                                                            data-fancybox="gallery"
                                                            data-caption="Optional caption"
                                                        >
                                                            <img src="/image/viewProduct/2.webp" />
                                                        </a>
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <a
                                                            href="/image/viewProduct/3.png"
                                                            data-fancybox="gallery"
                                                            data-caption="Optional caption"
                                                        >
                                                            <img src="/image/viewProduct/3.png" />
                                                        </a>
                                                    </SwiperSlide>
                                                    <SwiperSlide className="swiper-slide">
                                                        <a
                                                            href="/image/viewProduct/4.png"
                                                            data-fancybox="gallery"
                                                            data-caption="Optional caption"
                                                        >
                                                            <img src="/image/viewProduct/4.png" />
                                                        </a>
                                                    </SwiperSlide>
                                                </div>
                                                <div className="swiper-button-next"></div>
                                                <div className="swiper-button-prev"></div>
                                            </Swiper>
                                            <div className="swiper-pagination"></div>
                                        </div>

                                        <div className="col-lg-5 d-lg-block d-none ml-auto">
                                            <div className="info">
                                                <h1>Mahsulot haqida qisqacha</h1>
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-left">Rangi</td>
                                                            <td className="text-right">Black</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Diagonal</td>
                                                            <td className="text-right">6.5 дюйм.</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Аудио</td>
                                                            <td className="text-right">
                                                                MP3, AAC, WAV, WMA, FM-радио
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Tip protsessora</td>
                                                            <td className="text-right">
                                                                MediaTek Helio P35 (MT6765), 2300 МГц
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Вес</td>
                                                            <td className="text-right">205 г</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Стандарт</td>
                                                            <td className="text-right">
                                                                GSM 900/1800/1900, 3G, 4G LTE
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Тип аккумулятора</td>
                                                            <td className="text-right">несъемный</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-left">Фонарик</td>
                                                            <td className="text-right">есть</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <a
                                                    type="button"
                                                    className="btn w-100 mx-0 mb-0 all-btn waves-effect waves-light"
                                                    href="#viewTable"
                                                >
                                                    Barcha xususiyatlar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="view-right myShadow">
                                <div className="prices">
                                    <h6 className="full__price">1 820 000 <span>so‘m</span></h6>

                                    <h6 className="monthly__price">
                                        97 170 <span>so‘mdan oyiga</span>
                                    </h6>
                                    <div className="delivery d-flex">
                                        <i className="fas fa-truck"></i>
                                        <h6 className="delivery__title">
                                            Yetkazib berish narxi: 0 so‘m, Toshkent shahri
                                        </h6>
                                    </div>
                                </div>
                                <div className="qanaqadir__link">
                                    <a href="#">Ellsev Maximus X/K</a>
                                </div>
                                <div className="w-100 mt-3">
                                    <button
                                        className="btn m-0 btn-success price-btn w-100 waves-effect waves-light"
                                    >
                                        Savatchaga qo'shish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default View