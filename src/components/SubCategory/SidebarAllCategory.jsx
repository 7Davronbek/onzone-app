import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SidebarAllCategory = () => {
    return (
        <>
            <div className="leftCards myShadow">
                <Link className="active" to={'/sub-category'}>
                    Telefonlar va gadjetlar <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to={'/sub-multi-category'}>
                    Smartfonlar <FontAwesomeIcon icon={faAngleRight} />
                </Link>
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
            </div>
        </>
    )
}

export default SidebarAllCategory