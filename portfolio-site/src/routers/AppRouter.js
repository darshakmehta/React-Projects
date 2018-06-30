import React from 'react';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
       <div> 
        <Header />
        <Switch>
            <Route path="/" component={HomePage} exact={true}/>    
            <Route path="/portfolio" component={PortfolioPage} exact={true}/>    
            <Route path="/portfolio/:id" component={PortfolioItemPage}/>    
            <Route path="/contact" component={ContactPage}/>                
            <Route  component={NotFoundPage}/>                
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;