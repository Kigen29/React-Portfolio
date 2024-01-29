1.What is NPM?

Node Package Manager (NPM) is a package manager for Javascript that manages the installation of packages in a Node.JS environment.

2.What is SPA?

Single Page Application (SPA) is a web application that modifies the current page a user interacts with rather than fetching new pages to interact with the server.

3.What is the event loop?

The event loop makes sure that I/O activities aren't interfering with the execution of other programs by continuously checking for pending events and carrying out callback functions. Its responsible for executing code and executing events.

4.What is the difference between export x and export default x? How do you import them differently?

export x:used to export multiple values as named exports. When another module imports the module that uses named exports, the imported values will be an object with the exported values as properties. You can have multiple named exports per module.

export default x:enables the default export of a single value from a module. The value that was exported as the default will be imported when a different module imports the module that uses export default. Each module may only have a single default export.

5.Why do you use className as a property in React and not class?

This is beacuse the word class is a reserved keyword in javascript and className is an attribute used to define HTML classes in React.

6.Why should you not write the following? What will happen?
<button onClick={setCounter(counter + 1)}> +1 </button>

In the code provided, the 'setCounter' will be invoked forming a loop. This happens immediately even before the button is clicked. Instead an arrow function should be utilsed to pass the function intended for the button clicking.

7.What is object deconstruction and how is it connected to React components (example)?

Object deconstruction involves the extraction of values from objects and assign them to variables inorder to improve their readability and make the code more concise.

Example:

const person = {


  firstName: 'Emmanuel',
  
  
  lastName: 'Kigen',
  
  
  age: 22,
  
  
  address: {
  
  
    city: 'Nairobi',
    
    
    county: 'Nairobi',
    
    
    country: 'Kenya'
    
    
  }
  
  
};



// Object deconstruction


const { firstName, lastName, age, address: { city, county, country } } = person;


// Using the extracted values


console.log(`Name: ${firstName} ${lastName}`);


console.log(`Age: ${age}`);


console.log(`Address: ${city}, ${county}, ${country}`);


8.How is it possible to use HTML and JavaScript in the same function (like in a React Component)? What makes it possible under the hood?

JSX allows embedding HTML-like syntax in JavaScript

Example:

import React from 'react';


// React functional component using JSX

const MyComponent = () => {

  const name = 'Emmanuel';
  
  const age = 22;

  return (
  
    <div>
    
      <h1>Hello, {name}!</h1>
      
      <p>You are {age} years old.</p>
      
      <ul>
      
        <li>Item 1</li>
        
        <li>Item 2</li>
        
        <li>Item 3</li>
        
      </ul>
      
    </div>
    
  );
  
};

export default MyComponent;



9.What is async/await? Bring an example

It makes it easier to write promises.The keyword async is put before a function and makes that function return a promise. The await keyword is used inside async functions making the program wait until the promise is resolved.

Example: 

async function fetchData() {

  try {
  
    const response = await fetch('https://api.example.com/data');
    
    const data = await response.json();
    
    console.log(data);
    
  } catch (error) {
  
    console.error('Error fetching data:', error);
    
  }
  
}


10.What is a Promise? Bring an example

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

Example: 

const fetchData = () => new Promise((resolve, reject) => {

  fetch('https://api.example.com/data')
  
    .then(response => response.json())
    
    .then(data => resolve(data))
    
    .catch(error => reject(error));
    
});

