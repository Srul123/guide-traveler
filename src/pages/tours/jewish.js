import React from "react"
import Layout from "../../components/layout/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import ImageGallery from "react-image-gallery"
import defaultImage from "../../../static/home/israel_flag.png"
// import holy_land_tour from "../../../static/about/holy_land_tour.jpg";
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import jewish1 from "../../../static/tours/jewish/jewish1.jpeg"
import jewish2 from "../../../static/tours/jewish/jewish2.jpeg"
import jewish3 from "../../../static/tours/jewish/jewish3.jpeg"
import jewish4 from "../../../static/tours/jewish/jewish4.jpeg"
import jewish5 from "../../../static/tours/jewish/jewish5.jpeg"
import jewish6 from "../../../static/tours/jewish/jewish6.jpeg"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "2vh"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default  function TourJewish() {
  const {t} = useTranslation();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const images = [
    {
      original: jewish1,
    },
    {
      original: jewish2,
    },
    {
      original: jewish3,
    },
    {
      original: jewish4,
    },
    {
      original: jewish5,
    },
    {
      original: jewish6,
    }
  ];

  const someComponent = props => {
    return <div>{/* {props.someProps.objectKey} */}</div>;
  }
  return (
    <Layout>

      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {t("tours_jewish_title")}:
            </Typography>
            <Typography variant="body2" component="h3">
              {t("tours_jewish_explain")}:
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        <ImageGallery
          items={images}
          defaultImage={defaultImage}
          showBullets={true}
          showIndex={true}
          showThumbnails={false}
          lazyLoad={true}
          showPlayButton={false}
          renderCustomControls={someComponent}
          slideInterval = {"5000"}

        />
      </div>
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
