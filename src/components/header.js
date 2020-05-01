import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/aa-logo-2.png"

const HeaderWrapper = styled.div`
  background: #1a1d53;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1.5rem;
  a {
    color: #ecf0f1;
    text-decoration: none;
  }
  img {
    hieght: 25%;
    width: 25%;
    margin-bottom: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="ahmed logo" />
      </Link>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
