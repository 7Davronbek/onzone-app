import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className="cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="#"><span>/</span> Tanlangan tovarlar </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Tanlangan tovarlar - marketpleys OnZone</h1>

                            <div className="cards">
                                <img src="/image/cart-empty.png" alt="" />
                                <h2>Hali mahsulot qoʻshmadingiz</h2>
                                <p>
                                    Жмите на странице товара и добавляйте сюда то, что нравится.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound