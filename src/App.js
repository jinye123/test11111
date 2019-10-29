import React from 'react';

import Login from "./pages/login/login";
import Admin from "./pages/admin/admin";
import {BrowserRouter,Route,Switch} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
