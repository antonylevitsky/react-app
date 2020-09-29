import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <React.Fragment>
            My Posts
            <div>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>

                <button>
                    Add Post
                </button>

                <button>
                    Remove Post
                </button>
            </div>

            <div className={s.posts}>
                <Post message="Hello" likesCount="0"/>
                <Post message="Hi!" likesCount="23" />
            </div>
        </React.Fragment>
    )
}

export default MyPosts;