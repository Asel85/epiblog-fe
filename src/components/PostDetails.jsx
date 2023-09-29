import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    console.log(post);
    const getPostFromApi = async ()=>{
     try{
      const data = await fetch("http://localhost:5050/posts/"+ postId);
      const result = await data.json();

      setPost(result);
    
     }catch(error){
      console.log("Error")
     }
    }
    const navigate = useNavigate();

    const deletePost = async () =>{
      try{
        const result = await fetch("http://localhost:5050/posts/" + post.postById._id, {
          method:"Delete",
        })
        navigate("/");
      }catch(error){
        console.log("error");
      }
      
    }

    useEffect(()=>{
     getPostFromApi()
    },[])
    
    

    
  return (
    <>
    {post && post.postById && (
      <>
      <Card className="bg-dark text-white">
      <Card.Img src={post.postById.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{post.postById.title}</Card.Title>
        <Card.Text>
          {post.postById.content}
        </Card.Text>
        <Card.Text>{post.postById.author}</Card.Text>
        <Button onClick={deletePost} variant="danger">Delete</Button>
      </Card.ImgOverlay>
    </Card>
      </>
    )
    }
    </>
    
   
  
  )
      }

export default PostDetails
