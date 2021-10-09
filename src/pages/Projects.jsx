import React, {useEffect, useState} from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/Project.css"
import "../styles/common.css"
import {Card, Spin} from "antd"
import useFirestore from "../hooks/useFirestore"
import ImageSlider from "../components/slider/ImageSlider";


const Projects = ({ match }) => {
    const { readProjects, projects } = useFirestore()
    const [currProject, setCurrProject] = useState(undefined)

    useEffect(() => {
        if(match.params.category === "webprojects") {
            readProjects("webprojects")
        }
    }, [match.params, readProjects])

    useEffect(() => {
        if(match.params.category === "webprojects" && projects.webprojects) {
            const arr = projects.webprojects.filter(value => value.name === match.params.name)

            if(arr.length === 1) {
                setCurrProject(arr[0])
            } else {
                // HTTP 404
                setCurrProject(undefined)
            }
        }
    }, [projects, match.params, setCurrProject])

    if(currProject) {
        return (
            <div className="project-container">
                {
                    match.params.category === "webprojects" && (
                        <PageTitleComp text="Web Projects" subtext={currProject?.title}/>
                    )
                }

                {
                    match.params.category === "appprojects" && (
                        <PageTitleComp text="App Projects" subtext={currProject?.title}/>
                    )
                }
                <div className="card-margin" />
                <br />

                <ImageSlider url={currProject.images} height={420}/>
                <div className="card-margin" />

                <div className="describe-container">
                    <Card title="INTRODUCTION">
                        <div dangerouslySetInnerHTML={{ __html: currProject.introduction }}  />
                    </Card>
                    <div className="card-margin" />
                    <Card title="INFORMATION">
                        <div id="information-container">
                            <div>
                                <p><b>개발 기간</b></p>
                                <p>{currProject.period}</p>
                            </div>

                            <div>
                                <p><b>관련 링크</b></p>
                                {
                                    currProject.link.map(value =>
                                        <>
                                            <a type="link" href={value} target="_blank" rel="noreferrer">{value}</a>
                                            <br />
                                        </>)
                                }
                            </div>

                            <div>
                                <p><b>기여</b></p>
                                {
                                    currProject.contribute.map(value => <img src={value} alt={value} style={{ marginRight: 8 }}/>)
                                }
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    } else {
        return (
            <Spin size="large" />
        )
    }

};

export default Projects;