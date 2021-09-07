import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import New from './pages/New'; 

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/> 
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}
