import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper__content">
				<Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />

				<Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} updateNewPostText={props.updateNewPostText} addPost={props.addPost} />} />

				<Route path="/music" render={() => <Music />} />
				<Route path="/news" render={() => <News />} />
				<Route path="/settings" render={() => <Settings />} />
			</div>
		</div>
	)
}

export default App;
