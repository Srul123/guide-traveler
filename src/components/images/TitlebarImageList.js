import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ImageList from "@material-ui/core/ImageList"
import ImageListItem from "@material-ui/core/ImageListItem"
import ImageListItemBar from "@material-ui/core/ImageListItemBar"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import image_tel_aviv from "../../../static/tel_aviv.jpg";
import image_jerusalem from "../../../static/jerusalem.jpg";
import image_eilat from "../../../static/eilat.jpg";
import image_dead_sea from "../../../static/dead_sea.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}))


export default function TitlebarImageList() {
  const classes = useStyles()
  const itemData = [
    {
      img: image_tel_aviv,
      title: "Tel Aviv travel",
      author: "Pepe Heiblum"
    },
    {
      img: image_jerusalem,
      title: "Jerusalem travel",
      author: "Pepe Heiblum"
    }, {
      img: image_eilat,
      title: "Eilat - Red Sea travel",
      author: "Pepe Heiblum"
    }, {
      img: image_dead_sea,
      title: "Dead Sea travel",
      author: "Pepe Heiblum"
    },
  ]

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        {/*<ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>*/}
        {/*  <ListSubheader component="div">December</ListSubheader>*/}
        {/*</ImageListItem>*/}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  )
}