import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hello", likes: "0"},
        {id: 2, message: "Hi", likes: "23"}
    ]

    return (
        <div className={s.postBlock}>
            <h3>
                My Posts
            </h3>

            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                    <button>
                        Add Post
                    </button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likes} />
                <Post message={postData[1].message} likesCount={postData[1].likes} />
            </div>
        </div>
    )
}

export default MyPosts;