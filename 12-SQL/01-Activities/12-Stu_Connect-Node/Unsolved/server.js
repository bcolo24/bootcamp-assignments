//imports express so that we can build a web server
const express = require('express');
//imports mysql2 so that we can do database queries and connections
const mysql = require('mysql2');

//'internal address' for an app
const PORT = process.env.PORT || 3001;
//allows us to create a server object
const app = express();

//middleware for express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connection object is creating here, connects to mysql database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    //both username and password have to be checked to comply with your database
    password: '',
    //this is the db we are connecting to, it has to exist before we try to use it
    //(cannot go to a folder that does not exist)
    database: 'classlist_db'
  },
  //says the db is connected 
  console.log(`Connected to the classlist_db database.`)
);
//prints the student rows from the student table (file)
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

//middleware to do the "not found response," mathes all other routes 
app.use((req, res) => {
  res.status(404).end();
});

//listens for rquests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
