import React from "react";
import classes from './Myposts.module.css';
import Post from './Post/Post';





const Myposts = (props) => {
console.log(props, 'myposts');

let postsElements = 
    props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount}/>  ) ;


  return (
    <div>
     <h3> My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {  postsElements  }

        {/* <Post />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </div>



  )
}


export default Myposts;