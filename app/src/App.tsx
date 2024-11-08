import { Route, Switch } from "wouter";
import { Header } from "./components/header";
import "./index.css";
import { Index, NotFound } from "./pages/pages";

function App() {
    return (<>
        <div className="fixed top-0 w-full">
            <Header />
        </div>
        <div className="mt-[72px]">
            <Switch>
                <Route path="/" component={Index} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </>);
}

export default App;