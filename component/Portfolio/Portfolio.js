import React from 'react'
import "./Portfolio.scss"
import {FaPlus,FaLink} from 'react-icons/fa';
import port1 from "../../img/portfolio-1.jpg"
import port2 from "../../img/portfolio-2.jpg"
import port3 from "../../img/portfolio-3.jpg"
import port4 from "../../img/portfolio-4.jpg"
import port5 from "../../img/portfolio-5.jpg"
import port6 from "../../img/portfolio-6.jpg"
import port7 from "../../img/portfolio-7.jpg"
import port8 from "../../img/portfolio-8.jpg"
import port9 from "../../img/portfolio-9.jpg"
export const Portfolio = () => {
       
  return (
    <div >
        <div className='port-container'>
            <div className="port" >
                <button className='b1'>ALL</button >
                <button >APP</button>
                <button >CARD</button>
                <button >WEB</button>
            </div>
        <div className='port-row'>
            <div class="port-col">
            
            <div class="port-card">
            
                    <div class="items">		   
                        <img src={port1} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 1</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i className='bx'><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
            
            
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port6} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
        </div>
    
        <div class="port-col">  
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port2} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
            
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port5} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
            
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port9} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
        </div>
        <div class="port-col">  
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port3} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>
                                </div>
                                	   
                            </div>
                    </div>
            </div>

            <div class="port-card">	
                    <div class="items">		   
                        <img src={port4} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                        </div>
                    </div>
            </div>
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port7} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>
            <div class="port-card">	
                    <div class="items">		   
                        <img src={port8} alt="ponra"/>
                        <div class="port-info">
                                <div class="port-head">
                                    <h1>APP 3</h1>
                                    <p>APP</p>
                                </div>
                                <div class="port-icon">
                                <i><FaPlus/></i>
                                <i><FaLink/></i>
                                </div>	   
                            </div>
                    </div>
            </div>			
        </div>
        </div>
        </div>
   </div>
  )
}
