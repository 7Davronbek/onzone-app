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
                                <a href="#"><span>/</span> Savatcha </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Savatcha</h1>

                            <div className="cards">
                                <img src="/image/cart-empty.png" alt="" />
                                <h2>Hech nima topilmadi</h2>
                                <a href="/">Bosh sahifa</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound