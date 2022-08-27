import React, { useEffect, useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { connect, useDispatch } from 'react-redux'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'
import { getTypeCategory } from '../../redux/actions/adminActions'

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
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        dispatch(getTypeCategory())
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

export default connect(mapStateToProps, { getTypeCategory })(AdminCategory)