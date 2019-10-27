import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    )
}