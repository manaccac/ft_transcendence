import React from 'react';
import	{NavLink} from "react-router-dom";



const Navigation = () => {
window.onload=function(){
	const toggleButton = document.getElementById('toggle-button');
	const sideBar = document.getElementById('side-bar');

	toggleButton.addEventListener('click', show);

	function show(){
	  sideBar.classList.toggle('active');
	}

	// REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT
	const content = document.querySelector('.content');

	content.addEventListener('click', () => {
	  sideBar.classList.remove('active');
	})}

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
			<section class="content">
			<section id="leaderbord">
			<div id="box-leader">
				<div id="the-box">
					<div id="deuxieme-place">
						<li>JDEL</li>
						<li>13% Win Rate</li>
					</div>
					<div id="premiere-place">
						<li>MANACCAC</li>
						<li>100% Win Rate</li>
					</div>
					<div id="troisieme-place">
						<li>RPICHON</li>
						<li>12% Win Rate</li>
					</div>

				</div>
			</div>
			<div>
				<p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.</p>
			</div>

			<div id="title-game">GAME</div>
			<div id="box-game">
				<div id="left-racket"></div>
				<div id="ball"></div>
				<div id="right-racket"></div>
			</div>
			<div id="choose-game">
				<div id="boutton-normal">NORMAL</div>
				<div id="boutton-ranked">RANKED</div>
				<div id="boutton-mod">MOD</div>
			</div>

			

		</section>

			<div id="box-challenge">
				<div id="challenge-bar">
					<div id="chall-nb">20/42</div>
				</div>
				<li id="chall-top-left"></li>
				<li id="chall-top-right"></li>

				<li id="chall-mid-left"></li>
				<li id="chall-mid-right"></li>

				<li id="chall-bot-left"></li>
				<li id="chall-bot-right"></li>






			</div>

		<footer>
			<div id="deuxiemeTrait"></div>
			<div id="copyrightErIcon">


				<div id="copyright">
					<span>Copyright © manaccac; 2021</span>
					<div>Icônes conçues par <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
				</div>
				<div>Icons made by <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>



				<div id="icons">
					<a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
					<a href="https://instagram.com/"><i class="fa fa-instagram"></i></a>
					<a href="https://github.com/manaccac"><i class="fa fa-github"></i></a>
				</div>
			</div>
		</footer>
			</section>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
		</div>
	);
};

export default Navigation;
