import React from "react"
import styled from "styled-components"
import { styles, Title } from "../../utils"

const Contact = () => {
  return (
    <ContactWrapper>
      <Title title="contact us" message="need help ?" />
      <div className="center">
        <form
          className="form"
          action="https://formspree.io/abderrahmen.lahmedigl@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="text"
              className="formControl"
              placeholder="abderrahmen lahmedi"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email "
              name="email"
              id="email"
              className="formControl"
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className="formControl"
              placeholder="deliver your message"
            />
          </div>
          <div>
            <input
              type="submit"
              style={{ margin: "2rem auto" }}
              value="submit here"
              className="submit"
            />
          </div>
        </form>
      </div>
    </ContactWrapper>
  )
}

export default Contact
const ContactWrapper = styled.section`
  margin-top: 2rem;  
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }
  }
  .formControl {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid #ececec;
    border-radius: 0.25rem;
  }
  .submit {
    display: block;
    color: ${styles.colors.mainBlack};
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
    font-weight: 700;
    ${styles.border({ color: `${styles.colors.mainBlack}` })};
    margin-bottom: 1rem;
    ${styles.transition({})};
    &:hover {
      background: ${styles.colors.mainBlack};
      color: ${styles.colors.mainYellow};
      cursor: pointer;
  }
`
