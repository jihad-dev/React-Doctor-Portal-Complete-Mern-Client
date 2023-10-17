import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesCard from './ServicesCard';

const ServicesCards = () => {
    const servicesCardData =[
        {   id:"1",
            name: 'Fluoride Treatment',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:fluoride,
            bg:"bg-gradient-to-r from-cyan-500 to-blue-500"
        },
        {   id:"2",
            name: 'Visit our location',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:cavity,
            bg:"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
        },
        {   id:"3",
            name: 'Contact us now',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed',
            icon:whitening,
            bg:"bg-gradient-to-r from-green-400 to-blue-500"
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mt-16 mt-12'>
            {servicesCardData.map(serviceCard => <ServicesCard key={serviceCard.id} serviceCard={serviceCard}></ServicesCard>)}
        </div>
    );
};

export default ServicesCards;