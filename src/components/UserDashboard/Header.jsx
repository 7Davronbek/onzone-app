import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import { Modal } from 'reactstrap';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { API_PATH, USER_TOKEN } from '../../tools/constants';
import axios from 'axios'

const Header = ({ args }) => {
    const [modal_dashboard, setModal] = useState(false);

    const toggle = () => setModal(!modal_dashboard);

    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem(USER_TOKEN)
        },
    }

    const exit = async () => {
        await axios.delete(API_PATH + '/account/logout/', config)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className="infoWrap">
                <div>
                    <h2>RED</h2>
                    <h3>+998943698058</h3>
                    <p>
                        <FontAwesomeIcon icon={faBan} />
                        Identifikatsiyadan o‘tmagan
                        foydalanuvchi
                    </p>
                </div>
                <div id="logout" className="logout" onClick={toggle}>
                    Chiqish <FontAwesomeIcon icon={faSignOutAlt} />
                </div>
            </div>

            <Modal isOpen={modal_dashboard} toggle={toggle} {...args} aria-labelledby="contained-modal-title-vcenter" centered className={`logoutModal ${modal_dashboard ? 'active' : ''}`} id="logoutModal">
                <div className="cards">
                    <div className="circle"><i className="fas fa-exclamation"></i><FontAwesomeIcon icon={faExclamation} /></div>
                    <h2>Akkauntdan chiqmoqchimisiz?</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        <button onClick={exit} className="btn yes">Ha</button>
                        <button onClick={toggle} className="btn no">Yo'q</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Header