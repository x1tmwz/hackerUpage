import React from 'react';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';
import CourseCard from '../genric/CourseCard';
import { v4 as uuid } from 'uuid';
import RegisterForm from './RegisterForm';

const OurCourses = () => {

    return (
        <div className="our-courses">
            <h1>{language.ourCourses.title}</h1>
            <div className="our-courses__container">
                <div className="our-courses__list">
                    {Object.keys(data.ourCourses).map((key) => {
                        return (
                            <CourseCard
                                img={data.ourCourses[key].img}
                                alt=""
                                info={language.header.links.courses[key]}
                                speratorColor={data.ourCourses[key].speratorColor}
                                link={data.ourCourses[key].link}
                                key={uuid()}
                            />
                        );
                    })}
                </div>
                <RegisterForm />

            </div>

            

        </div>

    );

}
export default React.memo(OurCourses);