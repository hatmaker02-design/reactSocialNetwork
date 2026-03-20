
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Settings/Settings';
import Router from './components/Router/Router';
const App = (props) => {
  console.log(props, 'props App');
  
  return (
    <BrowserRouter>

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Router posts={props.posts} messages={props.messages} dialogs={props.dialogs}/>
         

      </div>



    </div>
    </BrowserRouter>
  );


}

export default App;



