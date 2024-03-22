require('dotenv').config('./.env');

const express = require('express');
const app = express();

const logger = require('morgan')
app.use(logger('tiny'));


app.use('/',require('./routes/indexRoutes'))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT  }`);
});
