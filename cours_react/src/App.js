import { BrowserRouter, Switch, Route} from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/About" exact component={About} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;