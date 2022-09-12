import React from 'react';
import { Navigate } from 'react-router-dom';
import { createPost } from '../api';

import { useParams } from 'react-router-dom';
import { updatePost } from '../api';

const CreatePost = ({ token, fetchPosts, navigate }) => {


  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDesc] = useState(description);
  const [newLocation, setNewLocation] = useState(location);
  const [newPrice, setNewPrice] = useState(price);
  const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);


  const newPost = {
    title: 'Jasons test post',
    description: 'testing',
    price: 'free',
    location: 'NY',
    willDeliver: false
  }

  
  async function addPost() {
    const result = await createPost(token, newPost)
   fetchPosts();
   navigate(`/posts`)
  }
  /* above is how we are creating the post*/
  
  return (
    <form onSubmit={ (ev) => {
      ev.preventDefault();
      createPost();
      
    }}>
      <input 
        type='text'
        placeholder={title}
        onChange={(ev) => setNewTitle(ev.target.value)}
      />
      <input 
        type='text'
        placeholder={description}
        onChange={(ev) => setNewDesc(ev.target.value)}
      />
      <input 
        type='text'
        placeholder={location}
        onChange={(ev) => setNewLocation(ev.target.value)}
      />
      <input 
        type='text'
        placeholder={price}
        onChange={(ev) => setNewPrice(ev.target.value)}
      />
      <input 
        type='checkbox'
        checked={newWillDeliver}
        onChange={(ev) => setNewWillDeliver(ev.target.checked)}
      />
      <button type='submit'>Create Post</button>
    </form>
  )

}

export default CreatePost;


 //this needs to be a form that accepts the 5 request parameters for creating a post 
        //similar to login and register would take out original button below, bring in Usestate, 
        //the form itself will need an onchange event handler to update the respective variables once the user clicks on the click button it
        // should create a new post (calling the helper function newPost that will bundle all createPosts into one object)