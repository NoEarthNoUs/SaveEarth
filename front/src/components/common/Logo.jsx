import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoEmoji = styled.div`
  font-size: ${(props) => props.theme.detailTitle};
`;
const Logo = () => {
  return (
    <LogoEmoji>
      <Link to='/'>🌏</Link>
    </LogoEmoji>
  );
};

export default Logo;
