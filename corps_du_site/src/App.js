import { BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;