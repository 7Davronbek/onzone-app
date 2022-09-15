import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import AllProduct from '../components/AllCategory/AllProduct'
import SidebarAttribute from '../components/AllCategory/SidebarAttribute'
import SidebarCard from '../components/AllCategory/SidebarCard'
import SortingProduct from '../components/AllCategory/SortingProduct'
import CatalogTop from '../components/SubCategory/CatalogTop'
import SidebarAllCategory from '../components/SubCategory/SidebarAllCategory'

const SubCategory = () => {
    const [filter, setFilter] = useState(false)
    const location = useLocation()
    const path = location.pathname.split('/')[2] 


    
    return (
        <>
            <div className="catalog">
                <CatalogTop setFilter={setFilter} />
                <div className="catalogMain">
                    <div className="container">
                        <div className="row">
                            <div className={`col-lg-3 leftCatalog ${filter ? 'active' : ''}`}>
                                <div style={{ cursor: "pointer" }} onClick={() => setFilter(false)} className="close">x</div>
                                <SidebarAllCategory />
                                <SidebarAttribute />
                                <SidebarCard />
                            </div>

                            <div className="col-lg-9 rightCatalog">
                                <SortingProduct />
                                <AllProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubCategory