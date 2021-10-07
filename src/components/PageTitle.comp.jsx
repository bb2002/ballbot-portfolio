import React from 'react';
import "../styles/PageTitle.css"

const PageTitleComp = ({ text, subtext }) => {
    return (
        <h1 className="page-title">{text} <span>{subtext ? subtext : ""}</span></h1>
    );
};

export default PageTitleComp;