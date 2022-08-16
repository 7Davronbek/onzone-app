import React from 'react'

const Scoring = () => {
    return (
        <>
            <div className="addCards active add-cards" id="addCards">
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
            </div>
        </>
    )
}

export default Scoring
