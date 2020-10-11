import React from 'react';
import language from '../../language/hebrew.json';
import { v4 as uuid } from 'uuid';

const HowItWorks = () => {
    return (
        <div className="how-it-work">
            <h1>{language.howItWork.title}</h1>
            <div className="how-it-work__container">
                
                {Object.keys(language.howItWork.text).map((key) => {
                    return (
                        <p key={uuid()}>{language.howItWork.text[key]}</p>
                    );

                })}
            </div>


        </div>
    );

}
export default React.memo(HowItWorks);