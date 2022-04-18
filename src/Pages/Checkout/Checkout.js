import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <h1 className='text-center'>CHECKOUT</h1>
            <h6>Service details: {serviceId}</h6>
        </div>
    );
};

export default Checkout;