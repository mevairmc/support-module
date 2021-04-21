const express = require('express');
const morgan = require('morgan');

const app = express();
morgan.token('host', function(req, res) {
  return console.log(req.hostname);
});

app.listen(4000, res => {
    console.debug("All listen on: 4000")
})

