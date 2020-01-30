import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import dashboard from './components/dashboardComponent/Dashboard';
// import dashboard from './components/userLogin/UserLogin';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={dashboard} exact={true} />
        </div>
    </BrowserRouter>
);
export default AppRouter;