import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './helpers/Routes/PrivateRoute';

require('./App.css');
require('./Variables.css');
require('./Grids.css');

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/world" component={ExploreWorld} />
            <Route path="/food" component={Food} />
            <Route path="/explore" component={ExploreNearby} />
            <Route path="/covid" component={Covid} />
            <Route path="/" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
