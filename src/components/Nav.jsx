import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


function Nav(){
    return(
        <><br/>
        <ul className="nav-bar fs-5" >
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/" >Dashboard</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/profile" >Profile</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/SignIn" >SignIn</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/signup" >SignUp</Link></li>
        <li><Link style={{ color: 'white',textDecorationLine:"none"}} to="/show" >Table</Link></li>      
        <button className="btn text-light" style={{"background":"#24082e","border":"1px solid white"}}>BUY NOW</button>
    </ul>
    </>
    )
}
export default Nav;