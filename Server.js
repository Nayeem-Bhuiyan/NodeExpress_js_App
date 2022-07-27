const myApp = require('./App')
const express = require('express')
const expServer = express()

expServer.get('/employee', (req, res) => {
  res.send(myApp)
})

expServer.get('/', (req, res) => {
    res.send(myApp)
  })

let hostname='localhost';
let port=process.env.port||4000

expServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});