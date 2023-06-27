const express = require('express');
const app = express();
const routes = require('./routes/routes')

app.use(express.json());
app.use(express.urlencoded({extended: false}))


const PORT = 3000;


app.use('/api/v1', routes)

app.listen(PORT, ()=>{
  console.log('App is connected')
})