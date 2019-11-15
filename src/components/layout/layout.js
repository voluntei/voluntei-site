import React from "react";
import PropTypes from "prop-types";
import "./reset.css";
import "./layout.css";
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Container style={{ maxWidth: 'initial', padding: '10rem' }}>
        <main style={{ position: 'relative', minHeight: '100vh' }}>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

