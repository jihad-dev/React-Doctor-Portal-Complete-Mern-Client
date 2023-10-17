import React, { useState } from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
 
    const cardData =[
        {   id:"1",
            name: 'Opening Hours',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:clock,
            bg:"bg-[#B1CBFE]"
        },
        {   id:"2",
            name: 'Visit our location',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:marker,
            bg:"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        },
        {   id:"3",
            name: 'Contact us now',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:phone,
            bg:"bg-gradient-to-r from-green-400 to-blue-500"
        },
    ]
    return (
        <div className='grid  gap-6 mt-14 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:mt-16  '>
            {cardData.map(card => <InfoCard key={card.id} card={card}></InfoCard>)}
        </div>
    );
};

export default InfoCards;