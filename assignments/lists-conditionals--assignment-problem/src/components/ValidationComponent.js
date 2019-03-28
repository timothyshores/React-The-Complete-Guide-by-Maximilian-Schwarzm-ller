import React from 'react';

const ValidationComponent = props => {
    return <p>{props.textLength < 5 ? "Too short" : "Text long enough"}</p>;
};

export default ValidationComponent;