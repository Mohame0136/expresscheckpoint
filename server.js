const express = require('express')
const port = 5000;
const path = require('path')
const app = express();
let now = new Date();
let day = now.getDay();
let hour = now.getHours();


if ( 9<hour && hour<17 && 0<day && day<4) {
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/pages/main.html");
    });
    app.get("/contact", (req, res) => {
        res.sendFile(__dirname + "/pages/contact.html");
    });
} 

else {
    app.get("*", (req, res) => {
        app.use(express.static(path.join(__dirname, 'pages')))
        res.sendFile(__dirname + "/pages/error.html");
    });
}


app.listen(port, (err) =>
    err
        ? console.error(err)
        : console.log(`this server is running on port : ${port}`)
);



app.use(express.static(path.join(__dirname, 'pages')))
app.use(express.static(path.join(__dirname, 'photos')))

