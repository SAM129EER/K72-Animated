import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className='fixed top-2 left-2 z-50 text-white text-[5vw] font-[lausanne-lg]'>
      <Link to="/">K72</Link>
    </div>
  )
}

export default Logo
