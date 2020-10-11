import React from 'react';
import language from '../../language/hebrew.json';

const RegisterForm = () => {
    return (
        <form className="register-form">
            <h1>{language.registerForm.title}</h1>
            <div className="register-form__input-gruop">
                <label htmlFor="full-name">{language.registerForm.fullName}</label>
                <span>|</span>
                <input id="full-name" type="text" />
            </div>
            <div className="register-form__input-gruop">
                <label htmlFor="phone">{language.registerForm.phone}</label>
                <span>|</span>
                <input id="phone" type="phone" />
            </div>
            <div className="register-form__input-gruop">
                <label htmlFor="email">{language.registerForm.email}</label>
                <span>|</span>
                <input id="email" type="email" />
            </div>
            <div className="register-form__input-gruop-check">
                <input id="agree" type="checkBox"/>
                <label htmlFor="agree">{language.registerForm.agreeToConditions}</label>
            </div>

            <p>{language.registerForm.priavcy}</p>
            <button>{language.registerForm.talkWithMeBtn}</button>
        </form>
    );
    
    

}
export default React.memo(RegisterForm);