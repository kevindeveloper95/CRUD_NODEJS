
const mysql = require('mysql')



    const db = mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: '1208',
        database: 'conexiones'
      
    })
    
    db.connect((err) => {
    if (err) 
        throw err
        console.log('conexion exitosa')
    
    });




   
    
  module.exports = db
    
    




