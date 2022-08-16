import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faSignOutAlt } from '@fortawesome/fontawesome-free-solid'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const Header = (args) => {
    const [modal_dashboard, setModal] = useState(false);

    const toggle = () => setModal(!modal_dashboard);

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
                        <button className="btn yes">Ha</button>
                        <button onClick={toggle} className="btn no">Yo'q</button>
                    </div>
                </div>
            </Modal>

        </>
    )
}

export default Header