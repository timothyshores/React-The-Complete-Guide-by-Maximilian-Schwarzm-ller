import React from 'react';

const ValidationComponent = props => {
    let lengthMessage = 'Too short';

    if (props.textLength > 5) {
        lengthMessage = 'Text long enough';
    }

    return <p>{lengthMessage}</p>;
};

export default ValidationComponent;