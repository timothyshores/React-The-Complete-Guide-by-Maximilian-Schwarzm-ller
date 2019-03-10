import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <Person name="Tim" age="30" />
                <Person name="Amanda" age="26" />
            </div>
        );
    }
}

export default App;
