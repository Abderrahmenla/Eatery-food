import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
const StyledBg = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledBg)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  min-height: ${props => (props.home ? "calc(100vh - 55.78px)" : "60vh")};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
