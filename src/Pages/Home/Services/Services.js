import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('servicesDB.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id='services'>
            <h1>MY SERVICES</h1>
            <div className="services">
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            </div>
            
        </div>
    );
};

export default Services;