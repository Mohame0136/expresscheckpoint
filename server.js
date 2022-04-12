const express = require('express')
const time = require("./middleware");

const app = express();
app.use(time);

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
});

const port = 5000;

app.listen(port, (err) =>
    err
        ? console.error(err)
        : console.log(`this server is running on port : ${port}`)
);