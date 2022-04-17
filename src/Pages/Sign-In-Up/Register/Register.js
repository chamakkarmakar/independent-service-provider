import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }
    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className="container mx-auto w-25 mt-5">
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Control ref={nameRef} type="name" placeholder="User Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="w-100 mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Sign Up
                </Button>
            </Form>
            <small>Already have an account? </small>Please <Link to='/login' className='text-decoration-none pe-auto' onClick={navigateLogin}>Sign In</Link>
        </div>
    );
};

export default Register;