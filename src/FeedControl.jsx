import React from 'react';
import Feed from './Feed';
import Other from './Other';
import NewFeedForm from './NewFeedForm';


class FeedControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewFeedForm />;
    } else {
      currentlyVisibleContent = <Other onHandleClick={this.handleClick}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

export default FeedControl;
