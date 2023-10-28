const express = require('express')
const app = express()
const userRoutes = require('./routes/routes.js')
app.use('/api/users', userRoutes)
require('dotenv').config()
app.listen(4000, () => {
  console.log('App listening on port 4000')
})


