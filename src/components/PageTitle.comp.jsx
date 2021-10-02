import React from 'react';
import "../styles/PageTitle.css"

const PageTitleComp = ({ title }) => {
    return (
        <div className="page-title">
            <h1>{title}</h1>
        </div>
    );
};

export default PageTitleComp;