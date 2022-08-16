import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { API_PATH } from '../tools/constants'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const send = async (e) => {
        e.preventDefault()
        await axios.post(API_PATH + '/account/register/', { email, password, password2 })
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
                                <h1>Ro'yxatdan o'tish</h1>
                                <form onSubmit={send}>
                                    {/* <div className="numberWrap">
                                        <label htmlFor="phone">Sizning telefon raqamingiz *</label>
                                        <label className="label" htmlFor="phone2">+998</label>
                                        <input
                                            required
                                            type="number"
                                            className="form-control"
                                            id="phone2"
                                        />
                                    </div> */}
                                    <div className="numberWrap">
                                        <label htmlFor="phone">Sizning emailingiz *</label>
                                        <label className="label" htmlFor="phone2"></label>
                                        <input
                                            required
                                            type="email"
                                            className="form-control"
                                            id="phone2"
                                            onChange={e => setEmail(e.target.value)}
                                            value={email}
                                        />
                                    </div>

                                    <label htmlFor="password1">Parol qo'yish *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password1"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />

                                    <label htmlFor="password">Parol tasdiqlang *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        onChange={e => setPassword2(e.target.value)}
                                        value={password2}
                                    />


                                    <div className="checkWrap">
                                        <div className="wrap">
                                            <input required type="checkbox" name="" id="check1" />
                                            <label htmlFor="check1">
                                                Men <a href="/pages/oferta" >Saytdan foydalanish shartlari</a> ni o'qib chiqdim va roziman
                                                <span>&#10004;</span></label>
                                        </div>
                                    </div>

                                    <button type='submit' className="main btn">Ro'yxatdan o'tish</button>
                                    <Link to={'/login'} className="btn"> Kirish </Link>

                                </form>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register