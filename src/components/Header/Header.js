import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import Bars from "../../assets/bars.png";
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {

  const [menuOpened, setMenuOpened] = useState(false);
  const mobile=window.innerWidth<=768?true:false;

  return (
    <div className='header'>
        <img src={logo} className="logo" alt="" />
        {menuOpened===false && mobile===true?(
          <div style={{
            backgroundColor:"var(--appColor)",
            padding:'0.5rem',
            borderRadius: "5px",
            position:"fixed",
            right:"2rem",
            zIndex:"99",
          }} onClick={()=>setMenuOpened(true)} >

            <img src={Bars} alt="" style={{width:"1.5rem" , height:"1.5rem"}}/>
          </div>
        ):( <ul className='header-menu'>
            <li  ><Link className='setWhite' to='Home' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Home</Link></li>
            <li ><Link className='setWhite' to='Programs' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Programs</Link></li>
            <li ><Link className='setWhite' to='Reasons' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Why Us</Link></li>
            <li ><Link className='setWhite' to='Plans' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Plans</Link></li>
            <li ><Link className='setWhite' to='Testimonials' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Testimonials</Link></li>
            <li ><Link className='setWhite' to='join-us' span={true} smooth={true} onClick={()=>setMenuOpened(false)}>Contact Us</Link></li>
        </ul>
        )}
       
    </div>
  )
}
