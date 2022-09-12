
import React from 'react';
import { Link } from 'react-router-dom';



const Posts = ({ posts }) => {
 


  // function postMatches(post, string) {
  //   title=string;
  //   description=string // return true if any of the fields you want to check against include the text
  //   .includes((title.includes(string) === true) || (description.includes(string) === true)
      
  //   )// strings have an .includes() method 
  //  return (
  //   post
  // )
  //  }
  // const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  // const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  // // then, in our jsx below... map over postsToDisplay instead of posts
 

  return (
    <div id='outer div element'>
    {
      posts.map((post) => {
        const {description, location, price, title, _id, isAuthor } = post;
        return (
          <div key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            {
              isAuthor ? (
                <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
              ) : (
                <Link to={`/posts/${_id}`}>View</Link>
              
              )
            }
         

          

            {
              isAuthor ? (
                
                <button onClick={`/posts/delete-post/${_id, token}`}>Delete Post</button>
              ) : (
               <button> <Link to={`/posts/${_id}`}>Delete</Link> </button>
              )
            }


          </div>
        
        )
      })
    }
  </div>
  )
}

export default Posts;


        // {
        //   isAuthor === true ? (
        //     <button>You are the author </button>
        //    : (
        //     <button></button>
        //    ) 
        //   )
        // }
