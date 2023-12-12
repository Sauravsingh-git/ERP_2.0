const Express = require('express');
const feedbackRouter = require('./routes/Feedback.js')

const app = Express();

app.use("/feedback", feedbackRouter );  


app.get("/", (req, res)=>{
    res.send("hello saurav");
})


app.post("/feedbackAdd", (req, res)=>{
    console.log(req.body);
    console.log("data received")
})
app.listen(8000, ()=>{
    console.log("server is listening");
})