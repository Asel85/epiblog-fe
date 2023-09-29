import React,{ useEffect, useState } from 'react';
import CardPost from './CardPost';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home= () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    console.log(posts)

      const getPostsFromApi = async ()=>{
        try{
        const data = await fetch (" http://localhost:5050/posts");
        const result = await data.json();
        
        setPosts(result);
        
        }
        
       
       catch (error){
        console.log("error")
       }
    }
    

    useEffect(()=>{
      getPostsFromApi();

      setLoading(false);
    
     }, []);

  return (
    <div>
    
    <Container>
    <Row>
    <h1 className='home-title'>Kyrgyzstan</h1>
    {isLoading && <div>Loading...</div>}
      <Col  className='d-flex gap-5 flex-wrap pt-5 pb-5' >
    {posts && posts.posts && posts.posts.map((post)=>{
      return (
        <CardPost
        key = {post._id}
        title = {post.title}
        image = {post.image}
        content = {post.content}
        author = {post.author}
        id = {post._id}
        />
      )
      })}
        
    
      </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Home
