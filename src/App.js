import './App.css';
import Introduction from "./pages/Introduction";
import {Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Route exact path="/" component={Introduction} />
        </div>
    )
}

export default App;
