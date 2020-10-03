import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import Card from './Card';  
import IconButton from './IconButton';
import Engagement from './Engagement';
import SocialMediaLinks from './SocialMediaLinks';
import FooterSubscription from './FooterSubscription';
import EmailSubscribeForm from './EmailSubscribeForm';

const App = () => {
  
  const [state, setState] = useState(
    {
      loggedIn: true,
      userName: 'Jon'
    }
  );

  return (
    <div className="App">    

      <NavBar 
        xyz="Whatever"
        brand="MyApp" 
        links={['Home','About','Contact','FAQs']}
      >
        <div className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </NavBar>

      <Jumbotron 
        title="Newsletter" 
        lead="Sign up to get the latest updates"
        description="Please enter your email address to be subscribed to our newsletter"
        btnLabel="Subscribe"
      />

      <EmailSubscribeForm btnLabel="Subscribe"/>

      {
        !state.loggedIn &&
        <div className="container">
        <p>You need to be logged in</p>
        </div>
      }

      
      {
        state.loggedIn &&
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

        <FooterSubscription />

      </Engagement>

      <NavBar 
        brand="MyApp" 
        links={['Home','About','Contact','FAQs', 'Terms & Conditions', 'Privacy Policy']}
      />

    </div>
  );
}

export default App;
