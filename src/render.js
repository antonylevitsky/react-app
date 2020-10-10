import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { updatePost } from "./redux/state";
import { addPost } from "./redux/state";
import { BrowserRouter } from 'react-router-dom';

export let rerenderTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateNewPostText={updatePost} />
		</BrowserRouter>,
		document.getElementById('root')
	);
}
