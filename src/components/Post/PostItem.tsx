import React, { useState, useEffect } from 'react';
import styles from "../../styles/post.module.css"

function PostItem({ post }: { post: { id: number; title: string; content: string; likes: number } }) {
    const [likes, setLikes] = useState<number>(post.likes);
    const [comment, setComment] = useState<string>('');
    const [comments, setComments] = useState<string[]>([]);

    useEffect(() => {
        const savedLikes = localStorage.getItem(`post-${post.id}-likes`);
        if (savedLikes) {
            setLikes(parseInt(savedLikes));
        }

        const savedComments = localStorage.getItem(`post-${post.id}-comments`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        }
    }, [post.id]);

    const handleLike = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem(`post-${post.id}-likes`, newLikes.toString());
    };
    const handleComment = () => {
        if (comment.trim()) {
            const newComments = [...comments, comment];
            setComments(newComments);
            localStorage.setItem(`post-${post.id}-comments`, JSON.stringify(newComments));
            setComment(''); 
        }
    };

    return (
        <div className={styles.item}>
            <h2>{post.title}</h2>
            <p>{post.content} </p>
            <button onClick={handleLike} className={styles.btn}>Beğen ({likes})</button>
            <button onClick={handleComment} className={styles.btn}>Yorum Yap</button>
            <div className={styles.commentSection}>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Yorum yazın..."
                    className={styles.commentInput}
                />
                

                <div className={styles.commentsList}>
                    <h3>Yorumlar:</h3>
                    {comments.length > 0 ? (
                        comments.map((comm, index) => (
                            <p key={index} className={styles.comment}>{comm}</p>
                        ))
                    ) : (
                        <p>Henüz yorum yapılmamış.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostItem;