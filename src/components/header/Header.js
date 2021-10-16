import React from "react"
import "./Header.scss"
import MenuListDropDownLanguage from "../menu/MenuListDropDownLanguage"
import Button from "@material-ui/core/Button"
import CallIcon from "@material-ui/icons/Call"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

function Header() {
  const { t } = useTranslation()
  return (
    <header>
      <div className={"header"}>
        <div>
          <MenuListDropDownLanguage />
        </div>
        <div>
          <h3 style={{ whiteSpace: "nowrap" }}>{t("header_name")}</h3>
        </div>
        <div className="call_button">
          <Button
            style={{
              background: "forestgreen",
              color: "white",
              height: "100%",
            }}
            variant="contained"
            href="tel:+972547152947"
          >
            <CallIcon /> <span style={{fontSize:"0.7em"}}>{t("header_call_now")}</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
