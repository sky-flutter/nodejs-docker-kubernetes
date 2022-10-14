const express = require('express');
const app = express();

const port = process.env.PORT_NUMBER || 3000;

app.use('/', (req, res) => {
    res.send("<h1>Hello from NodeJs</h1>");
});

app.listen(port, () => {
    console.log("Connected to the server");
});