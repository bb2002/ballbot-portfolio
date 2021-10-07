import React, {useEffect} from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/Project.css"
import SubTitleComp from "../components/SubTitle.comp";
import {Button} from "antd";

const Projects = ({ match }) => {

    useEffect(() => {

    }, [match.params])

    return (
        <div className="project-container">
            <PageTitleComp text="Projects" subtext="KNU 코딩 플랫폼"/>

            <div className="image-container">
                <div>
                    <img src="http://placehold.it/900x800" />
                </div>

                <div>
                    <div>
                        <img src="http://placehold.it/350x920" />
                    </div>
                    <div>
                        <img src="http://placehold.it/1080x1920" />
                    </div>
                    <div>
                        <img src="http://placehold.it/960x480" />
                    </div>
                    <div>
                        <img src="http://placehold.it/310x210" />
                    </div>
                </div>
            </div>

            <div className="describe-container">
                <div>
                    <SubTitleComp text="Introduction" />
                    <br />
                    <p>
                        통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은 법률로 정한다.
                        대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.
                        위원은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 국가의 세입·세출의 결산,
                        국가 및 법률이 정한 단체의 회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여 대통령 소속하에 감사원을 둔다.
                    </p>
                </div>
                <div style={{ border: "0.1px solid #dddddd", marginLeft: 32, marginRight: 32 }} />
                <div>
                    <SubTitleComp text="Period" />
                    <p>2021. 05 ~ 2021. 11</p>

                    <SubTitleComp text="Link" />
                    <Button type="link">서비스 홈페이지</Button>
                    <Button type="link">Github</Button>
                </div>
            </div>
        </div>
    );
};

export default Projects;