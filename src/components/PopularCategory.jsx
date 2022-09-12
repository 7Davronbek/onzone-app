import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListCategory } from '../redux/actions/productsAction';

const PopularCategory = (props) => {
    useEffect(() => {
        props.getListCategory()
    }, [])
    return (
        <>
            <div className="pop-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Ommabop bo'limlar</h2>
                        </div>
                    </div>

                    <div className="row">
                        {props.products && props.products.slice(0, 12).map((item, index) => (
                            <>
                                <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                                    <Link to={'/sub-multi-category'}>
                                        <div className="card h-100 text-center">
                                            <div className="card-body">
                                                <div className="cardImg">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </>
                        ))}
                        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/1.png" alt="" />
                                        </div>
                                        <p>Telefonlar va gadjetlar</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/2.png" alt="" />
                                        </div>
                                        <p>Yirik maishiy texnika</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/3.png" alt="" />
                                        </div>
                                        <p>Kichik maishiy texnika</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/4.png" alt="" />
                                        </div>
                                        <p>Klimat uskunalari</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/5.png" alt="" />
                                        </div>
                                        <p>Tikuv mashinalari</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/6.png" alt="" />
                                        </div>
                                        <p>Televizorlar</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/7.png" alt="" />
                                        </div>
                                        <p>O‘rnatiluvchi texnika</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/8.png" alt="" />
                                        </div>
                                        <p>Oshxona texnikasi</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/9.png" alt="" />
                                        </div>
                                        <p>Go‘zallik va salomatlik</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/10.png" alt="" />
                                        </div>
                                        <p>Sportga oid mahsulotlar</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/11.png" alt="" />
                                        </div>
                                        <p>Printerlar va skanerlar</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                            <Link to={'/sub-multi-category'}>
                                <div className="card h-100 text-center">
                                    <div className="card-body">
                                        <div className="cardImg">
                                            <img src="image/popular/12.png" alt="" />
                                        </div>
                                        <p>Uy va ishxona jixozlari</p>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.listCategories
    }
}

export default connect(mapStateToProps, { getListCategory })(PopularCategory)
