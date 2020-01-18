import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import card from './components/card';
import headerbar from "./components/headerbar"

const AppRouter = () => (
    <BrowserRouter>
        <div>
                <Route path="/" component={headerbar} exact={false} />
                <Route path="/card" component={card} exact={true} />
                
        </div>
    </BrowserRouter>
);
export default AppRouter;