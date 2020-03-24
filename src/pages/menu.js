import React from "react"
import { graphql } from "gatsby"
import StyledBg from "../components/StyledBg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../utils"

export default function menu({ data }) {
  return (
    <Layout>
      <SEO title="Menu" />
      <StyledBg img={data.contactBcg.childImageSharp.fluid}>
        <Banner title="our menu" subtitle="let's dig in" />
      </StyledBg>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "bcg/menuBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
