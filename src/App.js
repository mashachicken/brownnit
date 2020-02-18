import React from 'react';
import Feed from './Feed';
import FeedControl from './FeedControl';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NewFeed from './NewFeed';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={NewFeed} />
        <Route path='/newpost' component={FeedControl} />
      </Switch>
    </div>
  );
}

export default App;
