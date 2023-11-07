const express =require("express");
const Video =require("../models/videoSchema");
const videoRouter =express.Router();
// const a =[];
// videoRouter.put('/video',(req,res)=>{
//    res.send(a)
// });
videoRouter.get('/video',async(req,res)=>{
   try{
      const video = await Video.find();
      res.send(video);
   }catch(error){
      res.send(error);
   }
});
videoRouter.get('/video/:Id',async(req,res)=>{
   try{
      const data = req.params;
      const videoId =data.Id;
      const video = await Video.findById(videoId);
      res.send(video);
   }catch(error){
      res.send(error);
   }

  
});

videoRouter.post('/video',async(req,res)=>{
   try{
      const data = req.body;
      const video =new Video(data);
      await video.save();
      res.send(video);
   }catch(error){
      console.log(error)
      res.send(error);
   }

  
});

module.exports = videoRouter;