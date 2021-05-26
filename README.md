_This repo is my personal notes for [Maximilian Schwarzmüller's React course on Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/)_

<!--ts-->

**Table of Contents**

- [Section 1:  Getting Started](#section-1--getting-started)
  - [What is React.js](#what-is-reactjs)
  - [Why React instead of "Just JavaScript"](#why-react-instead-of-just-javascript)
  - [Components](#components)
  - [Refactoring HTML and CSS to React](#refactoring-html-and-css-to-react)
- [Next Generation JavaScript](#next-generation-javascript)
  - [Keywords let vs const](#keywords-let-vs-const)
  - [Arrow Functions](#arrow-functions)
  - [Exports & Imports](#exports--imports)
  - [Classes](#classes)
  - [Classes, Properties and Methods](#classes-properties-and-methods)
  - [Spread and Rest Operators](#spread-and-rest-operators)
  - [Destructuring](#destructuring)
    - [Arrays](#arrays)
    - [Objects](#objects)
  - [Reference and Primitive Types](#reference-and-primitive-types)
  - [Array Functions](#array-functions)
- [Basics](#basics)
  - [JSX](#jsx)
  - [Components](#components-1)
  - [Functional Components](#functional-components)
  - [Props](#props)
  - [State](#state)
  - [Event Handlers](#event-handlers)
  - [React Hooks](#react-hooks)
- [React Hooks](#react-hooks-1)
  - [Rules of Hooks](#rules-of-hooks)
  - [useState()](#usestate)
  - [Project](#project)

# Section 1:  Getting Started

## What is React.js

React is a client side Javascript library for building modern reactive user interfaces for the web. React allows developer to create web application that run in the browser and feel like native mobile apps because web pages do not reload the entire page. Examples include visiting Netflix and FaceBook in the browser.

Websites use to not be responsive in the early days of the web. Now websites are highly reactive with animations, loading bars, etc. JavaScript runs in the browser on websites that are either currently loading or have finished loading. 

## Why React instead of "Just JavaScript"

JavaScrip  is very verbose. Look at the differnces between [Just JavaScript](section-1-getting-started/just-js) and [React ](section-1-getting-started/react).

React eliminates low level code of creating  HTML elements, assigning CSS class names, text content and adding event listeners. It makes it easier to build modern reactive UIs without the needfor writing low level JavaScript code.

React is built on the idea of splitting your application into small building blocks which are called components. 

## Components

Every webpage can be divided and subdivided into different components such as headers, navbars, search bars, filters, bodies, columns, cards, titles, avatars, code snippets and footers. This keeps code manageable and easier to work in front end teams. React components can be reused and repurposed. React components can be thought of as custom HTML elements.

Components always star with a capitalized letter. E.g. a component named `Card` is fine but a component named `card` is will result in an error.

## Refactoring HTML and CSS to React

Say we want to create cards that display a person's name and age. We can open up a CodePen with the following HTML and CSS files.

```html
<div class="person">
  <h1>Tim</h1>
  <p>Age: 31 years old</p>
</div>

<div class="person">
  <h1>Max</h1>
  <p>Age: 28 years old</p>
</div>
```

```css
.person {
  display: inline-block;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  padding: 20px;
}
```

This will look like

![Example 1 - HTML and CSS only](/images/1_introduction/1.png)

The issue is that we are repeating the same `<div>`, `<h1>` and `<p>` structure in our HTML file. We would like to create a function that encapsulates this structure and just pass in the person's name and age.

We can refactor this into React code by including React along with React DOM and Babel into our [CodePen](https://codepen.io/).

**HTML**

```html
<div id="root"></div>
```

**Javascript**

```javascript
const Person = ({ name, age }) => {
  return (
    <div class="person">
      <h1>{name}</h1>
      <p>Age: {age} years old</p>
    </div>
  );
};

let App = (
  <>
    <Person name="Tim" age="31" />
    <Person name="Max" age="28" />
  </>
);

ReactDOM.render(App, document.querySelector("#root"));
```

![Example 1 - Refactored into React](/images/1_introduction/2.png)

By refactoring the original HTML and CSS into React code we can simply pass in the name and age properties into the `<Person>` component and React will renders these as `<h1>` and `<p>` elements inside of a `<div>` element like in the previous example exceot we no longer have to repeat the same HTML elements in our HTML file.

# Next Generation JavaScript

React is written using features from ES6 and beyond. Below is a quick refresher on ES6 and ES7 features that are frequently seen in React applications.

## Keywords let vs const

The keywords let and const are new keywords for declaring a variable in JavaScript. Use let if you want to reassign the variable and use const if you do not want to reassign the variable.

## Arrow Functions

Old syntax for declaring a function

```javascript
function myFnc() {
    ...
}
```

Can be rewritten as

```javascript
const myFnc = () => {
    ...
}
```

Arrow function syntax fixes the issue with the `this` keyword in Javascript.

If a function is a single line return statement you can remove the `{}` and the `return` keyword. If a function only accepts one arguement then you can remove the `()`.

As an example

```javascript
const increment = num => {
  return (num = num + 1);
};
```

Can be refactored to

```javascript
const increment = num => num++;
```

## Exports & Imports

---

Javascript code can be split up between multiple files. This ensures that each Javascript file is manageable and makes it easier to split up work between a team.

Including the `default` keyword in your export will allow the file to be renamed when it is imported into another Javascript file. In this example we're exporting a person object from `person.js` and importing it into `app.js`.

**person.js**

```javascript
const person = {
  name: "Tim"
};

export default person;
```

**app.js**

```javascript
import person from "./person.js";
import p from "./person.js";
```

---

A named export does not include the `default` keyword and is imported using `{}`. In this example we're exporting a person object from `person.js` and importing it into `app.js`. Since there's no default we need to tell Javascript what we're specifically referring to.

**utility.js**

```javascript
export const increment = num => num++;
```

**app.js**

```javascript
import { increment } from "./utility.js";
```

You can assign an alias by using the `as` keyword. For example in our `app.js` file we could import `increment` as `inc` with the following import statement.

```javascript
import { increment as inc } from "./utility.js";
```

You can import everything from a given JavaScript file using `*`

```javascript
import * as utils from "./utility.js";
```

---

## Classes

Syntax for declaring a class

```javascript
class Person {
  constructor() {
    this.name = "Tim";
  }
  printName() {
    console.log(this.name);
  }
}
```

Syntax for instantiating a class

```javascript
const person = new Person();
person.printName();
```

New classes can inherit properties and methods from existing classes

```javascript
class Child extends Parent
```

## Classes, Properties and Methods

Declaring properties in ES6

```javascript
constructor() {
    this.myProperty = 'value'
}
```

Declaring properties in ES7+

```javascript
myProperty = "value";
```

Declaring methods in ES6

```javascript
myMethod() { ... }
```

Declaring methods using arrow functions in ES7+ abstracts away the `this` keyword.

```javascript
myMethod = () => { ... }
```

This course will use ES7+ syntax to declare properties and methods in classes.

**ES6 Classes**

```javascript
class Mammal {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Human extends Mammal {
  constructor() {
    super(); // inherit Mammal constructor and printGender method
    this.name = "Tim";
    this.gender = "male";
  }

  printName() {
    console.log(this.name);
  }
}
```

This can be refactored into ES7+ resulting in the following

```javascript
class Mammal {
  gender = "male";
  printGender = () => console.log(this.gender);
}

class Human extends Mammal {
  name = "Tim";
  gender = "male";
  printName = () => console.log(this.name);
}
```

## Spread and Rest Operators

Syntax is 3 consecutive dots like this `...`

Spread operator is used to split up array elements or object properties.

**Spread operator examples**

```javascript
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4];
console.log(newArray); // returns [1, 2, 3, 4]

const oldObj = { name: "Tim" };
const newObj = { ...oldObj, age: 31 };
console.log(newObj); // returns { name: 'Tim', age: 31 }
```

Rest operator is used to merge a list of function arguments into an array

**Rest operator examples**

```javascript
function sortArgs(...args) {
  return args.sort(); // .sort() is a built in function for arrays
}

const evens(...args) => args.filter(num => num % 2 === 0);
```

The function `sortArgs` can receive any number of arguments.

## Destructuring

### Arrays

```javascript
const array = ["Hello", "World"];
[str1, str2] = array;
console.log(str1); // 'Hello'
console.log(str2); // 'World'
```

### Objects

```javascript
const person = {name: 'Tim', age: 31};
{name, age, gender} = person;
console.log(name); // 'Tim'
console.log(age); // 31
console.log(gender); // undefined
```

## Reference and Primitive Types

Numbers, strings and booleans and primitive data types while objects and arrays are reference types.

```javascript
let num1 = 1;
const num2 = num1;
num1 = 2;
console.log(num2); // 1
```

**Explaination:** num2 creates a copy of the number 1 since numbers are primitive data types. When num2 is console logged it returns 1.

```javascript
const obj1 = { name: "Tim" };
const obj2 = obj1;
obj1.name = "Max";
console.log(obj2); // { name: "Max" }
```

**Explaination:** obj2 refers a pointer in memory to obj1 since objects are reference data types. When obj2 is console logged it returns Max since it is pointing to obj1.

If we want to create a copy of `obj1` into `obj2` we can spread in the properties of `obj1` into `obj2`.

```javascript
const obj1 = { name: "Tim" };
const obj2 = { ...obj1 };
obj1.name = "Max";
console.log(obj2); // { name: "Tim" }
```

## Array Functions

Built in JavaScript array functions include `.filter()`, `.sort()`, `.map()`, `.reduce()` and more.

`.map()` preforms a function on every element in a given array

```javascript
const arr = [1, 2, 3];
const doubleEachNumber = arr.map(num => num * 2);
console.log(arr); // [1, 2, 3]
console.log(doubleEachNumber([1, 2, 3])); // [2, 4, 6]
```

# Basics

A build workflow is coding in a local text editor application such as VS Code on your own machine rather than in the browser on websites such as CodePen. In real applications you want to ship code that is as small and optimized as possible using the latest features in Javascript, linting and CSS prefixes.

**Requirements**

- Depdenency management tool such with npm or yarn
- Bundler such with webpack
- Next generation Javascript compiler such with babel
- Use a development server with live server or a hot reload

Install Node.js from [nodejs.org](https://nodejs.org/en/) and then run the following commands in the terminal

```terminal
npx create-react-app react-complete-guide
cd react-complete-guide
npm start
```

This will create the directory [react-complete-guide](./react-complete-guide/) along with subfolders and files including `.gitignore`, `package.json`, `README.md` and `yarn.lock`.

React applications are mounted in [public/index.html](./react-complete-guide/public/index.html). On line 31 in `<div id="root"></div>`. This is done in the [src/index.js](react-complete-guide/src/index.js) file on lines 7 - 12.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

React components are like custom HTML elements that are used to build a React application. Every component is required to render HTML to the Document Object Model (DOM).

In [src/App.js](react-complete-guide/src/App.js) the following functions are equivalent

```javascript
const App = () => (
  <div className="App">
    <h1>My React App</h1>
  </div>
);
```

```javascript
const App = () =>
  React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "My React App")
  );
```

The previous example is clearly more concise and easier to read. This is how your React code gets commpiled and works under the hood.

## JSX

JSX is Javascript like syntax but certain words are reserved such as `class` which needs to be written as `className` in JSX. It avoids the need to write React.createElement every time that you want to create a new element and instead allows you to write to short hand notation instead. Under the hood it compiles down to a deeply nested React.createElement function call.

JSX is syntactic sugar for Javascript.

JSX needs to have a single root element.

The following is **not** allowed.

```jsx
const App = () =>
  return (
    <h1>My React App</h1>
    <h2>Subtitle</h2>
  );
```

The following is allowed.

```jsx
const App = () =>
  return(
    <div>
      <h1>My React App</h1>
      <h2>Subtitle</h2>
    <div>
  );
```

## Components

Components are useful to avoid writing a monolith App.js file. Each file is small, manageable and easy to main. It makes it easier to work on teams of developers verses a single developer working within a sinle App.js file.

Components are reusable. Simple call a component again anywhere within the React app.

## Functional Components

Components are Uppercase. If you were to create a component that displayed a card then the file would be Card.js and typically this would be located in a `/Card/` directory.

A React component is simply a Javascript function that returns JSX.

`src/Card/Card.js`

```jsx
import React from "react";

const Card = () => {
  return <p>Card</p>;
};
```

`src/App.js`

```jsx
import React from "react";
import Card from "./Card/Card";

const App = () => {
  return <Card />;
};
```

Lowercase component names are reversed for html keywords such as `<div>`, `<h1>`, `<a href>`, etc. while uppercase component names are reversed for React components such as `<Card />` or `<Container />`. Self Closing Tags are component without elements or other components nested inside.

Components can also render content dynamically. The following component will create a `<p>` tag with the word Score: followed by a random number between o to 100.

```jsx
import React from "react";

const Card = () => {
  return <p>Score: {Math.floow(Math.randon() * 100)}0</p>;
};
```

Notice that the Javascript portion of the component is wrapped in `{}` braces to tell the Javascript compile to run the code and display the results rather than display the code in the card.

Components can also be configured based on the properties or props that they receive.

## Props

Props are like HTML attributes but for React components instead of HTML elements. HTML attributes are like `href=""` for `<a>` tags or `src=""` for `<img>` tags.

Props is the short hand version of the word properties for a React component.

`src/App.js`

```jsx
import React from "react";
import Card from "./Card/Card";

const App = () => {
  return <Card name="Tim" age=31" />;
};
```

`src/Card/Card.js`

```jsx
import React from "react";

const Card = props => {
  return (
    <p>
      My name is {props.name} and I am {props.age} years old.
    </p>
  );
};
```

This app will create an HTML page with the string "My name is Tim and I am 31 years old" wrapped inside a `<p>` tag.

Children is any text that is wrapped by a React component.

`src/App.js`

```jsx
import React from "react";
import Card from "./Card/Card";

const App = () => {
  return <Card name="Tim" age=31">This is a children prop</Card>;
};
```

`src/Card/Card.js`

```jsx
import React from "react";

const Card = props => {
  return (
    <p>To access children use the reserved children prop: {props.children}</p>
  );
};
```

## State

Used to change a React component based from within rather than from the parent component passing down props.

In class based components

```jsx
import React, {Component} from 'react';

class App extends Component: {
  state: {
    name: 'Tim',
    age: '31'
  }

  render() {
      return <Card name={this.state.name} age={this.state.age} />
  }
}
```

If the state were to change in this example then React would rerender the DOM and refresh the name or age based on the state change.

## Event Handlers

```jsx
import React, {Component} from 'react';

class App extends Component: {
  handleClick = () => console.log('Clicked')

  render() {
      return <button onClick={this.handleClick}>
  }
}
```

If we include `()` in `onClick={this.handleClick}` like `onClick={this.handleClick()}` then Javascript would immediately execute the function and will console log 'Clicked' when initially rendered. In order to prevent that behavior we simply pass a reference to the function using the syntax `onClick={this.handleClick}`.

```jsx
import React, {Component} from 'react';

class App extends Component: {
  state = {
    people: [
      {name: 'Tim', age: 31},
      {name: 'Max', age: 28}
    ]
  }
  switchPeopleHandler = () => {
    this.setState(people:[
      {name: 'Max', age: 28},
      {name: 'Tim', age: 31}
    ])
  };

  render() {
      return (
          <>
            <Card name={this.state.people[0].name} age={this.state.people[0].age} />
            <Card name={this.state.people[1].name} age={this.state.people[1].age} />
            <button onClick={this.switchPeopleHandler}><button>
          </>
      );
  }
}
```

## React Hooks

Hooks are simply a collection of functions that can be used inside of a functional components released in React 16.8.

```jsx
import React, { useState } from "react";

const App = () => {
  const [peopleState, setPeopleState] = useState(
    {
      people: [{ name: "Tim", age: 31 }, { name: "Max", age: 28 }]
    },
    []
  );

  const switchPeopleHandler = () => {
    this.setPeopleState(
      {
        people: [{ name: "Max", age: 28 }, { name: "Tim", age: 31 }]
      }
    )
  };


  return (
    <>
      <Card name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <Card name={peopleState.people[1].name} age={peopleState.people[1].age} />
      <button onClick={switchPeopleHandler}><button>
    </>
  );
};
```

useState can be called multiple times in a React component. One state might be a boolean value for whether or not to display a dark mode theme while the other useState might contain the data to be displayed on the page.

# React Hooks

React hooks allow us to work with components in a more efficient manner. Prior to hooks functional components were exclusively for presentation only and were unable to hold any state or contain any logic.

Previously all business logic would be contained in class based components that contain state. Hooks are highly reusable and independent from each component. Hooks eliminate the need for lifecycle methods such as componentDidMount or componentDidUpdate.

Hooks allow any class based component to be refactored into functional components by utilizing React hooks. Hooks replace state management and lifecycle hooks.

The syntax for React hooks is `useFunctionName()` where FunctionName is the name of your function. Some examples of built in hooks are `useState()` and `useEffect()`.

## Rules of Hooks

- Hook can only be used within a functional React component or from within another react hook.
  - Hooks can **not** be used in class based components.
- Hooks must be located at the root level of a component.
  - Hooks can not be nested inside of functions or in an if state.

## useState()

useState() is an array with two elements. The first element is a pointer to the current state and the second element is a function to update the state. useState() can be called without any arguement and Javascript will just set the initial set to null or undefined.

```javascript
const [pointerToState, setPointerToState] = useState();
```

## Project

Notice that in [/projects/hooks-01-starting-project](/projects/hooks-01-starting-project) the entire starter React app is built using functional components only and does not contain any class based components.

In [/src/components/Ingredients/IngredientForm.js](projects/hooks-01-starting-project/src/components/Ingredients/IngredientForm.js) we will bind the `<input>` element to local component state inside the functional component IngredientForm.

```javascript
import React, { useState } from "react";
```

In class based components state was always an object but in functional components with hooks state can be string, number, boolean, etc. Class based components only had a single state object while functional components can have any any finite number of states.

As an example the following state object below can be refactored into two useState calls

**One single state object**

```javascript
const [state, setState] = useState({ name: "Tim", age: 31 });
```

**Two seperate states**

```javascript
const [name, setName] = useState("Tim");
const [age, setAge] = useState(31);
```

The later is preferred to avoid erasing the previous state because when React updates state it doesn't simply update one key value pair in an object, it will completely erase the entire state object.

We will manage the ingredients state in the Ingredients component located in [projects/hooks-01-starting-project/src/components/Ingredients/Ingredients.js](/components/Ingredients/Ingredients.js)
since the component contains both the form to add ingredients as well as a section to display the ingredients.

Import useState from react

```jsx
import React, { useState } from "react";
```

Call useState and create an empty array to store the ingredients.

```javascript
const [ingredients, setIngredients] = useState([]);
```
