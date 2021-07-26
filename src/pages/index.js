import React from "react"
import Header from "../components/header/Header"
import NavBarLinks from "../components/NavBarLinks/NavBarLinks"
import TitlebarImageList from "../components/images/TitlebarImageList"
import CardsCover from "../components/cards/CardsCover"
import Footer from "../components/footer/Footer"
import Container from "@material-ui/core/Container"
import "../styles/global.scss";

export default function Home() {

  return (
    <React.Fragment>
      <Header />
      <div className={"main-cover"}>
        <Container className={"main-cover2"} maxWidth="sm" style={{background: "aliceblue"}}>
          <NavBarLinks />
          <TitlebarImageList />
          <CardsCover />
        </Container>
      </div>

      <Footer />
    </React.Fragment>
  )
}
