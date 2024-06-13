const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes);

// connect to MOngoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`Listening on ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

connectDB();
