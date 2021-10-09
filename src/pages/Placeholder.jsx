import React from 'react';
import "../styles/pages/Placeholder.css"
import {Avatar} from "antd";
import ProfileImage from "../assets/profile.png"

const Placeholder = () => {
    return (
        <div className="placeholder">
            <h1>Welcome to</h1>
            <h1>BALLB<Avatar src={ProfileImage} size={96} />T</h1>
            <h1>PORTFOLIO</h1>
        </div>
    );
};

export default Placeholder;