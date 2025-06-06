import { useParams } from "react-router-dom";
import Post from "../utils/Post";

export default function PostsPage({ posts }: { posts: any }) {
    // console.log(posts)
    const { post_id } = useParams();

    return (
        <div>
            {post_id ? (
                Object.keys(posts).filter((id : string) => 
                    post_id === id
                ).map((id : string) => (
                    <Post post={posts[id]} key={id}/>
                ))

                ) : (
                    Object.keys(posts).map((id : string) => (
                        <Post post={posts[id]} key={id}/>
                    ))
                )
            }
        </div>
    )
}