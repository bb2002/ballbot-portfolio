import React, {useEffect} from 'react';
import "../../styles/navigation/Navigation.css"
import "../../styles/common.css"
import {useHistory, useLocation} from "react-router";
import {Menu} from "antd";
import {AndroidOutlined, IeOutlined, PhoneOutlined, ProjectOutlined, UserOutlined} from "@ant-design/icons";
import { Link } from "react-router-dom"

const { SubMenu } = Menu;

const NavigationComp = () => {
    const location = useLocation()
    const history = useHistory()
    const category =    location.pathname.split("/")[1] ? location.pathname.split("/")[1] : "profile"
    const name =        location.pathname.split("/")[2] ? location.pathname.split("/")[2] : ""

    useEffect(() => {

    }, [location.path])

    const onMenuClicked = (keypath) => {
        history.push("/" + keypath.reverse().join("/"))
    }

    return (
        <Menu className="navigation" mode="inline" selectedKeys={[name, category]}>
            <div id="logo">
                <Link to="/">
                    <h1>BALLBOT</h1>
                    <h1>PORTFOLIO</h1>
                </Link>
            </div>

            <Menu.Item key="profile" icon={<UserOutlined />} onClick={(value) => onMenuClicked(value.keyPath)}>
                About Me
            </Menu.Item>
            <SubMenu key="webprojects" icon={<IeOutlined />} title="Web Projects">
                {
                    [["KNUCodingPlatform", "KNU 코딩 플랫폼"], ["TweetGallery", "트윗 갤러리"], ["Portfolio", "포트폴리오"]].map(data =>
                        <Menu.Item key={data[0]} onClick={(value) => onMenuClicked(value.keyPath)}>{data[1]}</Menu.Item>
                    )
                }
            </SubMenu>
            <SubMenu key="appprojects" icon={<AndroidOutlined />} title="App Projects">
                {
                    [["Key365", "자동차키 365"], ["Firework", "화재 경보 시스템"], ["ballbotweather", "볼봇 날씨"]].map(data =>
                        <Menu.Item key={data[0]} onClick={(value) => onMenuClicked(value.keyPath)}>{data[1]}</Menu.Item>
                    )
                }
            </SubMenu>
            <Menu.Item key="contact" icon={<PhoneOutlined />} onClick={(value) => onMenuClicked(value.keyPath)}>
                Contact Me
            </Menu.Item>

            <footer>
                <p>(c) 2015-2021 Ballbot</p>
                <p>Designed by <a href="https://ant.design">Ant Design</a></p>
            </footer>
        </Menu>
    );

};

export default NavigationComp;