import React from "react"
import "./Header.scss"
import MenuListDropDownLanguage from "../menu/MenuListDropDownLanguage"
import Button from "@material-ui/core/Button"
import CallIcon from '@material-ui/icons/Call';

function Header() {
  return (
    <header>
      <div className={"header"}>
        <div className={"level1"}>
          <MenuListDropDownLanguage />
          <h3>Pepe Tours</h3>
          <Button style={{background:"forestgreen", color:"white"}} variant="contained"  href="tel:+18475555555">
            <CallIcon /> Call now
          </Button>
        </div>
      </div>
    </header>

  )
}

export default Header