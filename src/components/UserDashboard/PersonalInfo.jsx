import React from 'react'

const PersonalInfo = () => {
    return (
        <>
            <h2>Shaxsiy ma'lumotlar</h2>

            <form className="personalWrap">
                <div className="wrap">
                    <div className="inputDiv">
                        <label htmlFor="name">Ism</label>
                        <input required id="name" type="text" className="form-control" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="surname">Familiya</label>
                        <input
                            required
                            id="surname"
                            type="text"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="wrap">
                    <div className="inputDiv">
                        <label htmlFor="name2">Otasini ismi</label>
                        <input required id="name2" type="text" className="form-control" />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="surname2">Email</label>
                        <input
                            required
                            id="surname2"
                            type="email"
                            className="form-control"
                        />
                    </div>
                </div>

                <button className="btn" type="submit">Saqlash</button>
            </form>
        </>
    )
}

export default PersonalInfo