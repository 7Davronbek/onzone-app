import React from 'react'
import { useState } from 'react'
import AdminLayout from '../../components/AdminLayout'
import { API_PATH } from '../../tools/constants'
import axios from 'axios'
import { useEffect } from 'react'

const TypeCategory = () => {
    const [name, setName] = useState('')
    const [file, setFile] = useState('')
    const [category, setCategory] = useState([])

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
    }

    const getCategry = async () => {
        await axios.get(API_PATH + '/product/list-type-category/')
            .then((res) => {
                setCategory(res.data.result)
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const createCategory = async e => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('image', file)

        await axios.post(API_PATH + '/product/create-type-category/', formData, config)
            .then((res) => {
                getCategry()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCategry()
    }, [])

    return (
        <AdminLayout>
            <div className="TypeCategory">
                <h5 className='mb-5'>Type category</h5>
                <form onSubmit={createCategory} className="cards">
                    <input required onChange={e => setName(e.target.value)} value={name} placeholder='Name...' type="text" className="form-control" />
                    <input required onChange={e => setFile(e.target.files[0])} type="file" className="form-control my-4" />
                    {file &&
                        <div><img src={URL.createObjectURL(file)} alt="" /></div>
                    }
                    <button className='btn btn-dark ms-auto d-block' type="submit">Enter</button>
                </form>

                <div className="container py-5">
                    <div className="row">
                        {category?.map((item, index) => (
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

export default TypeCategory