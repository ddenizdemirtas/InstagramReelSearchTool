import React from 'react';

/* TODO: Translate the below class component to a functional component! */

const Color = (props) => { 
    return (
          <button onClick={() => props.handleClick(props.color)}>Post {props.color}</button>
    );
}

export default Color;