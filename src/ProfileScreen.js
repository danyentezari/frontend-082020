import React from 'react';
import NavBar from './NavBar';

const ProfileScreen = () => {
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
            <h1>Profile Settings</h1>
        </div>
    )
}

export default ProfileScreen;