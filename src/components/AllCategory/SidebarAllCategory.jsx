import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SidebarAllCategory = () => {
    return (
        <>
            <div className="leftCards myShadow">
                <Link to={'/all-category'} className="active">
                    Barcha kategoriyalar <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to={'/sub-category'} href="/pages/sub-category">
                    Telefonlar va gadjetlar <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <a href="./delivery">
                    Televizor/Video/Audio <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Go‘zallik va salomatlik <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Mebel <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Maishiy texnika <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Pardoz va atir buyumlar <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Kompyuterlar va orgtexnika <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Avtomobil jihozlari va uskunalari
                    <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Oshxona texnikasi <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a className="" href="./delivery">
                    Uy va ishxona jixozlari <FontAwesomeIcon icon={faAngleRight} />
                </a>
            </div>
        </>
    )
}

export default SidebarAllCategory