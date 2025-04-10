import { BlogPost } from '../models.tsx';
import './styles.css'

const Post = ({ post }: { post: BlogPost }) => (
    <>
        <h2>{post.title}</h2>
        <h5>{post.description}</h5>
        <p>{post.content}</p>
    </>
)

export default Post;