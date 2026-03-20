import React from 'react';
import classes from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Dialogs from '../Dialogs/Dialogs';

const Profile = (props) => {
  console.log(props, 'profile');
  
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 25 },
    {id: 2, message: 'It s my first post',  likesCount: 250},
    {id: 2, message: 'da da dad ada ',  likesCount: 250},
    {id: 2, message: 'bla bla bla ',  likesCount: 250},
  ]


  return ( 
     <div>

         <ProfileInfo />
          <Myposts posts={props.posts} />

    </div>

  )

}

export default Profile;