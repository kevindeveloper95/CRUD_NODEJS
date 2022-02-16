const express = require('express');
const router = express.Router();
const conexion = require('./src/database/db')






router.get('/', (req,res) => {
  
   conexion.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log('hay un error')
    }else{
      res.render('index', {results:result})
    }
}) 
})

router.get('/create', (req,res) => {
res.render('create')
})

router.get('/edit/:id', (req,res) => {
  const id = req.params.id
  conexion.query('SELECT * FROM usuarios WHERE id= ?',[id], (err, result) => {
    if (err) {
      console.log('hay un error')
    }else{
      res.render('edit', {user:result[0]})
    }
  })
  })


  router.get('/delete/:id', (req, res) => {
    const pa = req.params.id;
    conexion.query('DELETE FROM usuarios WHERE id= ?', [pa], (err, results) => {
      if (err) {
        console.log(err)
      }else{
        res.redirect('/')
      }
    })
  })


const crud = require('../Mysql/src/controllers/crud')
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports =  router