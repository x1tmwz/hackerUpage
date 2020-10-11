import React from 'react';
import BenfitCard from '../genric/BeniftCard';
import language from '../../language/hebrew.json';
import data from '../../data/data.json';
import { v4 as uuid } from 'uuid';

const Cards = () => {

    return (
        <div className="cards">
            {Object.keys(language.cards).map((key) => {
                    return (
                        <BenfitCard
                            key={uuid()}
                            img={data.cards[key].img}
                            info={language.cards[key].info}
                            linkTitle={language.cards[key].link}
                            link={data.cards[key].link}
                            infoTitle={language.cards[key].title}
                        />
                    );
                })}
        </div>


    );

}
export default Cards;