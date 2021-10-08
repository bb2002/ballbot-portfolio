import React, {useEffect, useState} from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/Project.css"
import SubTitleComp from "../components/SubTitle.comp";
import {Spin} from "antd"
import useFirestore from "../hooks/useFirestore"


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
                <PageTitleComp text="Projects" subtext={currProject?.title}/>

                <div className="image-container">
                    <div>
                        {
                            currProject.images[0] && (
                                <img src={currProject.images[0]} alt="Main" />
                            )
                        }
                    </div>

                    <div>
                        <div>
                            {
                                currProject.images[1] && (
                                    <img src={currProject.images[1]} alt="Sub 1"/>
                                )
                            }
                        </div>
                        <div>
                            {
                                currProject.images[2] && (
                                    <img src={currProject.images[2]} alt="Sub 2"/>
                                )
                            }
                        </div>
                        <div>
                            {
                                currProject.images[3] && (
                                    <img src={currProject.images[3]} alt="Sub 3"/>
                                )
                            }
                        </div>
                        <div>
                            {
                                currProject.images[4] && (
                                    <img src={currProject.images[4]} alt="Sub 4"/>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="describe-container">
                    <div>
                        <SubTitleComp text="Introduction" />
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: currProject.introduction }} />
                    </div>
                    <div style={{ marginLeft: 32, marginRight: 32 }} />
                    <div>
                        <div>
                            <SubTitleComp text="Period" />
                            <p>{currProject.period}</p>
                        </div>
                        <div>
                            <SubTitleComp text="Link" />
                            {
                                currProject.link.map(value =>
                                    <>
                                        <a type="link" href={value}>{value}</a>
                                        <br />
                                    </>)
                            }
                        </div>
                        <div>
                            <SubTitleComp text="Contribute" />
                            {
                                currProject.contribute.map(value => <img src={value} alt={value} />)
                            }
                        </div>
                    </div>
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