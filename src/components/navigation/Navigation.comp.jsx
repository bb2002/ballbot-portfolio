import React from 'react';
import "../../styles/navigation/Navigation.css"
import "../../styles/common.css"
import NAVIGATION from "../../config/Navigation.conf";
import { Link } from "react-router-dom"
import {useHistory, useLocation} from "react-router";

const NavigationComp = () => {
    const location = useLocation()

    const pageType = location.pathname.split("/")[1] ? location.pathname.split("/")[1] : ""
    const contentType = location.pathname.split("/")[2] ? location.pathname.split("/")[2] : ""
    const indexNavigation = NAVIGATION.filter(value => value.key === pageType)[0]

    if(indexNavigation && indexNavigation.child.filter(value => value.key.replace("/", "") === contentType).length !== 0) {
        return (
            <div className="navigation">
                <h1>BALLBOT<br />PORTFOLIO</h1>
                <div className="small-divider" style={{ marginBottom: 56, backgroundColor: "#747692" }}/>

                <div className="navigation-tab">
                    <h2>INDEX</h2>
                    {
                        NAVIGATION.map(value => <Link to={`/${value.key}${value.child[0].key}`}><h3 className={value.key === pageType ? 'selected' : ''}>{value.value}</h3></Link>)
                    }
                </div>

                <div className="navigation-tab">
                    <h2>{indexNavigation.value}</h2>
                    {
                        indexNavigation.child.map(value => <Link to={`/${pageType}${value.key}`}><h3 className={value.key === contentType ? 'selected' : ''}>{value.value}</h3></Link>)
                    }
                </div>
            </div>
        );
    } else {
        return null
    }

};

export default NavigationComp;