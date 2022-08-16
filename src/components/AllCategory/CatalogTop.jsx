import React from 'react'

const CatalogTop = () => {
    return (
        <>
            <div className="catalogTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="#"><span>/</span> Barcha kategoriyalar </a>
                            </div>
                        </div>
                        <div className="col-12 filterBtn">
                            <h1 className="w-75">Barcha kategoriyalar</h1>

                            <div onclick="handleClick()" className="filter">
                                Filtrlar <span><img src="/image/filter.svg" alt="" /></span>
                            </div>

                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogTop