import React from 'react';
import PropTypes from 'prop-types';

function NewFeedForm(props){
  let _names = null;
  let _location = null;
  let _post = null;



  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onPostCreation({names: _names.value, location: _location.value, post: _post.value});
    _names.value = '';
    _location.value = '';
    _post.value = '';
  }

  return (
    <div>
    <h1> New Feed </h1>
    <form onSubmit={handleNewFormSubmission}>
    <input
    type='text'
    id='names'
    ref={(input) => {_names = input;}}/>
    <input
    type='text'
    id='location'
    ref={(input) => {_location = input;}}/>
    <textarea
    id='post'
    ref={(textarea) => {_post = textarea;}}/>
    <button type='submit'>Post!</button>
    </form>
    </div>
  );
}

NewFeedForm.propTypes = {
  onPostCreation: PropTypes.func
};

export default NewFeedForm;
