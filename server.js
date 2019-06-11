var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app/dist/app'));
var port = process.env.PORT || 1234;
person = [
    {
        id: 1,
        username: "RAM",
        email: "ram@gmail.com",
        password: "ram123"
    },
    {
        id: 2,
        username: "Tushar",
        email: "tushar@gmail.com",
        password: "tushar2014"
    },
    {
        id: 3,
        username: "Raj",
        email: "raj@gmail.com",
        password: "raj123"
    }
]
uid = 4;
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/app/dist/app/index.html');
});

app.get("/data", (req, res) => {
    res.send(person);
});

app.post("/upload", (req, res) => {
    object = {
        id: uid++,
        ...req.body
    }
    person.push(object);
});

app.post("/user", (req, res) => {
    var index = req.body.uid;
    person.splice(index, 1);
});
app.listen(port, () => console.log("Server running at port " + port));