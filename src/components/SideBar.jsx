import React, { useState } from 'react';
import SideBarUnorederList from './SideBarUnorederList';
import toggle from './images/toggle.png';
import menu_icon from './images/menu_icon.svg';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const togglebtn = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div className='SideBar-Main'>
        <div class="scudo"></div>
        <div  onClick={()=> togglebtn()}>
        {isOpen ? <img className='tglbtn open' src={toggle} alt="toggle" /> : <img  className='tglbtn1 close' src={menu_icon} alt="menu-icon" />}    
        </div>
        <div className="header">
            <div className='item'>
                <div className='logo-rapp'>
                    <span className='logo'>SBB</span>
                </div>
                {
                    isOpen && (
                        <div className='logo-text'>
                        <span className='bank-name'>SG BLOOD BANK88</span>
                        <span className='owner-name'>santosh praj</span>
                    </div>
                    )
                }
            </div>
        </div>  
        <SideBarUnorederList isOpen={isOpen}/>
        {
            isOpen && (
                <div className="footer">
                <hr></hr>
                    <p className='footer-text'>© EHR Logic. All rights reserved</p>
                </div>
            )
        }
       
    </div>
  )
}

export default SideBar
