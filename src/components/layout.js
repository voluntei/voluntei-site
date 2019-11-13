/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="lg">
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        </footer>
    </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
