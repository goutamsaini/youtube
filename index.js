const express = require("express");
const app = express();

app.use(express.json());

const videoRouter = require("./routes/videoRoute");
const mongoose =require("mongoose");
const authRouter =require("./routes/authRoutes")
mongoose.connect('mongodb+srv://youtubeclone:1234@cluster0.5ofd4si.mongodb.net/youtubeclone_220240101055').then(()=>{console.log("DB connected");
})
app.use(videoRouter)
app.use(authRouter)
//  app.use("/video",function(req,res){
    // res.send("Hello")
//  }) 
//  app.use("/video",(req,res)=>{
//     res.send("Hello");
//  });
// app.use(express.json());  
//   app.get("/video",(req,res)=>{
//      res.send("Hello");
//   });

// app.post("/video",(req,res)=>{ 
    // res.send("Hello from post"); 
    // const video = ["vis","ahsdg","ajsdyg",];
    // res.send(video);
    // console.log(req.body);
    // const video = [
    //     {tital5: "Youtube video1", thumbnail: "http://www.youtube"},
    //      {tital1: "Youtube video1", thumbnai2: "http://www.youtube"},
    //      {tital1: "Youtube video1", thumbnai3: "http://www.youtube"},
    //      {tital3: "Youtube video1", thumbnai4: "http://www.youtube"},
    //      {tital4: "Youtube video1", thumbnai5: "http://www.youtube"}
    // ];
    // res.send(video);
//  }); 
app.listen(3000,onServerStart);
function onServerStart(){
    console.log("server started");
}