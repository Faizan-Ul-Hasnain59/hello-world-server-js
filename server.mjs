import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! by Faizan');
})

app.get('/name./myName:', (req, res) => {
  const name = req.params.myName;
  res.send('Hello World! by ${name}');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})