import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const Credit = (props) => {
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
                                <Link to={'/question/delivery'}>
                                    Yetkazib berish <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <a className="active"> Kredit <FontAwesomeIcon icon={faAngleRight} /> </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1>Kredit</h1>

                            <Accordion open={open} toggle={toggle} className="myAccardion">
                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="1" className="card-header">
                                        <h5 className='credith5'>
                                            Kreditga olingan mahsulotning pul miqdorini to‘lamasdan
                                            turib, yangi mahsulotni kreditga xarid qilish imkoniyati
                                            mavjudmi?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <div className="card-body">
                                            <p>Ha, agar kredit chegarasi yetarli bo'lsa.</p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="2" className="card-header">
                                        <h5>
                                            Kredit berilmaslik sabablari
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="2">
                                        <div className="card-body">
                                            <p>
                                                1. So'nggi 6 oy davomida, 2 oydan ko'proq muddatda pul tushumi bo'lmagan;
                                            </p>
                                            <p> 2. Pul tushumi so'nggi 2 oyning birida bo'lmagan;</p>
                                            <p>3. NIBBD ro'yxatidan o'tmagan;
                                                
                                            </p>
                                            <p className="ml-4">Hal etish uchun kartangiz emitent bankiga murojaat qiling.</p>
                                            <p>4. STIR olinmagan yoki bankga STIR berilmagan;
                                                
                                            </p>
                                            <p className="ml-4"> Hal etish uchun, agar umuman STIR yo'q bo'lsa, STIR ni olish kerak, buning uchun mana bu havolaga o'ting: https://my.soliq.uz/application/data?user_type=1. So'ngra, olingan STIR bilan kartanigiz emitent bankiga murojaat qiling.</p>

                                            <p>
                                                5. So'ndirilmagan qarz yoki yopilmagan kredit anketasi mavjud;
                                                
                                            </p>
                                            <p className="ml-4">
                                                    Hal etish uchun, кreditni so'ndiring va kredit anketasini yoping.
                                                </p>

                                            <p>Boshqa sabablar skoring tekshiruvida ko'rsatilsa yoki yuqoridagi sabablar asossiz ko'rsatilsa, marketpleys yordam xizmatiga murojaat qiling. </p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="3" className="card-header">
                                        <h5>
                                            Kredit hisoblanishi
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="3">
                                        <div className="card-body">
                                            <p>Ajratiladigan kredit = xarid(lar) summasi + (kredit anketasi summasi)*1.5% sug'urta + yetkazib berish narxi (agar yetkazib berish xizmati pulli bo'lsa)</p>
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

export default Credit
