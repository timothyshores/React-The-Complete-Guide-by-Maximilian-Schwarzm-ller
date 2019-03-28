import React from 'react';

const CharComponent = props => {
    return (
        <div
            className="CharComponent"
            style={{
                display: 'inline-block',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                border: '1px solid black'
            }}>
            <p>CharComponent</p>
        </div>
    );
};

export default CharComponent;