import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Main from './pages/main';
import Repository from './pages/repository';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
