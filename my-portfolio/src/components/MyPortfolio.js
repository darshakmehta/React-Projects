import React from 'react';
import Header from './Header';
import Profile from './Profile';

export default class MyPortfolio extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Profile />
            </div>
        );

    }
}