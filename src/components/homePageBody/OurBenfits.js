import React from 'react';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';
import BenfitCard from '../genric/BeniftCard';
import { v4 as uuid } from 'uuid';
import Cards from './Cards';



const OurBenfits = () => {


    return (
        <div className="our-benfits">
            <Cards />
            <h1>{language.ourBenfits.title}</h1>
            <div className="our-benfits__list">
                {Object.keys(language.ourBenfits.benfits).map((key) => {
                    return (
                        <BenfitCard
                            key={uuid()}
                            img={data.ourBenfits.benfits[key].img}
                            info={language.ourBenfits.benfits[key].info}
                            linkTitle={language.ourBenfits.benfits[key].link}
                            link={data.ourBenfits.benfits[key].link}
                            infoTitle={language.ourBenfits.benfits[key].title}
                        />
                    );
                })}

            </div>


        </div>

    );

}
export default React.memo(OurBenfits);