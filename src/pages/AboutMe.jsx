import React from 'react';
import "../styles/pages/AboutMe.css"
import "../styles/common.css"
import ItsMe from "../assets/itsme.jpg"
import {Avatar, Card, Progress, Timeline} from 'antd';
import ReactIcon from "../assets/react_icon.svg"
import NestJSIcon from "../assets/nestjs_icon.svg"
import CentOSIcon from "../assets/centos_icon.svg"
import DockerIcon from "../assets/docker_icon.svg"
import AWSIcon from "../assets/aws_icon.svg"
import {useWindowSize} from "../hooks/useWindowSize";

const AboutMe = () => {
    const { width } = useWindowSize()
    
    return (
        <div id="aboutme-container">
            <br /><br /><br /><br /><br />

            <Card title="PROFILE">
                <div id="profile">
                    <div>
                        <Avatar src={ItsMe} id="profile-img" alt="Profile" size={96}/>
                        <p>김수빈</p>
                    </div>
                    <div>
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
                                <img width={115} src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=GitHub&logoColor=white" alt="Github"/>
                            </a>
                            <div style={{ width: 8 }} />
                            <a href="https://ballbot.tistory.com" target="_blank" rel="noreferrer">
                                <img width={120} src="https://img.shields.io/badge/Tistory-FF5722?style=for-the-badge&logo=Blogger&logoColor=white" alt="Tistory"/>
                            </a>
                        </div>
                    </div>
                </div>
            </Card>
            <div className="card-margin" />
            <div id="aboutme-container2">
                <Card title="EDUCATION">
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
                </Card>
                <div className="card-margin" />
                <Card title="SKILLS">
                    <div id="skills">
                        {
                            width <= 1200 && (
                                <div>
                                    <h1>Programming</h1>
                                    <table id="table-small">
                                        <tr>
                                            <td><img src={ReactIcon} alt="React" /> React</td>
                                            <td>
                                                <Progress percent={90} showInfo={true} type="line" strokeColor="#61DAFB" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={ReactIcon} alt="React Native" /> React Native</td>
                                            <td>
                                                <Progress percent={90} showInfo={true} type="line" strokeColor="#61DAFB" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={NestJSIcon} alt="React" />  Nest JS</td>
                                            <td>
                                                <Progress percent={70} showInfo={true} type="line" strokeColor="#E0234E" />
                                            </td>
                                        </tr>
                                    </table>
                                    <br />
                                    <h1>DevOps</h1>
                                    <table id="table-small">
                                        <tr>
                                            <td><img src={CentOSIcon} alt="CentOS" /> CentOS</td>
                                            <td>
                                                <Progress percent={90} showInfo={true} type="line" strokeColor="#262577"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={DockerIcon} alt="Docker" /> Docker</td>
                                            <td>
                                                <Progress percent={60} showInfo={true} type="line" strokeColor="#2496ED" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={AWSIcon} alt="React" />  Amazon AWS</td>
                                            <td>
                                                <Progress percent={50} showInfo={true} type="line" strokeColor="#232F3E" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            )
                        }

                        {
                            width > 1200 && (
                                <table id="table-large">
                                    <tr>
                                        <td>
                                            <h3>Programming</h3>
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
                            )
                        }
                        
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AboutMe;