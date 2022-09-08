import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AdminLayout from '../../components/AdminLayout'
import { getAttributes, deleteProduct, getProducts } from '../../redux/actions/adminActions'
import { API_PATH } from '../../tools/constants'

const AdminAttributeDetail = (props) => {
    const [key, setKey] = useState('')
    const [keyRu, setKeyRu] = useState('')
    const [value, setValue] = useState('')
    const [valueRu, setValueRu] = useState('')
    const [product, setProduct] = useState('')
    const [attribute, setAttribute] = useState('')

    const createAttributeDetail = async e => {
        e.preventDefault()

        await axios.post(API_PATH + `/admins/create-attribute-detail/`, { key, key_ru: keyRu, value, value_ru: valueRu, product, attribute })
            .then(res => {
                console.log(res);
                setKey('')
                setKeyRu('')
                setValue('')
                setValueRu('')
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        props.getAttributes()
        props.getProducts()
    }, [])


    return (
        <AdminLayout>
            <div className='AdminProduct'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h5>Attribute Details</h5>
                        </div>
                        <form onSubmit={createAttributeDetail} className="col-lg-7">

                            <select onChange={e => setAttribute(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">Choose brand</option>
                                {props.attributes && props.attributes.map((item) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>

                            <select onChange={e => setProduct(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">Choose category</option>
                                {props.products && props.products.map((item) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>

                            <div className="d-flex align-items-center mb-3">
                                <input value={key} onChange={e => setKey(e.target.value)} placeholder='Key' type="text" className='form-control' />
                                <input value={keyRu} onChange={e => setKeyRu(e.target.value)} placeholder='Key ru' type="text" className='form-control ml-2' />
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <input value={value} onChange={e => setValue(e.target.value)} placeholder='Value' type="text" className='form-control' />
                                <input value={valueRu} onChange={e => setValueRu(e.target.value)} placeholder='Value ru' type="text" className='form-control ml-2' />
                            </div>

                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>

                    <div className="row mt-5">

                    </div>
                </div>
            </div >
        </AdminLayout >
    )
}

const mapStateToProps = state => {
    return {
        attributes: state.admin.attributes,
        products: state.admin.products,
    }
}

export default connect(mapStateToProps, { getProducts, getAttributes, deleteProduct })(AdminAttributeDetail)  