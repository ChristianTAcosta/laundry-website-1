import React from 'react'
import './Header.css';

import Navbar from '../Navbar';
import { Button } from '../Button';

function Header() {
    return (
        <header>
            <h1 className='logo-title'>MyLaundry Service</h1>
            <Navbar/> 
            <div className='header-btn-container'> 
            <Button buttonStyle='btn--outline' >Sign In</Button>            
            <Button buttonStyle='btn--primary'>Sign Up</Button>            
            </div>
        
        </header>
    )
}

export default Header; 
