
import express from 'express'
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.json({
  //   ok: true
  // })

  res.status(401).json({
    ok: false,
    msg: 'No hay token en la peticion'
  })
})

app.listen(port, () => {
  console.log(`express corriendo en el puerto ${port}`)
})