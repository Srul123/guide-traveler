import React from "react"
import "../styles/global.scss"
import BasicImageList from "../components/images/BasicImageList"
import CardsCover from "../components/cards/CardsCover"
import Layout from "../components/Layout"

export default function Home() {

  return (
    <Layout>
      <React.Fragment>
        <BasicImageList />
        <CardsCover />
      </React.Fragment>
    </Layout>
  )
}
