import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import {BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import CreatePost from './CreatePost.js';

function App() {
  return (
   

  
  <div className="img-wrap">    
    <img src={'/images/oblaka.jpg'} class="img-responsive"/>
    <h1 className = "textHeader">Forum For You</h1>

<Router>
<div className = "Buttons">
  <button  href = "/CreatePost.js" type="button" class="btn btn-primary"><Link class="btn btn-primary" to = 'CreatePost.js'>Create Post</Link></button>
    
    <Switch>
    <Route exact path = "/CreatePost.js" component={CreatePost} />
    </Switch>
</div>
  </Router>
  </div>
 
 

  
  );
}

export default App;
