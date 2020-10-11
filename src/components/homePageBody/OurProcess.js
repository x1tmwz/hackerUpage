import React from 'react';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';
import ProcessCard from '../genric/ProcessCard';
import { v4 as uuid } from 'uuid';
import MeetingButton from './MeetingButton';

const OurProcess = () => {

    return (
        <div className="our-process">
            <h1>{language.ourProcess.title}</h1>
            <div className="our-process__list">
                {Object.keys(language.ourProcess.steps).map((key, index) => {
                    return (
                        <ProcessCard
                            info={language.ourProcess.steps[key].info}
                            title={index + 1}
                            secondryTitle={language.ourProcess.steps[key].title}
                            img={index > 0 ? data.ourProcess.img : ""}
                            backgroundColor={data.ourProcess.colors[key].backgroundColor}
                            key={uuid()}
                        />
                    );
                })}
            </div>
            <MeetingButton />

        </div>

    );

}
export default React.memo(OurProcess);