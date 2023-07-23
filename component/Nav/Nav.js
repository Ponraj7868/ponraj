import React from 'react';
import './Nav.scss'
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from "react-icons/fa";
const Nav = () => {
   
  return (
    <div>
        <div id="nav">
		<div className="container">
			<div className="nav-row">
                <div className="nav-column">
                    <h1><span>COM</span>PANY</h1>
                </div>
                <div className="col">
                    <ul className="navs">
                        <li><a><span>HOME</span></a></li>
                        <li className="down"><a href="#">ABOUT</a>
                            <ul className="drop">
                                <li className=""><a href="#">About us</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Testimonial</a></li>
                                <li className="drop-down"><a href="#">Deep Drop Down</a>
                                    <ul className="deep">
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </li>
                        <li><a>SERVICES</a></li>
                        <li><a>PROTFOLIO</a></li>
                        <li><a>BOLG</a></li>
                        <li><a>CONTACT</a></li>
                        </ul>
                </div>
                <div className="col">
                    <div class="nav-icon">
                   <a><FaTwitter/></a>                      
                    <a><FaFacebook/></a>                        
                    <a><FaInstagram/></a>
                    <a><FaLinkedin/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </div>
  )
}

export default Nav;
