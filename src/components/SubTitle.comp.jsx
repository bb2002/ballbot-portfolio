import React from 'react';
import "../styles/SubTitle.css"

const SubTitleComp = ({ text }) => {
    return (
        <h1 className="subpage-title">{text}</h1>
    );
};

export default SubTitleComp;