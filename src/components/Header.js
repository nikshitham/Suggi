import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
   
   const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header-container">
          <div className="logo-container">
             <img className="logo" src={LOGO_URL} alt="logo-img" />
          </div>
          <div className="nav-items">
             <ul>
                <li><Link to="/" style={{ textDecoration: 'none', color:'#fc8019' }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: 'none', color:'#fc8019' }}>About</Link></li>
                <li><Link to="/help" style={{ textDecoration: 'none', color:'#fc8019' }}>Help</Link></li>
                <li><Link to="/cart" style={{ textDecoration: 'none', color:'#fc8019' }}>Cart</Link></li>
                <li><button className="login-btn" onClick={()=>{
                  btnNameReact == "Login" ? setBtnNameReact("Logout") :setBtnNameReact("Login") ;
                }}
                >{btnNameReact}</button></li>
             </ul>
          </div>
        </div>
    )
}

export default Header;
