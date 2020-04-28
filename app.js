const express = require('express')
const router = require('./router/index.js')

let app = express()
router(app)
app.listen(10081)