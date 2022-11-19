import PostMessage from "../models/postMessage.js"


export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages) 
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
    res.send('this works')
}

export const createPosts = async (req, res) => {
    const newPost = new PostMessage(post);
    const post = req.body;
    try{
        await newPost.save(); 
        res.status(201).json({newPost})
    }
    catch(error){
        res.status(409).json({message:error.message})
    }
}
