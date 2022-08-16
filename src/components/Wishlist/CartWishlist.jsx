import React from 'react'
import { Link } from 'react-router-dom'

const CartWishlist = () => {
    return (
        <>
            <div className="wishList">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="#!"><span>/</span> Tanlangan tovarlar </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Tanlangan tovarlar - marketpleys Chakana</h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row wishlist-card">
                                <div className="col-lg-3 col-md-4 col-12 myCol">
                                    <Link className="myCard" to={'/product'}>
                                        <img src="/image/pop-category-01.jpg" className="images" alt="" />
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
                                    </Link>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12 myCol">
                                    <Link className="myCard" to={'/product'}>
                                        <img src="/image/pop-category-01.jpg" className="images" alt="" />
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
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartWishlist