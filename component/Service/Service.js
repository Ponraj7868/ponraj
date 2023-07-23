import React, { Component } from 'react'
import "./Service.scss"
import { FaBasketballBall,FaFileAlt,FaTachometerAlt,FaBuffer,FaYoutube,FaArchway } from "react-icons/fa";
 class Service extends Component {
  render() {
    var serives=[{
        icon :FaBasketballBall,
        heading:"Lorem Ipsum",
        para:"Voluptatum deleniti atque corrupti quos dolores et quas molestias exceptur"
    },
    {
        icon :FaFileAlt,
        heading:"Sed Perspiciatis",
        para:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
    },
    {
        icon :FaTachometerAlt,
        heading:"Magni Dolores",
        para:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
    },
    {
        icon :FaBuffer,
        heading:"Nemo Enim",
        para:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
    },
    {
        icon :FaYoutube,
        heading:"Dele Cardo",
        para:"Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"
    },
    {
        icon :FaArchway,
        heading:"Divera Don",
        para:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
    }
]
    return (
      <div>
        <div class="service-container">
    <div class="serives-row">
        {serives.map((a,b) => {
            return (
                <div class="serives-col">
               <span class="service-icons"> {<a.icon/>} </span>
                    <h3>{a.heading}</h3>
                    <p>{a.para}</p>
                </div>
            )
        })}
    </div>
    </div>
      </div>
    )
  }
}
export default Service


