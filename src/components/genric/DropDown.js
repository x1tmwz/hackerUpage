import React from 'react';
import { v4 as uuid } from 'uuid';

const DropDown = ({ buttonName = "", links = [],buttonClassName="",linkClassName="",id="" }) => {
    const uid = uuid();
    const open = (e)=>{
        const element = document.getElementById(uid);
        element.classList.contains("open-dropdown")?element.classList.remove("open-dropdown"):element.classList.add("open-dropdown");
    }
    


    return (
        <div id={id} className="dropdown">
            <button onClick={open} className={buttonClassName} >{buttonName}<span>▼</span></button>
            <div id={uid} className="dropdown-content">
                {links.map(({ linkTitle, link }) => {
                    return (
                        <a href={"www.google.come"} className={linkClassName} key={uuid()}>{linkTitle}</a>
                    );
                })}
            </div>
        </div>
    );

}
export default DropDown