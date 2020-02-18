import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      {props.location} - {props.names}
      <p><em>{props.post}</em></p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  post: PropTypes.string
};

export default Post;
