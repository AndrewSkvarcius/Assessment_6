### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

Promises and Async/Await 

- What is a Promise?
 
 A Promise is an object that represents the eventual completion or failure of an asynchrous operation

- What are the differences between an async function and a regular function?

 Async functions always return a promise  while a regular function can return any value

- What is the difference between Node.js and Express.js?

 Node.js: It's a runtime environment that allows you to execute JavaScript on the server-side.
 
 Express.js: A framework running within the Node.js runtime, used to build web applications. It simplifies the task of writing server-side code.  

- What is the error-first callback pattern?

 Error-first is where callback functions are passed two arguments: the first one represents an error (if there is one) and the second one is the data/result. If there's no error, the first argument will be null or undefined.

- What is middleware?

  Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. They can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack.

- What does the `next` function do?

  The next function, when called, passes control to the next middleware function in line. If you don’t call next(), the request will hang because it won’t be passed to any endpoint or the next middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Performance:
The code fetches data for the three users sequentially. This means that it waits for the data for 'elie' to come back before it starts fetching data for 'joelburton' and so on. Instead, you could fetch data for all three users in parallel, which would be more efficient. You can use Promise.all for this.

Error Handling:
The function does not handle potential errors that might occur during fetching the data.You could fix this by adding a 'try/catch block around the async code.

Naming:
Variable names are the same as user names being fetched, this makes code less general you could solve this by putting names in an array and iterating over it.
