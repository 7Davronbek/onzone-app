import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_PATH, USER_EMAIL, USER_TOKEN } from '../tools/constants'
import axios from 'axios'
import { useState } from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        await axios.post(API_PATH + '/account/login/', { email, password })
            .then((res) => {
                localStorage.setItem(USER_TOKEN, res.data.token)
                localStorage.setItem(USER_EMAIL, email)
                navigate('/verify', {replace: true})
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

const mapStateToProps = state => {
    return {
        userToken: state.auth.userToken,
        userEmail: state.auth.userEmail,
    }
}

export default connect(null, null)(Login)