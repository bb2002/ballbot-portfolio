import React, {useEffect} from 'react';
import "../styles/pages/Placeholder.css"
import {Avatar, Spin} from "antd";
import ProfileImage from "../assets/profile.png"
import {useHistory} from "react-router";
import {useWindowSize} from "../hooks/useWindowSize";

const Placeholder = () => {
    const history = useHistory()
    const { width } = useWindowSize()

    useEffect(() => {
        setTimeout(() => {
            history.replace("/profile")
        }, 2000)
    }, [history])

    return (
        <div className="placeholder">
            <h1>Welcome to</h1>
            <h1>BALLB

                {
                    (width >= 1200) && (
                        <Avatar src={ProfileImage} size={118} />
                    )
                }

                {
                    (width >= 768 && width < 1200) && (
                        <Avatar src={ProfileImage} size={90} />
                    )
                }

                {
                    (width < 768) && (
                        <Avatar src={ProfileImage} size={82} />
                    )
                }
            T</h1>
            <h1>PORTFOLIO</h1>

            <Spin size="large" />
        </div>
    );
};

export default Placeholder;