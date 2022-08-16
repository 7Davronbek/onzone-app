import React from 'react'
import { Link } from 'react-router-dom'
import { API_PATH } from '../tools/constants'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const login = async(e) => {
        e.preventDefault()
        await axios.post(API_PATH + '/account/login/', {email, password})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="scoring">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="cards myShadow">
                                <h1>Tizimga kirish</h1>
                                <form onSubmit={login}>
                                    {/* <div className="numberWrap">
                                        <label htmlFor="phone">Sizning telefon raqamingiz *</label>
                                        <label className="label" htmlFor="phone2">+998</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                        />
                                    </div> */}

                                    <div className="numberWrap">
                                        <label htmlFor="phone">Sizning emailingiz *</label>
                                        <label className="label" htmlFor="phone2"></label>
                                        <input
                                            required
                                            type="email"
                                            className="form-control"
                                            id="phone"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>

                                    <label htmlFor="password">Parol *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />

                                    <a className="a" href="#">Parolni unutdingzmi?</a>

                                    <button type='submit' className="main btn">Kirish</button>
                                    <Link to={'/register'} className="btn"> Ro'yxatdan o'tish </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login