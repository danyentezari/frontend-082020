import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const ProfileScreen = () => {

    const [ state, setState ] = useState(
        {
            profileLoaded: false,
            errors: [],
            success: false,
            preloader: false
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
                            profileLoaded: true,
                            firstName: profile[0].firstName,
                            lastName: profile[0].lastName,
                            email: profile[0].email,
                            phone: profile[0].phone,
                            photoURL: profile[0].photoURL
                        }
                    )
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

            <div className="container" 
                    style={
                        {
                            marginTop: "5em", 
                            maxWidth: "40em"
                        }
                    }>
                <h1>Profile Settings</h1>

                <img src={state.photoURL} style={
                    {
                        width: '160px',
                        display: 'block',
                        margin: '0 auto',
                    }
                } />

                <br/>
                <label>Enter your firstname *</label>
                <input type="text" className="field form-control" value={state.firstName}/>

                <label>Enter your lastname *</label>
                <input type="text" className="field form-control" value={state.lastName}/>

                <label>Enter your email *</label>
                <input type="text" className="field form-control" value={state.email}/>

                <label>Enter your password *</label>
                <input type="password" className="field form-control" />

                <label>Enter your phone (optional)</label>
                <input type="text" className="field form-control" value={state.phone}/>

                <br/><br/>

                <label>Upload your profile picture</label>
                <input
                className="field form-control" id="photo" 
                name="file" type="file" multiple="multiple"
                />

                <br/><br/>

                <button 
                className="btn btn-primary"
                style={
                    {
                        padding: "10px", 
                        fontSize: "16px"
                    }
                }>
                    Update
                </button>
            </div>

        </div>
    )
}

export default ProfileScreen;