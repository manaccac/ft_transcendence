import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Game from './pages/Game';
import Achivement from './pages/Achivement';
import Leaderbord from './pages/Leaderbord';

const App = () => {
	
	return (
		<BrowserRouter >
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/Game" exact component={Game} />
				<Route path="/Achivement" exact component={Achivement} />
				<Route path="/Leaderbord" exact component={Leaderbord} />
				<Route path="/Live" exact component={Leaderbord} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;