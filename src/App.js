import React from 'react';
import Feed from './Feed';
import FeedControl from './FeedControl';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NewFeedForm from './NewFeedForm';

class App extends React.Component{

  constructor(props) {
  super(props);
  this.state = {
    masterPostList: []
  };
  this.handleAddingNewPost = this.handleAddingNewPost.bind(this)
}
handleAddingNewPost(newPost){
  var newMasterPostList = this.state.masterPostList.slice();
  newMasterPostList.push(newPost);
  this.setState({masterPostList: newMasterPostList});
}

  render(){
    return (
      <div>
      <Switch>
      <Route exact path='/' render={()=><Feed postList={this.state.masterPostList} />} />
      <Route path='/newpost' render={()=><FeedControl onPostCreation={this.handleAddingNewPost}/>} />
      </Switch>
      </div>
    );
  }
  }

export default App;
