import React from 'react';

function NewFeedForm(){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewFormSubmission(event) {
    event.preventDefault();
    console.log(_names.value);
    console.log(_location.value);
    console.log(_issue.value);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
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
    ref={(textarea) => {_issue = textarea;}}/>
    <button type='submit'>Post!</button>
    </form>
    </div>
  );
}

export default NewFeedForm;
