import React from "react"
import Layout from "../components/layout/Layout"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import ImageGallery from "react-image-gallery"
import defaultImage from "../../static/home/israel_flag.png"
import about_1 from "../../static/about/about_1.jpeg"
import about_2 from "../../static/about/about_2.jpeg"
import about_3 from "../../static/about/about_3.jpeg"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "2vh",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})
function About() {
  const { t } = useTranslation()
  const classes = useStyles()
  const images = [
    {
      original: about_1,
      description: "Makhtesh Ramon",
    },
    {
      original: about_2,
      description: "Dome of the Rock",
    },
    {
      original: about_3,
      description: "HaSha'on ‎square",
    },
  ]

  const bull = <span className={classes.bullet}>•</span>
  return (
    <Layout>
      <div style={{ marginBottom: "2vh" }}>
        <Typography variant="h4" gutterBottom>
          {t("about_significant_tour")}
        </Typography>
        <p>
          {t("about_explain")} <span style={{textDecorationLine:"underline", fontWeight:"bolder"}}> {t("about_explain_tourist")}</span>
          <br />
          {t("about_explain2")} 
          <br />
          {t("about_explain3")} 
          <br />
          {t("about_explain4")} 
        </p>
      </div>
      <div>
        <ImageGallery
          items={images}
          defaultImage={defaultImage}
          showBullets={true}
          showIndex={true}
          showThumbnails={false}
          lazyLoad={false}
          showPlayButton={false}
          slideInterval={5000}
          description
        />
      </div>
    </Layout>
  )
}

export default About

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
