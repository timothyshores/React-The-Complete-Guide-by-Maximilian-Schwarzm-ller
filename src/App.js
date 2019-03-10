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

    switchNameHandler = () => {
        // console.log('switchNameHandler')
        this.setState({
            persons: [
                { name: 'Timothy', age: 31 },
                { name: 'Amanda Jayne', age: 27 }
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
            </div>
        );
    }
}

export default App;
