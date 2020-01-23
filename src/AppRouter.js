import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import dashboard from './components/dashboardComponent/Dashboard';
// import dashboard from './components/userComponent/user';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/dashboard" component={dashboard} exact={true} />
        </div>
    </BrowserRouter>
);
export default AppRouter;