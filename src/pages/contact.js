import React from "react"
import Layout from "../components/Layout"
import ContactUsForm from "../components/contact-us-form/ContactUsForm"
import ContactDetails from "../components/contact-details/ContactDetails"
import {graphql} from "gatsby";

function Contact() {
  return (
    <Layout>
      <div>
        <ContactDetails />
        <div style={{marginBottom:"2vh"}}></div>
        <ContactUsForm />
      </div>
    </Layout>
  )
}

export default Contact

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