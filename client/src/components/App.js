import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navbar from './Navbar';
import Landing from './Landing';
import Home from './Home';
import Login from './Login';
import TripDashboard from './TripDashboard';
import CreateTrip from './CreateTrip';

import '../stylesheets/style.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                        <Route exact path='/' component={Landing}></Route>
                        <Route exact path='/home' component={Home}></Route>
                    <div className='inner-pages'>
                        <Route exact path='/login' component={Login}></Route>
                        <Route exact path='/trips' component={TripDashboard}></Route>
                        <Route path='/trips/new' component={CreateTrip}></Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);