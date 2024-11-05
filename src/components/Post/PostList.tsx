import React, { useState,useEffect } from 'react';
import PostItem from './PostItem';
import NewPostForm from './NewPostForm';
import styles from "../../styles/post.module.css"

interface PostListProps {
  isLoggedIn: boolean;
  userName: string;
  profileImage: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<{ id: number, title: string, content: string, likes: number }[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState(''); 

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);

    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');

    if (firstName && lastName) {
      setUserName(`${firstName} ${lastName}`);
      setIsLoggedIn(true);
    }
  }, []);

  const addNewPost = (title: string, content: string) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      likes: 0,
    };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); 
  };

  return (
    <div>
      {isLoggedIn && (
        <div className={styles.userInfo}>
          <img src={profileImage} alt={`${userName}'s profile`} className={styles.profileImage} />
          <span className={styles.userName}>{userName}</span>
        </div>
      )}
      <h1 className={styles.baslik}>Gönderi Listesi</h1>
      <NewPostForm onAddPost={addNewPost} />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
