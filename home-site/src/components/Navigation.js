import React from 'react';
import { Browser, Switch, Route, BrowserRouter} from "react-router-dom";
import	{NavLink} from "react-router-dom";



const Navigation = () => {
	function side(){
	const toggleButton = document.getElementById('toggle-button');
	const sideBar = document.getElementById('side-bar');

	sideBar.classList.toggle('active');

	const content = document.querySelector('.content');

	content.addEventListener('click', () => {
	  sideBar.classList.remove('active');
	})
	}


	//ICI pour les page selectione
	function active(){
		const tchat_button = document.getElementById('tchat-button');

		tchat_button.classList.toggle('active');
	}

	return (
		<div className="navigation">
			<div id="top-bar">
				<div id="side-bar">
					<div className="toggle-button" id="toggle-button" onClick={side}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<ul>
							<NavLink exact to="/" className="menu-lien"><img src="../img/home.svg" 	alt="Home" className="img-menu"/>Home</NavLink>

							<NavLink exact to="/Game" className="menu-lien"><img src="../img/console.svg" alt="Game" className="img-menu"/>Game</NavLink>

							<NavLink exact to="/Leaderbord" className="menu-lien"><img src="../img/podium.svg" alt="Leaderbord" className="img-menu"/>Leaderbord</NavLink>

							<NavLink exact to="/Achivement" className="menu-lien"><img src="../img/trophee.svg" alt="Trophee" className="img-menu"/>Achivement</NavLink>

							<NavLink exact to="/Live" className="menu-lien"><img src="../img/live-streaming.svg" alt="Live" className="img-menu"/>Live</NavLink>
					</ul>
				</div>

				<li className="top-lien" id="logo"><a href="#"><img src="../img/logo-3.svg" alt="logo" id="logo-img"/> <li id="name-site"> PONGO </li></a></li>
				<li className="top-lien" id="profile"><a href="#">Log</a></li>
				<li className="top-lien" id="useronline"> <img src="../img/user_icon.svg" alt="user_online"/> 2218</li>

				<div className="tchat-button" onClick={active}>
					<img src="../img/tchat.svg" alt="tchat" id="img_tchat"/>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
