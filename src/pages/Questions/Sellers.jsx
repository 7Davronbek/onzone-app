import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Sellers = (props) => {
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
                                <a className="active">
                                    Sotuvchilarga <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                                <Link to={'/question/exchange'}>
                                    Mahsulotni qaytarish va almashtirish
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link to={'/question/delivery'}>
                                    Yetkazib berish <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link to={'/question/credit'}> Kredit <FontAwesomeIcon icon={faAngleRight} /> </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1>Sotuvchilarga</h1>

                            <Accordion open={open} toggle={toggle} className="myAccardion">
                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="1" className="card-header">
                                        <h5>
                                            Sotuvchilar uchun qanday qulayliklar mavjud?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <div className="card-body">
                                            <p className="p">Statistikani o’zida qamrab olgan qulay admin paneli;</p>
                                            <p className="p">Xaridorlarni izlash xizmati;</p>
                                            <p className="p">Tez bo’lgan ishlash jarayoni;</p>
                                            <p className="p">Yetkazib berish vaqti va joyini aniqlaymiz;</p>
                                            <p className="p">Kredit uchun ajratilgan mablag’larni hamkorlarimiz hisob raqamiga tashlab beramiz.</p>
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

export default Sellers