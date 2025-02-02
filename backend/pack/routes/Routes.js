const express =require('express')
const Post = require('../models/Model');

const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const posts = await Post.find();
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({message:'Internal server error',error:err.message})
    }
});

router.post('/',async(req,res)=>{
    const {title,content} = req.body;
    const post = new Post({title,content});
    try{
        const posts=await post.save();
        res.status(201).json(posts);
    }
    catch(err){
        res.status(500).json({message:"Server error", error: err.message})
    }
})

module.exports = router;