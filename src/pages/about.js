import React from "react"
import { graphql } from "gatsby"
import StyledBg from "../components/StyledBg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { styles, Title, Banner } from "../utils"
import styled from "styled-components"

export default function about({ data }) {
  return (
    <Layout>
      <SEO title="About" />
      <StyledBg img={data.contactBcg.childImageSharp.fluid}>
        <Banner title="about us" subtitle="a little about us" />
      </StyledBg>

      <QuickInfoWrapper>
        <Title message="Something" title="about us" />
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          blanditiis dolorum quae doloremque molestias expedita, eum voluptas
          distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
          quaerat facere voluptate earum. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Unde blanditiis dolorum quae doloremque
          molestias expedita, eum voluptas distinctio! Molestiae fuga temporibus
          nemo non vel mollitia nesciunt quaerat facere voluptate earum. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Unde blanditiis
          dolorum quae doloremque molestias expedita, eum voluptas distinctio!
          Molestiae fuga temporibus nemo non vel mollitia nesciunt quaerat
          facere voluptate earum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Unde blanditiis dolorum quae doloremque molestias
          expedita, eum voluptas distinctio! Molestiae fuga temporibus nemo non
          vel mollitia nesciunt quaerat facere voluptate earum. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Unde blanditiis dolorum
          quae doloremque molestias expedita, eum voluptas distinctio! Molestiae
          fuga temporibus nemo non vel mollitia nesciunt quaerat facere
          voluptate earum.
        </p>
      </QuickInfoWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "bcg/aboutBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
