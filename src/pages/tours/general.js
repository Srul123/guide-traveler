import React from "react"
import Layout from "../../components/layout/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import ImageGallery from "react-image-gallery"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"
import cristianos_catolicos_1 from "../../../static/tours/cristianos_catolicos/cristianos_catolicos_1.jpeg"
import cristianos_catolicos_2 from "../../../static/tours/cristianos_catolicos/cristianos_catolicos_2.jpeg"
import cristianos_catolicos_3 from "../../../static/tours/cristianos_catolicos/cristianos_catolicos_3.jpeg"
import cristianos_catolicos_4 from "../../../static/tours/cristianos_catolicos/cristianos_catolicos_4.jpeg"
import cristianos_catolicos_5 from "../../../static/tours/cristianos_catolicos/cristianos_catolicos_5.jpeg"

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
export default function GeneralTours() {
  const { t } = useTranslation()
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  const images = [
    {
      original: cristianos_catolicos_1,
    },
    {
      original: cristianos_catolicos_2,
    },
    {
      original: cristianos_catolicos_3,
    },
    {
      original: cristianos_catolicos_4,
    },
    {
      original: cristianos_catolicos_5,
    },
  ]
  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>
  }
  return (
    <Layout>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {t("tours_general_title")}:
            </Typography>
            <p>
              {t("tours_general_explain")}
              <br />
              {t("tours_general_explain2")}
              <br />
              {t("tours_general_explain3")}
              <br />
              {t("tours_general_explain4")}
            </p>
          </CardContent>
        </Card>
      </div>
      <div>
        <ImageGallery
          items={images}
          showBullets={true}
          showIndex={true}
          showThumbnails={false}
          lazyLoad={true}
          showPlayButton={false}
          renderCustomControls={someComponent}
          slideInterval={5000}
        />
      </div>
    </Layout>
  )
}

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
