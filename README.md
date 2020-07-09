**Summary:** This repo is my personal notes for the [React - The Complete Guide (incl Hooks, React Router, Redux) by Maximilian Schwarzmüller on Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/)

<!--ts-->

**Table of Contents**

- [Introduction](#Introduction)
  - [Refactoring HTML and CSS to React](#Refactoring-HTML-and-CSS-to-React)

# Introduction

React is a Javascript library for building user interfaces using components. React allows developer to create web application that run in the browser and feel like native mobile apps because web pages do not reload the entire page.

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
