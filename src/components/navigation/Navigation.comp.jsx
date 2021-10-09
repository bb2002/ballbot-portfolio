import React, {useEffect} from 'react';
import "../../styles/navigation/Navigation.css"
import "../../styles/common.css"
import {useLocation} from "react-router";
import {Menu} from "antd";
import {MailOutlined, PhoneOutlined, ProjectOutlined, UserOutlined} from "@ant-design/icons";

const { SubMenu } = Menu;

const NavigationComp = () => {
    const location = useLocation()
    const category = location.pathname.split("/")[1] ? location.pathname.split("/")[1] : ""

    useEffect(() => {

    }, [location.path])

    return (
        <Menu className="navigation" mode="inline">
            <div id="logo">
                <h1>BALLBOT</h1>
                <h1>PORTFOLIO</h1>
            </div>

            <Menu.Item key="profile" icon={<UserOutlined />}>
                About Me
            </Menu.Item>
            <SubMenu key="webprojects" icon={<ProjectOutlined />} title="Web Projects">
                <Menu.Item key="KNUCodingPlatform">KNU 코딩 플랫폼</Menu.Item>
                <Menu.Item key="TweetGallery">트윗 갤러리</Menu.Item>
                <Menu.Item key="Portfolio">포트폴리오</Menu.Item>
            </SubMenu>
            <SubMenu key="appprojects" icon={<ProjectOutlined />} title="App Projects">
                <Menu.Item key="Key365">자동차키 365</Menu.Item>
                <Menu.Item key="Firework">화재 경보 시스템</Menu.Item>
                <Menu.Item key="luview">러뷰</Menu.Item>
                <Menu.Item key="ballbotweather">볼봇날씨</Menu.Item>
            </SubMenu>
            <Menu.Item key="profile" icon={<PhoneOutlined />}>
                Contact Me
            </Menu.Item>

            <footer>
                <p>(c) 2015-2021 Saint Software</p>
                <p>Created By Ant Design</p>
            </footer>
        </Menu>
    );

};

export default NavigationComp;