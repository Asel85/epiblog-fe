import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) =>{
    setFile(e.target.files[0]);
  };

  const uploadFile = async (image)=>{
    const fileData = new FormData();
    fileData.append("image", image);

    try{
      const response = await fetch(
        "http://localhost:5050/posts/uploadImg",
      {
        method:"POST",
        body:fileData
      }
      );
      return await response.json();
    }catch(error){
      console.error("File Upload errors");
    }
  };

  const submitForm = async (e)=>{
    e.preventDefault();

    if(file){
      try{
        const uploadedFile = await uploadFile(file);
        const postFormData = {
          ...formData,
          image:uploadedFile.image
        };
        const response = await fetch("http://localhost:5050/createpost",{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(postFormData),
        }
        );
      }catch(error){
        console.error("Failed to save the post");
      }
    } else {
      console.error("Please select at least one file to upload");
    }
    navigate("/");
  };
  
  return (
    <div className='create'>
        <h2 className='create-title'>Add  a new Post!</h2>

        <form className='form'
         encType='multipart/form-data'
         onSubmit={submitForm}
         >
          <label>Post title</label>
          <input 
          type='text'
           name='title'
           onChange={(e)=>setFormData({
            ...formData,
            title:e.target.value
           })}/>
          <label>Image</label>
          <input
           type='file'
            name='image'
            onChange={handleFileChange}
            />
          <label>Post content</label>
          <textarea 
          type="text" 
          name='content'
          onChange={(e)=>setFormData({
            ...formData,
            content:e.target.value
           })}
          >

          </textarea>
          <label>Author</label>
          <input 
          type='text' 
          name='author'
          onChange={(e)=>setFormData({
            ...formData,
            author:e.target.value
           })}
          />
          <Button type='submit' variant="primary" className='mt-4 mb-4'>Send Post</Button>
        </form>
      
    </div>
  )
}

export default Create
