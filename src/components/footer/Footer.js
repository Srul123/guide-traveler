import React from "react"
import "./Footer.scss";
import { Link,graphql } from "gatsby"
import {useTranslation} from "gatsby-plugin-react-i18next";

import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
  const {t} = useTranslation();

  return (
      <div className={"footer"}>
        <footer className="footer-distributed">

          <div className="footer-left">

            <h3><span>Pepe Tours</span></h3>


            <p className="footer-company-name">Pepe Tours © 2021</p>
          </div>

          <div className="footer-center" style={{padding:"0"}}>

            <div>
              <i className="fa fa-map-marker"></i>
              <p style={{whiteSpace: "nowrap"}}> {t("footer_certified_guide")} </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p><a href="tel:+972547152947">+972547152947</a></p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:pepe.tours.israel@gmail.com">pepe.tours.israel@gmail.com</a></p>
            </div>

          </div>

          <div className="footer-right">

            <div className="footer-icons">
             <a target="_blank"  href="https://www.facebook.com/Pepe-Tours-173128964820799"><FacebookIcon /><span style={{whiteSpace: "nowrap"}} id="pepe-tours-facebook" >Pepe Tours</span></a>
            </div>

          </div>

        </footer>
      </div>
    )
}

export default Footer



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