import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCartShopping, faGlobe, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/fontawesome-free-regular'
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, Row, TabPane, TabContent } from 'reactstrap';
import classnames from 'classnames';

const Navbar = (args) => {
    const [modal_catalog, setModal] = useState(false);

    const toggle = () => setModal(!modal_catalog);

    const [activeTab, setActiveTab] = useState('1');

    const toggle2 = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <div className="Navbar">
                {/* Navigation */}

                <div id="nav" className="nav-01">
                    {/* <Modal isOpen={modal_catalog} toggle={toggle} {...args} className={`fixedCatalog ${modal_catalog ? 'active' : ''}`} style={{maxWidth: '1800px', width: '100%'}}> */}
                    <div className={`fixedCatalog ${modal_catalog ? 'active' : ''}`}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 myCol">
                                    <nav className="desktop">
                                        <Nav tabs className="nav nav-tabs myNav" id="nav-tab" role="tablist">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '1' })}
                                                    onClick={() => { toggle2('1'); }}
                                                >
                                                    <span>Telefonlar va gadjetlar</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/1.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '2' })}
                                                    onClick={() => { toggle2('2'); }}
                                                >
                                                    <span>Yirik maishiy texnika</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/2.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '3' })}
                                                    onClick={() => { toggle2('3'); }}
                                                >
                                                    <span>Kichik maishiy texnika</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/3.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>

                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '4' })}
                                                    onClick={() => { toggle2('4'); }}
                                                >
                                                    <span>Oshxona texnikasi</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/8.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>


                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '5' })}
                                                    onClick={() => { toggle2('5'); }}
                                                >
                                                    <span>O‘rnatiluvchi texnika</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/7.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>


                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '6' })}
                                                    onClick={() => { toggle2('6'); }}
                                                >
                                                    <span>Klimat uskunalari</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/4.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>


                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '7' })}
                                                    onClick={() => { toggle2('7'); }}
                                                >
                                                    <span>Tikuv mashinalari</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/5.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>


                                            <NavItem>
                                                <NavLink
                                                    className={classnames({ active: activeTab === '8' })}
                                                    onClick={() => { toggle2('8'); }}
                                                >
                                                    <span>Televizor/Video/Audio</span>
                                                    <i className="i"></i>
                                                    <span className="imgSpan">
                                                        <img src="/image/popular/6.png" alt="" />
                                                    </span>
                                                </NavLink>
                                            </NavItem>

                                        </Nav>
                                    </nav>

                                    <nav className="mobile">
                                        <h1>
                                            <Link to={'/add-card'}
                                            >Skoringdan o'tish <FontAwesomeIcon icon={faCreditCard} /> </Link>
                                        </h1>
                                        <div className="world">
                                            Oʻzbekcha
                                            <FontAwesomeIcon icon={faAngleDown} />

                                            <div className="langWrap">
                                                <a href="#">Русский</a>
                                                <a href="#">Oʻzbekcha</a>
                                            </div>
                                        </div>
                                        <h2>Katalog</h2>
                                        <div className="nav nav-tabs myNav">
                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Telefonlar va gadjetlar</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/1.png" alt="" />
                                                </span>
                                            </Link>
                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Yirik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/2.png" alt="" />
                                                </span>
                                            </Link>
                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/3.png" alt="" />
                                                </span>
                                            </Link>

                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/8.png" alt="" />
                                                </span>
                                            </Link>

                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/7.png" alt="" />
                                                </span>
                                            </Link>

                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/4.png" alt="" />
                                                </span>
                                            </Link>

                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/5.png" alt="" />
                                                </span>
                                            </Link>

                                            <Link className="nav-link" to={'/sub-multi-category'}>
                                                <span>Kichik maishiy texnika</span>
                                                <i className="i"></i>
                                                <span className="imgSpan">
                                                    <img src="/image/popular/6.png" alt="" />
                                                </span>
                                            </Link>
                                        </div>
                                    </nav>
                                </div>
                                <div className="col-8 d-none d-lg-block">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1"
                                            className="tab-pane fade show"
                                        // id="phone"
                                        // role="tabpanel"
                                        // aria-labelledby="phone"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}
                                                        >Telefonlar va gadjetlar</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2"
                                            className="tab-pane fade show"
                                        // id="home"
                                        // role="tabpanel"
                                        // aria-labelledby="home"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Yirik maishiy texnika</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Kichik maishiy texnika</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Oshxona texnikasi</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="5"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>O‘rnatiluvchi texnika</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="6"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Klimat uskunalari</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="7"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Tikuv mashinalari</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="8"
                                            className="tab-pane fade show"
                                        // id="tv"
                                        // role="tabpanel"
                                        // aria-labelledby="tv"
                                        >
                                            <Row className="row">
                                                <div className="col-12">
                                                    <h1>
                                                        <Link to={'/sub-multi-category'}>Televizor/Video/Audio</Link>
                                                    </h1>
                                                </div>
                                                <div className="col-9 d-flex">
                                                    <div className="mr-5">
                                                        <a href="#"><b>Planshetlar</b></a>

                                                        <a href="#"
                                                        ><b>Smartfon va telefonlar uchun aksessuarlar</b></a
                                                        >
                                                        <a href="#">Simsiz zaryadkalash moslamalari</a>
                                                        <a href="#">Aqlli qo‘l soatlari va brasletlar</a>
                                                        <a href="#">Sizsiz quloqchinlar</a>
                                                        <a href="#">Tashqi akkumulyatorlar (Power bank)</a>
                                                    </div>
                                                    <div>
                                                        <a href="#"><b>Telefonlar</b></a>
                                                        <a href="#">Smartfonlar</a>
                                                        <a href="#">Radiotelefonlar</a>

                                                        <a href="#"><b>Elektron kitoblar</b></a>
                                                        <a href="#"><b>Fakslar</b></a>
                                                        <a href="#"><b>Grafik planshetlar</b></a>
                                                    </div>
                                                </div>
                                                <div className="col-3 right">
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed1.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed2.png" alt=""
                                                            /></a>
                                                    </div>
                                                    <div className="img">
                                                        <a href="#"
                                                        ><img className="w-100" src="/image/fixed3.png" alt=""
                                                            /></a>
                                                    </div>
                                                </div>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Modal> */}
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-1 col-md-3 col-4 p-lg-0">
                                <Link to={'/'} className="logo">
                                    <img src="/image/logo.png" alt="" className="w-100" />
                                </Link>
                            </div>
                            <div
                                className="col-lg-11 col-md-9 col-8 skoring d-flex align-items-center"
                            >
                                <div
                                    id="catalogId"
                                    className="catalog div mobileContent"
                                    onClick={toggle}
                                >
                                    <i className="icon icon-search"></i> Katalog
                                </div>

                                <Link to={'/add-card'} className="btn mobileContent"
                                ><FontAwesomeIcon icon={faCreditCard} />Skoringdan o`tish </Link>
                                <form className="mobileContent">
                                    <i className=""><img src="/image/search.svg" alt="" /></i>
                                    <input
                                        type="text"
                                        placeholder="Mahsulotlarni qidirish"
                                        className="form-control"
                                    />
                                </form>

                                <div className="d-flex align-items-center ml-auto">
                                    <div className="world mobileContent">
                                        <FontAwesomeIcon icon={faGlobe} />
                                        <FontAwesomeIcon icon={faAngleDown} />

                                        <div className="langWrap">
                                            <a href="#">Русский</a>
                                            <a href="#">Oʻzbekcha</a>
                                        </div>
                                    </div>
                                    <Link to={'/cart'} className="cart">
                                        {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                                        <i className="icon icon-cart"></i>
                                        <h5>1</h5>
                                    </Link>
                                    <Link to={'/wishlist'} className="heart mobileContent">
                                        {/* <FontAwesomeIcon icon={faHeart} /> */}
                                        <i className="icon icon-heart"></i>
                                        <h5>2</h5>
                                    </Link>
                                    <Link to={'/login'} className="user">
                                        <img src="/image/user.svg" alt="" />
                                    </Link>

                                    <div id="mobileMenu" onClick={toggle} className={`mobileMenu ${modal_catalog ? 'active' : ''}`}>
                                        <div className="line m-0">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <div className="col-12">
                            <input type="text" className="form-control" name="" id="">
                        </div> */}
                            {/* <div className="col-4 search">
                        </div>
                        <div className="col-2 contact">
                        </div>
                        <div className="col-2 d-flex justify-content-end">
                        </div> */}
                        </div>
                    </div>
                </div>

                <div className="navbarLine"></div>

                <div className="nav-02">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                {/* <a className="btn katalog">
                                <i className="fas fa-th-list"></i>Katalog
                            </a> */}
                                <Link to={'/sub-multi-category'} className="btn">Smartfonlar</Link>

                                <Link to={'/sub-multi-category'} className="btn"
                                >O‘rnatiluvchi texnika</Link>

                                <Link to={'/sub-multi-category'} className="btn">Televizorlar</Link>

                                <Link to={'/sub-multi-category'} className="btn"
                                >Kir yuvish mashinalari</Link>

                                <Link to={'/sub-multi-category'} className="btn">Muzlatkichlar</Link>

                                <Link to={'/oferta'}
                                    className="btn btn-light d-flex align-items-center"
                                >
                                    Hamkorlik Qilish <FontAwesomeIcon icon={faHandshake} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
