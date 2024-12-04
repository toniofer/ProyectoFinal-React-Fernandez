import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
  return ( 
    <Link to="/" >
      <img src="/images/logo.png" alt="logo" className='logo' />
    </Link>  
    
  );
}

export default Logo