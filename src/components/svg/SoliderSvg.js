import React from 'react';
import language from '../../language/hebrew.json';

const SoliderSvg = () => {
    return (
        <div className="solider-banner">
            <svg className="solider-banner__background" width="70" height="125">
                <path d="M0 0 L60 0 L60 60  Q 30 120 0 60" stroke="white" fill="#4f593e" />
                <path d="M2 2 L58 2 L58 58  Q 30 118 2 58 Z" stroke="white" fill="#4f593e" />
            </svg>
            <div className="solider-banner__content">
                <h3>{language.header.solirderBanner.solider}</h3>
                <h3>{language.header.solirderBanner.relese}</h3>
                <p>{language.header.solirderBanner.clickHere}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" stroke="yellow" /></svg>
            </div>
        </div>
    );

}
export default SoliderSvg;


