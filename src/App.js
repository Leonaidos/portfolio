import React from 'react';
import img from './res/my.JPG';
import { AiFillInstagram,AiFillFacebook,AiFillTwitterCircle,AiFillMail} from 'react-icons/ai';

import './App.css';

function App() {
  return (
    <body>
    <div className="App" >
      
          <img src={img} alt=""></img>
          <div className="content">
          
          <h1 >Raj Kumar </h1>
          <p>"Filter your mind not your pictures! Make good karma in life, Prove your reality is wrong by making your dreams true..."</p>
          <div className="icon">
            <a href="https://www.instagram.com/__r_a_h_u_l__r_a_j__/ ">
           <AiFillInstagram size="30px"
           style={ {padding:"10px"}} /> 
           </a> 
           <a href=" https://m.facebook.com/profile.php?refid=8"> 
           <AiFillFacebook size="30px" style={ {padding:"10px"}}/> 
           </a> 
           <a href=" https://mobile.twitter.com/RahulRa66669615">
           <AiFillTwitterCircle size="30px" style={ {padding:"10px"}}/>  
           </a>
           
            <a href=" mailto:rahulraj90949@gmail.com">
            <AiFillMail size="30px" style={ {padding:"10px"}}/>
            </a>
            </div>
          </div>
      </div>
      
    
    </body>
  );
}

export default App;
