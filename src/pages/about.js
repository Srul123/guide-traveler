import React from "react"
import Layout from "../components/layout/Layout"
import Typography from "@material-ui/core/Typography"
import makeStyles from "@material-ui/core/styles/makeStyles"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import ImageGallery from "react-image-gallery"
import defaultImage from "../../static/home/israel_flag.png"
import holy_land_tour from "../../static/about/holy_land_tour.jpg";
import holy_land from "../../static/about/holy_land.jpg";


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
function About() {
  const {t} = useTranslation();
  const classes = useStyles();
  const images = [
    {
      original: holy_land
    },
    {
      original: holy_land_tour
    },

  ];

  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  };

  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Layout>
      <div style={{marginBottom:"2vh"}}>
        <ImageGallery
          items={images}
          defaultImage={defaultImage}
          showBullets={true}
          showIndex={true}
          showThumbnails={false}
          lazyLoad={true}
          showPlayButton={false}
          renderCustomControls={someComponent}
          // slideInterval = {"5000"}
        />
        <Typography variant="h4" gutterBottom>
          {t("about_significant_tour")}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {t("about_explain")}
        </Typography>
      </div>
    </Layout>
  )
}

export default About


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