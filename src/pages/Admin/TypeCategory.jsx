import { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { createCategory, getCategory } from '../../redux/actions/adminActions'

const TypeCategory = (props) => {
    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    // const [category, setCategory] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        // props.getCategory()
        dispatch(getCategory())
        // getCategry()
    }, [dispatch])

    return (
        <AdminLayout>
            <div className="TypeCategory">
                <div className="container">
                    <div className="row">
                        <form onSubmit={(name, file) => props.createCategory(name, file)} className="cards col-lg-4">
                            <h5 className='mb-5'>Type category</h5>
                            <input required onChange={e => setName(e.target.value)} value={name} placeholder='Name...' type="text" className="form-control" />
                            <input required onChange={e => setFile(e.target.files[0])} type="file" className="form-control my-4" />
                            {file &&
                                <div className='img'><img src={URL.createObjectURL(file)} alt="" /></div>
                            }
                            <button className='btn btn-dark ms-auto d-block' type="submit">Enter</button>
                        </form>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row">
                        {props.categories?.map((item, index) => (
                            <div key={index} className="col-lg-3">
                                <div className="img">
                                    <img className='w-100' src={item.image} alt="" />
                                </div>
                                <h5>{item.name}</h5>
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
        categories: state.admin.categories
    }
}

export default connect(mapStateToProps, { createCategory, getCategory })(TypeCategory)