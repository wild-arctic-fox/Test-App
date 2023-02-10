
const express = require('express')
const app = express()

app.get('/status', (req, res) => res.status(200).json({status: 'oki test 2'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))