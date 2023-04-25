import React from 'react';
/* Add any imports you think you might need here! */
import Color from './Color';
import "../Styles/SubmitButton.css";


const SubmitButton = ({handleSubmit}) => {
  return (
    <button  class="submit-button" onClick={handleSubmit}>Submit</button>
  );
}

export default SubmitButton;
