import React from "react"
import Layout from "../../components/layout/Layout"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Card from "@material-ui/core/Card"
import ImageGallery from "react-image-gallery"
import defaultImage from "../../../static/home/israel_flag.png"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import cristianos_evangelicos_1 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_1.jpeg";
import cristianos_evangelicos_2 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_2.jpeg";
import cristianos_evangelicos_3 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_3.jpeg";
import cristianos_evangelicos_4 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_4.jpeg";
import cristianos_evangelicos_5 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_5.jpeg";
import cristianos_evangelicos_6 from "../../../static/tours/cristianos_evangelicos/cristianos_evangelicos_6.jpeg";

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

export default function TourEvangelical() {
  const {t} = useTranslation();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const images = [
    {
      original: cristianos_evangelicos_3,
    },
    {
      original: cristianos_evangelicos_2,
    },
    {
      original: cristianos_evangelicos_4,
    },
    {
      original: cristianos_evangelicos_5,
    },
    {
      original: cristianos_evangelicos_1,
    },
    {
      original: cristianos_evangelicos_6,
    }

  ];
  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  }
  return (
    <Layout>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {t("tours_evangelical_title")}:
            </Typography>
            <Typography variant="body2" component="h3">
              {t("tours_evangelical_explain")}
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