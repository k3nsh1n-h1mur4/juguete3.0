const express = require('express')
const morgan = require('morgan')

const PORT = process.env.PORT ?? 1234

app = express()


app.use(morgan('dev'))



app.listen(PORT, ()  => {
  console.log(`Server running on http://localhost/${PORT}`)
})


