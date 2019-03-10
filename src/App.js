import React, { useState } from 'react';
import Person from './Person/Person'
import './App.css';

const app = props => {
    const [personState, setPersonState] = useState({
        persons: [
            { name: 'Tim', age: 30 },
            { name: 'Amanda', age: 26 }
        ]
    });

    const switchNameHandler = () => {
        setPersonState({
            persons: [
                { name: 'Timothy', age: 31 },
                { name: 'Amanda Jayne', age: 27 }
            ]
        }
        )
    }

    return (
        <div className="App">
            <h1>Hello</h1>
            <button onClick={switchNameHandler}>Switch Name</button>
            <Person name={personState.persons[0].name} age={personState.persons[0].age} />
            <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        </div>
    );
}

export default app;
