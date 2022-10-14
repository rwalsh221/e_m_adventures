import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './helpers/Routes/ScrollToTop';

import Home from './layout/Home/Home';
import Covid from './layout/Covid/Covid';
import ExploreNearby from './layout/ExploreNearby/ExploreNearby';
import Food from './layout/Food/Food';
import ExploreWorld from './layout/ExploreWorld/ExploreWorld';
import Login from './layout/Login/Login';
import Signup from './layout/Signup/Signup';
import Dashboard from './layout/Dashboard/Dashboard';
import ForgotPassword from './layout/ForgotPassword/ForgotPassword';
import UpdateProfile from './layout/UpdateProfile/UpdateProfile';
import BookingSummary from './layout/BookingSummary/BookingSummary';
import BookingConfirmation from './layout/BookingConfirmation/BookingConfirmation';
import ModifyBooking from './layout/ModifyBooking/ModifyBooking';
import Timeout from './layout/Timeout/Timeout';
import Accommodation from './layout/Accommodation/Accommodation';
import AccommodationInformation from './layout/AccommodationInformation/AccommodationInformation';
// import DatePicker from './components/DatePicker/DatePicker';

import NewHeaderSearch from './components/HeaderSearch/HeaderSearch';

import { AuthProvider } from './contexts/AuthContext';
import { AccommodationContextProvider } from './contexts/AccommodationContext';
import PrivateRoute from './helpers/Routes/PrivateRoute';

require('./App.css');
require('./Variables.css');
require('./Grids.css');

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Switch>
            <PrivateRoute
              path="/update-profile"
              exact
              component={UpdateProfile}
            />
            {/* <PrivateRoute
              path="/modify-booking"
              exact
              component={ModifyBooking}
            /> */}
            <Route path="/forgot-password" exact component={ForgotPassword} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
          <AccommodationContextProvider>
            <Switch>
              <Route
                path="/accommodationInformation"
                exact
                component={AccommodationInformation}
              />
              <Route path="/accommodation" exact component={Accommodation} />
              <Route path="/datepicker" component={NewHeaderSearch} />
              <Route path="/" exact component={Home} />
              <PrivateRoute
                path="/modify-booking"
                exact
                component={ModifyBooking}
              />
              <Route path="/world" exact component={ExploreWorld} />
              <Route path="/food" exact component={Food} />
              <Route path="/explore" exact component={ExploreNearby} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute
                path="/confirmation"
                component={BookingConfirmation}
              />
              <Route path="/timeout" exact component={Timeout} />
              <PrivateRoute path="/summary" exact component={BookingSummary} />
              <Route path="/covid" exact component={Covid} />
            </Switch>
          </AccommodationContextProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
