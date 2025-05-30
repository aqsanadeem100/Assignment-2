
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
console.log("DB_URL:", process.env.DB_URL); // Should now show the URL
const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')
const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//Log requests
app.use(morgan('tiny'))
//mongodb connection
connectDB()

//parse requests to body-parser
app.use(bodyParser.urlencoded({extended:true}))
//set view engine
app.set('view engine','ejs')
// app.set('views',path.resolve(__dirname, "views/ejs"))--> if we add any other folder inside of ejs to render views 

//load assets
// app.use(express.static(path.join(__dirname,'assets')))
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))

//load router
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})