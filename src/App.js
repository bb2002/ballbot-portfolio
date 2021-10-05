import './App.css';
import {Route} from "react-router-dom";
import NavigationComp from "./components/navigation/Navigation.comp";
import AboutMe from "./pages/AboutMe";

function App() {
    return (
        <div id="app">
            <section>
                <Route component={AboutMe} />
            </section>
            <nav>
                <NavigationComp />
            </nav>
        </div>
    )
}

export default App;
