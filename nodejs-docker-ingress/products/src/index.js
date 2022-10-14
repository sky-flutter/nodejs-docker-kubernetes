import express from 'express';

const app = express();

app.use("/",(req,res)=>{
    res.end("<h1>Product service</h1>");
});


app.listen(3003,()=>{
    console.log("Product service is up");
});