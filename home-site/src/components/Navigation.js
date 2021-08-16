import React from 'react';
import	{NavLink} from "react-router-dom";



const Navigation = () => {
	//ICI pour la burger menu
window.onload=function(){
	const toggleButton = document.getElementById('toggle-button');
	const sideBar = document.getElementById('side-bar');

	toggleButton.addEventListener('click', show);

	function show(){
	  sideBar.classList.toggle('active');
	}

	const content = document.querySelector('.content');

	content.addEventListener('click', () => {
	  sideBar.classList.remove('active');
	})}

	//ICI pour les page selectione
	const [isActive, setActive] = React.useState(false);

 	 const toggleClass = () => {
   		 setActive(!isActive);
  		};

	return (
		<div className="navigation">
			<div id="top-bar">
				<div id="side-bar">
					<div className="toggle-button" id="toggle-button">
						<span></span>
						<span></span>
						<span></span>
					</div>

					<ul>
						<li className="menu-item">
							<a href="#page0" className="menu-lien"><img src="../img/home.svg" 	alt="Home" className="img-menu"/>Home</a>
						</li>

						<li className="menu-item">
							<a href="#page1" className="menu-lien"><img src="../img/console.svg" alt="Game" className="img-menu"/>Game</a>
						</li>

						<li className="menu-item">
							<a href="#page2" className="menu-lien"><img src="../img/podium.svg" alt="Leaderbord" className="img-menu"/>Leaderbord</a>
						</li>

						<li className="menu-item">
							<a href="#page3" className="menu-lien"><img src="../img/trophee.svg" alt="Trophee" className="img-menu"/>Achivement</a>
						</li>

						<li className="menu-item">
							<a href="#page4" className="menu-lien"><img src="../img/live-streaming.svg" alt="Live" className="img-menu"/>Live</a>
						</li>
					</ul>
				</div>


				<li className="top-lien" id="logo"><a href="#"><img src="../img/logo-3.svg" alt="logo" id="logo-img"/> <li id="name-site"> PONGO </li></a></li>
				<li className="top-lien" id="profile"><a href="#">Log</a></li>
				<li className="top-lien" id="useronline"> <img src="../img/user_icon.svg" alt="user_online"/> 2218</li>
			</div>
		</div>
	);
};

export default Navigation;
