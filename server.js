const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/about', (req, res) => {
  res.send('this is about page')
})

app.get('/home', (req, res) => {
  res.send('welcome home')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
