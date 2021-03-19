const express = require('express');
const server = express();

server.listen(2812);

server.use('/get',(req,res)=>{
  res.send(['china','japan','ruishi'])
})

server.use(express.static('./'))
