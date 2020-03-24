import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Banner } from "../utils"
import Contact from "../components/Contact/Contact"
import StyledBg from "../components/StyledBg"

export default function contact({ data }) {
  return (
    <Layout>
      <SEO title="Contact" />
      <StyledBg img={data.contactBcg.childImageSharp.fluid}>
        <Banner title="contact us" subtitle="let's get in touch" />
      </StyledBg>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "bcg/contactBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
