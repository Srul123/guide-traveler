import React from "react"
import "../styles/global.scss"
import BasicImageList from "../components/images/BasicImageList"
import Layout from "../components/Layout"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import Typography from "@material-ui/core/Typography"

export default function Home() {
  const {t} = useTranslation();
  return (
    <Layout>
      <div style={{ marginBottom: "2vh" }}>
        <Typography
          id={"title-content-home"}
          component="h3"
          variant="h2"
          align="center"
          gutterBottom
        >
          {t("home_page_title")}
        </Typography>
        <Typography variant="h5" align="center">
          {t("home_page_title_offer")}
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          align="center"
        >
          {t("home_page_title_offer1")}
          <br />
          {t("home_page_title_offer2")}
        </Typography>
      </div>
      <BasicImageList />
    </Layout>
  )
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
