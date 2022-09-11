// build out search form and add its route to index.js

import React from 'react';

const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState(posts);

const SearchForm = (post, text) => {
      // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
  return (
    <div>
   
      <button>
        
      </button>
    </div>
  )
}

export default SearchForm;





const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts

