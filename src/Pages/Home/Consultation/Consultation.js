import React from 'react';

const Consultation = () => {
    return (
        <div id='consult' className='mx-auto w-50 border rounded mt-5'>
            <h1 className='my-5 text-center'>Free Consultation</h1>
            <div className='mx-auto w-75'>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Phone Number" />
            </div>
            <div className="mb-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Select One</option>
                    <option value="1">Family</option>
                    <option value="2">Criminal</option>
                    <option value="3">Drug</option>
                </select>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email Address" />
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Your Question' rows="3"></textarea>
            </div>
            <div className='mb-3 text-center'>
                <button className='btn btn-primary px-5 rounded'>Sent</button>
            </div>
            </div>
        </div>
    );
};

export default Consultation;