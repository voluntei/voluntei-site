import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../assets/logo.svg";

const Header = ({ siteTitle }) => (
  <header

  >
    <div style={{ textAlign: 'center' }}>
      <Link style={{ display: 'inline-block' }}
        to="/"
      >
        <Logo style={{ width: '19rem' }} />
        <h1 style={{ fontSize: '4.8rem', textTransform: 'Uppercase' }}>
          Voluntei
      </h1>
        <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem' }}>
          conectando propósitos
      </h2>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
