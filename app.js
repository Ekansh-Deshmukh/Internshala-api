require('dotenv').config('./.env');

const express = require('express');
const app = express();

//logger
const logger = require('morgan');
app.use(logger('tiny'));

//routes
app.use('/',require('./routes/indexRoutes'))


//error-handling
const ErrorHandler = require('./utils/ErrorHandler');
const { generatedError } = require('./middlewares/error');

app.all('*',(req,res,next)=>{
  next(new ErrorHandler(`Requested URL Not Found ${req.url} `,404));
})

app.use(generatedError)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT  }`);
});
