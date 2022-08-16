import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/UserDashboard/Header'
import Order from '../../components/UserDashboard/Order'
import Sidebar from '../../components/UserDashboard/Sidebar'

const Dashboard = () => {
    return (
        <>
            <div className="shaxsiy-kabinet">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <Link className="m-0" to={'/'}>Bosh sahifa</Link>
                                <Link className="m-0" to={'/user-dashboard'}
                                ><span>/</span> Shaxsiy kabinet
                                </Link>
                                <Link to={'#'}><span>/</span> Xaridlar - marketpleys ONZONE </Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Shaxsiy kabinet</h1>
                        </div>
                        <Sidebar />

                        <div className="col-lg-9">
                            <Header />
                            <Order />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard