import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "gatsby";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import MenuListDropDownLinks from "../menu/MenuListDropDownLinks";
import "./ButtonAppBar.scss";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={`${classes.root} app-bar-links` }>
        <Toolbar>
            <nav role="navigation" className="primary-navigation">
              <div className={"links-cover"}>
                <div> <Link to={"/"} activeStyle={{color: "dodgerblue"}} > <HomeIcon /> Home </Link></div>
                <div style={{borderLeft:"1px solid black",  paddingLeft:"2vw"}}><MenuListDropDownLinks /></div>
                <div style={{borderLeft:"1px solid black", paddingLeft:"2vw"}}><Link to={"/about"} activeStyle={{color: "dodgerblue"}}><InfoOutlinedIcon /> About us</Link></div>
                <div style={{borderLeft:"1px solid black",  paddingLeft:"2vw"}}><Link to={"/contact"} activeStyle={{color: "dodgerblue"}}> <ContactsOutlinedIcon />Contact us</Link></div>
              </div>
            </nav>
        </Toolbar>
    </div>
  );
}
