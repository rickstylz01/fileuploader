import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const FILES = [
  {"fileType":"jpg", "size":"4.3MB", "name":"me on skis.jpg", "status":"Synced"},
  {"fileType":"mov", "size":"1.3GB", "name":"cats falling.mov", "status":"Uploaded"},
  {"fileType":"txt", "size":"0.9KB", "name":"My December expenses.txt","status":"Uploaded"},
  {"fileType":"mp3", "size":"3.4MB", "name":"wutang_return_of_the_36_chambers.mp3","status":"New"},
];

ReactDOM.render(<App files={FILES}/>, document.getElementById('root'));