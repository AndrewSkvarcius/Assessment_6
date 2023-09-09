# Broken App Issues
Issues with Broken App

1: Async/Await with map: If you use async inside a .map(), it will return an array of promises. In order to wait for all those promises to resolve, you should use Promise.all().

2: Error handling, references err inside catch block, but err is not declared in the catch parameter.

3: Middleware, if exspecting JSON input in POSt request you need to use express.json() middleware to correctly parse the body of the request.

What was changed 

-Implemented app.use(express.json()) to parase the JSON request body

-Used Promise.all() to handle multiple promises from multiple calls

-Added err parameter to catch block to handle errors