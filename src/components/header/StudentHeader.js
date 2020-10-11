import React from 'react';
import language from '../../language/hebrew.json';
import { v4 as uuid } from 'uuid';



const StudentHeader = () => {
    return (
        <header className="student-header">
            <div className="student-header__container">
                <div className="student-header__links">
                    {Object.keys(language.header.studentHeader.links).map((key,index) => {
                        return (
                            <a className="student-header__link" href="a" key={uuid()} id={"student-header__link"+index}>{language.header.studentHeader.links[key]}</a>
                        );
                    })}
                </div>
                <form className="student-header__form">
                    <input type="text" className="student-header__search" placeholder={language.header.studentHeader.search} />
                    <button type="submit" className="student-header__search-button">
                        <img alt="" className="student-header__search-button__image" src="https://www.hackeru.co.il/assets/site/images/search.png" />
                    </button>
                   
                </form>
                

            </div>

        </header>

    );
}
export default StudentHeader;