import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminLayout = (props) => {
    const location = useLocation()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <h1>Onzone Administration</h1>
                    </div>
                </div>
            </div>
            <div className='AdminLayout'>
                <div className="AdminLayoutLeft">

                    <h5>Products</h5>

                    <Link className={`user-info ${location.pathname === '/administration' ? 'active' : ''}`} to='/administration'>
                        Attribute details
                    </Link>

                    <Link className={`user-info ${location.pathname === '/' ? 'active' : ''}`} to='/'>
                        Attributes
                    </Link>

                    <Link className={`user-info ${location.pathname === '/' ? 'active' : ''}`} to='/'>
                        Brands
                    </Link>

                    <Link className={`user-info ${location.pathname === '/' ? 'active' : ''}`} to='/'>
                        Categorys
                    </Link>

                    <Link className={`user-info ${location.pathname === '/' ? 'active' : ''}`} to='/'>
                        Products
                    </Link>

                    <Link className={`user-info ${location.pathname === '/admin-sub-category' ? 'active' : ''}`} to='/admin-sub-category'>
                        Sub categorys
                    </Link>

                    <Link className={`user-info ${location.pathname === '/admin-type-category' ? 'active' : ''}`} to='/admin-type-category'>
                        Type categorys
                    </Link>

                </div>
                <div className="AdminLayoutRight">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default AdminLayout