const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World from the Server Side');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.get('/login', (req, res) => {
  res.send('Login Page');
});
app.get('/signup', (req, res) => {
  res.send('Registration Page');
});


app.listen(3000, () => {
  console.log(`Server is running at port no 3000`);
});