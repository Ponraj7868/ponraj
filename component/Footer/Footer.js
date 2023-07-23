import React, { Component } from 'react'
import "./Footer.scss"
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin,FaSkype} from "react-icons/fa";
export  class Footer extends Component {
  render() {
    return (
      <div>
          <section id="footer-black">
        <div class="container">
            <div class="footer">
                <div class="footer-row">
                    <div class="footer-col">
                        <div class="footer-margin">
                        <h1>COMPANY</h1>
                        <p class="footers">A108 Adam Street
                           New York, NY 535022
                           United States</p>
                           <p>Phone: +1 5589 55488 55</p>
                           <p>Email: info@example.com</p>
                        </div>   
                    </div>
                    <div class="footer-col">
                        <div class="footer-pad">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                        </ul>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Web Design</li>
                            <li>Web Development</li>
                            <li>Product Management</li>
                            <li>Marketing</li>
                            <li>Graphic Design</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Join Our Newsletter</h3>
                        <p className='footer-para'>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <input className='footer-input'  type="text" />
                        <button className='footer-bnt'>Subscribe</button>
                    </div>
                   
                    </div>
                     <div className="footer-ponraj">
                        <div className='footer-output'>
                        <p>© Copyright Company. All Rights Reserved</p>
                        <p>Designed by <span>BootstrapMade</span> </p></div>
                            <div className='footer-icon'>
                                <i><FaTwitter/></i>                      
                                <i><FaFacebook/></i>                        
                                <i><FaInstagram/></i>
                                <i><FaSkype/></i>
                                <i><FaLinkedin/></i>
                            </div>
                   
                </div>
            </div>
        </div>
    </section>
      </div>
    )
  }
}
