import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { SideBar_menu } from '../lib/constants';
import{Link} from "react-router-dom";

const SideBarUnorederList = ({isOpen}) => {

    const [displaycurrentitem, setDisplaycurrentitem] = useState({});
    const [activeLink, setActiveLink] = useState(null);
    const Handleonopen = (label) => {

        setDisplaycurrentitem({ ...displaycurrentitem, [label]: !displaycurrentitem[label] });
    }
    console.log(displaycurrentitem)

  const handleClick = (link) => {
    setActiveLink(link);
  };
    return (
        <div className={isOpen ? 'bar-body' : "small-body"}>
            {
                // console.log(SideBar_menu)
                SideBar_menu && SideBar_menu.length ? SideBar_menu.map((item, idx) =>
                    <>
                        <div className= {activeLink === item.to ? 'item-wrapper active' : 'item-wrapper'}
                            onClick={() => handleClick(item.to)}>
                            <div className="icon-wrapper">
                            <Link to={item.to} key={idx}><img src={item?.img} alt='list-img' /></Link>
                            </div>
                            {
                                isOpen && (
                                    <div className="items-flex">
                                    <Link to={item.to} key={idx}><p className='list-name' key={idx}>{item.label} </p></Link>
    
                                    <div className="open-wrapper">
                                        {
                                            item && item.children && item.children.length > 0 ? <span className="swipe" onClick={() => Handleonopen(item.label)} >
                                                {displaycurrentitem[item.label] ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</span> : null
    
    
                                        }
                                    </div>
                                </div>
                                )
                            }
                            
                        </div>

                        {
                            isOpen && (
                            item && item.children && item.children.length > 0 && displaycurrentitem[item.label] ?
                                <ul className='sub-list'>
                                    {
                                        item.children && item.children.length ? item.children.map((item, idx) => (
                                            <li key={idx} className='sub-list-item'>
                                                <Link to={item.to} key={idx}><p className='list-name' key={idx}>{item.label}</p></Link>

                                            </li>
                                        ))
                                            : null
                                    }
                                </ul> : null
                            )
                        }
                        
                    </>
                ) : null
            }
    
        </div >
    )
}

export default SideBarUnorederList
