import React from "react";
import classes from './Router.module.css';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import News from '../News/News';
import Music from '../Navbar/Music/Music';
import Settings from '../Settings/Settings';



const AppRouter = (props) => {
console.log(props, 'props router');

 
  return (
    <Routes>
      <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
      <Route path="/profile" element={<Profile posts={props.posts} dialogs={props.dialogs} messages={props.messages} />} />
      <Route path="/news" element={<News />} />
      <Route path="/music" element={<Music />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>



  )

}

export default AppRouter;