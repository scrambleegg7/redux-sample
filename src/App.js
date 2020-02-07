import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

import { Provider } from 'react-redux';

import store from './store';

const App = () => {
  return (
    <Provider store = {store}>
    <div className="App">
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Header</h1>
          <hr />
        </div>
      </header>
      <PostForm />
      <hr/>
      <Posts />
    </div>
    </Provider>
  );
}

export default App;
