const express = require('express') ;
const cors = require('cors')

const app = express();
app.use(cors())
const port = process.env.PORT || 8000
const connection = require('./connection/connection')
connection();
const router = require('./Routes/login-registration');
const offerRouter = require('./Routes/offer')
app.use(offerRouter);
app.use(router);
app.get('/',(req,res)=>{
    res.send("This is Defalut page ") ;
})

app.listen(port,(()=> console.log(`Server is running at ${port}`))) ;

