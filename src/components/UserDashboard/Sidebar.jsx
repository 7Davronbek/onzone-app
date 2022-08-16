import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="col-lg-3">
                <div className="leftCards myShadow">
                    <Link className="active" to={'/user-dashboard'}>
                        <span><b className="icon icon-profile-1"></b> Xaridlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  />  </Link>

                    <Link className="" to={'/my-cards'}>
                        <span
                        ><b className="icon icon-profile-2"></b> Mening kartalarim </span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </Link>

                    <Link className="" to={'/credits'}>
                        <span><b className="icon icon-profile-3"></b> Kreditlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </Link>

                    <Link className="" to={'/personal'}>
                        <span
                        ><b className="icon icon-profile-4"></b> Shaxsiy ma'lumotlar</span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </Link>

                    <Link className="" to={'/change-password'}>
                        <span
                        ><b className="icon icon-profile-5"></b> Parolni almashtirish </span
                        ><FontAwesomeIcon icon={faAngleRight}  /> </Link>

                </div>
            </div>
        </>
    )
}

export default Sidebar