import { useState } from 'react';
import { BlogPost, Comment } from '../models.tsx';
import './styles.css'

const Post = ({ post }: { post: BlogPost }) => {
    const [post_, setPost] = useState(post)

    const dig = (post: BlogPost) => {
        // post.digs += 1;
        // const data : JSON = JSON.parse(`{"${post.id}" : "${JSON.stringify(post)}"}`)

        fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(post => setPost(post))
            .catch(err => console.log(err));
    }
    return (
        <>
            <div>
                <h2>{post_.title}</h2>
                <h5>{post_.description}</h5>
                <p>{post_.content}</p>
            </div>
            <div
                onClick={() => {
                    post_.digs += 1;
                    dig(post_)
                }}
            >
                Digs: {post_.digs}
            </div>
            <span>Comments:</span>
            <div>
                {post_.comments ? (
                    post_.comments.map((comment: Comment) => (
                        <>
                            <h6>{comment.owner.name}</h6>
                            <p>{comment.content}</p>
                            <div
                                onClick={() => {
                                    comment.digs += 1;
                                    dig(post_)
                                }}
                            >Digs: {comment.digs}</div>
                        </>
                    ))
                ) : (<></>)}
            </div>
        </>
    )
}

export default Post;