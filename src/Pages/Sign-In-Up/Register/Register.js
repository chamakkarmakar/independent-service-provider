import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateLogin = event => {
        navigate('/login');
    }
    
    return (
        <div className="container mx-auto w-25 mt-5">
        <h2>Please Register</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
            <Form.Control type="name" placeholder="User Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="w-100 mb-3" controlId="formBasicPassword">
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                Login
            </Button>
        </Form>
        <small>Aready have an account? </small>Please <Link to='/login' className='text-decoration-none pe-auto' onClick={navigateLogin}>Sign In</Link>
    </div>
    );
};

export default Register;