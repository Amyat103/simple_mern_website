const express = require('express');
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get('/', (req, res) => {
  res.json({ mssg: 'welcome to the app' });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
