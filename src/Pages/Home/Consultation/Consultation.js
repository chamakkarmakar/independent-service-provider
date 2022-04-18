import React from 'react';

const Consultation = () => {
    return (
        <div id='consult' className='container rounded mt-5 shadow bg-light p-2'>
            <h1 className='my-5 text-center'>REQUEST A FREE CONSULTATION</h1>
            <p className='text-center'>Fill out the form below to recieve a free and confidential intial consultation.</p>
            <div className='mx-auto w-75'>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Phone" />
            </div>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Family Law</option>
                    <option value="1">Business Law</option>
                    <option value="2">Consumer LAw</option>
                    <option value="3">Others</option>
                </select>
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Case Description' rows="3"></textarea>
            </div>
            <div className='mb-3 text-center'>
                <button className='btn btn-primary px-5 py-2 rounded-pill'>Send Request</button>
            </div>
            </div>
        </div>
    );
};

export default Consultation;