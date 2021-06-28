const http = require('http')
const url = require('url');
const fs = require('fs');
const querystring = require('querystring')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`at:http://localhost:3000`))