import React from "react"
import Layout from "../../components/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import ImageGallery from "react-image-gallery"
import defaultImage from "../../../static/home/israel_flag.png"
import bahim from "../../../static/about/haifa_bahim.jpg";
import holy_land_tour from "../../../static/about/holy_land_tour.jpg";
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";

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
      original: holy_land_tour,
      thumbnail: holy_land_tour
    },
    {
      original: bahim

    }

  ];
  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  }
  return (
    <Layout>
      <ImageGallery
        items={images}
        defaultImage={defaultImage}
        showBullets={true}
        showIndex={true}
        showThumbnails={false}
        lazyLoad={true}
        showPlayButton={false}
        renderCustomControls={someComponent}
      />
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
