import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';
function Other (){
  return(
    <div>
    <p> Other component</p>
    <button>Click to change state</button>
    </div>
  );
}
Other.propTypes = {
  onHandleClick: PropTypes.func
};
export default Other
