import React, {useEffect, useState} from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/Project.css"
import "../styles/common.css"
import {Card, Spin} from "antd"
import useFirestore from "../hooks/useFirestore"
import {useWindowSize} from "../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);



const Projects = ({ match }) => {
    const { readProjects, projects } = useFirestore()
    const [currProject, setCurrProject] = useState(undefined)
    const { width } = useWindowSize()


    useEffect(() => {
        if(match.params.category === "webprojects") {
            readProjects("webprojects")
        }

        if(match.params.category === "appprojects") {
            readProjects("appprojects")
        }
    }, [match.params, readProjects])

    useEffect(() => {
        let arr = []

        if(match.params.category === "webprojects" && projects.webprojects) {
            arr = projects.webprojects.filter(value => value.name === match.params.name)
        } else if(match.params.category === "appprojects" && projects.appprojects) {
            arr = projects.appprojects.filter(value => value.name === match.params.name)
        }


        if(arr.length === 1) {
            setCurrProject(arr[0])
        } else {
            // HTTP 404
            setCurrProject(undefined)
        }
    }, [projects, match.params, setCurrProject])


    return (
        <div className="project-container">
            {
                match.params.category === "webprojects" && (
                    <PageTitleComp text="Web Projects" subtext={currProject ? currProject.title : "Loading..."}/>
                )
            }

            {
                match.params.category === "appprojects" && (
                    <PageTitleComp text="App Projects" subtext={currProject ? currProject.title : "Loading..."}/>
                )
            }
            <div className="card-margin" />
            <br />

            <Card>
                <div id="image-slider-container">
                    {
                        currProject ? (
                            <Swiper navigation={true} className="mySwiper" style={{ width: width / 2, height: 500 }}>
                                {
                                    currProject.images.map(value => (
                                        <SwiperSlide>
                                            <div id="image-container">
                                                <img src={value} alt="Swipter"/>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        ) : (
                            <Spin size="large" />
                        )
                    }

                    <div id="intro-container">
                        <div className="card-margin" />
                        <div className="card-margin" />
                        <Card title="INTRODUCTION" id="intro-card" loading={currProject === undefined}>
                            <div dangerouslySetInnerHTML={{ __html: currProject ? currProject.introduction : "" }} id="intro-text"/>
                        </Card>
                    </div>

                </div>

            </Card>

            <div className="card-margin" />

            <div className="describe-container" >
                <Card title="FEEDBACK" loading={currProject === undefined}>
                    <div dangerouslySetInnerHTML={{ __html: currProject ? currProject.feedback : "" }} id="intro-text"/>
                </Card>
                <div className="card-margin" />
                <Card title="INFORMATION">
                    <div id="information-container">
                        <div>
                            <div>
                                <p><b>개발 기간</b></p>
                                <p>{currProject ? currProject.period : "..."}</p>
                            </div>

                            <div>
                                <p><b>관련 링크</b></p>
                                {
                                    currProject && (currProject.link.map(value =>
                                        <>
                                            <a type="link" href={value} target="_blank" rel="noreferrer">{value}</a>
                                            <br />
                                        </>)
                                    )
                                }
                            </div>
                        </div>
                        <br />
                        <div>
                            <p><b>기술 스택</b></p>
                            {
                                currProject && (
                                    currProject.contribute.map(value =>
                                        <img src={value} alt={value} style={{ marginRight: 8 }}/>)
                                )
                            }
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );

};

export default Projects;