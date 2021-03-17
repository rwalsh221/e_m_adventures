import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './layout/Home/Home';
import Covid from './layout/Covid/Covid';
import ExploreNearby from './layout/ExploreNearby/ExploreNearby';
import Food from './layout/Food/Food';
import ExploreWorld from './layout/ExploreWorld/ExploreWorld';
import Login from './layout/Login/Login';

require('./App.css');
require('./Variables.css');
require('./Grids.css');

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/world" component={ExploreWorld} />
          <Route path="/food" component={Food} />
          <Route path="/explore" component={ExploreNearby} />
          <Route path="/covid" component={Covid} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
