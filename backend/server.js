import express from "express";

const app = express();

app.get("/", (req,res) => {
    res.send("Sever is ready 123")
})

app.listen(5000, () => {
    console.log('app opened at port 5000');
})