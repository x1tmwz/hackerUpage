import React from 'react';
import { v4 as uuid } from 'uuid';
import HamburgerButton from './HamburgerButton';
import BrandImage from './BrandImage';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';
import DropDown from '../genric/DropDown';
import SoliderSvg from '../svg/SoliderSvg';

const Header = () => {
    const openDropDown = () => {
        const headerDropDownMenuElement = document.getElementById("main-header__drop-down-menu-contant");
        const btnHamburgerElement = document.getElementById("btn-hamburger");
        if (headerDropDownMenuElement.classList.contains("main-header__drop-down-menu--open")) {
            headerDropDownMenuElement.classList.remove("main-header__drop-down-menu--open");
            btnHamburgerElement.classList.remove("hamburger-button--close");

        } else {
            headerDropDownMenuElement.classList.add("main-header__drop-down-menu--open");
            btnHamburgerElement.classList.add("hamburger-button--close");
        }
    }
   
    

    return (
        <header className="main-header">
            <div className="main-header__container">
                <div className="main-header__buttons-container">
                    <BrandImage />
                    <HamburgerButton click={openDropDown} />
                </div>
                <div id="main-header__drop-down-menu-contant" className="main-header__drop-down-menu">
                    {Object.keys(language.header.dropDownMenu).map((key,index) => {
                        return (
                            <DropDown
                                buttonName={language.header.dropDownMenu[key]}
                                links={(language.header.links[key] ? Object.keys(language.header.links[key]) : []).map((innerKey) => {
                                    return {
                                        linkTitle: language.header.links[key][innerKey],
                                        link: data.header.links[key][innerKey]
                                    }
                                })}
                                buttonClassName="main-header__drop-down-menu__button"
                                linkClassName="main-header__drop-down-menu__link"
                                key={uuid()}
                                id={"dropdown"+index}
                            />

                        );
                    })}
                    <a className="main-header__drop-down-menu__button" href="a">{language.header.linksButtons.rentClass}</a>
                    <a className="main-header__drop-down-menu__button" href="a">{language.header.linksButtons.blog}</a>
                    <SoliderSvg />
                </div>

            </div>
           


        </header>

    );

}
export default React.memo(Header);