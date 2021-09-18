import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import image_tel_Aviv_Jaffa_sqr from "../../../static/home/Tel-Aviv_Jaffa_sqr.jpg"
import image_jerusalem from "../../../static/home/jerusalem.jpeg"
import image_eilat from "../../../static/home/eilat.jpg"
import image_dead_sea from "../../../static/home/dead_sea.jpg"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import ImageListItemBar from "@material-ui/core/ImageListItemBar"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { Link, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function BasicImageList() {
  const { t } = useTranslation()
  const classes = useStyles()

  const itemData = [
    {
      img: image_tel_Aviv_Jaffa_sqr,
      title: t("image_tour_gallery_tel_aviv"),
      author: "Pepe Heiblum",
    },
    {
      img: image_jerusalem,
      title: t("image_tour_gallery_jerusalem"),
      author: "Pepe Heiblum",
    },
    {
      img: image_eilat,
      title: t("image_tour_gallery_eilat"),
      author: "Pepe Heiblum",
    },
    {
      img: image_dead_sea,
      title: t("image_tour_gallery_dead_sea"),
      author: "Pepe Heiblum",
    },
  ]

  return (
    <div className={classes.root}>
      <Link
        style={{ color: "ghostwhite", textDecoration: "none" }}
        to={"/about"}
      >
        <ImageList
          rowHeight={180}
          className={classes.imageList}
          cols={4}
          style={{ height: "unset", marginBottom: "5px" }}
        >
          {itemData.map(item => (
            <ImageListItem key={item.img} cols={2}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <span>
                    {t("image_tour_gallery_by")}: {item.author}
                  </span>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Link>
    </div>
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
