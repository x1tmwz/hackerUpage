import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import OurCourses from './homePageBody/OurCourses';
import OurBenfits from './homePageBody/OurBenfits';
import HowItWork from './homePageBody/HowItWorks';
import StudentHeader from './header/StudentHeader';
import language from '../language/hebrew.json';
import OurProcess from './homePageBody/OurProcess';
import Modal from './homePageBody/Modal';



const HomePage = () => {
    const [isModalShow, setIsModalShoe] = useState(false);
    setTimeout(() => {
        setIsModalShoe(true)
    }, 200)

    useEffect(() => {
        const header = document.getElementsByClassName("main-header")[0];
        const benfitsElements = document.querySelectorAll(".our-benfits__list")[0];
        const processElements = document.querySelectorAll(".our-process__list")[0];
       
        const sticky = header.offsetTop;
        window.onscroll = () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("main-header--sticy");
            } else {
                header.classList.remove("main-header--sticy");
            }
            benfitsElements.childNodes.forEach((node) => {
                if (node.offsetParent) {
                    const nodeTop = node.offsetTop + node.offsetParent.offsetTop;
                    if ((window.pageYOffset+window.innerHeight -100) > nodeTop) {
                        node.classList.add("benfit-card--animation");
                    }
                }
            })
            processElements.childNodes.forEach((node,index)=>{
                if (node.offsetParent) {
                    const nodeTop = node.offsetTop + node.offsetParent.offsetTop;
                    if ((window.pageYOffset+window.innerHeight -100) > nodeTop) {
                        node.classList.add(`process-card--animtion-${index}`);
                    }
                }
            })

        }


    }, [])


    return (
        <div className="home-page">
            {isModalShow && <Modal />}
            <StudentHeader />
            <Header />
            <div className="main-header__banner">
                <p>{language.header.banner}</p>
            </div>
            <OurCourses />
            <OurBenfits />
            <HowItWork />
            <OurProcess />

        </div>
    );
}
export default HomePage;