import { useState } from 'react'
import './App.css'


function Menu() {
    return(
      <div> 
        <Title/>
        <DinnerMenu/>
        <Dropdown/>
      </div>
    );
}
  function Title (){
    return(
      <div className = "header">
        <h1>Create A Dinner Menu</h1>
      </div>
    );
  }
  function DinnerMenu (){
    return(
      <div id = "bottom" className = "grid-container">
        <h2>Schedule</h2>
        <div className = "grid-item">
          Tuesday
        </div>
        <div className = "grid-item">
          Wednesday
        </div>
        <div className = "grid-item">
          Monday
        </div>
      </div>
    );
  }
  function Dropdown (){
    return(
      <div>
        Choose Options
      </div>
    );
  }

export default Menu
