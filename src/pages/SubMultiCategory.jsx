import React from 'react'
import AllProduct from '../components/AllCategory/AllProduct'
import SidebarAttribute from '../components/AllCategory/SidebarAttribute'
import SidebarCard from '../components/AllCategory/SidebarCard'
import SortingProduct from '../components/AllCategory/SortingProduct'
import CatalogTop from '../components/SubMultiCategory/CatalogTop'

const SubMultiCategory = () => {
  return (
    <>
        <div className="catalog">
            <CatalogTop />
            <div className="catalogMain">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 leftCatalog">
                            <div onclick="handleClick()" className="close">x</div>
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

export default SubMultiCategory