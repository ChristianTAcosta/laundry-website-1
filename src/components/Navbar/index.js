import React ,{useState} from 'react';
import './Navbar.css';
import {HiMenu} from 'react-icons/hi';
import {FaTimes} from 'react-icons/fa'
import { MenuItems } from './MenuItems';

function Navbar(){

    const [clicked, setClicked] = useState(false);


    return(
        <nav className="NavbarItems">
            <div className="menu-icon" onClick={()=> {setClicked(!clicked)}}> 
            {clicked ? <FaTimes className='icons'/> : <HiMenu className='icons'/>}
            </div> 
            <h3 className='navbar-logo'>MyLaundry Service</h3>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index) =>{
                    return(
                        <li key={index}>
                            <a href={item.url} onClick={ ()=> {setClicked(!clicked)}} className={item.cName}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
}

export default Navbar; 
