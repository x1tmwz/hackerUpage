import React from 'react';


const BeniftCard = ({ img = "", alt = "", info = "", speratorColor = "", linkTitle = "", link = "", infoTitle = "",id="" }) => {
    return (
        <div className="benfit-card" href={link} >
            <img src={img} className="benfit-card__image" alt={alt} />
            <div className="benfit-card__info">
                <h3>{infoTitle}</h3>
                <p>{info}</p>
                {link && (<a className="benfit-card__link" href={link}>{linkTitle}</a>)}
            </div>
            
        </div>
    );
}
export default BeniftCard;