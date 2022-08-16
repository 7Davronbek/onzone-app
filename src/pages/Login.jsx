import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div className="scoring">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="cards myShadow">
                                <h1>Tizimga kirish</h1>
                                <form action="POST">
                                    <div className="numberWrap">
                                        <label htmlFor="phone">Sizning telefon raqamingiz *</label>
                                        <label className="label" htmlFor="phone2">+998</label>
                                        <input
                                            required
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                        />
                                    </div>

                                    <label htmlFor="password">Parol *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />

                                    <a className="a" href="#">Parolni unutdingzmi?</a>

                                    <Link to={'/user-dashboard'} className="main btn">Kirish</Link>
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