import React, { useEffect, useState } from 'react';
import "./feed.css";
import StoryReel from './StoryReel';
import Messenger from './Messenger';
import Post from './Post';

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  // Real-time data listener
  useEffect(() => {
    const postsQuery = query(
      collection(db, 'posts'),
      orderBy('timestamp', 'desc')
    );
  
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })));
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <div className='feed'>
      {/* Story Reel */}
      <StoryReel />

      {/* Messenger */}
      <Messenger />

      {/* Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilepic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
