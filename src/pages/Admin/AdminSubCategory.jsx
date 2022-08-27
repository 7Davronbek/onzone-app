import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import AdminLayout from '../../components/AdminLayout'
import { getTypeCategory } from '../../redux/actions/adminActions'
import { API_PATH } from '../../tools/constants'

const AdminSubCategory = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [id, setId] = useState('')

    const dispatch = useDispatch()

    const createSubCategory = async e => {
        e.preventDefault()

        // await axios.post(API_PATH + `/admins/create-subcategory/`, {name, nameRu, id})
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }

    return (
        <AdminLayout>
            <div className='AdminSubCategory'>
                <div className="container">
                    <div className="row">
                        <form onSubmit={createSubCategory} className="col-lg-4">
                            <input onChange={e => setName(e.target.value)} value={name} className='form-control mb-3' type="text" placeholder='Name uz...' />
                            <input onChange={e => setNameRu(e.target.value)} value={nameRu} className='form-control mb-3' type="text" placeholder='Name ru...' />
                            <select onChange={e => setId(e.target.value)} className='form-control mb-3'>
                                <option className='form-control' value="0">------------</option>
                                {props.typeCategories && props.typeCategories.map((item, index) => (
                                    <option key={item.id} className='form-control' value={item.id}>{item.name}</option>
                                ))}
                            </select>
                            <button type='submit' className="btn btn-dark">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

const mapStateToProps = state => {
    return {
        typeCategories: state.admin.typeCategories
    }
}

export default connect(mapStateToProps, { getTypeCategory })(AdminSubCategory)  