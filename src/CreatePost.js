import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class CreatePost extends React.Component {
render() {
 
  return (         
          <div className  = "Formpost">
          
            <form>
            <h2>Post Title</h2>
            
  <div class="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
    
  </div>
      <div class="form-group">
      <label for="exampleInputPassword1">Post</label>
    </div>
      <div>
        <textarea name="comment" id = "Postarea"></textarea>
      </div>
  <button type="submit" class="btn btn-primary">Create Post</button>
</form>
            </div>

          
            
      
    
  

 
 
  );
   }

}
export default CreatePost;
