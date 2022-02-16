const { name } = require('ejs')
const conexion = require('../database/db')


exports.save = (req, res) => {
const user = req.body.user
const rol = req.body.rol
conexion.query("INSERT INTO usuarios SET ?", {name:user, edad:rol}, (error,result) =>{
if (error) {
    console.log(error)
}else{
    res.redirect('/')
}
})
}


exports.update = (req, res) => {
const id = req.body.id
const user = req.body.user
const rol = req.body.rol
conexion.query("UPDATE usuarios SET ? WHERE id = ?", [{ name:user, edad:rol}, id], (error, result) => {
    if (error) {
        console.log(error)
    }else{
        res.redirect('/')
    }
})

}