import { useState } from 'react';
import { BlogPost, Comment } from '../../models.tsx';
import '../styles.css'

const CommentForm = ({ post, submitComment }: { post: BlogPost, submitComment: (post: BlogPost, comment_text: string) => void }) => {
    const [comment_text, setCommentText] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (comment_text.trim() !== '') {
                submitComment(post, comment_text);
                setCommentText('');
            } else {
                alert('Comment cannot be empty');
            }
        }}>
            <input
                type='text'
                id='comment-text-editor'
                value={comment_text}
                onChange={(e) => setCommentText(e.target.value)}
            />
            <input id='submit' type='submit' value='submit'></input>
        </form>
    )
}

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

    const bury = (post: BlogPost) => {
        // post.buries += 1;

        fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(post => setPost(post))
            .catch(err => console.log(err));
    }

    const submitComment = (post: BlogPost, comment_text: string) => {
        const comment: Comment = {
            id: `comment_${post.comments ? post.comments.length + 1 : 1}`,
            owner: { id: 'comment_1', name: 'Anonymous' },
            content: comment_text,
            digs: 0,
            buries: 0
        }

        post.comments = post.comments || [];
        post.comments.push(comment);

        console.log(post)

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
            <div className='post-container'>
                <div className='post-section'>
                    <div className='post-details'>
                        <h2>{post_.title}</h2>
                        <h5>{post_.description}</h5>
                        <p>{post_.content}</p>
                    </div>
                    {/* Todo: Add more reactions */}
                    <div className='post-reactions'>
                        <div className='dig'
                            onClick={() => {
                                post_.digs += 1;
                                dig(post_)
                            }}
                        >
                            Digs: {post_.digs}
                        </div>
                        <div className='bury'
                            onClick={() => {
                                post_.buries += 1;
                                bury(post_)
                            }}
                        >
                            Buries: {post_.buries}
                        </div>
                    </div>
                </div>
                <div className='post-section comment-section'>
                    <div className='post-details'>
                        <h4 color=''>Comments:</h4>
                        <div className='post-comment-form'>
                            <span>Comment:</span>
                            <CommentForm post={post_} submitComment={submitComment} />
                        </div>
                    </div>
                    <div className='post-comments-list'>
                        {post_.comments ? (
                            post_.comments.map((comment: Comment) => (
                                <div key={comment.id}>
                                    <h6>{comment.owner.name}</h6>
                                    <p>{comment.content}</p>
                                    <div
                                        onClick={() => {
                                            comment.digs += 1;
                                            dig(post_)
                                        }}
                                    >Digs: {comment.digs}</div>
                                </div>
                            ))
                        ) : (<></>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;