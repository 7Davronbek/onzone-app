import React from 'react'
import { Link } from 'react-router-dom'

const AdminLayout = (props) => {
    return (
        <div className='AdminLayout'>
            <div className="AdminLayoutLeft">

                <h5>Products</h5>

                <Link className='user-info' to='/'>
                    Attribute details
                </Link>

                <Link className='user-info' to='/'>
                    Attributes
                </Link>

                <Link className='user-info' to='/'>
                    Brands
                </Link>

                <Link className='user-info' to='/'>
                    Categorys
                </Link>

                <Link className='user-info' to='/'>
                    Products
                </Link>

                <Link className='user-info' to='/'>
                    Sub categorys
                </Link>

                <Link className='user-info' to='/'>
                    Type categorys
                </Link>

            </div>
            <div className="AdminLayoutRight">
                {props.children}
            </div>
        </div>
    )
}

export default AdminLayout