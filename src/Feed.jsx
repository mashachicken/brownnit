import React from 'react';
import PropTypes from 'prop-types';

function Feed (props){
  return(
    <div>
    <p><hr/>
      {props.postList.map((post, index) =>
        <Feed names={post.names}
          location={post.location}
          issue={post.issue}
          key={index}/>
      )} </p>
    </div>
  )
}
Feed.propTypes = {
  postList: PropTypes.array
};

export default Feed
