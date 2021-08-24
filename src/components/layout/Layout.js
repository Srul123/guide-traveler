import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import CssBaseline from "@material-ui/core/CssBaseline"
import ButtonAppBar from "../nav-bar/ButtonAppBar"
import "./Layout.scss";

function Layout ({children}) {
    return (
      <div className={"main-cover"}>
        <Header />
        <ButtonAppBar />
        <Container id={"container"} maxWidth="sm" style={{background: "aliceblue", paddingBottom:"2vh", marginTop:"2vh"}}>
            <CssBaseline />
          {/* content for each page */}
            {children}
        </Container>
        <Footer />
      </div>
    )
}

export default Layout