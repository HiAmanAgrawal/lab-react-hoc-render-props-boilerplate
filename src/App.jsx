import React from 'react';
import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Wrapper from './RENDER/Wrapper';

function App() {
  return (
    <div className="app-container">
      <h3>HOC - Testing live class</h3>
      <div className='button-container'>
        <LikeImage />
        <LikePost />
      </div>
      <h3>Some Blog</h3>
      <div className='button-container'>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikeImage likeImageCounter={counter} handleLikeImageCount={handleIncreament} />
        }}/>
        <Wrapper render={(counter, handleIncreament)=>{
          return <LikePost likePostCounter={counter} handleLikePostCount={handleIncreament} />
        }}/>
      </div>
    </div>
  );
}

export default App;