import React from 'react';
import "../../styles/navigation/Navigation.css"
import "../../styles/common.css"

const NavigationComp = () => {
    return (
        <div className="navigation">
            <h1>BALLBOT<br />PORTFOLIO</h1>
            <div className="small-divider" style={{ marginBottom: 56, backgroundColor: "#747692" }}/>

            <div className="navigation-tab">
                <h2>INDEX</h2>
                <h3>About Me</h3>
                <h3>Projects</h3>
                <h3>Future</h3>
                <h3>Contact Me</h3>
            </div>

            <div className="navigation-tab">
                <h2>About Me</h2>
                <h3>Profile</h3>
            </div>

        </div>
    );
};

export default NavigationComp;