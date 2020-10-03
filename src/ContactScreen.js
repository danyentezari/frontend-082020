import React from 'react';
import NavBar from './NavBar';

const ContactScreen = () => {
    return (
        <div>
            <NavBar 
                brand="MyApp"
                links={
                    [
                        {
                            label: 'Home',
                            path: '/'
                        },
                        {
                            label: 'About',
                            path: '/about'
                        },
                        {
                            label: 'Contact',
                            path: '/contact'
                        }
                    ]
                    }
            />
            <h1>Contact Us</h1>
        </div>
    )
}

export default ContactScreen;