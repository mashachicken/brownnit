import React from 'react';
import Feed from './Feed';
import Other from './Other';


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
      currentlyVisibleContent = <Feed />;
    } else {
      currentlyVisibleContent = <Other onHandleClick={this.handleClick}/>;
    }
    return (
      <div>
      <Feed />
        <p>This is the FeedtControl component!</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default FeedControl;
