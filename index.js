const express = require('express');
const app = express();
const port = 4000;
const axios = require('axios').default;

app.get('/',  (req, res) => {
  axios.get('http://localhost:3000/users').then((result)=>{
    res.send(result.data);
  });
});

app.listen(port, () => {
  console.log(port);
});