import React from "react"
import "./navBar.scss";
import { Link } from "gatsby"
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

function NavBar(){
    return (
      <div className={"nav-cover"}>
        <nav role="navigation" className="primary-navigation">
          <ul>
            <li> <Link to={"/"}> <HomeIcon /> Home </Link></li>
            <li><Link to={"/about"}><InfoOutlinedIcon /> About the tour</Link></li>
            <li><Link to={"/contact"}> <ContactsOutlinedIcon />Contact us</Link></li>
          </ul>
        </nav>
      </div>
    )
}

export default NavBar