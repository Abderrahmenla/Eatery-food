import React from "react"
import { Link, graphql } from "gatsby"
import StyledBg from "../components/StyledBg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePageComponents/QuickInfo"
import Gallery from "../components/HomePageComponents/Gallery"
import Menu from "../components/HomePageComponents/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledBg img={data.contactBcg.childImageSharp.fluid} home="true">
      <Banner title="eatery" subtitle="55 main street- Santa Monica, CA">
        <Link to="/menu/" style={{ textDecoration: "none" }}>
          <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
        </Link>
      </Banner>
    </StyledBg>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "bcg/homeBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
