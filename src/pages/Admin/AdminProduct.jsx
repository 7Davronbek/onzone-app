import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import AdminLayout from '../../components/AdminLayout'
import { getAttributes, getBrands, getSubCategories, deleteAttribute } from '../../redux/actions/adminActions'
import { API_PATH } from '../../tools/constants'

const AdminProduct = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [attribute, setAttribute] = useState('')

    const dispatch = useDispatch()

    const createBrand = async e => {
        e.preventDefault()

        await axios.post(API_PATH + `/admins/create-product/`, { name, name_ru: nameRu, brand: Number(brand), category: Number(category), attribute: Number(attribute) })
            .then(res => {
                // dispatch(getAttributes())
                setName('')
                setNameRu('')
                setBrand('')
                setCategory('')
                setAttribute('')
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        props.getBrands()
        props.getSubCategories()
        props.getAttributes()
    }, [])

    return (
        <AdminLayout>
            <div className='AdminProduct'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h5>Products</h5>
                        </div>
                        <form onSubmit={createBrand} className="col-lg-4">
                            <input required onChange={e => setName(e.target.value)} value={name} className='form-control mb-3' type="text" placeholder='Name uz...' />
                            <input required onChange={e => setNameRu(e.target.value)} value={nameRu} className='form-control mb-3' type="text" placeholder='Name ru...' />

                            <select onChange={e => setBrand(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">Choose brand</option>
                                {props.brands && props.brands.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>

                            <select onChange={e => setCategory(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">Choose category</option>
                                {props.subCategories && props.subCategories.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>

                            <select onChange={e => setAttribute(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">Choose attribute</option>
                                {props.attributes && props.attributes.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>

                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>

                    <div className="row mt-5">
                        {/* {props.attributes && props.attributes.map((item, index) => (
                            <div key={index} className="col-lg-3 mb-4 h-100 shadow p-3">
                                <h5>{item.name}</h5>
                                <div className="d-flex align-items-center justify-content-end mt-3">
                                    <button onClick={() => props.deleteAttribute(item.id)} className="btn"><img src="/image/icon/delete.svg" alt="" /></button>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

const mapStateToProps = state => {
    return {
        brands: state.admin.brands,
        subCategories: state.admin.subCategories,
        attributes: state.admin.attributes,
    }
}

export default connect(mapStateToProps, { getAttributes, getBrands, getSubCategories, deleteAttribute })(AdminProduct)  