import { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { getCategory } from '../../redux/actions/adminActions'
import axios from 'axios'
import { API_PATH } from '../../tools/constants'

const TypeCategory = (props) => {
    const [name, setName] = useState('')
    const [nameRu, setNameRu] = useState('')
    const [file, setFile] = useState('')
    // const [category, setCategory] = useState([])
    const dispatch = useDispatch()

    const config = {
        headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    };

    const postCategory = async (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('image', file)
        formData.append('name', name)
        formData.append('name_ru', nameRu)

        await axios.post(API_PATH + '/admins/create-type-category/', formData, config)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

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
                        <form onSubmit={postCategory} className="cards col-lg-4">
                            <h5 className='mb-5'>Type category</h5>
                            <input required onChange={e => setName(e.target.value)} value={name} placeholder='Name uz...' type="text" className="form-control" />
                            <input required onChange={e => setNameRu(e.target.value)} value={nameRu} placeholder='Name ru...' type="text" className="form-control my-4" />
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


export default connect(mapStateToProps, { getCategory })(TypeCategory)