const express = require('express');
const bodyParser = require('body-parser');
const routerKaryawan = require('./class/karyawan');
const path = __dirname + '/view/';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json({
        "message": "Hello World!"
    });
});

app.get('/About', (req, res) => {
    res.send('Ini about!');
});

app.get('/tes', (req, res) => {
    res.sendFile(path + 'test.html');
});

app.use('/karyawan', routerKaryawan);
// app.get('/karyawan', (req,result) => {
//     sql.query('SELECT * FROM ms_karyawan', (err, res, field) => {
//         if(err) console.log(err.toString()); else result.send(res);
//     });
// });

app.listen(80, () => {
    console.log("App Listing on port 80!");
})