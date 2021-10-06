import './App.css';
import {Route, Switch} from "react-router-dom";
import NavigationComp from "./components/navigation/Navigation.comp";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import HttpError from "./pages/HttpError";

function App() {
    return (
        <div id="app">
            <section>
                <Switch>
                    <Route component={AboutMe} exact path="/" />
                    <Route component={Projects} exact path="/:type/:name" />
                    <Route component={HttpError} exact path="/*" />
                </Switch>

            </section>
            <nav>
                <NavigationComp />
            </nav>
        </div>
    )
}

export default App;
