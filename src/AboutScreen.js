import React from 'react';
import NavBar from './NavBar';

const AboutScreen = () => {
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
            <h1>About Us</h1>
        </div>
    )
};

export default AboutScreen;