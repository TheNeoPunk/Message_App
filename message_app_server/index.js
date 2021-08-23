//Importing depenencies                      
const express = require('express');
const bodyparser = require('body-parser');   //Parses html body parts into js
const mysql = require('mysql');
const cors = require('cors');
const { encrypt, decrypt } = require('./encryptionHndler');

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
    const friends_list = '[]';

    //Encrypt password
    const scramblePassword = encrypt(user_pass);

    //More debugging on registry
    /*console.log(user_name);
    console.log(user_email);
    console.log(user_phone);
    console.log(user_pass);
    console.log(user_confirm);*/

    //Pass confirmation debugging
    if(user_pass == user_confirm){

        console.log(user_pass);
        console.log(user_confirm);
        console.log('match');

    }else if(user_pass != user_confirm){

        console.log(user_pass)
        console.log(user_confirm)
        console.log('No match');

    }
    
     /*--------------CREATE USER ITEM----------------- */
    //Creating an SQL command to query into our MySQL pool with dynamic input
    const sqlIns = 
        "INSERT INTO user_info (user_name, friends_list, user_email, user_phone, user_pass, iv) VALUES (?,?,?,?,?,?);";

    //Query the above SQL command with the specific parameters to gather user data on front end
    db.query(
        sqlIns, 
        [user_name, friends_list ,user_email, user_phone, scramblePassword.password, scramblePassword.iv], 
        (err, result) => {
            
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
    }); 

});

//Login authentication
app.post('/login', async ( req, res) => {

    //body parsing user insertted login data
    const email = req.body.auth_email;
    const password = req.body.auth_pass;
    //const encrypt_pass = req.body.encryption.password,
    //const iv = req.body.encryption.iv

    //SQL command to select existing queries in DB
    const sqlLoginSLC = "SELECT DISTINCT user_email , friends_list, user_name, user_pass, iv, user_phone, incoming_friend_req, recent_activity, total_activity, short_desc, number_of_friends, messages_sent, num_of_contacts FROM message_app_db.user_info WHERE user_email = ?";
    
    //Query into table
    db.query(

        sqlLoginSLC,
        [email], //Grab body parser values
        (err, result, fields) => { //Feedback after process

            //If there are errors
            if(err){
                //Log errors to front end
                res.send(err);
            }

            //Check for results from SQL command
            if(result.length > 0){

                //Log decryption
                const decipheredPass = decrypt(result[0].user_pass, result[0].iv);
                if(password === decipheredPass){

                    console.log(decrypt(result[0].user_pass, result[0].iv));

                    //Send result
                    res.send(result);
                    
                }else{

                    //Send feedback otherwise
                    res.send({message: "Incorrect credentials"});

                }
                //Send decrypted password
                //res.send(decrypt(password));
                //console.log(result);

            }else{
                //Send feedback otherwise
                res.send({message: "Incorrect credentials"});
            }

        }

    );

});

app.get('/getOnlineUser', async (req, res) => {

    /*--------------GRAB AVAILABLE USERS TO ADD----------------- */
    const sqlUserReq = "SELECT * FROM message_app_db.user_info";

    db.query(

        sqlUserReq,
        (err, result) => {

            if(err){
                console.log(err);
            }else{
                console.log(result);
            }

            res.send(result);

        }

    );
    

});

app.post('/friendRequest', async (req, res) => {

    const sent_user = req.body.friend_name;
    //const user_receiver = req.body.user_receiver;
    const user_receiver_id = req.body.user_receiver_id;

    console.log(sent_user);
    console.log(user_receiver_id);
    //console.log(user_receiver);

    const sqlFriendUpdate = "UPDATE message_app_db.user_info SET friends_list = JSON_ARRAY_APPEND(friends_list, '$', ?) WHERE id=?"; 

    db.query(

        sqlFriendUpdate,
        [sent_user, user_receiver_id],
        (err, result) => {

            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            console.log(result);

            res.send(result);

        }
    )

});

app.post('/sendMessage', async (req, res) => {

    const user_a_mssg = req.body.auth_message;
    const user_a_name = req.body.auth_message_user;

    //console.log(user_a_mssg);
    //console.log(user_a_name);

    res.send({message: user_a_mssg, name: user_a_name});

});

app.get('/', (req, res) => {

    res.send('Hello World');
   
});

//Host server on 3001 port
app.listen(3001, () => {

    console.log('Server is running on 3001');

});