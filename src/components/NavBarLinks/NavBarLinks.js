import React from "react"
import { Link } from "gatsby"
import "./NavBarLinks.scss";

function NavBarLinks() {
  return (
    <nav>
      <div className={"links"}>
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}>About</Link>
        <a href="tel:+972547152947">Call now</a>
        <Link to={"/contact"}> Contact </Link>
      </div>
    </nav>
  )
}

export default NavBarLinks