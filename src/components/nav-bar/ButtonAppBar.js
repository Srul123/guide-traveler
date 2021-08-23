import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Link,graphql } from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";

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
  const {t} = useTranslation();

  return (
    <div className={`${classes.root} app-bar-links` }>
        <Toolbar>
            <nav role="navigation" className="primary-navigation">
              <div className={"links-cover"}>
                <div> <Link to={"/"} activeStyle={{color: "dodgerblue"}} > <HomeIcon /> {t("nav_links_home")} </Link></div>
                <div style={{borderLeft:"1px solid black",  paddingLeft:"2vw"}}><MenuListDropDownLinks /></div>
                <div style={{borderLeft:"1px solid black", paddingLeft:"2vw"}}><Link to={"/about"} activeStyle={{color: "dodgerblue"}}><InfoOutlinedIcon /> {t("nav_links_about")}</Link></div>
                <div style={{borderLeft:"1px solid black",  paddingLeft:"2vw"}}><Link to={"/contact"} activeStyle={{color: "dodgerblue"}}> <ContactsOutlinedIcon />{t("nav_links_contact")}</Link></div>
              </div>
            </nav>
        </Toolbar>
    </div>
  );
}


export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;