import React from "react";
import PropTypes from "prop-types";
import "./reset.css";
import "./layout.css";
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    <>
      <Container style={{ maxHeight: '100vh', minHeight: '100vh', display: 'flex', padding: '0 5rem', maxWidth: '120rem' }}>
        <main style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>{children}</main>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

