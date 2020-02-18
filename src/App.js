import React from 'react';
import Header from './Header';
import Feed from './Feed';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Feed} />
        <Route path='/newpost' component={FeedControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
