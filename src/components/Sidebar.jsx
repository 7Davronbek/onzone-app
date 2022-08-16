import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>

            <Link to={'/sub-multi-category'}>
                <img src="/image/sidebar-01.png" className="w-100" alt="" />
            </Link>
            <Link to={'/sub-multi-category'} className="mt-5">
                <img src="/image/sidebar-02.png" alt="" className="w-100" />
            </Link>
            <Link to={'/sub-multi-category'} className="mt-5">
                <img src="/image/sidebar-03.png" alt="" className="w-100" />
            </Link>
            <Link to={'/sub-multi-category'} className="mt-5">
                <img src="/image/sidebar-04.png" alt="" className="w-100" />
            </Link>
            <Link to={'/sub-multi-category'} className="mt-5">
                <img src="/image/sidebar-01.png" alt="" className="w-100" />
            </Link>
        </>
    )
}

export default Sidebar