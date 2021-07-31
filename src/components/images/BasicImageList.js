import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image_israel_flag from "../../../static/israel_flag.png"
import image_tel_aviv from "../../../static/tel_aviv_city.jpg"
import image_jerusalem from "../../../static/jerusalem_city.jpg"
import image_eilat from "../../../static/eilat.jpg"
import image_dead_sea from "../../../static/dead_sea.jpg"
import IconButton from "@material-ui/core/IconButton"
import InfoIcon from "@material-ui/icons/Info"
import ImageListItemBar from "@material-ui/core/ImageListItemBar"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


export default function BasicImageList() {
  const classes = useStyles();
  const itemDataTitle = [
    {
      img: image_israel_flag,
      title: "Israel Tour",
      author: "Pepe Heiblum",
    },
    ];
  const itemData = [
    {
      img: image_tel_aviv,
      title: "Explore Tel Aviv",
      author: "Pepe Heiblum",
    },
    {
      img: image_jerusalem,
      title: "Explore Jerusalem",
      author: "Pepe Heiblum",
    }, {
      img: image_eilat,
      title: "Explore Eilat - Red Sea",
      author: "Pepe Heiblum",
    }, {
      img: image_dead_sea,
      title: "Explore Dead Sea",
      author: "Pepe Heiblum",
    },
  ];



  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={4} style={{height:"unset",marginBottom: "5px"}}>
          <ImageListItem key={itemDataTitle[0].img} cols={4}>
            <img src={itemDataTitle[0].img} alt={itemDataTitle[0].title} />
            <ImageListItemBar
              title={itemDataTitle[0].title}
              subtitle={<span>by: {itemDataTitle[0].author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${itemDataTitle[0].title}`} className={classes.icon}>
                  <InfoIcon />
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
  );
}