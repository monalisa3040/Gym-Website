const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;


// app.use(bodyParser.text({'Content-Type':'text/plain'}));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{ 
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/about.html");
});    


app.get("/fitness", (req, res)=>{
    res.sendFile(__dirname + "/fitness.html");
});



app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + "/contact.html");
});    
    

app.post("/", (req, res)=>{
        console.log(req.body);
        res.send("welcome to stay fit gym!");
});

// app.post("/", (req, res)=>{
//     console.log(req.body);
//     res.send("welcome to stay fit gym!");
// });




app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
