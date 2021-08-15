import React from "react"
import Layout from "../components/Layout"
import ContactUsForm from "../components/contact-us-form/ContactUsForm"

function Contact() {
  return (
    <Layout>
      <div>
        <h1>Contact us</h1>
        <ContactUsForm />
      </div>
    </Layout>
  )
}

export default Contact