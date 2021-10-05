import React from 'react';
import "../styles/PageTitle.css"

const PageTitleComp = ({ text }) => {
    return (
        <h1 className="page-title">{text}</h1>
    );
};

export default PageTitleComp;