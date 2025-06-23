const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const signupRoute = require('./routes/signup');
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error(err));


app.use(express.json());
app.use('/api', signupRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
