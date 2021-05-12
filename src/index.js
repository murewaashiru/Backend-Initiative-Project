const express = require('express');
const dotenv = require( 'dotenv');
const morgan = require( 'morgan');
const routes = require( './routes/index');
dotenv.config();

const app = express();
app.use(morgan('dev'));

app.use('/api', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
