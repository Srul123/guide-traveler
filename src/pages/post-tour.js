import React from "react"
import Layout from "../components/layout/Layout"
import ContactUsForm from "../components/contact-us-form/ContactUsForm"

function PostTour() {
  return (
    <Layout>
      <div>
        <h1>Contact us</h1>
        <ContactUsForm />
      </div>
    </Layout>
  )
}

export default PostTour