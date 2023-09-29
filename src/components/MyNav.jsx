import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../image/logo.png";

const MyNav = () => {
  return (
   <>
    <Navbar className="bg-body-tertiary">
      <Container fluid className='bg-primary p-2 border-2 rounded-3'>
        <Navbar.Brand href="#home" className="sticky-top">
          <img class="img-logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
             <a href="/" className='text-white me-3 logo-link'>Home</a>
          </Navbar.Text>
          <Navbar.Text className='text-white'>
             <a href="/create" className='text-white me-3 logo-link'>New Post</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
  </>
  )
}

export default MyNav
