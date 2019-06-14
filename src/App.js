import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Login from './screens/Login.jsx';
import RestaurantsList from './screens/RestaurantsList.jsx';
import Offers from './screens/Offers.jsx';
import HelpSupport from './screens/HelpSupport';


const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/restlist" component={RestaurantsList} />
            <Route path="/offers" component={Offers} />
            <Route path="/help" component={HelpSupport} />
            <Redirect from="/" to="/login" />
        </Switch>


    )
}

export default App;