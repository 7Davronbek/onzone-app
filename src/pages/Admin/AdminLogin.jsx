import React from 'react'
import { API_PATH } from '../../tools/constants'
import axios from 'axios'
import { useState } from 'react'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const adminLogin = async e => {
        e.preventDefault()
        await axios.post(API_PATH + '/admin/', { email, password })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='AdminLogin py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-8 mx-auto">
                        <h1 className="text-center">Admin Login</h1>
                        <form onSubmit={adminLogin} className="cards">
                            <input onChange={e => setEmail(e.target.value)} value={email} className='form-control mb-3' type="email" placeholder='Enter email' />
                            <input onChange={e => setPassword(e.target.value)} value={password} className='form-control mb-3' type="password" placeholder='Enter password' />
                            <button type='submit' className="btn">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin