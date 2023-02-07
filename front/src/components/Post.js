import { FaHeart ,FaRegHeart} from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import "./css/postStyle.css";
import { fetchPosts } from "./Slices/postSlice.js";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import "./css/like.css";
import axios from 'axios';

const Post = () => {
  const[index,setIndex]=useState();
  let [count, setCount] = useState(0);
  let [liked, setLiked] = useState(true);
  const { posts } = useSelector((state) => state.Post.value);
  const { customer } = useSelector((state) => state.User.value);
   let icon = "m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z";

let icon2 = "M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z";

  // console.log(customer._id);
// const [checked,setChecked]=useState(true);
//   const Like = (e) => {
//     let a = document.getElementById("checkbox");
//     if (a.checked) {

//       setCount(++count)
//       let response = axios.post("http://localhost:3000/like/post", { count: count });
//       // console.log(response)
//     }
//     if (!a.checked) {
//       setCount(--count);
//       let response = axios.post("http://localhost:3000/like/post", { count: count });
//     }
//     console.log(a.checked);
//     // console.log(count);

//   }
 
// useEffect(()=>{
  console.log(posts);
// },[]);
   const like= (index1,id) => {
    alert(id);
    let a = document.getElementById("index"+index1);
    let b = document.getElementById("ind"+index1);
    if(a.style.color=='black'){
         alert("black");
          // a.style.color='red';
          a.style.display="none";
          b.style.display="block";
          a.style.color="";
      let arr=[{ count: count,id:id}]
      setCount(++count)
      let response = axios.post("http://localhost:3000/like/post", arr);
      console.log(response)

        
    }
    else{
      alert("outline");
      // a.style.color="black";
      b.style.display="none";
          a.style.display="block";
          a.style.color="black";
          setCount(--count);
       let response = axios.post("http://localhost:3000/like/post", { count: count,id:id});

    }
    
   }

   const comment = async(e,index,item)=>{
        e.preventDefault();

        console.log(item);
        console.log("Hello");
    alert("Comment data will be display here"+index);
    let a = document.getElementById("comment"+index).value;
     let response = await axios.post("http://localhost:3000/comment/post", { comment: a,item:item._id,userid:item.userId});
     

        console.log(a);

   }


  return (
    <main>
      <div className="myContainer" style={{marginLeft:'-15%'}}>
        <div className="column-9">
          {posts.map((item, index) =>
            <div className="card">
              <div className="top">
                <div className="userDetails">
                  <div className="profilepic">
                    <div className="profile_img">
                      <div className="image">
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093229/g-200x200.png" alt="img8" />
                      </div>
                    </div>
                  </div>
                  <h3>{item.userId.name}
                    <br />
                    <span>{item.location}</span>
                  </h3>
                </div>

                <div>
                  <span className='font-weight-bold'>
                    {item.user}
                  </span>

                </div>

              </div>

              <div>
                <span className='font-weight-bold'>
                  <label className="ml-3">Price : - </label>{item.price}
                </span>
              </div>
              <div>
                <span className='font-weight-bold'>
                  <label className="ml-3">Floor : - </label>{item.floors}
                </span>
              </div>
              <div>
                <span className='font-weight-bold'>
                  <label className="ml-3">Description : - </label>{item.description}
                </span>
              </div>


              <div className="imgBx">
                <img src={"http://localhost:3000/postImages/" + item.postImage} style={{ width: "100%", height: "80vh" }} alt="post-1" className="cover" />
              </div>
              <div className="bottom">
                <div className="actionBtns">
                  <div className="left " >
                    
                       


                  <span   className="container" style={{marginRight:'20px'}} >
		               	{/* {liked === false ? (<FaHeart style={{color: 'black', fontSize: '30px'}}/>) : (<FaRegHeart style={{color: 'black', fontSize: '30px'}}/>)} */}

                    < FaRegHeart style={{color:'black',fontSize:'28px',position:'absolute'}} id={"index"+index} onClick={() => like(index,item._id)}/>
                    <FaHeart style={{color: 'black', fontSize: '28px',display:"none",position:'absolute',marginRight:'5px'}}id={"ind"+index}  onClick={() => like(index,item._id)} />
		              

                    </span>

                      

              

                    <svg aria-label="Comment" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 
                      48" width={24} >
                      {/* Coordinate path */}
                      <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5
										11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0
										7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0
										4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1
										8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10
										2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5
										44.5 12.7 44.5 24z" fillRule="evenodd">
                      </path>
                    </svg>
                    <svg aria-label="Share Post" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 48" width={24}>
                      <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3
										3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6
										1 1.2 1.1h.2c.5 0 1-.3
										1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2
										6.1h35.5L18 18.7 5.2 6.1zm18.7
										33.6l-4.4-18.4L42.4 8.6 23.9 39.7z">
                      </path>
                    </svg>
                      
                  </div>
                  <div className="right">
                    <svg aria-label="Save" className="_8-yf5 " color="#262626" fill="#262626" height={24} role="img" viewBox="0 0 48 48" width={24}>
                      {/* Coordinate path */}
                      <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6
										47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7
										3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4
										1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8
										0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6
										1.4-.9 2.2-.9z">
                      </path>
                    </svg>
             
                  </div>
                </div>
                <a href="#">
                  <p className="likes">{item.like} likes</p>
                </a>
                <a href="#">
                  <p className="message">
                    <b>Raju Modi</b>
                  </p>
                </a>
                <a href="#">
                  <h4 className="comments">View all 32 comments</h4>
                </a>
                {item.comment.map((com,index)=>{
  
                    return  (
                 <>
          <h6 key={index}>{com.comment}</h6>
   <h5>{com.userId.name}</h5>

   </>
  )
           
                  })}
                <a href="#">
                  <h5 className="postTime">2 hours ago</h5>
                </a>
                <div className="addComments">
                  <div className="reaction">
                    <h3>
                      <i className="far fa-smile" />
                    </h3>
                  </div>
                  <span>
                  <form onSubmit={(event)=>comment(event,index,item)}>
                  <input type="text" className="text" id={"comment"+index} placeholder="Add a comment..." />
                  <button type="submit" className="btn btn-outline-success">Post </button>
                  </form>
                  </span>
                </div>
              </div>
            </div>

          )}
        </div>
      </div>
    </main>
  )
}
export default Post;