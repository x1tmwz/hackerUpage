import React from 'react';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';

const Modal = () => {
    const closeModal = ()=>{
        const modal = document.getElementById("modal");
        modal.classList.add("modal--close")
    }
    return (
        <div className="modal" id="modal"> 
            <div className="modal__container">
                <button onClick={closeModal}>{data.modal.exitButtonUnicode}</button>
                <form className="modal__container__form">
                    <h2>{language.modal.learnOnline}</h2>
                    <h1>{language.modal.learnOnlineAnyTime}</h1>
                    <h2>{language.modal.wantToHearMore}</h2>
                    <input type="text" placeholder={language.registerForm.fullName} />
                    <input type="text" placeholder={language.registerForm.phone} />
                    <input type="text" placeholder={language.registerForm.email} />
                    <div className="modal__container__form__check-box-container">
                        <input type="checkBox" />
                        <p>{language.registerForm.agreeToConditions}</p>
                    </div>
                    <button>{language.meetingButton}</button>

                </form>
                <div className="modal__container__computer-image">
                    <img  src={data.modal.computerImage} alt="computer" />
                </div>
                <div className="modal__container__box-marker-pen-image">
                    <img  src={data.modal.markerPenBoxImage} alt="box of marker pens" />
                </div>
            </div>
        </div>
    );
}
export default React.memo(Modal);