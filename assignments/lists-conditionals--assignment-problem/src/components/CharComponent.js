import React from 'react';

const CharComponent = props => {
    return (
        <div
            className="CharComponent"
            onClick={props.click}
            style={{
                display: 'inline-block',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                border: '1px solid black'
            }}
        >
            <p>{props.char}</p>
        </div>
    );
};

export default CharComponent;