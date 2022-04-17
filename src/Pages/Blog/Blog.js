import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mx-auto w-50'>
            <h1>QA</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1.  Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        Authorization is the process of allowing access to protected things by authenticating the access. On the other hand, authentication is the process of ensuring and then proving the identity. In Application, Authorization was done by validating the username and password whereas, in authentication, the identity of a user is asserted by the username/id and password. Authentication shows the system that is accessed and authorization will show the application what the authenticated user is allowed to do.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a useful backend platform that helps to build API for web applications. It has several benefits like Realtime Database, multiple authentication types, web application hosting, and much more. This reduces a lot of time and also helps in rapid development. This is why I am using Firebase.
                        There are several options to implement authentication like MFA or multi-factor authentications, Token based authentication, password-based authentication, etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                    There are several advantages of the Firebase platform. Apart from authentication, Firebase can be used to store the data of an application. With that being said, Firebase also comes with a Hosting facility that can help us to host our Web application and let others access it anywhere in the world. It also helps to set up Google Analytics that helps to analyze the webpage and bring a result like visitor count, visitor behavior, conversion, and other things that helps to make the site better. As Firebase is considered a Backend as a service, almost all backend-related functionalities like Database, and API, can be set up using this platform.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;