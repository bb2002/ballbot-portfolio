import './App.css';
import React from "react"
import {Route, Switch} from "react-router-dom";
import NavigationComp from "./components/navigation/Navigation.comp";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import HttpError from "./pages/HttpError";
import Placeholder from "./pages/Placeholder";
import ContactMe from "./pages/ContactMe";

function App() {

    return (
        <div id="app">
            <nav>
                <NavigationComp />
            </nav>
            <section>
                <Switch>
                    <Route component={Placeholder} exact path="/" />
                    <Route component={AboutMe} exact path="/profile" />
                    <Route component={Projects} exact path="/:category/:name" />
                    <Route component={ContactMe} exact path="/contact" />
                    <Route component={HttpError} exact path="/*" />
                </Switch>
            </section>
        </div>
    )
}

export default App;
