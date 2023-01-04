// import modules

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { newSec } from './data/new-sec-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)

app.use(
  express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public'))
)

// Mount routes

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/sec', function(req, res) {
  res.render('newsec/index', {
    newSec: newSec
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})