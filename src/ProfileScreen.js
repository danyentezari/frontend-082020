import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const ProfileScreen = () => {

    const [ state, setState ] = useState(
        {
            profileLoaded: false
        }
    )

    useEffect(
        () => {
            // If the profile data is not loaded
            if(!state.profileLoaded) {
                // fetch the data from backend
                fetch('http://localhost:3001/users/find', {
                    method: 'POST',
                    headers: { 'Authorization' : `Bearer ${localStorage.getItem('token')}` },
                    body: {}
                })
                .then(
                    (response) => {
                        console.log('response', response);
                        return response.json()
                    }
                )
                .then((profile) => {
                    // Once data is loaded, change profileLoaded to true and 
                    // change the state to populate the form fields
                    setState(
                        {
                            ...state,
                            profileLoaded: true
                        }
                    )
                    console.log('profile', profile)
                })
                .catch(
                    (e) => console.log('e', e)
                ) 
            }
        }, 
        [ state.profileLoaded ]
    )

    return (
        <div className="screen">
            <h1>Profile Settings</h1>
        </div>
    )
}

export default ProfileScreen;