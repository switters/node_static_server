
/**
 * dependencies
 */
const cookie_parser = require('cookie-parser')
const body_parser = require('body-parser')
const express = require('express')
const path = require('path')

const PORT = 3000

/*
 * consts/vars
 */
const pub_folder = `${process.cwd()}/public/`
const home_page = `${pub_folder}index.html`

/**
 * setup && middleware
 */
const app = express()

// parse application/x-www-form-urlencoded
app.use(body_parser.urlencoded({ extended: false }))

// parse application/json
app.use(body_parser.json())

// parse cookies
app.use(cookie_parser());

// enable cors
const allowed_headers = 'Origin, X-Requested-With, Content-Type, Accept'
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', allowed_headers)

  return next();
});

// server public folder
app.use(express.static(pub_folder))

/**
 * Listen
 */
console.log(`[SERVER] Running at Port ${PORT}`)

app.listen(PORT)

/**
 * Unhandled Exceptions
 */
process.on('uncaughtException', console.error)
