import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Layout = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
