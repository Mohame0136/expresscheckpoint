const express = require('express')
const time = require("./middleware");
const router = require("./routes");

const app = express();
app.use(time);

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
});