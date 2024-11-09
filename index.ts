const express = require('express')
const https = require('https')
const path = require('path')
const fs = require('fs')
require("dotenv").config();

const app = express()

app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
  res.send('Service B')
})

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  },
  app
)


sslServer.listen(process.env.PORT, () => console.log(`https server is running on port https://localhost:${process.env.PORT}`))