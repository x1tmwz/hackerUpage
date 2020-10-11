import React from 'react';


const ProcessCard = ({ info = "",title="",secondryTitle="",img="",backgroundColor="" }) => {
    return (
        <div className="process-card" style={{background:backgroundColor,color:backgroundColor}}>
            {img && <img src={img} alt="" className="process-card__image"/>}
            <div className="process-card__number-container">
                <span>{title}</span>
            </div>
            <h5 className="process-card__secondry-title">{secondryTitle}</h5>
            <div className="process-card_line"></div>
            <p className="process-card__info">{info}</p>
        </div>
    );
}
export default ProcessCard;