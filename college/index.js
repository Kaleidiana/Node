require('dotenv').config();
require('./helpers/init_mongodb');


const express = require('express');
const routes = require('./routes/studentroute');
const authRoutes = require('./routes/authRoute');



const app = express ();
app.use (express.json());
app.use(routes);
app.use(authRoutes);

//handling error
app.use((req, res, next)=>{
    const err = new Error("Not found");
    err.status = 404
    next(err)
})

//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
res.send({
    error: {
        status: err.status || 500,
        message: err.message
 }
})

})

app.listen(process.env.port || 4000, function(){

    console.log('Now listening for requests on: http://localhost:4000');
});

// module.export = app;