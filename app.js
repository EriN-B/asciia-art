const express = require('express')
const path = require('path')
const app = express()
const port = 6969

app.use(express.static('pages'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/pages/ascii/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})