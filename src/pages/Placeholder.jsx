import React, {useEffect} from 'react';
import "../styles/pages/Placeholder.css"
import {Avatar, Spin} from "antd";
import ProfileImage from "../assets/profile.png"
import {useHistory} from "react-router";

const Placeholder = () => {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.replace("/profile")
        }, 2000)
    }, [])

    return (
        <div className="placeholder">
            <h1>Welcome to</h1>
            <h1>BALLB<Avatar src={ProfileImage} size={96} />T</h1>
            <h1>PORTFOLIO</h1>

            <Spin size="large" />
        </div>
    );
};

export default Placeholder;