import { Post } from "../model/postModel.js";

export const postComment = async(req,res,next)=>{
    // console.log(req.body);
    let comment = req.body.comment;
    let id = req.body.item;
    let userid = req.body.userid;
    console.log(comment);
    // console.log(userid);
    // console.log(id);
    // console.log("Commnet post working ");

    let postData= await Post.findByIdAndUpdate(id,{comment:comment,userid:userid},(err,result)=>{
        if(err){
            console.log(err,"Error aagyi hai");
        }
        else{
            console.log(result);
        }

    })
    // console.log(postData);
    
    // let id=req.body.id;
    //    if(err)
    //    console.log(err);
    //    else
    //    console.log("finalj:"+result);

    // });
    // console.log(postData);
}