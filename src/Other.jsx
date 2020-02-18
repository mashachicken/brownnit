import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';
function Other (props){
  return(
    <div>
    <p> Other component</p>
    <button onClick={props.onHandleClick}>Click to change state</button>
    </div>
  );
}
Other.propTypes = {
  onHandleClick: PropTypes.func
};
export default Other
