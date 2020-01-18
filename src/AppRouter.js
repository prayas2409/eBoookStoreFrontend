import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import dashboard from './components/dashboard';
import headerBar from "./components/headerbar"
import pagination from "./components/pagination"
// import card from './components/card';
// import headerbar from "./components/headerbar"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/dashboard" component={dashboard} exact={false} />
        </div>
    </BrowserRouter>
);
export default AppRouter;