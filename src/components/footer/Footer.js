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

            <p className="footer-links">
              <Link to="/" className="link-1">{t("footer_home")}</Link>

              <Link to="/about">{t("footer_about")}</Link>

              <Link to="/contact">{t("footer_contact")}</Link>
            </p>

            <p className="footer-company-name">Pepe Tours © 2021</p>
          </div>

          <div className="footer-center" style={{padding:"0"}}>

            <div>
              <i className="fa fa-map-marker"></i>
              <p>Israel</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+972547152947</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:pepe.tours.israel@gmail.com">pepe.tours.israel@gmail.com</a></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>{t("footer_what_we_are")}</span>
              {t("footer_who_we_are")}
            </p>

            <div className="footer-icons">
             <Link to="#"><FacebookIcon /> Facebook</Link>
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