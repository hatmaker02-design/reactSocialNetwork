import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




   let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 25 },
    {id: 2, message: 'It s my first post',  likesCount: 250},
    {id: 2, message: 'da da dad ada ',  likesCount: 250},
    {id: 2, message: 'bla bla bla ',  likesCount: 250},
  ]

   let dialogs = [
        { id: 1, name: 'Dana' },
        { id: 2, name: 'Bober' },
        { id: 3, name: 'Marco Testo' },
        { id: 4, name: 'Batya' },
        { id: 5, name: 'Olya' },


    ]
    let messages = [
        { id: 1, message: 'салют' },
        { id: 2, message: 'салют' },
        { id: 3, message: 'мне легко' },
        { id: 4, message: 'люблю жизнь' },
        { id: 5, message: 'kak prosto' },

    ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App posts={posts} messages={ messages}  dialogs={dialogs}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
