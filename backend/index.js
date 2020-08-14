const User = require('./routes/user');
const Game = require('./routes/game');


const conn = require('./db/connection');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express =  require('express');
const app = express();
const  cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//connect to mongo db
mongoose.connect(conn.database,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongodb database connection established successfully");
});
//

app.use('/user',User);
app.use('/game',Game);
app.use('/uploads',express.static('uploads'));

//Server connection
app.listen(conn.port, (err)=>{
    if(err){
        console.error(err);
    }
    console.log('Connected to port '+ conn.port)
});