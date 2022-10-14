import express from 'express';

const app = express();

app.use("/",(req,res)=>{
    res.end("<h1>Notification service</h1>");
});


app.listen(3001,()=>{
    console.log("Notification service is up");
});