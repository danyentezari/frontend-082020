import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainScreen from './MainScreen'; 
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import RegistrationScreen from './RegistrationScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MainScreen} />
                <Route path="/about" exact={true} component={AboutScreen} />
                <Route path="/contact" exact={true} component={ContactScreen} />
                <Route path="/registration" exact={true} component={RegistrationScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;