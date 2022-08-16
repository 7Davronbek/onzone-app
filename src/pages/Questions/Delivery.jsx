import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Delivery = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };

    return (
        <>
            <div className="howToSell letterBg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="/">Bosh sahifa</a>
                                <a href="#"><span>/</span> Tez-tez beriladigan savollar</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="leftCards myShadow">
                                <Link to={'/question/payment'}>
                                    Xarid va tolo'v <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link to={'/question/sellers'}>
                                    Sotuvchilarga <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link to={'/question/exchange'}>
                                    Mahsulotni qaytarish va almashtirish
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <a className="active">
                                    Yetkazib berish <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                                <Link to={'/question/credit'}> Kredit <FontAwesomeIcon icon={faAngleRight} /> </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1>Yetkazib berish</h1>

                            <Accordion open={open} toggle={toggle} className="myAccardion">
                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="1" className="card-header">
                                        <h5>
                                            Qancha muddatda yetkazib beriladi?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <div className="card-body">
                                            <p>Buyurtmalar Toshkent shahri bo`ylab 24 ish soati davomida,
                                                viloyatlarga 3-7 kun ichida yetkazib beriladi.</p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="2" className="card-header">
                                        <h5>
                                            Onzone.uz marketpleysida yetkazib berish xizmati bormi?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="2">
                                        <div className="card-body">
                                            <p>
                                                Ha, Onzone.uz marketpleysida yetkazib berish xizmati
                                                mavjud.
                                            </p>
                                            <p>
                                                Shaharlararo etkazib berish narxi har bir holatda
                                                alohida-alohida hisoblanadi, mahsulot turiga, uning
                                                o'lchamiga, vazniga va boshqa parametrlariga bog'liq.
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="3" className="card-header">
                                        <h5>
                                            Yetkazib berish manzilini o`zgartirsa bo`ladimi?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="3">
                                        <div className="card-body">
                                            <p>Mahsulotingiz Sizga to'lov jarayonida kiritilgan manzil
                                                bo’yicha yetkazib beriladi. Agarda yetkazib beriladigan
                                                manzilni o’zgartirmoqchi bo’lsangiz, buyurtma
                                                rasmiylashtirilgandan keyin 1 soat ichida sotuvchi bilan
                                                bog’laning.</p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Delivery