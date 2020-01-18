import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import dashboard from './components/dashboard';
import headerBar from "./components/headerbar"
import pagination from "./components/pagination"

const AppRouter = () => (
    <BrowserRouter>
        <div>
            {/* <Route path="/" component={headerBar} exact={false} /> */}
            <Route path="/dashboard" component={dashboard} exact={false} />
            {/* <Route path="/pagination" component={pagination} exact={true} /> */}
        </div>
    </BrowserRouter>
);
export default AppRouter;