
const express = require('express')
const app = express()

app.get('/status', (req, res) => res.status(200).json({status: 'oki 887099 55'}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))