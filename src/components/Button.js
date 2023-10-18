import React from "react";
import MenuData from "./MenuData";


const Button = ({name,setMenu}) =>{

    function implementDisplay(category){
        if(category==="all") return setMenu(MenuData);

        setMenu(MenuData.filter((food)=>food.category===category))
    }

    return(
        <button onClick={()=>implementDisplay(name.toLowerCase())}>{name}</button>
    )
}

export default Button;