import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
	return (
		<div>
			<Navigation />
			<Logo />
			<h1>About Shrek</h1>
			<br/>
			<p>
				Shrek is a 2001 American computer-animated comedy film loosely based on the 1990 fairy tale picture book of the same name by William Steig. Directed by Andrew Adamson and Vicky Jenson in their directorial debuts, it stars Mike Myers, Eddie Murphy, Cameron Diaz, and John Lithgow as the voices of the lead characters.
			</p>
			<br/>
			<p>
				The film parodies other fairy tale adaptations, primarily aimed at animated Disney films.[6] In the story, an ogre called Shrek (Myers) finds his swamp overrun by fairy tale creatures who have been banished by the corrupt Lord Farquaad (Lithgow) aspiring to be king. Shrek makes a deal with Farquaad to regain control of his swamp in return for rescuing Princess Fiona (Diaz), whom Farquaad intends to marry. With the help of Donkey (Murphy), Shrek embarks on his quest but soon falls in love with the princess, who is hiding a secret that will change his life forever.
			</p>
		</div>
	);
};

export default About;