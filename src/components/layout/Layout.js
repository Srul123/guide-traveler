import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import CssBaseline from "@material-ui/core/CssBaseline"
import ButtonAppBar from "../nav-bar/ButtonAppBar"
import israel_flag from "../../../static/home/abrahamic-religions.jpg";
import "./Layout.scss"
import Helmet  from "react-helmet";

function Layout({ children }) {
  return (
    <>
      <Helmet title="Pepe Tours">
        <title>Pepe Tours</title>
        <meta charSet="UTF-8" />
        <meta name="image" content={israel_flag} />
        <meta name="description" content="Pepe Tours - Certified Tourist Guide in Israel, Guia de Turismo Certificado en Israel" />
        <meta name="keywords" content="Pepe Tours, Certified Tourist Guide, Guia de Turismo,Guia de Turismo Certificado, Israel" />
        <meta name="og:title" content="Pepe Tours" />
        <meta name="og:locale" content="es_ES" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:url" content="https://www.pepe-tours.com" />
        <link rel="canonical" href="https://www.pepe-tours.com" />
        <meta name="page-type" content="Tours Israel" />
        <meta name="audience" content="Everyone" />
        <meta property="og:image" content={israel_flag} />
      </Helmet>
      <div className={"main-cover"}>
        <Header />
        <ButtonAppBar />
        <Container id={"container"} maxWidth="md"
                   style={{ background: "aliceblue", paddingBottom: "2vh", marginTop: "2vh" }}>
          <CssBaseline />
          {/* content for each page */}
          {children}
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Layout


