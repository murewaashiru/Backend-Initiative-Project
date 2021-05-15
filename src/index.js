const express = require('express');
const dotenv = require( 'dotenv');
const morgan = require( 'morgan');
const mongoose = require('mongoose');
const routes = require( './routes/index');
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
  })
  .then(() => {
    console.log('Successfully connected to MongoDB!');
  })
  .catch((err) => {
    console.log('Unable to connect');
    console.log(err);
  });

app.use('/api', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
