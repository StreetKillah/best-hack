import React from "react";
import {NavLink} from 'react-router-dom';




class Navbar extends React.Component {

  render(){
    return (
      <div className="navbar">
      <div className="navbar_container">
        <input type="submit" className="submit" value="Sign In" />
      </div>
    </div>
    
    )
  }
}



export default Navbar;
