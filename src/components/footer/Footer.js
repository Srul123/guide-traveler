import React from "react"
import "./Footer.scss";
import { Link } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
      <div className={"footer"}>
        <footer className="footer-distributed">

          <div className="footer-left">

            <h3><span>Pepe Tours</span></h3>

            <p className="footer-links">
              <Link to="/" className="link-1">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/contact">Contact</Link>
            </p>

            <p className="footer-company-name">Pepe Tours © 2021</p>
          </div>

          <div className="footer-center">

            <div>
              <i className="fa fa-map-marker"></i>
              <p><span>Israel</span> Kibbutz Mefallsim, Shar-Hanegev</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+972525322167</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><Link to="mailto:support@company.com">pepe-tours@gmail.com</Link></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>About Pepe Tours</span>
              We are specialist tours guide traveler to all around Israel
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