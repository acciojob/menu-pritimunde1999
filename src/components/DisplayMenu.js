
import React from "react";


const DisplayMenu = ({menu}) =>{
     
    return(
      <div className="displayed-menu" data-test-id={`menu-item-`+ menu[0].category}>
    
        {
            menu.map((items)=>(
               <div className="card"> 
               
                <img src={items.img} alt="pic1"/>

                <div className="right">
                 <div className="title">
                    <h3>{items.title}</h3>
                    <h5>${items.price}</h5>
                 </div>
                <p>{items.desc}</p>
                </div>
                </div>
                
            ))
        }
      </div>
    )
}

export default DisplayMenu;