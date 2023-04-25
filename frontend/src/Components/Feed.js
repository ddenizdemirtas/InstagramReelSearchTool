import { useState } from 'react';
import React from 'react';
import Block from './Block';

const Feed = () => {
 
  
  /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    const [post, setPostList]=useState([]);
    function addPosts(color) {
      const newpostlist=[color,...post];
      setPostList(newpostlist);
    }
     
    /* Use the map() function to render multiple Blocks! */
    const posts = post.map(color => <Block color= {color}/>); // TODO: edit this variable

    return (
        <div>
            {/* <Menu addPosts ={addPosts}></Menu> */}
        {/* Below is where all of your Blocks should render! */}
        {posts}
        </div>
    );
}

export default Feed;