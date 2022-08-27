import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import AdminLayout from '../../components/AdminLayout'
import { getBrands, deleteBrand } from '../../redux/actions/adminActions'
import { API_PATH } from '../../tools/constants'

const AdminBrand = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')

    const dispatch = useDispatch()

    const createBrand = async e => {
        e.preventDefault()

        await axios.post(API_PATH + `/admins/create-brand/`, { name, name_ru: nameRu })
            .then(res => {
                dispatch(getBrands())
                setName('')
                setNameRu('')
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        props.getBrands()
    }, [props])

    return (
        <AdminLayout>
            <div className='AdminBrand'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h5>Brands</h5>
                        </div>
                        <form onSubmit={createBrand} className="col-lg-4">
                            <input onChange={e => setName(e.target.value)} value={name} className='form-control mb-3' type="text" placeholder='Name uz...' />
                            <input onChange={e => setNameRu(e.target.value)} value={nameRu} className='form-control mb-3' type="text" placeholder='Name ru...' />

                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>

                    <div className="row mt-5">
                        {props.brands && props.brands.map((item, index) => (
                            <div key={index} className="col-lg-3 mb-4 h-100 shadow p-3">
                                <h5>{item.name}</h5>
                                <div className="d-flex align-items-center justify-content-end mt-3">
                                    <button onClick={() => props.deleteBrand(item.id)} className="btn"><img src="/image/icon/delete.svg" alt="" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

const mapStateToProps = state => {
    return {
        brands: state.admin.brands,
    }
}

export default connect(mapStateToProps, { getBrands, deleteBrand })(AdminBrand)  