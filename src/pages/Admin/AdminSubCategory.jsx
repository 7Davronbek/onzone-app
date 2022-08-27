import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import AdminLayout from '../../components/AdminLayout'
import { getCategries, getSubCategories, deleteSubCategory } from '../../redux/actions/adminActions'
import { API_PATH } from '../../tools/constants'

const AdminSubCategory = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [id, setId] = useState('')

    const dispatch = useDispatch()

    const createSubCategory = async e => {
        e.preventDefault()

        await axios.post(API_PATH + `/admins/create-subcategory/`, { name, name_ru: nameRu, category: Number(id) })
            .then(res => {
                dispatch(getSubCategories())
                setName('')
                setNameRu('')
                setId('')
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        props.getCategries()
        props.getSubCategories()
    }, [props])

    return (
        <AdminLayout>
            <div className='AdminSubCategory'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <h5>Sub Categories</h5>
                        </div>
                        <form onSubmit={createSubCategory} className="col-lg-4">
                            <input onChange={e => setName(e.target.value)} value={name} className='form-control mb-3' type="text" placeholder='Name uz...' />
                            <input onChange={e => setNameRu(e.target.value)} value={nameRu} className='form-control mb-3' type="text" placeholder='Name ru...' />
                            <select onChange={e => setId(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">------------</option>
                                {props.categories && props.categories.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>

                    <div className="row mt-5">
                        {props.subCategories && props.subCategories.map((item, index) => (
                            <div key={index} className="col-lg-3 mb-4 h-100 shadow p-3">
                                <div className="img">
                                    <img className='w-100' src={item.image} alt="" />
                                </div>
                                <h5>{item.name}</h5>
                                <div className="d-flex align-items-center justify-content-end mt-3">
                                    {/* <button className="btn btn-outline-warning mr-2">Edit</button> */}
                                    <button onClick={() => props.deleteSubCategory(item.id)} className="btn"><img src="/image/icon/delete.svg" alt="" /></button>
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
        categories: state.admin.categories,
        subCategories: state.admin.subCategories
    }
}

export default connect(mapStateToProps, { getCategries, getSubCategories, deleteSubCategory })(AdminSubCategory)  