import React from 'react'

const SidebarCard = () => {
    return (
        <>
            <div className="pop-pro-sidebar">
                <a href="product">
                    <img src="/image/sidebar-01.png" className="w-100" alt="" />
                </a>
                <a href="product" className="mt-5">
                    <img src="/image/sidebar-02.png" alt="" className="w-100" />
                </a>
                <a href="product" className="mt-5">
                    <img src="/image/sidebar-03.png" alt="" className="w-100" />
                </a>
            </div>
        </>
    )
}

export default SidebarCard
