import { useState } from 'react';
import { BlogPost } from '../models.tsx';
import './styles.css'

const Post = ({ post }: { post: BlogPost }) => {
    const [post_, setPost] = useState(post)

    const dig = (post : BlogPost) => {
        post.digs += 1;
        // const data : JSON = JSON.parse(`{"${post.id}" : "${JSON.stringify(post)}"}`)

        fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(post => setPost(post))
        .catch(err => console.log(err));
    }
    return (
        <>
            <h2>{post_.title}</h2>
            <h5>{post_.description}</h5>
            <p>{post_.content}</p>
            <span onClick={() => dig(post_)}>digs: {post_.digs}</span>
        </>
    )
}

export default Post;