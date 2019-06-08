import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './screens/Login.jsx'


const App = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/login" />
        </Switch>
    )
}

export default App;