const sql = require('../connect');
const express = require('express');
let router = express.Router();

router.get('/', (req, result) => {
    sql.query('SELECT * FROM ms_karyawan', (err, res, field) => {
        if(err) console.log(err.toString());
        else result.send(res);
    });    
});


module.exports = router;