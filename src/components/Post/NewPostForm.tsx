
import React, { useState } from 'react';
import styles from "../../styles/post.module.css"

interface NewPostFormProps {
  onAddPost: (title: string, content: string) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onAddPost }) => {
const [title,setTitle] = useState("");
const [content,setContent] = useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (title === "" || content === "") {
    alert("Please fill in both the title and content fields.");
    return;
  }
  onAddPost(title, content); 
  setTitle(""); 
  setContent("");
};


  return (
    <div className={styles.divform} >
      <form onSubmit={handleSubmit}>
        <div >
        <input  className={styles.input} placeholder='TİTLE' value={title} onChange={(e) =>setTitle(e.target.value)}/>
        </div>
        <div>
        <textarea className={styles.textarea}placeholder='Content...' value={content} onChange={(e)  => setContent(e.target.value)} />
        </div>
        <input type = "file" id='input' accept='image/*'/>
          <div>
        <button type='submit' className={styles.btn} >Create Post</button>
        </div>
      </form>
    </div>
  )
}
export default NewPostForm;