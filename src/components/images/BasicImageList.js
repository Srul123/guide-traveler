import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image_israel_flag from "../../../static/home/israel_flag.png"
import image_tel_aviv from "../../../static/home/tel_aviv_city.jpg"
import image_jerusalem from "../../../static/home/jerusalem_city.jpg"
import image_eilat from "../../../static/home/eilat.jpg"
import image_dead_sea from "../../../static/home/dead_sea.jpg"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import ImageListItemBar from "@material-ui/core/ImageListItemBar"
import {useTranslation} from "gatsby-plugin-react-i18next";
import { Link, graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 700,
    height: 550,
  },
}));


export default function BasicImageList() {
  const {t} = useTranslation();
  const classes = useStyles();
  const itemDataTitle = [
    {
      img: image_israel_flag,
      title: t("image_tour_gallery_israel"),
      author: "Pepe Heiblum",
    },
    ];
  const itemData = [
    {
      img: image_tel_aviv,
      title: t("image_tour_gallery_tel_aviv"),
      author: "Pepe Heiblum",
    },
    {
      img: image_jerusalem,
      title: t("image_tour_gallery_jerusalem"),
      author: "Pepe Heiblum",
    }, {
      img: image_eilat,
      title: t("image_tour_gallery_eilat"),
      author: "Pepe Heiblum",
    }, {
      img: image_dead_sea,
      title: t("image_tour_gallery_dead_sea"),
      author: "Pepe Heiblum",
    },
  ];



  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={4} style={{height:"unset",marginBottom: "5px"}}>
          <ImageListItem key={itemDataTitle[0].img} cols={4}>
            <img style={{height:"inherit"}} src={itemDataTitle[0].img} alt={itemDataTitle[0].title} />
            <ImageListItemBar
              title={itemDataTitle[0].title}
              subtitle={<span>by: {itemDataTitle[0].author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${itemDataTitle[0].title}`} className={classes.icon}>
                  <Link style={{color:"ghostwhite", textDecoration:"none"}} to={"/about"} >
                    <InfoIcon />
                  </Link>
                </IconButton>
              }
            />
          </ImageListItem>
      </ImageList>
      <ImageList rowHeight={160} className={classes.imageList} cols={4} style={{height:"unset",marginBottom: "5px"}}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={2}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{t("image_tour_gallery_by")}: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <Link style={{color:"ghostwhite", textDecoration:"none"}} to={"/about"} >
                    <InfoIcon />
                  </Link>
                </IconButton>

              }
            />
          </ImageListItem>
        ))}
      </ImageList>
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