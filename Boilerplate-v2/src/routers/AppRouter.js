import React from 'react';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
       <div> 
        <Header />
        <Switch>
            <Route path="/" component={DashboardPage} exact={true}/>    
            <Route path="/help" component={Help} exact={true}/>                
            <Route  component={NotFoundPage}/>                
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;