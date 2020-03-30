import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Register from './pages/Register'
import Ideas from './pages/Ideas'

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/ideias" component={Ideas} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;