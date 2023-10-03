const express = require('express');
const app = express();

// Middleware
// Middleware functions are the functions that have access to the request object (req), the response object (res), 
// and the next function in the application's request-response cycle.

// The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
}
// middleware();

app.get('/', (req, res) => {
  res.send('Home Page');
});
app.get('/about', middleware, (req, res) => {
  res.send('About Us Page');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.get('/signin', (req, res) => {
  res.send('Login Page');
});
app.get('/signup', (req, res) => {
  res.send('Registration Page');
});


app.listen(3000, () => {
  console.log(`Server is running at port no 3000`);
});