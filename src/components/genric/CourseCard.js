import React from 'react';


const CourseCard = ({ img = "", alt = "", info = "", speratorColor = "",link="" }) => {
    return (
        <a className="course-card" href={link}>
            <img src={img} className="course-card__image" alt={alt} />
            <div className="course-card__sperator" style={{ backgroundColor:  speratorColor }}></div>
            <div className="course-card__info">
                <p>{info}</p>
            </div>
            <span className="course-card__arrow">🢀</span>
        </a>
    );
}
export default CourseCard;