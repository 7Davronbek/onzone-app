import React from 'react'
import { Link } from 'react-router-dom'
import Credit from '../../components/UserDashboard/Credit'
import Header from '../../components/UserDashboard/Header'
import Sidebar from '../../components/UserDashboard/Sidebar'

const Credits = () => {
    return (
        <>
            <div className="shaxsiy-kabinet my-cards">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <Link className="m-0" to={'/'}>Bosh sahifa</Link>
                                <Link className="m-0" to={'/user-dashboard'}
                                ><span>/</span> Shaxsiy kabinet
                                </Link>
                                <a href="#!"><span>/</span> Kreditlar - marketpleys ONZONE </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Shaxsiy kabinet</h1>
                        </div>
                        <Sidebar />

                        <div className="col-lg-9">
                            <Header />
                            <Credit />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Credits