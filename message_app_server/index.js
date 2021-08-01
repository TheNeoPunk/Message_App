//Importing depenencies                      
const express = require('express');
const bodyparser = require('body-parser');   //Parses html body parts into js
const mysql = require('mysql');
const cors = require('cors');

//Creating objects for use of dependency functions
const app = express();
const db = mysql.createPool({

    //Pool access credentials
    host: 'localhost',
    user: 'root',
    password: '*********',
    database: 'message_app_db'

});

//Allows the request of triggered events in https server instance
app.use(bodyparser.urlencoded({extended: true}));
app.use(express());
app.use(cors());
app.use(express.json()); //allows body parsing of front end data from axios

//Make api req to back end
app.post('/api/insert', async (req, res) => {

    //Grab Axios defines variables from register component with body parser
    //variables contain state props variables
    const user_name = req.body.user_name;
    const user_email = req.body.user_email;
    const user_phone = req.body.user_phone;
    const user_pass = req.body.user_pass;
    const user_confirm = req.body.user_confirm;

    //More debugging on registry
    console.log(user_name);
    console.log(user_email);
    console.log(user_phone);
    console.log(user_pass);
    console.log(user_confirm);

    //Pass confirmation debugging
    if(user_pass == user_confirm){

        console.log(user_pass)
        console.log(user_confirm)
        console.log('match')

    }else if(user_pass != user_confirm){

        console.log(user_pass)
        console.log(user_confirm)
        console.log('No match');

    }
    
    //Creating an SQL command to query into our MySQL pool with dynamic input
    const sqlIns = 
        "INSERT INTO user_info (user_name, user_email, user_phone, user_pass) VALUES (?,?,?,?);";
    
    //Query the above SQL command with the specific parameters to gather user data on front end
    db.query(sqlIns, [user_name, user_email, user_phone, user_pass], (err, result) => {console.log(err)}); 

});

app.get('/', (req, res) => {

    res.send('Hello World');
   
});

//Host server on 3001 port
app.listen(3001, () => {

    console.log('Server is running on 3001');

});