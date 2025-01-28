const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Using try...catch block
  try {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        throw new Error('Something went wrong!');
      }
    }, 1000);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));