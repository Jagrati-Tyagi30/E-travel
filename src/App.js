import React from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom"
import SignIn from './SignIn'
import SignUp from './SignUp'
import LandingPage from './LandingPage.js';
import HotelPage from './HotelPage.js';
import HotelList from './HotelList.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/signin'>
            <SignIn />
          </Route>
          <Route path = '/signup'>
            <SignUp />
          </Route>
          <Route path = '/hotelpage'>
            <HotelPage />
          </Route>
          <Route path = '/hotellist'>
            <HotelList/>
          </Route>
          <Route path = '/'>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
