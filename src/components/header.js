import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header

  >
    <div>
      <Link style={{ display: 'inline-block' }}
        to="/"
      >
        <h1 style={{ fontSize: '10rem' }}>
          Voluntei
      </h1>
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
