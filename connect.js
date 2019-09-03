const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "maxxi"
});

con.connect((err) => {
    if(err) console.log(err.toString());
});

module.exports = con;