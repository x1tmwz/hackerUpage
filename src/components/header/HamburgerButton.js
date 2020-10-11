import React from 'react';

const HamburgerButton = ({click=""}) => {

    return (
        <button id="btn-hamburger" className="hamburger-button" onClick={click}>
            <span id="bar-1" className="hamburger-button__bar"></span>
            <span id="bar-2" className="hamburger-button__bar"></span>
            <span id="bar-3" className="hamburger-button__bar"></span>
        </button>

    );

}
export default HamburgerButton;