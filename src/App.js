import './App.css';
import React, {useEffect, useRef} from "react"
import {Route, Switch} from "react-router-dom";
import NavigationComp from "./components/navigation/Navigation.comp";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import HttpError from "./pages/HttpError";
import Placeholder from "./pages/Placeholder";
import ContactMe from "./pages/ContactMe";
import { useInView } from "react-intersection-observer"
import {useHistory, useLocation} from "react-router";

const pages = [
    "/profile",
    "/webprojects/KNUCodingPlatform",
    "/webprojects/TweetGallery",
    "/webprojects/Portfolio",
    "/appprojects/Key365",
    "/appprojects/Firework",
    "/appprojects/ballbotweather",
    "/contact"
]

function App() {
    const [bottomRef, bottomView] = useInView()
    const [topRef, topView] = useInView()
    const beforeTimestamp = useRef(0)
    const location = useLocation()
    const history = useHistory()
    const section = document.getElementsByTagName("section")[0]

    // eslint-disable-next-line
    const onScrolled = (e) => {
        if(e.timeStamp - beforeTimestamp.current > 1000) {
            const path = location.pathname
            const idx = pages.indexOf(path)

            if (bottomView && e.deltaY > 0) {
                if (idx + 1 < pages.length) {
                    history.push(pages[idx + 1])
                    section.scrollTo(0, 0)
                    beforeTimestamp.current = e.timeStamp
                }
            }

            if (topView && e.deltaY < 0) {
                if (idx - 1 >= 0) {
                    history.push(pages[idx - 1])
                    section.scrollTo(0, 1000)
                    beforeTimestamp.current = e.timeStamp
                }
            }
        }
    }

    useEffect(() => {
        if(section) {
            section.addEventListener("wheel", onScrolled)
            return () => {
                section.removeEventListener("wheel", onScrolled)
            }
        }
    }, [bottomView, topView, location.pathname, onScrolled, section])

    return (
        <div id="app">
            <nav>
                <NavigationComp />
            </nav>
            <section>
                <div ref={topRef} />

                <Switch>
                    <Route component={Placeholder} exact path="/" />
                    <Route component={AboutMe} exact path="/profile" />
                    <Route component={Projects} exact path="/:category/:name" />
                    <Route component={ContactMe} exact path="/contact" />
                    <Route component={HttpError} exact path="/*" />
                </Switch>

                <div ref={bottomRef} />
            </section>
        </div>
    )
}

export default App;
