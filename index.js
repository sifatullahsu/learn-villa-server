const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req, res) => {
  res.send('Learn Villa server is running...');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const id = req.params.id;
  const course = courses.find(course => course._id === id);

  res.send(course ? course : {});
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});