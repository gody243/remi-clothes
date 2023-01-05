
const {createPool} =require('mysql');

const pool=createPool({
    host: 'localhost',
    user:'godefroy',
    password:'mayokila1',
    database:'remi_clothes'
})
pool.query(`select * from registerform`,(err,result,fields)=>{
    if(err){
        return console.error(err);
    }
    return console.log(result);
})