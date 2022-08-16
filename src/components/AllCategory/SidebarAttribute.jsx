import React from 'react'

const SidebarAttribute = () => {
    return (
        <>
            <div>
                <h2>Narx</h2>

                <div
                    className="d-flex align-items-center justify-content-between inputWrap"
                >
                    <div className="wrap myShadow">
                        <label htmlFor="from">dan</label>
                        <input
                            type="number"
                            id="from"
                            placeholder="150 000"
                            className="form-control"
                        />
                    </div>

                    <div className="wrap myShadow">
                        <label htmlFor="to">gacha</label>
                        <input
                            type="number"
                            id="to"
                            placeholder="31 625 000"
                            className="form-control"
                        />
                    </div>
                </div>

                <h2>Ishlab chiqaruvchi</h2>

                <div className="checkWrap">
                    <div className="wrap">
                        <input type="checkbox" name="" id="check1" />
                        <label htmlFor="check1">Apple <span>&#10004;</span></label>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="" id="check2" />
                        <label htmlFor="check2">Artel <span>&#10004;</span></label>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="" id="check3" />
                        <label htmlFor="check3">Honor <span>&#10004;</span></label>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="" id="check4" />
                        <label htmlFor="check4">Huawei <span>&#10004;</span></label>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="" id="check5" />
                        <label htmlFor="check5">Infinix <span>&#10004;</span></label>
                    </div>
                    <div className="wrap">
                        <input type="checkbox" name="" id="check6" />
                        <label htmlFor="check6">Iphone <span>&#10004;</span></label>
                    </div>

                    <div id="more" className="collapse">
                        <div className="wrap">
                            <input type="checkbox" name="" id="aos2" />
                            <label htmlFor="aos2">Nokia <span>&#10004;</span></label>
                        </div>
                        <div className="wrap">
                            <input type="checkbox" name="" id="aos3" />
                            <label htmlFor="aos3">OnePlus <span>&#10004;</span></label>
                        </div>
                        <div className="wrap">
                            <input type="checkbox" name="" id="aos4" />
                            <label htmlFor="aos4">Redmi <span>&#10004;</span></label>
                        </div>
                    </div>
                    <p data-toggle="collapse" data-target="#more">
                        <span>+ Koʻproq</span> <span>- Kamroq</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default SidebarAttribute