import React from 'react';
import Feed from './Feed';
import FeedControl from './FeedControl';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Feed} />
        <Route path='/newpost' component={FeedControl} />
      </Switch>
    </div>
  );
}

export default App;
