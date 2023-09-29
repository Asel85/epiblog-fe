import React from 'react'
import copyright from "../image/copyright.png";

const Footer = () => {
  return (
    <div className='footer bg-primary'>
        <p className='text-white'>Copyright</p>
        <img src={copyright} alt='copyright'/>
        <p className='text-white'>2023</p>

    </div>
  )
}

export default Footer
