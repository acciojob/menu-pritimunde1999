import React, { useState } from "react";
import MenuData from "./MenuData";
import Button from "./Button";
import DisplayMenu from "./DisplayMenu";


const App = () =>{
    const[menu,setMenu] = useState(MenuData);
     
    return(
        
        <div>
          <h1 className="heading">Our Menu</h1>
          <div className="button-container">
             <Button id="main" name="All" setMenu={setMenu} />
             <Button id="filter-btn-1" name="Breakfast" setMenu={setMenu} />
             <Button id="filter-btn-2" name="Lunch" setMenu={setMenu} />
             <Button id="filter-btn-3" name="Shakes" setMenu={setMenu} />
          </div>

          <DisplayMenu menu={menu}/>
        </div>
    )
}


export default App;

