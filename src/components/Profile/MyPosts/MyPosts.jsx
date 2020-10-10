import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likes} />)

    let newPostElem = React.createRef()

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElem.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3>
                My Posts
            </h3>

            <div>
                <div>
                    <textarea ref={newPostElem} value={props.newPostText} onChange={onPostChange} />
                </div>

                <div>
                    <button onClick={addPost}>
                        Add Post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;