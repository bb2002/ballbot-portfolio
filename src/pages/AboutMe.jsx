import React from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/AboutMe.css"
import "../styles/common.css"
import ProfileImage from "../assets/profile.png"
import SubTitleComp from "../components/SubTitle.comp";
import {Progress, Timeline} from 'antd';
import ReactIcon from "../assets/react_icon.svg"
import NestJSIcon from "../assets/nestjs_icon.svg"
import CentOSIcon from "../assets/centos_icon.svg"
import DockerIcon from "../assets/docker_icon.svg"
import AWSIcon from "../assets/aws_icon.svg"

const AboutMe = () => {
    return (
        <div id="aboutme-container">
            <PageTitleComp text="About Me"/>

            <div>
                <div id="profile">
                    <img src={ProfileImage} id="profile-img" alt="Profile"/>
                    <p>김수빈</p>
                    <table>
                        <tr>
                            <td width={120}><b>생년월일</b></td>
                            <td width={120}>2002. 06. 06</td>
                        </tr>
                        <tr>
                            <td><b>이메일</b></td>
                            <td>5252bb@daum.net</td>
                        </tr>
                    </table>

                    <div id="extra-url">
                        <a href="https://github.com/bb2002" target="_blank" rel="noreferrer">
                            <img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=GitHub&logoColor=white" alt="Github"/>
                        </a>
                        <div style={{ width: 16 }} />
                        <a href="https://ballbot.tistory.com" target="_blank" rel="noreferrer">
                            <img src="https://img.shields.io/badge/Tistory-FF5722?style=flat-square&logo=Blogger&logoColor=white" alt="Tistory"/>
                        </a>
                    </div>

                </div>
                <div>
                    <div id="education">
                        <SubTitleComp text="Education"/>
                        <br />

                        <Timeline>
                            <Timeline.Item color="gray">
                                <p className="timeline-title">선린인터넷고등학교 입학</p>
                                <p className="timeline-date">2018. 03</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                                <p className="timeline-title">선린인터넷고등학교 졸업</p>
                                <p className="timeline-date">2021. 02</p>
                            </Timeline.Item>
                            <Timeline.Item color="gray">
                                <p className="timeline-title">강원대학교 컴퓨터공학과 입학</p>
                                <p className="timeline-date">2021. 03</p>
                            </Timeline.Item>
                            <Timeline.Item color="green">
                                <p className="timeline-title">강원대학교 컴퓨터공학과 재학</p>
                                <p className="timeline-date">2021. 03 ~</p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    <div className="big-divider" style={{ backgroundColor: "#dddddd" }} />
                    <div id="skills">
                        <SubTitleComp text="Skills"/>
                        <table>
                            <tr>
                                <td>
                                    <h3>Progrmming</h3>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={90}
                                        />
                                        <p><img src={ReactIcon} alt="React" />React</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={90}
                                        />
                                        <p style={{ fontSize: "14pt" }}><img src={ReactIcon} alt="React Native" />React Native</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={70}
                                        />
                                        <p><img src={NestJSIcon} alt="Nest JS" />NestJS</p>
                                    </div>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td>
                                    <h3>DevOps</h3>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={90}
                                        />
                                        <p><img src={CentOSIcon} alt="CentOS" />CentOS</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={60}
                                        />
                                        <p><img src={DockerIcon} alt="Docker" />Docker</p>
                                    </div>
                                </td>
                                <td>
                                    <div className="skill-item">
                                        <Progress
                                            type="circle"
                                            strokeColor={{
                                                '0%': '#108ee9',
                                                '100%': '#87d068',
                                            }}
                                            percent={50}
                                        />
                                        <p style={{ fontSize: "14pt" }}><img src={AWSIcon} alt="AWS"/>Amazon AWS</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;