import React from "react"
import "../styles/global.scss"
import BasicImageList from "../components/images/BasicImageList"
import Layout from "../components/Layout"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

export default function Home() {

  return (
    <Layout>
      <div style={{marginBottom:"2vh"}}>
          <Typography
            component="h3"
            variant="h2"
            align="center"
            gutterBottom
          >
            Your Guide to Explore ISRAEL
          </Typography>
          <Typography variant="h5" align="center">
            We are offering all kind of tours around Israel
            from one day tour up to two weeks and more, Catholic or jewish oriented
          </Typography>
      </div>
      <BasicImageList />
    </Layout>
  )
}
