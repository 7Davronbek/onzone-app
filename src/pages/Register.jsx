import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    return (
        <>
            <div className="scoring">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="cards myShadow">
                                <h1>Ro'yxatdan o'tish</h1>
                                <form action="POST">
                                    <div className="numberWrap">
                                        <label htmlFor="phone">Sizning telefon raqamingiz *</label>
                                        <label className="label" htmlFor="phone2">+998</label>
                                        <input
                                            required
                                            type="number"
                                            className="form-control"
                                            id="phone2"
                                        />
                                    </div>

                                    <label htmlFor="password1">Установите пароль *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password1"
                                    />

                                    <label htmlFor="password">Parol tasdiqlang *</label>
                                    <input
                                        required
                                        type="password"
                                        className="form-control"
                                        id="password"
                                    />


                                    <div className="checkWrap">
                                        <div className="wrap">
                                            <input type="checkbox" name="" id="check1" />
                                            <label htmlFor="check1">
                                                Men <a href="/pages/oferta" >Saytdan foydalanish shartlari</a> ni o'qib chiqdim va roziman
                                                <span>&#10004;</span></label>
                                        </div>
                                    </div>

                                    <Link to={'/register'} className="main btn">Ro'yxatdan o'tish</Link>
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