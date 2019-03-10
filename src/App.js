import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
    state = {
        persons: [
            { name: 'Tim', age: 30 },
            { name: 'Amanda', age: 26 }
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            </div>
        );
    }
}

export default App;
