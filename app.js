const express = require('express')
const app = express()

app.use(express.static('public'))

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + '/views/about.html');
})


app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + '/views/gallery.html');
})

app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + '/views/works.html');
})

app.listen(3000, () => {
  console.log("server listening to requests ...");
});
