import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/UserDashboard/Header'
import PersonalInfo from '../../components/UserDashboard/PersonalInfo'
import Sidebar from '../../components/UserDashboard/Sidebar'

const Personal = () => {
    return (
        <>
            <div className="shaxsiy-kabinet personal">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <Link className="m-0" to={'/'}>Bosh sahifa</Link>
                                <Link className="m-0" to={'/user-dashboard'}
                                ><span>/</span> Shaxsiy kabinet
                                </Link>
                                <a href="#!"><span>/</span> Shaxsiy ma'lumotlar - marketpleys ONZONE </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <h1>Shaxsiy kabinet</h1>
                        </div>
                        <Sidebar />

                        <div className="col-lg-9">
                            <Header />
                            <PersonalInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal