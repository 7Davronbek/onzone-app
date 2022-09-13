import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCategory } from '../../redux/actions/productsAction'

const SidebarAllCategory = (props) => {
    console.log(props);
    return (
        <>
            <div className="leftCards myShadow">
                {props.listCategories && props.listCategories.map((item) => (
                    <Link key={item.id} className="" to={`/sub-category/${item.id}`}>
                        {item.name} <FontAwesomeIcon icon={faAngleRight} />
                    </Link>
                ))}
                {/* <Link className="active" to={'/sub-category'}>
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
                </a> */}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        listCategories: state.products.listCategories
    }
}

export default connect(mapStateToProps, getCategory)(SidebarAllCategory)