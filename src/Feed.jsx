import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post'
function Feed (props){
  console.log(props)
  return(
    <div>
    <p>
      {props.postList.map((post, index) =>
        <Post names={post.names}
          location={post.location}
          post={post.post}
          key={index}/>
      )} </p>
    </div>
  )
}
Feed.propTypes = {
  postList: PropTypes.array
};

export default Feed
