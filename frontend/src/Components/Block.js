import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}
            <div className="post">
                {/* <img className='image' src={props.image}></img>  */}
            </div>
            <div className="caption">
                <a href={props.url}>{props.title}</a>
            </div>
        </div>
    );
}

export default Block;