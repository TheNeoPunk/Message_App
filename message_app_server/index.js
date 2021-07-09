//Importing depenencies
const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

//Creating objects for use of dependency functions
const app = express();
const db = mysql.createPool({

    //Pool access credentials
    host: 'localhost',
    user: 'root',
    password: 'TheUshanka!2',
    database: 'message_app_db'

});

//Allows the request of triggered events in https server instance
app.use(bodyparser.urlencoded({extended: true}));
app.use(express());
app.use(cors());
app.use(express.json()); //allows body parsing of front end data from axios

//Make api req to back end
app.post('/api/insert', (req, res) => {

    //Grab Axios defines variables from register component with body parser
    //variables contain state props variables
    const user_name = req.body.user_name;
    const user_email = req.body.user_email;
    const user_phone = req.body.user_phone;
    const user_pass = req.body.user_pass;

    
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