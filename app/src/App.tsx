import { Route, Switch } from "wouter";
import { Header } from "./components/header";
import "./index.css";
import { Index, NotFound } from "./pages/pages";

function App() {
    return (<>
        <header className="fixed top-0 w-full">
            <Header />
        </header>
        <main className="mt-[72px]">
            <Switch>
                <Route path="/" component={Index} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </>);
}

export default App;