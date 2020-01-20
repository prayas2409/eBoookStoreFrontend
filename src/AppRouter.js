import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import dashboard from './components/dashboard';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/dashboard" component={dashboard} />
        </div>
    </BrowserRouter>
);
export default AppRouter;