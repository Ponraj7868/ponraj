import React from 'react'
import client_1 from "../../img/clients/client-1.png"
import client_2 from "../../img/clients/client-2.png"
import client_3 from "../../img/clients/client-3.png"
import client_4 from "../../img/clients/client-4.png"
import client_5 from "../../img/clients/client-5.png"
import client_6 from "../../img/clients/client-6.png"
import client_7 from "../../img/clients/client-7.png"
import client_8 from "../../img/clients/client-8.png"
import "./Client.scss"
export const Client = () => {
    const Client1=[{
        img :client_1,
     },
    {
        img :client_2,
        
    },
    {
        img :client_3,
       
    },
    {
        img :client_4,
       
    },
    {
        img :client_5,
        
    },
    {
        img :client_6,
        
    },
    {
        img :client_7,
        
    },
    {
        img :client_8
        
    },
]
  return (
    <div>
        <div class="client-container">
             <div class="client"><h1>CLIENTS</h1></div>
        <div class="client-row">
            {Client1.map((a,b) => {
                return (
                    <div class="client-col"> 
                       <div class="client-card">
                       <img src={a.img} alt='ima'/>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    </div>
  )
}
