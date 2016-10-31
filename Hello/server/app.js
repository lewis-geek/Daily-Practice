var express = require('express')
var app = express()
var state = false

app.use(express.static('public'));

app.get('/anybodyhere', (req, res) => {
  res.send(state)
})

app.get('/changestate', (req, res) => {
  if (req.query.state == 'true') {
    state = false
    res.send(state)
    console.log('date:' + new Date() +' | 没人');
  } else {
    state = true
    res.send(state)
    console.log('date:' + new Date() +' | 有人');
  }
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
