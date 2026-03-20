import React from "react";
import s from './Post.module.css';


const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://cs14.pikabu.ru/post_img/big/2021/02/22/10/1614011264176889025.jpg'/>
    { props.message }
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>



  )

}






export default Post;