import React from 'react'

const Cooperation = () => {
    return (
        <>
            <div className="cooperation">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="slash">
                                <a href="#">Bosh sahifa</a>
                                <a href="#"><span>/</span> Yangi ta'minotchi</a>
                            </div>
                        </div>

                        <div className="col-12">
                            <h1>Hamkorlik qilish tartibi</h1>
                            <h5 className="text-center">
                                Chakana.uz marketpleysi O'zbekiston respublikasida ro'yxatdan
                                o'tgan yuridik shaxslar va yakka tartibdagi tadbirkorlar bilan
                                ishlaydi. Marketpleysga ulanish uchun, iltimos quyidagi amallarni
                                bajaring:
                            </h5>
                        </div>

                        <div className="col-lg-10 mx-auto">
                            <div className="cards myShadow">
                                <div className="row">
                                    <div className="col-lg-6 myCol">
                                        <div className="number">1</div>
                                        <p>
                                            Bank hisob raqamiga xizmat ko'rsatish va e-POS terminalidan
                                            foydalanish uchun siz uchun qulay bo'lgan "Agrobank" ATBning
                                            istalgan filialida shartnoma tuzing va rekvizitlarni oling.
                                        </p>
                                        <a className="a" href="/files/1.docx"
                                        ><i className="fas fa-file-download"></i> Faylni yuklash</a
                                        >
                                    </div>
                                    <div className="col-lg-6 myCol">
                                        <div className="number">2</div>
                                        <p>
                                            Chakana.uz savdo maydonchasiga ulanishga shartnoma tuzing.
                                        </p>
                                        <a className="a" href="/files/1.docx"
                                        ><i className="fas fa-file-download"></i> Faylni yuklash</a
                                        >
                                    </div>
                                    <div className="col-lg-6 myCol">
                                        <div className="number">3</div>
                                        <p>Maxsulotlarga narxlarni kiriting.</p>
                                        <a className="a" href="/files/1.docx"
                                        ><i className="fas fa-file-download"></i> Faylni yuklash</a
                                        >
                                    </div>
                                    <div className="col-lg-6 myCol">
                                        <div className="number">4</div>
                                        <p>
                                            Yuqoridagi amaliyotlar bajarilgandan so'ng, fayllarni arxiv
                                            qilib telegram orqali <a href="#">@onzoneuzbot</a> manziliga
                                            jo'nating.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row myRow">
                        <div className="col-lg-10 mx-auto">
                            <div className="cards myShadow">
                                <div className="girl"><img src="/image/girl.png" alt="" /></div>
                                <div className="row">
                                    <div className="col-lg-7 col-md-7">
                                        <h1>Savollaringiz bo'lsa biz bilan bog'laning.</h1>
                                        <a className="myBtn" href="tel: +998943698058"
                                        >+99899 777-88-77</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="row application">
                        <div className="col-lg-10 mx-auto">
                            <div className="cards myShadow">
                                <h2>Hamkorlik qilish uchun ariza qoldirish</h2>

                                <div className="row">
                                    <div className="col-lg-6 mb-4">
                                        <div className="inputWrap">
                                            <label for="name">Korxona nomi</label>
                                            <input
                                                type="text"
                                                className="form-control input"
                                                required="required"
                                                id="name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <div className="inputWrap">
                                            <label for="director">Korxona direktori</label>
                                            <input
                                                type="text"
                                                className="form-control input"
                                                required="required"
                                                id="director"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mb-4">
                                        <div className="inputWrap last">
                                            <label for="mchj">Korxona direktori</label>
                                            <i className="fas fa-sort-down"></i>
                                            <input
                                                type="text"
                                                className="form-control input"
                                                placeholder="MCHJ"
                                                id="mchj"
                                            />

                                            <div className="wrap myShadow">
                                                <h6 className="active">MCHJ</h6>
                                                <h6>LOREM</h6>
                                                <h6>IPSUM</h6>
                                                <h6>DOLOR</h6>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 mb-4">
                                        <div className="inputWrap">
                                            <label for="phone2">Telefon</label>
                                            {/* <label className="label" for="phone2">+998</label> */}
                                            <input
                                                type="number"
                                                className="form-control input"
                                                required="required"
                                                id="phone2"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn">Ariza yuborish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Cooperation
