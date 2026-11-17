require('dotenv').config()

const express = require('express');
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("Paramveer Singh")
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at paramveer channel</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h1>youtube not implemented</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.port}`)
})