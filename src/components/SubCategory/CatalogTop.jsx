import React from 'react'
import { Link } from 'react-router-dom'

const CatalogTop = () => {
    return (
        <>
            <div className="catalogTop">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <Link to={'/'}>Bosh sahifa</Link>
                                <Link to={'/all-category'}><span>/</span> Barcha kategoriyalar </Link>
                                <Link to={'/sub-category'}><span>/</span> Telefonlar va gadjetlar </Link>
                            </div>
                        </div>
                        <div className="col-12 filterBtn">
                            <h1 className="w-75">Telefonlar va gadjetlar</h1>

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