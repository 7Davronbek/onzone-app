import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                            <div className="connection">
                                <h6 className="footer__title">Aloqalar</h6>
                                <div className="tel" style={{ marginBottom: '15px' }}>
                                    <p>Telefon raqam:</p>
                                    <a className="footer__link" href="tel:">+998900000000</a>
                                </div>
                                <div className="mail" style={{ marginBottom: '15px' }}>
                                    <p>Email:</p>
                                    <a className="footer__link" href="mailto:">info@onzone.uz</a>
                                </div>
                                <div className="address">
                                    <p>Manzil:</p>
                                    <a className="footer__link" href="#"
                                    >100096, Toshkent shahri, Muqimiy ko'chasi 43-uy</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                            <div className="forclients">
                                <h6 className="footer__title">Mijozlar uchun</h6>
                                <ul>
                                    <li>
                                        <Link to={'/oferta'} className="footer__links"
                                        >Mijozlar uchun oferta</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__links" to={'/question/payment'}
                                        >Xarid va to`lov</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__links" to={'/question/exchange'}
                                        >Mahsulotni qaytarish va almashtirish</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__links" to={'/question/delivery'}
                                        >Yetkazib berish</Link>
                                    </li>
                                    <li><Link className="footer__links" to={'/question/credit'}>Kredit</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                            <div className="partners">
                                <h6 className="footer__title">Hamkorlar uchun</h6>
                                <ul>
                                    <li>
                                        <Link className="footer__links" to={'/question/sellers'}>Sotuvchilarga</Link>
                                    </li>
                                    <li>
                                        <Link className="footer__links" to={'/cooperation'}
                                        >Hamkorlik qilish</Link>
                                    </li>
                                </ul> 
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-lg-0 mb-4">
                            <div className="socials">
                                <h6 className="footer__title">
                                    Chakana marketpleysi - ijtimoiy tarmoqlarda
                                </h6>
                                <a href="#" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="#" className="fab fa-telegram-plane"><FontAwesomeIcon icon={faTelegramPlane} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row myRow">
                        <div className="col-12 d-flex align-items-center">
                            <a className="mobileA" href="/pages/oferta"
                            >Saytdan foydalanish shartlari</a
                            >
                            <a href="https://kokoagency.uz/"
                            >© kOkO digital agency | Barcha huquqlar himoyalangan</a
                            >
                            <a className="a" href="/pages/oferta">Saytdan foydalanish shartlari</a>
                            <div className="d-flex align-items-center imgWrap">
                                <a href="https://www.uzcard.uz/uz"
                                ><img src="/image/uzcard.png" alt=""
                                    /></a>
                                <a href="https://humocard.uz/uz/"
                                ><img src="/image/humo.png" alt=""
                                    /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer