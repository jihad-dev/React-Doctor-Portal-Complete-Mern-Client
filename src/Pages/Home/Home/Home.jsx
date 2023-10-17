import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import ServicesCards from '../ServicesCards/ServicesCards';
import BannerCard from '../BannerCard/BannerCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactHome from '../ContactHome/ContactHome';

const Home = () => {
    return (
        <div className='mx-5 lg:pt-8  '>
            <Banner/>
            <InfoCards/>
            <ServicesCards/>
            <BannerCard/>
            <MakeAppointment/>
            <Testimonial/>
            <ContactHome/>
        </div>
    );
};

export default Home;