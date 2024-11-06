import { Route, Switch } from "wouter";
import { Header } from "./components/header";
import "./index.css";
import { Index, NotFound } from "./pages/pages";

function App() {
    return (<>
        <Header />
        <Switch>
            <Route path="/" component={Index} />
            <Route component={NotFound} />
        </Switch>
    </>);
}

export default App;