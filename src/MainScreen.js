import React, { useState, useContext } from 'react';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Card from './Card';  
import IconButton from './IconButton';
import Engagement from './Engagement';
import SocialMediaLinks from './SocialMediaLinks';
import FooterSubscription from './FooterSubscription';
import EmailSubscribeForm from './EmailSubscribeForm';

const MainScreen = () => {

  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState();

  const logoutUser = () => {
    setGlobalState(
      {
        ...globalState,
        loggedIn: false
      }
    )
  }

  return (
    <div className="App">    

      <NavBar 
        brand="MyApp" 
        links={[
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
        ]}
      >


        { 
          !globalState.loggedIn && 
          <Link to="/login" className="btn btn-secondary">Login</Link>
        }

        { 
          globalState.loggedIn && 
          <>
            <Link to="/profile" className="btn btn-secondary">Profile</Link>
            <button onClick={logoutUser} className="btn btn-secondary">Log out</button>
          </>
        }
      </NavBar>

      <Jumbotron 
        title="Newsletter" 
        lead="Sign up to get the latest updates"
        description="Please enter your email address to be subscribed to our newsletter"
        btnLabel="Subscribe"
      >
        <EmailSubscribeForm btnLabel="Subscribe"/>
      </Jumbotron>
      
      {
        !globalState.loggedIn &&
        <div className="container">
        <p>You need to be logged in</p>
        </div>
      }

      
      {
        globalState.loggedIn &&
        <div className="container" 
        style={{"display": "flex", "justify-content": "space-between"}}>

          <Card title="Apple" text="This is an iPhone" btnLabel="Buy Now" cardImage="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>
          <Card title="Samsung" text="Better than an iPhone" btnLabel="Buy Now" cardImage="https://images.unsplash.com/photo-1498661705887-3778d9ecb4ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
          <Card title="Nokia" text="Nokia is coming back" btnLabel="Buy Now" cardImage="https://images.unsplash.com/photo-1550367083-9fa5411cb303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        </div>
      }


      <br/><br/>
      <Engagement>
        <SocialMediaLinks>
          <IconButton icon="fa-facebook"/>
          <IconButton icon="fa-linkedin"/>
          <IconButton icon="fa-instagram"/>
          <IconButton icon="fa-youtube"/>
        </SocialMediaLinks>

        <FooterSubscription>
          <EmailSubscribeForm btnLabel="Subscribe"/>
        </FooterSubscription>

        
      </Engagement>

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
            },
            {
              label: 'FAQs',
              path: '/faqs'
            }
          ]
        }
      />
    </div>
  );
}

export default MainScreen;
