import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import { Link } from 'react-router-dom'


const Payment = (props) => {
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
                                <Link to={'/'}>Bosh sahifa</Link>
                                <a href="#"><span>/</span> Tez-tez beriladigan savollar</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <div className="leftCards myShadow">
                                <a className="active">
                                    Xarid va tolo'v <FontAwesomeIcon icon={faAngleRight} />
                                </a>
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
                                <Link to={'/question/credit'}> Kredit <FontAwesomeIcon icon={faAngleRight} /> </Link>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <h1>Xarid va tolo'v</h1>

                            <Accordion open={open} toggle={toggle} className="myAccardion">
                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="1" className="card-header">
                                        <h5>
                                            Onzone.uz da qanday to‘lov usullari mavjud?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="1">
                                        <div className="card-body">
                                            <p>
                                                Onzone.uz marketplaysida to`lov plastik kartalari orqali
                                                amalga oshiriladi.
                                            </p>
                                            <p>
                                                Siz Uzcard va Humo kartalari orqali to`lov qilishingiz
                                                mumkin.
                                            </p>
                                        </div>
                                    </AccordionBody>
                                </AccordionItem>

                                <AccordionItem className="card myShadow">
                                    <AccordionHeader targetId="2" className="card-header" >
                                        <h5>
                                            Onzone.uz marketpleysida mahsulot qanday xarid qilinadi?
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        </h5>
                                    </AccordionHeader>

                                    <AccordionBody accordionId="2">
                                        <div className="card-body">
                                            <p>1) o'zingiz yoqtirgan mahsulotlarni tanlang;</p>
                                            <p>
                                                2) ikkita to'lov usullari ichidan "24 oy uchun kredit"
                                                yoki "onlayn to'lov" ni tanlang;
                                            </p>
                                            <p>
                                                3) keyin sotuvchini belgilang, va "Buyurtma berish"
                                                tugmasini bosing;
                                            </p>
                                            <p>
                                                4) shundan so'ng siz ro'yxatdan o'ting va Agrobank
                                                kartasini qo'shib, kredit miqdorini aniqlash uchun
                                                "Tekshirish" tugmasini bosing;
                                            </p>
                                            <p>
                                                5) skoringdan ijobiy javob olgach, "Kredit to'lov
                                                jadvali", "Oferta shartnomasi", "Onlayn to'lov krediti
                                                ajratish bo'yicha Ommaviy oferta shartnomasi" bilan
                                                tanishib chiqing va "Keyingi" tugmasini bosing;
                                            </p>
                                            <p>
                                                6) sug'urta kompaniyasini tanlang va "Sug'urta kompaniyasi
                                                polisini tanlash" shartnomasi bilan tanishib chiqing va
                                                "Keyingi" tugmasini bosing;
                                            </p>
                                            <p>
                                                7) o'zingiz haqingizdagi ma'lumotlarni to'ldiring
                                                (F.I.Sh., manzil, telefon raqami va boshqalar) va
                                                "Buyurtma berish" tugmasini bosing;
                                            </p>
                                            <p>
                                                Buyurtmangiz kelib tushganligi haqida SMS-xabar kelishini
                                                kuting.
                                            </p>
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

export default Payment