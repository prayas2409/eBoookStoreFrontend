import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import home from './components/home';
import headerbar from "./components/headerbar"

const AppRouter = () => (
    <BrowserRouter>
        <div>
                <Route path="/header" component={headerbar} exact={false} />
                <Route path="/header/home" component={home} exact={true} />
                
                
                
            
        </div>
    </BrowserRouter>
);
export default AppRouter;