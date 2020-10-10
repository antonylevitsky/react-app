import { rerenderTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hello", likes: "0" },
            { id: 2, message: "Hi", likes: "23" }
        ],
        newPostText: "post post"
    },
    dialogsPage: {
        dialogs: [
            { name: "Zheka", id: 1 },
            { name: "Archi", id: 2 },
            { name: "Dasha", id: 3 },
            { name: "Max", id: 4 },
            { name: "Sasha", id: 5 },
        ],
        messages: [
            { message: "Hello" },
            { message: "Hi" },
            { message: "How are you?" }
        ]
    },
    sidebar: {}
};

export let addPost = () => {
    let newPost = {
        id: 100,
        message: state.profilePage.newPostText,
        likes: "7"
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderTree(state);
}

export let updatePost = (newText) => {
    state.profilePage.newPostText = newText
    rerenderTree(state);
}

export default state;