import React from 'react';
import "../styles/PageTitle.css"
import {PageHeader} from "antd";

const PageTitleComp = ({ text, subtext }) => {
    return (
        <PageHeader
            className="site-page-header"
            title={text}
            subTitle={subtext} />
    );
};

export default PageTitleComp;