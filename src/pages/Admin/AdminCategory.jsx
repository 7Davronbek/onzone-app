import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { connect, useDispatch } from 'react-redux'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'

import { getCategries, getTypeCategory, deleteCategory } from '../../redux/actions/adminActions'

const AdminCategory = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [id, setId] = useState(null)

    const dispatch = useDispatch()

    const createCategory = async e => {
        e.preventDefault()
        let type_category = Number(id)

        await axios.post(API_PATH + `/admins/create-category/`, { name, name_ru: nameRu, type_category })
            .then(res => {
                setName('')
                setNameRu('')
                setId(null)
                dispatch(getCategries())
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        dispatch(getTypeCategory())
        dispatch(getCategries())
    }, [dispatch])

    return (
        <AdminLayout>
            <div className='AdminCategory'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h5 className='mb-4'>Categories</h5>

                        </div>
                        <form onSubmit={createCategory} className="col-lg-4">
                            <input required onChange={e => setName(e.target.value)} value={name} className='form-control mb-3' type="text" placeholder='Name uz...' />
                            <input required onChange={e => setNameRu(e.target.value)} value={nameRu} className='form-control mb-3' type="text" placeholder='Name ru...' />
                            <select required onChange={e => setId(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">------------</option>
                                {props.typeCategories && props.typeCategories.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>

                    <div className="row my-5">
                        {props.categories && props.categories.map((item, index) => (
                            <div key={item.id} className="col-lg-3 mb-4 h-100 shadow p-3">
                                <div className="cards">
                                    <h6 className='mb-2'> id: {item.id}</h6>
                                    <h5>{item.name}</h5>
                                    <div className="d-flex align-items-center justify-content-end mt-3">
                                        {/* <button className="btn btn-outline-warning mr-2">Edit</button> */}
                                        <button onClick={() => props.deleteCategory(item.id)} className="btn btn-outline-danger">Delete</button>
                                    </div>
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
        typeCategories: state.admin.typeCategories,
        categories: state.admin.categories
    }
}

export default connect(mapStateToProps, { getTypeCategory, getCategries, deleteCategory })(AdminCategory)