const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors')
const morgan = require("morgan");
const bodyParser = require("body-parser")
const jobsCategoryRoute = require('./routes/jobsCategoryRoutes')
const authRoute = require('./routes/authRoutes')
 
const dotenv = require('dotenv').config();

 
mongoose.set('strictQuery', false);
// db configuration 
mongoose.connect('mongodb://127.0.0.1:27017/naukribd',{useNewUrlParser: true, useUnifiedTopology: false})

const db = mongoose.connection

db.on('error', (err) => {
	console.log(err)
})

db.once('open', () => {
	console.log('MongoDB Connected Susseccfully')
})


// app configuaration
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'))


const port = process.env.PORT || 5000

app.use('/api', jobsCategoryRoute)
app.use('/api', authRoute)


app.listen(port, () => {
	console.log(`Server running on port: ${port}`)
})


 
 


