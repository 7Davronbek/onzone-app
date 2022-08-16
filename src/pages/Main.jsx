import React, {useState} from 'react'
import Brands from '../components/Brands'
import FridgeProducts from '../components/FridgeProducts'
import Header from '../components/Header'
import NewProducts from '../components/NewProducts'
import PopularCategory from '../components/PopularCategory'
import PopularProducts from '../components/PopularProducts'
import Sidebar from '../components/Sidebar'
import SmartPhoneProducts from '../components/SmartPhoneProducts'
import TvProducts from '../components/TvProducts'

const Main = () => {
    return (
        <>
            <Header />
            <PopularCategory />

            <div className="pop-products">
                <div className="container">
                    <div className="row">
                        <div className="col-3 p-0 d-none d-lg-block pop-pro-sidebar">
                            <Sidebar />
                        </div>

                        <div className="col-lg-9 pop-product">
                            <PopularProducts />
                            <NewProducts />
                            <SmartPhoneProducts />
                            <TvProducts />
                            <FridgeProducts />
                        </div>
                    </div>
                </div>
            </div>

            <Brands />

        </>
    )
}

export default Main
