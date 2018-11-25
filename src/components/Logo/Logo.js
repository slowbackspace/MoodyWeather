import React from 'react';
import styled from "styled-components";

const LogoStyled = styled.h1`
  margin: 0 auto;
  font-weight: 400;
  margin-bottom: -40px;
`

const Logo = () => {
  return (
    <LogoStyled>
      Moody Weather
    </LogoStyled>
  );
};
export default Logo;