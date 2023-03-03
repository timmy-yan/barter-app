import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"
import { Button } from "../styles";
import { UserContext } from "./UserContext";

function NavBar(){

  const { user, setUser } = useContext(UserContext);
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <nav>
        <div class="nav-main">
            <div class="nav-header">
                <h1>barterOnly.com</h1>
          </div>
            <ul class="menu">
                <li>
                <Link to= '/home'>HOME</Link>
                </li>

                <li>
                <Link to= '/services'>SERVICES</Link>
                </li>

                <li>
                <Link to= '/gallery'>GALLERY</Link>
    
                </li>
    
                

                <Button onClick={handleLogoutClick} >logout</Button>
    </ul>
        </div>

    </nav>
    
    )
}

export default NavBar;
