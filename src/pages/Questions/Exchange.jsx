import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Exchange = (props) => {
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
                                <a className="active">
                                    Mahsulotni qaytarish va almashtirish
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </a>
                                <Link to={'/question/delivery'}>
                                    Yetkazib berish <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link to={'/question/credit'}> Kredit <FontAwesomeIcon icon={faAngleRight} /> </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1>Mahsulotni qaytarish va almashtirish</h1>

                            <Accordion open={open} toggle={toggle} className="myAccardion">
                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="1" className="card-header">
                                        <h5>
                                            Agar yetkazib berilgan mahsulot sifatsiz bo`lsa nima qilish kerak?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <div className="card-body">
                                            <p>Agar mahsulot sifatiga mos kelmasa yoki zavod nuqsoniga ega bo'lsa, iltimos, sotuvchiga 7 kun ichida murojaat qiling.</p>
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

export default Exchange