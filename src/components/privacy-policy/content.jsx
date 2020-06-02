import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledPrivacyPolicyContent = styled.section`
  & h1 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  & h2 {
    font-family: "Asap";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 35px;
    line-height: 35px;

    @media (max-width: 768px) {
      font-size: 26px;
    }
  }

  & p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  & ol {
    padding-inline-start: inherit;
  }

  & ul {
    padding-inline-start: inherit;
  }

  & li {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding-top: 5px;
  }
`
const Content = () => (
  <Container>
    <StyledPrivacyPolicyContent>
      <Row>
        <Col className="mt-5" xs="12">
          <h1 className="pb-2"> Privacy Policy </h1>
          <p>
            This privacy notice discloses the privacy practices for
            (www.coast2coastrefrigeration.com).This privacy notice applies
            solely to information collected by this web site.It will notify you
            of the following:
          </p>
          <ol>
            <li>
              What personally identifiable information is collected from you
              through the web site, how it is used and with whom it may be
              shared.
            </li>
            <li>
              What choices are available to you regarding the use of your data.
            </li>
            <li>
              The security procedures in place to protect the misuse of your
              information.
            </li>
            <li> How you can correct any inaccuracies in the information. </li>
          </ol>
        </Col>
        <Col className="mt-3" xs="12">
          <h2 className="pb-2"> Information Collection, Use, and Sharing </h2>
          <p>
            We are the sole owners of the information collected on this site.We
            only have access to / collect information that you voluntarily give
            us via email or other direct contact from you.We will not sell or
            rent this information to anyone.
            <br />
            <br />
            We will use your information to respond to you, regarding the reason
            you contacted us.We will not share your information with any third
            party outside of our organization, other than as necessary to
            fulfill your request, e.g.to ship an order.
            <br />
            <br />
            Unless you ask us not to, we may contact you via email in the future
            to tell you about specials, new products or services, or changes to
            this privacy policy.
          </p>
        </Col>
        <Col className="mt-3" xs="12">
          <h2 className="pb-2">
            Your Access to and Control Over Information
          </h2>
          <p>
            You may opt out of any future contacts from us at any time.You can
            do the following at any time by contacting us via the email address
            or phone number given on our website:
          </p>
          <ul>
            <li> See what data we have about you, if any. </li>
            <li> Change / correct any data we have about you. </li>
            <li> Have us delete any data we have about you. </li>
            <li> Express any concern you have about our use of your data. </li>
          </ul>
        </Col>
        <Col className="mt-3" xs="12">
          <p>
            We take precautions to protect your information.When you submit
            sensitive information via the website, your information is protected
            both online and offline.
            <br />
            <br />
            While we use encryption to protect sensitive information transmitted
            online, we also protect your information offline.Only employees who
            need the information to perform a specific job( for example, billing
            or customer service) are granted access to personally identifiable
            information.The computers / servers in which we store personally
            identifiable information are kept in a secure environment.
            <br />
            <br />
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via our
            <Link className="px-1" to="/contact">
              Contact
            </Link>
            page.
          </p>
        </Col>
      </Row>
    </StyledPrivacyPolicyContent>
  </Container>
)
export default Content
