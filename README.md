# Unhandled Promise Rejection in Node.js Asynchronous Code

This repository demonstrates a common error in Node.js asynchronous programming: unhandled promise rejections.  The `bug.js` file contains code that simulates an asynchronous operation that may throw an error.  Because the error isn't properly handled, it leads to an unhandled promise rejection and the application might crash.

The solution, found in `bugSolution.js`, shows two ways to address this issue: using a `try...catch` block within the asynchronous operation or using `.catch()` on the promise.  Proper error handling prevents application crashes and enables more robust and reliable applications.