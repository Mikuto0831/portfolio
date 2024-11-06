import { Route, Switch } from "wouter";
import { Header } from "./components/header";
import "./index.css";
import { Index } from "./pages";

function App() {
    return (<>
        <Header />
        <Switch>
            <Route path="/" component={Index} />
        </Switch>
    </>);
}

export default App;