import React from "react"
import Container from "@material-ui/core/Container"
import Header from "./header/Header"
import NavBar from "./nav-bar/navBar"
import Footer from "./footer/Footer"

function Layout ({children}) {
    return (
      <div className={"main-cover"}>
        <Header />
        <NavBar />
        <Container maxWidth="sm" style={{background: "aliceblue", paddingBottom:"2vh"}}>
          {/* content for each page */}
            {children}
        </Container>
        <Footer />
      </div>
    )
}

export default Layout