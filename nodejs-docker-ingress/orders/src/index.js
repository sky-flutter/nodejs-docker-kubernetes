import express from 'express';

const app = express();

app.use("/",(req,res)=>{
    res.end("<h1>Order service</h1>");
});


app.listen(3002,()=>{
    console.log("Order service is up");
});