import React from "react"
import "../styles/global.scss"
import BasicImageList from "../components/images/BasicImageList"
import Layout from "../components/layout/Layout"
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
import Typography from "@material-ui/core/Typography"
import ImageGallery from "react-image-gallery"
import abrahamic_religions from "../../static/home/abrahamic-religions.jpg"
import about_1 from "../../static/home/about_1.jpeg"
import defaultImage from "../../static/home/israel_flag.png"


export default function Home() {
  const {t} = useTranslation();
  const images = [
    {
      original: abrahamic_religions,
      description: "Pepe Tours",

    },
    {
      original: about_1,
      description: `Pepe Heiblum - ${t("about_explain_tourist")}`,
    },
  ];

  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  }
  return (
    <Layout>
      <div style={{ marginBottom: "2vh" }}>
        <Typography
          id={"title-content-home"}
          component="h3"
          variant="h2"
          align="center"
          gutterBottom
        >
          {t("home_page_title")}
        </Typography>
        <Typography variant="h5" align="center">
          {t("home_page_title_offer")}
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          align="center"
        >
          {t("home_page_title_offer1")}
          <br />
          {t("home_page_title_offer2")}
        </Typography>
      </div>
      <div id={"image_gallery_home"} style={{marginBottom:"2vh"}}>
        <ImageGallery
          items={images}
          defaultImage={defaultImage}
          showBullets={true}
          showIndex={true}
          showThumbnails={false}
          lazyLoad={true}
          showPlayButton={false}
          renderCustomControls={someComponent}
          description 
        />
      </div>
      <div>
        <BasicImageList />
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
