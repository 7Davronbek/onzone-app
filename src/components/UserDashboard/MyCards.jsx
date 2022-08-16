import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyCards = (args) => {
    const [add_card, setModal] = useState(false);

    const toggle = () => setModal(!add_card);
    return (
        <>
            <h2>Mening kartalarim</h2>

            <div id="addBtn" className="cards" onClick={toggle}>
                <div className="plus"><FontAwesomeIcon icon={faPlus} /></div>
                <h3>Karta qoʻshish</h3>
            </div>

            <Modal isOpen={add_card} toggle={toggle} {...args} aria-labelledby="contained-modal-title-vcenter" centered className={`addCards ${add_card ? 'active' : ''}`}>
                <form className="cards">
                    <h2>Karta qo‘shish</h2>

                    <div className="wrap">
                        <label htmlFor="cardNumber">Karta raqami <span>*</span></label>
                        <input required id="cardNumber" className="form-control" type="number" />
                    </div>

                    <div className="wrap">
                        <label htmlFor="cardNumber2"
                        >Kartaning amal qilish muddati <span>*</span></label
                        >
                        <input required id="cardNumber2" className="form-control" type="number" />
                    </div>

                    <div className="wrap">
                        <label htmlFor="cardNumber3"
                        >Kartaning amal qilish muddati <span>*</span></label
                        >
                        <input required id="cardNumber3" className="form-control" type="text" />
                    </div>

                    <button className="btn" type="submit">Tayyor</button>
                </form>
            </Modal>
        </>
    )
}

export default MyCards
