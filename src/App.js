import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper__content">
				<Profile />
				<Dialogs />
			</div>
		</div>
	)
}

export default App;
