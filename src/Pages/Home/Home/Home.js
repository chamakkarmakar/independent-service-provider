import React from 'react';
import Banner from '../Banner/Banner';
import Consultation from '../Consultation/Consultation';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultation></Consultation>
        </div>
    );
};

export default Home;