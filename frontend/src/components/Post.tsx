import { BlogPost } from '../models.tsx';
import './styles.css'

const Post = ({ post }: { post: BlogPost }) => {
    console.log(post.id)
    const dig = (post : BlogPost) => {
        post.digs += 1;
        // const data : JSON = JSON.parse(`{"${post.id}" : "${JSON.stringify(post)}"}`)

        fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
    return (
        <>
            <h2>{post.title}</h2>
            <h5>{post.description}</h5>
            <p>{post.content}</p>
            <span onClick={() => dig(post)}>digs: {post.digs}</span>
        </>
    )
}

export default Post;