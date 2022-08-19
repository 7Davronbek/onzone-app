import React from 'react'
import AdminLayout from '../../components/AdminLayout'

const AdminSubCategory = () => {
    return (
        <AdminLayout>
            <div className='AdminSubCategory'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <input className='form-control mb-3' type="text" placeholder='Name...' />
                            <select className='form-control mb-3'>
                                <option className='form-control' value="0">1</option>
                                <option className='form-control' value="0">2</option>
                                <option className='form-control' value="0">3</option>
                            </select>
                            <button className="btn btn-dark">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AdminSubCategory  