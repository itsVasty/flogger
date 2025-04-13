import { useParams } from "react-router-dom";
import { BlogPost } from "../../models";
import Post from "../Post";

export default function PostsPage({ posts }: { posts: BlogPost[] }) {
    const { post_id } = useParams();
    if (post_id){
        posts = posts.filter((post : BlogPost) => post_id === post.id)
    }

    return (
        <div>
            {posts.map((post : BlogPost) => (
                <div key={post.id}>
                    <Post post={post}/>
                </div>
            ))}
        </div>
    )
}